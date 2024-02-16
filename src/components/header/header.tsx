import Link from 'next/link';
import styles from './header.module.css';

export default function Header() {
  return (
    <div className={styles.navWrapper}>
      <nav className={styles.nav}>
        <Link className={styles.homeLink} href={'/'}>
          Food Database
        </Link>
        <div className={styles.linkContainer}>
          <Link href={'/foods/new'}>Create Food</Link>
          <Link href={'/foods'}>View Foods</Link>
        </div>
      </nav>
    </div>
  );
}
