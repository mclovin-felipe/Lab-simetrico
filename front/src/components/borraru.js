import axios from 'axios';
import foto from '../img/delete.png';


const postBorrar = (id) =>{

axios.post('https://labsimetrico.herokuapp.com/borrar',{
        id:id
        }).then(res =>{
          console.log(res.data);
          window.location.reload(false);
        })
}
const BorrarU = (props) => {
const id = props.id;
  return(
  <img src={foto} style={{width:"25px"}} onClick = {()=>postBorrar(id)} />

  );

}
export default BorrarU;
