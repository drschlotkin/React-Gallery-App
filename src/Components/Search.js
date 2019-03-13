import React, {Component} from 'react';
import searchIcon from './searchIcon'


export default class Search extends Component {

  handleSubmit = e => {
    e.preventDefault();
    let path = `/search?q=${this.query.value}`;
    
    console.log(this.props.onSearch(this.query.value))
    e.currentTarget.reset();
    this.props.history.push(path);

  }

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

