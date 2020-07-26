import React from 'react';
import Rate from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import {ratePost} from "../../../redux/PostReducer";
import {connect} from "react-redux";

const Rating = (props) => {

    return (
        <div>
            <Box component="fieldset" mb={3} borderColor="transparent">
                <Rate name="simple-controlled"
                      value={props.currentRate}
                    //send rate request
                      onChange={(event, newValue) => {
                          props.ratePost(newValue, props.postId);
                      }}
                />
            </Box>
            <Box component="fieldset" mb={3} borderColor="transparent">
                <Rate name="read-only" value={props.currentRate} readOnly/>
            </Box>
        </div>
    );
}

export default connect(null, {ratePost})(Rating)