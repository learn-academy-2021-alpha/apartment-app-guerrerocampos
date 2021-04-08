
import React, { Component } from 'react'
import { Jumbotron, Button, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom'




class Header extends Component {
    render () {
        return (
            <>
            <div>
                <Jumbotron>
                    <h1 className="display-1">Welcome To, @Home</h1>
                        <p className="lead">Find a place where you can feel @home!</p>
                            <hr className="my-2" />
                        <p className="lead">
                        </p>
                        <Nav>
                            <NavItem>
                                <NavLink to="/browseapartments">Browse Apartments</NavLink>
                             </NavItem>
                         </Nav>
                         <Nav>
                            <NavItem>
                                <NavLink to="/">Go to Home Page</NavLink>
                             </NavItem>
                         </Nav>
                </Jumbotron>
            </div>
            </>
        )
    }
}
export default Header

