import * as React from 'react';

import ExpItem from './ExpItem';
import './ExpEditor.scss';

interface ExpEditorProps {
  handleAddExperience: () => void;
}

class ExpEditor extends React.Component<ExpEditorProps> {
  render() {
    const { handleAddExperience } = this.props;
    return (
      <div className='exp-editor'>
        <ExpItem />
        <button className='add-exp-btn' onClick={handleAddExperience}>
          Add Experience
        </button>
      </div>
    );
  }
}

export default ExpEditor;
