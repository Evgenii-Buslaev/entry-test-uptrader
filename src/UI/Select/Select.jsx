import styles from "./Select.module.css";

const Select = ({ value, change }) => {
  return (
    <div className={styles.cont}>
      <h3>Importance: </h3>
      <select value={value} onChange={(e) => change(e.target.value)}>
        <option value="primary">primary</option>
        <option value="secondary">secondary</option>
      </select>
    </div>
  );
};

export default Select;
