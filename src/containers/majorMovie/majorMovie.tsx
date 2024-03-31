import "./majorMovie.css"
import {useEffect} from "react";

export default function MajorMovie() {
    useEffect(() => {
        document.title = "КИНОHUB | Кино"
    })

    return (
        <>
        <h1>Major movie</h1>
        </>
    )
}