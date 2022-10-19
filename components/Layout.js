import Nav from "./Nav";
import Meta from "./Meta";
import Header from "./Header";
import styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          {/* <h1>Hi there!</h1> */}
          <Header />
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
