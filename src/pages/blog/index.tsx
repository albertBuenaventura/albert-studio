import { Layout } from "@/containers/Layout";
import Header from "@/components/_header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonDigging } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <>
      <Header />
      <Layout>
        <div className="text-center mt-10 space-y-8">
          <div className="text-6xl text-orange-600 dark:text-orange-400">
            Blog
          </div>
          <div>
            Some of my thoughts and experiences, my insights and reflections on
            techs.
          </div>
        </div>
        <div className="flex flex-col sm:flex-row mt-20 gap-8 flex items-center justify-center">
          <FontAwesomeIcon
            icon={faPersonDigging}
            className="h-40 text-orange-600 dark:text-orange-400"
          />
          <div className="text-4xl">
            Work in progress. Please check back later for updates.
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
