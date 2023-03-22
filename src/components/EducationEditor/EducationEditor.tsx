import * as React from 'react';

import './EducationEditor.scss';

class EducationEditor extends React.Component {
  render() {
    return (
      <div className='education-editor'>
        {Object.keys(education).map((key) => (
          <ExpItem
            key={key}
            id={key}
            handleDelete={handleDeleteEducation}
            onChangeHandler={handleEducationChange}
          />
        ))}
        <button className='add-exp-btn' onClick={handleAddEducation}>
          Add Education
        </button>
      </div>
    );
  }
}

export default EducationEditor;
