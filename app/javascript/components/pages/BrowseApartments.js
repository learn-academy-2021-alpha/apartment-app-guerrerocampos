// this is my apartment index page

import React, { Component } from "react"
import { NavLink } from 'react-router-dom'



class BrowseApartments extends Component {
  render() {
    return(
      <>
      <h3>Browse Through Our Apartments</h3>
        <ul>
            {this.props.apartments.map(apartment => {
              return (
                <li key={apartment.id}>
                  <NavLink to={`/aboutthecomplex/${apartment.id}`}>{apartment.street}</NavLink>
                </li>
              )
            })}
        </ul>
      </>
    )
  }
}

export default BrowseApartments