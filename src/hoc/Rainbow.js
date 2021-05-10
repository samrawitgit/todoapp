//component that randomizez the text color inside of another component
import React from 'react';

const Rainbow = (WrappedComponent) => {     //receive as a parameter because the HOC has to wrap that component  

    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
    const randomColor = colors[Math.floor(Math.random() * 5)];      //.floor returns an integer, .random returns a number 0 < n < 1
    const classColor = randomColor + '-text';    //in materialized css textcolor is written as eg, 'red-text'

    //function that returns the supercharged component
    return (props) => {         //it takes the props that could possibly be passed into WrappedComponent, this has to be included when inserting the component with {...props}, otherwise we can't access them
        return (                //return a div container with class the random color we obtained 
            <div className={classColor}>
                <WrappedComponent {...props} />
            </div>
        )
    }

}

//return the supercharged component received at the beginning
export default Rainbow;