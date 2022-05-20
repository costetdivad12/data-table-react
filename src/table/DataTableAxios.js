import React, { useEffect, useState } from "react";
import axios from "axios";
import MUIDataTable from 'mui-datatables';
const DataTableAxios = () => {
  //configurar hooks
  const [Productos, setProductos] = useState([]);

  //mostrar datos con axios
  const data = "https://gorest.co.in/public/v2/users";

  const getData = async () => {
    await axios.get(data).then((resp) => {
    //   console.log(resp.data);
      const datas =resp.data;
      setProductos(datas);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  // definimos columnas
  const columns = [
    {
      name: "id",
      label: "ID",
      options: {
        filter: true,
        sort: true,
        sortDescFirst: true,
        draggable: true,
      },
    },
    {
      name: "name",
      label: "NAME",
    },
    {
      name: "email",
      label: "EMAIL",
    },
    {
      name: "status",
      label: "STATUS",
    },
  ];

  // renderizamos la data

  return (
  <div>
      <MUIDataTable 
      title={"LISTA DE USUARIOS AXIOS"}
      data={ Productos}
      columns={columns}/>
  </div>
  )
};

export default DataTableAxios;
