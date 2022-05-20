import React from "react";
import MUIDataTable from "mui-datatables";
import { createTheme , ThemeProvider } from '@mui/material/styles'
import '../index.css'

const darkTheme = createTheme({
  palette:{
    mode:'dark'
  }
});

 class DataTable extends React.Component {
   render(){
 
  const columns = [{ name:"name",
  label:"NAME 1",
  options: {
    filter: false,
    sort: false,
    draggable:true
   }}, "Company", "City", "State"];

  const data =  [
    ["Joe James", "Test Corp", "Yonkers", "NY"],
    ["John Walsh", "Test Corp", "Hartford", "CT"],
    ["Bob Herm", "Test Corp", "Tampa", "FL"],
    ["James Houston", "Test Corp", "Dallas", "TX"],
  ];

  const options = {
 
  };

  return (
    <>
      <div className="encabezado">
      <ThemeProvider theme={darkTheme}>
      <MUIDataTable
        title={"LISTA DE EMPLEADOS NORMAL"}
        data={data}
        columns={columns}
        options={options}
      />
      </ThemeProvider>
      </div>
    </>
  );
   }
};

export default DataTable;
