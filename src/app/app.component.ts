import { Component, OnInit } from '@angular/core';

export interface Grado {
  id: string;
  nombre: string;
}

export interface Estudiante {
  id: string;
  nombre: string;
  idGrado: string;
}


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit  {
  gradoOpt: string = "";
  gradoId: string = "0";
  grados: Grado[];
  listaEstudiante: Estudiante[];
  listaGrado: Estudiante[];
  constructor() { 
    this.grados = [
                  {id:"1", nombre: 'I'},
                  {id:"2", nombre: 'II'},
                  {id:"3", nombre: 'III'}];

    this.listaEstudiante = [
                  {id:"100", nombre:"Pedro Perez", idGrado:"1"},
                  {id:"200", nombre:"Perla Perez", idGrado:"2"},
                  {id:"201", nombre:"José Uribe", idGrado:"2"},
                  {id:"300", nombre:"Maria Mendez", idGrado:"3"}];

  }

  ngOnInit() {
  }

  getNombreGrado(id){
    return this.grados.find(g => g.id === id).nombre;
  }

  cambiar(event: any){
     this.listaGrado = this.listaEstudiante.filter(e => e.idGrado == event.target.value);
  }
}

