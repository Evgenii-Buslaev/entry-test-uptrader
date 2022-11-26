import styles from "./Button.module.css";

const Button = ({ text, path, alt, click }) => {
  return (
    <div className={styles.button} onClick={click}>
      <img className={styles.image} src={path} alt={alt}></img>
      <button>{text}</button>
    </div>
  );
};

export default Button;
