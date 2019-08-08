import React, { Component } from "react";
import propTypes from 'prop-types'
import { connect } from 'react-redux'

import CommentAdd from '../../components/comment-add/comment-add'
import CommentList from '../../components/comment-list/comment-list'
import { addComment, deleteComment, getComments } from '../../redux/actions'

class App extends Component {
  // export default class App extends Component {

  // 没有这个也不会报错,但是这样写更标准
  static propTypes = {
    comments: propTypes.array.isRequired,
    addComment: propTypes.func.isRequired,
    deleteComment: propTypes.func.isRequired,
    getComments: propTypes.func.isRequired,
  }

  // state = {
  // comments: [
  // { username: 'Tom', content: 'good!' },
  // { username: 'Jerry', content: 'yes!' }
  // ]
  // }

  componentDidMount() {
    // 异步获取所有 comments 数组
    this.props.getComments()
  }

  // addComment = (comment) => {
  //   const { comments } = this.state
  //   comments.unshift(comment)
  //   this.setState({ comments })
  // }

  render() {
    const { comments, addComment, deleteComment } = this.props

    return (
      <div>
        <header className='site-header jumbotron '>
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>React Redux</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <CommentAdd addComment={addComment} />
          <CommentList comments={comments} deleteComment={deleteComment} />
        </div>
      </div>
    );
  }
}

// react-redux
export default connect(
  // state => ({ comments: state.comments }),
  state => ({ comments: state }),
  { addComment, deleteComment, getComments },
)(App)
