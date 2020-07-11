import React from 'react';
import { withRouter } from 'react-router-dom';
import {Button} from "../button/Button";

const GoBack = ({ history }) =>
    <Button onClick={() => history.goBack()} lable={"BACK"} alt="Go back"/>;

export default withRouter(GoBack);