import './App.css';
import CardPelicula from './componentes/CardPelicula'
import Navbar from './componentes/Navbar'
import HeroSlider from './componentes/HeroSlider';
import { PeliculasUpcoming } from './componentes/PeliculasUpcoming';

function App() {

  return (
    <div>
    <Navbar />
    <HeroSlider />
    <CardPelicula />
    <PeliculasUpcoming />
    </div>
  );
}

export default App;
