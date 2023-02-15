import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setPreviewUrl(URL.createObjectURL(event.target.files[0]));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedFile) {
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);
    try {
      fetch("http://127.0.0.1:8001/image/", {
        method: "POST",
        body: formData,
        headers: {
          // "Content-Type": "multipart/form-data",
        },
      });
    } catch (error) {
      console.error(error);
    } finally {
      alert("생성완료!");
      navigate("/");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
      <img src={previewUrl} alt="Preview" />
      <button type="submit">Upload Image</button>
    </form>
  );
};

export default ImageUpload;
