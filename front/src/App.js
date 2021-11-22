import './App.css';
import './Normalize.css';
import Formm from './components/tabla';
import axios from 'axios';
import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import Borrar from './components/borrar';
import BorrarU from './components/borraru'
class App extends React.Component {
  constructor(props){
  super(props);
  this.state = {
    datos : [],
    listo: false

  };
  };
  componentDidMount(){
  axios.get('https://labsimetrico.herokuapp.com/datos').then(res => {
  const datos = res.data;
  this.setState({
  datos: datos,
  listo: true
  })
  }).catch(error => console.log(error));
  }
  render(){

    const stylee = {

      backgroundColor: "#E0E0E0",
      borderRadius: "40px",

    };
    const style2 = {
      position: "fixed",
      top:"40%",
      left:"50%",
      transform:"translate(-50%, 50%)"
    }
  if(this.state.listo === false){
  return(
    <div style = {style2}>
  <Loader
        type="Circles"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    <h3>.......</h3>
    </div>
  )
  }
  else{
  return (
    <div className = "center">
    <center>
    <h2>Lab Cifrado simetrico</h2>
    <div className= 'container' style = {stylee}>
    <center>
    <div style = {{margin: "auto",
        padding: "10px"}}>

    <table className = "u-full-width">
                <thead>
                    <tr>
                    <th>Pass</th>
                    <th>IP</th>
                    <th>Sistema Operativo</th>
                    <th>Borrar</th>
                    </tr>
                </thead>
    {this.state.datos.map(dato =>
                <tbody key = {dato.id}>
                    <tr>
                    <td>{dato.ip}</td>
                    <td>{dato.pass}</td>
                    <td>{dato.so}</td>
                    <td>{<BorrarU id={dato.id} />}</td>
                    </tr>
                </tbody>
    )}
    </table>
    </div>
    </center>
      </div>

    <div className = "container">
    <hr/>
    <Formm/>
    <Borrar/>
    </div>
    </center>
  </div>  
  );
  }}
}

export default App;
