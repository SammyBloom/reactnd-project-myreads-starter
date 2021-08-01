import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { search } from './BooksAPI'
import './index.css'

ReactDOM.render(<BrowserRouter key={search.id}><App /></BrowserRouter>, document.getElementById('root'))
