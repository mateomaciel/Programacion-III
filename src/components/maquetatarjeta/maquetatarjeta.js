import React, { Component } from 'react';

export default class Maqueta extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className = 'maqueta'>
                <img src={this.props.foto} alt="" ></img>
                <p>{this.props.name}</p>
            </div>
        )
    }
}