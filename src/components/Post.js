import React, {Component} from 'react';
//import axios from 'axios';
import {connect} from 'react-redux';
import deletePost from '../actions/postActions';

class Post extends Component{
    /*state = {
        post: null
    }
    componentDidMount() {
        console.log(this.props);            //remember I have access to props in all routes
        let currentid = this.props.match.params.post_id;        //va a recuperare i parametri della props (si può trovare nella console.log)
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(res =>{
                this.setState({
                    post: res.data
                })
                console.log(res)                //to see the output of the setState
            })
    }*/
    handleClick = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/');               //to redirect the user to Homepage after they delete a post
    }
    render() {
        console.log(this.props);
        //const post = this.state.post ? (      modify each occurency of this.state => this.props
        const post = this.props.post ? (    
            <div class="post">
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div className="center">
                    <button className="btn grey" onClick={this.handleClick}>
                        Delete Post
                    </button>
                </div>
            </div>
        ) : (
            <div className="container">Loading post...</div>
        );

        return(
            <div className="container">
                {post}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {      //refers to the props of the component redux props are attached: it contains info about the route (id)
    let id = ownProps.match.params.post_id;         //grab route parameter
    return {
        post: state.posts.find((post) => {          //can also write it  simpler beacuse returning only one line:   [..].find(post => post.id === id)
            post.id === id                          //if this is true then it returnes the post with that id
        })
    }
}

const mapDispatchToProps = (dispatch) => {          //method to dispatch an action to the reducer
    //since we pass the function as parameter no need for store.dispatch(action) => dispatch(action) is enough
    return {
        deletePost: (id) => { dispatch(deletePost(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);