import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="flex flex-col w-full h-full" style={{backgroundImage: "url('src/assets/galaxy.png')"}}>
      <Navbar />
      <Home />
      <About />
      <Portfolio/>
      <Experience />
      <Contact />

      <SocialLinks />
    </div>
  );
};

export default App;
