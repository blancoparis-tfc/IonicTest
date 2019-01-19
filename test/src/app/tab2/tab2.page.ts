import { Component } from '@angular/core';
import {TestsService,Examen} from '../tests.service'


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  tests:Array<Examen>;

  constructor(private testService:TestsService){
    this.tests = this.testService.getExamenes()  
  }

}
