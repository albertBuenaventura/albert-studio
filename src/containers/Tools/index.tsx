import { Card } from "@/components/Card";
import Title from "@/components/Page/Title";
import React from "react";
import { Tool } from "./Tool";
import ReactLogo from "../../../public/images/react.svg";
import NextJsLogo from "../../../public/images/nextjs.svg";
import LaravelLogo from "../../../public/images/laravel.svg";
import ExpressLogo from "../../../public/images/express.svg";
import NodeLogo from "../../../public/images/node.svg";
import TailwindLogo from "../../../public/images/tailwind.svg";
import PrismaLogo from "../../../public/images/prisma.svg";
import AmplifyLogo from "../../../public/images/amplify.svg";
import NetlifyLogo from "../../../public/images/netlify.svg";

export function Tools() {
  return (
    <div id="tools" className="flex flex-col mt-16 w-full h-full space-y-8">
      <Title text="Tools" />
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <Tool text="React" svg={<ReactLogo />} />
        <Tool text="NextJS" svg={<NextJsLogo />} />
        <Tool text="Laravel" svg={<LaravelLogo />} />
        <Tool text="Express" svg={<ExpressLogo />} />
        <Tool text="Node" svg={<NodeLogo />} />
        <Tool text="Tailwind" svg={<TailwindLogo />} />
        <Tool text="Prisma" svg={<PrismaLogo />} />
        <Tool text="Amplify" svg={<AmplifyLogo />} />
        <Tool text="Netlify" svg={<NetlifyLogo />} />
      </div>
    </div>
  );
}
