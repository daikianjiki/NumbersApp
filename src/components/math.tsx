import axios from 'axios';
import React, {ChangeEvent, useState} from 'react';
import profMath from '../img/professor-farnsworth-futurama.jpg';


export default function Math() {

    const [number, setNumber] = useState("");
    const [mathFact, setMathFact] = useState("");

    const setInput = (synthEvent: ChangeEvent<HTMLInputElement>) => {
        setNumber(synthEvent.target.value);
    }

    const getMathFact = () => {
        
        axios.get<any>(`http://numbersapi.com/${number}/math`).then(response => setMathFact(response.data));
    }

    const randomNumFact = () => {
        setNumber("");
        axios.get<any>(`http://numbersapi.com/random/math`).then(response => setMathFact(response.data));
    }

    return (

        <div style={{
            textAlign: 'center',
            margin: '10px'
        }}>
            <input type="number" value={number} onChange={setInput} placeholder="Enter A Number" min="0"></input>

            <div className="buttons">
                <button onClick={getMathFact}>Math Fact</button>

                <button onClick={randomNumFact}>&#128256;</button>
            </div>

            <img src={profMath}/>

            
            <p style={{
                wordBreak: 'break-word',
                position: 'absolute',
                top: '20%',
                left: '30%',
                width: '15%',
                fontSize: '30px'
            }}>{mathFact}</p>
            
        </div>
    );
}