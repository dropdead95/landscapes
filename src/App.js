import { useState } from "react";
import "./App.css";
import main from "./assets/main.jpg";
import travel2 from "./assets/travel2.jpg";
import travel3 from "./assets/travel3.jpg";
import TopSection from "./components/TopSection";
import Slider from "./components/Slider";
import Navbar from "./components/Navbar";

const navbarLinks = [
  { url: "#", title: "Home" },
  { url: "#", title: "Trips" },
  { url: "#", title: "Rewards" },
];

function App() {
  return (
    <div className="App">
      <Navbar navbarLinks={navbarLinks} />
      <TopSection imageSrc={main} />
      <Slider
        imageSrc={travel2}
        title={"Be an explorer"}
        subtitle={"Our platform offers a wide variety of unique locations "}
      />
      <Slider
        imageSrc={travel3}
        title={"Memories for a lifetime"}
        subtitle={"Your dream vacation is only a few clicks away "}
        flipped={true}
      />
    </div>
  );
}

export default App;
