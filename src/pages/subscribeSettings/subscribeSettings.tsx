import "./subscribeSettings.css"
import Exit from "../../element/exit/exit.tsx";
import {useStore} from "../../store.ts";
import Error from "../error/error.tsx";
import {useEffect} from "react";

export default function SubscribeSettings() {
    useEffect(() => {
        document.title = document.title = "КИНОHUB | Настройки подписки"
    });

    const isLogin = useStore(set => set.isLogin)
    if (!isLogin) {
        return <Error errorCode={401} errorInfo={"Yoy have no jwt code in your local storage"} errorShortInfo={"Please first login"}/>
    }

    return (
        <>
            <Exit RedirectTo={"/settings"}/>
            <div className={"subscribe-settings-container"}>
                <span className={"subscribe-settings-title"}>Управление подпиской</span>
                <div className={"subscribe-settings-info-container"}>
                    <span className={"subscribe-settings-status"}>Активная подписка</span>
                    <div className={"subscribe-settings-subscribe-info"}>
                        <span>11.11.2077</span>
                        <strong>PREMIUM</strong>
                        <span>12 месяцев</span>
                        <span>до</span>
                        <span>11.11.2078</span>
                    </div>
                    <button className={"subscribe-settings-button"}>ОТКАЗАТЬСЯ ОТ ПОДПИСКИ</button>
                </div>
            </div>
        </>
    )
}