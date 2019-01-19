import { Injectable } from '@angular/core';

export class Opcion{
  public estado:string='';
  public color:String='white'  
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

export class Examen{
   constructor(
     public nombre:String
    ,public id:Number
    ,public preguntas:Array<Pregunta>
   ){}
}


@Injectable({
  providedIn: 'root'
})
export class TestsService {

  constructor() { }

  getTest(id):Array<Pregunta> {
    return this.examenes[id].preguntas;
  } 

  getExamenes():Array<Examen>{
    return this.examenes
  }

  examenes =[
    new Examen('Tema 1',0,
    [
    new Pregunta('1',1,' La estructura actual del sistema sanitario aparece regulada en:',false,
    [
        new Opcion('  Solo en el artículo 43 de la Constitución española.','1',false) ,
        new Opcion('  En el artículo 43, artículo 148 y artículo 149 de la Constitucion española.','2',true) ,
        new Opcion('  En el antiguo Texto Refundido de la Ley de la Seguridad Social.','3',false) ,
        new Opcion('  En el artículo 41 de la Constitución española, que establece la existencia de un régimen público de Seguridad Social.','4',false) 
    ])
    ,
    new Pregunta('2',2,' La sanidad exterior se refiere a:',false,
    [
        new Opcion('  El control epidemiológico, la lucha contra enfermedades transmisibles y la conservación de un ambiente saludable.','1',false) ,
        new Opcion('  El control por parte del Estado de que todos los ciudadanos con independencia de su lugar de residencia reciban las mismas prestaciones sanitarias.','2',false) ,
        new Opcion('  Actividades que se realicen en materia de vigilancia y control de los posibles riesgos para la salud derivados de la importación, exportación o tránsito de mercancías y tráfico internacional de viajeros.','3',true) ,
        new Opcion('  Actividades que son reguladas de forma exclusiva por el Estado.','4',false) 
    ])
    ,
    new Pregunta('3',3,' Las leyes aprobadas por la Asamblea de Madrid, serán promulgadas en nombre del Rey por:',false,
    [
        new Opcion('  El jefe del Estado.','1',false) ,
        new Opcion('  La Asamblea.','2',false) ,
        new Opcion('  El Presidente de la Comunidad de Madrid.','3',true) ,
        new Opcion('  El BOCM y en el BOE.','4',false) 
    ])
    ,
    new Pregunta('4',4,' ¿Cuál de estas determinaciones mínimas son exigibles en todos los Estatutos de Autnomía?:',false,
    [
        new Opcion('  La denominación de la Comunidad Autónoma.','1',false) ,
        new Opcion('  La delimitación de su territorio.','2',false) ,
        new Opcion('  La denominación, organización y sede de las instituciones autonómas propias.','3',false) ,
        new Opcion('  Todas las respuestas anteriores son correctas.','4',true) 
    ])
    ,
    new Pregunta('5',5,' El derecho a la protección de la Salud puede ser alegado:',false,
    [
        new Opcion('  Ante la juridicción ordinaria de acuerdo con lo que dispongan las leyes que lo desarrollen.','1',true) ,
        new Opcion('  Ante el Tribunal Constitucional mediante recurso de amparo.','2',false) ,
        new Opcion('  Ante los tribunales.','3',false) ,
        new Opcion('  Ante el Defensor del Pueblo.','4',false) 
    ])
    ,
    new Pregunta('6',6,' Según el Título VIII de la Constitución española (CE), la Sanidad e Higiene es una competencia:',false,
    [
        new Opcion('  Exclusiva del Estado.','1',false) ,
        new Opcion('  Exclusiva de las Comunidades Autónomas.','2',true) ,
        new Opcion('  Es atendida de forma conjunta y coordinada por el Estado y las Comunidades Autónomas.','3',false) ,
        new Opcion('  No es una competencia en materia de Salud.','4',false) 
    ])
    ,
    new Pregunta('7',7,' El Estatuto de Autonomía de la Comunidad de Madrid fue aprobado por la Ley Orgánica:',false,
    [
        new Opcion('  10/1994, de 24 de marzo.','1',false) ,
        new Opcion('  3/1983, de 1 de marzo.','2',false) ,
        new Opcion('  6/1982, de 7 de julio.','3',false) ,
        new Opcion('  3/1983, de 25 de febrero.','4',true) 
    ])
    ,
    new Pregunta('8',8,'  * 8. Le corresponde a la Comunidad de Madrid el desarrollo legislativo de las siguientes materias:',false,
    [
        new Opcion('  El régimen estatuario de sus funcionarios.','1',true) ,
        new Opcion('  La coordinación hospitalaria a excepción de la de la Seguridad Social.','2',false) ,
        new Opcion('  La gestión de las prestaciones y servicios sociales del sistema de Seguridad Social.','3',false) ,
        new Opcion('  Ninguna de las respuestas anteriores es correcta.','4',false) 
    ])
    ,
    new Pregunta('9',9,' El Presidente de la Comunidad de Madrid deberá recibir el tratamiento de:',false,
    [
        new Opcion('  Ilustrísimo.','1',false) ,
        new Opcion('  Ilustrísima Señoría.','2',false) ,
        new Opcion('  Señoría.','3',false) ,
        new Opcion('  Excelencia.','4',true) 
    ])
    ,
    new Pregunta('10',10,'* 10. El 27 de diciembre de 1978:',false,
    [
        new Opcion('  Las Cortes Generales aprueban la CE.','1',false) ,
        new Opcion('  Su Majestad el Rey sanciona la CE.','2',true) ,
        new Opcion('  El pueblo ratifica en referéndum la CE.','3',false) ,
        new Opcion('  Entra en vigor la CE.','4',false) 
    ])
    ,
    new Pregunta('11',11,'* 11. Para la distribución de escaños en la Asamblea de Madrid, solo se tendrá en cuenta aquellas listas que hubieran obtenido:',false,
    [
        new Opcion('  El 10 por ciento de los sufragios válidamente emitidos.','1',false) ,
        new Opcion('  El 7 por ciento de los sufragios válidamente emitidos.','2',false) ,
        new Opcion('  El 5 por ciento de los sufragios válidamente emitidos.','3',true) ,
        new Opcion('  Cualquier porcentaje de los sufragios válidamente emitidos.','4',false) 
    ])
    ,
    new Pregunta('12',12,'* 12. Son Órganos Superiores de las Consejerías de la Comunidad de Madrid:',false,
    [
        new Opcion('  Directores Generales y Subdirectores Generales.','1',false) ,
        new Opcion('  Subdirectores Generales y Jefes de Sección.','2',false) ,
        new Opcion('  Secretarías Generales Técnicas y Directores Generales.','3',false) ,
        new Opcion('  Consejeros y Viceconsejeros.','4',true) 
    ])
    ,
    new Pregunta('13',13,'* 13. El nombramiento de Subdirector General se realiza mediante:',false,
    [
        new Opcion('  Decreto del Gobierno a propuesta del Consejero correspondiente, con Título Superior.','1',false) ,
        new Opcion('  Convocatoria pública entre funcionarios de carrera, con Título de Doctor, Licenciado, Ingeniero, Arquitecto o equivalente.','2',true) ,
        new Opcion('  Por Decreto del Consejo de Gobierno a propuesta del Consejero respectivo, previo informe preceptivo de la Consejería de Economía Empleo y Hacienda.','3',false) ,
        new Opcion(' Ninguna de las respuestas anteriores es correcta.','4',false) 
    ])
    ,
    new Pregunta('14',14,'* 14. ¿Quién ejerce el control económico y presupuestario de la Comunidad de Madrid?',false,
    [
        new Opcion('  El Tribunal de Cuentas.','1',false) ,
        new Opcion('  La Cámara de Cuentas.','2',false) ,
        new Opcion('  El Consejo de Gobierno.','3',false) ,
        new Opcion('  Las respuestas a) y b) son correctas.','4',true) 
    ])
    ,
    new Pregunta('15',15,'* 15. ¿Qué atribución de las siguientes no pertenece al Consejero?',false,
    [
        new Opcion('  Proponer al Gobierno para su aprobación, la estructura u organización de la respectiva Consejería.','1',false) ,
        new Opcion('  Dirigir y gestionar los servicios y resolver los asuntos de la Consejería.','2',true) ,
        new Opcion('  Resolver los conflictos entre autoridades dependientes de su Consejería.','3',false) ,
        new Opcion('  Ejercer la potestad reglamentaria en la esfera de sus atribuciones y dictar circulares e instrucciones.','4',false) 
    ])
    ,
    new Pregunta('16',16,'* 16. Son decretos del Gobierno:',false,
    [
        new Opcion('  Los acuerdos de las Comisiones Delegadas del Gobierno.','1',false) ,
        new Opcion('  Las disposiciones y resoluciones de los Consejeros.','2',false) ,
        new Opcion('   Las disposiciones y actos emanados del Gobierno.','3',true) ,
        new Opcion('  Ninguna de las respuestas anteriores es correcta.','4',false) 
    ])
    ,
    new Pregunta('17',17,'* 17. En la Remoción del Presidente de la Comunidad de Madrid, ¿cuándo continuará en su cargo hasta que su sucesor tome posesión?:',false,
    [
        new Opcion('  Por dimisión comunicada formalmente al Presidente de la Asamblea.','1',false) ,
        new Opcion('  Por aprobación de una moción de censura.','2',true) ,
        new Opcion('  Por fallecimiento.','3',false) ,
        new Opcion('  Por incapacidad permanente física o mental, que le inhabilite para el ejercicio de su cargo.','4',false) 
    ])
    ,
    new Pregunta('18',18,'* 18. ¿Cuánto tiempo debe transcurrir entre la primera y la segunda votación si el candidato a Presidente de la Comunidad de Madrid no obtiene la mayoría absoluta?:',false,
    [
        new Opcion('  24 horas.','1',false) ,
        new Opcion('  72 horas.','2',false) ,
        new Opcion('  12 horas.','3',false) ,
        new Opcion('  48 horas.','4',true) 
    ])
    ,
    new Pregunta('19',19,'* 19. La junta de Portavoces de la Asamblea estará integrada por:',false,
    [
        new Opcion('  Los diputados de la Asamblea.','1',false) ,
        new Opcion('  Los grupos parlamentarios.','2',false) ,
        new Opcion('  Los Portavoces de los Grupos Parlamentarios.','3',false) ,
        new Opcion('  Los portavoces de los Grupos Parlamentarios bajo la presidencia del Presidente de la Asamblea.','4',true) 
    ])
    ,
    new Pregunta('20',20,'* 20. De las siguientes Comisiones, señala cuál no es Comisión Permanente Legislativa:',false,
    [
        new Opcion('  Comisión de la Mujer.','1',false) ,
        new Opcion('  Comisión de Investigación.','2',true) ,
        new Opcion('  Comisión de Presupuestos.','3',false) ,
        new Opcion('  Comisión de Juventud.','4',false) 
    ])
    ,
    new Pregunta('21',21,'* 21. Según la Ley Orgánica 12/1991, de 10 de julio, los Presidentes de las Asambleas Legislativas de las Comunidades Autónomas, podrán:',false,
    [
        new Opcion('  Prestar declaración en su despacho oficial, sin acudir al llamamiento del juez.','1',true) ,
        new Opcion('  Prestar declaración solo en el Tribunal Superior de Justicia de Madrid.','2',false) ,
        new Opcion('  Prestar declaración solo ante el Tribunal Constitucional.','3',false) ,
        new Opcion(' Prestar declaración solo ante el Tribunal Supremo.','4',false) 
    ])
    ,
    new Pregunta('22',22,'* 22. ¿En que arte del Estatuto de Autonomía de la Comunidad de Madrid se menciona el Reglamento de la Asamblea de Madrid?',false,
    [
        new Opcion('  Titulo 3º, Capítulo 1º del EStatuto de Autonomía.','1',false) ,
        new Opcion('  Titulo 1º, Capítulo 1º del EStatuto de Autonomía.','2',true) ,
        new Opcion('  Titulo 3º, Capítulo 2º del EStatuto de Autonomía.','3',false) ,
        new Opcion('  Titulo 3º, Capítulo 2º del EStatuto de Autonomía.','4',false) 
    ])
    ,
    new Pregunta('23',23,'* 23. ¿En qué Título del Estatuto de Autonomía de la Comunidad de Madrid se regula Economía y Hacienda?',false,
    [
        new Opcion('  Título IV (artículos 45 a 50 ).','1',false) ,
        new Opcion('  Título II (artículos 26 a 33).','2',false) ,
        new Opcion('  Título V (artículos 51 a 63).','3',true) ,
        new Opcion('  Título III (artículos 34 a 44).','4',false) 
    ])
    ,
    new Pregunta('24',24,'* 24. ¿En qué artículo de la Constitución española viene determinado el Derecho a la protección a la Salud?',false,
    [
        new Opcion('  Artículo 44.2.','1',false) ,
        new Opcion('  Artículo 41.','2',false) ,
        new Opcion('  Artículo 43.','3',true) ,
        new Opcion('  Artículo 40.','4',false) 
    ])
  ]),
  new Examen('prueba',1,
  [
  new Pregunta('1',1,' La estructura actual del sistema sanitario aparece regulada en:',false,
  [
      new Opcion('  Solo en el artículo 43 de la Constitución española.','1',false) ,
      new Opcion('  En el artículo 43, artículo 148 y artículo 149 de la Constitucion española.','2',true) ,
      new Opcion('  En el antiguo Texto Refundido de la Ley de la Seguridad Social.','3',false) ,
      new Opcion('  En el artículo 41 de la Constitución española, que establece la existencia de un régimen público de Seguridad Social.','4',false) 
  ])
  ,
  new Pregunta('2',2,' La sanidad exterior se refiere a:',false,
  [
      new Opcion('  El control epidemiológico, la lucha contra enfermedades transmisibles y la conservación de un ambiente saludable.','1',false) ,
      new Opcion('  El control por parte del Estado de que todos los ciudadanos con independencia de su lugar de residencia reciban las mismas prestaciones sanitarias.','2',false) ,
      new Opcion('  Actividades que se realicen en materia de vigilancia y control de los posibles riesgos para la salud derivados de la importación, exportación o tránsito de mercancías y tráfico internacional de viajeros.','3',true) ,
      new Opcion('  Actividades que son reguladas de forma exclusiva por el Estado.','4',false) 
  ])
])

  ]
}

