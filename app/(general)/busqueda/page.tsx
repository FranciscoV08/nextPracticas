
import Search from "@/app/components/Search";
import CardItem from '../../components/CardItem';
import { SimpleAnime } from '../../Animes/Interfaces/simple-anime';
import { AnimeResponse } from "@/app/Animes/Interfaces/anime-response";
import Image from "next/image";

// Hacemos el fetch           TECNICAMENTE aqui hay un promise que responda con la estructura 
const obtenerUrl = async () : Promise<SimpleAnime[]> =>{


  const datas: AnimeResponse = await fetch(" https://api.jikan.moe/v4/anime?q=Mushoku tensei&limit=5")
    .then( res => res.json() )
    const animes = datas.data.map( anime => ({
      images: anime.images.jpg.image_url,
      title: anime.title
    }))
    console.log(animes)
    return animes;

}

export default async function page() {

  const anime = await obtenerUrl();
  console.log(anime);
  // animes[0].
  // console.log(animes)
  return (
    <div className="">
      <div className="m-5">
        <Search />
      </div>

        <h1 className="text-gray-900 text-xl font-bold">BUSQUEDA</h1>
      <div className=" flex flex-wrap gap-5 text-center justify-center text-gray-800">
        


        {

          // FALTA INICIAR EL MAPEO 
          anime.map(anime => (
            <CardItem 
              key={anime.title}
              {...anime}

            /> 
            // <Image 
            //   key={anime.title}
            //   width={100}
            //   height={100}
            //   src={"https://cdn.myanimelist.net/images/anime/1530/117776.jpg"}
            //   alt={"mushoku"}


            // />
          ))
          
        }
      </div>
    </div>

  )
}
