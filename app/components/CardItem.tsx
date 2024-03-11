import React from "react";

interface Props {
  images: string;
  title: string;
}

export default function CardItem({ images, title }: Props) {
  return (
    <div>
      <div className="relative flex w-96 h-full overflow-hidden justify-around flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 -mt-6 h-100  rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
          <img className="m-auto" src={images} alt="img-blur-shadow" layout="fill" />
        </div>
        <div className="p-6">
          <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {title}
          </h5>
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            The place is close to Barceloneta Beach and bus stop just 2 min by
            walk and near to "Naviglio" where you can enjoy the main night life
            in Barcelona.
          </p>
        </div>
        <div className="p-6 pt-0">
          <button
            className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            Read More
          </button>
        </div>
      </div>

      <div className="w-full pt-5 px-4 mb-8 mx-auto ">
        <div className="text-sm text-gray-700 py-1">
          Made with{" "}
          <a
            className="text-gray-700 font-semibold"
            href="https://www.material-tailwind.com/docs/html/card?ref=tailwindcomponents"
            target="_blank"
          >
            Material Tailwind
          </a>{" "}
          by{" "}
          <a
            href="https://www.creative-tim.com?ref=tailwindcomponents"
            className="text-gray-700 font-semibold"
            target="_blank"
          >
            {" "}
            Creative Tim
          </a>
          .
        </div>
      </div>
    </div>
  );
}
