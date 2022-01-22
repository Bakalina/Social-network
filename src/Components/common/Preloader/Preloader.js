import React from "react";
import preloader from "../../../image/loading.gif";
import style from "./Preloader.module.css";


const Preloader = () => {
    return <div className={style.container}><img className={style.preloader} src={preloader} alt='preloader' /></div>;
};

export default Preloader;