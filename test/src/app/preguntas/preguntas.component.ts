import { Component, OnInit } from '@angular/core';
import {TestsService,Pregunta} from '../tests.service'


@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.scss']
})
export class PreguntasComponent implements OnInit {

  errores=0;

  preguntas:Array<Pregunta>
  constructor(private testService:TestsService) { 
    this.preguntas=this.testService.getTest(0)
  }

  ngOnInit() {
  }

  corregir(){
    this.errores=0
    this.preguntas.forEach(it=>{
      let solucion=it.opciones.filter(it=>it.correcta)[0].solucion
      if(it.solucion==solucion){
        it.color='success'
      }else{
        it.color='danger'
        this.errores++
      }

    })
  }
}
