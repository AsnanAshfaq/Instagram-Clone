import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FormControl from "react-bootstrap/FormControl";
// drop zone
import { useDropzone } from "react-dropzone";
// firebase storage
import { storage } from "../../firebase";
// for previewing images in the modal
import Previews from "./Drag_and_Drop_Images";

function HeaderUploadModal({ open, setModal }) {
  const [show, setShow] = useState(open);
  const [Error, setError] = useState("");
  const [PostImage, setPostImage] = useState({});

  // modal handling 👺
  const handleClose = () => {
    setModal(false);
    setShow(false);
  };

  const UploadImage =  () => {

    if (Object.keys(PostImage).length > 0) {

      const uploadedImage = storage
        .ref(`images/${PostImage.name}`)
        .put(PostImage.file)
        .then(() => console.log("uplading file "));
    }
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        centered
        aria-labelledby="example-custom-modal-styling-title"
        dialogClassName="modal-90w"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Post
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ height: 400, width: "100%" }}>
            {/* caption with the image 👡🅰️ */}
            <FormControl
              className="w-100"
              placeholder="Image Caption"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            {/* drag and drop image 🔥*/}
            <div className="h-25">
              <Previews setImage={setPostImage} />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={UploadImage}>
            Post
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default HeaderUploadModal;
