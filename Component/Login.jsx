 import React, { useContext, useState } from 'react';
import { mycontext } from './Context';
 
 const Login = () => {

  const {setLoggedIn}  = useContext(mycontext);
  const [data,setData] = useState({
    name :"",
    password:"",
  })



  const handle = ()=>{
    if((data.name=== "manish" && data.password==="nigam@1212")){
      setLoggedIn(true)
    }else{
      alert("Enter Proper Credential")
    }
  }
   return (
     <div>
       <h3>Login Form</h3>
       <div>
        <input type="text" placeholder='User Name' onChange={(e)=>{
          setData({
            ...data,
            name: e.target.value,
          })
        }} />
       </div>
       <div>
        <input type="password" placeholder='Password'  onChange={(e)=>{
          setData({
            ...data,
            password:e.target.value,
          })
        }} />
       </div>
       <div>
        <button onClick={handle}>Login</button>
       </div>

     </div>
   );
 }
 
 export default Login;
 
