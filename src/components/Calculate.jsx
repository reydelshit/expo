import React, { useEffect, useState } from 'react'

const Home = () => {

  const [moistNumber, setMoistNumber] = useState(209)
  const [result, setResult] = useState(0)
  const [inputAcidity, setInputAcidity] = useState(0)
  const [data, setData] = useState([])


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/data');
        const jsonData = await response.json();
        setData(jsonData.field1);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, [data]); 


  const calculateMoist = () => {
   setResult(moistNumber + parseFloat(inputAcidity))

  }

  const refresh = () => {
    location.reload();
 
   }

  return (
    <div className='header-calculate'>
      <button onClick={() => refresh()}>get latest</button>
      <h1>calcute here</h1>
      <p>Moist: {data}</p>
      <p>Acidity</p>
      <input type="text" placeholder='enter acidityy' onChange={(e) => setInputAcidity(e.target.value)}/>
      <p>{result}</p>

      <button onClick={(e) => calculateMoist()}>show suggestion</button>
    </div>
  )
}

export default Home