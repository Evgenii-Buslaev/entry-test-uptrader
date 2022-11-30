import styles from "./InputDate.module.css";

const InputDate = ({ name, label, dateString, change, disabled }) => {
  return (
    <div className={styles.cont}>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        className={styles.date}
        type="date"
        value={dateString}
        onChange={(e) => change(e.target.value)}
        disabled={disabled}
      />
    </div>
  );
};

export default InputDate;
