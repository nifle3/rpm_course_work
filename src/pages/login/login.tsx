import "./login.css"
import backgroundImage from "./icons/backgroundImage.png"
import exit from "./icons/exit.svg"
import {Link, Outlet, useNavigate} from "react-router-dom";
import {useState} from "react";

export default function Login() {
    const [isEnterToAccount, setIsEnterToAccount] = useState<boolean>(true)
    const [isRegistration, setIsRegistration] = useState<boolean>(false);
    const navigate = useNavigate()

    const swapElement = () => {
        setIsEnterToAccount(!isEnterToAccount)
        setIsRegistration(!isRegistration)
    }

    const goBack = () => {
        navigate("/")
    }

    return (
        <div className={"login-page"}>
            <img src={exit} alt={"Назад"} className={"login-exit"} onClick={goBack}/>
            <img src={backgroundImage} alt={""} className={"login-background-image"}/>
            <div className={"login-container"}>
                <div className={"login-link-container"}>
                    <Link to={"/enterToAccount"} onClick={swapElement}
                          className={isEnterToAccount ? "login-link-selected" : "login-link"}>
                        Вход
                    </Link>
                    <Link to={"/enterToAccount/registration"} onClick={swapElement}
                          className={isRegistration ? "login-link-selected" : "login-link"}>
                        Регистрация
                    </Link>
                </div>
                <div className={"login-routes-wrapper"}>
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}