import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Header from './Components/Header';
import NotFound from './Components/NotFound';
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
    document.body.classList.add('background-image');
    this.performSearch();  
  };

  performSearch = (query) => {
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(responseData => {
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
        <Switch>
          <Route exact path="/" render={() =>  <Redirect to="/mosquito" />}/>       
          
          <Route path="/mosquito" render= {() => 
            (this.state.loading)
            ? <h1>Loading...</h1>
            : <Header title="mosquito" pictures={this.state.gifs} displayResults={this.performSearch('mosquito')}/>
          }/>

          <Route path="/jellyfish" render= {() => 
            (this.state.loading)
            ? <h1>Loading...</h1>
            : <Header title="Jelly Fish" pictures={this.state.gifs} displayResults={this.performSearch('jellyfish')}/>
          }/>

          <Route path="/humans" render= {() => 
            (this.state.loading)
            ? <h1>Loading...</h1>
            : <Header title="Humans" pictures={this.state.gifs} displayResults={this.performSearch('humans')}/>
          }/>

          <Route path='/search' render={() => 
            <Header title="Search" pictures={this.state.gifs} displayResults={(query) => this.performSearch(query)}/>
          }/>
        
        <Route component={NotFound} />
        </Switch>
        </div>
      </BrowserRouter>
    );
  };
};

