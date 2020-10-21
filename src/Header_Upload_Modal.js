import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function HeaderUploadModal({ open, setModal }) {
  const [show, setShow] = useState(open);

  const handleClose = () => {
    setModal(false);
    setShow(false);
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Post
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default HeaderUploadModal;
