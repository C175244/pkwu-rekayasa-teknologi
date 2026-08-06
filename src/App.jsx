import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import CaraBudidaya from './CaraBudidaya';
import ModalHasil from './ModalHasil';
import Pengolahan from './Pengolahan';
import Footer from './Footer';

function App() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <main>
        <Hero />
        <About />
        <CaraBudidaya />
        <ModalHasil />
        <Pengolahan />
      </main>
      <Footer />
    </div>
  );
}

export default App;
