import React from 'react';

class SearchBar extends React.Component {
  state = {
    term: '',
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    // TODO make your to call the callback from parent component

    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className='search-bar ui segment'>
        <form className='ui form' onSubmit={this.onFormSubmit}>
          <div className='field'>
            <label>Search Youtube videos</label>
            <input
              type='text'
              value={this.state.term}
              onChange={(event) => this.setState({ term: event.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
