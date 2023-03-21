import * as React from 'react';

import ExpItem from './ExpItem';
import './ExpEditor.scss';

class ExpEditor extends React.Component {
  render() {
    return (
      <div className='exp-editor'>
        <ExpItem />
        <button className='add-exp-btn'>Add Experience</button>
      </div>
    );
  }
}

export default ExpEditor;
