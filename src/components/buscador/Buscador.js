import React, { Component } from 'react';

export default class Buscador extends Component {
    constructor(){
        super();
        this.state = {
            value : ""
        }   
    }

    PrevenirDefault(evento){
    evento.PreventDefault()
    }
    capturaInput(evento){
       this.setState(
            {value: evento.target.value},
            ()=> this.props.FiltrarPorNombre(this.state.value)
        )
    }
    render(){
        return(<div>
            
            <form onSubmit={(evento)=> this.PrevenirDefault(evento)}>
                <input onChange={(evento)=> this.capturaInput(evento)}type="text"/>
            </form>
            <h1>{this.state.value}</h1>
            
            </div>
        )
    }
}
