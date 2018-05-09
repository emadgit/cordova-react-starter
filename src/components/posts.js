import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from 'axios';
import { fetchPosts } from '../actions/postAction'
class Posts extends Component {
   componentWillMount = () => {
     this.props.fetchPosts()
   }
   
  render() {
      const postItems = this.props.posts.map(post=>(
          <div key={post.id}>
            <h2>{post.title}</h2>
          </div>
      ))
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    )
  }
}

const mapStateToProps = state =>({
    posts: state.posts.items
})

export default connect (mapStateToProps, {fetchPosts})(Posts)
