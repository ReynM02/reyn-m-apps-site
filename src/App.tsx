import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import Privacy from './pages/Privacy';
import Projects from './pages/Projects';

function App() {
  useEffect(() => { document.body.style.backgroundColor = 'var(--bg-color)' }, [])
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path='/' element={<>Home</>} />
          <Route path='/projects/*' element={<Projects />} />
          <Route path='/privacy' element={<Privacy />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
