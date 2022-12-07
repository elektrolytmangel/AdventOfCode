import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Start from './components/Start/Start';
import DayOne from './components/DayOne/DayOne';
import Navbar from './components/Navbar/Navbar';
import DayTwo from './components/DayTwo/DayTwo';
import DaySix from './components/DayThree/DaySix';
import DaySeven from './components/DaySeven/DaySeven';

const App = () => {
  return (
    <div id="App" className="dark-mode">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/01" element={<DayOne />} />
          <Route path="/02" element={<DayTwo />} />
          <Route path="/06" element={<DaySix />} />
          <Route path="/07" element={<DaySeven />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;