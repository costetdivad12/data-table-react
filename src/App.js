
import './App.css';
import DataTable from './table/DataTable';
import DataTableAxios from './table/DataTableAxios';
import DataTableJson from './table/DataTableJson';

function App() {
  return (
    <div className="App">
     <DataTableJson/>
     <DataTable />
     <DataTableAxios/>
    </div>
  );
}

export default App;
