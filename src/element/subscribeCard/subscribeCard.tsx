import "./subscribeCard.css"

//TODO: Выровнять
//TODO: Сделать одинаковый размер

export interface SubscribeCardProps {
    priceDescription : string
    name : string
    month : string
    description : string
    price : number
}

export default function SubscribeCard({priceDescription, name, month, description, price} : SubscribeCardProps) {
    let color : string = "#5F7C8D"
    if (price < 300) {
        color = "#C39028"
    } else if (price < 750 || (price >= 850 && price <= 2349)) {
        color = "#1263DE"
    }

    return (
        <div className={"subscribe-card"}>
            <div className={"subscribe-card-div"} style={{backgroundColor: color}}>
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