import React from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import EventForm from "src/pages/BackOffice/components/Form/components/EventForm";

const UpdateModal = (props) => {
  const {
    className,
    toggleUpdateModal,
    chosenEvent,
    updateModal,
    updateEvent,
  } = props;

  return (
    <>
      <Modal
        isOpen={updateModal}
        toggle={toggleUpdateModal}
        className={className}
        centered
      >
        <ModalHeader toggle={toggleUpdateModal}>Modifier</ModalHeader>
        <ModalBody>
          <EventForm event={chosenEvent}></EventForm>
        </ModalBody>
      </Modal>
    </>
  );
};

export default UpdateModal;
