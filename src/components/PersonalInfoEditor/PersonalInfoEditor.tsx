import * as React from 'react';

import LabeledInput from '../LabeledInput/LabeledInput';
import PersonalInfo from '../../interfaces/PersonalInfo';
import './PersonalInfoEditor.scss';

interface PersonalInfoEditorProps {
  defaultValues: PersonalInfo;
  onChangeHandler: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: string
  ) => void;
}

const PersonalInfoEditor = (props: PersonalInfoEditorProps) => {
  const { defaultValues, onChangeHandler } = props;

  return (
    <div className='personal-info-editor'>
      <LabeledInput
        inputName='First Name'
        inputId='first-name'
        defaultValue={defaultValues.firstName}
        onChangeHandler={onChangeHandler}
      />
      <LabeledInput
        inputName='Last Name'
        inputId='last-name'
        defaultValue={defaultValues.lastName}
        onChangeHandler={onChangeHandler}
      />
      <LabeledInput
        inputName='Address'
        inputId='address'
        defaultValue={defaultValues.address}
        onChangeHandler={onChangeHandler}
      />
      <LabeledInput
        inputName='Email'
        inputId='email'
        defaultValue={defaultValues.email}
        onChangeHandler={onChangeHandler}
      />
      <LabeledInput
        inputName='Telephone'
        inputId='telephone-number'
        defaultValue={defaultValues.telephone}
        onChangeHandler={onChangeHandler}
      />
    </div>
  );
};

export default PersonalInfoEditor;
