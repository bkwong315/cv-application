import * as React from 'react';

import './LabeledInput.scss';

interface LabeledInputProps {
  inputId: string;
  inputName: string;
  inputType?: string;
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
    const {
      id = '',
      inputId,
      inputName,
      inputType,
      classes,
      onChangeHandler,
    } = this.props;

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
          />
        ) : (
          <textarea onChange={onChangeWrapper}></textarea>
        )}
      </div>
    );
  }
}

export default LabeledInput;
