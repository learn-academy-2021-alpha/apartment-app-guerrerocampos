import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { Redirect } from "react-router-dom"

class AddApartment extends Component {
  constructor(props){
    super(props)
    this.state = {
      form: {
        street: "",
        city: "",
        state: "",
        manager: "",
        email: "",
        price: "",
        bedrooms: "",
        bathrooms: "",
        pets: "",
        image_url: ""
      },
      submitted: false
    }
  }

  handleChange = (e) => {
    let { form } = this.state
    form[e.target.name] = e.target.value
    this.setState({ form: form })
  }

  handleSubmit = () => {
    this.props.createAddApartment(this.state.form)
    this.setState({ submitted: true })
  }

  render() {
    return (
      <>
        <h2>Add an Apartment for rent</h2>
        <Form>
          <FormGroup>
            <Label for="street">Street Address</Label>
            <Input
              type="text"
              name="Enter address"
              value={ this.state.form.street }
              onChange={ this.handleChange }
            />
          </FormGroup>
          <FormGroup>
            <Label for="city">City</Label>
            <Input
              type="text"
              name="city"
              value={ this.state.form.city }
              onChange={ this.handleChange }
            />
          </FormGroup>
          <FormGroup>
            <Label for="state">State</Label>
            <Input
              type="text"
              name="state"
              value={ this.state.form.state }
              onChange={ this.handleChange }
            />
          </FormGroup>
          <FormGroup>
            <Label for="manager">Manager Name</Label>
            <Input
              type="text"
              name="manager"
              value={ this.state.form.manager }
              onChange={ this.handleChange }
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">E-mail</Label>
            <Input
              type="text"
              name="email"
              value={ this.state.form.email }
              onChange={ this.handleChange }
            />
          </FormGroup>
          <FormGroup>
            <Label for="price">Rental Price</Label>
            <Input
              type="text"
              name="price"
              value={ this.state.form.price }
              onChange={ this.handleChange }
            />
          </FormGroup>
          <FormGroup>
            <Label for="bedrooms">Bedrooms</Label>
            <Input
              type="text"
              name="bedrooms"
              value={ this.state.form.bedrooms }
              onChange={ this.handleChange }
            />
          </FormGroup>
          <FormGroup>
            <Label for="bathrooms">Bathrooms</Label>
            <Input
              type="text"
              name="bathrooms"
              value={ this.state.form.bathrooms }
              onChange={ this.handleChange }
            />
          </FormGroup>
          <FormGroup>
            <Label for="pets">Pets Allowed</Label>
            <Input
              type="text"
              name="pets"
              value={ this.state.form.pets }
              onChange={ this.handleChange }
            />
          </FormGroup>
          <FormGroup>
            <Label for="image_url">Add Image url/link</Label>
            <Input
              type="text"
              name="image_url"
              value={ this.state.form.image_url }
              onChange={ this.handleChange }
            />
          </FormGroup>
          <Button
            onClick={ this.handleSubmit }
          >
            Add new Listing
          </Button>
        </Form>
        { this.state.submitted && <Redirect to="/browseapartments" /> }
      </>
    )
  }
}
export default AddApartment