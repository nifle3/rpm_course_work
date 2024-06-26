import "./major.css"
import {useEffect} from "react";
import WelcomeSubscribe from "../../element/welcomeMajor/welcomeSubscribe/welcomeSubscribe.tsx";
import {useStore} from "../../store.ts";
import Welcome from "../../element/welcomeMajor/welcome/welcome.tsx";
import {useQuery} from "@tanstack/react-query";
import Api from "../../api.ts";
import CarouselContent from "../../element/carousel/carouselContent/carouselContent.tsx";
import {useNavigate} from "react-router-dom";
import Loader from "../../element/loader/loader.tsx";

export default function Major() {
    const isLogin = useStore(set => set.isLogin)
    const navigate = useNavigate()

    useEffect(() => {
        document.title = "КИНОHUB"
    });

    const {isPending, isError, data} = useQuery({
        queryKey: ['profile'],
        queryFn: Api.GetUser,
        retry: 3,
        enabled: isLogin,
    })

    if (!isLogin) {
        return <Welcome/>
    }

    if (isError){
        navigate("/error/" + 500)
    }

    if (isPending){
        return <Loader/>
    }

    if (!isLogin || !data.have_subscribe) {
        return <Welcome/>
    }

    return (
        <>
            <WelcomeSubscribe/>

            <CarouselContent Title={"Посмотреть вечером"} Action={Api.GetAllMovie}  TypeContent={"фильм"}/>
            <CarouselContent Title={"Популярные фильмы"} Action={Api.GetAllMovie} TypeContent={"фильм"}/>
            <CarouselContent Title={"Популярные аниме"} Action={Api.GetAllAnime} TypeContent={"аниме"}/>
        </>
    )
}