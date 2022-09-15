import { useState } from "react";
/* eslint-disable react/prop-types */
// import { useState } from 'react';
import MyTaskList from './MyTaskList';

const App = () => {

  const [datos, setDatos] = useState({objeto:''});
  
  

  return (
    <>

      <h3>my TaskList App!!!</h3>
      <MyTaskList datos={datos} setDatos={setDatos}/>
      
    
    </>
  );

};




export default App;
