import ListGroup from "./components/ListGroup.tsx"

let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

const handleSelectItem = (item:string) =>{
  console.log(item);
}

function App() {
  return <div><ListGroup items={items} heading="Cities" onSelecetItem={handleSelectItem}/></div>
}
export default App;