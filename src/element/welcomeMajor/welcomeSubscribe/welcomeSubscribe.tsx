import "./welcomeSubscribe.css"
import "../welcomeMajor.css"
import infoPicture from "./icons/infoPicture.png"
import {useNavigate} from "react-router-dom";

export default function WelcomeSubscribe(){
    const navigate = useNavigate()

    const onclick = () => {
        navigate("/player/1")
    }

    return (
        <div className={"welcome welcome-major-page"}>
            <img className={"welcome-image"} src={infoPicture} alt={"Картинка"}/>
            <div className={"major-subscribe-info-text"}>
                <span className={"welcome-text"}>
                    CELL RUNNER
                </span>
                <span className={"welcome-number"}>
                    2049
                </span>
                <div className={"major-subscribe-info-text-button"}>
                    <button onClick={onclick}>
                        Смотреть фильм
                    </button>
                    <button>
                        О фильме
                    </button>
                </div>
            </div>
        </div>
    )
}