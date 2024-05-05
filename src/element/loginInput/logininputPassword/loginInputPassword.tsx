import "../loginInput.css"
import "./loginInputPassword.css"
import {InputProps} from "../props.ts"
import noSeePassword from "./icons/noSeePassword.svg"
import seePassword from "./icons/seePassword.svg"
import {useState} from "react";

type typeInput = "password" | "text"

const passwordNameInput : typeInput = "password"
const textNameInput : typeInput = "text"

export default function LoginInputPassword({placeHolder, className, inputRef} : InputProps) {
    const [type, setType] = useState<typeInput>(passwordNameInput)
    const [icon, setIcon] = useState<string>(noSeePassword)

    const setAlternativeType = () => {
        if (type == passwordNameInput) {
            setType(textNameInput)
            setIcon(seePassword)

        } else {
            setType(passwordNameInput)
            setIcon(noSeePassword)
        }
    }

    return (
        <div className={"input-login-password"}>
            <input className={"input-login " + className}
                   placeholder={placeHolder} type={type} ref={inputRef} required={true} maxLength={50} />
            <span className={"input-login-password-see-password"}>
                <img src={icon} alt={"Открыть пароль"} onClick={setAlternativeType}
                     />
            </span>
        </div>
    )
}