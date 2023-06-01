export async function getPeliculas (nroPagina) {
    let peliculas = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=2a765e8f852998a076d69380c3d13494&language=en-US&page=${nroPagina}`);
    let response = await peliculas.json();
    return response;
}