import * as React from 'react';

import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className='layout'>
        <header>
          <h1>CV Builder</h1>
        </header>
        <main>
          <div className='cv-builder'></div>
          <div className='cv-preview'></div>
        </main>
        <footer>GitHub</footer>
      </div>
    );
  }
}

export default App;
