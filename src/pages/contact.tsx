import Head from "next/head";
import { Layout } from "@/containers/Layout";
import { Banner } from "@/containers/Banner";
import { Works } from "@/containers/Works";
import Header from "@/components/_header";

export default function Home() {
  return (
    <>
      <Head>
        <Header />
      </Head>
      <Layout>
        <Banner />
        <Works />
      </Layout>
    </>
  );
}
