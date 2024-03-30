import Footer from "../../containers/footer/footer.tsx";
import Header from "../../containers/header/header.tsx";
import Major from "../../containers/major/major.tsx";
import My from "../../containers/my/my.tsx";
import Subscribe from "../../containers/subscribe/subscribe.tsx";
import MajorMovie from "../../containers/majorMovie/majorMovie.tsx";
import MajorAnime from "../../containers/majorAnime/majorAnime.tsx";
import MajorSerial from "../../containers/majorSerial/majorSerial.tsx";
import {Route, Routes} from "react-router-dom";
import {useEffect} from "react";

export default function Main() {
    useEffect(() => {
        document.title = "Кинохаб";
    });

    return (
        <>
            <Header/>
            <Routes>
                <Route path={"/"} element={<Major/>}/>
                <Route path={"/movie"} element={<MajorMovie/>}/>
                <Route path={"/anime"} element={<MajorAnime/>}/>
                <Route path={"/serial"} element={<MajorSerial/>}/>
                <Route path={"/my"} element={<My/>}/>
                <Route path={"/subscribe"} element={<Subscribe/>}/>
            </Routes>
            <Footer/>
        </>
    )
}
