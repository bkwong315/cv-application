import * as React from 'react';

import PersonalInfoEditor from './components/PersonalInfoEditor/PersonalInfoEditor';
import ExpEditor from './components/ExpEditor/ExpEditor';
import './App.scss';

interface AppState {
  personalInfo: {
    firstName: string;
    lastName: string;
    address: string;
    email: string;
    telephone: string;
  };
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
    };
  }

  handlePersonalInfoChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    this.setState((state) => ({
      ...state,
      personalInfo: { ...state.personalInfo, [field]: e.target.value },
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
            <ExpEditor />
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
