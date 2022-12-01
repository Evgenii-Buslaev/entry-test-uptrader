import styles from "./SubtasksList.module.css";

import doneIcon from "../../assets/icons/done.png";

const SubtasksList = ({ list, change }) => {
  const toggleDone = (e) => {
    const element = list.find((elem) => +elem.id === +e.target.id);
    change([
      ...list.filter((elem) => +elem.id !== +e.target.id),
      { id: e.target.id, title: element.title, done: !element.done },
    ]);
  };
  return (
    <div className={styles.list}>
      {list.map((elem) => (
        <div
          key={Math.random()}
          className={elem.done ? `${styles.item} ${styles.done}` : styles.item}
        >
          {elem.title}
          <img
            id={elem.id}
            src={doneIcon}
            alt="done"
            title="make done"
            className={styles.doneBtn}
            onClick={(e) => toggleDone(e)}
          ></img>
        </div>
      ))}
    </div>
  );
};

export default SubtasksList;
