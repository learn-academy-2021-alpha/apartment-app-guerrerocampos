import React, { Component } from 'react'
import { Jumbotron, Button } from 'reactstrap';


class Header extends Component {
    render () {
        return (
            <>
            <div>
                <Jumbotron>
                    <h1 className="display-1">Welcome To ApartmentFinder</h1>
                        <p className="lead">Let's find you a new home!</p>
                            <hr className="my-2" />
                        <p className="lead">
                            <Button color="primary">Find Apartments</Button>
                        </p>
                </Jumbotron>
            </div>
            </>
        )
    }
}
export default Header

