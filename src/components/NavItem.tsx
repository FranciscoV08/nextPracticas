// Se genera en el cliente 
'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

// TENDREMOS REQUISITOS PARA QUE NUESTRO LINK SE ARME
interface Props{
    path: string;
    icon: JSX.Element;
    title: string
}

export const NavItem = ({path, icon, title}:Props) => {
  
  // OBTENEMOS EL PATH
  const pathName = usePathname();

  return (
    <li>
      <Link
        href={path}
        className={`flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800 ${pathName === path ? 'bg-indigo-200': ''}`}
      >
        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
          <i className="bx bx-home">{icon}</i>
        </span>
        <span className="text-sm font-medium">{title}</span>
      </Link>
    </li>
  );
};
