import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Image = () => {
  const dayJson = useParams();
  const day = dayJson.day;
  const [imageURL, setImageURL] = useState();
  useEffect(() => {
    fetch(`http://localhost:8001/image/${day}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setImageURL("http://127.0.0.1:8001" + data["image_url"]);
        console.log(data["image_url"]);
      });
  }, [day]);
  return (
    <div>
      <img src={imageURL} />
      {imageURL}
    </div>
  );
};

export default Image;
