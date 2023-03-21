import * as React from 'react';

import LabeledInput from '../LabeledInput/LabeledInput';
import './ExpItem.scss';

class ExpItem extends React.Component {
  render() {
    return (
      <div className='exp-item'>
        <LabeledInput
          inputId='job-title'
          inputName='Job Title'
          onChangeHandler={() => {}}
        />
        <LabeledInput
          inputId='company'
          inputName='Company'
          onChangeHandler={() => {}}
        />
        <LabeledInput
          inputId='start-date'
          inputName='Start Date'
          inputType='date'
          onChangeHandler={() => {}}
        />
        <LabeledInput
          inputId='end-date'
          inputName='End Date'
          inputType='date'
          onChangeHandler={() => {}}
        />
        <LabeledInput
          inputId='job-duties'
          inputName='Duties'
          inputType='textarea'
          onChangeHandler={() => {}}
          classes='span-full-width'
        />
      </div>
    );
  }
}

export default ExpItem;
