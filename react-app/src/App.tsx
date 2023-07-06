import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  return (
    <div>
      <Alert>
        Hello Cabbar
      </Alert>
      <Button color="primary" onClick={()=>console.log("clicked")}>My Button</Button>
    </div>
  );
}
export default App;
