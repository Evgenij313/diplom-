import { useState } from "react";
import "./App.css";
import { Count } from "./components/Count/Count";
import { Header } from "./components/Header/Header";
import { Catalog } from "./components/Catalog/Catalog";
import { About } from "./components/About/About";
import { Selection } from "./components/Selection/Selection";
import { Team } from "./components/Team/Team";
import { Questions } from "./components/Questions/Questions";
import { Map } from "./components/Map/Map";
import { Insta } from "./components/Insta/Insta";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Catalog />
      <About />
      <Selection />
      <Team />
      <Questions />
      <Map />
      <Insta />
      <Footer />
    </div>
  );
}

export default App;
