let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
let noteContent = '', recognizing = false;

const speechStart = (callbackFn) => {
  recognition.start();
  recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    callbackFn(transcript, { isStarted: recognizing, action: 'speech-result' });
  };
};

export const speechToText = (options, callbackFn) => {
  recognition.continuous = options.continuous || false;
  recognition.interimResults = options.interimResults || false;
  if (recognizing) {
    recognition.stop();
    return;
  }
  speechStart(callbackFn);
  recognition.onstart = () => {
    recognizing = true;
    callbackFn('', { isStarted: recognizing, action: 'speech-start' });
  };
  recognition.onerror = () => {
    recognizing = false;
    recognition.stop();
    callbackFn('', { isStarted: recognizing, action: 'speech-error' });
  };
  recognition.onspeechend = () => {
    recognizing = false;
    recognition.stop();
    callbackFn('', { isStarted: recognizing, action: 'speech-end' });
  };
  recognition.onend = () => {
    recognizing = false;
    recognition.stop();
    callbackFn('', { isStarted: recognizing, action: 'speech-end' });
  }
};
