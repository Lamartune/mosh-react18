import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup";
import "./App.css";
import { BsFillCalendarFill } from "react-icons/bs";
import Like from "./components/Like";
import Message from "./components/Message";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);

  const [isVisible, setVisibility] = useState(false);
  const [isApproved, setApproved] = useState(true);
  let count = 0;
  const handleClick = () => {
    setVisibility(true);
    count++;
    console.log(isVisible);
  };

  return (
    <div className="flex flex-col justify-center items-center text-center">
      <div className="mb-2">
        <BsFillCalendarFill color="blue" size="40" />
      </div>
      <br></br>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>Hello Cabbar</Alert>
      )}
      <div>
        <Button onClick={() => setAlertVisible(true)}>My Button</Button>
      </div>
      <ListGroup
        items={["New York", "Konya", "San Francisco"]}
        heading="Cities"
        onSelecetItem={() => "asd"}
      ></ListGroup>
      <br></br>
      <div>
        <Like onClick={() => console.log("clicked")} />
      </div>
      <div>
        <button onClick={handleClick}>Show</button>
      </div>
      <Message />
      <Message />
      <Message />
    </div>
  );
}
export default App;
