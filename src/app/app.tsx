import { ThemeProvider } from "components/ui/theme-provider";
import { ModeToggle } from "components/ui/mode-toggle";
import styles from "./app.module.css";
import TabNav from "./tab-nav";

const App = (): JSX.Element => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="avy-app-ui-theme">
      <main className={styles.main}>
        <header className="my-2 flex w-full justify-between">
          <h1 className="inline-block">Avy Handbook</h1>
          <ModeToggle />
        </header>
        <TabNav />
      </main>
    </ThemeProvider>
  );
};

export default App;
