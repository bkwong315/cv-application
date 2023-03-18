import * as React from 'react';

import './LabeledInput.scss';

interface LabeledInputProps {
  inputId: string;
  inputName: string;
}

class LabeledInput extends React.Component<LabeledInputProps> {
  render() {
    return (
      <div className={`${this.props.inputId}-wrapper input-wrapper`}>
        <label htmlFor={this.props.inputId}>{this.props.inputName}</label>
        <input type='text' id={`${this.props.inputId}`} />
      </div>
    );
  }
}

export default LabeledInput;
