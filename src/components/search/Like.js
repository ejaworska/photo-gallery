import React, { Component } from 'react';
import * as favoritesApi from '../../helpers/favoritesApi';

class Like extends Component {
    state = { 
        isClicked : false,
     }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.isClicked !== this.state.isClicked) {
            setTimeout(() => {
                this.setState({isClicked: false});
            }, 1000);
        }
    }

    handleClick = async () => {
        if(!this.state.isClicked) {
            this.setState({isClicked: true});
            const {id, token} = this.props;
            await favoritesApi.postLikedPhoto(id, token);
        }
    }

    render() { 
        return (
            <div onClick={this.handleClick} 
                className={`button-like ${this.state.isClicked ? ' happy' : ''}`}>
                <i className='fa fa-heart'></i>
            </div>
        );
    }
}
 
export default Like;