import {Injectable} from '@angular/core';
import { personaje } from '../intefaces/dbz.interface';

@Injectable()

export class DbzService{

   private _personajes:personaje[]=[
        {
          nombre:'Goku',
          poder:15200
        },
        {
          nombre:'Vegeta',
          poder:10000
        }
      ];
      
      get personajesGet():personaje[]{
          return [...this._personajes];
      }

    constructor() {
        console.log('servicio Iniciado');
    }
    
    agregarPersonaje(personajeParm: personaje){
        this._personajes.push(personajeParm)
    }
}

