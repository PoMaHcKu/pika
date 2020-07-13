import {Col, Row} from "reactstrap";
import {NavLink} from "react-router-dom";
import React from "react";
import FindForm from "./SearchForm";

const Search = () => {
    return (
        <Row className="mb-1">
            <Col className="col-xs-12 col-sm-10">
                <FindForm/>
            </Col>
            <div className="col-xs-12 pl-0 col-sm-2 ml-0 pl-0">
                <div className="form-control form-control bg-dark text-light">
                    <NavLink to="/new">NEW POST</NavLink>
                </div>
            </div>
        </Row>
    )
}

export default Search;