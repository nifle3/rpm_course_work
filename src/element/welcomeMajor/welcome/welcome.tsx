import "./welcome.css"
import "../welcomeMajor.css"
import logo from "./icons/logo.svg"
import {useNavigate} from "react-router-dom";
import {useStore} from "../../../store.ts";

//TODO: сделать лого не фулл картинкой
//TODO: сделать лучше градиент
export default function Welcome() {
    const navigate = useNavigate()
    const isLogin = useStore(set => set.isLogin)


    const clickIsNotLogin = () => {
        navigate("/enterToAccount")
    }

    const clickIsLogin = () => {
        navigate("/subscribe")
    }

    return (
        <div className={"welcome major-page-info"}>
            <img src={logo} alt={"КИНОХАБ"} className={"welcome-image"}/>
            <div className={"info-page-hover"}>
                <div className={"info-page-hover-text"}>
                    <h1>
                    Все преимущества КиноHub для вас, а так же больше фильмов ,
                    сериалов и аниме 20 дней бесплатно по промокоду KINOSTART
                    </h1>
                </div>
                <button className={"ingo-page-hover-btn"} onClick={isLogin ? clickIsLogin : clickIsNotLogin}>
                    Попробовать на 30 дней бесплатно
                </button>
            </div>
        </div>
    )
}