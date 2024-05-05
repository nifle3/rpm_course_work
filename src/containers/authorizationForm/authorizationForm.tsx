import "./authorizationForm.css"
import LoginInput from "../../element/loginInput/loginInputNormal/loginInput.tsx";
import LoginButton from "../../element/loginButton/loginButton.tsx";
import LoginInputPassword from "../../element/loginInput/logininputPassword/loginInputPassword.tsx";
import {useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useStore} from "../../store.ts";
import {useMutation} from "@tanstack/react-query";
import Api from "../../api.ts";

export default function AuthorizationForm() {
    useEffect(() => {
        document.title = document.title = "КИНОHUB | Вход"
    });

    const navigate = useNavigate()
    const login = useStore(set => set.Login)

    const email = useRef<HTMLInputElement>(null)

    const password = useRef<HTMLInputElement>(null)
    const [error, setError] = useState<string>("")

    const mutation = useMutation({
        mutationFn: Api.Login,
        onSuccess: (data) => {
            login(data.token)
            navigate("/")
        },
        onError: () => {
            setError("Не верный логин или пароль")
        }
    })

    const onClick = () => {
        if (email.current == null){
            throw "Email is null"
        }

        if (password.current == null) {
            throw "Password is null"
        }

        if (email.current.validationMessage != "") {
            setError("Почта: " +email.current.validationMessage)
            return
        }

        if (password.current.validationMessage != "") {
            setError("Пароль: " +  password.current.validationMessage)
        }

        mutation.mutate({password: password.current.value, email: email.current.value})
    }

    return (
        <div className={"authorization-form"}>
            <LoginInput placeHolder={"Почта"} className={"authorization-form-element"} inputRef={email}/>
            <LoginInputPassword placeHolder={"Пароль"} className={"authorization-form-element"} inputRef={password}/>
            <LoginButton text={"Войти"} className={"auth-form-button"} action={onClick} isDisable={mutation.isPending}/>
            <span className={"form-error"}>{error}</span>
        </div>
    )
}
