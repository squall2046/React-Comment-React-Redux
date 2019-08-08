import React, { Component } from "react";
import PropTypes from 'prop-types'

export default class CommentAdd extends Component {

    static propTypes = {
        addComment: PropTypes.func.isRequired
    }

    state = {
        username: '',
        content: ''
    }

    handleUserChange = (event) => {
        const username = event.target.value
        this.setState({ username })
    }

    handleContentChange = (event) => {
        const content = event.target.value
        this.setState({ content })
    }

    handleSubmit = () => {
        //收集数据,并封装成 comment 对象
        const comment = this.state
        //更新状态
        this.props.addComment(comment)
        //清除输入数据
        this.setState({ username: '', content: '' })
    }


    render() {

        const { username, content } = this.state
        return (
            <div className="col-md-4 float-left">
                <form action="" className="form-horizontal">
                    <div className="form-group">
                        <label>User ID: </label>
                        <input type="text"
                            className="form-control"
                            placeholder='user'
                            value={username}
                            onChange={this.handleUserChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add Comments: </label>
                        <textarea cols="30" rows="6"
                            className="form-control"
                            placeholder='...'
                            value={content}
                            onChange={this.handleContentChange}
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2">
                            <button type='button'
                                className="btn btn-secondary pull-right"
                                onClick={this.handleSubmit}>submit</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}