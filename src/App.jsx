import { useEffect, useState } from 'react';
import Suggestions from './components/Suggestions';

import iconYellow from './assets/images/icon-memory.svg';
import iconGreen from './assets/images/icon-verbal.svg';
import iconRed from './assets/images/icon-reaction.svg';

import iconRefresh from './assets/images/icon-refresh.svg';

const App = () => {
  const [result, setResult] = useState(0);
  const [inputAcidity, setInputAcidity] = useState(0);
  const [MoistData, setMoistData] = useState([]);

  const [decider, setDecider] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const response = await fetch('http://localhost:3000/data');
    //     const jsonData = await response.json();
    //     // setMoistData(jsonData.valueMoist);
    //     setMoistData(518);
    //   } catch (error) {
    //     console.error('Error:', error);
    //   }
    // };

    // fetchData();

    setMoistData(518);
  }, [MoistData]);

  const calculateMoist = () => {
    if (inputAcidity == '') {
      setError('error please enter acidity');
    }

    console.log('inputAcidity:', inputAcidity);
    console.log('MoistData:', MoistData);

    if (parseInt(inputAcidity) <= 6 && MoistData >= 700 && MoistData <= 1000) {
      setResult(1);
    } else if (
      parseInt(inputAcidity) === 7 &&
      MoistData >= 700 &&
      MoistData <= 1000
    ) {
      setResult(2);
    } else if (
      parseInt(inputAcidity) >= 8 &&
      MoistData >= 700 &&
      MoistData <= 1000
    ) {
      setResult(3);
    } else if (
      parseInt(inputAcidity) <= 6 &&
      MoistData >= 400 &&
      MoistData <= 600
    ) {
      setResult(4);
    } else if (
      parseInt(inputAcidity) === 7 &&
      MoistData >= 400 &&
      MoistData <= 600
    ) {
      setResult(5);
    } else if (
      parseInt(inputAcidity) >= 8 &&
      MoistData >= 400 &&
      MoistData <= 600
    ) {
      setResult(6);
    } else if (
      parseInt(inputAcidity) <= 6 &&
      MoistData >= 100 &&
      MoistData <= 300
    ) {
      setResult(7);
    } else if (
      parseInt(inputAcidity) === 7 &&
      MoistData >= 100 &&
      MoistData <= 300
    ) {
      setResult(8);
    } else if (
      parseInt(inputAcidity) >= 8 &&
      MoistData >= 100 &&
      MoistData <= 300
    ) {
      setResult(9);
    } else {
      console.log('error acidity level not reached');
    }

    setDecider(true);
  };

  const refresh = () => {
    location.reload();
  };

  return (
    <div className="main-container">
      <div className="inside-container">
        <button className="refresh" onClick={() => refresh()}>
          <img src={iconRefresh} alt="" />
        </button>

        <div className="main_description">
          <h1 className="title">Plantito Plantita</h1>
          <div
            className="gradient_container moist"
            style={{ marginBottom: 10 }}
          >
            <img src={iconYellow} alt="" />
            <p>
              Moist <span className="moist_data">{MoistData}</span>
            </p>
          </div>

          <div className="gradient_container acidity">
            <img src={iconGreen} alt="" />
            <p>Acidity</p>
            <input
              type="text"
              placeholder="enter acidityy"
              onChange={(e) => setInputAcidity(e.target.value)}
            />
          </div>

          <div className="gradient_container ph">
            <img src={iconRed} alt="" />
            <p>
              PH <span className="res">{result}</span>
            </p>
          </div>

          <div className="error_container">
            {error.length != 0 ? error : ''}
          </div>

          <button
            className="suggestion_button"
            onClick={() => calculateMoist()}
          >
            {decider ? 'close suggestion' : 'show suggestion'}
          </button>
        </div>

        {decider && <Suggestions result={result} />}
      </div>
    </div>
  );
};

export default App;
