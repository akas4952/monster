
import React, { Component } from 'react'
import './App.css';
import { CardList } from'./components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box.component'
class App extends Component {
  constructor() {
    super();
    this.state = {
      monster: [],
      searchField:[]
    };

  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").
      then(response => response.json())
      .then(user => this.setState({ monster: user }))
  }
  render() {
    
    const { monster,searchField } =this.state;
    const filteredSearch= monster.filter( monsters =>
       monsters.name.toLowerCase().includes(searchField)
      )

    return (
      <div className="App">
      <h1 class="heading">Monster Rolodex</h1>
      <img className="data"></img>

       <SearchBox placeholder={'Search Monsters'} handleChange={e=>this.setState({searchField:e.target.value.toLowerCase()})}/> 
      <CardList monsters={filteredSearch}/>
     
       
      </div>
    );
  }
}
export default App;
