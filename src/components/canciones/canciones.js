import React, { Component} from 'react';
import Maqueta from '../maquetatarjeta/maquetatarjeta'
import Buscador from '../buscador/Buscador'
import './style.css'

class Tarjeta extends Component {

    constructor(props) {
        super(props);
        this.state = {
            artistas:[],
            NombreFiltrado:[],
            index: 10
        }
    }

    componentDidMount(){
        fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/artists')
        .then(function(response) {return response.json();})
        .then(data => {console.log(data);
            this.setState({artistas:data.data, NombreFiltrado: data.data});


        })
    }

    addCards(){
       fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/artists?index=${this.state.index}&limit=10`)
       .then(response => response.json())
       .then(data =>{
           let arrayPrevio = this.state.artistas;
           let arrayActualizado = arrayPrevio.concat(data.data);
           let indexActualizado = this.state.index + 10;
          console.log(indexActualizado)
           this.setState({
               artistas: arrayActualizado,
               NombreFiltrado: arrayActualizado,
               index: indexActualizado
           })
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

        //console.log(name)

        //permanecen en mi array "aristasFiltrados" aquellos artistas que no tengan el nombre a filtrar
        const artistasFiltrados = this.state.artistas.filter(artistas => artistas.name !== name)
        this.setState({
            artistas: artistasFiltrados,
            
        
        });
        
        //console.log(artistasFiltrados)
    }

    render() {
            console.log(this.state.artistas)

        return(
        <div className="card">   
        
            <Buscador FiltrarPorNombre={(NombreAFiltrar)=> this.FiltrarPorNombre(NombreAFiltrar)}/>      
            <div className="cards">  
           {this.state.artistas.map( (artistas, index) => {
                
               return <Maqueta key={index} 
              
               link={artistas.link} 
               name = {artistas.name} 
               foto = {artistas.picture} 
               type = {artistas.type} 
               position = {artistas.position} 
               removerArtista = {(name) => this.removerArtista(name)}></Maqueta>
               
           } )} 
        </div>

        <button onClick={()=>this.addCards()}>Agregar mas artistas</button>
        </div>
        )
    }



    

}

export default Tarjeta;