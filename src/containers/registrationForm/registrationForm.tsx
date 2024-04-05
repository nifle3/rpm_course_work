import "./registrationForm.css"
import LoginInput from "../../element/loginInput/loginInputNormal/loginInput.tsx";

export default function RegistrationForm() {
    return (
        <div className={"registration-form"}>
            <LoginInput placeHolder={""} className={"registration-form-element"}/>
            <LoginInput placeHolder={""} className={"registration-form-element"}/>
            <LoginInput placeHolder={""} className={"registration-form-element"}/>

        </div>
    )
}