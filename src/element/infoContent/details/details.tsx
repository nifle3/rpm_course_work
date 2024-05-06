import "./details.css"
import ButtonWatch from "../buttonWatch/buttonWatch.tsx";
import DetailsList from "../detailsList/detailsList.tsx";
import {useNavigate} from "react-router-dom";
import Api from "../../../api.ts";
import {useQuery} from "@tanstack/react-query";
import Loader from "../../loader/loader.tsx";
import Error from "../../../pages/error/error.tsx";

export interface DetailsProps {
    Title : string
    Descriptions : string
    Id : number
}

export default function Details({Title, Descriptions, Id} : DetailsProps) {
    const navigate = useNavigate()

    const {data, isError, isPending} = useQuery({
        queryKey: ['content' + Id],
        queryFn: Api.GetContentInfo(Id),
    })

    const audio : string[] = ["Глупый хомяк","Глупый хомяк","Глупый хомяк","Глупый хомяк"]
    const subbtitles : string[] = ["Глупый хомяк"]
    const originalName : string[] = ["Глупый хомяк"]

    if (isPending) {
        return <Loader/>
    }

    if (isError) {
        return  <Error errorCode={500} errorShortInfo={""} errorInfo={""}/>
    }

    const watchClick = () => {
        navigate("/player" + Id)
    }

    console.log(data)

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
                    <DetailsList  title={"Главные роли"} values={data.actor.map(value => value.name + " " + value.surname)}/>
                    <DetailsList  title={"Режиссеры"} values={data.director.map(value => value.name + " " + value.surname)} className={"details-margin-elem"}/>
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