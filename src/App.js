import './App.css';
import Navbar from './componentes/Navbar'
import { Routes, Route } from 'react-router-dom';
import { Home } from './componentes/Home';
import { Favoritos } from './componentes/Favoritos';
import { PeliculasBuscadas } from './componentes/PeliculasBuscadas';
import { Footer } from './componentes/Footer';

function App() {

  return (
    <div className='bg-slate-800'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favoritos' element={<Favoritos />} />
        <Route path='/:id' element={<PeliculasBuscadas />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
