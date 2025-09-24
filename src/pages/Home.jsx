import '../assets/global.css';
import '../assets/home.css';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import BrandMarquee from '../components/BrandMarquee';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <BrandMarquee />
      <Features />
      <Pricing />
      <Gallery />
      <Testimonials />
      <Newsletter />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;