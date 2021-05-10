//fuctional component
import React from 'react';
import {Link, NavLink, withRouter} from 'react-router-dom';         {/*makes transitions smoother, NavLink adds class active to the selected tag (for css)*/}

const Navbar = (props) => {
    console.log(props);
    /* setTimeout(() => {
        props.history.push('/about')
    }, 2000) */
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a className="brand-logo">PokeTimes</a>
                <ul className="right">
                        {/*tag Link prevents default action form occuring when we click on the a tags (request to server and refresh), usando tag a ricarica la pagina (fa richiesta al server --> non ideale), quindi usa Link (nel browser appare come semplice tag a)*/}
                    <li><Link to="/">Home</Link></li>               {/* "/" means this link is to the root page (./home se vedo home ripetuto in tutte le pagine e non mi interessa la url brutta)*/}
                    <li><NavLink to="/about">About</NavLink></li>            {/*link come viene letto nella url*/}
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar); //supercharging a component, so it has access to push properties
//Navbar is a higher order component because it doesn't have a Route tag in App.js