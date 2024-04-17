import "./subscribeSettings.css"
import Exit from "../../element/exit/exit.tsx";

export default function SubscribeSettings() {
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