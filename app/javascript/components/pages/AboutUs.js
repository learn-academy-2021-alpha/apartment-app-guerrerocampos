// this is my apartments show page

import React, { Component } from "react"
import { NavLink } from 'react-router-dom'
import { Button } from 'reactstrap'

class AboutUs extends Component {
  render() {
    const apartment = this.props.apartment;
        console.log(apartment)
    return(
      <>
      <h3>About the Complex</h3>

      <div>Street: {this.props.apartment.street}</div>
      <div>City: {apartment.city}</div>
      <div>State: {apartment.state}</div>
      <div>Manager: {apartment.manager}</div>
      <div>Manager Email: {apartment.email}</div>
      <div>Price: {apartment.price}</div>
      <div>Bedrooms: {apartment.bedroom}</div>
      <div>bathrooms: {apartment.bathroom}</div>
      <div>Pets Allowed: {apartment.pets}</div>
      <p><img src = {apartment.image_url} alt = "image" width="50%" height="50%" /></p>
      <br></br>
        <NavLink
          to={`/addapartment/${this.props.apartment}`}
        >
          <Button color="secondary">
             Add an Apartment for Rent
          </Button>
        </NavLink>
      </>
    )
  }
}

export default AboutUs