import React, { useState } from 'react';
import { speechToText } from './utils/SpeechToTextUtil';

export class SpeechToTextContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      textValue: '',
      userDisplayMessage: 'Click on microphone and begin speaking',
      recordingStarted: false,
      fullTextValue: ''
    };
  }

  callbackFn = (textValue, additionalData = {}) => {
    this.setState({ textValue: textValue });
    // this.setState({ fullTextValue: fullTextValue + textValue });
    this.setState({ recordingStarted: additionalData.isStarted });
    if (additionalData.action) {
      switch (additionalData.action) {
        case 'speech-start':
          this.setState({ userDisplayMessage: 'Speak now' });
          break;
        case 'speech-result':
          this.setState({ userDisplayMessage: 'Continue Speaking' });
          break;
        case 'speech-end':
          this.setState({ userDisplayMessage: 'Speech has ended. Click on microphone and begin speaking again' });
          break;
        case 'speech-error':
          this.setState({ userDisplayMessage: 'Please authorize microphone permission and start again' });
          break;
        default:
          this.setState({ userDisplayMessage: 'Click on microphone and begin speaking' });
          break;
      }

    }
  }

  buttonCLickListener = () => {
    const options = { continuous: true, interimResults: true };
    speechToText(options, this.callbackFn);
  }

  render() {
    return (
      <div className="full-height">
        <p>{this.state.userDisplayMessage}</p>
        <textarea className="form-control text-area" name="body" value={this.state.textValue} /><br />
        <img src="../mic.png" className="img-mic" value='Start' onClick={this.buttonCLickListener} />
        <img src="../mic_effect.gif" className="mic-gif" style={this.state.recordingStarted == false ? { visibility: 'hidden' } : {}} width="10px" height="10px" />
      </div>
    );
  }
}


export default SpeechToTextContainer;
