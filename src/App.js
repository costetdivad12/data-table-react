
import './App.css';
import Selects from './select/Select';
import DataTable from './table/DataTable';
import DataTableAxios from './table/DataTableAxios';
import DataTableJson from './table/DataTableJson';

function App() {
  return (
    <div className="App">
     <DataTableJson/>
     <DataTable />
     <DataTableAxios/>
     <Selects/>
    </div>
  );
}

export default App;
