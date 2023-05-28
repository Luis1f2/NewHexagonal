import express from 'express';
import  pool  from './user/Infrestructure/RutasDabase';
import {Usercreated} from './user/aplication/CreateUser'
const router = express.Router();

const app = express()
app.use(express.json())
const PORT = 3000



app.get('/data', (req, res) => {
    pool.query('SELECT * FROM Usuario', (err, rows) => {
        if (err) throw err;
        res.json(rows);
        
      });
});

router.post('/post' ,(req, res)=>{
   const newPost:Usercreated = req.body();
    res.send('Guardando usuario')
    
    })
app.get('/:id', (req, res)=>{
const id = req.params.id;
const connect = pool;
connect.query('SELECT * FROM Usuario WHERE id_Usuario = ?' + id)

})

app.get('/',(req, res)=>{
    res.json('vienbenido')
    console.log('Alguien hizo ping aqui!! :,v '+ new Date().toLocaleDateString())
    
    

});

app.listen(PORT, ()=>{
    console.log('Servidor conectado a puerto: 3000' )
});

