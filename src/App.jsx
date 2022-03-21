import { useState } from "react";

import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import CardsSection from "./components/Cards/CardsSection";

// images

import about1 from "./images/description-img1.jpeg";
import about2 from "./images/description-img2.jpeg";
import PricingCardSection from "./components/Cards/PricingCardSection";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";


function App() {

  return (
    <div className="App">
      <Navbar />
      <Modal />
      <Hero />
      <About
        title="Your favourite genres in one event"
        direction="left"
        img={about1}
      >
        Featuring amazing artists such as <span>Katy Perry</span>,
        <span>David Guetta</span> , <span>Migos</span> and <span>more</span>. We
        also have amazing underground that will perform.
      </About>
      <CardsSection />
      <About title="Your wildest night" direction="right" img={about2} >
        A place to let <span>loose</span> and have <span>fun</span>. We all know you deserve a little
        break from the craziness of life, time to kick your stresses to the side
        and experience a night <span>you will tell your grandchildren about</span>.
      </About>
      <PricingCardSection />
    </div>
  );
}

export default App;
