import React from 'react'
import Book from './Book'
// The same lever as Shelf so use ./
class Shelf extends React.Component {
    render() {
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.name}</h2>
                <div className="bookshelf-books">
                   <ol className="books-grid">
                        {/*map needs key = key*/}
                       {this.props.books.map((book, key) =>
                            <Book  
                                book={book} 
                                key={key}
                                updateBook={this.props.updateBook}/>)}
                    </ol>
                </div>
            </div>
        )
    }
}
export default Shelf