import React, { Component } from "react";
import PropTypes from 'prop-types'
import './commentItem.css'

export default class CommentItem extends Component {

    static propTypes = {
        comment: PropTypes.object.isRequired,
        deleteComment: PropTypes.func.isRequired,
        index: PropTypes.number.isRequired,
    }

    handleDelete = () => {
        const { comment, deleteComment, index } = this.props
        if (window.confirm(`Confirm to delete ${comment.username} comment?`)) {
            deleteComment(index)
        }
    }

    render() {

        const { comment } = this.props

        return (
            <li className="list-group-item">
                <div className="handle">
                    {/* <a href="javascript:;" onClick={this.handleDelete}> X </a> */}
                    <button type='button'  className='btn btn-sm btn-danger' onClick={this.handleDelete}> X </button>
                </div>
                <p className="user"><span>{comment.username}</span><span> Said:</span></p>
                <p className="sentence">{comment.content}</p>
            </li>
        )
    }
}