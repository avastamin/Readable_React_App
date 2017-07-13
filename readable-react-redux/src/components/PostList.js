import React, { Component } from 'react';
import Post from './Post';

class PostList extends Component {

    render() {
        const { posts } = this.props;
        return (
            <div className="posts-wrap">
                <div className="posts-list">
                    {posts.map((post) => (
                        <div key={post.id}>
                            <Post post={post} />
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}


export default   PostList;