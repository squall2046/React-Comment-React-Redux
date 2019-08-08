import React, { Component } from "react";
import propTypes from 'prop-types'
import { connect } from 'react-redux'

import CommentAdd from '../../components/comment-add/comment-add'
import CommentList from '../../components/comment-list/comment-list'
import { addComment, deleteComment, getComments } from '../../redux/actions'

class App extends Component {

  static propTypes = {
    comments: propTypes.array.isRequired,
    addComment: propTypes.func.isRequired,
    deleteComment: propTypes.func.isRequired,
    getComments: propTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.getComments()
  }

  render() {
    // const { comments, addComment, deleteComment } = this.props

    return (
      <div>
        <header className='site-header jumbotron'>
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>React Redux</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <CommentAdd />
          <CommentList />
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({ comments: state }),
  { addComment, deleteComment, getComments },
)(App)
