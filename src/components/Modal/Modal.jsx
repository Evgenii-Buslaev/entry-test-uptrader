import { useContext } from "react";
import { ModalContext } from "../../context/context";
import useModal from "../../hooks/useModal";

import close from "../../assets/icons/close.png";
import styles from "./Modal.module.css";

const Modal = ({ children }) => {
  const { state } = useContext(ModalContext);

  const toggler = useModal();

  return state.modalOpenned ? (
    <div className={styles.cont}>
      <div className={styles.form}>{children}</div>
      <img
        className={styles.close}
        src={close}
        alt="close wondow"
        onClick={toggler}
      ></img>
    </div>
  ) : null;
};

export default Modal;
