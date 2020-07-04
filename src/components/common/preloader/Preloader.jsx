import preloader from "../../../resources/pictures/preloader.png";
import style from "./Preloader.module.css";
import * as React from "react";

const Preloader = () => {
    return (
        <img src={preloader} className={style.preloader} alt={"preloader"}/>
    )
}

export default Preloader;