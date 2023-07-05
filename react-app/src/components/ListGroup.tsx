// import { MouseEvent } from "react";

import { useState } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

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
      <h1>List Group</h1>
      {getMessage()}
      <ul className="list-group">
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
