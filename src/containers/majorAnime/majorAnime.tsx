import "./majorAnime.css"
import React, {useEffect} from "react";
import {useStore} from "../../store.ts";
import {useNavigate} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import Api from "../../api.ts";
import CarouselWatch from "../../element/carousel/carouselWatch/carouselWatch.tsx";
import CarouselContent from "../../element/carousel/carouselContent/carouselContent.tsx";
import Loader from "../../element/loader/loader.tsx";

export default function MajorAnime() {
    const isLogin = useStore(set => set.isLogin)
    const navigate = useNavigate()

    useEffect(() => {
        document.title = "КИНОHUB | Аниме"
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
            <CarouselWatch Title={"Посмотрите легендарные аниме!"} Action={Api.GetAllAnime}/>
            <CarouselContent Title={"Боевые аниме"} Action={Api.GetAllAnime}/>
            <CarouselContent Title={"Лучшие романтические аниме"} Action={Api.GetAllAnime}/>
            <CarouselContent Title={"Аниме с премией Оскар"} Action={Api.GetAllAnime}/>
            <CarouselContent Title={"Аниме для всей семьи"} Action={Api.GetAllAnime}/>
        </>
    )
}