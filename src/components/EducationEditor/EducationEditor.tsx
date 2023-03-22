import * as React from 'react';

import Education from '../../interfaces/Education';
import EduItem from './EduItem';
import './EducationEditor.scss';

interface EducationEditorProps {
  education: { [key: string]: Education };
  addHandler: () => void;
  deleteHandler: (id: string) => void;
  onChangeHandler: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: string,
    id: string
  ) => void;
}

class EducationEditor extends React.Component<EducationEditorProps> {
  render() {
    const { education, addHandler, deleteHandler, onChangeHandler } =
      this.props;

    return (
      <div className='edu-editor'>
        {Object.keys(education).map((key) => (
          <EduItem
            key={key}
            id={key}
            handleDelete={deleteHandler}
            onChangeHandler={onChangeHandler}
          />
        ))}
        <button className='add-edu-btn' onClick={addHandler}>
          Add Education
        </button>
      </div>
    );
  }
}

export default EducationEditor;
