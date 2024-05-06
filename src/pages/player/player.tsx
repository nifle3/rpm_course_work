import Exit from "../../element/exit/exit.tsx";
import {useParams} from "react-router";
import {useEffect, useRef, useState} from "react";
import Api from "../../api.ts";
import Loader from "../../element/loader/loader.tsx";

export default function Player() {
    const params = useParams()
    const src = params.src ?? ""
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    useEffect(() => {
        document.title = "КИНОHUB | Плеер"
    });

    useEffect(() => {
         Api.GetContent(src).then(blob => {
             if (!videoRef || !videoRef.current)
                 throw "VIDEO REF NULL"

             if (!blob)
                 throw "Blolb is undefined"

             videoRef.current.src = URL.createObjectURL(blob)
         }).finally(() => setIsLoading(false))
    }, [src]);


    if (isLoading) {
        return <Loader/>
    }

    return (
        <>
            <Exit/>
            <video ref={videoRef} controls width={"100%"} height={"99%"}/>
        </>
    )
}