import React, {useState} from 'react'
import ReactPaginate from 'react-paginate'
import {connect} from 'react-redux'
import {Col, Row} from 'reactstrap'
import {getCommentaries} from '../../redux/CommentaryReducer'

const Pagination = props => {

    const [ , setState] = useState()

    const handlePageClick = (data) => {
        setState({currentPage: data.selected, offset: props.pageCount},
            props.onChangePage(props.sort, data.selected, props.size, props.parrentId)
        )
    }

    if (props.pageCount > 1) {
        return <Row>
            <Col>
                <nav className='bg-dark text-dark'>
                    <ReactPaginate
                        pageCount={props.pageCount}
                        forcePage={props.currentPage}
                        pageRangeDisplayed={3}
                        marginPagesDisplayed={1}
                        breakLabel={<pre> ... </pre>}
                        nextLabel={'->'}
                        previousLabel={'<-'}
                        onPageChange={handlePageClick}
                        containerClassName={'pagination pg-red justify-content-center m-2'}
                        breakClassName={'page-item pt-2'}
                        pageClassName={'page-item'}
                        pageLinkClassName={'page-link'}
                        activeClassName={'active'}
                        activeLinkClassName={'active bg-dark border-dark'}
                        previousClassName={'page-item'}
                        previousLinkClassName={'page-link'}
                        nextClassName={'page-item'}
                        nextLinkClassName={'page-link'}
                    />
                </nav>
            </Col>
        </Row>
    }
    return null
}

const mapStateToProps = state => ({
    pageCount: state.paginationState.pageCount,
    currentPage: state.paginationState.currentPage,
    size: state.paginationState.size,
    sort: state.paginationState.sort
})

export default connect(mapStateToProps, {getCommentaries})(Pagination)