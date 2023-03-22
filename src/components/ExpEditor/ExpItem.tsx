import * as React from 'react';

import LabeledInput from '../LabeledInput/LabeledInput';
import './ExpItem.scss';

interface ExpItemProps {
  id: string;
  handleDelete: (id: string) => void;
  onChangeHandler: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    id: string,
    field: string
  ) => void;
}

class ExpItem extends React.Component<ExpItemProps> {
  render() {
    const { id, handleDelete, onChangeHandler } = this.props;
    return (
      <div className='exp-item'>
        <LabeledInput
          id={id}
          inputId='job-title'
          inputName='Job Title'
          onChangeHandler={onChangeHandler}
        />
        <LabeledInput
          id={id}
          inputId='company'
          inputName='Company'
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
        <LabeledInput
          id={id}
          inputId='job-duties'
          inputName='Duties'
          inputType='textarea'
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
  }
}

export default ExpItem;
