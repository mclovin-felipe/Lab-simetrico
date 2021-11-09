import logo from './logo.svg';
import './App.css';
import './Normalize.css';
import Tabla from './components/tabla';
function App() {
  const datos = {
    pass:"tyafsjdykglukahj",
    ip:"192.168.0.1",
    so:"Linux Fedora"
  }
  const datos2 = {
    pass:"tyafsjdykglukahj",
    ip:"192.168.adghasvkjhdakns.1",
    so:"Linux Fedoraashjdvhasbn"
  }
  return (
    <div>
      <Tabla datos ={datos}/>
      <Tabla datos = {datos2}/>
      </div>
      
  );
}

export default App;
