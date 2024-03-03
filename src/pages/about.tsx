import { Layout } from "@/containers/Layout";
import Header from "@/components/_header";
import Image from "next/image";
import Title from "@/components/Page/Title";
import WorkHistory from "@/containers/Timeline/WorkHistory";

export default function About() {
  const yearStarted = 2015;
  const yearOfExp = new Date().getFullYear() - yearStarted;

  return (
    <>
      <Header />
      <Layout>
        <div className="flex flex-col items-center mt-10 px-2 xmd:px-0 lg:px-10">
          <div className="flex text-5xl space-x-2.5 mb-10">
            <span className="text-black dark:text-white">I'm</span>
            <span className="text-orange-600 dark:text-orange-400 font-medium">
              Albert
            </span>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center w-full pb-4 gap-12">
            <Image
              className="w-auto h-60 lg:h-[350px]"
              src={
                "https://albertstudios.s3.ap-southeast-2.amazonaws.com/images/AB11.svg"
              }
              alt="albert buenaventura image"
              priority
              width={7718}
              height={6561}
            />
            <div className="lg:max-w-[700px] flex flex-col items-center xmd:items-start w-full text-black dark:text-white">
              <div className="text-orange-600 dark:text-orange-400 text-2xl mb-10">
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
        <div id="work-history" className="mt-16">
          <Title text="Work history" />
          <div className="mt-10 flex flex-col">
            <WorkHistory
              date="Jan 2021 - Present"
              company="Bonjoro"
              position="Senior Software Engineer"
            />
            <WorkHistory
              date="Aug 2020 - Dec 2020"
              company="MicroSourcing"
              position="Senior Software Engineer"
            />
            <WorkHistory
              date="Jul 2019 - Aug 2020"
              company="Samsung R&D Institute Philippines"
              position="Engineer"
            />
            <WorkHistory
              date="May 2015 - Jul 2019"
              company="Rarejob Philippines Inc."
              position="Senior Software Engineer"
            />
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
