import React, { useState } from 'react';
import axios from 'axios';
import './TriviaFacts.css';

const Trivia = () => {
  const [number, setNumber] = useState('');
  const [fact, setTrivia] = useState('');

  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setNumber(event.target.value);
  };

  const getTrivia = () => {
    axios.get(`http://numbersapi.com/${number}`)
      .then((response) => {
        setTrivia(response.data);
      });
  };

  return (
    <div className="triviaCenter">
        <>Enter A Number</>
      <input type="text" value={number} onChange={handleChange} />
      <button onClick={getTrivia}>Get Fact</button>
      <p>{fact}</p>
    </div>
  );
};

export default Trivia;