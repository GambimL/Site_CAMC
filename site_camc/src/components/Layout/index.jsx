import { Header } from '../Header';
import styles from './Layout.module.scss';

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className={styles.layout}>
        <main className={styles.main} role="main">
            {children}
          </main>
      </div>
    </>
  );
};