import styles from "./Form.module.css";

const Form = ({ list, action, submit }) => {
  return (
    <form className={styles.form} onSubmit={(e) => submit(e)}>
      {list.map((item) => item.element)}
      <button type="submit" className={styles.submit}>
        {action}
      </button>
    </form>
  );
};

export default Form;
