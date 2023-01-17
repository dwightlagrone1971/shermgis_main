import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.js';
import Menu from './components/Menu.js';
import Routes1 from './components/Routes1.js';
import Footer from './components/Footer.js';
import Home from './views/Home.js';
import External from './views/External.js';
import Downloads from './views/Downloads.js';
import Contacts from './views/Contacts.js';
import Infographics from './views/Infographics.js';
import Internal from './views/Internal.js';
import PDFMaps from './views/PDFMaps.js';
import About from './views/About.js';
import WhatIsGIS from './views/WhatIsGIS.js';
import WhatIsGPS from './views/WhatIsGPS.js';

function App() {
  return (
    <Router>
    <div className="App lg:flex lg:flex-col lg:h-screen lg:justify-between">
      <Header />
      <Menu />
      <Routes1 />
      <Footer />
    </div>
    
    </Router>
  );
}

export default App;
