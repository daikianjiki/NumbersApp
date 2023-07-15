import axios from "axios"
import { ChangeEvent, useEffect, useState } from "react"


export default function Date() {

    const [month, setMonth] = useState(0)
    const [date, setDate] = useState(0)
    const [trivia, setTrivia] = useState("")

    function getDate(): void {
        axios.get(`http://numbersapi.com/${month}/${date}/date`).then
            ((response) => {
                console.log(response.data)
                setTrivia(response.data)
            })

    }
    function onChange(e: ChangeEvent<HTMLInputElement>) {
        if (e.target.name === "month") {
            setMonth(parseInt(e.target.value))
        } else if (e.target.name === "date") {
            setDate(parseInt(e.target.value))
        }

    }
    
    return (
        <>
            <p>Date Works!</p>
            <br/>
            <input name="month" placeholder="Enter Month" onChange={onChange}/>
            <input name="date" placeholder="Enter Date" onChange={onChange}/>
            <br/>
            <button onClick={getDate}>Get</button>
            <br/>
            {trivia}
        </>
    )
}