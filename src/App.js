
import {useState} from 'react';
import './App.css';
import User from './User';

let name = "Deepak";



function App() {

  function alt() {
    alert(`Hi,${name}.`)
  }

  let [data,setData]=useState("Deepak Singh")

  // function updateName(){
  //   // name="Manu Maharaj"
  //   // alert(`Hi,${name}`)
  //   setData("Manu Maharaj")
  //   alert(`data is updated to ${data}`)
  // }

  let [email_1,setmail1]=useState("deepak@app.com")

  function updateMail1(){
    setmail1("deepak2001@app.com")
  }

  let [email_2,setmail2]=useState("jyoti@app.com")

  function updateMail2(){
    setmail2("jyoti1999@app.com")
  }

  let [inData,setInData]=useState(null)
  let[show,setshow]=useState(false)
  
  function getdata(val){
    setInData(val.target.value)
  }

  let [status,setStatus]=useState(false)

  return (
    <>
      <button onClick={()=>{alt()}}>Click Me</button>


      <div className="intro">{data} is graduate in Computer Science.</div>
      <ul className="items">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Services</li>
      </ul>

      <User name={"Deepak Singh"} email={email_1}/>
      <button onClick={()=>{updateMail1()}}>Update Email-1</button>

      <User name={"Jyoti Singh"} email={email_2}/>
      <button onClick={()=>{updateMail2()}}>Update Email-2</button>

      

      {
        show?<h1>{inData}</h1>:null
      }

      <div><input  onChange={getdata}/></div>
      <button onClick={()=>{setshow(!(show))}}>Get Data</button>

      
      {
        status?<h1>Toggle Button</h1>:null
      }
      <div><button onClick={()=>{setStatus(!status)}}>Toggle</button></div>
      

      
      
    </>

  );
}

export default App;
