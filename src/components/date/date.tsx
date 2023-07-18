import axios from "axios"
import { ChangeEvent, useEffect, useState } from "react"
import "./date.css"

export default function Date() {

    const [month, setMonth] = useState("")
    const [date, setDate] = useState("")
    const [trivia, setTrivia] = useState("")
    const [favorites, setFavorites] = useState<string[]>([])

    useEffect(() => {
    }, [favorites])

    function getDate(): void {
        axios.get(`http://numbersapi.com/${month}/${date}/date`).then
            ((response) => {
                console.log(response.data)
                setTrivia(response.data)
            })
        setMonth("")
        setDate("")
    }
    function getRandomDate(): void {
        axios.get("http://numbersapi.com/random/date").then
            ((response) => {
                console.log(response.data)
                setTrivia(response.data)
            })
    }
    function onChange(e: ChangeEvent<HTMLInputElement>) {
        if (e.target.name === "month") {
            setMonth(e.target.value)
        } else if (e.target.name === "date") {
            setDate(e.target.value)
        }
    }
    function saveToFavorites() {
        const favorite = trivia
        setFavorites([...favorites, favorite])
        setTrivia("")
    }
    
    return (
        <>  
            <div className="dateInput">
                <h1>Interesting facts about dates!</h1>
                <label>Month:</label>
                <input name="month" placeholder="Enter Month" onChange={onChange} value={month}/>
                <br></br>
                <label>Day:</label>
                <input name="date" placeholder="Enter Date" onChange={onChange} value={date}/>
                <br></br>
                <button className="btn" onClick={ getDate }>Generate</button>
                <button className="btn" onClick={ getRandomDate }>Generate Random</button>
            </div>
            {trivia ? 
                <div className="dateTrivia">
                    <h2>Facts!</h2>
                    <p>{trivia}</p> <button className="btn" onClick={ saveToFavorites }>Save</button>
                </div>
            : ""}
            <div className="dateList">
                <h2>My Saved Date Facts: {favorites.length != 0 ? "" : "None Saved"}</h2>
                {favorites.map(favorite => 
                    <p key={ favorite }>{ favorite }</p>)}
            </div>
        </>
    )
}