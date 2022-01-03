import Styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={Styles.headerContainer}>
      <div className={Styles.headerContent}>
        <img src="/images/ignews.svg" alt="" />
        <nav>
          <a className={Styles.active}>Home</a>
          <a>Posts</a>
        </nav>
      </div>
    </header>
  );
}
