import React from 'react';
import './custom.css';
import './normalize.css';
import './skeleton.css';
const Tabla = (props) => {
    const datos = props.datos
    return(
        
        <div className="container">
            <table className="u-full-width">
                <thead>
                    <tr>
                    <th>Pass</th>
                    <th>IP</th>
                    <th>Sistema Operativo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>{datos.pass}</td>
                    <td>{datos.ip}</td>
                    <td>{datos.so}</td>
                    </tr>
                </tbody>
</table>
	<br></br>
</div>
    );
}


export default Tabla;
