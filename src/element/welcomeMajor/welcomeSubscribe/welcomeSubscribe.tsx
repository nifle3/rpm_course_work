import "./welcomeSubscribe.css"
import "../welcomeMajor.css"
import infoPicture from "./icons/infoPicture.png"

// TODO: сделать так что бы не накладывался на бургер
export default function WelcomeSubscribe(){
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
                    <button>
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