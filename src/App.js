import React from 'react'

//import * as BooksAPI from './BooksAPI'
import './App.css'
//add route. index.js added BrowserRouter
import {Route} from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import SearchPage from './components/pages/SearchPage';
import * as BooksAPI from './BooksAPI'
class BooksApp extends React.Component {
    state = {
        books : []
    }

    //will do the BooksApI instead of hardcode, we need componentDidMount
    //step 2 fetch the book this method share with searchPage too
    componentDidMount() {
        //udacity has provided getAll()
        BooksAPI.getAll().then(response => {
            console.log(response);
        //should have see all the book array in console
        this.setState({books: response})
        //book which is the array of response
        })
    }

    // Update return a promise and pass this method the props in the 3 shelf below
    updateBook = (book, shelf) => {
        BooksAPI.update(book, shelf).then(resp => {
            book.shelf = shelf;
            this.setState(state => ({
                books: state.books.filter(eachBook => eachBook.id !== book.id).concat([book])
            }))
        })
    }

    render() {
        return (
              <div className="app">
                 {/*instead of using the render method using component instead it is cleaner*/}
                 <Route exact path="/" render={() => 
                    <HomePage 
                        books={this.state.books}
                        updateBook = {this.updateBook}
                        />}/>     
                  <Route path="/search" render={() =>  
                        <SearchPage 
                            books={this.state.books}
                            updateBook = {this.updateBook}/>}/> 
               {/*} <Route 
                   exact path="/" component={HomePage}/>
                   {/*if the path="/" i put both the same as in the Homepage it will show both on the homepage. 
                  when i switch to path="/search" it show one or other
                <Route 
                  exact path="/search" component={SearchPage}/>*/}

            </div>
        )
     }
}

export default BooksApp

