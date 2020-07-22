import * as React from "react";
import {NavLink} from "react-router-dom";
import style from "../Posts.module.css";

const Tags = (props) => {

    return props.tags.map(tag =>
        <NavLink to={"/posts"} key={tag}>
            <span className={style.tag} onClick={() => props.getByTag(tag)}>{tag} </span>
        </NavLink>
    )
}

export default Tags;