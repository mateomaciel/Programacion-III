import React, { Component} from 'react';
import maqueta from '../maquetatarjeta/maquetatarjeta';



class Tarjeta extends Component {

    constructor(props) {
        super(props);
        this.state = {
            artistas:[]
        }
    }

    componentDidMount(){
        fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/artists')
        .then(function(response) {return response.json();})
        .then(data => {console.log(data);
            this.setState({artistas:data.data});


        })
    }

    render() {
            console.log(this.state.artistas)

        return(
            <div></div>
        )
    }

}

export default Tarjeta;