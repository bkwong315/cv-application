import * as React from 'react';

import Experience from '../../interfaces/Experience';
import ExpItem from './ExpItem';
import './ExpEditor.scss';

interface ExpEditorProps {
  experiences: { [key: string]: Experience };
  handleAddExperience: () => void;
  handleExperienceChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    id: string,
    field: string
  ) => void;
}

class ExpEditor extends React.Component<ExpEditorProps> {
  render() {
    const { experiences, handleAddExperience, handleExperienceChange } =
      this.props;
    return (
      <div className='exp-editor'>
        {Object.keys(experiences).map((key, idx) => (
          <ExpItem
            key={idx}
            id={key}
            onChangeHandler={handleExperienceChange}
          />
        ))}
        <button className='add-exp-btn' onClick={handleAddExperience}>
          Add Experience
        </button>
      </div>
    );
  }
}

export default ExpEditor;
