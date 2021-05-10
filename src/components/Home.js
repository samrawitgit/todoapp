//fuctional component  --(transformed into)--> class component, because functional components cannot use lifecycle hooks
import React, {Component} from 'react';
//import axios from 'axios';              //per recuperare data esterni
import {Link} from 'react-router-dom';
import Figura from '../img/logo192.png';
import {connect} from 'react-redux';        //function that returns a HOC

class Home extends Component{
    /*state = {
        posts: [ ]               //l'array dove voglio andare a salvare data recuperati
    }
    //add dummy data
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')         //get = _GET, posso anche usare post (per info in _POST) ; Libreria JSON con elementi fasulli (solo per produzione)
        //this is a asycronous task: it needs some time (not automatic) --> it returns a promise: this will complete at some point in time 
            .then(res => {           //.then method fires when the task has been fully completed. Insert a callback function that takes as parameter the response object from previous function 
                console.log(res)      //to see the response object: property DATA contains all the info we want to transfer
                this.setState({
                    posts: res.data.slice(0,10)              //since theres 100 posts i only want to transfer 10 posts (SLICE METHOD)
                })
            })          
    }*/
     //to add state from redux (without jsonplaceholder) we don't need to define the state --> modify each occurency of this.state => this.props
    
    render(){
        //const {posts} = this.state;
        const {posts} = this.props;         //received as a prop from redux
        const postList = posts.length ? (            //per controllare che non sia un arrai vuoto
            posts.map(post => {
                return(
                    <div className="post card" key={post.id}>
                        <img src={Figura} alt="logo pic" />
                        <div className="card-content">
                            <Link to={'/' + post.id}>               {/*per concatenare stringa e proprietà*/}
                                <span className="card-title red-text">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">No posts yet</div>
        );
        return (
            <div className="container">
                <h4 className="center">Home</h4>
                {postList}
            </div>
        );
    }
}

//to have access to data in Redux we MAP its state (passed as a parameter) into the props of this component
const mapStateToProps = (state) => {            
    return {
        //all the properties we want to add to this component
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home);         
//connect is a function that returs a HOC that wraps Home component and superchages it: 
//  1) evoke function that indicates where to save data and which data from redux
//  2) pass Home component to it