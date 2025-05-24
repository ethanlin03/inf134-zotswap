import React, { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import ImageUploader from "../components/post/ImageUpload";
import FormField from "../components/post/FormField";
import SelectField from "../components/post/SelectField";

export default function PostPage() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files?.[0]) setSelectedImage(e.target.files[0]);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const categoryOptions = [
    { value: "electronics", label: "Electronics" },
    { value: "clothing", label: "Clothing" },
    { value: "furniture", label: "Furniture" }
  ];

  const conditionOptions = [
    { value: "new", label: "New" },
    { value: "like-new", label: "Like New" },
    { value: "good", label: "Good" },
    { value: "fair", label: "Fair" }
  ];

  return (
    <div className="min-h-screen p-6 bg-white flex flex-col items-center">
      <div className="w-full max-w-6xl">
        <div className="flex items-center mb-6">
          <FiArrowLeft
            size={26}
            className="cursor-pointer text-[#0064A4]"
            onClick={() => navigate(-1)}
          />
          <h1 className="ml-4 text-3xl font-bold text-[#0064A4]">
            Post an Item
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-36">
          <ImageUploader 
            selectedImage={selectedImage}
            onImageChange={handleImageChange}
          />

          <form onSubmit={handleSubmit} className="flex-1 space-y-8 max-w-2xl">
            <FormField
              label="Item Name"
              placeholder="Enter Item name"
              required
            />

            <div className="grid grid-cols-2 gap-4 w-4/5">
              <SelectField
                label="Category"
                options={categoryOptions}
                placeholder="Select Category"
                required
              />
              <SelectField
                label="Condition"
                options={conditionOptions}
                placeholder="Select Condition"
                required
              />
            </div>

            <FormField
              label="Size"
              placeholder="Enter Size"
              className="w-2/5"
            />

            <hr className="border-gray-300" />

            <FormField
              label="Item Price"
              placeholder="$0.00"
              className="w-2/5"
              required
            />

            <div className="flex justify-end pt-3">
              <button
                type="submit"
                className="px-8 py-3 rounded-lg text-white text-lg font-medium bg-gradient-to-r from-yellow-500 to-[#0064A4] hover:scale-95 active:scale-105 transition flex items-center justify-center gap-3"
              >
                Post Item
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}