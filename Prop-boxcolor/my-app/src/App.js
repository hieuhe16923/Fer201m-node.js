import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Boxcolor from './components/Boxcolor';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Boxcolor />} />
            <Route exact path="/Boxcolor" element={<Boxcolor />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
