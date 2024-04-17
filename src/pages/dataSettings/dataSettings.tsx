import "./dataSettings.css"
import icon from "./icons/710zC3Z.png"
import Exit from "../../element/exit/exit.tsx";
import DataSettingsInput from "../../element/dataSettingsInput/dataSettingsInput.tsx";


//TODO: сделать так что бы аватарка затемнялась при наводке
export default function DataSettings() {
    return (
        <>
            <Exit RedirectTo={"/settings"}/>
            <div className={"data-settings-container"}>
                <div className={"data-settings-info"}>
                    <span className={"data-settings-title"}>Данные аккаунта</span>
                    <DataSettingsInput Title={"Почта"} Placeholder={"umnipon@pon.pon"}/>
                    <DataSettingsInput Title={"Пароль"} Placeholder={"umnipon@pon.pon"}/>
                    <DataSettingsInput Title={"Имя"} Placeholder={"umnipon@pon.pon"}/>
                    <DataSettingsInput Title={"Фамилия"} Placeholder={"umnipon@pon.pon"}/>
                </div>
                <div className={"data-settings-image-wrapper"}>
                    <div className={"data-settings-ava-wrapper"}>
                        <img src={icon} alt={"Аватарка"} className={"data-settings-image"}/>
                    </div>
                </div>
            </div>
        </>
    )
}