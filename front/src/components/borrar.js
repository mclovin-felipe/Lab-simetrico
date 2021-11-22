import axios from 'axios';
const Borrar = () => {
console.log('lol')
const handleborrar = () =>{
console.log('lol2');
axios.post ('https://labsimetrico.herokuapp.com/borrartodos',{}).then(res=>{
if(res.data === "listo"){
window.location.reload(false);
}}
)
}
return (
//axios.post ('https://labsimetrico.herokuapp.com/borrartodos',{}).then(res=>{
//if(res.data === "listo"){
//window.location.reload(false);
//}}
//)
  
    <button className = "button-primary" onClick={handleborrar} >Borrar todo</button>
  
); 
}
export default Borrar;
