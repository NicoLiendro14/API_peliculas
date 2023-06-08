export async function getPeliculas2( url ){
    let peliculas = await fetch(url);
    let response = await peliculas.json();
    return response ;
}