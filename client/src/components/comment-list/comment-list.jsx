import React, { Component } from "react";
import './commentList.css'

export default class CommentList extends Component {
    render() {
        return (
            <div className="col-md-8 float-right">
                <h3 className="reply">Comments:</h3>
                <h2 style={{ display: 'none' }}>No Comments</h2>
                <ul className="list-group">
                    <li className="list-group-item">
                        <div className="handle">
                            <a href="javascript:;"> X </a>
                        </div>
                        <p className="user"><span>xxx</span><span>Said:</span></p>
                        <p className="sentence">React is good!</p>
                    </li>
                    <li className="list-group-item">
                        <div className="handle">
                            <a href="javascript:;"> X </a>
                        </div>
                        <p className="user"><span>yyy</span><span>Said:</span></p>
                        <p className="sentence">React is hard!</p>
                    </li>
                </ul>
            </div>
        )
    }
}