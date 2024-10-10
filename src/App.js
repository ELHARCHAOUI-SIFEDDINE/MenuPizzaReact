import React from "react";
import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";
import "../src/index.css"; // Import CSS if needed

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
