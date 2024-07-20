"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const TourguideProfile = () => {
  const [guideData, setGuideData] = useState(null);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [uploadMessage, setUploadMessage] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [errorMessages, setErrorMessages] = useState(null);

  useEffect(() => {
    const guideId = localStorage.getItem("guideId");
    if (guideId) {
      axios
        .get(`${apiUrl}/TourGuides/GetDetails?id=${guideId}`)
        .then((response) => {
          setGuideData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching the tour guide data:", error);
        });
    }
  }, []);

  const handleImageUpload = async (event) => {
    event.preventDefault();
    const guideId = localStorage.getItem("guideId");
    if (!image || !guideId) {
      console.error("No image selected or guideId not found in local storage.");
      return;
    }

    const formData = new FormData();
    formData.append("id", guideId);
    formData.append("image", image);

    try {
      const response = await axios.post(`${apiUrl}/Account/UploadTouristImage?id=${guideId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      setGuideData((prevData) => ({
        ...prevData,
        imageUrl: response.data.imageUrl,
      }));
      setUploadMessage(response.data.message);
      setIsPopupOpen(false);
      setErrorMessages(null); // Clear any previous error messages
      setImage(null);
      setImagePreview(null);
    } catch (error) {
      if (error.response) {
        const { data } = error.response;
        if (data.errors) {
          // Handle validation errors from the server
          setErrorMessages(Object.values(data.errors).flat());
        } else {
          // Handle other types of errors
          console.error("Error uploading the image:", error.response);
          setUploadMessage("Error uploading the image.");
        }
      } else {
        console.error("Error uploading the image:", error.message);
        setUploadMessage("Error uploading the image.");
      }
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  if (!guideData) {
    return <div>Loading...</div>;
  }

  const baseUrl = "http://safaryapi.runasp.net"; // Your API base URL
  const imageUrl = guideData.imageUrl
    ? (guideData.imageUrl.startsWith("http://") || guideData.imageUrl.startsWith("https://")
      ? guideData.imageUrl
      : `${apiUrl}/images/tourguides/${guideData.imageUrl}`)
    : '/images/placeholder.jpg'; // Replace with your placeholder image path

  return (
    <div className="py-12 lg:py-24" style={{ marginTop: "100px" }}>
      <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center md:gap-8 md:px-6 text-center">
        <div className="space-y-2">
          <div className="relative w-24 h-24 rounded-full overflow-hidden mx-auto">
            <img
              src={imageUrl}
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-1">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">{guideData.fullName}</h1>
            <p className="text-gray-500 dark:text-gray-400">{guideData.email}</p>
          </div>
        </div>
        <div className="max-w-[600px] space-y-4 mx-auto">
          <p className="text-gray-600/strong dark:text-gray-400/strong">{guideData.description}</p>
        </div>
        <div className="grid w-full grid-cols-3 gap-2 max-w-xs items-center justify-center mx-auto">
          {/* Add any other dynamic content here */}
        </div>
        <button onClick={() => setIsPopupOpen(true)} className="mt-4 p-2 bg-blue-500 text-white rounded">
          <i className="fa fa-plus mr-2"></i>Add Image
        </button>
        {isPopupOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg">
              <h2 className="text-xl mb-4">Upload Image</h2>
              <form onSubmit={handleImageUpload}>
                <input type="file" onChange={handleImageChange} className="mb-4" />
                {imagePreview && <img src={imagePreview} alt="Image Preview" className="mb-4 max-h-40" />}
                <div className="flex justify-end">
                  <button type="button" onClick={() => setIsPopupOpen(false)} className="mr-2 p-2 bg-red-500 text-white rounded">Cancel</button>
                  <button type="submit" className="p-2 bg-green-500 text-white rounded">Upload</button>
                </div>
              </form>
              {errorMessages && (
                <div className="error-messages mt-4">
                  {errorMessages.map((error, index) => (
                    <p key={index} className="text-red-500">{error}</p>
                  ))}
                </div>
              )}
              {uploadMessage && <p className="mt-4">{uploadMessage}</p>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TourguideProfile;
