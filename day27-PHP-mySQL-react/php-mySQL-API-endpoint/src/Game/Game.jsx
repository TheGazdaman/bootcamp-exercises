import React from 'react';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
    
        return (
            <div className="game">
                {/* <div>{this.props.id}</div> */}
                <div className="name">{this.props.name}
                </div>
                <img src={this.props.image_url} alt=""/>
                <div className="description"><p>{this.props.description}</p></div>
                <div className="rating">Rating: {this.props.rating}</div>
                <div className="release"><h3>Released:</h3>{ this.props.released_at }</div>
            </div>
        );
    }
}