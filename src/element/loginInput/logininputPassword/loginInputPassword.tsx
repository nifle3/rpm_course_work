import "../loginInput.css"
import "./loginInputPassword.css"
import noSeePassword from "./icons/noSeePassword.svg"
import {useState} from "react";

export interface InputProps {
    placeHolder : string
    className? : string
}

type typeInput = "password" | "text"

export default function LoginInputPassword({placeHolder, className} : InputProps) {
    const [type, setType] = useState<typeInput>("password")

    const setAlternativeType = () => {
        if (type == "password") {
            setType("text")
        } else {
            setType("password")
        }
    }

    return (
        <div className={"login-input-password"}>
            <img src={noSeePassword} alt={"Открыть пароль"} onClick={setAlternativeType}
                 className={"input-login-password-see-password"}/>
            <input className={"input-login" + " " + className}
                    placeholder={placeHolder} type={type}/>
        </div>
    )
}