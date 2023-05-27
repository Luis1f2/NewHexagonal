import express from 'express'
import  pool  from '../Infrestructure/RutasDabase'

const app = express()
app.use(express.json())

const PORT = 3000

app.get('/data', (req, res) => {
    pool.query('SELECT * FROM Usuario', (err, rows) => {
        if (err) throw err;
        res.json(rows);
        
      });
});

app.get('/ping',(req, res)=>{
    console.log('Alguien hizo ping aqui!! :,v '+ new Date().toLocaleDateString())
    res.send('Felicidades, si funsiona :v')

});

app.listen(PORT, ()=>{
    console.log('Servidor conectado a puerto: 3000' )
});

