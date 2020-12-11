/*
 * Copyright (c) 2016, ABS and/or its affiliates. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 *
 *   - Redistributions of source code must retain the above copyright
 *     notice, this list of conditions and the following disclaimer.
 *
 *   - Redistributions in binary form must reproduce the above copyright
 *     notice, this list of conditions and the following disclaimer in the
 *     documentation and/or other materials provided with the distribution.
 *
 *   - Neither the name of Oracle or the names of its
 *     contributors may be used to endorse or promote products derived
 *     from this software without specific prior written permission.
 *
 */
import React from 'react';
import { Modal, Button } from 'semantic-ui-react';
//import { ProgressLoader } from '../../sharedExport';
// import WorkRequestConstants, { AssignWorkConstants } from '../../../utils/WorkRequestConstants';

const NestedModal = (props) => {
  const { titleStyle, title, onCloseNestedModelClick, componentToRender, dimmer, modalSize, showLoader } = props;
  return (
    <Modal
      dimmer={dimmer || false}
      open
      className="nestedModalWindow"
      size={modalSize ? modalSize : "small"}
    >
      <Modal.Header className={`${titleStyle} subModalHeader`}> {title}
        <Button className="cornerAlign" circular icon="remove" title="Close" onClick={onCloseNestedModelClick} />
      </Modal.Header>
      <Modal.Content scrolling>
        {/* {showLoader ? <ProgressLoader /> : null} */}
        {componentToRender}
      </Modal.Content>
    </Modal >
  );
};

/**
 * triggerComponent :- will be used to open modal on action passed in trigger component(ie button click, input field click)
 * trigger={<Button onClick={this.handleOpen}>Show Modal</Button>}
 * 
 */



const ModalPopup = (props) => {
  const { showModalLoaderForNestedModal, title, titleStyle, onCloseModelClick, additionalIcon, componentToRender, showModalAction, modalActions, nestedModalProps, scrollableContent, scrolling, noCloseBtn, modalSize, noScroll, triggerComponent, ...rest } = props;
  return (
    <Modal
      closeOnEscape={false}
      closeOnRootNodeClick={false}
      size={modalSize ? modalSize : "large"}
      open
      {...(triggerComponent && { trigger: triggerComponent })}

      {...rest}
    >
      <Modal.Header className={`${titleStyle} modalHeader`} > {title}
        {!noCloseBtn ? <Button data={props.data} className="cornerAlign" circular icon="remove" title="Close" onClick={onCloseModelClick} /> : ''}
        {additionalIcon || undefined}
      </Modal.Header>
      <Modal.Content scrolling={noScroll ? false : true} >
        {/* {props.showLoader ? <ProgressLoader /> : componentToRender} */}
      </Modal.Content>
      {(showModalAction && modalActions) ?
        <Modal.Actions>
          {modalActions}
        </Modal.Actions> : null
      }
      {
        nestedModalProps &&
        <NestedModal {...nestedModalProps}
          showLoader={showModalLoaderForNestedModal}
          titleStyle={titleStyle} />
      }
    </Modal>
  );
};


export default ModalPopup;
