import { Layout } from "@/containers/Layout";
import { Banner } from "@/containers/Banner";
import { Works } from "@/containers/Works";
import Header from "@/components/_header";

export default function Home() {
  return (
    <>
      <Header />
      <Layout>
        <Banner />
        <Works />
      </Layout>
    </>
  );
}

export function getStaticProps() {
  return {
    props: {},
  };
}
