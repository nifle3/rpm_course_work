import "../carousel.css"
import "./carouselWatch.css"
import "@splidejs/react-splide/css"
import leftArrow from "../icons/left.svg"
import rightArrow from "../icons/right.svg"
import playImage from "./icons/play.svg"
// @ts-expect-error BECAUSE TS IS SUCK
import {SplideSlide, Splide, SplideTrack} from "@splidejs/react-splide";
import Options from "../opts.ts"
import {useQuery} from "@tanstack/react-query";
import Api from "../../../api.ts";
import {useNavigate} from "react-router-dom";
import Loader from "../../loader/loader.tsx";


export interface CarouselContentProps  {
    Title : string
    Action : () => Promise<any>
}


export default function CarouselWatch({Title, Action} : CarouselContentProps) {
    const navigate = useNavigate()
    const {data, isPending, isError, error} = useQuery({
        queryFn: Action,
        queryKey: ['content'],
    })

    if (isPending) {
        return <Loader/>
    }

    if (isError) {
        console.log(error)
        return <h1>Ошибка загрузки</h1>
    }

    const onClick = (idx : number | string) => {
        return () => {
            navigate("/player/" + idx)
        }
    }


    return (
        <div className={"carousel-wrapper"} >
            <h2>{Title}</h2>
            <Splide hasTrack={false} tag={"section"} options={Options.DEFAULT_OPTIONS}>
                <SplideTrack>
                    {
                        data.map((val, idx) =>
                            <SplideSlide key={idx} className={"carousel-watch-image-wrapper"} onClick={onClick(val.id)}>
                                <img src={Api.GetImage(val.image_path)} alt={"huy"} className={"carousel-watch-image"}/>
                                <img src={playImage} alt={"Играть"} className={"carousel-watch-icon-image"}/>
                            </SplideSlide>)
                    }
                </SplideTrack>
                <div className={"splide__arrows"}>
                    <button className={"splide__arrow splide__arrow--prev"} style={{background:"none", marginLeft:"3rem"}}>
                        <img src={leftArrow} alt={"Пред."}/>
                    </button>
                    <button className={"splide__arrow splide__arrow--next"} style={{background:"none",marginRight:"3rem"}}>
                        <img src={rightArrow} alt={"След."}/>
                    </button>
                </div>
            </Splide>

        </div>
    )
}