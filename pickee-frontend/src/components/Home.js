import React from "react"; 
import LogoBar from "./LogoBar"
import Foods from "./Foods"
import SuggestSearch from "./SuggestSearch"
import Suggestions from "./Suggestions"
 
class Home extends React.Component { 
  
  componentDidMount = () => {
    // also check if user is logged in
    // fetch all users liked Foods
    // AS WELL AS a list of (10?) suggested food items
  }
 
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