import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

class ListBook extends Component {
    render() {
        const {books} = this.props

        return (
            <div className="list-books">

                <div className="list-books-title">
                    <h1>MY READS</h1>
                </div>

                <div className="list-books-content">

                    <div>

                        <div className="bookshelf">
                            <h2 className="bookshelf-title">CURRENTLY READING</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {books.filter((book) => {return book.shelf === 'currentlyReading'}).map((book) => (
                                        <Book thisBook={book} bookShelf={book.shelf}/>
                                    ))}
                                </ol>
                            </div>
                        </div>

                        <div className="bookshelf">
                            <h2 className="bookshelf-title">WANT TO READ</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {books.filter((book) => {return book.shelf === 'wantToRead'}).map((book) => (
                                        <Book thisBook={book} bookShelf={book.shelf}/>
                                    ))}
                                </ol>
                            </div>
                        </div>

                        <div className="bookshelf">
                            <h2 className="bookshelf-title">READ</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {books.filter((book) => {return book.shelf === 'read'}).map((book) => (
                                        <Book thisBook={book} bookShelf={book.shelf}/>
                                    ))}
                                </ol>
                            </div>
                        </div>

                        <div className="open-search">
                            <Link to='/search'>Add a book</Link>
                         </div>

                    </div>

                </div>
            </div>
        )
    }
} 

export default ListBook