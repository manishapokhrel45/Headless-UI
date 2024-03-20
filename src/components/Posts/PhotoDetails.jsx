import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const PhotoDetails = () => {
  const [photoDetail, setPhotoDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((response) => {
        setPhotoDetail(response.data);
      });
  }, [id]);

  return (
    <div className="flex justify-center  px-4 py-8">
      <div className="max-w-md bg-purple-100 rounded-lg  ">
        <img
          className="w-full h-60 "
          src={photoDetail.images}
          alt={photoDetail.title}
        />

        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-3">{photoDetail.title}</div>
          <p className="text-gray-900">{photoDetail.description}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetails;
