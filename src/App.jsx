import { useState } from "react";
import netflixLogo from "./netflix.png";
import "./App.css";
import data from "./movies_rnexgr.json";

function App() {
  return (
    <>
      <header>
        <div>
          <img src={netflixLogo} className="logo" alt="Logo Netflix" />
        </div>
      </header>
      <div className="card">
        {data.map((category, index) => (
          <div key={index} className="category">
            <h2>{category.category}</h2>
            <div className="carousel-container">
              <div className="carousel">
                {category.images.map((image, imageIndex) => (
                  <img
                    key={imageIndex}
                    src={image}
                    alt={`Image ${imageIndex}`}
                    className="carousel-image"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
