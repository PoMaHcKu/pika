import React from 'react';
import {Container} from "reactstrap";
import Header from "./components/header/Header";
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
import NewPost from "./components/new-post-page/NewPost";
import Search from "./components/find/Search";
import {searchPosts} from "./redux/PostReducer";

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
                <div>
                    <Header/>
                    <Navbar/>
                    <Search search={this.props.searchPosts}/>
                    <Container className="content  bg-dark text-light p-4">
                        <Route path={"/registration"} render={() => <RegistrationContainer/>}/>
                        <Route path={"/posts"} render={() => <PostsContainer/>}/>
                        <Route path={"/post"} render={() => <PostContainer/>}/>
                        <Route path={"/login"} render={() => <Login/>}/>
                        <Route path={"/new"} render={() => <NewPost/>}/>
                        <Route exactPath={"/"}/>
                    </Container>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => ({
    isInitialized: state.appState.isInitialized
})

export default compose(
    connect(mapStateToProps, {initializeApp, searchPosts}),
    withRouter
)(App);