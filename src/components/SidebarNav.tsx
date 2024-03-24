import Link from "next/link";
import { NavItem } from './NavItem';
import { IoSearchSharp, IoEye, IoAlbums  } from "react-icons/io5";

export const SidebarNav = () => {

    // Creamos una estructura para nuestras NavItems
    // Esta tiene url, icono formado, titulo, subtitulo
    const menuItems = [
        {
            path: '/busqueda',
            icon: <IoSearchSharp size={20} />,
            title: 'Busqueda'
        },
        {
            path: '/mirando',
            icon: <IoEye size={20} />,
            title: 'Mirando'
        },
        {
            path: '/terminado',
            icon: <IoAlbums size={20} />,
            title: 'Terminado'
        }

    ]


  return (
    <>
      <div className="flex items-center justify-center h-20 shadow-md">
        {/* <IoSearchSharp className="text-gray-900"/> */}
        <Link href={'/hom'} className="text-2xl hover:text-3xl transition-all text-indigo-500">AnimeEnd</Link>
      </div>

      <ul className="flex flex-col py-4">

        {
            menuItems.map( items => (
                <NavItem 
                    key={items.path}
                    // Disperse toda la info de item a la estructura que le agregamos
                    {...items}
                />
            ))
        }
        {/* <li>
      <Link
        href="/mirando"
        className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
      >
        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
          <i className="bx bx-music"></i>
        </span>
        <span className="text-sm font-medium">Mirando</span>
      </Link>
    </li>
    <li>
      <Link
        href="/terminado"
        className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
      >
        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
          <i className="bx bx-drink"></i>
        </span>
        <span className="text-sm font-medium">Terminado</span>
      </Link>
    </li> */}
      </ul>
    </>
  );
};
