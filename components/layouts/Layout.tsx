import React, { FC, ReactNode } from "react";
import Head from "next/head";
import { Navbar } from "../ui";

type LayoutProps = {
  title?: string;
  children: ReactNode;
};

const origin = typeof window === "undefined" ? "" : window.location.origin;

export const Layout: FC<LayoutProps> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title || "PokemonApp"}</title>
        <meta name="author" content="Federico Rodriguez" />
        <meta
          name="descrition"
          content={`Informacion sobre el pokemon ${title}`}
        />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
        <meta
          property="og:title"
          content={`Informacion sobre el pokemon ${title}`}
        />
        <meta
          property="og:description"
          content={`Esta es la pagina sobre ${title}`}
        />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>

      <Navbar />

      <main
        style={{
          padding: "0 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
