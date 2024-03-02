import { Button } from "@/components/Button";
import { WorkCard } from "@/components/Card";
import Title from "@/components/Page/Title";
import Link from "next/link";
import React from "react";

export function Works() {
  const cta = (text: string) => <Button className="text-base">{text}</Button>;

  return (
    <div
      id="projects"
      className="flex flex-col scroll-mt-[88px] w-full h-full space-y-8"
    >
      <Title text="Projects" />
      <div className="grid lg:grid-cols-3 gap-4">
        <WorkCard
          className="max-h-[450px] w-full"
          name="Homeclean Franchise"
          color="#0084C7"
          imgUrl="https://albertstudios.s3.ap-southeast-2.amazonaws.com/images/homeclean-franchise.png"
          imgClassName="w-full h-full object-cover object-left-top"
          cta={
            <Link href="https://homecleanfranchise.co.uk" target="_blank">
              {cta("Visit website")}
            </Link>
          }
        />
        <WorkCard
          className="max-h-[450px] w-full"
          name="WIP: Component library"
          color="#FE4685"
          imgUrl="https://albertstudios.s3.ap-southeast-2.amazonaws.com/images/component-library.png"
          imgClassName="w-full h-full object-cover object-left-top"
          cta={
            <Link href="https://components.albertstudios.dev/" target="_blank">
              {cta("Visit website")}
            </Link>
          }
        />
        <WorkCard
          className="max-h-[450px] w-full"
          name="I'd love to hear about your project."
          color="#183A1D"
          imgUrl="https://albertstudios.s3.ap-southeast-2.amazonaws.com/images/albert-popcorn.png"
          imgClassName="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] self-end"
          cta={<Link href="/contact">{cta("Inquire")}</Link>}
        />
      </div>
    </div>
  );
}
