import * as React from 'react';

import './LabeledInput.scss';

interface LabeledInputProps {
  inputId: string;
  inputName: string;
  inputType?: string;
  defaultValue?: string;
  classes?: string;
  id?: string;
  onChangeHandler:
    | ((
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        field: string
      ) => void)
    | ((
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        field: string,
        id: string
      ) => void);
}

const LabeledInput = (props: LabeledInputProps) => {
  let {
    id = '',
    inputId,
    inputName,
    inputType,
    defaultValue = '',
    classes,
    onChangeHandler,
  } = props;

  if (inputType === 'date' && defaultValue !== '') {
    defaultValue = new Date(defaultValue).toISOString().substring(0, 10);
  }

  const onChangeWrapper = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const inputNameArr = inputName.split(' ');
    inputNameArr[0] = inputNameArr[0].toLowerCase();
    onChangeHandler(e, `${inputNameArr.join('')}`, id);
  };

  return (
    <div className={`${inputId}-wrapper input-wrapper ${classes || ''}`}>
      <label htmlFor={inputId}>{inputName}</label>
      {inputType !== 'textarea' ? (
        <input
          type={`${inputType}`}
          id={`${inputId}`}
          onChange={onChangeWrapper}
          value={defaultValue}
        />
      ) : (
        <textarea onChange={onChangeWrapper} value={defaultValue}></textarea>
      )}
    </div>
  );
};

export default LabeledInput;
