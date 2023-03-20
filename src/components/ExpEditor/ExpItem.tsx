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
          onChangeHandler={() => {}}
        />
        <LabeledInput
          inputId='end-date'
          inputName='End Date'
          onChangeHandler={() => {}}
        />
        <LabeledInput
          inputId='job-duties'
          inputName='Duties'
          onChangeHandler={() => {}}
        />
      </div>
    );
  }
}

export default ExpItem;
