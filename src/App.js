import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.js';
import Menu from './components/Menu.js';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Menu />
      <Routes>
        <Route></Route>
      </Routes>
    </div>
    
    </Router>
  );
}

export default App;
