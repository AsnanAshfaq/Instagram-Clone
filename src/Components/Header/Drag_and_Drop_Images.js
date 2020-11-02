import React, { forwardRef,useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

const Previews = forwardRef((props,ref) => {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    multiple:'false',
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
    <div
      className="m-0 p-0 mt-4 d-flex justify-content-center align-items-center w-100  flex-row"
      style={{
        height: 200,
      }}
    >
      <img
        ref={ref}
        src={file.preview}
        style={{
          overflow: "hidden",
          width: "inherit",
          height:'inherit'
        }}
        className="img-fluid"
        alt="Image"
      />

    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks
    console.log(ref);
    files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <section className="container">
      <div {...getRootProps()} style={{ height: 150, width: "100%" }}>
        <input {...getInputProps()} />
        <p
          style={{ width: "inherit", height: "inherit" }}
          className="d-flex bg-light justify-content-center align-items-center"
        >
          Drop Image Here
        </p>
      </div>

      <aside className="container-fluid">{thumbs}</aside>
    </section>
  );
});

export default Previews;
