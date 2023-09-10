import React from 'react'
import {Link} from 'react-router-dom';
import * as BooksAPI from '../../BooksAPI'
import Book from '../Book'
//using link instead <a>, but <a> is includes the clicking
class SearchPage extends React.Component {
  state ={
        query: '',//set it to empty string
        answer: []//response from the search input if query
  }

    // This function is if no quey or could find it the result will return emty array
    checkForQuery() {
        let query = this.state.query
          //check to see if any query or undefined and will return an empty array
          if(query === "" || query === undefined) {
            return this.setState({answer: []})
      }

  //have to fetch books using the search method from udacity return a promise. trim()take out white space front n back
      BooksAPI.search(query.trim())
        .then(response => {
          console.log(response);
          if(response.error) {
            return this.setState({answer:[]});
          }else {
            //add this part bacause all the books have a value of none
            response.forEach(res => {
              let f = this.props.books.filter(B => B.id === res.id);
                res.shelf = f[0] ? f.shelf : null; //puposely set to null
                if(f[0]) {
                  res.shelf = f[0].shelf;
                }


            })
            //end of it
            return this.setState ({answer: response})
          }
        })
    }

//where the checkForQuery will invoke
updateQuery = (query)=> {
  this.setState({query}, this.checkForQuery)
}

  render() {
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    {/*remove onClick method and the <a> replace with the link, but has the same functionality. using link require path which is to="?"*/}
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input 
                            type="text" 
                            placeholder="Search by title or author" 
                            value={this.state.query}
                            onChange={(e) => this.updateQuery(e.target.value)}/>

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
              {/*where the array of the search book in the searchPage*/}
                        {this.state.answer.map((book, key) => 
                            <Book
                                book={book} 
                                key={key}
                                updateBook={this.props.updateBook}/>)}
                    </ol>
                </div>
            </div>
         );
    }
}
export default SearchPage;