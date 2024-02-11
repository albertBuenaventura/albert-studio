import Head from "next/head";
import { Layout } from "@/containers/Layout";
import { Banner } from "@/containers/Banner";

export default function Home() {
  return (
    <>
      <Head>
        <title>Albert Studio</title>
        <meta
          name="description"
          content="Albert Buenaventura Software Engineer, developer from the Philippines"
        />
        <meta property="og:title" content="Albert Studio | Consultant" />
        <meta property="og:url" content="https://albert-studio.dev/" />
        <meta property="og:site_name" content="Albert Studio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout>
        <Banner />
      </Layout>
    </>
  );
}
