import React from "react";
import ReactPaginate from 'react-paginate';
import {connect} from "react-redux";
import style from "./Pagintion.module.css";
import {Col, Row} from "reactstrap";
import {getCommentaries} from "../../redux/CommentaryReducer";

class Pagination extends React.Component {

    handlePageClick = (data) => {
        this.setState({currentPage: data.selected, offset: this.props.pageCount}, () => {
            this.props.getCommentaries(this.props.postId, this.props.sort,  this.props.pageCount);
        });
    }

    render() {

        return (
            <Row>
                <Col>
                    <ReactPaginate
                        pageCount={this.props.pageCount}
                        itemsCountPerPage={10}
                        breakLabel={<span>...</span>}
                        onPageChange={this.handlePageClick}
                        containerClassName={"pagination"}
                        pageClassName={"page-item"}
                        pageLinkclassName={"page-link"}
                    />
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = state => ({
    pageCount: state.paginationState.pageCount,
    currentPage: state.paginationState.currentPage,
    sort: state.paginationState.sort
})

export default connect(mapStateToProps, {getCommentaries})(Pagination);