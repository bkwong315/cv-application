import * as React from 'react';

import LabeledInput from '../LabeledInput/LabeledInput';
import './PersonalInfoEditor.scss';

interface PersonalInfoEditorProps {
  onChangeHandler: (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => void;
}

class PersonalInfoEditor extends React.Component<PersonalInfoEditorProps> {
  render() {
    return (
      <div className='personal-info-editor'>
        <LabeledInput
          inputName='First Name'
          inputId='first-name'
          onChangeHandler={this.props.onChangeHandler}
        />
        <LabeledInput
          inputName='Last Name'
          inputId='last-name'
          onChangeHandler={this.props.onChangeHandler}
        />
        <LabeledInput
          inputName='Address'
          inputId='address'
          onChangeHandler={this.props.onChangeHandler}
        />
        <LabeledInput
          inputName='Email'
          inputId='email'
          onChangeHandler={this.props.onChangeHandler}
        />
        <LabeledInput
          inputName='Telephone'
          inputId='telephone-number'
          onChangeHandler={this.props.onChangeHandler}
        />
      </div>
    );
  }
}

export default PersonalInfoEditor;
