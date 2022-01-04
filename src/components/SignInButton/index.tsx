import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";

import Style from "./styles.module.scss";

export function SignInButton() {
  const isUserLoggedIn = true;

  return isUserLoggedIn ? (
    <button className={Style.SignInButton}>
      <FaGithub color="#04b361" />
      Rodrigo Nahid
      <FiX className={Style.closeIcon} color="#737380" />
    </button>
  ) : (
    <button className={Style.SignInButton}>
      <FaGithub color="#EBA417" />
      Sign In with Github
    </button>
  );
}
