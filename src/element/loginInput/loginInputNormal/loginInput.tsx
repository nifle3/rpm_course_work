import "../loginInput.css"

export interface InputProps {
    placeHolder : string
    className? : string
}

export default function LoginInput({placeHolder, className} : InputProps) {
    return (
        <input className={"input-login" + " " + className}
               placeholder={placeHolder}/>
    )
}