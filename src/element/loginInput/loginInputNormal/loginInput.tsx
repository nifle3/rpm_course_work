import "../loginInput.css"
import {InputProps} from "../props.ts";

export default function LoginInput({placeHolder, className, inputRef} : InputProps) {
   return (
       <input className={"input-login " + className}
              placeholder={placeHolder} ref={inputRef} required={true} maxLength={50} type={"email"}/>
   )
}