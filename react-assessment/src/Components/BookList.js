import {Component} from 'react';

class BookList extends Component {
    render(){
        let mappedBooks = this.props.books.map((book, i) => (
            <p key={i}><img src={book.img} alt='books' onClick={() => this.props.addFn(book.title)}/> {book.title} by {book.author}</p>
        ))

        return (
            <div>
                {mappedBooks}
            </div>
        )
    }
}

export default BookList;