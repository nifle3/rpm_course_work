import {useMutation, useQuery} from "@tanstack/react-query";
import Api from "../../api.ts";
import {queryClient} from "../../main.tsx";
import Loader from "../../element/loader/loader.tsx";

export default function SubscribeSettingsCont() {
    const mutation = useMutation({
        mutationFn: Api.DeleteSubscribe,
        onSuccess: () => {
            console.log("huy")
            queryClient.invalidateQueries({
                queryKey: ['profile']
            })
            location.reload()
        },
    })

    const {data, isError, isPending} = useQuery({
        queryKey: ['subscribe'],
        queryFn: Api.GetSubscribeUser,
    })

    if (isPending) {
        return <Loader/>
    }

    if (isError) {
        return <div className={"subscribe-settings-container"}>У вас нет подписки</div>
    }

    const onClick = () => {
        mutation.mutate()
    }

    console.log(data)

    return (
        <div className={"subscribe-settings-wrapper"}>
            <span className={"subscribe-settings-title"}>Управление подпиской</span>
            <div className={"subscribe-settings-info-container"}>
                <span className={"subscribe-settings-status"}>Активная подписка</span>
                <div className={"subscribe-settings-subscribe-info"}>
                    <strong>{data.name}</strong>
                    <span>до</span>
                    <span>{data.dead_line}</span>
                </div>
                <div></div>
                {mutation.isPending ?
                    <button className={"subscribe-settings-button"}>ОТКАЗ ОТ ПОДПИСКИ</button> :
                    <button className={"subscribe-settings-button"} onClick={onClick}>ОТКАЗАТЬСЯ ОТ ПОДПИСКИ</button>
                }
            </div>
        </div>
    )
}