import "./series.css"
import {useState} from "react";
import CarouselWatch from "../../carousel/carouselWatch/carouselWatch.tsx";

export interface SeriesProps {
    title : string
    countOfSeasons : number
}

export default function Series({title, countOfSeasons} : SeriesProps) {
    const [season, setSeason] = useState<number>(1)

    const setSeasonWrapper = (value : number) => {
        return () => {
            if (value > countOfSeasons) {
                return
            }

            setSeason(value)
        }
    }

    return (
        <div className={"series"}>
            <span className={"series-title"}>{title}</span>
            <div className={"radio-inputs"}>
                {Array.from(Array(countOfSeasons).keys()).map(value => (
                    <div className={"radio-input-button"}>
                        <input id={value.toString()} key={value} type={"radio"} value={value + 1} checked={season == value}
                               onChange={setSeasonWrapper(value)}/>
                        <label htmlFor={value.toString()}>{value + 1}</label>
                    </div>
                ))}
            </div>
                <CarouselWatch/>
        </div>
    )
}