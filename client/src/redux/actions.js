// action creator
// action 的工厂函数

import { ADD_COMMENT, DELETE_COMMENT, RECEIVE_COMMENTS } from "./action-types";

//同步添加
export const addComment = (comment) => ({ type: ADD_COMMENT, data: comment })
//同步删除
export const deleteComment = (index) => ({ type: DELETE_COMMENT, data: index })
//同步接受comments
const receiveComments = (comments) => ({ type: RECEIVE_COMMENTS, data: comments })

// 异步从后台获取数据
export const getComments = () => {
    return dispatch => {
        setTimeout(() => {
            const comments = [
                { username: 'Tom', content: 'good!' },
                { username: 'Jerry', content: 'yes!' }
            ];
            // 分发一个同步的action
            dispatch(receiveComments(comments))
        }, 1000)
    }
}