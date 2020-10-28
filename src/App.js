import ImagePreview from "./components/ImagePreview";
//import Button from "./components/Button";
import { useState } from "react";
import { getRandomImage } from "./api/getRandomImage.js";
import "./App.css";

function App() {
  const [randomImage, setRandomImage] = useState(null);

  async function handleClick() {
    const randomImageResponse = await getRandomImage();
    setRandomImage(randomImageResponse);
  }

  return (
    <main>
      <button onClick={() => handleClick()}>Gib mir ein Bild!</button>
      {randomImage && (
      <ImagePreview
        id={randomImage.id}
        src={randomImage.urls.regular}
        alt={randomImage.alt_description}
        author={randomImage.user.name}
      />
      )}
    </main>
  );
}

export default App;
