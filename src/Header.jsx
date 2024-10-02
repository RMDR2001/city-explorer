import React from "react";
import { Navbar } from "react-bootstrap";

class Header extends React.Component {
    render() {
        return (
            <header>
                <Navbar expand="lg" className= "bg-body-tertiary">
                    <h1>Explorando Ciudades</h1>
                    <p>Exploremos juntos la ciudad!</p>
                </Navbar>
            </header>
        );
    }
}

export default Header;