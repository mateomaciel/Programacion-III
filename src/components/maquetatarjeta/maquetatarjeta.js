import React, { Component } from 'react';

export default class maqueta extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className = 'maqueta'>
               <img src={this.props.photo} alt=""/>
               <h4> {this.props.name} </h4>
               <h4> posicion: {this.props.posicion}</h4>
            </div>
        )
    }
}