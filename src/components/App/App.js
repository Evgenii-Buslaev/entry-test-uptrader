import { useState } from "react";
import { ModalContext } from "../../context/context";

import AppRouter from "../AppRouter/AppRouter";
import Navigation from "../Navigation/Navigation";
import Modal from "../Modal/Modal";

import styles from "./App.module.css";

function App() {
  const [modalOpenned, setModalOpenned] = useState(false);
  return (
    <ModalContext.Provider value={{ state: { modalOpenned, setModalOpenned } }}>
      <div className={styles.App}>
        <Navigation />
        <AppRouter />
        <Modal />
      </div>
    </ModalContext.Provider>
  );
}

export default App;
