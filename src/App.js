import './App.css';
import Footer from './components/Footer';
import Header from './components/Header'
import Home from "./components/Home"
import Projects from './components/Projects'

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
