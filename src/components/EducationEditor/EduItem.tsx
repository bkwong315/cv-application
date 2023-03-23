import * as React from 'react';

import LabeledInput from '../LabeledInput/LabeledInput';
import './EduItem.scss';

interface EduItemProps {
  id: string;
  handleDelete: (id: string) => void;
  onChangeHandler: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    id: string,
    field: string
  ) => void;
}

class EduItem extends React.Component<EduItemProps> {
  render() {
    const { id, handleDelete, onChangeHandler } = this.props;
    return (
      <div className='edu-item'>
        <LabeledInput
          id={id}
          inputId='institution'
          inputName='Institution'
          onChangeHandler={onChangeHandler}
        />
        <LabeledInput
          id={id}
          inputId='degree'
          inputName='Degree'
          onChangeHandler={onChangeHandler}
        />
        <LabeledInput
          id={id}
          inputId='subject'
          inputName='Subject'
          onChangeHandler={onChangeHandler}
        />
        <LabeledInput
          id={id}
          inputId='start-date'
          inputName='Start Date'
          inputType='date'
          onChangeHandler={onChangeHandler}
        />
        <LabeledInput
          id={id}
          inputId='end-date'
          inputName='End Date'
          inputType='date'
          onChangeHandler={onChangeHandler}
        />
        <button
          className='del-btn span-full-width'
          onClick={() => handleDelete(id)}>
          Delete
        </button>
      </div>
    );
  }
}

export default EduItem;
