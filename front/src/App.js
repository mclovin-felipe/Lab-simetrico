import './App.css';
import './Normalize.css';
import Tabla from './components/tabla';
function App() {
const add = (palabra) => {
                if(palabra.length < 30){
                        let faltante = 30-palabra.length;
                        let mu = " ";
                        mu = palabra+mu.repeat(faltante);
                        return mu;


                }
                else{
                return palabra;
                }

        }
  let datos = {
    pass:"tyafsjdykglukahj",
    ip:"192.168.0.1",
    so:"Linux Fedora"
  }
  let datos2 = {
    pass:"tyafsjdykglukahj",
    ip:"192.168.0.1",
    so:"Linux Fedoraashjdvhasbn"
  }
for (let item in datos){
        let largo = 0;
           largo = datos[item];
           console.log(largo);
           datos[item]= add(datos[item]);
           console.log(datos[item].length);

    }
for (let item in datos){
        let largo = 0;
          largo = datos2[item];
          console.log(largo);
          datos2[item]= add(datos2[item]);
          console.log(datos2[item].length);

    }
  return (
    <div>
      <Tabla datos ={datos}/>
      <Tabla datos = {datos2}/>
      </div>
      
  );
}

export default App;
