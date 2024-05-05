import "./login.css"
import backgroundImage from "./icons/backgroundImage.png"
import {Link, Outlet} from "react-router-dom";
import {useEffect, useLayoutEffect, useState} from "react";
import Exit from "../../element/exit/exit.tsx";

export default function Login() {
    const [isEnterToAccount, setIsEnterToAccount] = useState<boolean>(true)
    const [isRegistration, setIsRegistration] = useState<boolean>(false);

    useLayoutEffect(() => {
        if (document.documentURI.includes("registration")) {
            swapToRegistration()
        }
    });

    useEffect(() => {
        if (document.documentURI.endsWith("/enterToAccount")) {
            swapToEnterToAccount()
        }
    }, []);

    const swapToRegistration = () => {
        setIsRegistration(true)
        setIsEnterToAccount(false)
    }

    const swapToEnterToAccount = () => {
        setIsRegistration(false)
        setIsEnterToAccount(true)
    }

    return (
        <>
            <Exit/>
            <img src={backgroundImage} alt={""} className={"login-background-image"}/>
            <div className={"login-container"}>
                <div className={"login-link-container"}>
                    <Link to={"/enterToAccount"} onClick={swapToEnterToAccount}
                          className={isEnterToAccount ? "login-link-selected" : "login-link"}>
                        Вход
                    </Link>
                    <Link to={"/enterToAccount/registration"} onClick={swapToRegistration}
                          className={isRegistration ? "login-link-selected" : "login-link"}>
                        Регистрация
                    </Link>
                </div>
                <div className={"login-routes-wrapper"}>
                    <Outlet/>
                </div>
            </div>
        </>
    )
}