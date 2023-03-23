import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';

import PersonalInfoEditor from './components/PersonalInfoEditor/PersonalInfoEditor';
import EducationEditor from './components/EducationEditor/EducationEditor';
import ExpEditor from './components/ExpEditor/ExpEditor';
import Experience from './interfaces/Experience';
import Education from './interfaces/Education';
import CVPreview from './components/CVPreview/CVPreview';
import './App.scss';

interface AppState {
  personalInfo: {
    firstName: string;
    lastName: string;
    address: string;
    email: string;
    telephone: string;
  };
  experience: { [key: string]: Experience };
  education: { [key: string]: Education };
}

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      personalInfo: {
        firstName: '',
        lastName: '',
        address: '',
        email: '',
        telephone: '',
      },
      experience: {},
      education: {},
    };
  }

  handlePersonalInfoChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: string
  ) => {
    this.setState((state) => ({
      ...state,
      personalInfo: { ...state.personalInfo, [field]: e.target.value },
    }));
  };

  handleAddExperience = () => {
    this.setState((state) => ({
      ...state,
      experience: {
        ...state.experience,
        [uuidv4()]: {
          jobTitle: '',
          company: '',
          startDate: '',
          endDate: '',
          duties: '',
        },
      },
    }));
  };

  handleDeleteExperience = (id: string) => {
    this.setState((state) => {
      let mutatedState = Object.assign({}, state);
      delete mutatedState.experience[id];

      return mutatedState;
    });
  };

  handleExperienceChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: string,
    id: string
  ) => {
    this.setState((state) => ({
      ...state,
      experience: {
        ...state.experience,
        [id]: {
          ...state.experience[id],
          [field]: e.target.value,
        },
      },
    }));
  };

  handleAddEducation = () => {
    this.setState((state) => ({
      ...state,
      education: {
        ...state.education,
        [uuidv4()]: {
          institution: '',
          degree: '',
          subject: '',
          startDate: '',
          endDate: '',
        },
      },
    }));
  };

  handleDeleteEducation = (id: string) => {
    this.setState((state) => {
      let mutatedState = Object.assign({}, state);
      delete mutatedState.education[id];

      return mutatedState;
    });
  };

  handleEducationChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: string,
    id: string
  ) => {
    this.setState((state) => ({
      ...state,
      education: {
        ...state.education,
        [id]: {
          ...state.education[id],
          [field]: e.target.value,
        },
      },
    }));
  };

  render() {
    return (
      <div className='layout'>
        <header>
          <h1>CV Builder</h1>
        </header>
        <main>
          <div className='cv-builder'>
            <h3>Personal Information</h3>
            <PersonalInfoEditor
              onChangeHandler={this.handlePersonalInfoChange}
            />
            <h3>Experience</h3>
            <ExpEditor
              experiences={this.state.experience}
              handleAddExperience={this.handleAddExperience}
              handleDeleteExperience={this.handleDeleteExperience}
              handleExperienceChange={this.handleExperienceChange}
            />
            <h3>Education</h3>
            <EducationEditor
              education={this.state.education}
              addHandler={this.handleAddEducation}
              deleteHandler={this.handleDeleteEducation}
              onChangeHandler={this.handleEducationChange}
            />
          </div>
          <div className='cv-preview'>
            <CVPreview />
          </div>
        </main>
        <footer>GitHub</footer>
      </div>
    );
  }
}

export default App;
