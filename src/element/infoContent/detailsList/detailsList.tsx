import "./detailsList.css"

export interface DetailsListProp {
    values : any[]
    title : string
    className? : string
}

export default function DetailsList({values, title, className} : DetailsListProp) {
    return (
        <div className={"details-list " + className}>
            <div className={"details-list-title"}>
                {title}
            </div>
            <div className={"details-list-li-wrapper"}>
            {values.slice(0, 5).map((value, idx) => (
                <li key={idx} className={"details-list-li"}>{value}</li>
            ))}
            </div>
        </div>
    )
}
