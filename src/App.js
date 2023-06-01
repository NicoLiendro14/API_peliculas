import './App.css';
import CardPelicula from './componentes/CardPelicula'
import Navbar from './componentes/Navbar'
import Modal from './componentes/Modal';

function App() {

  return (
    <div>
    <Navbar />
    {/* Este componente muestra las 20 peliculas en una grilla de grid */}
    <CardPelicula />
    </div>
  );
}

export default App;
