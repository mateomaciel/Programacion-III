import React, { Component } from 'react';
import './styles.css';

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
        return(
        <div className="Buscador-Container">
            <div className="Buscador">
                <h1 className="Buscador-Title">Buscá tus artistas favoritos en el top</h1>
                <form onSubmit={(evento)=> this.PrevenirDefault(evento)}>
                    <input onChange={(evento)=> this.capturaInput(evento)}type="text" className="Barra"/>
                </form>
            </div>
        </div>
        )
    }
}
