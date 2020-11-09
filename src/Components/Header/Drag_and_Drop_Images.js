import React, { forwardRef, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

const Previews = ({ setImage }) => {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    multiple: "false",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const thumbs = files.map((file) => (
    <div className="row">
      <div className="col">
        <div
          className="m-0 p-0 mt-4 d-flex justify-content-center align-items-center w-100  flex-row"
          style={{
            height: 200,
          }}
        >
          <img
            src={file.preview}
            style={{
              overflow: "hidden",
              width: "auto",
              height: "100%",
            }}
            className="img-fluid"
            alt="Image"
          />
        </div>
      </div>
    </div>
  ));

  useEffect(() => {
    files.forEach((file) => {
      // setting file  in parent component
      setImage({
        blob: file.preview,
        name: file.name,
        file: file,
      });
      // Make sure to revoke the data uris to avoid memory leaks
      // URL.revokeObjectURL(file.preview);
    });
  }, [files]);

  return (
    <section className="container">
      <div {...getRootProps()} style={{ height: 150, width: "100%" }}>
        <input {...getInputProps()} />
        <p
          style={{ width: "inherit", height: "inherit" }}
          className="d-flex bg-light justify-content-center align-items-center"
        >
          Click or Drop Image Here
        </p>
      </div>

      <aside className="container-fluid ">{thumbs}</aside>
      {/* if the image is set then call "setSetImagePath" method to be used in Header_Upload_Modal component */}
    </section>
  );
};

export default Previews;
