import axios from "axios"
import { ChangeEvent, useEffect, useState } from "react"


export default function Date() {

    const [month, setMonth] = useState(0)
    const [date, setDate] = useState(0)
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

    }
    function onChange(e: ChangeEvent<HTMLInputElement>) {
        if (e.target.name === "month") {
            setMonth(parseInt(e.target.value))
        } else if (e.target.name === "date") {
            setDate(parseInt(e.target.value))
        }
    }
    function saveToFavorites() {
        const favorite = trivia
        setFavorites([...favorites, favorite])
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
            {trivia ? <button onClick={saveToFavorites}>Save</button> : ""}
            {favorites.map(favorite => 
                <p key={favorite}>{favorite}</p>)}
        </>
    )
}