import React from "react";
import './App.scss';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './pages/home/home';
import Contact from './pages/contact/contact';
import About from "./components/AboutUs/About";
import Transformaing from "./pages/transforming/transforming";
import Nearby from "./pages/Nearby/Nearby";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/"} exact component={Home} />
        <Route path={"/Home"} exact component={Home} />
        <Route path={"/contact"} exact component={Contact} />
        <Route path={"/About"} exact component={About} />
        <Route path={"/Transformaing"} exact component={Transformaing} />
        <Route path={"/Nearby"} exact component={Nearby} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
