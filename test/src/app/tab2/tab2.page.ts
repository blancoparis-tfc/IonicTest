import { Component, OnInit } from '@angular/core';
import {TestsService,Examen,Categorias} from '../tests.service'


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page  implements OnInit {

  tests:Array<Examen>;
  testsSeleccionados:Array<Examen>;
  categorias:Array<Categorias>
  opcion:String;
  constructor(private testService:TestsService){
  
  }

  ngOnInit() {
    this.tests = this.testService.getExamenes()  
    this.categorias = this.testService.getCategorias()
    this.opcion = "0"
    this.cambio()
  }

  cambio(){
    console.info('-->'+this.opcion)
    let categoria=this.categorias[Number(this.opcion)]
    this.testsSeleccionados = this.tests.filter(it=>categoria.preguntas.filter(pos=>it.id==pos).length>0)

  }
}
