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
    <PeliculasUpcoming url="https://api.themoviedb.org/3/movie/upcoming?api_key=2a765e8f852998a076d69380c3d13494&language=en-US&page=1" seccion={"Proximos Estrenos"}/>
    <PeliculasUpcoming url="https://api.themoviedb.org/3/movie/popular?api_key=2a765e8f852998a076d69380c3d13494&language=en-US&page=1" seccion={"Mas populares"}/>
    </div>
  );
}

export default App;
