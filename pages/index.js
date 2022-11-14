import Link from "next/link";
import Anchor from "../components/Anchor";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home page</title>
        <meta name="home" content="Keyword examples" />
      </Head>
      <h1>Home</h1>
      {/* <Link href="/dogs/henry" prefetch={false}>
        See Henry
      </Link> */}
      <Anchor href={"/dogs/henry"} className="mainLink">
        See Henry
      </Anchor>
    </>
  );
}
