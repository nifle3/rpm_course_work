import "./subscribeCard.css"

//TODO: Выровнять
//TODO: Сделать одинаковый размер
export default function SubscribeCard({image, description} :
                                  {image: string, description: string}) {
    return (
        <div className={"subscribe-card"}>
            <img src={image} alt={"Подписка"} className={"subscribe-image"}/>
            <h3>{description}</h3>
            <button className={"subscribe-btn"}>Оформить подписку</button>
        </div>
    )
}