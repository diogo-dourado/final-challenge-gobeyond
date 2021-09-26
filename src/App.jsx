import {Helmet} from "react-helmet";
import "./app.scss";
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Go Beyond 2021 - Final Challenge - Corebiz</title>
      </Helmet>
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
