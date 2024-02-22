import { Layout } from "@/containers/Layout";
import Header from "@/components/_header";
import { ContactFormCard } from "@/containers/ContactForm/ContactFormCard";

export default function Home() {
  return (
    <>
      <Header />
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
