import React from "react"; 
 
class Foods extends React.Component { 
 
  likedFoods = () => {
    // should get all liked foods from the state
    return <div>Hello</div>
  }
  
  // add food creates ADD FOOD popup
  
  // add food should post to DB then get new list of Suggestions
  
  // changing a rating should post to DB then get new list of Suggestions
 
  render() { 
    return ( 
      <div id="foods-box">
        <div className="button">Add A Food</div>
        <div id="liked-foods">{ this.likedFoods() }</div>
      </div>
    ) 
  } 
}

export default Foods