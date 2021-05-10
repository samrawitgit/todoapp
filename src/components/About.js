//fuctional component
import React from 'react';
import Rainbow from '../hoc/Rainbow';       // .. esci dadirectory corrente, entra in hoc e poi rainbow

const About = () => {
    return (
        <div className="container">
            <h4 className="center">About</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit mollitia laboriosam, nostrum officiis est, asperiores vero sequi molestias dignissimos deserunt aliquid hic autem excepturi. Ullam est vel accusantium autem facere.</p>
        </div>
    )
}

export default Rainbow(About);