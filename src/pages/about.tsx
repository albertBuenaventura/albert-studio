import { Layout } from "@/containers/Layout";
import Header from "@/components/_header";
import Image from "next/image";
import albertImage11 from "../../public/images/AB11.svg";

export default function About() {
  const yearStarted = 2015;
  const yearOfExp = new Date().getFullYear() - yearStarted;

  return (
    <>
      <Header />
      <Layout>
        <div className="flex flex-col items-center mt-10 px-2 xmd:px-0 lg:px-10">
          <div className="flex text-6xl space-x-2.5 mb-10">
            <span className="text-black dark:text-white">I'm</span>
            <span className="text-orange-600 dark:text-orange-400 font-medium">
              Albert
            </span>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center w-full pb-4 gap-12">
            <Image
              className="w-auto h-[350px]"
              src={albertImage11}
              alt="albert buenaventura image"
              priority
            />
            <div className="lg:max-w-[700px] flex flex-col items-center xmd:items-start w-full text-black dark:text-white">
              <div className="text-orange-600 dark:text-orange-400 text-4xl mb-10">
                I'm a Software Developer working remotely from Philippines.
              </div>
              <div className="mb-4">
                Over the past {yearOfExp} years, I've honed my expertise across
                various areas of web development, mastering both front-end and
                back-end development and designing complex backend solutions. I
                have experience on creating marketing landing pages, customized
                solutions and SaaS.
              </div>
              <div>
                I find joy in building solutions and the fulfillment they bring
                when people are using them. Delivering solutions that last has
                always been my guiding principle.
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export function getStaticProps() {
  return {
    props: {},
  };
}
