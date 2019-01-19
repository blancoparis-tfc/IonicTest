import { Component, OnInit } from '@angular/core';
import {TestsService,Pregunta} from '../tests.service'
import {ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.scss']
})
export class PreguntasComponent implements OnInit {

  errores=0;

  preguntas:Array<Pregunta>=[]
  constructor(private testService:TestsService, private route:ActivatedRoute) { 
    
    }

  ngOnInit() {
      let id= this.route.snapshot.paramMap.get('id')
      console.info(id)
      this.preguntas=this.testService.getTest(id)
    }

  corregir(){
    this.errores=0
    this.preguntas.forEach(it=>{
      let opcion=it.opciones.filter(it=>it.correcta)[0];
      opcion.color = 'success'
      let solucion=opcion.solucion
      if(it.solucion==solucion){
        it.color='success'
      }else{
        it.color='danger'
        this.errores++
      }
      
    })
  }
}
