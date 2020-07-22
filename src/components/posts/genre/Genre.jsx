import * as React from "react";

const Genre = (props) => {

    return <span onClick={() => props.getByGenre(props.genre)}>{props.genre}</span>
}

export default Genre;