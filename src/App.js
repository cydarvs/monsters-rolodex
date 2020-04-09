import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
//import { render } from 'react-dom';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
class App extends Component{
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };

    // bind functions is required if ur not using arrow function method
    //  this.handleChange = this.handleChange.bind(this);
  }
  /*Called immediately after a component is mounted. 
  Setting state here will trigger re-rendering.*/
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then (response => response.json())
    .then (users => this.setState({ monsters:users }));
  }
 // not an arrow method
 /*
  handleChange(e) {
    this.setState ({ searchField: e.target.value});
  }
*/
// using arrow functions no need to bind this functions in the constructor
handleChange = e => {
  this.setState ({ searchField: e.target.value});  
}
  render() {
    const { monsters, searchField } = this.state;
    /* same code sa taas
    const monsters = this.state.monsters;
    const searchField = this.state.searchField
    */
   // includes and filter are array method
    const filteredMonsters = monsters.filter( monster =>
       monster.name.toLowerCase().includes(searchField.toLowerCase()) 
    );
    
    return (
      <div className="App">
        <h1> Monsters Rolodex </h1>
        {/* console.log(e.target.value)} */}
        
        {
        /* old code replace with SearchBox component
        <input 
          type='search'
          placeholder='Search Monsters' 
          onChange={e => this.setState ({ searchField: e.target.value})}
            // code to log events { e => this.setState ({ searchField: e.target.value}, () => console.log(this.state));}}
        />
        */
        }
        <SearchBox
          placeholder='Search Monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }

}

export default App;
