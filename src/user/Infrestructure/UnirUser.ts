import pool from "./RutasDabase"

export class Optener {
        create = pool
    constructor(){
        this.create = pool 
    }
    insertar(){
        this.create.query('ISERT INTO Usuario')
    }
}


