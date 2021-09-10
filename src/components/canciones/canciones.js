import React, { Component} from 'react';
import Maqueta from '../maquetatarjeta/maquetatarjeta'
import Buscador from '../buscador/Buscador'

class Tarjeta extends Component {

    constructor(props) {
        super(props);
        this.state = {
            artistas:[],
            NombreFiltrado:[]
        }
    }

    componentDidMount(){
        fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/artists')
        .then(function(response) {return response.json();})
        .then(data => {console.log(data);
            this.setState({artistas:data.data, NombreFiltrado: data.data});


        })
    }

    FiltrarPorNombre(NombreAFiltrar){
        const ArrayFiltrado = this.state.artistas.filter(
            milanesa=> milanesa.name.toLowerCase().includes(NombreAFiltrar)
            
        )
    
        if(NombreAFiltrar === ""){
            this.setState({NombreFiltrado: this.state.artistas})
        }
        else{this.setState({
            NombreFiltrado: ArrayFiltrado
        })}
        }

    removerArtista(name) {

        const artistasFiltrados = this.state.artistas.filter(artistas => artistas.name !== name)
        this.setState({artistas: artistasFiltrados});
    }

    render() {
            console.log(this.state.artistas)

        return(
        <div>   
            <Buscador FiltrarPorNombre={(NombreAFiltrar)=> this.FiltrarPorNombre(NombreAFiltrar)}/>         
           {this.state.NombreFiltrado.map( (artistas, index) => {
               return <Maqueta key={index} 
               link={artistas.link} 
               name = {artistas.name} 
               foto = {artistas.picture} 
               type = {artistas.type} 
               position = {artistas.position} 
               removerArtista = {(name) => this.removerArtista(name)}></Maqueta>
           } )} 
        </div>
        )
    }

}

export default Tarjeta;