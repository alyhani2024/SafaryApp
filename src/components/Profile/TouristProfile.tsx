"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const TouristProfile = () => {
  const [touristData, setTouristData] = useState(null);
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [uploadMessage, setUploadMessage] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [errorMessages, setErrorMessages] = useState(null);

  useEffect(() => {
    const touristId = localStorage.getItem("touristloggedId");
    if (touristId) {
      axios
        .get(`${apiUrl}/Tourist/${touristId}`)
        .then((response) => {
          setTouristData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching the tourist data:", error);
        });
    }
  }, []);

  const handleImageUpload = async (event) => {
    event.preventDefault();
    const touristId = localStorage.getItem("touristloggedId");
    if (!image || !touristId) {
      console.error("No image selected or touristId not found in local storage.");
      return;
    }

    const formData = new FormData();
    formData.append("id", touristId);
    formData.append("image", image);

    try {
      const response = await axios.post(
        `${apiUrl}/Account/UploadTouristImage?id=${touristId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setTouristData((prevData) => ({
        ...prevData,
        imageUrl: response.data.imageUrl,
      }));
      setUploadMessage(response.data.message);
      setIsPopupOpen(false);
      setErrorMessages(null); // Clear any previous error messages
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

    const previewUrl = URL.createObjectURL(image);
    setPreviewUrl(previewUrl);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  if (!touristData) {
    return <div>Loading...</div>;
  }

  const imageUrl = previewUrl || touristData.imageUrl || "/images/placeholder.jpg"; // Replace with your placeholder image path

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
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">{touristData.fullName}</h1>
            <p className="text-gray-500 dark:text-gray-400">{touristData.email}</p>
          </div>
        </div>
        <div className="max-w-[600px] space-y-4 mx-auto">
          <p className="text-gray-600/strong dark:text-gray-400/strong">{touristData.bio || "No bio available"}</p>
        </div>
        <div className="grid w-full grid-cols-3 gap-2 max-w-xs items-center justify-center mx-auto">
          {/* Add any other dynamic content here */}
        </div>
        <button onClick={() => setIsPopupOpen(true)} className="mt-4 p-2 bg-blue-500 text-white rounded">Upload Image</button>
        {isPopupOpen && (
          <div className="popup">
            <div className="popup-inner">
              <h2>Upload Image</h2>
              <form onSubmit={handleImageUpload}>
                <input type="file" onChange={handleImageChange} className="file-input" />
                <button type="submit" className="mt-2 p-2 bg-green-500 text-white rounded">Upload</button>
                <button type="button" onClick={() => setIsPopupOpen(false)} className="mt-2 p-2 bg-red-500 text-white rounded">Cancel</button>
              </form>
              {errorMessages && (
                <div className="error-messages">
                  {errorMessages.map((error, index) => (
                    <p key={index}>{error}</p>
                  ))}
                </div>
              )}
              {uploadMessage && <p>{uploadMessage}</p>}
            </div>
          </div>
        )}
      </div>
      <style jsx>{`
        .file-input {
          display: block;
          width: 100%;
          margin-top: 10px;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
          cursor: pointer;
        }
        .popup {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          background: rgba(0, 0, 0, 0.5);
        }
        .popup-inner {
          background: white;
          padding: 20px;
          border-radius: 8px;
          text-align: center;
        }
        .error-messages {
          color: red;
          margin-top: 10px;
        }
      `}</style>
    </div>
  );
};

export default TouristProfile;
