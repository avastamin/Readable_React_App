import React, { Component } from 'react';
import * as ReadableAPI from './ReadableAPI'
import PostList from './components/PostList';
import './App.css';

class App extends Component {
    state = {
        posts:[],
        categories: []
    }
    componentDidMount() {
        ReadableAPI.getPosts().then(posts => {
            this.setState({posts})
        })

        ReadableAPI.getAll().then(categories => {
            this.setState({categories})
        });
    }
  render() {
        const { posts } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Readable Blog</h2>
        </div>
          <PostList posts={ posts }/>
      </div>
    );
  }
}

export default App;
