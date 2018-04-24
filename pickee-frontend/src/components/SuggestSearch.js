import React from "react"; 
 
class SuggestSearch extends React.Component {
  state = {
    value: ""
  } 
  
  setSearchValue = (e) => {
    this.setState({
      value: e.target.value
    })
  }
 
  render() { 
    return ( 
      <div id="suggestions-search">
        <input type="text" value={ this.state.value } onChange={ this.setSearchValue } placeholder="Restaurant Name"></input>
        <div className="button">Change Area Code</div>
      </div>
    ) 
  } 
 } 
export default SuggestSearch