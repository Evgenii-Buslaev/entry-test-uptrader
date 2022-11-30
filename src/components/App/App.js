import { useSelector } from "react-redux";

import AppRouter from "../AppRouter/AppRouter";
import Navigation from "../Navigation/Navigation";

import styles from "./App.module.css";

function App() {
  const state = useSelector((state) => state);
  console.log(state);

  return (
    <div className={styles.App}>
      <Navigation />
      <AppRouter />
    </div>
  );
}

export default App;
