import "./major.css"
import {useEffect} from "react";
import WelcomeSubscribe from "../../element/welcomeMajor/welcomeSubscribe/welcomeSubscribe.tsx";
import CarouselContent from "../../element/carousel/carouselContent/carouselContent.jsx";
import CarouselWatch from "../../element/carousel/carouselWatch/carouselWatch.jsx"

export default function Major() {
    useEffect(() => {
        document.title = "КИНОHUB"
    });

    return (
        <>
            <WelcomeSubscribe/>
            <CarouselContent/>
            <CarouselWatch/>
        </>
    )
}