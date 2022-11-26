import { useContext } from "react";
import { ModalContext } from "../../context/context";
import useModal from "../../hooks/useModal";

import close from "../../assets/icons/close.png";
import styles from "./Modal.module.css";

const Modal = () => {
  const { state } = useContext(ModalContext);

  const toggler = useModal();

  return state.modalOpenned ? (
    <form className={styles.cont}>
      <div className={styles.form}></div>
      <img
        className={styles.close}
        src={close}
        alt="close wondow"
        onClick={toggler}
      ></img>
    </form>
  ) : null;
};

export default Modal;
