import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';

import PersonalInfoEditor from './components/PersonalInfoEditor/PersonalInfoEditor';
import EducationEditor from './components/EducationEditor/EducationEditor';
import ExpEditor from './components/ExpEditor/ExpEditor';
import UserInfo from './interfaces/UserInfo';
import CVPreview from './components/CVPreview/CVPreview';
import templateData from './templateData';
import './App.scss';

class App extends React.Component<{}, UserInfo> {
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

  handleUseTemplate = () => {
    this.setState(templateData);
  };

  render() {
    return (
      <div className='layout'>
        <header>
          <h1>CV Builder</h1>
        </header>
        <main>
          <div className='cv-builder'>
            <div className='personal-info-container'>
              <h3>Personal Information</h3>
              <PersonalInfoEditor
                defaultValues={this.state.personalInfo}
                onChangeHandler={this.handlePersonalInfoChange}
              />
            </div>
            <div className='experience-container'>
              <h3>Experience</h3>
              <ExpEditor
                experiences={this.state.experience}
                handleAddExperience={this.handleAddExperience}
                handleDeleteExperience={this.handleDeleteExperience}
                handleExperienceChange={this.handleExperienceChange}
              />
            </div>
            <div className='education-container'>
              <h3>Education</h3>
              <EducationEditor
                education={this.state.education}
                addHandler={this.handleAddEducation}
                deleteHandler={this.handleDeleteEducation}
                onChangeHandler={this.handleEducationChange}
              />
            </div>
            <button className='template-btn' onClick={this.handleUseTemplate}>
              Use Template Data
            </button>
          </div>
          <CVPreview
            personalInfo={this.state.personalInfo}
            experience={this.state.experience}
            education={this.state.education}
          />
        </main>
        <footer>GitHub</footer>
      </div>
    );
  }
}

export default App;
