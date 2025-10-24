import "./global.scss";
import Header from "./components/Header/index.jsx"
import About from "./components/About/index.jsx"
import ScrollProgress from "./components/Scrollbar";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
export default function Home() {
  return (
  <div>
    <div className="scroll-wrapper">
    <ScrollProgress/>
    <Header/>
    <About/>
    <Contact/>
    <Footer/>
    </div>

  </div>
  );
}
