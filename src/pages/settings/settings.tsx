import "./settings.css"
import Exit from "../../element/exit/exit.tsx";
import SettingsLink from "../../element/settingsLink/settingsLink.tsx";

export default function Settings() {
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