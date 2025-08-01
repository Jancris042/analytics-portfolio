import logo from './logo.svg';
import './App.css';

import { MyProjects } from "./components/MyProjects";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import {Skills} from './components/Skills';
import Contact  from "./components/Contact";
import { Footer } from "./components/Footer";

import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from './logo.svg';
import './App.css';
function App() {
  return (
    <div className="App">
     <NavBar />
     <Banner />
     <Skills />
     <MyProjects />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
