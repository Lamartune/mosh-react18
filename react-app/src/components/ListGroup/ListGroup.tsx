// import { MouseEvent } from "react";

import { useState } from "react";
import styles from "./ListGroup.module.css";

interface ListGroupProps {
  items: string[];
  heading: string;
  //(item: string) => void
  onSelecetItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelecetItem }: ListGroupProps) {
  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // //Event Handler
  // const handleClick = (event: MouseEvent) => console.log(event);

  const getMessage = () => {
    // return items.length === 0 ? <p>No item found</p> : null;
    return items.length === 0 && <p>No item found</p>;
  };

  return (
    <>
      <h1>{heading}</h1>
      {getMessage()}
      <ul className={[styles.listGroup, styles.container].join(" ")}>
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelecetItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
