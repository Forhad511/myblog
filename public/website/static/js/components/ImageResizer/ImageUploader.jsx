import React, { useRef, useState, useEffect } from "react";
import imageCompression from "browser-image-compression";
import { useDispatch } from "react-redux";
import { getProductsByImageAction } from "../../actions/productAction";
import { useHistory } from "react-router";
import Loading from "../Loading/Loading";

const ImageUploader = React.memo(function ImageUploader() {
  const ref = useRef(null);
  const [file, setFile] = useState(null);
  const productDispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const history = useHistory();
  useEffect(() => {
    if (file) {
      setLoading(true);
      productDispatch(
        getProductsByImageAction(
          "china",
          file,
          1,
          setLoading,
          setError,
          null,
          history
        )
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [file]);

  function blobToFile(theBlob, fileName) {
    return new File([theBlob], fileName);
  }

  /*
  function handleImageUpload(event) {
    var imageFile = event.target.files[0];
    if (!imageFile || !imageFile.name.match(/\.(jpg|jpeg|png)$/)) {
      return false;
    }
    var options = {
      maxSizeMB: 0.2,
      maxWidthOrHeight: 300,
      useWebWorker: true,
    };
    imageCompression(imageFile, options)
      .then(function (compressedFile) {
        return setFile(compressedFile);
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }
  */

  function handleImageUpload(event) {
    var imageFile = event.target.files[0];
    if (!imageFile || !imageFile.name.match(/\.(jpg|jpeg|png|PNG|JPG|JPEG)$/)) {
      return false;
    }
    let ext = imageFile.name.split(".")[1];
    var options = {
      maxSizeMB: 0.2,
      maxWidthOrHeight: 500,
      useWebWorker: true,
    };
    imageCompression(imageFile, options)
      .then(function (compressedFile) {
        let finalFile = blobToFile(compressedFile, `image.${ext}`);
        return setFile(finalFile);
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }

  return (
    <div className="imageUploaderContainer">
      <img
        className="arrowRight"
        onClick={() => {
          if (ref && ref.current) {
            ref.current.click();
          }
        }}
        style={{ width: "24px", marginLeft: "0.65rem", cursor: "pointer" }}
        src={require(`../../assets/icons/camera.svg`).default}
        alt=""
      />
      <label htmlFor="inputId" style={{ position: "fixed", top: "-100em" }}>
        Image Search
      </label>
      <input
        name="uploadImage"
        ref={ref}
        id="inputId"
        type="file"
        style={{ position: "fixed", top: "-100em" }}
        onChange={(e) => handleImageUpload(e)}
      ></input>
      {loading && (
        <div className="loadingContainer">
          <Loading />
        </div>
      )}
      {/* {file && (
        <img
          src={URL.createObjectURL(file)}
          alt=""
          style={{ width: "100px" }}
        />
      )} */}
    </div>
  );
});

export default ImageUploader;
