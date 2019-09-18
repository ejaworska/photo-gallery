import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { processingView } from '../../helpers/view';

import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import SearchForm from './SearchForm';
import PageNavs from './PageNavs';
import Result from './Result';

import { getSearchImages } from '../../helpers/searchApi';
import { authorizationUrl } from '../../helpers/routes'; 

class Search extends Component {
  state = {
    input: this.props.match.params.query,
    imgs: [],
    err: false,
    isLoading: true,
    totalPages: 1,
    page: 1,
    perPage: 20, 
    token: null
  }

  componentDidMount = async () => {
    const {input, page, perPage} = this.state;
    const data = await getSearchImages(input, page, perPage);
    const token = sessionStorage.getItem('access_token');

    this.setState({ 
      input: input,
      imgs: data.results,
      totalPages: data.total_pages,
      isLoading: false,
      token: token
    });
  }

  componentDidUpdate = async (prevProps, prevState) => {
    const {input, page, perPage} = this.state;

    if (input.length === 0) return;

    if (prevState.input !== input || prevState.page !== page) {
      this.props.history.push(`/search/${input}`);

      const data = await getSearchImages(input, page, perPage);
      
      const token = sessionStorage.getItem('access_token');

      this.setState({ 
        imgs: data.results,
        totalPages: data.total_pages,
        token: token
      });
    }
  }

  handleLogin = () => {
    sessionStorage.setItem('redirectUrl', this.props.location.pathname);
    this.redirectToAuthorizationUrl();
  }

  handleLogout = () => {
    sessionStorage.removeItem('redirectUrl');
    sessionStorage.removeItem('access_token');
    this.setState({ 
      token: null
    });
  }

  redirectToAuthorizationUrl = () => {
    window.location.href = authorizationUrl();
  }

  handleInputChange = event => {
    this.setState({
      input: event.target.value,
      page: 1
    });
  } 

  goToThePage = (num) => {
    this.setState({
      page: num
    });
  }

  getPageNavs = () => {
    const {page, totalPages} = this.state;
    
    return (<PageNavs 
            clickFirst={() => this.goToThePage(1)}
            clickPrev={() => this.goToThePage(page - 1)} 
            clickNext={() => this.goToThePage(page + 1)} 
            clickLast={() => this.goToThePage(totalPages)} 
            page={page} 
            totalPages={totalPages}
          />);
  }

  searchView = () => {
    const {input, token} = this.state;

    return (
        <div className='container'>

          <header>
            <h1>Image Search</h1>
            <div className='header-right'>
              <SearchForm change={this.handleInputChange} placeholder={input}/> 
              {token ? (
                      <React.Fragment>
                        <Link className='heart' to='/favorites'><i className='fa fa-heart'></i></Link>
                        <LogoutButton click={this.handleLogout}/>
                      </React.Fragment>)
                    : 
                      <LoginButton click={this.handleLogin}/>
                    }
            </div>
          </header>

          <div className='result'>
            <Result data={this.state} pageNavs={this.getPageNavs()}/>
          </div>

      </div>
    );
  }

	render() {
    const { isLoading } = this.state;

		return ( 
        <React.Fragment>
          {isLoading ? processingView('Loading') : this.searchView()}
        </React.Fragment>   
		);
  } 
}

export default Search;
