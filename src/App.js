import React from 'react';
import {Col, Container, Row} from "reactstrap";
import style from "./App.module.css"
import Header from "./components/header/header";
import {BrowserRouter, NavLink, Route, withRouter} from "react-router-dom";
import RegistrationContainer from "./components/registration/RegistrationContainer";
import Navbar from "./components/navbar/Navbar";
import Login from "./components/logiln/Login";
import PostsContainer from "./components/posts/PostsContainer";
import PostContainer from "./components/post/PostContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/AppReduser";
import Preloader from "./components/common/preloader/Preloader";
import NewPost from "./components/new-post-page/NewPost";

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.isInitialized) {
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
                    <Row className={"mt-2"}>
                        <Col className={"col-xs-6"}>Search some posts...</Col>
                        <Col className={"col-xs-3"}>Button find</Col>
                        <Col className={"col-xs-3"}>
                            <NavLink to={"/new"}>
                                <button className={"btn btn-sm btn-primary"}>NEW POST</button>
                            </NavLink>
                        </Col>
                    </Row>
                    <Row>
                        <Col className={"col-2 sidebar"}>
                            <Navbar/>
                        </Col>
                        <Col className={`col-10 content ${style.contentWrapper}`}>
                            <Container>
                                <Route path={"/registration"} render={() => <RegistrationContainer/>}/>
                                <Route path={"/posts"} render={() => <PostsContainer/>}/>
                                <Route path={"/post"} render={() => <PostContainer/>}/>
                                <Route path={"/login"} render={() => <Login/>}/>
                                <Route path={"/new"} render={() => <NewPost/>}/>
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
