import React from 'react';
import ModalPopup from './ModalPopup';
import { Button } from 'semantic-ui-react';

 class SpeechToTextModalContainer extends React.Component {
  constructor(){
    super();
    this.state = {
      open: false
    };
  }

  setOpen = (val) => {
    this.setState({open:val})
  }
  handleClosePopupClick = () => {
    this.setOpen(false)
  }
  render(){
    return(
      <div className="full-height">
         <Button onClick={() => this.setOpen(true)}>open</Button> 
                    <ModalPopup
                        title="Enter Comments"
                        onCloseModelClick={this.handleClosePopupClick}
                        className="advanceSearchModalWindow"
                        componentToRender={
                            <div>
                              <p>Popupiuiiuiouuuygyguydgyuegfyugeyuegfyuewgyugerywegryewgrygweryge</p>
                            </div>
                        }
                    />
                      </div>
    );
  }
}

export default SpeechToTextModalContainer;