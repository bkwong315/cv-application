import * as React from 'react';

import LabeledInput from '../LabeledInput/LabeledInput';
import './PersonalInfoEditor.scss';

class PersonalInfoEditor extends React.Component {
  render() {
    return (
      <div className='personal-info-editor'>
        <LabeledInput inputName='First Name' inputId='first-name' />
        <LabeledInput inputName='Last Name' inputId='last-name' />
        <LabeledInput inputName='Address' inputId='address' />
        <LabeledInput inputName='Email' inputId='email' />
        <LabeledInput inputName='Telephone' inputId='telephone-number' />
      </div>
    );
  }
}

export default PersonalInfoEditor;
