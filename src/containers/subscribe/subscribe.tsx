import "./subscribe.css"
import img1 from "./icons/image1.svg"
import img2 from "./icons/image2.svg"
import img3 from "./icons/image3.svg"
import img4 from "./icons/image4.svg"
import img5 from "./icons/image5.svg"
import SubscribeCard from "../../element/subscribeCard/subscribeCard.tsx"
import {useEffect} from "react";

export default function Subscribe() {
    useEffect(() => {
        document.title = "КИНОHUB | Подписки"
    })

    return (
        <div className={"subscribe-div"}>
            <SubscribeCard image={img1} description={"1 000₽ в первый год далее 2 349 в год"}/>
            <SubscribeCard image={img2} description={"1 249₽ в первый год далее 2 499 в год"}/>
            <SubscribeCard image={img3} description={"699₽ за 6 месяцев"}/>
            <SubscribeCard image={img4} description={"849₽ за 6 месяцев"}/>
            <SubscribeCard image={img5} description={"99₽ за 3 месяца"}/>
        </div>
    )
}