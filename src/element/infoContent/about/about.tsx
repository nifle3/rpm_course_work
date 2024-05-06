import "./about.css"
import ButtonWatch from "../buttonWatch/buttonWatch.tsx";
import {useNavigate} from "react-router-dom";

export interface AboutProps {
    watchButtonTitle : string
    id : number
    title : string
    descriptions : string
}

export default function About({watchButtonTitle, id, title, descriptions} : AboutProps) {
    const navigate = useNavigate()

    const watchClick = () => {
        navigate("/player/" + id)
    }

    return (
        <div className={"info-content-about"}>
            <div className={"about-title-wrapper"}>
                <span className={"about-title"}>{title}</span><br/>
                <span className={"about-description"}>{descriptions}</span>
            </div>
            <div className={"about-button-wrapper"}>
                <ButtonWatch text={watchButtonTitle} onClick={watchClick}/>
                <ButtonWatch text={"Трейлер"} onClick={() => {}}/>
            </div>
        </div>
    )
}