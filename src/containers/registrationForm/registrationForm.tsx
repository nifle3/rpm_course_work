import "./registrationForm.css"
import LoginInput from "../../element/loginInput/loginInputNormal/loginInput.tsx";
import LoginInputPassword from "../../element/loginInput/logininputPassword/loginInputPassword.tsx";
import LoginButton from "../../element/loginButton/loginButton.tsx";

//TODO: переделать кнопку для отображения
export default function RegistrationForm() {
    return (
        <div className={"registration-form"}>
            <LoginInput placeHolder={"Логин"} className={"registration-form-element"}/>
            <LoginInputPassword placeHolder={"Пароль"} className={"registration-form-element"}/>
            <LoginInputPassword placeHolder={"Повторный парлоь"} className={"registration-form-element"}/>
            <LoginButton Text={"Зарегистрироваться"} className={"registration-form-button"}/>
        </div>
    )
}