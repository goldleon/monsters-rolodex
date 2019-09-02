import React, { Component } from 'react';

// Styles
import "./App.css";

// Components
import CardList from "./components/card-list/card-list.component";
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
  state = {
    monsters: [],
    searchField: ''
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response => {
      return response.json()
      // this.setState({ monsters: monsters.body })
    }).then(users => this.setState({ monsters: users })).catch(error => { console.log(error.message) });
  }

  handleChange = (e) => { this.setState({ searchField: e.target.value }); }

  render() {
    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter(monster => { return monster.name.toLowerCase().includes(searchField.toLowerCase()) })
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>

        <SearchBox placeholder={ 'Search monsters' } onChangeHandler={ e => this.handleChange(e) } />
        {/* <input type="search" onChange={} /> */ }
        <CardList monsters={ filteredMonsters } />
      </div>


    );
  }
}

export default App;
