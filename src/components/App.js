
import React from "react";
import axios from "axios";
import './../styles/App.css';

const App = () => {
  const fetchUser = async () =>{
    try{
      axios.get("https://reqres.in/api/users");
    }catch(err){
      console.error(err.message);
    }
    
  } 
  // useEffect(() =>{
  //   fetchUser();
  // },[])
  return (
    <div>
       <button onClick={fetchUser} > Click Me</button>
     
    </div>
  )
}

export default App
