import { useState } from "react";
import {useSelector } from "react-redux";


export const Todo = () => {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");


  const getData = async () => {
    let fetched = await fetch("http://localhost:3000/todos");
    fetched = await fetched.json();
    setData([...fetched]);
 };
getData();




  const todos = useSelector((store) => store.todos);
  console.log(todos,"todos")
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleAdd = async () => {
    let res = await fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: text,
        status: false,
      }),
    })
    let data = await res.json();
    console.log(data)
     alert("Data added succesfully ")
  };




  return (
    <>  
      <div style={{border:"2px solid red",width:"20%" ,margin:"auto"}}>
      <input  style={{padding:"10px 40px " ,fontSize:"13px"}}type="text" onChange={handleChange} />
      <button  style={{padding:"10px 20px" ,fontSize:"13px"}} onClick={handleAdd}>Add</button>
      </div>

      {data.map((e) => {
            return (
               <div >
                  <div style={{border:"1px solid green",width:"20%",margin:"auto"}} >
                       <h4>{e.id}:- {e.title}</h4>
                  </div>
                
       
               </div>
            );
         })}
    </>
  
  );
};