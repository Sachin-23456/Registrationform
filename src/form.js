import React, { useEffect, useState } from 'react'

function Form() {
    const data={name:"",email:"",password:""};
    const[inputdata,setInputdata]=useState(data);
    const[Flag,setFlag]=useState(false);
    useEffect(()=>{
        console.log(inputdata.name);
    },[Flag])
    function handleData(e){
        setInputdata({...inputdata,[e.target.name]:e.target.value})
        console.log(inputdata,inputdata.email,inputdata.password);
    }  
    function handleSubmit(e){
         e.preventDefault();
         if(!inputdata.name || !inputdata.email || !inputdata.password){
            alert("Please Enter the Detail");
         }else{
            setFlag(true);
         }
    } 
  return (
    <>
    <pre>{(Flag)?<h1>{inputdata.name} You Register Succesfull</h1>:""}</pre>
      <form className='container' onSubmit={handleSubmit}>
       <div className='header'>
           <h1>Registration Form</h1>
       </div>
       <div>
        <input type="text" placeholder='Enter Your name' name="name" value={inputdata.name} onChange={handleData}/>
       </div>
       <br/>
       <div>
        <input type="text" placeholder='Enter Your email' name="email" value={inputdata.email} onChange={handleData}/>
       </div>
       <br/>
       <div>
        <input type="text" placeholder='Enter Your Password' name="password" value={inputdata.password} onChange={handleData}/>
       </div>
       <br/>
       <div>
        <button type='submit'>Submit</button>
       </div>
      </form>
      </>
  )
}

export default Form;
