import './App.css'
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
