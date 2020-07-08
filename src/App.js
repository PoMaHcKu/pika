import React from 'react';
import {Col, Container, Row} from "reactstrap";
import style from "./App.module.css"
import Header from "./components/header/header";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import RegistrationContainer from "./components/registration/RegistrationContainer";
import Navbar from "./components/navbar/Navbar";
import Login from "./components/logiln/Login";
import PostsContainer from "./components/posts/PostsContainer";
import PostContainer from "./components/post/PostContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/AppReduser";
import Preloader from "./components/common/preloader/Preloader";


class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {

        if (!this.props.isInitialized) {
            debugger;
            return <Preloader/>
        }

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
                                <Route path={"/post"} render={() => <PostContainer/>}/>
                                <Route path={"/login"} render={() => <Login/>}/>
                                <Route exactPath={"/"}/>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => ({
    isInitialized: state.appState.isInitialized
})

export default compose(
    connect(mapStateToProps, {initializeApp}),
    withRouter
)(App);
