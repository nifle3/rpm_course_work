import "./dataSettings.css"
import icon from "./icons/710zC3Z.png"
import pen from "./icons/pen.svg"
import Exit from "../../element/exit/exit.tsx";
import DataSettingsInput from "../../element/dataSettingsInput/dataSettingsInput.tsx";
import {useStore} from "../../store.ts";
import Error from "../error/error.tsx";
import {useEffect, useRef, useState} from "react";
import {useMutation, useQuery} from "@tanstack/react-query";
import Api from "../../api.ts";
import Loader from "../../element/loader/loader.tsx";
import {queryClient} from "../../main.tsx";
import {useNavigate} from "react-router-dom";


export default function DataSettings() {
    const isLogin = useStore(set => set.isLogin)
    const navigate = useNavigate()

    const mutation = useMutation({
        mutationFn: Api.UpdatePhoto,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['profile']})
        },
        onError: () => {
            navigate("/error/500")
        }
    })

    const {data, isError, error, isLoading} = useQuery({
        queryKey: ['profile'],
        queryFn: Api.GetUser
    })

    const inputFileRef = useRef<HTMLInputElement>(null)

    const [errorEmail, setErrorEmail] = useState<string>("")
    const [errorPassword, setErrorPassword] = useState<string>("")
    const [errorName, setErrorName] = useState<string>("")
    const [errorSurname, setErrorSurname] = useState<string>("")
    const [fileError, setFileError] = useState<string>("")

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
        return <Loader/>
    }

    const uploadFile = () => {
        if (!inputFileRef || !inputFileRef.current || !inputFileRef.current.files)
            throw "INPUT FILE REF NULL"

        if (!inputFileRef.current.validity.valid) {
            setFileError(inputFileRef.current.validationMessage)
            return
        }


        mutation.mutate({file: inputFileRef.current.files[0], fileName: inputFileRef.current.files[0].name})
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
                                       }} SetError={setErrorName} Regexp={"^[А-Яа-яЁё]+$"}
                                       RegexpValidationError={"Надо ввести слово на русском без пробелов"}/>
                    <span className={"error"}>{errorName}</span>
                    <DataSettingsInput Title={"Фамилия"} Placeholder={data.surname == "" ? "Не задано" : data.surname}
                                       Type={"text"} Action={(newValue: string) => {
                        return Api.UpdateUser(newValue, "Surname")
                    }} SetError={setErrorSurname} Regexp={"^[А-Яа-я]+$"}
                                       RegexpValidationError={"Надо ввести слово на русском без пробелов"}/>
                    <span className={"error"}>{errorSurname }</span>
                </div>
                <div className={"data-settings-image-wrapper"}>
                    <div className={"data-settings-ava-wrapper"}>
                        <img src={Api.GetImage(data.image_url)} alt={icon} className={"data-settings-image"}/>
                        <div className={"pen-wrapper"}>
                            <input type={"file"} id={"file-input"} accept={"image/jpeg,image/png"}
                                style={{display:"none"}} onChange={uploadFile} ref={inputFileRef}/>
                            <label htmlFor={"file-input"} className={"label-image-wrapper"}>
                                <img src={pen} alt={""}/>
                            </label>
                        </div>
                    </div>
                    <span className={"error"}>{fileError}</span>
                </div>
            </div>
        </>
    )
}
