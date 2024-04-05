import "./carouselWatch.css"
import "../carousel.css"
import image from "../icons/img.png"


export default function CarouselWatch() {
    const imgs = [
        {image:image},
        {image:image},
        {image:image},
        {image:image},
        {image:image},
        {image:image},
        {image:image},
        {image:image},
        {image:image},
        {image:image},
        {image:image},
    ]

    return (
        <div className={"carousel-wrapper"} >
            <h2>Продолжить просмотр</h2>
            <div className={"swiper-wrapper"}>
                <swiper-container slides-per-view="3" space-between="20"
                                  pagination="true" navigation="true" css-mode="true">
                    {imgs.map((content, idx) => {
                        return (
                            <swiper-slide key={idx}>
                                <div className={"carousel-watch-image-wrapper"}>
                                    <img src={content.image} alt={"huy"} className={"carousel-image"}/>
                                </div>
                            </swiper-slide>
                        )
                    })}
                </swiper-container>
            </div>
        </div>
    )
}