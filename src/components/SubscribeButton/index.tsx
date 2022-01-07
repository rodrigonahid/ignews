import styles from "./styles.module.scss";
import { signIn } from "next-auth/react";

interface SubscribeButtonProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  return (
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={() => signIn("github")}
    >
      Subscribe Now
    </button>
  );
}
