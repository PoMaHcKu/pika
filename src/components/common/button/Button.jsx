import React from "react";

export const Button = (props) => {
    return <button className={"btn btn-light border-dark"} onClick={props.onClick}>{props.lable}</button>
}