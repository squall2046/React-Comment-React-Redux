import React, { Component } from "react";
import PropTypes from 'prop-types'
import './commentItem.css'

export default class CommentItem extends Component {

    static propTypes = {
        comment: PropTypes.object.isRequired
    }

    render() {

        const { comment } = this.props

        return (
            <li className="list-group-item">
                <div className="handle">
                    <a href="javascript:;"> X </a>
                </div>
                <p className="user"><span>{comment.username}</span><span> Said:</span></p>
                <p className="sentence">{comment.content}</p>
            </li>
        )
    }
}