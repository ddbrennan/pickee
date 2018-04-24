import React from "react"; 
 
class Foods extends React.Component { 
 
  likedFoods = () => {
    return <div>Hello</div>
  }
 
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