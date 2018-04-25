import React from "react"; 
 
class Suggestions extends React.Component { 
 
  restaurantSuggestions = () => {
    // should get all suggestions from the state
    return <div>Some Suggestions</div>
  }
 
  render() { 
    return ( 
      <div id="suggestions-box">
        { this.restaurantSuggestions() }
      </div>
    ) 
  } 
 } 
export default Suggestions