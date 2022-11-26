import styles from "./InputText.module.css";

const InputText = (/* { value, change } */) => {
  return (
    <input
      type="text"
      className={styles.input}
      /*       value={value}
      onChange={change} */
    ></input>
  );
};

export default InputText;
