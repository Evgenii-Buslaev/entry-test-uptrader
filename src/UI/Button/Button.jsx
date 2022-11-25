import styles from "./Button.module.css";

const Button = ({ text, path, alt }) => {
  return (
    <div className={styles.button}>
      <img className={styles.image} src={path} alt={alt}></img>
      <button>{text}</button>
    </div>
  );
};

export default Button;
