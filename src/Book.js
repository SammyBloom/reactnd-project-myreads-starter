import React, { Component } from 'react'
import * as BooksAPI from "./BooksAPI"

class Book extends Component {

    // Return All Books
    showAllBooks = () => {
        BooksAPI.getAll()
    }

    // Update Shelf
    updateShelf = (book, currentShelf) => {
        BooksAPI.update(book, currentShelf)
        .then(this.showAllBooks())
    }


    render() {

        const {thisBook, bookShelf} = this.props 

        return(
            <li>
                <div className="book">
                    <div className="book-top">
                        <div 
                            className="book-cover"
                            style={{ 
                                width: 130, 
                                height: 190, 
                                backgroundImage: `url(${thisBook.imageLinks ? thisBook.imageLinks.thumbnail : "https://ibf.org/site_assets/img/placeholder-book-cover-default.png"})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}>
                                
                        </div>
                        <div className="book-shelf-changer">
                            <select onChange={(e) => {this.updateShelf(thisBook, e.target.value)}}
                                    value={bookShelf}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{thisBook.title}</div>
                    <div className="book-authors">{thisBook.authors ? thisBook.authors.toString() : 'Nothing!'}</div>
                </div>
            </li>
        )
    }
}

export default Book