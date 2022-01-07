import { GetStaticProps } from "next";
import Head from "next/head";

import { Header } from "../components/Header";
import { SubscribeButton } from "../components/SubscribeButton";
import { stripe } from "../services/stripe";

import styles from "../styles/home.module.scss";

interface IProduct {
  product: {
    priceId: string;
    amount: number;
  };
}

export default function Home(props: IProduct) {
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
            <span>for {props.product.amount} month</span>
          </p>
          <SubscribeButton priceId={props.product.priceId} />
        </section>
        <img src="/images/mulher.svg" alt="coding girl" />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
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
    revalidate: 60 * 60 * 24, //24 hours
  };
};
