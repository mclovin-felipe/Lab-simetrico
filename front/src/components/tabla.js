import React from 'react';

const Tabla = (props) => {
    console.log(props.datos);
    const datos = props.datos
    return(
        
        <div className="container">
            <table className="u-full-width">
                <thead className="u-mid-width">
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
</div>
    );
}


export default Tabla;