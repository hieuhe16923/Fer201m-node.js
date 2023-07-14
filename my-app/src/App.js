import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Counter from './components/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Counter />} />
            <Route exact path="/Counter" element={<Counter />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
