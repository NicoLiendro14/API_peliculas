import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { useRef } from 'react';
import { useNavigate } from "react-router-dom";

export default function Input() {
    let valorInput = useRef("");
    let navigate = useNavigate();

    function cambiarValor(e) {
        valorInput.current = e.target.value;
    }

    const obtenerValor = (event) => {
        if (event.key === 'Enter') {
            let pelicula = transformarAQuery(valorInput.current)
            event.target.value = ""
            navigate(`${pelicula}`)
        }
    }

    function transformarAQuery(pelicula) {
        let peliculasSeparada = pelicula.split(' ')
        let peliculasConSigno = peliculasSeparada.join('+')
        return peliculasConSigno
    }

    return (
        <div>
            <div className="relative rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
                    <span className="text-gray-500 w-4 h-4 sm:text-sm"><MagnifyingGlassIcon /></span>
                </div>
                <input
                    type="text"
                    name="pelicula"
                    id="pelicula"
                    className="block w-56 rounded-md border-0 py-1 pl-7 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Ingrese una pelicula"
                    onChange={cambiarValor}
                    onKeyDown={obtenerValor}
                />
            </div>
        </div>
    )
}
