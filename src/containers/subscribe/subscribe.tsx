import "./subscribe.css"
import SubscribeCard from "../../element/subscribeCard/subscribeCard.tsx"
import {useEffect} from "react";
import {useStore} from "../../store.ts";
import NotInAccount from "../notInAccount/notInAccount.tsx";
import {useQuery} from "@tanstack/react-query";
import Error from "../../pages/error/error.tsx";
import Api from "../../api.ts";

export default function Subscribe() {
    useEffect(() => {
        document.title = "КИНОHUB | Подписки"

    })

    const isLogin = useStore(set => set.isLogin)

    const { isPending, isError, data, error } = useQuery({
        queryKey: ['subscribes'],
        queryFn: Api.GetSubscribes,
        enabled: isLogin,
    })

    if (!isLogin) {
        return <NotInAccount/>
    }

    if (isPending) {
        return <span>Loading...</span>
    }

    if (isError) {
        return <Error errorCode={500} errorShortInfo={error.name} errorInfo={error.message}/>
    }

    return (
        <div className={"subscribe-div"}>
            {
                data.map((value) =>
                    <SubscribeCard id={value.id} price={value.price} priceDescription={value.description} month={value.count_month}
                                    name={value.name} description={value.title}/>
                )
            }
        </div>
    )
}