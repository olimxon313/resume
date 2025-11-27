import "./global.scss";
import Header from "./components/Header/index.jsx"
import About from "./components/About/index.jsx"
import ScrollProgress from "./components/Scrollbar";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Player from "./components/Player";
export default function Home() {
  return (
  <div className="app-container">
    <div className="scroll-wrapper">
    <ScrollProgress/>
    <Header/>
    <About/>
    <Contact/>
    <Player/>
    <Footer/>
    </div>

  </div>
  );
}
