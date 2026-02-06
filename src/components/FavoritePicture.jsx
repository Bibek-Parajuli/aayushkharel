import React from "react";
import CONFIG from "../config";
import Button from "./Button";

const FavoritePicture = ({onNext}) => {
  const images = CONFIG.favoritePictures;

  return (
    <div className="max-w-4xl mx-auto my-8 p-4">
      {/* Title */}
      <h2 className="text-2xl font-semibold text-center mb-6">
        Favorite Pictures
      </h2>

      {/* Images */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        {images.map((img, index) => (
          <div
            key={index}
            className="w-64 h-48 overflow-hidden rounded-xl shadow-lg"
          >
            <img
              src={img}
              alt={`favorite-${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <Button onClick={onNext}>Continue...</Button>
    </div>
  );
};

export default FavoritePicture;
