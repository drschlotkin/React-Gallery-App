import React, {Component} from 'react';
import searchIcon from './searchIcon';

export default class Search extends Component {

  /* When user submits search form, the browser URL is updated to reflect the search query and the 
  search query is passed back to <Header /> and then to <App /> */
  
  handleSubmit = e => {
    e.preventDefault();
    let path = `/search/${this.query.value}`;
    this.props.onSearch('searchResults', this.query.value);
    e.currentTarget.reset();
    this.props.history.push(path);
  };

  render(){
    return (
      <div>
        <form className ='search-form' onSubmit={this.handleSubmit} >
          <input type="search" 
            name="search"
            ref={(input) => this.query = input}
            placeholder="Search" />
          <button type="submit">
            {searchIcon}
          </button>
      </form>
    </div>
    );
  };
};

