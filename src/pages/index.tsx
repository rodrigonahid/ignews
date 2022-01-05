import { GetServerSideProps } from "next";
import Head from "next/head";

import { Header } from "../components/Header";
import { SubscribeButton } from "../components/SubscribeButton";
import { stripe } from "../services/stripe";

import styles from "../styles/home.module.scss";

interface IProduct {
  priceId: string;
  amount: number;
}

export default function Home(props: IProduct) {
  console.log(props);
  return (
    <>
      <Head>
        <title>IG.News | Home</title>
      </Head>

      <Header />
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👋 Hey, welcome</span>
          <h1>
            News about the <span>React</span> world.
          </h1>
          <p>
            Get access to all the publications <br />
            <span>for $9.90 month</span>
          </p>
          <SubscribeButton priceId={props.priceId} />
        </section>
        <img src="/images/mulher.svg" />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve("price_1KEH3HIridEt4KT9sVDNOFl0");

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price.unit_amount / 100),
  };

  return {
    props: {
      product,
    },
  };
};
