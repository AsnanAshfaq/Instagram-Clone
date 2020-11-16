import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FormControl from "react-bootstrap/FormControl";
// progress bar
import ProgressBar from "react-bootstrap/ProgressBar";
// firebase storage
import { storage, db } from "../../firebase";
import firebase from "firebase";
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
  const [Progress, setProgress] = useState(-1);
  const [PostImage, setPostImage] = useState({});
  const [PostText, setPostText] = useState("");

  // modal handling 👺
  const handleClose = () => {
    setModal(false);
    setShow(false);
  };

  const UploadPost = () => {
    // check if the user is not signed in show the error message

    if (Object.keys(user).length > 0) {
      if (Object.keys(PostImage).length > 0) {
        const uploadedImage = storage
          .ref(`images/${PostImage.name}`)
          .put(PostImage.file);
        uploadedImage.on(
          "state_changed",
          (snapshot) => {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            var progress = Number.parseInt(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );

            setProgress(progress);
          },
          (error) => {
            setError("Error while posting");
          },
          () => {
            // get the download URL:
            const downloadURL = "";
            uploadedImage.snapshot.ref
              .getDownloadURL()
              .then(function (downloadURL) {
                downloadURL = downloadURL;
                // data format for a document in firebase cloud store
                const PostData = {
                  // check if we have some PostText 👍
                  postText: PostText.length > 0 ? PostText : "",
                  likedBy: [],
                  imagePath: PostImage.name,
                  imageURL: downloadURL,
                  timeStamp: firebase.firestore.Timestamp.fromDate(new Date()),
                  uid: user.uid,
                };

                // add the data in firebase cloud store
                const PostRef = db.collection("posts").doc();
                PostRef.set(PostData).then(() => {
                  setError("Posted");
                  // close the modal
                  handleClose();
                });
              })
              .catch(error => setError("Error while posting"));
          }
        );
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
        <div className="container-fluid">
          {/* progress bar  */}
          {Progress > 0 && (
            <ProgressBar now={Progress} label={`${Progress}%`} />
          )}
        </div>
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
