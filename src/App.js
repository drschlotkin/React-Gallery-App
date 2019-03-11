import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Header from './Components/Header';
import Gallery from './Components/Gallery';
import key from './Components/config.js';

export default class App extends Component {  
  
  constructor(){
    super()
    this.state = {
      gifs: [],
      loading: true,
      query: ''
    };
  };

  componentDidMount() {
    this.performSearch(); 
  };

  performSearch = (query = 'mosquito') => {
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(responseData => {
      document.body.classList.add('background-image');
      this.setState({
        gifs: responseData.photos.photo,
        loading: false,
        query
      });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  };


  render() {
    
    return (
      <BrowserRouter>
        <div className="container">
          <Header displayResults={this.performSearch}/>
          
          <Route path="/" render= {() => 
            (this.state.loading)
            ? <p>Loading...</p>
            : <Gallery data={this.state.gifs} title={this.state.query}/>
          }
          />
          {/* <Route path="/jellyfish" render={props=> <Gallery data={props} title={'jelly fish'}/> } /> */}
           
        </div>
      </BrowserRouter>
    );
  };
};

