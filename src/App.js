
import './App.css';
import About from './Components/about/About';
import Nav from './Components/nav/Nav';
import Contact from './Components/contact/Contact';
import Header from './Components/header/Header';
import Project from './Components/project/Project';
import Tech from './Components/Tech stack/Tech';
import Footer from './Components/footer/Footer';

  function App() {
    return (
      <div>
        <Header />
        <Nav />
        <About />
        <Tech />
        <Project />
        <Contact />
        <Footer />
      </div>
    );
  }

export default App;
