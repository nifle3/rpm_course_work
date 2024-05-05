import "./settings.css"
import Exit from "../../element/exit/exit.tsx";
import SettingsLink from "../../element/settingsLink/settingsLink.tsx";
import {useStore} from "../../store.ts";
import Error from "../error/error.tsx";
import {useEffect} from "react";

export default function Settings() {
    useEffect(() => {
        document.title = document.title = "КИНОHUB | Настройки"
    });

    const isLogin = useStore(set => set.isLogin)
    if (!isLogin) {
        return <Error errorCode={401} errorInfo={"Yoy have no jwt code in your local storage"} errorShortInfo={"Please first login"}/>
    }

    return (
        <>
            <Exit/>
            <div className={"settings-wrapper"}>
                <h1>Настройки</h1>
                <SettingsLink Title={"Подписка"} Info={"Управление подпиской"} RedirectLink={"/settings/subscribe"}/>
                <SettingsLink Title={"Данные"} Info={"Изменение контактных данных"} RedirectLink={"/settings/data"}/>
            </div>
        </>
    )
}