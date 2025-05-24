import React, { useRef } from "react";
import { FiPlus } from "react-icons/fi";

export default function ImageUploader({ selectedImage, onImageChange }) {
  const fileInputRef = useRef(null);

  const handleImageClick = () => fileInputRef.current?.click();

  return (
    <div
      onClick={handleImageClick}
      className="relative w-80 h-80 border-4 border-[#0064A4] rounded-2xl flex items-center justify-center cursor-pointer overflow-hidden"
    >
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={onImageChange}
        className="hidden"
      />

      {selectedImage ? (
        <img
          src={URL.createObjectURL(selectedImage)}
          alt="Preview"
          className="object-cover w-full h-full"
        />
      ) : (
        <div className="flex flex-col items-center text-[#0064A4]">
          <FiPlus size={80} className="mb-3" />
          <span className="text-lg font-medium flex items-center">
            add image
          </span>
        </div>
      )}
    </div>
  );
}