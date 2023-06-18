import { Header } from '../Header';
import styles from './Layout.module.scss';

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className={styles.layout}>
        <main className={styles.main} role="main">
          <div className={styles.content}>
            {children}
          </div>
        </main>
      </div>
    </>
  );
};