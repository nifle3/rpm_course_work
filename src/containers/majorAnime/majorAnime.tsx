import "./majorAnime.css"
import {useEffect} from "react";

export default function MajorAnime() {
    useEffect(() => {
        document.title = "КИНОHUB | Аниме"
    })

    return (
        <>
        <h1>Major anime</h1>
        </>
    )
}