import styles from "../styles/Navbar.module.css";

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className="container">
        <Link href="/">
          <a className={styles.link}>Home</a>
        </Link>
        <Link href="/about">
          <a className={styles.link}>About</a>
        </Link>
        <Link href="/posts">
          <a className={styles.link}>Posts</a>
        </Link>
        <Link href="/users">
          <a className={styles.link}>Users</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
