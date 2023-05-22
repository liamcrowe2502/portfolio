import {Component} from 'react';
import "./NavbarStyles.css";

class Navbar extends Component {

    state={ clicked: false};
    handleClick = () =>{
        this.setState({clicked: !this.state.clicked});
    }
    render() {
    return (
        <>
            <nav>
                <a href="#Home" id="navbarName">Liam Crowe</a>

                <div>
                    <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
                        <li><a href="#Home">Home</a></li>
                        <li><a href="#About">About</a></li>
                        <li><a href="#Projects">Projects</a></li>
                        <li><a href="#Contact">Contact</a></li>
                    </ul>
                </div>

                <div id="mobile" onClick={this.handleClick}>
                    <i id="bar" className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
            </nav>
        </>
    );

}
}

export default Navbar;