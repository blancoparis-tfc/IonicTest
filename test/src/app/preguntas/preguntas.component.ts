import { Component, OnInit } from '@angular/core';
import { TestsService, Pregunta } from '../tests.service'
import { ActivatedRoute } from '@angular/router'

export interface PTimer {
  time: number;
  timeRemaining: number;
  runTimer: boolean;
  hasStarted: boolean;
  hasFinished: boolean;
  displayTime: string;
}

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.scss']
})
export class PreguntasComponent implements OnInit {

  errores = 0;

  preguntas: Array<Pregunta> = []
  preguntasOld:Array<Pregunta> = []
  private timeInSeconds: number;
  public timer: PTimer;


  constructor(private testService: TestsService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id')
    this.preguntas = this.testService.getTestAleatorio(id)
    this.preguntasOld = this.preguntas
    this.initTimer();
    this.startTimer();
  }

  respuesta(pregunta) {
    pregunta.opciones.filter(it => it.correcta)[0].color = 'success'
  }

  corregir() {
    this.errores = 0
    this.preguntas.forEach(it => {
      let opcion = it.opciones.filter(it => it.correcta)[0];
      opcion.color = 'success'
      let solucion = opcion.solucion
      if (it.solucion == solucion) {
        it.color = 'success'
      } else {
        it.color = 'danger'
        this.errores++
      }

    })
    this.preguntas = this.preguntas.filter(it=>it.color=='danger')
  }
  resetear() {
    this.errores = 0
    this.preguntas.forEach(it => {
      it.color = "white"
      it.solucion = ""
      it.opciones.forEach(it => {
        it.color = "white"
      })
    })
  }
  hasFinished() {
    return this.timer.hasFinished;
  }
  initTimer() {
    this.timeInSeconds = this.preguntas.length * 60; 

    this.timer = <PTimer>{
      time: this.timeInSeconds,
      runTimer: false,
      hasStarted: false,
      hasFinished: false,
      timeRemaining: this.timeInSeconds
    };
    this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.timeRemaining);
  }

  getSecondsAsDigitalClock(inputSeconds: number) {
    var sec_num = parseInt(inputSeconds.toString(), 10); // don't forget the second param
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);
    var hoursString = '';
    var minutesString = '';
    var secondsString = '';
    hoursString = (hours < 10) ? "0" + hours : hours.toString();
    minutesString = (minutes < 10) ? "0" + minutes : minutes.toString();
    secondsString = (seconds < 10) ? "0" + seconds : seconds.toString();
    return hoursString + ':' + minutesString + ':' + secondsString;
  }

  startTimer() {
    this.timer.hasStarted = true;
    this.timer.runTimer = true;
    this.timerTick();
  }
  timerTick() {
    setTimeout(() => {

      if (!this.timer.runTimer) { return; }
      this.timer.timeRemaining--;
      this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.timeRemaining);
      if (this.timer.timeRemaining > 0) {
        this.timerTick();
      }
      else {
        this.timer.hasFinished = true;
      }
    }, 1000);
  }
  pauseTimer() {
    this.timer.runTimer = false;
  }
  resumeTimer() {
    this.startTimer();
  }
}

