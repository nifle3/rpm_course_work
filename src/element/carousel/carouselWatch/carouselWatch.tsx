import "../carousel.css"
import "./carouselWatch.css"
import "@splidejs/react-splide/css"
import leftArrow from "../icons/left.svg"
import rightArrow from "../icons/right.svg"
import playImage from "./icons/play.svg"
import image from "../icons/img.png"
import image2 from "../icons/img2.jpg"
// @ts-expect-error BECAUSE TS IS SUCK
import {SplideSlide, Splide, SplideTrack} from "@splidejs/react-splide";
import Options from "../opts.ts"

export default function CarouselWatch() {
    const imgs = [
        {image:image},
        {image:image2},
        {image:image},
        {image:image2},
        {image:image},
        {image:image2},
        {image:image},
        {image:image2},
        {image:image},
        {image:image2},
        {image:image},
        {image:image2},
        {image:image},
        {image:image2},
        {image:image},
        {image:image2},
        {image:image},
        {image:image2},
        {image:image},
    ]

    return (
        <div className={"carousel-wrapper"} >
            <h2>Продолжить просмотр</h2>
            <Splide hasTrack={false} tag={"section"} options={Options.DEFAULT_OPTIONS}>
                <SplideTrack>
                    {
                        imgs.map((imgs, idx) =>
                            <SplideSlide key={idx} className={"carousel-watch-image-wrapper"}>
                                <img src={imgs.image} alt={"huy"} className={"carousel-watch-image"}/>
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