import "./subscribe.css"

import SubscribeCard from "../../element/subscribeCard/subscribeCard.tsx"
import {useEffect} from "react";

export default function Subscribe() {
    useEffect(() => {
        document.title = "КИНОHUB | Подписки"
    })

    return (
        <div className={"subscribe-div"}>
            <SubscribeCard price={300} priceDescription={"1 000₽ в первый год далее 2 349 в год"} month={"12"} name={"Standart"} description={"Аниме"}/>
            <SubscribeCard  price={200} priceDescription={"1 249₽ в первый год далее 2 499 в год"} month={"12"} name={"Standart"} description={"Аниме"}/>
            <SubscribeCard  price={299} priceDescription={"699₽ за 6 месяцев"} month={"12"} name={"Premium"} description={"Аниме"}/>
            <SubscribeCard price={5000} priceDescription={"849₽ за 6 месяцев"} month={"6"} name={"Standart"} description={"Аниме"}/>
            <SubscribeCard price={850} priceDescription={"99₽ за 3 месяца"} month={"6"} name={"Premium"} description={"Аниме"}/>
        </div>
    )
}