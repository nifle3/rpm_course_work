import "./registrationForm.css"
import LoginInput from "../../element/loginInput/loginInputNormal/loginInput.tsx";
import LoginInputPassword from "../../element/loginInput/logininputPassword/loginInputPassword.tsx";
import LoginButton from "../../element/loginButton/loginButton.tsx";
import {useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import Api from "../../api.ts";
import {useMutation} from "@tanstack/react-query";

export default function RegistrationForm() {
    useEffect(() => {
        document.title = document.title = "КИНОHUB | Регистрация"
    });

    const navigate = useNavigate()

    const email = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)
    const repeatPassword = useRef<HTMLInputElement>(null)

    const [error, setError] = useState<string>("")

    const mutation = useMutation({
        mutationFn: Api.Registration,
        onSuccess: () => {
            navigate("/")
        },
        onError: () => {
            setError("Ошибка запроса")
        }
    })

    const onClilck = () => {
        if (email.current == null){
            throw "Email is null"
        }

        if (password.current == null) {
            throw "Password is null"
        }

        if (repeatPassword.current == null) {
            throw "Password is null"
        }

        if (email.current.validationMessage != "") {
            setError("Почта: " + email.current.validationMessage)
            return
        }

        if (password.current.validationMessage != "") {
            setError("Пароль: " +  password.current.validationMessage)
            return
        }

        if (repeatPassword.current.validationMessage != "") {
            setError("Повторите пароль: " +  repeatPassword.current.validationMessage)
            return
        }

        if (repeatPassword.current.value != password.current.value) {
            setError("Пароли не совпадают")
            return
        }

        mutation.mutate({password: password.current.value, email: email.current.value})

    }

    return (
        <div className={"registration-form"}>
            <LoginInput placeHolder={"Почта"} className={"registration-form-element"} inputRef={email}/>
            <LoginInputPassword placeHolder={"Пароль"} className={"registration-form-element"} inputRef={password}/>
            <LoginInputPassword placeHolder={"Повторный пароль"} className={"registration-form-element"} inputRef={repeatPassword}/>
            <LoginButton text={"Зарегистрироваться"} className={"registration-form-button"} action={onClilck} isDisable={mutation.isPending}/>
            <span>{error}</span>
        </div>
    )
}