import "./loginButton.css"

export interface LoginButtonProps {
    text : string
    className : string
    isDisable? : boolean
    action? : () => void
}

export default function LoginButton({text, action, isDisable, className} : LoginButtonProps) {
    return (
        <button className={"login-button " + className} onClick={action} disabled={isDisable}>{text}</button>
    )
}