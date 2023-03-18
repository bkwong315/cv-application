import * as React from 'react';

import './LabeledInput.scss';

interface LabeledInputProps {
  inputId: string;
  inputName: string;
  onChangeHandler: (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => void;
}

class LabeledInput extends React.Component<LabeledInputProps> {
  inputValue: string;

  constructor(props: LabeledInputProps) {
    super(props);

    this.inputValue = '';
  }

  render() {
    const { inputId, inputName, onChangeHandler } = this.props;

    return (
      <div className={`${inputId}-wrapper input-wrapper`}>
        <label htmlFor={inputId}>{inputName}</label>
        <input
          type='text'
          id={`${inputId}`}
          onChange={(e) => {
            const inputNameArr = inputName.split(' ');
            inputNameArr[0] = inputNameArr[0].toLowerCase();
            onChangeHandler(e, `${inputNameArr.join('')}`);
          }}
        />
      </div>
    );
  }
}

export default LabeledInput;
