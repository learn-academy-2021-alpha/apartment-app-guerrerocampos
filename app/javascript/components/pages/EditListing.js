import React, { Component } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import { Redirect } from 'react-router-dom'

class EditListing extends Component{
  constructor(props){
    super(props)
    this.state = {
      form:{
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
    this.props.UpdateListing(this.state.form, this.props.apartment.id)
    this.setState({ submitted: true })
  }

  render(){
    return(
      <React.Fragment>
        <h2>Edit Your Listing</h2>
        <Form>
          <FormGroup>
            <Label>Street Address</Label>
            <Input
              type="text"
              name="street"
              onChange={ this.handleChange }
              value={ this.state.form.street }
            />
          </FormGroup>
          <FormGroup>
            <Label>City</Label>
            <Input
              type="text"
              name="city"
              onChange={ this.handleChange }
              value={ this.state.form.city }
            />
          </FormGroup>
          <FormGroup>
            <Label>State</Label>
            <Input
              type="text"
              name="state"
              onChange={ this.handleChange }
              value={ this.state.form.state }
            />
          </FormGroup>
          <FormGroup>
            <Label>Manager name</Label>
            <Input
              type="text"
              name="manager"
              onChange={ this.handleChange }
              value={ this.state.form.manager }
            />
          </FormGroup>
          <FormGroup>
            <Label>e-mail</Label>
            <Input
              type="text"
              name="email"
              onChange={ this.handleChange }
              value={ this.state.form.email }
            />
          </FormGroup>
          <FormGroup>
            <Label>Rental Price</Label>
            <Input
              type="text"
              name="price"
              onChange={ this.handleChange }
              value={ this.state.form.price }
            />
          </FormGroup>
          <FormGroup>
            <Label>Bedrooms</Label>
            <Input
              type="number"
              name="bedrooms"
              onChange={ this.handleChange }
              value={ this.state.form.bedrooms }
            />
          </FormGroup>
          <FormGroup>
            <Label>Bathrooms</Label>
            <Input
              type="number"
              name="bathrooms"
              onChange={ this.handleChange }
              value={ this.state.form.bathrooms }
            />
          </FormGroup>
          <FormGroup>
            <Label>Pets Allowed</Label>
            <Input
              type="text"
              name="pets"
              onChange={ this.handleChange }
              value={ this.state.form.pets }
            />
          </FormGroup>
          <FormGroup>
            <Label>Add Image url/link</Label>
            <Input
              type="text"
              name="image_url"
              onChange={ this.handleChange }
              value={ this.state.form.image_url }
            />
          </FormGroup>
          <Button
            name="submit"
            color="secondary"
            onClick={ this.handleSubmit }
          >
            Edit Cat Profile
          </Button>
        </Form>
        { this.state.submitted &&
          <Redirect
            to={ `/catshow/${this.props.cat.id}` }
          />
        }
      </React.Fragment>
    )
  }
}
export default EditListing