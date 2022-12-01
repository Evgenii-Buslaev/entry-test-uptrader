import styles from "./CommentsList.module.css";

const CommentsList = ({ list }) => {
  return (
    <ul className={styles.list}>
      {list.map((comment) => (
        <li className={styles.comment} key={Math.random()}>
          {comment.text}
        </li>
      ))}
    </ul>
  );
};

export default CommentsList;
