import * as React from "react";
import style from "../Posts.module.css"
import {NavLink} from "react-router-dom";

const Tags = (props) => {

    return props.tags.map(tag =>
        <NavLink to={"/posts"} key={tag}>
            <span className={style.tag} onClick={() => props.getByTag(tag)}>{tag} </span>
        </NavLink>
    );
}

export default Tags;