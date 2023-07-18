import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Trivia from './components/trivia';
import Math from './components/math';
import Date from './components/date/date';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='navbar'>
          <Navbar />
        </div>
        <Routes>
          <Route path="/math" element={ <Math/> } />
          <Route path="/trivia" element={ <Trivia/> } />
          <Route path="/date" element={ <Date/> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
