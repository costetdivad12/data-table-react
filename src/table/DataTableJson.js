import React from 'react'
import MUIDataTable from 'mui-datatables';
import   Users from './Users.json'
const DataTableJson = () => {
  const columns =[
      {
          name:"id",
          label:"ID",
          options:{filter:true,sort:true,sortDescFirst:true,draggable:true}
      },
      {
        name:"name",
        label:"NAME",
       
    },
    {
        name:"email",
        label:"EMAIL",
       
    },
    {
        name:"status",
        label:"STATUS",
       
    }
    
  ];

  return (
      
    <div className="encabezado">
         <MUIDataTable
        title={"LISTA DE USUARIOS JSON"}
        data={ Users}
        columns={columns}
        
      />
    </div>
  )
}

export default DataTableJson