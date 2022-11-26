import styles from "./Form.module.css";

const Form = ({ list, action }) => {
  return (
    <form className={styles.form}>
      {list.map((item) => item.element)}
      <button type="submit" className={styles.submit}>
        {action}
      </button>
    </form>
  );
};

export default Form;
