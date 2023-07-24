import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup";
import "./App.css";
import { BsFillCalendarFill } from "react-icons/bs";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <div>
      <div className="mb-2">
        <BsFillCalendarFill color="blue" size="40" />
      </div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>Hello Cabbar</Alert>
      )}
      <Button onClick={() => setAlertVisible(true)}>My Button</Button>
      <ListGroup
        items={["New York", "Konya", "San Francisco"]}
        heading="Cities"
        onSelecetItem={() => "asd"}
      ></ListGroup>
    </div>
  );
}
export default App;
