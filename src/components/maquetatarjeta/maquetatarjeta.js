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
            <div className = 'Maqueta'>
                <img src={this.props.foto} alt="" className="Foto-Tarjeta"></img>
                <p>{this.props.name}</p>
                <button type="submit" onClick={() => this.handleShow()} className="Ver-Mas">{this.state.mensaje} </button>
                <div className={this.state.clase}>
                <p>This {this.props.type} is on position {this.props.position} </p>
                <p> <a className="Link" href={this.props.link}>Conoce mas del artista</a></p>
                <button onClick={() => this.props.removerArtista(this.props.name)} className="Ver-Mas" > Eliminar artista </button>
                </div>
            </div>
        );
    }
}



