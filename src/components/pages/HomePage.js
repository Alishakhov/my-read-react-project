import React from 'react'
//wherever page require Link have to add the line below
import {Link} from 'react-router-dom';
import Shelf from '../Shelf';
//using two dot .. becuase the Shelf is two lever up
//two more levers up so ../..

class HomePage extends React.Component {
    render() {
        return(
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {/*pass as a props n filter the one that belong to the shelf. if put 1 equal sing not work two will ask use 3.
                         also pass this to< book> in Shelf.js*/}
                     <Shelf name="Currently Reading" 
                        books={this.props.books.filter(b => b.shelf === "currentlyReading")} 
                        updateBook={this.props.updateBook}/>

                     <Shelf name="Want To Read" 
                        books={this.props.books.filter(b => b.shelf === "wantToRead")} 
                        updateBook={this.props.updateBook}/>

                     <Shelf name="Read" 
                        books={this.props.books.filter(b => b.shelf === "read")} 
                        updateBook={this.props.updateBook}/>


                  </div>
                </div>
                <div className="open-search">
                {/*using link instead of a< a> and onClick, but has the same functionality*/}
                  <Link to="/search">Add a book</Link>
                </div>
            </div>
        );
    }
}
export default HomePage;