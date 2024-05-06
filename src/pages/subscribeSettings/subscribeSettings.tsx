import "./subscribeSettings.css"
import Exit from "../../element/exit/exit.tsx";
import {useStore} from "../../store.ts";
import Error from "../error/error.tsx";
import {useEffect} from "react";
import { useQuery } from "@tanstack/react-query";
import Api from "../../api.ts";
import SubscribeSettingsCont from "../../containers/subscribeSettingsCont/subscribeSettingsCont.tsx";

export default function SubscribeSettings() {
    useEffect(() => {
        document.title = document.title = "КИНОHUB | Настройки подписки"
    });

    const {data, isError, isPending} = useQuery({
        queryKey: ['profile'],
        queryFn: Api.GetUser,
        retry: 2,
    })
    const isLogin = useStore(set => set.isLogin)

    if (!isLogin) {
        return <Error errorCode={401} errorInfo={"Yoy have no jwt code in your local storage"} errorShortInfo={"Please first login"}/>
    }
    if (isPending) {
        return <span>Загрузка...</span>
    }

    if (isError) {
        return <div className={"subscribe-settings-container"}>У вас нет подписки</div>
    }

    return (
        <div className={"subscribe-settings-container"}>
            <Exit RedirectTo={"/settings"}/>
            {data.have_subscribe || data.have_subscribe == undefined ? <SubscribeSettingsCont/> : <h1>У вас нет подписки</h1>}
        </div>
    )
}