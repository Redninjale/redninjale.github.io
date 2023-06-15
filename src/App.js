import './App.css';
import Footer from './components/Footer';
import Header from './components/Header'
import Home from "./components/Home"
import Projects from './components/Projects'
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      {/* <About /> */}
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
