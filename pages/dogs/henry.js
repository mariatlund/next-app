import Head from "next/head";
import Image from "next/image";

function Henry() {
  return (
    <>
      <Head>
        <title>Henry the dog</title>
      </Head>
      <h1>Henry</h1>
      <Image src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e" alt="Henry the dog" width="4240" height="2832" priority sizes="100vw" />
    </>
  );
}

export default Henry;
