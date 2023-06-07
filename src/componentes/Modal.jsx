import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Modal({ abrirModal, setOpen, contenidoPelicula }) {

  return (
    <Transition.Root show={abrirModal} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
              enterTo="opacity-100 translate-y-0 md:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 md:scale-100"
              leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            >
              <Dialog.Panel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                  <button
                    type="button"
                    className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                    onClick={() => {
                      setOpen(false)
                    }}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                  <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                    <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                      <img src={`https://image.tmdb.org/t/p/original${contenidoPelicula.poster_path}`} alt={"imageAlt"} className="object-cover object-center" />
                    </div>
                    <div className="sm:col-span-8 lg:col-span-7 px-2">
                      <h2 className="text-2xl font-bold text-gray-900 sm:pr-12 text-center">{contenidoPelicula.original_title}</h2>
                      <section aria-labelledby="information-heading" className="mt-5">
                        <div className="flex mt-4 justify-between">
                          <p className="text-2xl text-gray-900">Estreno:  {contenidoPelicula.release_date}</p>
                          <p className="text-2xl text-gray-900 pr-12">{contenidoPelicula.adult ? "+18" : "ATP"}</p>
                        </div>
                        <div className="mt-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              {[0, 1, 2, 3, 4].map((rating) => (
                                <StarIcon
                                  key={rating}
                                  className={classNames(
                                    (contenidoPelicula.vote_average) / 2 > rating ? 'text-gray-900' : 'text-gray-200',
                                    'h-5 w-5 flex-shrink-0'
                                  )}
                                  aria-hidden="true"
                                />
                              ))}
                            </div>
                            <p className="sr-only">{(contenidoPelicula.vote_average) / 2} out of 5 stars</p>
                            <p className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                              {contenidoPelicula.vote_count} votos
                            </p>
                            <p className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                              {contenidoPelicula.popularity} popularidad
                            </p>
                          </div>
                        </div>
                      </section>
                      <section className="mt-7">
                        <p>{contenidoPelicula.overview}</p>
                      </section>
                      <section aria-labelledby="options-heading" className="mt-10">
                        <form>
                          <button type="submit" className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            Añadir a favoritos
                          </button>
                        </form>

                      </section>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
