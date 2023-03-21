import * as React from 'react';

import './LabeledInput.scss';

interface LabeledInputProps {
  inputId: string;
  inputName: string;
  inputType?: string;
  classes?: string;
  onChangeHandler: (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => void;
}

class LabeledInput extends React.Component<LabeledInputProps> {
  public static defaultProps = {
    inputType: 'text',
  };

  inputValue: string;

  constructor(props: LabeledInputProps) {
    super(props);

    this.inputValue = '';
  }

  render() {
    const { inputId, inputName, inputType, classes, onChangeHandler } =
      this.props;

    return (
      <div className={`${inputId}-wrapper input-wrapper ${classes}`}>
        <label htmlFor={inputId}>{inputName}</label>
        {inputType !== 'textarea' ? (
          <input
            type={`${inputType}`}
            id={`${inputId}`}
            onChange={(e) => {
              const inputNameArr = inputName.split(' ');
              inputNameArr[0] = inputNameArr[0].toLowerCase();
              onChangeHandler(e, `${inputNameArr.join('')}`);
            }}
          />
        ) : (
          <textarea></textarea>
        )}
      </div>
    );
  }
}

export default LabeledInput;
