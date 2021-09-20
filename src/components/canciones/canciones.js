import React, { Component} from 'react';
import Maqueta from '../Maquetatarjeta/Maquetatarjeta'
import Buscador from '../buscador/Buscador'
import './style.css'

class Tarjeta extends Component {

    constructor(props) {
        super(props);
        this.state = {
            artistas:[],
            NombreFiltrado:[],
            index: 10,
            orientation: "Column",
            NombreAfiltrar1: ""
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
            milanesa=> milanesa.name.toLowerCase().includes(NombreAFiltrar.toLowerCase())
        )
        this.setState({
            NombreAfiltrar1: NombreAFiltrar
        })
        if(NombreAFiltrar === ""){
            this.setState({NombreFiltrado: this.state.artistas})
        }
        else{this.setState({
            NombreFiltrado: ArrayFiltrado
        })}
        }

    removerArtista(name) {

        //console.log(name)

      
        const artistasFiltrados = this.state.NombreFiltrado.filter(artistas => artistas.name !== name)
        this.setState({
            artistas: artistasFiltrados,
            NombreFiltrado: artistasFiltrados
            
            
        
        });
        
        //console.log(artistasFiltrados)
    }

    changeOrientation(){
        if(this.state.orientation === "Column"){
           this.setState({
            orientation: "Row"
            }) 
        }
        else{this.setState({
            orientation: "Column"
            })
        }   
    }
    
    render() {
            if(this.state.NombreAfiltrar1 === "" && this.state.NombreFiltrado.length === 0){
                return(<div className="Principal">   
                <div className="Buscador-Boton">
                    <Buscador FiltrarPorNombre={(NombreAFiltrar)=> this.FiltrarPorNombre(NombreAFiltrar)}/>
                    <div className="Boton-Container"><button className="Cambiar-Orientacion">Cambiar orientación</button></div>   
                </div>
                <div className="Cards-Sign"> 
                    <div className="Sign-Container">
                        <i class="fas fa-cloud-download-alt"></i>
                        <h2 className="Loading">Cargando...</h2>
                    </div>
                </div>
                
                </div>)  
            }
            if(this.state.NombreAFiltrar1 !== "" && this.state.NombreFiltrado.length === 0){
                 return(<div className="Principal">   
                 <div className="Buscador-Boton">
                     <Buscador FiltrarPorNombre={(NombreAFiltrar)=> this.FiltrarPorNombre(NombreAFiltrar)}/>
                     <div className="Boton-Container"><button className="Cambiar-Orientacion">Cambiar orientación</button></div> 
                 </div>
                 <div className="Cards-Sign">
                    <div className="Sign-Container">
                        <i className="fas fa-ban"></i>
                        <h2 className="No-Result">No hay ningún resultado para su busqueda</h2>
                    </div>
                 </div>
                 
                 </div>)
            }else{
                return(
        <div className="Principal">   
        <div className="Buscador-Boton">
            <Buscador FiltrarPorNombre={(NombreAFiltrar)=> this.FiltrarPorNombre(NombreAFiltrar)}/>
            <div className="Boton-Container"><button className="Cambiar-Orientacion" onClick = {()=> this.changeOrientation()}>Cambiar orientación</button></div>   
        </div>
        <div className={`Cards-${this.state.orientation}`}> 
           {this.state.NombreFiltrado.map( (artistas, index) => {
                
               return(
               <Maqueta key={index} 
               link={artistas.link} 
               name = {artistas.name} 
               foto = {artistas.picture} 
               type = {artistas.type} 
               position = {artistas.position} 
               removerArtista = {(name) => this.removerArtista(name)}>
               </Maqueta>
               )
               
           } )} 
           <div className={`Agregar-Artistas-Container-${this.state.orientation}`}><button className={`Agregar-Artistas-${this.state.orientation}`} onClick={()=>this.addCards()}>Agregar mas artistas</button></div>
        </div>
        
        </div>
        )
        }
        
    }



    

}

export default Tarjeta;