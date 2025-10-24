import "./global.scss";
import Header from "./components/Header/index.jsx"
import About from "./components/About/index.jsx"
import ScrollProgress from "./components/Scrollbar";
export default function Home() {
  return (
  <div>
    <div className="scroll-wrapper">
    <ScrollProgress/>
    <Header/>
    <About/>
    </div>

  </div>
  );
}
