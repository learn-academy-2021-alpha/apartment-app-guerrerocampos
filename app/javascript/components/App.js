import React from "react"
import PropTypes from "prop-types"

import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'

import AboutTheComplex from './pages/AboutTheComplex'
import Home from './pages/Home'
import AddApartment from './pages/AddApartment'
import BrowseApartments from './pages/BrowseApartments'
import Header from './components/Header'
import Footer from './components/Footer'
import mockApartments from './mockApartments.js'
import { NavLink } from 'react-router-dom'
import { Nav, NavItem } from "reactstrap"
import NotFound from './pages/NotFound'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      apartments: []
    }
  }
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    return (
      <>
      <Router>
        <Header 
        />
        {/* { logged_in &&
          <div>
            <AddApartment />
            <a href={sign_out_route }>Sign Out</a>
          </div>
        }
        { !logged_in &&
          <div>
            <a href={ sign_in_route }>Sign In</a>
          </div>
        } */}
        <Switch>
          <Route path="/browseapartments" render={ (props) => <BrowseApartments apartments={ this.state.apartments } /> }
          />
          <Route exact path="/" component={ Home } />
          <Route
              path="/aboutthecomplex/:id"
              render={ (props) => {
                let id = props.match.params.id
                let apartment = this.state.apartments.find(apartment => apartment.id === parseInt(id))
                return (
                  <AboutTheComplex
                    apartment={ apartment }
                  />
                )
              }}
            />         
          <Route path="/addapartment" component={ AddApartment } />
          <Route component = { NotFound } />
        </Switch>
        { logged_in &&
          <div>
            <AddApartment />
            <a href={sign_out_route }>Sign Out</a>
          </div>
        }
        { !logged_in &&
          <div>
            <a href={ sign_in_route }>Sign In</a>
          </div>
        }
        
        <Footer/>
      </Router>
      </>
    )
  }
}

export default App
