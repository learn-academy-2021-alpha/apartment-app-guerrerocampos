import React from "react"
import PropTypes from "prop-types"

import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'

import AboutUs from './pages/AboutUs'
import Home from './pages/Home'
import AddApartment from './pages/AddApartment'
import FindApartments from './pages/FindApartments'
import Header from './components/Header'
import Footer from './components/Footer'


class App extends React.Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    return (
      <Router>
        <Header />
        <Switch>
          { logged_in &&
            <div>
              <a href={sign_out_route }>Sign Out</a>
              <Route path="/addapartment" component={ AddApartment } />
            </div>
          }
          { !logged_in &&
            <div>
              <a href={ sign_in_route }>Sign In</a>
            </div>
          }
          <Route exact path="/" component={ Home } />
          <Route path="/about" component={ AboutUs } />
          <Route path="/findapartments" component={ FindApartments } />
        </Switch>
      </Router>
    )
  }
}

export default App
