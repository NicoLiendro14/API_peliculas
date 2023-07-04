import { collection, getDocs, deleteDoc, doc } from "firebase/firestore"
import { db } from "../firebaseConfig/firebase"
import { useEffect, useState } from "react"
import { TrashIcon } from '@heroicons/react/24/outline'
import Swal from "sweetalert2"

export function Favoritos() {
    const [peliculasFavoritas, setPeliculasFavoritas] = useState()

    const favoritosCollection = collection(db, "favoritos")

    const getPeliculasFavoritas = async () => {
        const data = await getDocs(favoritosCollection)
        setPeliculasFavoritas(
            data.docs.map(doc => ({ ...doc.data(), id: doc.id }))
        )
    }

    function alertaBorrar(id) {
        Swal.fire({
            title: 'Eliminar de favoritos?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                borrarPeliculaFavorita(id)
                Swal.fire(
                    'Eliminada!',
                    'La pelicula fue removida exitosamente',
                    'success',
                )
            }
        })
    }

    useEffect(() => {
        getPeliculasFavoritas();
    }, [getPeliculasFavoritas])

    const borrarPeliculaFavorita = async (id) => {
        const pelicula = doc(db, "favoritos", id)
        await deleteDoc(pelicula)
        getPeliculasFavoritas()
    }


    return (
        <div className=" min-w-fit max-w-4xl mx-auto py-6">
            <h1 className="text-xl text-slate-50 font-serif font-medium tracking-wide pb-1 px-1 md:text-2xl lg:text-3xl lg:py-3 xl:text-4xl ml-5">Tus peliculas favoritas</h1>
            <ul className="divide-y divide-gray-100">
                {peliculasFavoritas?
                    peliculasFavoritas.map((pelicula) => (
                    <li key={pelicula.id} className="flex justify-between gap-x-6 py-3">
                        <div className="flex gap-x-4 ml-5">
                            <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={`https://image.tmdb.org/t/p/original${pelicula.img}`} alt="img-poster" />
                            <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold leading-6 text-gray-100">{pelicula.titulo}</p>
                                <p className="mt-1 truncate text-xs leading-5 text-gray-400">{pelicula.estreno}</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="hidden sm:flex sm:flex-col sm:items-end pr-4">
                                <p className="text-sm leading-6 text-gray-100">{pelicula.puntuacion}</p>
                                {pelicula.adultos ? (
                                    <p className="mt-1 text-xs leading-5 text-gray-400">
                                        +18
                                    </p>
                                ) : (
                                    <div className="mt-1 flex items-center gap-x-1.5">
                                        <p className="text-xs leading-5 text-gray-400">ATP</p>
                                    </div>
                                )}
                            </div>
                            <div className=" sm:flex sm:flex-col sm:items-end">
                                <TrashIcon className="h-5 w-5 text-sm leading-6 mr-5 cursor-pointer text-gray-100"
                                    onClick={() => alertaBorrar(pelicula.id)}
                                />
                            </div>

                        </div>
                    </li>
                )) :
                <div className="text-slate-50">cargando...</div>
                }
            </ul>
        </div>
    )
}
