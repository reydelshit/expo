import React, { useEffect, useState } from 'react'
import Suggestions from './components/Suggestions'
const App = () => {

  const [moistNumber, setMoistNumber] = useState(209)
  const [result, setResult] = useState(0)
  const [inputAcidity, setInputAcidity] = useState(0)
  const [MoistData, setMoistData] = useState([])

  const [decider, setDecider] = useState(false)



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/data');
        const jsonData = await response.json();
        setMoistData(jsonData.field1);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, [MoistData]); 


  const calculateMoist = () => {
   /*setResult(moistNumber + parseFloat(inputAcidity))*/


   if (inputAcidity <= 6 && MoistData >= 700 && MoistData <= 1000) {
    setResult(1);
  } else if (inputAcidity === 7 && MoistData >= 700 && MoistData <= 1000) {
    setResult(2);
  } else if (inputAcidity >= 8 && MoistData >= 700 && MoistData <= 1000) {
    setResult(3);
  } else if (inputAcidity <= 6 && MoistData >= 400 && MoistData <= 600) {
    setResult(4);
  } else if (inputAcidity >= 8 && MoistData >= 400 && MoistData <= 600) {
    setResult(6);
  } else if (inputAcidity <= 6 && MoistData >= 100 && MoistData <= 300) {
    setResult(7);
  } else if (inputAcidity === 7 && MoistData >= 100 && MoistData <= 300) {
    setResult(8);
  } else if (inputAcidity >= 8 && MoistData >= 100 && MoistData <= 300) {
    setResult(9);
  } else {
    setResult(5);
  }
  
   setDecider(true);

  }

  const refresh = () => {
    location.reload();
 
   }


  return (
    <div className='main-container'>
        <div className='header-calculate'>
          <button className='refresh' onClick={() => refresh()}>get latest</button>
          <h1>Plantito Plantita</h1>
          <p>Moist: <span>{MoistData}</span></p>
          <p>Acidity</p>
          <input type="text" placeholder='enter acidityy' onChange={(e) => setInputAcidity(e.target.value)}/>
          <p>{result}</p>

          <button onClick={(e) => calculateMoist()}>show suggestion</button>
      </div>

      {decider && <Suggestions result={result}/>}
      

    </div>
  )
}

export default App