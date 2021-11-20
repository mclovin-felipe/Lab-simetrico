import React, {useState} from 'react';
import './custom.css';
import './normalize.css';
import './skeleton.css';
import axios from 'axios';
const Formm = (props) => {

    const [pass, setPass] = useState('');
    const [ip, setIp] = useState('');
    const [so, setSo] = useState('');
    function handleSubmit (e) {
      e.preventDefault();
      if(pass === "" || ip==="" || so===""){

        alert('Rellena los campos')
      }else{

      axios.post('https://labsimetrico.herokuapp.com/agregar', {
        ip: ip,
        pass: pass,
        so: so
      }).then(res => {
  
        console.log(res.data)
        if(res.data === "listo"){
        window.location.reload(false);
        }
      })

  }
    }
    function passChange (e) {
      setPass(e.target.value);
    }

    function ipChange (e) {
      setIp(e.target.value);
    }

    function soChange (e) {
      setSo(e.target.value);
    }
    return(
        
      <form onSubmit = {handleSubmit}>
      <label>Ingresa Pass</label>
      <input onChange = {passChange} placeholder = "hjvkj12h3gjkh"/>
      <label>Ingresa IP</label>
      <input onChange = {ipChange}placeholder = "192.169.0.1"/>
      <label>Ingresa Sistema Operativo</label>
      <input onChange = {soChange}placeholder = "Fedora"/>
      <hr/>
      <button className="button-primary">Enviar</button>
      </form>

    );
}


export default Formm;
