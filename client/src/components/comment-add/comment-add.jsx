import React, { Component } from "react";

export default class CommentAdd extends Component {
    render() {
        return (
            <div className="col-md-4 float-left">
                <form action="" className="form-horizontal">
                    <div className="form-group">
                        <label for="">User ID: </label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label for="">Add Comments: </label>
                        <textarea name="" id="" cols="30" rows="6" className="form-control"></textarea>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button className="btn btn-default pull-right">submit</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}