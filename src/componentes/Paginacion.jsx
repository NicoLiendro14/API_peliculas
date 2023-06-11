import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

export default function Paginacion({ paginaActual, totalResultados, cambiarPeliculas }) {

  let marcado = "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600";

  let noMarcado = "text-white ring-1 ring-inset ring-gray-300 hover:bg-gray-50 hover:text-gray-700 focus:outline-offset-0";

  return (
    <div className="flex items-center justify-between bg-slate-700 rounded-sm px-4 py-3 mt-6 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <span
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-slate-700 px-4 py-2 text-sm font-medium text-white hover:text-gray-700 hover:bg-white cursor-pointer"
          onClick={() => cambiarPeliculas(-1)}
        >
          Previous
        </span>
        <span
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-slate-700 px-4 py-2 text-sm font-medium text-white hover:text-gray-700 hover:bg-white cursor-pointer"
          onClick={() => cambiarPeliculas(+1)}
        >
          Next
        </span>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-white">
            Showing <span className="font-medium">1</span> to <span className="font-medium">20</span> of{' '}
            <span className="font-medium">{totalResultados}</span> results
          </p>
        </div>
        <div>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <span
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-white hover:text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 cursor-pointer"
              onClick={() => cambiarPeliculas(-1)}
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </span>
            <span
              className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 ${marcado} cursor-pointer`}
            >
              {paginaActual}</span>
            <span
              className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${noMarcado} focus:z-20 cursor-pointer`}
              onClick={() => cambiarPeliculas(+1)}
            >
              {paginaActual? paginaActual + 1 : '...'}
            </span>
            <span
              className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${noMarcado} focus:z-20 cursor-pointer`}
              onClick={() => cambiarPeliculas(+2)}
            >
              {paginaActual? paginaActual + 2 : '...'}
            </span>
            <span className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${noMarcado} focus:z-20`}>
              ...
            </span>
            <span
              className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${noMarcado} focus:z-20 cursor-pointer`}
              onClick={() => cambiarPeliculas(+7)}
            >
              {paginaActual? paginaActual + 7 : '...'}
            </span>
            <span
              className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${noMarcado} focus:z-20 cursor-pointer`}
              onClick={() => cambiarPeliculas(+8)}
            >
              {paginaActual? paginaActual + 8 : '...'}
            </span>
            <span
              className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${noMarcado} focus:z-20 cursor-pointer`}
              onClick={() => cambiarPeliculas(+9)}
            >
              {paginaActual? paginaActual + 9 : '...'}
            </span>
            <span
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-white hover:text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0 focus:z-20 cursor-pointer"
              onClick={() => cambiarPeliculas(+1)}
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </span>
          </nav>
        </div>
      </div>
    </div>
  )
}
