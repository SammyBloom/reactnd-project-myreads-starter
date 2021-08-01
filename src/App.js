import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import ListBook from './ListBook'
import SearchBook from './SearchBook'
import { Route } from 'react-router-dom'
import './App.css'

class BooksApp extends Component {
// Manage State
  state = {
    books: []
  }

  // Show all the books
  showAllBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  // Display books on app startup
  componentDidMount(){
    this.showAllBooks()
  }


  render() {
    return (
      <div className="app">
        <Route exact path='/' render={ () => <ListBook books = {this.state.books} showAllBooks = {this.showAllBooks()}/> } />
        <Route path='/search' render={ () => <SearchBook/> }/>
      </div>
    )
  }
}

export default BooksApp
