import React, { useEffect, useState } from "react";
import axios from "axios";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select  from '@mui/material/Select';
import '../index.css'

const Selects = () => {
  const [Selects, setSelect] = useState([]);
  const [chageSelect, setchageSelect] = useState('');
  

  const getData = () => {
    const data = "https://gorest.co.in/public/v2/users";
    axios.get(data).then((resp) => {
       console.log(resp.data);
      const datas = resp.data;
      setSelect(datas);
    });
  };

  const handleSelectChage = (e) => {
    console.log(e.target.value);
    setchageSelect(e.target.value);

    
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
     <div className="encabezado">
      <p>{chageSelect}</p>
     
      <Box sx={{ minWidth: 80 }}  >
           <FormControl  sx={{ minWidth: 120 }}>
             <InputLabel id="demo-simple-select-label">User</InputLabel>
             <Select
               labelId="demo-simple-select-label"
               id="demo-simple-select"
               value={chageSelect}
               label="Age"
               onChange={handleSelectChage}
             >
                 { 
          Selects.map( ( resp )=>(
                // <li key={id}>{title}</li>
                <MenuItem value={resp.id}>{resp.name}</MenuItem>
           ))
           

           
        } 
               <MenuItem value={10}>Ten</MenuItem>
               
             </Select>
           </FormControl>
         </Box>
         </div>
    </>
  );
};

export default Selects;
