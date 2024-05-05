import "./subscribeCard.css"
import {useMutation} from "@tanstack/react-query";
import {useState} from "react";

//TODO: Выровнять
//TODO: Сделать одинаковый размер

export interface SubscribeCardProps {
    priceDescription : string
    name : string
    month : string
    description : string
    price : number
    id? : number
}

export default function SubscribeCard({priceDescription, name, month, description, price, id} : SubscribeCardProps) {
    const getColor = (): string  => {
        if (price < 300)
            return  "#C39028"

        if (price < 750 || (price >= 850 && price <= 2349))
            return "#1263DE"

        return "#5F7C8D"

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
            <button className={"subscribe-btn"}>Оформить подписку</button>
        </div>
    )
}