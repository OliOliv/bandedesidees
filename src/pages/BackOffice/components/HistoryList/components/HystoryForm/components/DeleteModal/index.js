import React from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const DeleteModal = (props) => {
  const {
    className,
    toggleDeleteModal,
    chosenEvent,
    deleteModal,
    deleteEvent,
  } = props;

  return (
    <>
      <Modal
        isOpen={deleteModal}
        toggle={toggleDeleteModal}
        className={className}
        centered
      >
        <ModalHeader toggle={toggleDeleteModal}>Suppression</ModalHeader>
        <ModalBody>
          Supprimer la soirée {""}
          {chosenEvent && chosenEvent.nom} ?
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => deleteEvent(chosenEvent.idSoiree)}>
            Confirmer
          </Button>
          <Button onClick={toggleDeleteModal}>Annuler</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default DeleteModal;
