import React, {Component} from 'react';
import searchIcon from './searchIcon'

export default class Search extends Component {

  state = {
    searchText: ''
  };

  onSearchChange = e => {
    this.setState({ searchText: e.target.value }); 
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch.displayResults(this.state.searchText);
    
    // this.props.onSearch.onSearch(this.query.value);
    e.currentTarget.reset();
  }
  
  render(){
    
    return (
      <div>
        <form className ='search-form' onSubmit={this.handleSubmit} >
          <input type="search" 
            onChange={this.onSearchChange} 
            //  ref={(input) => this.query = input}
            placeholder="Search" />
          <button type="submit">
            {searchIcon}
          </button>
      </form>
    </div>
    );
  };
};

