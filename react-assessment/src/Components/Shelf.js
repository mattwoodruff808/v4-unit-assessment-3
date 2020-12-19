import {Component} from 'react';

class Shelf extends Component {
    render(){
        let mappedTitles = this.props.shelf.map((title, i) => (
            <p key={i}>{title}</p>
        ))

        return (
            <div>
                {mappedTitles}
            </div>
        )
    }
}

export default Shelf;