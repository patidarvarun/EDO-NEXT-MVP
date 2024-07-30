import React from "react";
import styles from "../styles/dashboard.module.css";
interface ListProps {
  items: string[];
}

const List: React.FC<ListProps> = ({ items }) => {
  return (
    <ul
      className={`list-disc pl-4 text-base leading-7 text-gray-700 ${styles.letterSpacing}`}
    >
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default List;
