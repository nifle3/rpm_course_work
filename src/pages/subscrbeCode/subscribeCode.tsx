import "./subscribeCode.css"
import Exit from "../../element/exit/exit.tsx";
import {useStore} from "../../store.ts";
import Error from "../error/error.tsx";
import {useEffect} from "react";

export default function SubscribeCode() {
    useEffect(() => {
        document.title = document.title = "КИНОHUB | Активация кода"
    });

    const isLogin = useStore(set => set.isLogin)
    if (!isLogin) {
        return <Error errorCode={401} errorInfo={"Yoy have no jwt code in your local storage"} errorShortInfo={"Please first login"}/>
    }

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