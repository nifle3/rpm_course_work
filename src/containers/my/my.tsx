import "./my.css"
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

export default function My() {
    const navigate = useNavigate()

    useEffect(() => {
        document.title = "КИНОHUB | Моё"
    })

    useEffect(() => {
        navigate("/notInAccount")
    });

    return (
        <>
            <h1>My</h1>
        </>
    )
}