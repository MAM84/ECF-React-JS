import React, {Component} from 'react';
import logo from '../logo.svg';

class Header extends Component {

    render() {
        return (
            <header>
                <img alt="logo" src={logo}/>
                <h1>My Music App</h1>
            </header>  
        )
    }
}

export default Header;