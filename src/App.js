import React, { useState } from 'react';
import './App.css';
import Note from './Componentes/Note';
import Box from './Componentes/Box';
import Items from './Componentes/items';
function App() {
  const [todo,setTodo] = useState([]);

  const Remove = (id) =>{
const Delete = todo.filter(
  (d,index)=>{
    if(index !== id){
return true;
    }else{
return false;
    }
  }
)
   setTodo(Delete);
  }

  const add = (items) =>{
setTodo(
  [
  ...todo,
  {
    items,
    time: new Date().toLocaleTimeString()
  }

  ]
)
  }
  const [editing, setEditing] = useState(false);
  // ...
  const UpdatedFeito = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };

  fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((json) => console.log(json));
 return (
   <div className="bg-slate-500 h-screen p-3">
    <div className="rounded mx-auto max-w-[750px] min-h-[550px] shadow-2x1 bg-white">
       <Note handler={add} onKeyDown={UpdatedFeito} />
       <Box data={todo} removeHandler={Remove}/>
       
       </div>
       
   </div>
 );
}
export default App;