import { useState } from "react";

const App = () => {
  // Track the display of the images and message
  const [displayImage, setDisplayImage] = useState(null);
  const [displayImages, setDisplayImages] = useState([]);
  const [message, setMessage] = useState("");
  const [dogImage, setDogImage] = useState(null);

  // Fetch a single image
  const fetchSingleFile = async () => {
    try {
      const response = await fetch(`http://localhost:8000/fetch/single`);
      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      setDisplayImage(imageUrl);
    } catch (error) {
      console.error("Error fetching single file:", error);
    }
  };

  // Fetch multiple images
  const fetchMultipleFiles = async () => {
    try {
      const response = await fetch(`http://localhost:8000/fetch/multiple`);
      const files = await response.json();
      const imageUrls = files.map((file) => `http://localhost:8000/fetch/file/${file}`);
      const blobs = await Promise.all(
        imageUrls.map(async (url) => {
          const res = await fetch(url);
          const blob = await res.blob();
          return URL.createObjectURL(blob);
        })
      );
      setDisplayImages(blobs);
    } catch (error) {
      console.error("Error fetching multiple files:", error);
    }
  };

  // Fetch a random dog image
  const fetchDogImage = async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      setDogImage(data.message);
    } catch (error) {
      console.error("Error fetching dog image:", error);
    }
  };

  // Save Dog Image to server
  const saveDogImage = async () => {
    if (!dogImage) {
      setMessage("No dog image to save.");
      return;
    }
    try {
      const response = await fetch("http://localhost:8000/save/dog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ imageUrl: dogImage }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to save dog image");
      }

      setMessage("Dog image saved successfully!");
    } catch (error) {
      console.error("Error saving dog image:", error);
      setMessage("Error saving dog image");
    }
  };

 

  return (
    <div className="container">
      <h2>Fetch Single Image</h2>
      <button onClick={fetchSingleFile}>Fetch Single File</button>
      {displayImage && (
        <div>
          <img src={displayImage} alt="Single Display" style={{ width: "200px", marginTop: "10px" }} />
        </div>
      )}
      <h2>Fetch Multiple Images</h2>
      <button onClick={fetchMultipleFiles}>Fetch Multiple Files</button>
      <div className="images-container">
        {displayImages &&
          displayImages.length > 0 &&
          displayImages.map((imageUrl, index) => (
            <img key={index} src={imageUrl} alt={`Display Image ${index}`} style={{ marginTop: "10px" }} />
          ))}
      </div>

      <h2>Fetch Random Dog Image</h2>
      <button onClick={fetchDogImage}>Get Random Dog Image</button>
      {dogImage && (
        <div>
          <img src={dogImage} alt="Random Dog" style={{ width: "200px", marginTop: "10px" }} />
        </div>
      )}

      <p>{message}</p>
      <h2>Save Dog Image</h2>
      <button onClick={saveDogImage}>Save Dog Image to Server</button>

    </div>
  );
};

export default App;
