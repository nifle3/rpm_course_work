import "../carousel.css"
import "./carouselContent.css"
import "@splidejs/react-splide/css"
import leftArrow from "../icons/left.svg"
import rightArrow from "../icons/right.svg"

// @ts-expect-error BECAUSE IT'S REALLY STRANGE ERROR
import {SplideSlide, Splide, SplideTrack} from "@splidejs/react-splide";
import Options from "../opts.ts"
import {useQuery} from "@tanstack/react-query";
import Api from "../../../api.ts";
import {useState} from "react";
import InfoContentMovie from "../../infoContent/infoContentMovie/infoContentMovie.tsx";
import Loader from "../../loader/loader.tsx";


export interface CarouselContentProps {
    Title: string
    Action: () => Promise<any>
}

export default function CarouselContent({Title, Action} : CarouselContentProps) {
    const {data, isPending, isError, error} = useQuery({
        queryFn: Action,
        queryKey: [],
    })
    const [selectId, setSelectId] = useState<number>(-1)
    const [isOpen, setIsOpen] = useState<boolean>(false)

    if (isPending) {
        return <Loader/>
    }

    if (isError) {
        console.log(error)
        return <h1>Ошибка загрузки</h1>
    }

    const onClick = (idx : number) => {
        return () => {
            if (selectId == idx){
                setSelectId(-1)
                setIsOpen(false)
            } else {
                setSelectId(idx)
                setIsOpen(true)
            }
        }
    }

    return (
        <div>
            <div className={"carousel-wrapper"} >
                <h2>{Title}</h2>
                <Splide hasTrack={false} tag={"section"} options={Options.DEFAULT_OPTIONS}>
                    <SplideTrack>
                        {
                            data.map((value, idx) =>
                                <SplideSlide key={idx}  className={"carousel-content-image"} onClick={onClick(idx)}>
                                    <img src={Api.GetImage(value.image_path)} alt={"huy"}/>
                                </SplideSlide>
                            )
                        }
                    </SplideTrack>
                    <div className={"splide__arrows"}>
                        <button className={"splide__arrow splide__arrow--prev"} style={{background:"none", marginLeft:"3rem"}}>
                            <img src={leftArrow} alt={"Пред."}/>
                        </button>
                        <button className={"splide__arrow splide__arrow--next"} style={{background:"none", marginRight:"3rem"}}>
                            <img src={rightArrow} alt={"След."}/>
                        </button>
                    </div>
                </Splide>
            </div>
            {
                isOpen &&
                <InfoContentMovie id={data[selectId].id} name={data[selectId].name} description={data[selectId].description}
                                  descriptionDetails={data[selectId].description_details} imagePath={data[selectId].image_path}/>
            }
        </div>
    )
}