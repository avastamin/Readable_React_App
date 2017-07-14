import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class PostDetails extends Component {

    render() {
        const { post } = this.props;
        return (
            <div className="single-post">
            <h1 className="single-post-title entry-title">{ post.title }</h1>
        <div className="post-meta">
            <ul className="meta clr meta-with-title">
            <li className="meta-date">
            <FontAwesome className='fa fa-clock-o'/>
            <time className="updated" datetime="2016-06-17" itemprop="datePublished" pubdate="">June 17, 2016</time>
        </li>
        <li className="meta-author">
            <FontAwesome className='fa fa-user'/>
            <span className="vcard author" itemprop="name"><span class="fn">
            <a href="https://colorlib.com/wp/author/alexivanovs/" title="Posts by Alex Ivanovs" rel="author" itemprop="author" itemscope="itemscope" itemtype="http://schema.org/Person" data-wpel-link="internal">Alex Ivanovs</a>
        </span></span>
        </li>
        <li className="meta-category">
            <FontAwesome className='fa fa-folder-o'/>
            <a href="https://colorlib.com/wp/category/website-templates/" rel="category tag" data-wpel-link="internal">Website Templates</a>
        </li>
        <li className="meta-comments comment-scroll">
            <FontAwesome className='fa fa-comment-o'/>
            <a href="https://colorlib.com/wp/free-bootstrap-blog-templates/#view_comments" class="comments-link" data-wpel-link="internal">18 Comments</a>
        </li>
        </ul>
        </div>
        <div className="single-blog-content entry clr">{ post.body }</div>
        </div>
    )
    }
}


export default PostDetails;