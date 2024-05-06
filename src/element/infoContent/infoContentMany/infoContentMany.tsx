import "../infoContent.css"
import About from "../about/about.tsx";
import Details from "../details/details.tsx";
import bckImage from "../icons/img.png"
import ButtonInfoContent from "../button/buttonInfoContent.tsx";
import {useState} from "react";
import Series from "../series/series.tsx";

type classes = "button-info-content-activate" | "button-info-content-disable" | "button-info-content-default" |
    "button-info-content-disable-default"

type blurClass = "info-content-image" | "info-content-image-blur" | "info-content-image-blur-dark"

export interface InfoContentManyProps {
    watchButton : string
    aboutButton : string
}

export default function InfoContentMany({watchButton, aboutButton} : InfoContentManyProps) {
    const [imgClass, setImgClass] = useState<blurClass>("info-content-image")

    const [aboutSet, setAboutSet] = useState<boolean>(true)
    const [detailsSet, setDetailsSet] = useState<boolean>(false)
    const [seriesSet, setSeriesSet] = useState<boolean>(false)

    const [aboutClass, setAboutClass] = useState<classes>("button-info-content-default")
    const [detailsClass, setDetailsClass] = useState<classes>("button-info-content-disable-default")
    const [seriesClass, setSeriesClass] = useState<classes>("button-info-content-disable-default")

    const clickAbout = () => {
        if (aboutSet) {
            return
        }

        setAboutClass("button-info-content-activate")
        setAboutSet(true)

        if (detailsSet) {
            setDetailsClass("button-info-content-disable")
            setSeriesClass("button-info-content-disable-default")
        } else if (seriesSet) {
            setSeriesClass("button-info-content-disable")
            setDetailsClass("button-info-content-disable-default")
        }


        setDetailsSet(false)
        setSeriesSet(false)

        setImgClass("info-content-image")
    }

    const clickDetails = () => {
        if (detailsSet){
            return
        }

        setDetailsClass("button-info-content-activate")
        setDetailsSet(true)

        if (aboutSet) {
            setAboutClass("button-info-content-disable")
            setSeriesClass("button-info-content-disable-default")
        } else if (seriesSet) {
            setSeriesClass("button-info-content-disable")
            setAboutClass("button-info-content-disable-default")
        }

        setSeriesSet(false)
        setAboutSet(false)

        setImgClass("info-content-image-blur")
    }

    const clickSeries = () => {
        if (seriesSet) {
            return
        }

        setSeriesClass("button-info-content-activate")
        setSeriesSet(true)

        if (detailsSet) {
            setDetailsClass("button-info-content-disable")
            setAboutClass("button-info-content-disable-default")
        } else if (aboutSet) {
            setAboutClass("button-info-content-disable")
            setDetailsClass("button-info-content-disable-default")
        }


        setAboutSet(false)
        setDetailsSet(false)
        setImgClass("info-content-image-blur-dark")

    }

    return (
        <div className={"info-content info-content-many"}>
            <img src={bckImage} alt={""} className={imgClass}/>
            <div className={"info-content-wrapper"}>
            <div className={"info-content-button-wrapper"}>
                    <ButtonInfoContent onClick={clickAbout} text={aboutButton} className={aboutClass}/>
                    <ButtonInfoContent onClick={clickSeries} text={"Cезоны и серии"} className={seriesClass}/>
                    <ButtonInfoContent onClick={clickDetails} text={"Детали"} className={detailsClass}/>
                </div>
                {aboutSet && <About watchButtonTitle={watchButton}/>}

                {seriesSet &&
                        <Series title={"Пацаны"}  countOfSeasons={3}/>
                }
                {detailsSet && <Details/>}
            </div>
        </div>
    )
}