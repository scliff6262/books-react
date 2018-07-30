import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Form from './Form'
import Collection from './Collection'
import './App.css';
import GOOGLE_API_KEY from './dev'
import SearchResults from './SearchResults'

class App extends Component {
  constructor(){
    super()

    this.state = {
      searchTerm: "",
      books: []
    }
  }


  handleChange = (e) => {
    e.persist()
    this.setState({
      searchTerm: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const q = this.state.searchTerm
    fetch("https://www.googleapis.com/books/v1/volumes?q=intitle:" + q + "&key=" + GOOGLE_API_KEY)
    .then( r => r.json() )
    .then( json => this.setState({ books: json.items }))
  }

  handleClick = (e) => {
    e.persist()
    const thisBook = Array.from(e.target.parentElement.children)
    const bookJSON = {}
    thisBook.slice(0,3).forEach( bookProp => {
      if(bookProp.nodeName !== "IMG"){
        bookJSON[bookProp.getAttribute("class")] = bookProp.innerHTML
      } else {
        bookJSON[bookProp.getAttribute("class")] = bookProp.src
      }
    })
    fetch('/api/books', {
      method: 'post',
      body: JSON.stringify(bookJSON),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then( r => r.json() )
    .catch(e => alert(e))
    .then( json => alert(json.title + " has been added to your collection!") )
  }


  render() {
    return (
      <Router>
        <div className="App">
        <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
          <NavLink style={{ marginRight: '10px' }} to="/">Home</NavLink>
          <NavLink style={{ marginRight: '10px' }} to="/search">Search</NavLink>
          <NavLink style={{ marginRight: '10px' }} to="/collection">My Collection</NavLink>
        </div>
          <Switch>
            <Route exact path="/" render={ () => <h1>WELCOME</h1>}/>
            <Route exact path="/search" render={() => {
              return (
                <div>
                  <Form handleSubmit={this.handleSubmit} handleChange={this.handleChange} state={this.state}/>
                  <SearchResults books={this.state.books} handleClick={this.handleClick}/>
                </div>
                )
              }
            }/>
            <Route exact path="/collection" component={Collection}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;