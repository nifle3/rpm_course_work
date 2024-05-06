import "./my.css"
import {useEffect} from "react";
import {useStore} from "../../store.ts";
import NotInAccount from "../notInAccount/notInAccount.tsx";
import CarouselWatch from "../../element/carousel/carouselWatch/carouselWatch.tsx";
import Api from "../../api.ts";
import CarouselContent from "../../element/carousel/carouselContent/carouselContent.tsx";

export default function My() {
    const isLogin = useStore(set => set.isLogin)

    useEffect(() => {
        document.title = "КИНОHUB | Моё"
    })

    if (!isLogin) {
        return <NotInAccount/>

    }

    return (
        <>
            <CarouselWatch Title={"Рекомендуется к просмортру"} Action={Api.GetAllMovie}/>
            <CarouselWatch Title={"От давно забытых студий"} Action={Api.GetAllMovie}/>
            <CarouselContent Title={"Аниме для вас"} Action={Api.GetAllAnime} TypeContent={"аниме"}/>
            <CarouselContent Title={"Филмы для вас"} Action={Api.GetAllMovie} TypeContent={"фильм"}/>
        </>
    )
}