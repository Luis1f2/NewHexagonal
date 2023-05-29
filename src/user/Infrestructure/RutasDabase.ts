import {createPool} from 'mysql2/promise';  

export async function Connect(){
  
  await createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'viodeolink',
  connectionLimit:10,
});
}
//export default pool;
