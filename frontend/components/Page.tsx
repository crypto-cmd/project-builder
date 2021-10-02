import Head from "next/head";
import { ReactNode } from "react";
import { Header } from "../components/Header";

type Props = {
  children: ReactNode;
  title?: string;
};
export const Page = ({ title, children }: Props) => {
  const extendedTitle = title ? `${title} - ` : "";
  return (
    <>
      <Head>
        <title>{`${extendedTitle}ProjectBuilder`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex flex-col justify-center px-3  md:px-6 py-6">{children}</main>
    </>
  );
};
