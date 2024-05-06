import "../infoContent.css"
import About from "../about/about.tsx";
import Details from "../details/details.tsx";
import bckImage from "../icons/img.png"
import ButtonInfoContent from "../button/buttonInfoContent.tsx";
import {useState} from "react";
import InfoContentPrps from "../infoContentProps.ts";
import Api from "../../../api.ts";
import {useNavigate} from "react-router-dom";

type classes = "button-info-content-activate" | "button-info-content-disable" | "button-info-content-default" |
    "button-info-content-disable-default"

type blurClass = "info-content-image" | "info-content-image-blur"

export default function InfoContentMovie( {id, name, description, descriptionDetails, imagePath} : InfoContentPrps) {
    const [imgClass, setImgClass] = useState<blurClass>("info-content-image")

    const [aboutSet, setAboutSet] = useState<boolean>(true)
    const [detailsSet, setDetailsSet] = useState<boolean>(false)

    const [aboutClass, setAboutClass] = useState<classes>("button-info-content-default")
    const [detailsClass, setDetailsClass] = useState<classes>("button-info-content-disable-default")

    const changeClass = () => {
        if (aboutSet) {
            setAboutClass("button-info-content-disable")
            setDetailsClass("button-info-content-activate")

            setAboutSet(false)
            setDetailsSet(true)
        } else if (detailsSet) {
            setAboutClass("button-info-content-activate")
            setDetailsClass("button-info-content-disable")

            setAboutSet(true)
            setDetailsSet(false)
        }
    }

    const clickAbout = () => {
        if (aboutSet) {
            return
        }

        setImgClass("info-content-image")
        changeClass()
    }

    const clickDetails = () => {
        if (detailsSet){
            return
        }

        setImgClass("info-content-image-blur")
        changeClass()
    }

    return (
        <div className={"info-content"}>
            <img src={Api.GetImage(imagePath)} alt={""} className={imgClass}/>
            <div className={"info-content-wrapper"}>
                <div className={"info-content-button-wrapper"}>
                    <ButtonInfoContent onClick={clickAbout} text={"О фильме"} className={aboutClass}/>
                    <ButtonInfoContent onClick={clickDetails} text={"Детали"} className={detailsClass}/>
                </div>
                {aboutSet && <About watchButtonTitle={"Смотреть фильм"} id={id} title={name} descriptions={description}/>}
                {detailsSet && <Details Id={id} Title={name} Descriptions={descriptionDetails}/>}
            </div>
        </div>
    )
}