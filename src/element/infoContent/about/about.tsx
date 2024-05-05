import "./about.css"
import ButtonWatch from "../buttonWatch/buttonWatch.tsx";

export interface AboutProps {
    watchButtonTitle : string
}

export default function About({watchButtonTitle} : AboutProps) {
    return (
        <div className={"info-content-about"}>
            <div className={"about-title-wrapper"}>
                <span className={"about-title"}>title</span><br/>
                <span className={"about-description"}>Глупые люди не считались с хомяками и они решили взять все в свои лапы....</span>
            </div>
            <div className={"about-button-wrapper"}>
                <ButtonWatch text={watchButtonTitle} onClick={() => {}}/>
                <ButtonWatch text={"Трейлер"} onClick={() => {}}/>
            </div>
        </div>
    )
}