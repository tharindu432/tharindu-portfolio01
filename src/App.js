import React from "react";
import 'tachyons';
import CardList from './CardList';
//import { Robots } from "./Robots";
import SearchBox from "./SearchBox";
import './App.css';
import Scroll from './Scroll';
import Footer from "./Footer";

class App extends React.Component{
  constructor(){
    super();
    this.state={
      Robots:[],
      searchfield:""
    };
 
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users=>this.setState({Robots:users})
    );
  }
  onsearchChange=(event)=>{
    this.setState({searchfield:event.target.value})
  }

 
 render(){
  const filterRobots=this.state.Robots.filter(Robot=>{
    return Robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase()) 
   })
  return(
<div className="tc">
      <h1 className="f2 shadow-5">RoboFriends</h1>
      
      <SearchBox  searchChange={this.onsearchChange}/>
      <Scroll>
      <CardList Robots={filterRobots}/>

      </Scroll>
      <Footer/>
     
  

    </div>
    )
  }
 
}
export default App
