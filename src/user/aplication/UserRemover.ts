import { Request, Response } from "express";

export function Welcome(req:Request,res:Response):Response {
    return res.json('Vienbenido al Inicio')
}