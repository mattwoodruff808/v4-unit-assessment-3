import {Component} from 'react';
import Header from './Components/Header';
import BookList from './Components/BookList';
import Shelf from './Components/Shelf';
import data from './data';

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

  render(){
    return (
      <div>
        <Header />
        <BookList 
          books={this.state.books}
          addFn={this.addToShelf}/>
        <Shelf 
          shelf={this.state.shelf}/>
      </div>
    )
  }
}

export default App;