import "./loginButton.css"

export interface LoginButtonProps {
    Text : string
    Action? : () => void
    className? : string
}

export default function LoginButton({Text, Action, className} : LoginButtonProps) {
    return (
        <button className={"login-button" + " " + className} onClick={Action}>{Text}</button>
    )
}