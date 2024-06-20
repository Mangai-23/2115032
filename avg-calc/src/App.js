import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [numid,setNumid]=useState('');
  const [res,setRes]=useState(null);

  const getNum= async() =>{
    try{
      const res=await axios.get(`http://localhost:9876/numbers/${numid}`);
      console.log(res);
      setRes(res.data);
    }
    catch(e){
      console.log(e);
    }
  }
  return (
    <div className="App">
      <header>
        <input type="text" value={numid} onChange={e => setNumid(e.target.value)}/>
        <button onClick={getNum}>Get Numbers</button>
        {
          res &&  (
            <div>
              <h2>Response :</h2>
              <pre>{JSON.stringify(res,null,2)}</pre>
            </div>
          )
        }
      </header>
    </div>
  );
}

export default App;
