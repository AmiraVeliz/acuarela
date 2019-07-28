import { connect } from 'react-redux';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AquarelleDetails from './components/aquarelles/aquarelleDetails/aquarelleDetails';
import About from './components/about';
import AquarelleFormPage from './components/aquarelles/aquarelleFormPage/aquarelleFormPage';
import AquarellesByUser from './components/aquarelles/aquarellesByUser/aquarellesByUser';
import ErrorComponent from './components/error';
import Contact from './components/contact';
import Home from './components/home/home';
// import HistoryComponent from './Components/History';
import Login from './components/user/login/login';
import Navigation from './components/navigation/navigation';
import Signup from './components/user/signup/signup';
import PrivateRoute from './components/common/privateRoute/privateRoute';

import './app.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <BrowserRouter>
        <div className='main'>
          <Navigation />
          <Switch>
            <Route path='/' component={Home} exact />
            {/* <PrivateRoute authed={this.props.user.isLoggedIn} path='/history' component={HistoryComponent} /> */}
            <Route path='/about' component={About} />
            <Route path='/aquarelle-detail/:id' component={AquarelleDetails} />
            <PrivateRoute authed={this.props.user.isLoggedIn} path='/aquarelles-user' component={AquarellesByUser} />
            <Route path='/contact' component={Contact} />
            <PrivateRoute authed={this.props.user.isLoggedIn} path='/aquarelle-form' component={AquarelleFormPage} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            <Route component={ErrorComponent} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  user: state.userStore.user
})

export default connect(mapStateToProps, {})(App);
