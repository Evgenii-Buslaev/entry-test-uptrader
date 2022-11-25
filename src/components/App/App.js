import AppRouter from "../AppRouter/AppRouter";
import Navigation from "../Navigation/Navigation";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <Navigation />
      <AppRouter />
    </div>
  );
}

export default App;
