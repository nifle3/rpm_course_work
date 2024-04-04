import "./subscribeCard.css"

//TODO: Выровнять
//TODO: Сделать одинаковый размер

export interface SubscribeCardProps {
    image : string
    description : string
}

export default function SubscribeCard({image, description} : SubscribeCardProps) {
    return (
        <div className={"subscribe-card"}>
            <img src={image} alt={"Подписка"} className={"subscribe-image"}/>
            <h3>{description}</h3>
            <button className={"subscribe-btn"}>Оформить подписку</button>
        </div>
    )
}