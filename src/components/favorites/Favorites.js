import React, { Component } from 'react';
import FavoritesResult from './FavoritesResult';
import Header from './Header';
import { getLikedPhotos } from '../../helpers/favoritesApi';
import { getCurrentUser } from '../../helpers/loginApi';
import { deleteImage } from '../../helpers/favoritesApi';
import { processingView } from '../../helpers/view';

class Favorites extends Component {
  state = {
    username: '',
    imgs: [],
    err: false,
    isLoading: true,
    totalPages: 1,
    page: 1,
    perPage: 20, 
    orderBy: 'latest',
    token: sessionStorage.getItem('access_token'),
  }

  componentDidMount = async () => {
    const {page, perPage, orderBy, token} = this.state;  
    const user = await this.getCurrentUser(token);

    if(user !== undefined) {      
      const data = await getLikedPhotos(user.username, page, perPage, orderBy, token);
      const totalPages = this.getTotalPages(data);

      this.setState({ 
        username: user.username,
        imgs: data,
        totalPages: totalPages,
        isLoading: false
      });
    }
  };

  getCurrentUser = async token => {  
    if(token !== null) {
      const user = await getCurrentUser(token);
      return user;
    }
  }

  getTotalPages = data => {
    const {perPage} = this.state;
    const amountOfPictures = data.length;
    return Math.ceil(amountOfPictures / perPage);
  }

  handleReturn = () => {
    this.props.history.goBack();
  }

  handleDelete = async (id) => {
    const { token } = this.state;
    if(token !== null) {
      const imgs = this.state.imgs.filter(img => img.id !== id);
      this.setState({ imgs });
      await deleteImage(id, token);
    }
  }

  favoritesView = () => {
    const { imgs } = this.state;

    return (
      <div className='container'>
          <Header
            clickReturn={this.handleReturn}
          />

          <div className='result'>
            <FavoritesResult imgs={imgs} click={this.handleDelete} />
          </div>
      </div>
    );
  }

	render() {
    const { isLoading } = this.state;

    return (
        <React.Fragment>
          {isLoading ? processingView('Loading') : this.favoritesView()}
        </React.Fragment>        
    );
  }
}

export default Favorites;
