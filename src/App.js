import React from 'react';
import {Col, Container, Row} from "reactstrap";
import style from "./App.module.css"
import Header from "./components/header/header";
import {BrowserRouter, Route} from "react-router-dom";
import RegistrationContainer from "./components/registration/RegistrationContainer";
import Navbar from "./components/navbar/Navbar";
import Login from "./components/logiln/Login";
import PostsContainer from "./components/posts/PostsContainer";


function App() {
    return (
        <BrowserRouter>
            <Container fluid={true}>
                <Row>
                    <Col className={`col-xs-12`}>
                        <Header/>
                    </Col>
                </Row>
                <Row>
                    <Col className={"col-2 sidebar"}>
                        <Navbar/>
                    </Col>
                    <Col className={`col-10 content ${style.contentWrapper}`}>
                        <Container>
                            <Row>
                                <Col>Search some posts...</Col>
                            </Row>
                            <Route path={"/registration"} render={() => <RegistrationContainer/>}/>
                            <Route path={"/posts"} render={() => <PostsContainer/>}/>
                            <Route path={"/login"} render={() => <Login/>}/>
                            <Route exactPath={"/"}/>
                        </Container>
                    </Col>
                </Row>
                <Row>

                </Row>
            </Container>
        </BrowserRouter>
    );
}

export default App;
