import React, { Component } from 'react';
import { postForToken } from '../helpers/loginApi';
import { authorizationUrl } from '../helpers/routes'; 
import queryString from 'query-string';
import { processingView } from '../helpers/view';

class Login extends Component {
    state = { 
        locationState: this.props.location.state,
        authenticating: true
    }

    componentDidMount = async () => {
        if(sessionStorage.getItem('access_token')) {
            this.redirectToHomePage();
        } else {
            const code = this.authorizationCode();
            if(code !== undefined) {
                const token = await this.getApiAccessToken(code);
                this.saveTokenInSessionStorage(token);
                this.redirect();
            } else {
                this.setState({
                    authenticating: false
                });
            }
        }           
    }

    redirectToHomePage = () => {
        this.props.history.push(`/`);
    }

    authorizationCode = () => {
        const params = queryString.parse(this.props.location.search);
        return params.code;
    }

    saveTokenInSessionStorage = token => {
        if(token !== undefined) {
            sessionStorage.setItem('access_token', token);
        }
    }
    
    getApiAccessToken = async code => {
        const data = await postForToken(code);
        return data ? data.access_token : data;
    }

    redirect = () => {
        const url = this.redirectUrl();
        this.props.history.push(url);
    }

    redirectUrl = () => { 
        const url = sessionStorage.getItem('redirectUrl');
        return url !== null ? url : '/';
    }

    redirectToAuthorizationUrl = () => {
        const { locationState } = this.state;

        if(locationState !== undefined) {
            const fromLocation = locationState.from.pathname;
            sessionStorage.setItem('redirectUrl', fromLocation);
        }
        window.location.href = authorizationUrl();
      }

    logInView = () => {
        const { locationState } = this.state;
    
        return (
            <div className='login-page'>
                {locationState !== undefined ? 
                    <p>You must login to view the page: {locationState.from.pathname}</p> 
                    : <p>Log in</p>}
                <button onClick={this.redirectToAuthorizationUrl}>Unsplash login</button>
            </div>       
        );
    }

    render() {
        const { authenticating } = this.state;

            return (
                <React.Fragment>
                    {authenticating ? processingView('Authenticating') : this.logInView()}
                </React.Fragment>    
            );
        }
}
 
export default Login;