import { Component } from '@angular/core';
import { BrowserTransferStateModule } from '@angular/platform-browser';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent {

heroes: string[] = ['Spideman','Iroman','Hulk','Thor','Capitan America'];
almacenado:string = '';

Borrar(){
this.almacenado = this.heroes.shift() || 'a';
}
}