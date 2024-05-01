import "./subscribeCode.css"
import Exit from "../../element/exit/exit.tsx";

export default function SubscribeCode() {
    return (
        <div className={"subscribe-code-container"}>
            <Exit/>
            <div>
                <h1 className={"subscribe-code-title"}>Получите подписку на фильмы,сериалы и аниме</h1>
                <div className={"subscribe-code-input-wrapper"}>
                    <input className={"subscribe-code-input"} placeholder={"ВВЕДИТЕ ПРОМОКОД"}/>
                    <button className={"subscribe-code-button"}>Получить подписку</button>
                </div>
            </div>
        </div>
    )
}