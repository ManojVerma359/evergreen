import "./App.css";
import BackToTop from "./Components/BackToTop";
import Chicago from "./Components/Chicago";
import Contact from "./Components/Contact";
import Customer from "./Components/Customer";
import Footer from "./Components/Footer";
import Gallery from "./Components/Gallery";
import Happy from "./Components/Happy";
import Header from "./Components/Header";
import Service from "./Components/Service";
import Preloder from './Components/Preloder'
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  <script></script>;
  useEffect(() => {
    Aos.init({ duration: 1500, once: true });
  }, []);
  return (
    <div div className="overflow-hidden">
      <Preloder/>
    <BackToTop/>
      <Header />
      <Customer/>
      <Chicago/>
<Service/>
<Gallery/>
<Happy/>
<Contact/>
<Footer/>

    </div>
  );
}

export default App;
