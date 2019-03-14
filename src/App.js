import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Header from './Components/Header';
import NotFound from './Components/NotFound';
import key from './Components/config.js';

export default class App extends Component {  
  
  // Arrays that will hold pictures from API calls
  state = {
    searchResults: [],
    mosquito: [],
    jellyfish: [],
    humans: [],
    loading: true,
    title: ''
  };
 

  // Initial API calls to set up navigation bar
  componentDidMount() {
    document.body.classList.add('background-image');
    this.performSearch('mosquito','mosquito');  
    this.performSearch('jellyfish','jellyfish');  
    this.performSearch('humans','humans');  
  };


  // Get data from server. First variable is the array to fill. Second variable is the search query.
  performSearch = (arr, query) => {
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(responseData => {
      this.setState({
        [arr]: responseData.photos.photo,
        loading: false,
        title: query
      });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  };


  /* Routes for navigation bar and search function. */
  render() {
    return (
      <BrowserRouter>
        <div className="container">
        <Switch>
          <Route exact path="/" render={() =>  <Redirect to="/mosquito" />}/>       
          
          <Route path="/mosquito" render= {() => 
            <Header title="mosquito" pictures={this.state.mosquito} display={this.performSearch}/>
          }/>

          <Route path="/jellyfish" render= {() => 
            <Header title="jellyfish" pictures={this.state.jellyfish} display={this.performSearch} />
          }/>

          <Route path="/humans" render= {() => 
            <Header title="humans" pictures={this.state.humans} display={this.performSearch}/>
          }/>

          <Route path='/search/:id' render={() => 
            (this.state.loading)
            ? <h1>Loading...</h1>
            : <Header title={`Search results: ${this.state.title}`} 
                pictures={this.state.searchResults} 
                display={this.performSearch}
                />
          }/>
        
        <Route component={NotFound} />
        </Switch>
        </div>
      </BrowserRouter>
    );
  };
};