import Exit from "../../element/exit/exit.tsx";
import {useParams} from "react-router";
import { useRef} from "react";

export default function Player() {
    const params = useParams()
    const src = params.src ?? ""
    const videoRef = useRef<HTMLVideoElement>(null)


    return (
        <>
            <Exit/>
            <video ref={videoRef} controls></video>
        </>
    )
}