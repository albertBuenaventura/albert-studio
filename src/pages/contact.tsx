import Head from "next/head";
import { Layout } from "@/containers/Layout";
import Header from "@/components/_header";
import { ContactFormCard } from "@/containers/ContactForm/ContactFormCard";

export default function Home() {
  return (
    <>
      <Head>
        <Header />
      </Head>
      <Layout>
        <ContactFormCard />
      </Layout>
    </>
  );
}

export function getStaticProps() {
  return {
    props: {},
  };
}
