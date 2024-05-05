import vkIcon from "./icons/icon-vk.svg";
import tgIcon from "./icons/icon-tg.svg";
import twitterIcon from "./icons/icon-twitter.svg";
import copyrightIcon from "./icons/copyright.svg";
import "./footer.css"

export default function Footer() {
    return (
        <footer className={"footer"}>
            <div className={"contact-info"}>
                <div className={""}>
                    <a className={"link-to-social"} href={"https://vk.com/kitpp"}>
                        <img src={vkIcon} alt={"vk"}/>
                    </a>
                    <a className={"link-to-social"} href={"https://t.me/kitpptg"}>
                        <img src={tgIcon} alt={"tg"}/>
                    </a>
                    <a className={"link-to-social"} href={"https://twitter.com"}>
                        <img src={twitterIcon} alt={"twitter"}/>
                    </a>
                </div>
                <span className={"contact-text"}>Мы всегда готовы вам помочь</span>
            </div>
            <div className={"copyright-info"}>
                <img src={copyrightIcon} alt={"Копирайт"}/>
                <small className={"copyright-info"}>2024-2025 Кинохаб 18+</small>
            </div>
            <div>
                <small>
                    Федеральные каналы доступны для бесплатного просмотра
                    круглосуточно
                </small><br/>
                <small>
                    ООО “Кинохаб”, адрес местонахождения: 115023,
                    Россия,г.Ереван, ул. Большая красная, д. 55
                </small><br/>
                <small>
                    Адрес для обращения пользователей: Artemglup@gaymail.ru
                </small><br/>
                <small>
                    Крупнейший онлайн-кинотеатр в России по итоговой выручке, и
                    по результатам иследования ТМТ за первое полугодие 2023г.
                </small><br/>
                <small>
                    Соглашение Правила рекомендаций Справка
                </small>
            </div>
        </footer>
    )
}