import React from "react";
import Routing from "./components/routing";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

import './App.css';

function App() {
  return (
    <div class="container-fluid">
      <Header />
      <Routing />
      <Footer />
    </div>
  );
}

export default App;
