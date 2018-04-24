import React from "react"; 
import LogoBar from "./LogoBar"
import Foods from "./Foods"
import SuggestSearch from "./SuggestSearch"
import Suggestions from "./Suggestions"
 
class Home extends React.Component { 
 
  render() { 
    return ( 
      <div id="content-container">
        <LogoBar />
        <Foods />
        <SuggestSearch />
        <Suggestions />
      </div>
    ) 
  } 
 } 
export default Home