import {RefObject} from "react";

export interface InputProps {
    placeHolder : string
    inputRef : RefObject<HTMLInputElement>
    className : string
}
