import { Layout } from "@/containers/Layout";
import { Banner } from "@/containers/Banner";
import { Works } from "@/containers/Works";
import Header from "@/components/_header";
import { Tools } from "@/containers/Tools";

export default function Home() {
  return (
    <>
      <Header />
      <Layout>
        <Banner />
        <Works />
        <Tools />
      </Layout>
    </>
  );
}

export function getStaticProps() {
  return {
    props: {},
  };
}
