import { Button } from "@/components/Button";
import Image from "next/image";
import React from "react";
import Typewriter from "typewriter-effect";
import albertImage6 from "../../../public/images/AB6.svg";

export function Banner() {
  return (
    <div className="flex min-h-[100vh] items-center justify-center space-y-4 md:space-x-4 flex-col-reverse xmd:flex-row xmd:pt-[90px] p-4 md:p-14">
      <div className="flex flex-col items-center xmd:items-start w-full mt-10 xmd:mt-16 text-2xl md:text-5xl lg:text-6xl xl:text-7xl">
        <div className="flex text-xl xm:3xl space-x-2.5">
          <span className="text-black dark:text-white">Hey, I'm</span>
          <span className="text-orange-600 dark:text-orange-400 font-medium">
            Albert 👋🏻
          </span>
        </div>
        <div className="flex space-x-2.5 xmd:whitespace-nowrap">
          <span className="text-black dark:text-white w-200px">I'm a</span>
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
        <div className="text-center xmd:text-left w-11/12 md:w-5/6 mt-6 text-lg dark:text-white">
          I am a full-stack developer based in the Philippines. I’ll help you
          crafting digital dreams into reality, one line at a time.
        </div>
        <Button className="mt-4 text-base">Get in touch</Button>
      </div>
      <Image
        className="w-auto h-[250px] xmd:h-[350px] lg:h-[330px] xl:h-[450px] 2xl:h-[500px]"
        src={albertImage6}
        alt="albert buenaventura image"
        priority
      />
    </div>
  );
}
