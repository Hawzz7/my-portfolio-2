import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Technology from "./components/Technology";
import Contact from "./components/Contact";

const App = () => {
  //put the style tag in the div tag to change the background image to custom one
  // style={{backgroundImage: "url('src/assets/galaxy.png')"}}
  return (
    <div 
    className="flex flex-col w-full h-full bg-black">
      <Navbar />
      <Home />
      <About />
      <Portfolio/>
      <Technology />
      <Contact />

      <SocialLinks />
    </div>
  );
};

export default App;
