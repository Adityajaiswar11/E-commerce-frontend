import React, { useState } from 'react';
import { FiUploadCloud } from 'react-icons/fi';
import { Button } from '../../../components/core/Button';
import { Input } from '../../../components/core/Input';

export const CreateProduct = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    desc: '',
    stock: '',
    price: '',
    image: null
  });

  const [previewUrl, setPreviewUrl] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const basicInputs = [
    { label: "Product Name", name: "name", placeholder: "e.g. Wireless Headphones" },
    { label: "Title", name: "title", placeholder: "SEO friendly title" }
  ];

  const numericInputs = [
    { label: "Price ($)", name: "price", type: "number", placeholder: "0.00", min: "0", step: "0.01" },
    { label: "Stock", name: "stock", type: "number", placeholder: "Qty", min: "0" }
  ];


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, image: file }));
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting:", formData);
    // Future API integration here
    onClose();
  };

  return (
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column: Basic Info */}
          <div className="space-y-5">
            {basicInputs.map((input) => (
              <Input
                key={input.name}
                {...input}
                value={formData[input.name]}
                onChange={handleChange}
                required
              />
            ))}

            <div className="grid grid-cols-2 gap-4">
              {numericInputs.map((input) => (
                <Input
                  key={input.name}
                  {...input}
                  value={formData[input.name]}
                  onChange={handleChange}
                  required
                />
              ))}
            </div>
          </div>

          {/* Right Column: Image & Desc */}
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">Product Image</label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-700 border-dashed rounded-xl bg-[#0f172a] hover:border-indigo-500 transition-colors relative group">
                <div className="space-y-2 text-center">
                  {previewUrl ? (
                    <div className="relative hover:opacity-80 transition-opacity">
                      <img src={previewUrl} alt="Preview" className="mx-auto h-32 w-full object-cover rounded-lg" />
                    </div>
                  ) : (
                    <FiUploadCloud className="mx-auto h-12 w-12 text-gray-500 group-hover:text-indigo-400 transition-colors" />
                  )}
                  <div className="flex text-sm text-gray-400 justify-center">
                    <label className="relative cursor-pointer rounded-md font-medium text-indigo-400 hover:text-indigo-300 focus-within:outline-none">
                      <span>Upload a file</span>
                      <input 
                        type="file" 
                        name="image"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="sr-only" 
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">
                    PNG, JPG, WEBP up to 5MB
                  </p>
                </div>
              </div>
            </div>

            <Input 
              type="textarea"
              label="Description" 
              name="desc" 
              value={formData.desc} 
              onChange={handleChange} 
              rows={3} 
              placeholder="Detailed product description..." 
              required 
            />
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="pt-6 border-t border-gray-800 flex justify-end gap-3 mt-6">
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" variant="primary">
            Save Product
          </Button>
        </div>
      </form>
  );
};
