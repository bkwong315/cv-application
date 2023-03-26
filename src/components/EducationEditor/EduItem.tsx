import * as React from 'react';

import LabeledInput from '../LabeledInput/LabeledInput';
import Education from '../../interfaces/Education';
import './EduItem.scss';

interface EduItemProps {
  id: string;
  defaultValues: Education;
  handleDelete: (id: string) => void;
  onChangeHandler: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    id: string,
    field: string
  ) => void;
}

class EduItem extends React.Component<EduItemProps> {
  render() {
    const { id, defaultValues, handleDelete, onChangeHandler } = this.props;
    return (
      <div className='edu-item'>
        <LabeledInput
          id={id}
          inputId='institution'
          inputName='Institution'
          defaultValue={defaultValues.institution}
          onChangeHandler={onChangeHandler}
        />
        <LabeledInput
          id={id}
          inputId='degree'
          inputName='Degree'
          defaultValue={defaultValues.degree}
          onChangeHandler={onChangeHandler}
        />
        <LabeledInput
          id={id}
          inputId='subject'
          inputName='Subject'
          defaultValue={defaultValues.subject}
          onChangeHandler={onChangeHandler}
        />
        <LabeledInput
          id={id}
          inputId='start-date'
          inputName='Start Date'
          inputType='date'
          defaultValue={defaultValues.startDate}
          onChangeHandler={onChangeHandler}
        />
        <LabeledInput
          id={id}
          inputId='end-date'
          inputName='End Date'
          inputType='date'
          defaultValue={defaultValues.endDate}
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
