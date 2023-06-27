import { Fragment, useEffect, useState } from 'react'
import { UserCircleIcon } from '@heroicons/react/24/outline'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import Input from './Input'
import logo from '../imagenes/popcorn_logo_6.png'
import logoDos from '../imagenes/popcorn_logo_5.png'
import { getPeliculas2 } from '../servicios/getPeliculas'

/* https://api.themoviedb.org/3/search/movie?query=fAst&api_key=2a765e8f852998a076d69380c3d13494&language=en-US&page=1 las palabras separadas en la busqueda se unen por un +*/

/* Conflictos con el buscador 
    Cuando se busca una pelicula el resultado obtenido es el anterior, ejemplo, busco rapido y furioso => respuesta vacia, ingreso una nueva busqueda => resultado de rapido y furioso
*/

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {

  let [peliculasBuscadas , setPeliculasBuscadas] = useState("");
  let [arrayPeliculas , setArrayPeliculas] = useState({});

  useEffect( () => {
    getPeliculas2(`https://api.themoviedb.org/3/search/movie?query=${peliculasBuscadas}&api_key=2a765e8f852998a076d69380c3d13494&language=en-US&page=1`).then(
      response => {
        setArrayPeliculas(response.results)
      }
      )
    }, [peliculasBuscadas]);
    
  return (
    <Disclosure as="nav" className="bg-gray-800">
      <>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-start ml-3 sm:items-stretch sm:justify-start">
              {<div className="flex flex-shrink-0 items-center">
                <img
                  className="block h-8 w-auto lg:hidden"
                  src={logo}
                  alt="Your Company"
                />
                <img
                  className="hidden h-8 w-auto lg:block"
                  src={logoDos}
                  alt="Your Company"
                />
              </div>}
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <Input setBuscador={setPeliculasBuscadas} />
              <Menu as="div" className="relative ml-3">
                <div>
                  <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="sr-only">Open user menu</span>
                    <UserCircleIcon className="h-8 w-8 text-white rounded-full" />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                        >
                          Mi Perfil
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                        >
                          Peliculas favoritas
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                        >
                          Cerrar sesion
                        </a>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>
      </>
    </Disclosure>
  )
}
