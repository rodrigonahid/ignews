import { signIn, useSession } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";

import Style from "./styles.module.scss";

export function SignInButton() {
  const { data } = useSession();
  return data ? (
    <button className={Style.SignInButton}>
      <FaGithub color="#04b361" />
      Rodrigo Nahid
      <FiX className={Style.closeIcon} color="#737380" />
    </button>
  ) : (
    <button onClick={() => signIn("github")} className={Style.SignInButton}>
      <FaGithub color="#EBA417" />
      Sign In with Github
    </button>
  );
}
