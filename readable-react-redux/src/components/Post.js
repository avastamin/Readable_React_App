import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class Post extends Component {

    render() {
        const { post } = this.props;
        return (
            <div className="post-list">
               <h2>{ post.title }</h2>
            </div>
        )
    }
}


export default Post;