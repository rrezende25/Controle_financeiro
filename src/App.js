import { useState } from "react";
import AddItemForm from "./components/AddItemForm";
import Header from "./components/Header";
import ItemsList from "./components/ItemsList";
import Resume from "./components/Resume";


function App() {
  const [items,setItems] = useState([])

  async function additem(item){
      setItems([...items,item])
  }
  return (
    <div>
     <Header></Header>
     <Resume></Resume>
     <AddItemForm additem={additem}></AddItemForm>
     <ItemsList items={items}></ItemsList>
    </div>
  );
}

export default App;
