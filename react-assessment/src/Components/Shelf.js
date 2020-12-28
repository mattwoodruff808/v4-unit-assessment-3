import {Component} from 'react';

class Shelf extends Component {
    render(){
        let mappedTitles = this.props.shelf.map((title, i) => (
            <p key={i}>{title}</p>
        ))

        return (
            <div className="Shelf">
                <h3>Your Shelf</h3>
                <button className="ShelfBtn" onClick={() => this.props.clearFn()}>clear shelf</button>
                {mappedTitles}
            </div>
        )
    }
}

export default Shelf;