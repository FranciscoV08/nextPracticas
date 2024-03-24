import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  images: string;
  title: string;
}

export default function CardItem({ images, title }: Props) {
  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="bg-white rounded overflow-hidden shadow-lg">
        <div className="flex flex-col items-center text-center p-6 bg-gray-800 border-b">
          {/* (<svg aria-hidden="true" role="img" className="h-24 w-24 text-white rounded-full mx-auto" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"><path fill="currentColor" d="M172 120a44 44 0 1 1-44-44a44 44 0 0 1 44 44Zm60 8A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-153.8 58.4a81.3 81.3 0 0 1 24.5-23a59.7 59.7 0 0 0 82.6 0a81.3 81.3 0 0 1 24.5 23A87.6 87.6 0 0 0 216 128Z"></path></svg> */}

          <Image 
          className="w-4/6"
          src={images} 
          height="100" 
          width="100"
          alt={title}/>

          <p className="pt-2 text-lg font-semibold text-gray-50">{title}</p>
        </div>
        <div className="border-b">
          <Link legacyBehavior  href="/hom">
            <a className="px-4 py-2 hover:bg-gray-100 flex">
              <div className="text-green-600">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <div className="pl-3">
                <p className="text-sm font-medium text-gray-800 leading-none">
                  Campaigns
                </p>
                <p className="text-xs text-gray-500">View your campaigns</p>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
