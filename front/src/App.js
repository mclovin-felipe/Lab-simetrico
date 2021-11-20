import './App.css';
import './Normalize.css';
import Formm from './components/tabla';
import axios from 'axios';
import React from 'react';

class App extends React.Component {
  constructor(props){
  super(props);
  this.state = {
    datos : []

  };
  };
  componentDidMount(){
  axios.get('https://labsimetrico.herokuapp.com/datos').then(res => {
  const datos = res.data;
  this.setState({
  datos: datos
  })
  }).catch(error => console.log(error));
  }
  render(){

    const stylee = {

      backgroundColor: "#E0E0E0",
      borderRadius: "40px",

    };
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
                    </tr>
                </thead>
    {this.state.datos.map(dato =>
                <tbody>
                    <tr>
                    <td>{dato.ip}</td>
                    <td>{dato.pass}</td>
                    <td>{dato.so}</td>
                    </tr>
                </tbody>
    )}
    </table>
    </div>
    </center>
      </div>

    <hr/>
    <Formm/>
    </center>
  </div>  
  );
  }
}

export default App;
