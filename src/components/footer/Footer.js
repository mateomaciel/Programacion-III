import React, { Component } from 'react';
import '../footer/footer.css'
export default class Footer extends Component{
render() {
    return (
        <div className="Footer">
            <div className="Donar">
                <h1>Puedes ayudar?</h1>
                <p>Necesitamos tu ayuda para financiar este proyecto. Todas las donaciones son apreciadas!</p>
            </div>
            <div className="Publicidad">
                <h1>El mejor buscador de artistas</h1>
                <p>Si tu artista está en el top, nosotros lo encontramos!</p>
            </div>
            <div className="Contact">
                <h1>Contactanos!</h1>
                <p>Sugerencias? envía un mail a Tripwire@gmail.com</p>
            </div>
        </div>
    )
}
}