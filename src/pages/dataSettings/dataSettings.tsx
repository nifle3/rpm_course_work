import "./dataSettings.css"
import icon from "./icons/710zC3Z.png"
import pen from "./icons/pen.svg"
import Exit from "../../element/exit/exit.tsx";
import DataSettingsInput from "../../element/dataSettingsInput/dataSettingsInput.tsx";
import {useStore} from "../../store.ts";
import Error from "../error/error.tsx";
import {useEffect, useState} from "react";
import {useQuery} from "@tanstack/react-query";
import Api from "../../api.ts";


export default function DataSettings() {
    const isLogin = useStore(set => set.isLogin)

    const {data, isError, error, isLoading} = useQuery({
        queryKey: ['profile'],
        queryFn: Api.GetUser
    })

    const [errorEmail, setErrorEmail] = useState<string>("")
    const [errorPassword, setErrorPassword] = useState<string>("")
    const [errorName, setErrorName] = useState<string>("")
    const [errorSurname, setErrorSurname] = useState<string>("")

    useEffect(() => {
        document.title = document.title = "КИНОHUB | Аккаунт"
    });

    if (!isLogin) {
        return <Error errorCode={401} errorInfo={"Yoy have no jwt code in your local storage"} errorShortInfo={"Please first login"}/>

    }

    if (isError) {
        return <Error errorCode={500} errorShortInfo={error.name} errorInfo={error.message}/>
    }

    if (isLoading) {
        return <span>Загрузка...</span>
    }

    return (
        <>
            <Exit RedirectTo={"/settings"}/>
            <div className={"data-settings-container"}>
                <div className={"data-settings-info"}>
                    <span className={"data-settings-title"}>Данные аккаунта</span>
                    <DataSettingsInput Title={"Почта"} Placeholder={data.email} Type={"email"}
                                       Action={(newValue: string) => {
                                           return Api.UpdateUser(newValue, "Email")
                                       }} SetError={setErrorEmail}/>
                    <span className={"error"}>{errorEmail}</span>
                    <DataSettingsInput Title={"Пароль"} Placeholder={"Введите новый пароль"} Type={"password"}
                                       Action={(newValue: string) => {
                                           return Api.UpdateUser(newValue, "Password")
                                       }} SetError={setErrorPassword}/>
                    <span className={"error"}>{errorPassword}</span>
                    <DataSettingsInput Title={"Имя"} Placeholder={data.name == "" ? "Не задано" : data.name}
                                       Type={"text"}
                                       Action={(newValue: string) => {
                                           return Api.UpdateUser(newValue, "Name")
                                       }} SetError={setErrorName}/>
                    <span className={"error"}>{errorName}</span>
                    <DataSettingsInput Title={"Фамилия"} Placeholder={data.surname == "" ? "Не задано" : data.surname}
                                       Type={"text"} Action={(newValue: string) => {
                        return Api.UpdateUser(newValue, "Surname")
                    }} SetError={setErrorSurname}/>
                    <span className={"error"}>{errorSurname }</span>
                </div>
                <div className={"data-settings-image-wrapper"}>
                    <div className={"data-settings-ava-wrapper"}>
                        <img src={Api.GetImage(data.image_url)} alt={icon} className={"data-settings-image"}/>
                        <div className={"pen-wrapper"}>
                        <img src={pen} alt={""}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
