import * as React from 'react';

import LabeledInput from '../LabeledInput/LabeledInput';
import Experience from '../../interfaces/Experience';
import './ExpItem.scss';

interface ExpItemProps {
  id: string;
  defaultValues: Experience;
  handleDelete: (id: string) => void;
  onChangeHandler: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    id: string,
    field: string
  ) => void;
}

const ExpItem = (props: ExpItemProps) => {
  const { id, defaultValues, handleDelete, onChangeHandler } = props;

  return (
    <div className='exp-item'>
      <LabeledInput
        id={id}
        inputId='job-title'
        inputName='Job Title'
        defaultValue={defaultValues.jobTitle}
        onChangeHandler={onChangeHandler}
      />
      <LabeledInput
        id={id}
        inputId='company'
        inputName='Company'
        defaultValue={defaultValues.company}
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
      <LabeledInput
        id={id}
        inputId='job-duties'
        inputName='Duties'
        inputType='textarea'
        defaultValue={defaultValues.duties}
        onChangeHandler={onChangeHandler}
        classes='span-full-width'
      />
      <button
        className='del-btn span-full-width'
        onClick={() => handleDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default ExpItem;
