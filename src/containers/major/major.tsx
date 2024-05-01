import "./major.css"
import {useEffect} from "react";
import WelcomeSubscribe from "../../element/welcomeMajor/welcomeSubscribe/welcomeSubscribe.tsx";
import CarouselContent from "../../element/carousel/carouselContent/carouselContent.tsx";
import CarouselWatch from "../../element/carousel/carouselWatch/carouselWatch.tsx"

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