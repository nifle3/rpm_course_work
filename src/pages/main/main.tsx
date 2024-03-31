import Footer from "../../containers/footer/footer.tsx";
import Header from "../../containers/header/header.tsx";
import My from "../../containers/my/my.tsx";
import Subscribe from "../../containers/subscribe/subscribe.tsx";
import MajorMovie from "../../containers/majorMovie/majorMovie.tsx";
import MajorAnime from "../../containers/majorAnime/majorAnime.tsx";
import MajorSerial from "../../containers/majorSerial/majorSerial.tsx";
import {Route, Routes} from "react-router-dom";
import NotInAccount from "../../containers/notInAccount/notInAccount.tsx";
import "./main.css"
import Major from "../../containers/major/major.tsx";

export default function Main() {
    return (
        <div className={"main-container"}>
            <Header/>
            <Routes>
                <Route path={"/"} element={<Major/>}/>
                <Route path={"/movie"} element={<MajorMovie/>}/>
                <Route path={"/anime"} element={<MajorAnime/>}/>
                <Route path={"/serial"} element={<MajorSerial/>}/>
                <Route path={"/my"} element={<My/>}/>
                <Route path={"/subscribe"} element={<Subscribe/>}/>
                <Route path={"/notInAccount"} element={<NotInAccount/>}/>
            </Routes>
            <Footer/>
        </div>
    )
}
