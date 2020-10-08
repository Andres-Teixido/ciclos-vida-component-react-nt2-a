import React, { Component } from 'react';
import Vehiculo, { OtroVehiculo, TercerVehiculo } from './components/vehiculo'

class App extends Component{
  constructor(){
    super();

    this.state = {
      equipo: "NT2 Belgrano",
      vehiculos: []
    }

    console.log("1.- Hola desde el Constructor")
  }

  render(){

    console.log("(2 o 5).-  Hola desde el render")

    return(
      <div>
        <h1>Total Vehiculos: { this.state.vehiculos.length }! </h1>
        <button onClick={ () => { this.buscarVehiculos()} }>
          Llamada API
        </button>
        <ul>
          {
            this.state.vehiculos.map(vehiculo => (
              <TercerVehiculo
                key={vehiculo.id} 
                marca = { vehiculo.marca } 
                modelo={vehiculo.modelo} 
              />
            ))
          }
        </ul>
      </div>
    )
  }

  buscarVehiculos(){
    fetch("https://us-central1-be-tp3-a.cloudfunctions.net/app/api/read").then((res) =>{
      return res.json()
    }).then(data => {

      this.setState({
        vehiculos: data
      });
    })
  }

  componentDidMount(){
    console.log("3.- Hola desde el componentDidMount")

    this.buscarVehiculos();
  }



  /** Aqui entramos al ciclo de vida UPDATE */
  shouldComponentUpdate(nextProp, nextState){
    console.log("4.- Llamada desde el shouldComponentUpdate", nextState);  
    
    return (this.state.vehiculos.length !== nextState.vehiculos.length)
  }

  componentDidUpdate(prevProp, prevState){
    console.log("6.- Llamada desde el componentDidUpdate", prevState)
  }



}

export default App;
