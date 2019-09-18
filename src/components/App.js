import React, { Component } from 'react';
import '../css/App.css';
import { HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Home from './home/Home';
import Login from './Login';
import Search from './search/Search';
import Favorites from './favorites/Favorites';
import NotFound from './NotFound';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      sessionStorage.getItem('access_token') ? (
        <Component {...props} />
      ) : (
        <Redirect
         to={{
           pathname: '/login',
           state: { from: props.location }
         }}
         />
      )    
    }
  />
)

class App extends Component {
	render() {    
		return (
        <Router basename="/">
          <div className='main-container'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/search/:query' component={Search} />
              <PrivateRoute exact path='/favorites' component={Favorites}/>
              <Route path='/login' component={Login}/>
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
		);
	}
}

export default App;



