import Search from "@/src/components/Search";
import CardItem from '../../../src/components/CardItem';
import { SimpleAnime } from '../../../src/animes/Interfaces/simple-anime';
import { AnimeResponse } from "@/src/animes/Interfaces/anime-response";
import Image from "next/image";
import { stringify } from "querystring";

  /*
  Hacemos el fetch           TECNICAMENTE aqui hay un promise que responda con la estructura 
 */
  const obtenerUrl = async (name:string) : Promise<SimpleAnime[]> =>{
  
    const datas: AnimeResponse = await fetch(` https://api.jikan.moe/v4/anime?q=${name}&limit=5`)
    .then( res => res.json() )
    const animes = datas.data.map( anime => ({
      images: anime.images.jpg.image_url,
      title: anime.title
    }))

    return animes;
  }

  export default async function page() {

  const anime = await obtenerUrl('Tate no yusha');

  return (
    <div className="">
      <div className="m-5">
        <Search />
      </div>
        <h1 className="mb-5 text-gray-900 text-4xl text-center font-bold">BUSQUEDA</h1>

      <div className=" flex flex-wrap gap-5 text-center justify-center text-gray-800">
        { 
          anime.map(anime => (
            <CardItem 
              key={anime.title}
              //Se distribuye toda la info 
              {...anime}

            />
           ))
        }
      </div>
    </div>

  )
}
