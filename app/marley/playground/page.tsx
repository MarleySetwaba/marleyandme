import { placeholder_img, playground_projects } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="max-w-7xl px-4 lg:px-8 py-10 lg:py-12 mx-auto">
      <div className="mb-6 sm:mb-10 max-w-2xl text-center mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-eerie_black sm:text-4xl ">
            Playground.
          </h1>
          <p className="mt-1 text-davys_gray ">
            Enjoy some templates, code snippets, projects etc.
          </p>
        </div>
      </div>
      <main className="flex">
        <div className="m-4   w-full">
          <div className="grid space-y-10 md:space-y-16">
            {playground_projects.map((i) => (
              <div className="grid grid-cols-1 md:grid-cols-2">
                <Image
                  src={i.image_url}
                  width={500}
                  height={500}
                  className="aspect-square max-h-[280px] rounded-lg"
                  alt="Image"
                />
                <div className="p-3">
                  <Link href={i.url}>
                    <h1 className="text-3xl mx-auto text-davys_gray-200 tracking-tight font-bold  hover:text-blue-600">
                      {i.title}
                    </h1>
                  </Link>
                  <p className="text-sm text-davys_gray-600 pt-3">
                    {i.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
