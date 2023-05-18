import { Component } from "react"

import { FiSearch } from 'react-icons/fi';

export class SearchBar extends Component  {
    state = {
        searchQuery: '',
    };


    handleSubmit = e => {
        e.preventDefault();
        if (this.state.searchQuery.trim() === "") {
            return alert(
              'The search field cannot be empty. Please enter a query and try again.'
            );
        }
        this.props.onSubmit(this.state.searchQuery);
        this.setState({ searchQuery: '' })
    }

    handleChange = e => { 
        this.setState({ searchQuery: e.currentTarget.value.toLowerCase() });
    }


    render() {
        return (
          <header>
                <form onSubmit={ this.handleSubmit}>
              <button type="submit">
                        <span>
                            <FiSearch />
                </span>
              </button>

              <input
                type="text"
                autoComplete="off"
                autoFocus
                        placeholder="Search images and photos"
                        name='searchQuery'
                        value={this.state.searchQuery}
                        onChange={this.handleChange}
              />
            </form>
          </header>
        );
    }
    
}