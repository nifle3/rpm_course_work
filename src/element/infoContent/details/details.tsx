import "./details.css"
import ButtonWatch from "../buttonWatch/buttonWatch.tsx";
import DetailsList from "../detailsList/detailsList.tsx";
import {useNavigate} from "react-router-dom";

export interface DetailsProps {
    Title : string
    Descriptions : string
    Id : number
}

export default function Details({Title, Descriptions, Id} : DetailsProps) {
    const navigate = useNavigate()

    const mainRoles : string[] = ["Глупый хомяк","Глупый хомяк", "Глупый хомяк","Глупый хомяк","Глупый хомяк","Глупый хомяк","Глупый хомяк","Глупый хомяк", "Глупый хомяк", "Глупый хомяк","Глупый хомяк","Глупый хомяк","Глупый хомяк","Глупый хомяк","Глупый хомяк","Глупый хомяк" ]
    const directors : string[] = ["Глупый хомяк","Глупый хомяк","Глупый хомяк"]
    const audio : string[] = ["Глупый хомяк","Глупый хомяк","Глупый хомяк","Глупый хомяк"]
    const subbtitles : string[] = ["Глупый хомяк"]
    const originalName : string[] = ["Глупый хомяк"]

    const watchClick = () => {
        navigate("/player" + Id)
    }

    return (
        <div className={"info-content-details"}>
            <div className={"info-content-details-left"}>
                <div className={"details-title-wrapper"}>
                    <span className={"details-title"}>{Title}</span><br/>
                    <span className={"details-description"}>{Descriptions}</span>
                </div>
                <div className={"details-button-wrapper"}>
                    <ButtonWatch text={"Смотреть"} onClick={watchClick}/>
                    <ButtonWatch text={"Трейлер"} onClick={() => {
                    }}/>
                </div>
            </div>
            <div className={"info-content-details-right"}>
                <div className={"info-content-details-creators"}>
                    <DetailsList  title={"Главные роли"} values={mainRoles}/>
                    <DetailsList  title={"Режиссеры"} values={directors} className={"details-margin-elem"}/>
                </div>
                <div className={"info-content-details-addons"}>
                    <DetailsList title={"Аудиодорожки"} values={audio}/>
                    <DetailsList values={subbtitles} title={"Субтитры"} className={"details-margin-elem"}/>
                    <DetailsList title={"Оригинальное название"} values={originalName} className={"details-margin-elem"}/>
                </div>
            </div>
        </div>
    )
}