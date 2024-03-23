import Footer from "../../containers/footer/footer.tsx";
import Header from "../../containers/header/header.tsx";
import {useEffect} from "react";

function Main() {
    useEffect(() => {
        document.title = "Кинохаб";
    });

    return (
        <>
            <Header/>
            <Footer/>
        </>
    )
}

export default Main;