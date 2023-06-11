import axios from "axios";

export async function getPeliculas2(url){
    let peliculas = await axios.get(url);
    return peliculas.data;
}
