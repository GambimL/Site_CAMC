import { Header } from '../Header';
import styles from './Layout.module.scss';

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className={styles.layout}>
        <main className={styles.main} role="main">
            {children}
<<<<<<< HEAD
          {/* <div className={styles.content}>
          </div> */}
        </main>
=======
          </main>
>>>>>>> e131c102e1f028f636f8e4c65c48a87bf499f384
      </div>
    </>
  );
};