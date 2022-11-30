import close from "../../assets/icons/close.png";
import styles from "./Modal.module.css";

const Modal = ({ children, openned, toggler }) => {
  return openned ? (
    <div className={styles.cont}>
      <div className={styles.form}>{children}</div>
      <img
        className={styles.close}
        src={close}
        alt="close window"
        onClick={toggler}
      ></img>
    </div>
  ) : null;
};

export default Modal;
