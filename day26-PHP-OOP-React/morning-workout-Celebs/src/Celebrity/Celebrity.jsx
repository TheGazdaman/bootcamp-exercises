import React from 'react';

export default class Celebrity extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="celebrity">
                <img src={this.props.photo}
                alt="Taylor Swift"></img>
                    <div className="text">
                <h2>{this.props.name}</h2>
                <div className="earnings">
                    <h3>Earnings:</h3>{this.props.earnings}
                </div>
                <div className="age">
                    <h3>{this.props.age}</h3>29
                </div>
                <div className="citizenship">
                    <h3>Citizenship:</h3>{this.props.citizenship}
                </div>
                <div className="events">
                    <ul>
                        {
                            this.props.events.map(event => (
                                <li> { event } </li>    // this.props.events.map((event, i) => (<li> key={ i } { event } </li>)) takes two values - one as value and another one as order
                                    
                            ))
                        }
                       
                    </ul>
                </div>
            </div>
        </div>
        );
    }
}