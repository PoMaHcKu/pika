import * as React from 'react'
import {useCallback, useEffect} from 'react'
import {connect} from 'react-redux'
import {getAllTags, getTags} from '../../redux/MainPageReducer'
import {getByTag} from '../../redux/PostReducer'
import {MainPage} from './MainPage'

const MainPageContainer = (props) => {

    const {getTags} = props

    const getSomeTags = useCallback(() => getTags(), [getTags])

    useEffect(() => {
        getSomeTags()
    }, [getSomeTags])

    return <MainPage tags={props.tags}
                     getByTag={props.getByTag}
                     getAllTags={props.getAllTags}/>
}

const mapStateToProps = (state) => ({
    tags: state.mainPageState.tags,
    posts: state.mainPageState.posts
})

const mapDispatchToProps = {
    getTags,
    getByTag,
    getAllTags
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPageContainer)