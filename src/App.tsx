import * as React from 'react';

import PersonalInfoEditor from './components/PersonalInfoEditor/PersonalInfoEditor';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className='layout'>
        <header>
          <h1>CV Builder</h1>
        </header>
        <main>
          <div className='cv-builder'>
            <h3>Personal Information</h3>
            <PersonalInfoEditor />
            <h3>Experience</h3>
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
