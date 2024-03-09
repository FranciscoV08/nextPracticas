export default function HomePage() {
  return (
    <div className="flex flex-col items-center h-screen justify-around ">
      <div className="text-center">
        <h1 className="text-gray-900 text-5xl font-bold mt-5">
          Bienvenido a <span className="text-indigo-500">"Anime end"</span>
        </h1>
        <p className="text-gray-400 font-thin text-2xl mt-5 ">
          Queremos ayudarte a que tengas tu propio orden
        </p>
      </div>

      <div className="">
        {/* <!-- component --> */}
        <div className=" flex justify-center items-center">
          <div className="grid grid-cols-6 max-w-5xl mx-8 rounded-xl bg-indigo-600">
            <div className="col-span-4">
              <h2 className="font-bold text-3xl text-white ml-10 mt-8">
                Fue creado por <span className="hover:text-4xl transition-all">Francisco</span>
              </h2>

              <p className="font-light text-white text-sm ml-10 mt-5">
                Puedes visitar el codigo completo en mi github tambien te animo a que me busques por <span className="text-blue-200">Linkeding</span> para conectar "Muchas gracias"
              </p>

              <button className="text-white font-semibold ml-10 mt-5 mb-8 group ">
                View the docs
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block h-6 w-6 group-hover:translate-x-2 transition delay-100 transition-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>

            {/* <div className="col-span-2 relative">
              <img
                src="https://www.digitalocean.com/_next/static/media/cloudJourneyImage.954519ea.svg"
                className="absolute bottom-0 right-0"
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
