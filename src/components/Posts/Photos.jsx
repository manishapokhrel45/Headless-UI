import { useState } from "react";

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  function FetchPhotos() {
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
      .then((response) => response.json())
      .then((photos) => setPhotos(photos));
  }

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={FetchPhotos}
        >
          Fetch Photos
        </button>
        <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((photo) => (
            <li key={photo.id} className="bg-gray-100 p-4 rounded">
              <img
                src={photo.thumbnailUrl}
                alt={photo.title}
                className="w-full h-auto"
              />
              <div className="text-sm mt-2">{photo.title}</div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default Photos;
