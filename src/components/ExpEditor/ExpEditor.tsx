import * as React from 'react';

import Experience from '../../interfaces/Experience';
import ExpItem from './ExpItem';
import './ExpEditor.scss';

interface ExpEditorProps {
  experiences: { [key: string]: Experience };
  handleAddExperience: () => void;
  handleDeleteExperience: (id: string) => void;
  handleExperienceChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    id: string,
    field: string
  ) => void;
}

class ExpEditor extends React.Component<ExpEditorProps> {
  render() {
    const {
      experiences,
      handleAddExperience,
      handleDeleteExperience,
      handleExperienceChange,
    } = this.props;
    return (
      <div className='exp-editor'>
        {Object.keys(experiences).map((key) => (
          <ExpItem
            key={key}
            id={key}
            handleDelete={handleDeleteExperience}
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
