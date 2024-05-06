import "./subscribeCard.css"
import {useMutation, useQuery} from "@tanstack/react-query";
import Api from "../../api.ts";
import {useNavigate} from "react-router-dom";
import {queryClient} from "../../main.tsx";
import {useStore} from "../../store.ts";
import Loader from "../loader/loader.tsx";

export interface SubscribeCardProps {
    priceDescription : string
    name : string
    month : string
    description : string
    price : number
    id : number
}

export default function SubscribeCard({priceDescription, name, month, description, price, id} : SubscribeCardProps) {
    const navigate = useNavigate()
    const { isPending, isError, data, error} = useQuery({
        queryKey: ['profile'],
        queryFn: Api.GetUser,
    })
    const mutation = useMutation({
        mutationFn: Api.LinkWithSubscribe(id),
        onSuccess: async () =>{
            await queryClient.invalidateQueries({
                queryKey: ['profile']
            })
        },
        onError: (error) => {
            console.log(error)
            navigate("/error/500")
        }
    })

    if (isPending) {
        return <Loader/>
    }

    if (isError) {
        navigate("/error/" + error.name)
    }


    const getColor = (): string  => {
        if (price < 300)
            return  "#C39028"

        if (price < 750 || (price >= 850 && price <= 2349))
            return "#1263DE"

        return "#5F7C8D"
    }

    const onClick = () => {
        mutation.mutate()
    }

    return (
        <div className={"subscribe-card"} key={id}>
            <div className={"subscribe-card-div"} style={{backgroundColor: getColor()}}>
                <div className={"subscribe-card-content"}>
                    <h1>{name}</h1>
                    <div className={"month-wrapper"}>
                        <span>{month}</span>
                    </div>
                    <span className={"month-desc"}>{description}</span>
                </div>
            </div>
            <h3>{priceDescription}</h3>
            {data.have_subscribe ? <button className={"subscribe-btn"}>У вас уже есть подписка</button> :
                <button className={"subscribe-btn"} onClick={onClick} disabled={mutation.isPending}>
                    {mutation.isPending ? "Оформляем" : "Оформить подписку"}
                </button>}
        </div>
    )
}