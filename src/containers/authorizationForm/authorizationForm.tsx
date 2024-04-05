import "./authorizationForm.css"
import LoginInput from "../../element/loginInput/loginInputNormal/loginInput.tsx";
import LoginButton from "../../element/loginButton/loginButton.tsx";
import LoginInputPassword from "../../element/loginInput/logininputPassword/loginInputPassword.tsx";

export default function AuthorizationForm() {
    return (
        <div className={"authorization-form"}>
            <LoginInput placeHolder={"Почта"} className={"authorization-form-element"}/>
            <LoginInputPassword placeHolder={"Пароль"} className={"authorization-form-element"}/>
            <LoginButton Text={"Войти"} className={"authorization-form-element"}/>
        </div>
    )
}
