import Footer from "../../containers/footer/footer.tsx";
import Header from "../../containers/header/header.tsx";
import {Outlet} from "react-router-dom";
import "./main.css"

export default function Main() {
    return (
        <div className={"main-container"}>
            <Header/>
            <div className={"content"}>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    )
}
