import React, { Component } from 'react'
import { Jumbotron, Button } from 'reactstrap';

class Footer extends Component {
    render () {
        return (
            <>
                <div>
                <Jumbotron>
                <hr className="my-2" />
                <p>© 2021 @Home, developed by: Guerrero Campos</p>
                <p className="lead">
                </p>
                </Jumbotron>
                </div>
            </>
        )
    }
}
export default Footer