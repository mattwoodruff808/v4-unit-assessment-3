import {Component} from 'react';
import Header from './Components/Header';
import BookList from './Components/BookList';
import Shelf from './Components/Shelf';
import data from './data';
import SearchBar from './Components/SearchBar';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      books: data,
      shelf: []
    }
  }

  addToShelf = (clickedBook) => {
    this.setState({shelf: [...this.state.shelf, clickedBook]});
  }

  clearShelf = () => {
    this.setState({shelf: []})
  }

  filterBooks = (input) => {
    let filteredBooks = [];
    this.state.books.filter(el => {
      if (el.author.includes(input) || el.title.includes(input)){
        filteredBooks.push(el)
      }
      return filteredBooks;
    })
    this.setState({books: filteredBooks})
  }

  reset = () => {
    this.setState({books: data})
  }

  render(){
    return (
      <div className="App">
        <Header />
        <SearchBar 
          filterFn={this.filterBooks}
          resetFn={this.reset}/>
        <BookList 
          books={this.state.books}
          addFn={this.addToShelf}/>
        <Shelf 
          shelf={this.state.shelf}
          clearFn={this.clearShelf}/>
      </div>
    )
  }
}

export default App;