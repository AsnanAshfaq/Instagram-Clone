import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FormControl from "react-bootstrap/FormControl";
// firebase storage
import { storage, db } from "../../firebase";
// for previewing images in the modal
import Previews from "./Drag_and_Drop_Images";
// global state
import { Context } from "../../Store/StateProvider";

function HeaderUploadModal({ open, setModal }) {
  // global state
  const [{ user }, dispatch] = Context();
  // local states 🥘
  const [show, setShow] = useState(open);
  const [Error, setError] = useState("");
  const [PostImage, setPostImage] = useState({});
  const [PostText, setPostText] = useState("");

  // modal handling 👺
  const handleClose = () => {
    setModal(false);
    setShow(false);
  };

  const UploadPost = () => {
    // check if the user is not signed in show the error message

    if (user.length > 0) {
      if (Object.keys(PostImage).length > 0) {
        // check if we have some PostText 👍
        if (PostText.length > 0) {
        }
        const uploadedImage = storage
          .ref(`images/${PostImage.name}`)
          .put(PostImage.file)
          .then(() => console.log("uplading file "));
      } else {
        setError("Please Upload Image");
      }
    } else {
      setError("Please Sign in first ");
    }
  };

  useEffect(() => {
    setError("");
  }, [PostImage]);

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
              value={PostText}
              onChange={(e) => setPostText(e.target.value)}
            />
            {/* drag and drop image 🔥*/}
            <div className="h-25">
              <Previews setImage={setPostImage} />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          {/* showing error  */}
          {Error.length > 0 && (
            <div className="d-flex">
              <p className="text-danger">{Error}</p>
            </div>
          )}
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={UploadPost}>
            Post
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default HeaderUploadModal;
