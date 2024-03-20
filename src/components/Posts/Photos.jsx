import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const response = axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((response) => {
        setPhotos(response.data);
        console.log(response.data);
      })
      .catch(error);
    setError(error);
  }, []);

  return (
    <>
      <div className="container mx-auto px-4 py-8 flex justify-center">
        <ul className="mt-4 grid grid-cols-3 w-[75%] gap-8">
          {photos.map((photo) => (
            <li key={photo.id} className="bg-gray-100  rounded-lg">
              <Link to={`/photo/${photo.id}`}>
                <img
                  src={photo.images[1]}
                  alt={photo.title}
                  className="w-full  h-auto"
                />
                <div className="text-sm mt-2 py-2">{photo.title}</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default Photos;
