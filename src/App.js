import Content from "./Content";
import Footer from "./Footer";
import Menu from "./Menu";
import Header from "./Header";
import { useState } from "react";
function App() {
  return (
    <div className="App">
      <Menu />
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
