import Head from "next/head";

export default function Header() {
  return (
    <Head>
      <title>AlbertStudios | Consultant</title>
      <meta
        name="description"
        content="Albert Buenaventura Software Engineer, developer from the Philippines"
      />
      <meta property="title" content="AlbertStudios | Consultant" />
      <meta property="url" content="https://albertstudios.dev/" />

      <meta
        property="description"
        content="Albert Buenaventura: Passionate web developer based in the Philippines, specializing in creating innovative digital solutions with expertise in various programming languages and frameworks. Ready to transform your online vision into reality."
      />
      <meta name="author" content="Albert Buenaventura" />
      <meta
        name="keywords"
        content="Albert Buenaventura, full stack developer in Philippines, web developer in Philippines, freelance web developer in Philippines"
      />

      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta property="og:title" content="AlbertStudios | Consultant" />
      <meta property="og:url" content="https://albertstudios.dev/" />
      <meta property="og:site_name" content="AlbertStudios" />
      <meta
        property="og:image"
        content="https://albertstudios.s3.ap-southeast-2.amazonaws.com/images/banner.png"
      />
      <meta property="og:image:width" content="1390" />
      <meta property="og:image:height" content="600" />
      <meta property="og:image:type" content="image/png" />

      <link rel="icon" href="/favicon.png" />
    </Head>
  );
}
