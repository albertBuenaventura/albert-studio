import Image from "next/image";
import React from "react";
import Typewriter from "typewriter-effect";
import albertImage6 from "../../../public/images/AB6.svg";

export function Banner() {
  return (
    <div className="flex space-y-4 md:space-x-4 flex-col-reverse xmd:flex-row p-14">
      <div className="flex flex-col items-center xmd:items-start w-full mt-10 text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
        <div className="flex text-2xl sm:text-3xl space-x-2.5">
          <span className="text-black dark:text-white">Hey, I'm</span>
          <span className="text-orange-600 dark:text-orange-400 font-medium">
            Albert 👋🏻
          </span>
        </div>
        <div className="flex space-x-2.5 whitespace-nowrap">
          <span className="text-black dark:text-white">I'm a</span>
          <span className="text-orange-600 dark:text-orange-400">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Software engineer")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Web developer")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Fullstack developer")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Loving dad")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Software engineer")
                  .start();
              }}
            />
          </span>
        </div>
      </div>
      <Image
        className="w-auto h-[250px] xmd:h-[350px] lg:h-[380px] xl:h-[500px]"
        src={albertImage6}
        alt="albert buenaventura image"
        priority
      />
    </div>
  );
}
