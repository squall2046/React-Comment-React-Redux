import React, { Component } from "react";
import PropTypes from 'prop-types'
import CommentItem from '../comment-item/comment-item'
import './commentList.css'


export default class CommentList extends Component {

    static propTypes = {
        comments: PropTypes.array.isRequired
    }

    render() {

        const { comments } = this.props

        return (
            <div className="col-md-8 float-right">
                <h3 className="reply">Comments:</h3>
                <h2 style={{ display: 'none' }}>No Comments</h2>

                <ul className="list-group">
                    {
                        comments.map((c, index) => <CommentItem comment={c} key={index} />)
                    }
                </ul>
            </div>
        )
    }
}
