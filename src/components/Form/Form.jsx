import styles from "./Form.module.css";

const Form = ({ list }) => {
  return (
    <form className={styles.form}>{list.map((item) => item.element)}</form>
  );
};

export default Form;
