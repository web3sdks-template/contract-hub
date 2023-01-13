import { useContract, useTokenSupply } from "@web3sdks/react";
import React from "react";
import CodeSnippet from "../components/guide/CodeSnippet";
import codeSnippets from "../const/codeSnippets";
import contractAddresses from "../const/contractAddresses";
import styles from "../styles/Home.module.css";

export default function Token() {
  const { contract: tokenContract } = useContract(contractAddresses[4].address);
  const { data: totalSupply } = useTokenSupply(tokenContract);

  return (
    <div className={styles.container}>
      <div className={styles.collectionContainer}>
        <div className={styles.detailPageContainer}>
          <h1>Token</h1>
          <hr className={`${styles.smallDivider} ${styles.detailPageHr}`} />

          <p>
            The Token contract is suited for projects in which you want to
            create <b>your own currency</b>. This currency can be purchased and
            traded between users on an exchange, utilized to buy and sell NFTs
            in a marketplace, and much more.
          </p>
          <p>
            This can be combined with other contracts like NFT Drop, Splits,
            Edition Drop, and Marketplace for even greater functionality.
          </p>
          <p>
            <a
              className={styles.lightPurple}
              href="https://docs.web3sdks.com/pre-built-contracts/token"
            >
              Check out the documentation here.
            </a>
          </p>
        </div>

        <div className={styles.tokenGrid}>
          {/* Total Supply */}
          <div className={styles.tokenItem}>
            <h3 className={styles.tokenLabel}>Total Supply</h3>
            <p className={styles.tokenValue}>
              {totalSupply
                ? totalSupply?.displayValue + " " + totalSupply?.symbol
                : "Loading..."}
            </p>
          </div>
        </div>
      </div>
      <hr className={`${styles.divider} ${styles.spacerTop}`} />
      {/* Code Snippet */}
      <h2>How It Works</h2>

      <CodeSnippet text={codeSnippets.token} />
    </div>
  );
}
