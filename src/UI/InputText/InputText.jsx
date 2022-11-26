import styles from "./InputText.module.css";

const InputText = ({ text, value, change }) => {
  return (
    <input
      type="text"
      className={styles.input}
      value={value}
      onChange={(e) => change(e.target.value)}
      placeholder={text}
    ></input>
  );
};

export default InputText;
