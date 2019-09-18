import React, { Component } from 'react';
import HomeContent from './HomeContent';
import { getRandomImage } from '../../helpers/homeApi';
import { processingView } from '../../helpers/view';

class Home extends Component {
  state = { 
      img: '',
      isLoading: true,
      query: ''
    }

  componentDidMount = async () => {
    const data = await getRandomImage();
    this.setState({ 
      img: data,
      isLoading: false
    });  
  }
  
  handleKeyPress = (event) => {
    const {query} = this.state;
    if(event.keyCode === 13 && query.length > 0) {
      this.props.history.push(`/search/${query}`);
    }
  }

  handleChange = (e) => {
    this.setState({query: e.target.value});
  }

  render() { 
    const {isLoading} = this.state;

    return ( 
      <div>
        {isLoading ? processingView('Loading') :  
          <HomeContent 
            img={this.state.img} 
            change={this.handleChange} 
            keyPress={this.handleKeyPress}
          />
        }
      </div>
    );
  }
}
 
export default Home;
