import "../loginInput.css"
import {InputProps} from "../props.ts";

export default function LoginInput({placeHolder, isRequired, className} : InputProps) {
    return (
        <input className={"input-login" + " " + className}
               placeholder={placeHolder} required={isRequired ?? true}/>
    )
}