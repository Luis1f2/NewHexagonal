import express from 'express';
import  pool  from './user/Infrestructure/RutasDabase';
import {Usercreated} from './user/aplication/CreateUser'
const router = express.Router();

const app = express()
app.use(express.json())
const PORT = 3000

app.get('/data', (req, res) => {        
    
async function guardarUsuario(usuario: Usercreated): Promise<void> {
    try {
      const query = 'INSERT INTO Usuarios (nombre, apallido, email, contraseña) VALUES (?, ?)';
      const params = [usuario.nombre, usuario.apellido, usuario.email, usuario.contraseña];
      const connection = await pool.getConnection();
      await connection.execute(query, params);
      connection.release();
      console.log('Usuario guardado correctamente.');
    } catch (error) {
      console.error('Error al guardar el usuario:', error);
    }
  }

  const nuevoUsuario: Usercreated = {
    id_usuario:3,
    nombre: 'Juan Pérez',
    apellido:'Rodulfo',
    email: 'juan@example.com',
    contraseña:'prueba'
  };

  guardarUsuario(nuevoUsuario);

  });

app.listen(PORT, ()=>{
    console.log('Servidor conectado a puerto: 3000' )
});

