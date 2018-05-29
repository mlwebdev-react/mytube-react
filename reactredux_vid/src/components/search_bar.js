import React, { Component } from 'react';

class SearcBar extends Component {
  constructor(props){
  	super(props);
    this.state = { term: ''};
  }
  render() {
    return (  
      <div className="search-bar">
        <h2>MyTube</h2>
        <input
          value =  { this.state.term }
          className = {"form-control"}
          placeholder = {"Enter search"}
          onChange = { event => 
            this.onInputChange(
              event.target.value)} />
      </div>
    );
  }
  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}
export default SearcBar;
