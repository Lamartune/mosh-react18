import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup/ListGroup";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>Hello Cabbar</Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisible(true)}>
        My Button
      </Button>
      <ListGroup
        items={["New York", "Konya", "San Francisco"]}
        heading="Cities"
        onSelecetItem={() => "asd"}
      ></ListGroup>
    </div>
  );
}
export default App;
