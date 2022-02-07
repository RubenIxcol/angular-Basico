import { Component} from '@angular/core';
import { personaje } from '../intefaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})


export class MainPageComponent{

  nuevo:personaje = {
    nombre:'Roshi',
    poder: 0
  }

  constructor(){
  }

}


