import styles from "./InputFile.module.css";

const InputFile = ({ change }) => {
  return (
    <div className={styles.cont}>
      <input
        type="file"
        name="Choose file"
        className={styles.input}
        multiple
        onChange={(e) => change(e.target.value)}
      ></input>
    </div>
  );
};

export default InputFile;
