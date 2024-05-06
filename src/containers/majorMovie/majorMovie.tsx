import "./majorMovie.css"
import {useEffect} from "react";
import CarouselWatch from "../../element/carousel/carouselWatch/carouselWatch.tsx";
import Api from "../../api.ts";
import CarouselContent from "../../element/carousel/carouselContent/carouselContent.tsx";
import {useStore} from "../../store.ts";
import {useNavigate} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import Loader from "../../element/loader/loader.tsx";

export default function MajorMovie() {
    const isLogin = useStore(set => set.isLogin)
    const navigate = useNavigate()

    useEffect(() => {
        document.title = "КИНОHUB | Кино"
    })

    const {isPending, isError, data} = useQuery({
        queryKey: ['profile'],
        queryFn: Api.GetUser,
        retry: 3,
        enabled: isLogin,
    })

    if (isError){
        navigate("/error/" + 500)
    }

    if (isPending){
        return <Loader/>
    }

    if (!isLogin || !data.have_subscribe) {
        return <h1>Купите подписку!</h1>
    }

    return (
        <>
            <CarouselWatch Title={"Посмотрите легендарные фильмы!"} Action={Api.GetAllMovie}/>
            <CarouselContent Title={"Российские фильмы"} Action={Api.GetAllMovie} TypeContent={"фильм"}/>
            <CarouselContent Title={"Фильмы для всей семьи"} Action={Api.GetAllMovie} TypeContent={"фильм"}/>
            <CarouselContent Title={"Фильмы для отдыха"} Action={Api.GetAllMovie} TypeContent={"фильм"}/>
            <CarouselContent Title={"Сложные фильмы"} Action={Api.GetAllMovie} TypeContent={"фильм"}/>
        </>
    )
}