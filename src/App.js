import Content from "./Content";
import Footer from "./Footer";
import Menu from "./Menu";
import Header from "./Header";
import Gallery from "./Gallery";
import Contact from "./Contact";
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  const path = "/alex.poda";
  return (
    <Router>
      <div className="App">
        <Menu path={path} />
        <Switch>
          <Route exact path={`${path}/`}>
            <Header />
            <Content />
          </Route>
          <Route path={`${path}/galeria`}>
            <Gallery />
          </Route>
          <Route path={`${path}/kontakt`}>
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
