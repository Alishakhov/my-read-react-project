import React from 'react'

class Book extends React.Component {
  render() {
      {/*use string template for the url `${}`//set both images to "" if not work*/}
     /* let ImageLinks= this.props.book.imageLinks && this.props.book.imageLinks.thumbnail  || '';*/
      let ImageLinks= this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : '';
      let title = this.props.book.title
      let authors = this.props.book.authors

        return(
            <li>
              <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${ ImageLinks}")` }}></div>
                    <div className="book-shelf-changer">
                        {/* If book has no shelf set the value to none. just that the book have it only shelf. 
                        use onChange method
                        */}
                          <select 
                              value={this.props.book.shelf || 'none'} 
                              onChange={(event) => {this.props.updateBook(this.props.book, event.target.value)}}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                          </select>
                    </div>
                </div>
              <div className="book-title">{title}</div>
              <div className="book-authors">{authors && authors[0] || "No Author name"}</div>
              {/*as the developer always think what to handle when an err. 
              like if no author throw that string.in case some books don't have author*/}
            </div>
          </li>
        );
    }
}
export default Book;