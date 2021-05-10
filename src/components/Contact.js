//fuctional component
import React from 'react';
//if the fuctions takes in the props then the router information is automatically added to it
const Contact = (props) => {
    //PROGRAMMATIC REDIRECTION: history.push indica la url di reindirizzamento, tempo in ms (millisecondi)
    //passing the props to only one Rout makes it accessible by the whole router (including oter routes)
   /*  setTimeout(() => {
        props.history.push('/about')
    }, 2000); */        
    return (
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit mollitia laboriosam, nostrum officiis est, asperiores vero sequi molestias dignissimos deserunt aliquid hic autem excepturi. Ullam est vel accusantium autem facere.</p>
        </div>
    )
}

export default Contact;