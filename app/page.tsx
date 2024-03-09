import Image from "next/image";
import { redirect } from "next/navigation";

export default function Home() {
  // Redireccionamos a la pagina de HOMEPAGE
  redirect('/hom')

  return (
    <h1>Hola mundo</h1>
  );
}
