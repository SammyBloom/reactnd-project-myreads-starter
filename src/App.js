import React from 'react'
import * as BooksAPI from './BooksAPI'
import ListBook from './ListBook'
import { Route } from 'react-router-dom'
import './App.css'

class BooksApp extends React.Component {
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
      <div className = "app">
        <Route exact path = '/'
        render = { () => <ListBook books = {this.state.books} showAllBooks = {this.showAllBooks()}/> } />
      </div>
    )
  }
}

export default BooksApp
