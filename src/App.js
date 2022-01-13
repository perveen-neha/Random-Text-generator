import React, {useState} from 'react';
import data from './data'
import './App.css';

function App() {
  const [Count, setCount] = useState(0)
  const [para, setpara] = useState(data)

  const generator = (e) =>{
    e.preventDefault();
    let amount= parseInt(Count);
    if(Count <=0 )
    amount=1;
    else if(Count >=8)
    amount=8;
    
  }
  
  return (
    <div className="App">
      <div className="form">
        <form onSubmit={generator}>
          <input type="number"
          value={Count}
          onChange={(e)=> setCount(e.target.value)}
           />
           <button>Generate</button>
        </form>
      </div>
      {para.map((singlePara,index)=> {
        return (
          <p className='paragraph' key={index} >{singlePara}</p>
        )
      })}
    </div>
  );
}

export default App;
