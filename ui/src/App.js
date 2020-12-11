import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css';
import SpeechToTextContainer from './speechToText/SpeechToTextContainer';
// import SpeechToTextModalContainer from './speechToText/SpeechToTextModalContainer';

class App extends React.PureComponent {
    render() {
        return (
            <div>
                {/* <SpeechToTextModalContainer/> */}
                <SpeechToTextContainer />
            </div>
        );
    }
}

export default App;
