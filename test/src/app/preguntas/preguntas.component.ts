import { Component, OnInit } from '@angular/core';

export class Opcion{
  public estado:string='';
  constructor(public apartado:string,public solucion:string,public correcta:boolean){}
}
export class Pregunta{
  public solucion:String
  public color:String='white'
  constructor(
    public bloque:string
    ,public numero:number
    ,public enunciado:string
    ,public anulada:boolean
    ,public opciones:Array<Opcion>){}
}

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.scss']
})
export class PreguntasComponent implements OnInit {

  errores=0;

  preguntas =[
    new Pregunta('Bloque 1',1,'¿Aqui va la pregunta?',false,
  [
    new Opcion('Es la opcion a','a',false),
    new Opcion('Es la opcion b','b',false),
    new Opcion('Es la opcion c','c',true),
    new Opcion('Es la opcion d','d',false),
  ]
  ),
  new Pregunta('Bloque 1',2,'¿Aqui va la pregunta?',false,
  [
    new Opcion('Es la opcion a','a',false),
    new Opcion('Es la opcion b','b',false),
    new Opcion('Es la opcion c','c',true),
    new Opcion('Es la opcion d','d',false),
  ]
  )
  ]

  constructor() { 

  }

  ngOnInit() {
  }

  corregir(){
    this.errores=0
    this.preguntas.forEach(it=>{
      let solucion=it.opciones.filter(it=>it.correcta)[0].solucion
      if(it.solucion==solucion){
        it.color='green'
      }else{
        it.color='red'
        this.errores++
      }

    })
  }
}
