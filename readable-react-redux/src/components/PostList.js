import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Post from './Post';

const Child = ({ match }) => (
    <div>
        { this.props }
        <h3>ID: {match.params.id}</h3>
    </div>
)
class Task extends  Component {
    render() {
        return (
            console.log("get taskId: " + this.props)
        )
    }
}
class PostList extends Component {

    render() {
        const { posts } = this.props;
        return (
            <div className="posts-wrap">
                <ul className="posts-list">
                    {posts.map((post) => (
                        <li key={post.id}>
                            <Link to={`/blog/${post.id}`} params={{ id: post.id }}>{ post.title }</Link>
                        </li>
                    ))}
                </ul>
                <Route path="/:id" handler={Task}/>
            </div>
        )
    }

}


export default   PostList;