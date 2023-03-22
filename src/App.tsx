import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';

import PersonalInfoEditor from './components/PersonalInfoEditor/PersonalInfoEditor';
import ExpEditor from './components/ExpEditor/ExpEditor';
import Experience from './interfaces/Experience';
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
          </div>
          <div className='cv-preview'></div>
        </main>
        <footer>GitHub</footer>
      </div>
    );
  }
}

export default App;
