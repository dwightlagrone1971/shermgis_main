import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.js';
import Menu from './components/Menu.js';
import Footer from './components/Footer.js';
import Home from './views/Home.js';
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
    <div className="App">
      <Header />
      <Menu />
      <div className="route__menu">
        <Routes>
          <Route>
            <Route path='/' element={ <Home /> }></Route>
            <Route path='/downloads' element={ <Downloads /> }></Route>
            <Route path='/contacts' element={ <Contacts /> }></Route>
            <Route path='/graphics' element={ <Infographics /> }></Route>
            <Route path='/internal' element={ <Internal /> }></Route>
            <Route path='/maps' element={ <PDFMaps /> }></Route>
            <Route path='/about' element={ <About /> }></Route>
            <Route path='/gis' element={ <WhatIsGIS /> }></Route>
            <Route path='/gps' element={ <WhatIsGPS /> }></Route>       
          </Route>
        </Routes>
      </div>
      <Footer />
    </div>
    
    </Router>
  );
}

export default App;
