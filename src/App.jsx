import './index.css';
import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from './components/Header';
import Section from './components/Section';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Collaboration from './components/Collaboration';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';



const App = () => {


  return (
    <>
      <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
        <Header />
        <Section />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  )
}

export default App;
