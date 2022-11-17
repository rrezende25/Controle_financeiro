import AddItemForm from "./components/AddItemForm";
import Header from "./components/Header";
import ItemsTable from "./components/ItemsTable";
import Resume from "./components/Resume";
import { ItemsProvider } from './ItemsContext'


function App() {
  return (
    <div>
      <Header></Header>
      <ItemsProvider>
        <Resume></Resume>
        <AddItemForm ></AddItemForm>
        <ItemsTable ></ItemsTable>
      </ItemsProvider>
    </div>
  );
}

export default App;
