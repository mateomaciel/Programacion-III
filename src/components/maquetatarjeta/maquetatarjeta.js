import React, { Component } from 'react';
import '../maquetatarjeta/maquetatarjeta.css';

export default class Maqueta extends Component {


    eliminar(name){
        const artistasFiltrados = this.state.artistas.filter(character => character.name !== name)

    }

    render() {
        return (
            <div className = 'maqueta'>
                <img src={this.props.foto} alt="" ></img>
                <p>{this.props.name}</p>
                <button type="submit"> ver mas </button>
                <p>This {this.props.type} is on position {this.props.position} </p>
                <a href={this.props.link}>conoce mas del artista</a>
                <button onClick={() => this.props.removerArtista(this.props.name)}> eliminar artista </button>

            </div>
        )
    }
}