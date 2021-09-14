import React, { Component } from 'react';
import '../maquetatarjeta/maquetatarjeta.css';



export default class Maqueta extends Component {


   

    constructor(props){
        super(props);
        this.state={
           clase: "hide",
           mensaje: "ver más"
    }


}

// funcion llamada cuando se hace click en ver mas o ver menos
handleShow(){
    if (this.state.clase === 'hide'){
        this.setState({
            clase: 'show',
            mensaje: "ver menos"
        })
        } else {
        this.setState({
            clase: 'hide',
            mensaje: "ver más"
        })   
    }
}

    render() {
        return (
            <div className = 'maqueta'>
                <img src={this.props.foto} alt="" ></img>
                <p>{this.props.name}</p>
                <button type="submit" onClick={() => this.handleShow()}>{this.state.mensaje} </button>
                <p className={this.state.clase}>This {this.props.type} is on position {this.props.position} </p>
                <p className={this.state.clase}> <a href={this.props.link}>conoce mas del artista</a></p>
                <p className={this.state.clase}>  <button onClick={() => this.props.removerArtista(this.props.name)}> eliminar artista </button></p>

            </div>
        );
    }
}



