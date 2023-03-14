import Head from "next/head";
import NavBar from "../NavBar/NavBar";

export default function Container({ keywordsProps, title, children }) {
  return (
    <>
      <Head>
        <meta keywords={"test jekie kolya " + keywordsProps} />
        <title>{title}</title>
      </Head>
      <NavBar />
      {children}
    </>
  );
}
