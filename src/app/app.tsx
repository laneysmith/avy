import styles from "./app.module.css";
import TabNav from "./tab-nav";

const App = (): JSX.Element => {
  return (
    <main className={styles.main}>
      <TabNav />
    </main>
  );
};

export default App;
