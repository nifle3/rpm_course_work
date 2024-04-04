import "./my.css"
import {useEffect} from "react";

export default function My() {
    useEffect(() => {
        document.title = "КИНОHUB | Моё"
    })

    return (
        <>
            <h1>My</h1>
        </>
    )
}