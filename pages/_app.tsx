import React from "react";
import type { AppProps } from "next/app";
import { ChainId, Web3sdksProvider } from "@web3sdks/react";
import Web3sdksGuideFooter from "../components/guide/Web3sdksGuideFooter";
import Header from "../components/Header";
import Head from "next/head";
import "../styles/globals.css";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mumbai;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3sdksProvider desiredChainId={activeChainId}>
      <Head>
        <title>web3sdks Contract Example Hub</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="web3sdks Example Repository to Showcase How To Use web3sdks's NFT contracts, Marketplace contracts, and token contracts. "
        />
        <meta
          name="keywords"
          content="web3sdks nft contract example, web3sdks nft tutorial, web3sdks nft guide, web3sdks marketplace, web3sdks marketplace guide, web3sdks token guide"
        />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Web3sdksGuideFooter />
    </Web3sdksProvider>
  );
}

export default MyApp;
