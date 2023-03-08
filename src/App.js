import './App.css';
import Footer from './components/Footer';
import Header from './components/Header'
import Home from "./components/Home"
import Work from './components/Work'
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
