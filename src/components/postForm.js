import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from "axios"

import {newPost} from '../actions/postAction'

class PostForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            username : "",
            password: ""
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }
    onSubmit(e){
        e.preventDefault()
        const post = {
            "title": this.state.username,
            "body": this.state.password
        }

        this.props.newPost(post);
    }
  render() {
    return (
      <div>
        <h1>Post Form</h1>
        <form onSubmit={this.onSubmit}>
            <input type="text" placeholder="Username" value={this.state.username} onChange={this.onChange} name="username" />
            <input type="password" placeholder="Password" value={this.state.password} onChange={this.onChange} name="password" />
            <input type="submit" value="submit" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = state=>({
    posts: state.posts.item
})

export default connect(mapStateToProps, {newPost})(PostForm);
