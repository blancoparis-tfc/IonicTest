import { Injectable } from '@angular/core';

export class Categorias{
    constructor(public nombre:String,public preguntas:Array<Number>){

    }
}

export class Opcion{
  public estado:string='';
  public color:String='white'  
  public pos
  constructor(public apartado:string,public solucion:string,public correcta:boolean){}
}
export class Pregunta{
  public solucion:String
  public color:String='white'
  public pos
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

  getTestAleatorio(id){
    let test=this.getTest(id);
    let orden = this.getOrdenAleatorio(test.length)
    console.info("Orden",orden)

    test.forEach(( value , index )=>{
        let ordenApartados=this.getOrdenAleatorio(value.opciones.length)
        value.opciones.forEach((value,index)=>{
            value.pos=ordenApartados[index]
        })     
        value.opciones = value.opciones.sort((a,b)=>a.pos-b.pos)
        value.opciones[0].solucion = 'a'
        value.opciones[1].solucion = 'b'
        value.opciones[2].solucion = 'c'
        value.opciones[3].solucion = 'd'
        value.pos = orden[index]
    })

    return test.sort((izq,der)=>izq.pos-der.pos);
  }

  getOrdenAleatorio(total){
      let elementos = new Array<Number>()
      let contiene = new Set<Number>()
      for(let i=0;i<total;i++){
        var elemento;
        do{  
            elemento=this.getRandomInt(0,total)
        }while(contiene.has(elemento))  
        contiene.add(elemento)
        elementos.push(elemento)
        }
      return elementos
  }

  getRandomInt(min,max):Number{
    return Math.floor(Math.random() * (max-min))+min;
  }

  getExamenes():Array<Examen>{
    return this.examenes
  }

  getCategorias():Array<Categorias>{
      return this.categorias
  }

  categorias=[
      new Categorias("Adams",[0,1,2,3,4,5])
      //,new Categorias("Revision",[6])
      ,new Categorias("CCOO",[7,8,9,10])

    ]

  examenes =[
    new Examen('Cuestionario 1.1',0,
    [
        new Pregunta('1',1,' La estructura actual del sistema sanitario aparece regulada en:',false,
        [
            new Opcion('  Solo en el artículo 43 de la Constitución española.','a',false) ,
            new Opcion('  En el artículo 43, artículo 148 y artículo 149 de la Constitucion española.','b',true) ,
            new Opcion('  En el antiguo Texto Refundido de la Ley de la Seguridad Social.','c',false) ,
            new Opcion('  En el artículo 41 de la Constitución española, que establece la existencia de un régimen público de Seguridad Social.','d',false) 
        ])
        ,
        new Pregunta('2',2,' La sanidad exterior se refiere a:',false,
        [
            new Opcion('  El control epidemiológico, la lucha contra enfermedades transmisibles y la conservación de un ambiente saludable.','a',false) ,
            new Opcion('  El control por parte del Estado de que todos los ciudadanos con independencia de su lugar de residencia reciban las mismas prestaciones sanitarias.','b',false) ,
            new Opcion('  Actividades que se realicen en materia de vigilancia y control de los posibles riesgos para la salud derivados de la importación, exportación o tránsito de mercancías y tráfico internacional de viajeros.','c',true) ,
            new Opcion('  Actividades que son reguladas de forma exclusiva por el Estado.','d',false) 
        ])
        ,
        new Pregunta('3',3,' Las leyes aprobadas por la Asamblea de Madrid, serán promulgadas en nombre del Rey por:',false,
        [
            new Opcion('  El jefe del Estado.','a',false) ,
            new Opcion('  La Asamblea.','b',false) ,
            new Opcion('  El Presidente de la Comunidad de Madrid.','c',true) ,
            new Opcion('  El BOCM y en el BOE.','d',false) 
        ])
        ,
        new Pregunta('4',4,' ¿Cuál de estas determinaciones mínimas son exigibles en todos los Estatutos de Autnomía?:',false,
        [
            new Opcion('  La denominación de la Comunidad Autónoma.','a',false) ,
            new Opcion('  La delimitación de su territorio.','b',false) ,
            new Opcion('  La denominación, organización y sede de las instituciones autonómas propias.','c',false) ,
            new Opcion('  Todas las respuestas anteriores son correctas.','d',true) 
        ])
        ,
        new Pregunta('5',5,' El derecho a la protección de la Salud puede ser alegado:',false,
        [
            new Opcion('  Ante la juridicción ordinaria de acuerdo con lo que dispongan las leyes que lo desarrollen.','a',true) ,
            new Opcion('  Ante el Tribunal Constitucional mediante recurso de amparo.','b',false) ,
            new Opcion('  Ante los tribunales.','c',false) ,
            new Opcion('  Ante el Defensor del Pueblo.','d',false) 
        ])
        ,
        new Pregunta('6',6,' Según el Título VIII de la Constitución española (CE), la Sanidad e Higiene es una competencia:',false,
        [
            new Opcion('  Exclusiva del Estado.','a',false) ,
            new Opcion('  Exclusiva de las Comunidades Autónomas.','b',true) ,
            new Opcion('  Es atendida de forma conjunta y coordinada por el Estado y las Comunidades Autónomas.','c',false) ,
            new Opcion('  No es una competencia en materia de Salud.','d',false) 
        ])
        ,
        new Pregunta('7',7,' El Estatuto de Autonomía de la Comunidad de Madrid fue aprobado por la Ley Orgánica:',false,
        [
            new Opcion('  10/1994, de 24 de marzo.','a',false) ,
            new Opcion('  3/1983, de 1 de marzo.','b',false) ,
            new Opcion('  6/1982, de 7 de julio.','c',false) ,
            new Opcion('  3/1983, de 25 de febrero.','d',true) 
        ])
        ,
        new Pregunta('8',8,'  * 8. Le corresponde a la Comunidad de Madrid el desarrollo legislativo de las siguientes materias:',false,
        [
            new Opcion('  El régimen estatuario de sus funcionarios.','a',true) ,
            new Opcion('  La coordinación hospitalaria a excepción de la de la Seguridad Social.','b',false) ,
            new Opcion('  La gestión de las prestaciones y servicios sociales del sistema de Seguridad Social.','c',false) ,
            new Opcion('  Ninguna de las respuestas anteriores es correcta.','d',false) 
        ])
        ,
        new Pregunta('9',9,' El Presidente de la Comunidad de Madrid deberá recibir el tratamiento de:',false,
        [
            new Opcion('  Ilustrísimo.','a',false) ,
            new Opcion('  Ilustrísima Señoría.','b',false) ,
            new Opcion('  Señoría.','c',false) ,
            new Opcion('  Excelencia.','d',true) 
        ])
        ,
        new Pregunta('10',10,'* 10. El 27 de diciembre de 1978:',false,
        [
            new Opcion('  Las Cortes Generales aprueban la CE.','a',false) ,
            new Opcion('  Su Majestad el Rey sanciona la CE.','b',true) ,
            new Opcion('  El pueblo ratifica en referéndum la CE.','c',false) ,
            new Opcion('  Entra en vigor la CE.','d',false) 
        ])
        ,
        new Pregunta('11',11,'* 11. Para la distribución de escaños en la Asamblea de Madrid, solo se tendrá en cuenta aquellas listas que hubieran obtenido:',false,
        [
            new Opcion('  El 10 por ciento de los sufragios válidamente emitidos.','a',false) ,
            new Opcion('  El 7 por ciento de los sufragios válidamente emitidos.','b',false) ,
            new Opcion('  El 5 por ciento de los sufragios válidamente emitidos.','c',true) ,
            new Opcion('  Cualquier porcentaje de los sufragios válidamente emitidos.','d',false) 
        ])
        ,
        new Pregunta('12',12,'* 12. Son Órganos Superiores de las Consejerías de la Comunidad de Madrid:',false,
        [
            new Opcion('  Directores Generales y Subdirectores Generales.','a',false) ,
            new Opcion('  Subdirectores Generales y Jefes de Sección.','b',false) ,
            new Opcion('  Secretarías Generales Técnicas y Directores Generales.','c',false) ,
            new Opcion('  Consejeros y Viceconsejeros.','d',true) 
        ])
        ,
        new Pregunta('13',13,'* 13. El nombramiento de Subdirector General se realiza mediante:',false,
        [
            new Opcion('  Decreto del Gobierno a propuesta del Consejero correspondiente, con Título Superior.','a',false) ,
            new Opcion('  Convocatoria pública entre funcionarios de carrera, con Título de Doctor, Licenciado, Ingeniero, Arquitecto o equivalente.','b',true) ,
            new Opcion('  Por Decreto del Consejo de Gobierno a propuesta del Consejero respectivo, previo informe preceptivo de la Consejería de Economía Empleo y Hacienda.','c',false) ,
            new Opcion(' Ninguna de las respuestas anteriores es correcta.','d',false) 
        ])
        ,
        new Pregunta('14',14,'* 14. ¿Quién ejerce el control económico y presupuestario de la Comunidad de Madrid?',false,
        [
            new Opcion('  El Tribunal de Cuentas.','a',false) ,
            new Opcion('  La Cámara de Cuentas.','b',false) ,
            new Opcion('  El Consejo de Gobierno.','c',false) ,
            new Opcion('  Las respuestas a) y b) son correctas.','d',true) 
        ])
        ,
        new Pregunta('15',15,'* 15. ¿Qué atribución de las siguientes no pertenece al Consejero?',false,
        [
            new Opcion('  Proponer al Gobierno para su aprobación, la estructura u organización de la respectiva Consejería.','a',false) ,
            new Opcion('  Dirigir y gestionar los servicios y resolver los asuntos de la Consejería.','b',true) ,
            new Opcion('  Resolver los conflictos entre autoridades dependientes de su Consejería.','c',false) ,
            new Opcion('  Ejercer la potestad reglamentaria en la esfera de sus atribuciones y dictar circulares e instrucciones.','d',false) 
        ])
        ,
        new Pregunta('16',16,'* 16. Son decretos del Gobierno:',false,
        [
            new Opcion('  Los acuerdos de las Comisiones Delegadas del Gobierno.','a',false) ,
            new Opcion('  Las disposiciones y resoluciones de los Consejeros.','b',false) ,
            new Opcion('   Las disposiciones y actos emanados del Gobierno.','c',true) ,
            new Opcion('  Ninguna de las respuestas anteriores es correcta.','d',false) 
        ])
        ,
        new Pregunta('17',17,'* 17. En la Remoción del Presidente de la Comunidad de Madrid, ¿cuándo continuará en su cargo hasta que su sucesor tome posesión?:',false,
        [
            new Opcion('  Por dimisión comunicada formalmente al Presidente de la Asamblea.','a',false) ,
            new Opcion('  Por aprobación de una moción de censura.','b',true) ,
            new Opcion('  Por fallecimiento.','c',false) ,
            new Opcion('  Por incapacidad permanente física o mental, que le inhabilite para el ejercicio de su cargo.','d',false) 
        ])
        ,
        new Pregunta('18',18,'* 18. ¿Cuánto tiempo debe transcurrir entre la primera y la segunda votación si el candidato a Presidente de la Comunidad de Madrid no obtiene la mayoría absoluta?:',false,
        [
            new Opcion('  24 horas.','a',false) ,
            new Opcion('  72 horas.','b',false) ,
            new Opcion('  12 horas.','c',false) ,
            new Opcion('  48 horas.','d',true) 
        ])
        ,
        new Pregunta('19',19,'* 19. La junta de Portavoces de la Asamblea estará integrada por:',false,
        [
            new Opcion('  Los diputados de la Asamblea.','a',false) ,
            new Opcion('  Los grupos parlamentarios.','b',false) ,
            new Opcion('  Los Portavoces de los Grupos Parlamentarios.','c',false) ,
            new Opcion('  Los portavoces de los Grupos Parlamentarios bajo la presidencia del Presidente de la Asamblea.','d',true) 
        ])
        ,
        new Pregunta('20',20,'* 20. De las siguientes Comisiones, señala cuál no es Comisión Permanente Legislativa:',false,
        [
            new Opcion('  Comisión de la Mujer.','a',false) ,
            new Opcion('  Comisión de Investigación.','b',true) ,
            new Opcion('  Comisión de Presupuestos.','c',false) ,
            new Opcion('  Comisión de Juventud.','d',false) 
        ])
        ,
        new Pregunta('21',21,'* 21. Según la Ley Orgánica 12/1991, de 10 de julio, los Presidentes de las Asambleas Legislativas de las Comunidades Autónomas, podrán:',false,
        [
            new Opcion('  Prestar declaración en su despacho oficial, sin acudir al llamamiento del juez.','a',true) ,
            new Opcion('  Prestar declaración solo en el Tribunal Superior de Justicia de Madrid.','b',false) ,
            new Opcion('  Prestar declaración solo ante el Tribunal Constitucional.','c',false) ,
            new Opcion(' Prestar declaración solo ante el Tribunal Supremo.','d',false) 
        ])
        ,
        new Pregunta('22',22,'* 22. ¿En que arte del Estatuto de Autonomía de la Comunidad de Madrid se menciona el Reglamento de la Asamblea de Madrid?',false,
        [
            new Opcion('  Titulo 3º, Capítulo 1º del EStatuto de Autonomía.','a',false) ,
            new Opcion('  Titulo 1º, Capítulo 1º del EStatuto de Autonomía.','b',true) ,
            new Opcion('  Titulo 3º, Capítulo 2º del EStatuto de Autonomía.','c',false) ,
            new Opcion('  Titulo 3º, Capítulo 2º del EStatuto de Autonomía.','d',false) 
        ])
        ,
        new Pregunta('23',23,'* 23. ¿En qué Título del Estatuto de Autonomía de la Comunidad de Madrid se regula Economía y Hacienda?',false,
        [
            new Opcion('  Título IV (artículos 45 a 50 ).','a',false) ,
            new Opcion('  Título II (artículos 26 a 33).','b',false) ,
            new Opcion('  Título V (artículos 51 a 63).','c',true) ,
            new Opcion('  Título III (artículos 34 a 44).','d',false) 
        ])
        ,
        new Pregunta('24',24,'* 24. ¿En qué artículo de la Constitución española viene determinado el Derecho a la protección a la Salud?',false,
        [
            new Opcion('  Artículo 44.2.','a',false) ,
            new Opcion('  Artículo 41.','b',false) ,
            new Opcion('  Artículo 43.','c',true) ,
            new Opcion('  Artículo 40.','d',false) 
        ])
        ,
        new Pregunta('25',25,'* 25. ¿En qué artículo de la Constitución española viene determinado que los poderes públicos velaran por la seguridad e higiene en el trabajo?:',false,
        [
            new Opcion('  Artículo 44.2.','a',false) ,
            new Opcion('  Artículo 41.','b',false) ,
            new Opcion('  Artículo 43.','c',false) ,
            new Opcion('  Artículo 40.','d',true) 
        ])
  ]),
  new Examen('Cuestionario 12.1',1,
  [
    new Pregunta('1',1,' ¿Cómo se llama el método que retrasa el proceso de putrefacción?',false,
    [
        new Opcion('  Tanatopraxia.','a',false) ,
        new Opcion('  Tanatopsia.','b',false) ,
        new Opcion('  Conservación temporal.','c',true) ,
        new Opcion('  Embalsamamiento.','d',false) 
    ])
    ,
    new Pregunta('2',2,' ¿A partir de qué momento se considera que el cuerpo humano pasa a ser restos cadavéricos?',false,
    [
        new Opcion('  A los 3 años.','a',false) ,
        new Opcion('  A los 5 años.','b',true) ,
        new Opcion('  A los 4 años.','c',false) ,
        new Opcion('  A los 6 años.','d',false) 
    ])
    ,
    new Pregunta('3',3,' Dentro de los signos precoces en el paciente fallecido no se encontrará:',false,
    [
        new Opcion('  Rígor mortis.','a',true) ,
        new Opcion('  Pérdida de sesbilidad cutánea.','b',false) ,
        new Opcion('  Ausencia de tono muscular.','c',false) ,
        new Opcion('  Ausencia de movimientos respiratorios.','d',false) 
    ])
    ,
    new Pregunta('4',4,' Al descenso gradual de la temperatura del cuerpo una vez producida la muerte se le llama:',false,
    [
        new Opcion('  Signos tardíos.','a',false) ,
        new Opcion('  Livor mortis.','b',false) ,
        new Opcion('  Algor mortis.','c',true) ,
        new Opcion('  Rígor mortis.','d',false) 
    ])
    ,
    new Pregunta('5',5,' En la planta de hospitalización 3H34 ha fallecido un paciente, la Enfermera le solicita al celador que amortaje al fallecido.',false,
    [
        new Opcion('  El celador se niega a hacerlo, no es función suya.','a',false) ,
        new Opcion('  El celador colabora con la enfermera y la auxiliar en el amortajamiento del fallecido.','b',true) ,
        new Opcion('  El celador le dice que es función del personal responsable y por lo tanto a él no le compete.','c',false) ,
        new Opcion('  El celador colabora, pero primero hace u parte de incidencia, pues piensa que no es función suya.','d',false) 
    ])
    ,
    new Pregunta('6',6,' En la operación de amortajar a un fallecido y ante la indicación de que va a ser sometido a una autopsia, ¿cómo colocaríamos al fallecido?',false,
    [
        new Opcion('  Los brazos cruzados sobre el pecho, uno encima del otro.','a',false) ,
        new Opcion('  Las manos cogidas una a la otra sobre el abdomen.','b',false) ,
        new Opcion('  Los brazos extendidos y pegados a lo largo del cuerpo.','c',true) ,
        new Opcion('  Las respuestas b) y c) son correctas.','d',false) 
    ])
    ,
    new Pregunta('7',7,' Antes de proceder al traslado del fallecido al mortuorio se confeccionará una ficha identificativa, la cual no incluirá:',false,
    [
        new Opcion('  El número de historia clínica.','a',false) ,
        new Opcion('  El día de fallecimiento.','b',false) ,
        new Opcion('  El servicio de procedencia.','c',false) ,
        new Opcion('  El día de ingreso en planta.','d',true) 
    ])
    ,
    new Pregunta('8',8,' Cuando el celador va a proceder al traslado del gallecido al mortuorio un familiar le pregunta por los tramites a llevar a cabo el enterramiento, el celador:',false,
    [
        new Opcion('  Avisa al ee de pesonal sbalterno para que le informe.','a',true) ,
        new Opcion('  Le informa amablemente.','b',false) ,
        new Opcion('  Le indica donde se encuentra Atención al Paciente para que le informen.','c',false) ,
        new Opcion('  Le indica donde se ubican las funerarias para e se informe.','d',false) 
    ])
    ,
    new Pregunta('9',9,' ¿Que supericie mínima tendrá la sala de autopsias?',false,
    [
        new Opcion('  25 metros cuadrados.','a',false) ,
        new Opcion('  30 metros cuadrados.','b',false) ,
        new Opcion('  40 metros cuadrados.','c',false) ,
        new Opcion('  20 metros cuadrados.','d',true) 
    ])
    ,
    new Pregunta('10',10,'* 10. La sala de autopsias contará con:',false,
    [
        new Opcion('  Refrigeradores de cadáveres.','a',false) ,
        new Opcion('  Local de secretaría.','b',false) ,
        new Opcion('  Agua corriente fría y caliente.','c',true) ,
        new Opcion('  Archivo de piezas.','d',false) 
    ])
    ,
    new Pregunta('11',11,'* 11. Se indica que al paciente de la 3H34, que ha fallecido hace 12 horas, se le extraiga una muestra con la finalidad exclusiva de comprobar la causa de la muerte, con la autorización de la familia. ¿Cómo se denomina esta actuación?',false,
    [
        new Opcion('  Autopsia Clínica.','a',false) ,
        new Opcion('  Autopsia judicial.','b',false) ,
        new Opcion('  Estudio Autópsico.','c',true) ,
        new Opcion('  Ninguna de las anteriores.','d',false) 
    ])
    ,
    new Pregunta('12',12,'* 12. Si los familiares del paciente fallecido de la 3H34 quieren que la funeraria "El Último Viaje" se lleve a su familiar para enerrarlo enel pueblo, ¿qué documentación le deberá proporcionar?:',false,
    [
        new Opcion('  El certificado de defunción y fotocopia del DNI del fallecido.','a',false) ,
        new Opcion('  El certificado de defunción y fotocopia del DNI de quien autoriza a la empresa funeraria.','b',false) ,
        new Opcion('  Mandato judicial y certificado de defunción.','c',false) ,
        new Opcion('  Fotocopia del DNI del familiar quen autoriza a la empresa funeraria, fotocopia delcertificado de defunción y original de la autorización familiar, indicando su parentesco con el fallecido.','d',true) 
    ])
    ,
    new Pregunta('13',13,'* 13. Si toda la documentación que presenta la funeraria para retirar uncadáver es correcta, ¿qué hará el Encargado de turno antes de que lo retiren del mortuorio?',false,
    [
        new Opcion('  Dejrá copia del original de la autorización familiar y del DNI del familiar enel Servicio de Admisión de ingresos.','a',false) ,
        new Opcion('  Firmará y sellará en el asiento correspindiente del libro de exitus.','b',true) ,
        new Opcion('  Adjuntará toda la documentación al parte de defunción que tiene guardado en su despacho.','c',false) ,
        new Opcion('  Las respuestas a) y c) son correctas.','d',false) 
    ])
    ,
    new Pregunta('14',14,'* 14. Si se produce una donación a la ciencia de un cadáver, ¿quién se hará cargo de él?',false,
    [
        new Opcion('  El juzgado Provincial.','a',false) ,
        new Opcion('  La familia del fallecido.','b',false) ,
        new Opcion('  La Universidad de Medicina.','c',true) ,
        new Opcion('  El Hospital donde ha fallecido.','d',false) 
    ])
    ,
    new Pregunta('15',15,'* 15. Si al retirar un miembro de un paciente el médico detecta la existencia de posibles riesgos de contagio lo pondrá enconocimiento de:',false,
    [
        new Opcion('  El Delegado Provincial de Sanidad.','a',true) ,
        new Opcion('  El Director Médico de su Hospital.','b',false) ,
        new Opcion('  Su superior jerárquico inmediato.','c',false) ,
        new Opcion('  La Consejería de Sanidad correspondiente.','d',false) 
    ])
    ,
    new Pregunta('16',16,'* 16. El traslado de un cadáver a mortuorio deberá realizarse:',false,
    [
        new Opcion('  Entre dos celadores.','a',false) ,
        new Opcion('  Con el pasillo despejado de pacientes y visitantes.','b',false) ,
        new Opcion('  Principalmente por lugares poco frecuentados y de forma discreta.','c',false) ,
        new Opcion('  Todas las respuestas anteriores son ciertas.','d',true) 
    ])
    ,
    new Pregunta('17',17,'* 17. Después de bajar el cadáver a mortuorio, ¿qué hará el celador?',false,
    [
        new Opcion('  Dejarlo en la camilla a la espera de que lo retire la funeraria.','a',false) ,
        new Opcion('  Depositarlo en un acámara frigorífica con los datos del cadáver en al puerta de la cámara.','b',true) ,
        new Opcion('  Llevarlo diretamente a la sala de autopsias.','c',false) ,
        new Opcion('  Asear y afeitar el cadáver para que este presentable.','d',false) 
    ])
    ,
    new Pregunta('18',18,'* 18. ¿Con qué documentos se puede inhumar o incinerar un miembro amputado?',false,
    [
        new Opcion('  Con la autorización del paciente o familiar, la fotocopia del DNI del paciente y certificado facultativo.','a',true) ,
        new Opcion('  Con el DNI del paciente al que le han amputado el miembro y su autorización.','b',false) ,
        new Opcion('  Con fotocopia del DNI del paciente al que le han amputado el miembro y autorización de un familiar.','c',false) ,
        new Opcion('  Con el certificado facultativo y la autorización del paciente o familiar.','d',false) 
    ])
    ,
    new Pregunta('19',19,'* 19. ¿Quién es el que tiene relación con la retirada de los cadáveres por parte de la empresa funeraria?',false,
    [
        new Opcion('  El celador de Anatomía Patológica.','a',false) ,
        new Opcion('  El Jee de Personal Subalterno.','b',false) ,
        new Opcion('  El Encargado de turno.','c',true) ,
        new Opcion('  El médico anatomopatólogo.','d',false) 
    ])
    ,
    new Pregunta('20',20,'* 20. Entre las medidas de prevención, como pilar básico para evitar la contaminación a través de microorganismo, se encuentra:',false,
    [
        new Opcion('  Los guantes.','a',false) ,
        new Opcion('  El lavado de manos.','b',true) ,
        new Opcion('  La bata.','c',false) ,
        new Opcion('  La mascarilla.','d',false) 
    ])
    ,
    new Pregunta('21',21,'* 21. Rosa, celadora de la planta H4NA entra en la habitación compartida de un paciente que acaba de fallecer para amortajarlo con el personal responsable. ¿Qué es lo primero que hará?',false,
    [
        new Opcion('  Indicar a los familiares y visitantes que salgan a la sala de espera.','a',false) ,
        new Opcion('  Tapar al paciente y correr las cortinas o poner biombos.','b',true) ,
        new Opcion(' Indicar al compañero de habitación que salga mientras lo amortajan.','c',false) ,
        new Opcion(' Esperar instrucciones después de que el médico indique que realmente hafallecido.','d',false) 
    ])
    ,
    new Pregunta('22',22,'* 22. La lividez cadavérica y la coloración violácea nos indican:',false,
    [
        new Opcion('  El "Rigor mortis".','a',false) ,
        new Opcion('  El "Algor mortis".','b',false) ,
        new Opcion('  Livor mortis".','c',true) ,
        new Opcion('  El enfriamiento del cadáver.','d',false) 
    ])
    ,
    new Pregunta('23',23,'* 23. ¿Quién realiza indistintamente la manipulación y acondicionamiento del cadáver?',false,
    [
        new Opcion('  El celador de Autopsias.','a',false) ,
        new Opcion('  El anatomopatólogo.','b',false) ,
        new Opcion(' El tanatopractor.','c',false) ,
        new Opcion('  La funeraria.','d',true) 
    ])
    ,
    new Pregunta('24',24,'* 24. ¿Cuál es lugar intermedio entre el domicilio mortuorio y el destino final del cadáver?',false,
    [
        new Opcion('  El Tanatorio.','a',false) ,
        new Opcion('  El Depósito de cadáveres.','b',true) ,
        new Opcion('  El domicilio del fallecido.','c',false) ,
        new Opcion('  El centro Hospitalario deonde fallece.','d',false) 
    ])
    ,
    new Pregunta('25',25,'* 25. ¿Cuál es el método que impide la aparición de los fenómenos de putrefacción?',false,
    [
        new Opcion('  Embalsamamiento.','a',true) ,
        new Opcion('  Cremación o incineración.','b',false) ,
        new Opcion('  Conservación transitoria.','c',false) ,
        new Opcion(' Necropsia.','d',false) 
    ])
]),
new Examen('Cuestionario 2.1',2,
[
    new Pregunta('1',1,' La Ley General de Sanidad es:',false,
    [
        new Opcion('a- La Ley 13/1985, de 25 de abril.','a',false) ,
        new Opcion('b- La Ley 14/1986, de 25 de abril.','b',true) ,
        new Opcion('c- La Ley 14/1986, de 15 de abril.','c',false) ,
        new Opcion('d- La Ley 14/1986, de 26 de abril.','d',false) 
    ])
    ,
    new Pregunta('2',2,' Para la implantación del Sistema Nacional de Salud, la Ley General de Sanidad, (LGS):',false,
    [
        new Opcion('a- Utiliza como eje las Comunidades Autónomas.','a',false) ,
        new Opcion('b- Prevé una importante reforma que se basa en la creación del Sistema Nacional de Salud.','b',false) ,
        new Opcion('c- Prevé la creación, en cada Comunidad Autónoma, de un Servicio de Salud.','c',false) ,
        new Opcion('d- Todas las respuestas anteriores son correctas.','d',true) 
    ])
    ,
    new Pregunta('3',3,' Como regla general, el Área de Salud extenderá su acción:',false,
    [
        new Opcion('a- A una población compendida entre 250.000 y 275.000 habitantes.','a',false) ,
        new Opcion('b-  A una población compendida entre 200.000 y 250.000 habitantes.','b',true) ,
        new Opcion('c- A una población compendida entre 200.000 y 275.000 habitantes.','c',false) ,
        new Opcion('d- A la población que haya en cada provincia de la comunidad autónoma.','d',false) 
    ])
    ,
    new Pregunta('4',4,' Desde el punto de vista subjetivo o personal, son titulares del derecho a la protección de la Salud y a la atención sanitaria:',false,
    [
        new Opcion('a- Todos los españoles mayores de edad y con residencia en España.','a',false) ,
        new Opcion('b- Todos los españoles y extranjeros mayores de edad y con residencia en España.','b',false) ,
        new Opcion('c- Todos los españoles y los ciudadanos extranjeros con residencia establecida en el territorio nacional.','c',true) ,
        new Opcion('d- Todas las respuestas anteriores son incorrectas.','d',false) 
    ])
    ,
    new Pregunta('5',5,' Desde el punto de vista objetivo o material, la LGS será de aplicacón:',false,
    [
        new Opcion('a- En todo el territorio del Estado.','a',false) ,
        new Opcion('b- En todo el territorio del Estado excepto algunos artículos que constituirán derecho supletorio en algunas comunidades autónomas.','b',true) ,
        new Opcion('c- En todo el territorio del Estado, así como en las Embajadas española en otros países.','c',false) ,
        new Opcion('d- En todas las comunidades autónomas.','d',false) 
    ])
    ,
    new Pregunta('6',6,' Según su estructura, la Ley General de Sanidad:',false,
    [
        new Opcion('a- Consta de 116 capítulos, distribuidos en un Título Preliminar y siete Títulos numerados.','a',false) ,
        new Opcion('b- Consta de 116 artículos y diezx disposiciones finales.','b',false) ,
        new Opcion('c- Consta de ocho Títulos y 16 disposiciones adicionales.','c',false) ,
        new Opcion('d- Consta de ocho Títulos y 10 disposiciones adicionales.','d',true) 
    ])
    ,
    new Pregunta('7',7,' Entre los Principios Generales del Sistema Nacional de Salud, se encuentra:',false,
    [
        new Opcion('a- La política de Salud estará orientada a la superación de equilibrio territoriales y sociales.','a',false) ,
        new Opcion('b- La Asistencia Sanitaria Pública se extenderá a tosa la poblción española.','b',true) ,
        new Opcion('c- El acceso a las prestacines sanitarias se realizará sin condiciones de igualdad y efectiva.','c',false) ,
        new Opcion('d- Las comunidades autónomas crearán sus Sistemas Autonómicos de Salus dentro del marco de la LGS y sus respectivos Estatutos de Autonomía.','d',false) 
    ])
    ,
    new Pregunta('8',8,' Se considera como actividad fundamental del Sistema Sanitario:',false,
    [
        new Opcion('a- La realización de estudios epidemiológicos.','a',false) ,
        new Opcion('b- La planificación y evaluación sanitarias.','b',false) ,
        new Opcion('c- La prevención y la lucha contra la zoonosis.','c',false) ,
        new Opcion('d- Todas las respuestas anteriores son correctas.','d',true) 
    ])
    ,
    new Pregunta('9',9,' Determine cuál de las siguientes actuaciones genéricas desarrollarán las Administraciones Públicas a través de sus Servicios de Salud:',false,
    [
        new Opcion('a- La Asistencia Sanitaria Hospitalaria, que incluye la asistencia domiciliaria, la hospitalización y la rehabilitación.','a',false) ,
        new Opcion('b- La Atención Secundaria Integral de la Salud.','b',false) ,
        new Opcion('c- La promoción y mejora de la Salud Mental.','c',true) ,
        new Opcion('d- El control y mejora de la calidad de la Asistenca Sanitaria en los niveles primario y secundario.','d',false) 
    ])
    ,
    new Pregunta('10',10,'* 10. ¿Cómo se reparten las competencias que atribuye la Ley General de Sanidad?',false,
    [
        new Opcion('a- Entre el Estado y las comunidades autónomas.','a',false) ,
        new Opcion('b- Entre el Estado, las comunidades autónomas y los ayuntamientos, a igual responsabilidad.','b',false) ,
        new Opcion('c- Entre el Estado, las comunidades autónomas y las corporaciones locales.','c',true) ,
        new Opcion('d- Todas las competencias, encuanto a Sanidad, las tiene el Estado.','d',false) 
    ])
    ,
    new Pregunta('11',11,'* 11. España colaborará con otros países y organismos internacionales en:',false,
    [
        new Opcion('a- El control epidemiológico.','a',true) ,
        new Opcion('b- La vivienda y el urbanismo.','b',false) ,
        new Opcion('c- El medio laboral.','c',false) ,
        new Opcion('d- Lugares, locales e instalacioes de esparcimiento público.','d',false) 
    ])
    ,
    new Pregunta('12',12,'* 12. El artículo 149.1. 16ª de la Constitución española reserva al Estado la competencia exclusiva sobre la coordinación general de la sanidad. Un instrumento de coordinación esencial, será:',false,
    [
        new Opcion('a- La comunicación interterritorial.','a',false) ,
        new Opcion('b- La acción coordinada autonómica.','b',false) ,
        new Opcion('c- La coordinación interterritorial.','c',false) ,
        new Opcion('d- La planificación.','d',true) 
    ])
    ,
    new Pregunta('13',13,'* 13. La Ley 296/2006, de 26 de Julio, sobre Productos Farmacéuticos, fue derogada por el texto refundido de la Ley de Garantías y uso racional de los medicamentos y productos sanitarios, que fue aprobado po:',false,
    [
        new Opcion('a- Real Decreto Legislativo 1/2015, de 24 de Julio.','a',true) ,
        new Opcion('b-  La Ley 16/2003, de 28 de mayo, de Cohesión y Calidad del Sistema Nacional de Salud.','b',false) ,
        new Opcion('c- La Ley 141998, de 25 de abril, General de Sanidad.','c',false) ,
        new Opcion('d- Orden de la Agencia Española de Medicamentos y Prosuctos Sanitarios.','d',false) 
    ])
    ,
    new Pregunta('14',14,'* 14. Las comunidades autónomas tienen asumidas competencias en materia de Sanidad e Higiene:',false,
    [
        new Opcion('a- Legislativas plenas, de desarollo legislativo y ejecutivas.','a',false) ,
        new Opcion('b- Legislativas plenas, únicamente.','b',false) ,
        new Opcion('c- De desarrollo legislativo y ejecutivas, únicamente.','c',true) ,
        new Opcion('d- Ejecutivas, únicamente.','d',false) 
    ])
    ,
    new Pregunta('15',15,'* 15. Según el artículo 42 de la LGS, entre las responsabilidades mínimas que tendrán los ayuntamientos enrelación al obligado cumplimiento de las normas y planes sanitarios, se encontraría:',false,
    [
        new Opcion('a- Control sanitario de los cementerios y policía sanitaria mortuoria.','a',true) ,
        new Opcion('b- Control técnico de industrias, actividades y servicios.','b',false) ,
        new Opcion('c- Control logístico de la distribución directa de los alimentos para consumo humano.','c',false) ,
        new Opcion('d- Control administrativo de los niveles de contaminación atmosférica y del medio ambiente.','d',false) 
    ])
    ,
    new Pregunta('16',16,'* 16. Según el artículo 46 de la LGS, es caracterñistica fundamental del Sistema Nacional de Salud:',false,
    [
        new Opcion('a- La prestación de un Servicio Integral de Salud procurando un nivel suficiente de calidad en el mismo.','a',false) ,
        new Opcion('b- La coordinación y, en su caso, la integración de todos los recursos sanitarios públicos en un dispositivo único.','b',true) ,
        new Opcion('c- La limitación de sus servicios a toda la población activa.','c',false) ,
        new Opcion('d- La financiación de las obligaciones derivadas de esta Ley se realizará mediante cotizaciones y tasas.','d',false) 
    ])
    ,
    new Pregunta('17',17,'* 17. Los órganos que se habrán de crear en cada una de la Áreas de Salud, serán:',false,
    [
        new Opcion('a- Consejo de Salud de Área y de Zona Básica.','a',false) ,
        new Opcion('b-  Consejo de Salud y Gerencia de Zona.','b',false) ,
        new Opcion('c-  Consejo de Salud, Consejo de Dirección y Gerencia en cada Área.','c',true) ,
        new Opcion('d-  Consejo de Salud de Área y de Zona Básica.Direccion Médica y Dirección Gerencia.','d',false) 
    ])
    ,
    new Pregunta('18',18,'* 18. La ordenación territorial de los servicios sanitarios será competencia de:',false,
    [
        new Opcion('a- Los ayuntamientos.','a',false) ,
        new Opcion('b- La Administración Estatal.','b',false) ,
        new Opcion('c- Las Corporaciones Locales.','c',false) ,
        new Opcion('d- Las comunidades autónomas.','d',true) 
    ])
    ,
    new Pregunta('19',19,'* 19. Las estructuras fundamentales del Sistema Sanitario serán:',false,
    [
        new Opcion('a-  Los servicios de Salud.','a',false) ,
        new Opcion('b- Las Zonas Básicas de Salud.','b',false) ,
        new Opcion('c- Las Áreas de Salud.','c',true) ,
        new Opcion('d- Las comunidades autónomas.','d',false) 
    ])
    ,
    new Pregunta('20',20,'* 20.  Los Órganos de Participación estarán representados por:',false,
    [
        new Opcion('a- El Consejo de Dirección d Área.','a',false) ,
        new Opcion('b- El Gerente de Área.','b',false) ,
        new Opcion('c- El Consejo de Salud de Área.','c',true) ,
        new Opcion('d- Los profesionales sanitarios.','d',false) 
    ])
    ,
    new Pregunta('21',21,'* 21. El Sistema Sanitario de la Comunidad de Madrid se organiza en Área Sanitaria Única en virtud de:',false,
    [
        new Opcion('a- El artículo 4 de la Ley de Ordenación Sanitaria de la Comunidad de Madrid.','a',true) ,
        new Opcion('b- El artículo 5 de la Ley de Ordenación Sanitaria de la Comunidad de Madrid.','b',false) ,
        new Opcion('c- El Título VI de la Ley General de Sanidad, "De las Áreas de Salud".','c',false) ,
        new Opcion('d- El Título VIII de la Ley General de Sanidad, "De las normas básicas de Ordenación Sanitaria".','d',false) 
    ])
    ,
    new Pregunta('22',22,'* 22. El Centro de Salud tendrá la siguiente función:',false,
    [
        new Opcion('a- Servir como centro de reunión entre la comunidad y los profesionales sanitarios.','a',true) ,
        new Opcion('b- Facilitar el trabajo de los equipos de Atención Especializada.','b',false) ,
        new Opcion('c- Mejorar la organización sanitaria de la atención administratica enla zona de salud.','c',false) ,
        new Opcion('d- Facilitar el trabajo enequipo de los profesionales sanitarios del Área.','d',false) 
    ])
    ,
    new Pregunta('23',23,'* 23.Los criterios generales de coordinación aprobados por el Estado:',false,
    [
        new Opcion('a-Se remitirán a las comunidades autónomas para que sean tenidas en cuenta por éstas.','a',false) ,
        new Opcion('b-Son la base para la elaboración de los Planes de Salud.','b',false) ,
        new Opcion('c- Las respuestas a) y b) son correctas.','c',true) ,
        new Opcion('d- Las respuestas a) y b) son incorrectas.','d',false) 
    ])
    ,
    new Pregunta('24',24,'* 24. En el seno del Consejo Interterritorial del Sistema Nacional de Salud se formularán los Planes de Salud:',false,
    [
        new Opcion('a- Cuando dichos planes procedan de la iniciativa del Estado.','a',false) ,
        new Opcion('b- Cuando dichos planes procedan de la iniciativa de las comunidades autónomas.','b',false) ,
        new Opcion('c- Cuando dichos planes procedan de la iniciativa conjunta del Estado y de alguna de las comunidades autónomas.','c',false) ,
        new Opcion('d-  Cuando dichos planes procedan de la iniciativa del Estado y de la totalidad de las comunidades autónomas.','d',true) 
    ])
    ,
    new Pregunta('25',25,'* 25. El Plan Integrado de Salud:',false,
    [
        new Opcion('a- Recogerá en un documento único los Planes de Salud Estatales.','a',false) ,
        new Opcion('b- Recogerá en un documento único lo Planes de Salud de las comunidades autonomas.','b',false) ,
        new Opcion('c- Recogerá en un único documento lod Planes de Salud elaborados conjuntamente entre el Estado y las comunidades autónomas.','c',false) ,
        new Opcion('d- Todas las respuestas anteriores son correctas.','d',true) 
    ])  
]),
new Examen('Cuestionario 3.1',3,
[
    new Pregunta('1',1,' La Ley de Oerdenación Sanitaria de la Comunidad de MAdrid regula los derechos y deberes de los ciudadanos en relación con el sistema sanitario en el :',false,
    [
        new Opcion(' Título IV, Capítulo I.','a',true) ,
        new Opcion(' Capítulo I del Título V.','b',false) ,
        new Opcion(' Título IV, Capítulo IV, Capítulo II.','c',false) ,
        new Opcion(' Título III, Capítulo II.','d',false) 
    ])
    ,
    new Pregunta('2',2,' Señale cuál de los siguientes es un principio rector de conformidad con lo establecido en la Ley de Ordenación Sanitaria de la Comunidad de Madrid:',false,
    [
        new Opcion(' Promoción del media ambiente.','a',false) ,
        new Opcion(' Calidad en la promoción saludable de los servicios sanitarios.','b',false) ,
        new Opcion(' Racionalización, eficaia, simplificanión, eficiencia y humanización de la organización sanitaria.','c',true) ,
        new Opcion(' Centralización y concentración en la gestión de los servicios.','d',false) 
    ])
    ,
    new Pregunta('3',3,' Quién asume la tutela y control en el ámbito sanitaria de acuerdo con lo establecido en la Ley 12/2001:',false,
    [
        new Opcion(' La Consejería de Sanidad.','a',false) ,
        new Opcion(' La autoridad sanitaria.','b',false) ,
        new Opcion(' La Comunidad de Madrid.','c',true) ,
        new Opcion(' El Servicio Madrileño de Salud.','d',false) 
    ])
    ,
    new Pregunta('4',4,' La Red Sanitaria Única de Utilización Pública:',false,
    [
        new Opcion(' Se regirá por las normas comunes de calidad y acreditación.','a',true) ,
        new Opcion(' Estará integrada sólo por los proveedores sanitarios públicos de la Comunidad de Madrid.','b',false) ,
        new Opcion(' Estará integrada sólo por los proveedores sanitarios privados que pueden prestar servicios al sistema Público.','c',false) ,
        new Opcion(' Todas las respuestas anteriores son incorrectas.','d',false) 
    ])
    ,
    new Pregunta('5',5,' Entre los Principios de Organización y Funcionamiento del Sistema Sanitrio de la Comunidad de Madrid, se encuentra:',false,
    [
        new Opcion(' La separación de las funciones de autoridad sanitaria, aseguramiento, compra y provisión de servicios sanitarios.','a',true) ,
        new Opcion(' La insuficiencia del marco de financiación con relación al catálogo de prestaciones del Servicio Madrileño de Salud.','b',false) ,
        new Opcion(' La orientación prioritaria de los medios y actuaciones con respeto a la promoción de las enfermedades y a la prevención de la salud.','c',false) ,
        new Opcion(' La concepción parcial del Sistema en la planificación de actuaciones hacia el conjunto de facetas sanitarias.','d',false) 
    ])
    ,
    new Pregunta('6',6,' Entre las competencias ue le corresponden al Consejo de Gobierno de la Comunidd de Madrid con respecto al Sistema Sanitario, se encuentra:',false,
    [
        new Opcion(' La aprobación de la estructura orgánica del Servicio Madrileño de Salud.','a',false) ,
        new Opcion(' La aprobación de la estructura orgánica de la Consejería de Sanidad.','b',false) ,
        new Opcion(' El nombramiento y cese del Director General del Servicio Madrileño de Salud.','c',false) ,
        new Opcion(' Todas las respuestas anteriores son correctas.','d',true) 
    ])
    ,
    new Pregunta('7',7,' De conformidad con lo establecido en la Ley 12/2001, el ejercicio de la autoridad sanitaria corresponde a:',false,
    [
        new Opcion(' Instituto de Salud Pública.','a',false) ,
        new Opcion(' La Consejería de Sanidad.','b',true) ,
        new Opcion(' El Ministerio de Sanidad, Consumo y Bienestar Social.','c',false) ,
        new Opcion(' El Servicio Madrileño de Salud.','d',false) 
    ])
    ,
    new Pregunta('8',8,' Le corresponde, con carácter general, a la Consejería de Sanidad de la Comunidad de Madrid, según lo estipulado en la Ley 12/2001, en relación con la ordenación sanitaria:',false,
    [
        new Opcion(' Aprobar el Plan de Salud.','a',true) ,
        new Opcion(' Aprobar la estructura orgánica de la Cosejería de Sanidad.','b',false) ,
        new Opcion(' Aprobar la estructura orgánica del Instituto Madrileño de la Salud.','c',false) ,
        new Opcion(' Todas las respuestas anteriores son corretas.','d',false) 
    ])
    ,
    new Pregunta('9',9,' Es competencia de la Consejería de Sanidad, en relación con las entidades públicas admitidas en Derecho:',false,
    [
        new Opcion(' La tutela, gobierno, inspección, control y evaluación del Servicio Madrileño de Salud.','a',false) ,
        new Opcion(' La aprobación de los precios y tarifas por la prestación y concertación de servicos.','b',false) ,
        new Opcion(' La aprobación del reglamento de funcionamiento interno de los órganos de participación y gobierno.','c',false) ,
        new Opcion(' Todas las respuestas anteriores son correctas.','d',true) 
    ])
    ,
    new Pregunta('10',10,'* 10. En relación con las entidades públicas y privadas, entre las competencias que tiene la Consejería de Sanidad, determine cuál de las siguientes se encontraría entre ellas:',false,
    [
        new Opcion(' La autorización de la creación, modificación, traslado y cierre de los centros, servicios y establecimientos sanitarios, si procede, y el cuidado de su registro, catalogación y acreditación, en su caso.','a',true) ,
        new Opcion(' Los registros y autorizaciones obligatorias de cualquier tipo de instalacines, establecimientos, actividades, servicios o artículos directa o indirectamente relacionados con el uso o el consumo humano.','b',false) ,
        new Opcion(' Las respuestas a) y b) son correctas.','c',false) ,
        new Opcion(' Las respuestas a) y b) son incorrectas.','d',false) 
    ])
    ,
    new Pregunta('11',11,'* 11. Entre las actuaciones de la Administración Sanitaria en el ámbito de la Saluus Laboral, desarrollará las correspondientes a:',false,
    [
        new Opcion(' La asistencia sanitaria a las emergencias, catástrofes  urgencias de la Comunidad de Madrid.','a',false) ,
        new Opcion(' La prestación de la asistencia farmacéutica promoviendo su correcta y adecuada utilización.','b',false) ,
        new Opcion(' La promoción general de la salud inegral de la población incluida la relacionada con el ámbito laboral.','c',true) ,
        new Opcion(' El fomento y participación enlas actividades de investigación en el campo de las ciencias de la salud.','d',false) 
    ])
    ,
    new Pregunta('12',12,'* 12. La Administración Sanitaria velará por que las organizaciones sanitarias privadas se vertebren en el Sistema Sanitario de la Comunidad de MAdrid, por medio de una de las siguientes actuaciones:',false,
    [
        new Opcion(' Colaboración con las actividaes de salud privada.','a',false) ,
        new Opcion(' Colaboración con los sistemas de financiación.','b',false) ,
        new Opcion(' Colaboración con las iniciativas de empresa.','c',false) ,
        new Opcion(' Armonización de los sistemas de información.','d',true) 
    ])
    ,
    new Pregunta('13',13,'* 13. Según la Ley de Ordenación Sanitaria de la Comunidad de Madrid, y además de los reconocidos por la Ley General de Sanidad, de entre los siguientes, determine cuál formaría parte de los derechos de los ciudadanos:',false,
    [
        new Opcion(' El ciudadano tiene derecho a mantener su intimidad y a que se garantice la publicidad de sus datos sanitarios.','a',false) ,
        new Opcion('  El ciudadano, en cualquier caso, podrá requerir que los familiares le proporcionen la información por sustitución.','b',false) ,
        new Opcion(' El ciudadano tiene derecho a ser informado de los riesgos para su salud en términos comprensibles y ciertos.','c',true) ,
        new Opcion(' El ciudadano tiene derecho a prestaciones sanitarias que serán aplazadas reglamentariamente.','d',false) 
    ])
    ,
    new Pregunta('14',14,'* 14. Entre los deberes que los ciudadnos tienen respecto a la utilización del Sistema Sanitario de la Comunidad de MAdrid, se encontraría:',false,
    [
        new Opcion(' Cumplir las normas y procedimientos de uso y acceso a los derechos que se otorgan en la Ley Orgánica 12/2002.','a',false) ,
        new Opcion(' Firmar, en caso de negarse a las actuaciones sanitarias, el documento pertinente en el que quedará expresado con claridad que el paciente consiente el procedimiento sugerido.','b',false) ,
        new Opcion(' Cumplir las prescripciones comunes a toda la población.','c',false) ,
        new Opcion(' Utilizar las instalacines de forma adecuada a fin de que las mismas se mantengan en todo momento en condiciones de habitabilidad.','d',true) 
    ])
    ,
    new Pregunta('15',15,'* 15. ¿Cuál es el objeto de la Salud Pública?',false,
    [
        new Opcion(' La adopción de todas las medidas necesarias para la protección de la salud colectiva de la población.','a',true) ,
        new Opcion(' La consecución de los resultados previstos en la planificación sanitaria.','b',false) ,
        new Opcion(' El logro de los resultados previstos en la programación política de la Consejería de Sanidad respecto a la salud de todos.','c',false) ,
        new Opcion(' Conseguir un alto nivel de conciencia pública sobre cuestiones de salud.','d',false) 
    ])
    ,
    new Pregunta('16',16,'* 16. La Ley 12/2001, de 21 de diciembre, de Ordenación Sanitaria de la Comunidad de Madrid, creó el Servicio Madrileño de Salud y el Instituto Madrileño de Salud, como:',false,
    [
        new Opcion(' Instituciones Sanitarias de la Seguridad Social.','a',false) ,
        new Opcion(' Entes Públicos.','b',true) ,
        new Opcion(' Entes de Actuación previstos en la Ley General de la Sanidad.','c',false) ,
        new Opcion(' Organizaciones públicas para proteger la salud.','d',false) 
    ])
    ,
    new Pregunta('17',17,'* 17. Es una función del Servicio Madrileño de Salud:',false,
    [
        new Opcion(' El gobierno, dirección, control y gestión de los recursos, centros y servicios asistenciales adscritos al Servicio MAdrileño de Salud, a través de una unidad funcional y orgánica diferenciada.','a',true) ,
        new Opcion(' Promover la asignación presupuestaria para fomentar la utilización de los servicios sanitarios.','b',false) ,
        new Opcion(' Integrar la protección de la población en la mejora de la salud.','c',false) ,
        new Opcion(' Todas las respuestas anteriores son correctas.','d',false) 
    ])
    ,
    new Pregunta('18',18,'* 18. El órgano de contratación del Servicio MAdrileño de Salud (SERMAS), es:',false,
    [
        new Opcion(' El Consejero de Sanidad.','a',false) ,
        new Opcion(' El Director General de la Consejería de Hacienda y Acción Prsupuestaria.','b',false) ,
        new Opcion(' El titular de la Viceconsejería del Sanidad.','c',true) ,
        new Opcion(' La Mesa de Contratación del SERMAS.','d',false) 
    ])
    ,
    new Pregunta('19',19,'* 19. ¿Cuál es el Órgano de Gobierno del SERMAS?:',false,
    [
        new Opcion(' El Director General del SERMAS.','a',false) ,
        new Opcion(' El Consejero de Sanidad.','b',false) ,
        new Opcion(' El Consejero de Administración.','c',true) ,
        new Opcion(' El titular de la Viceconsejería de Sanidad.','d',false) 
    ])
    ,
    new Pregunta('20',20,'* 20.  ¿Quién asumirá el cargo de Presidente del Consejo de Administración del SERMAS?:',false,
    [
        new Opcion(' El titular de la Viceconsejería de Sanidad.','a',false) ,
        new Opcion(' Eltitular de la Consejería de Sanidad.','b',true) ,
        new Opcion(' El Director General del SERMAS.','c',false) ,
        new Opcion(' El Viceconsejero de la Comunidad de Madrid.','d',false) 
    ])
    ,
    new Pregunta('21',21,'* 21. El Viceconsejero de la Consejería de Sanidad ocupa dos cargos de rsponsabilidad con respecto a los órganos de Dirección y Gobierno del SERMAS:',false,
    [
        new Opcion(' Sirector General Técnico del SERMAS y Viceconsejero del Consejo de Administración.','a',false) ,
        new Opcion(' Director General del SERMAS y Vicepresidente del Consejo de Administración del SERMAS.','b',true) ,
        new Opcion(' Subdirector General del SERMAS y Secretario del Consejo de Administración del SERMAS.','c',false) ,
        new Opcion(' Suplente del Consejero en ambas instituciones.','d',false) 
    ])
    ,
    new Pregunta('22',22,'* 22. El Instituto de Salud Pública de la Comunidad de MAdrid se extinguió al aplicarse:',false,
    [
        new Opcion(' El Decreto 22/2008, de 3 de abril, de Estructura Orgánica de la Consejeria de Sanidad.','a',true) ,
        new Opcion(' El Decreto 195/2015, de 4 de agosto, del Consejo de Gobierno.','b',false) ,
        new Opcion('  El Decreto 112/2012, de 11 de octubre,del consejo de Gobierno de la Comunidad de Madrid.','c',false) ,
        new Opcion('Todas las respuestas anteriores son incorrectas.','d',false) 
    ])
    ,
    new Pregunta('23',23,'* 23.Entre los Principios Generales de intervención en el campo de las drogodependencias y otros trastornos aditivos, se encontraría:',false,
    [
        new Opcion('Normalización que permita la integración social de las personas con problemas de drogodependencias y de otros trastornos adictivos.','a',false) ,
        new Opcion('Integración y coordinación de los recursos e instituciones implicadas en esta materia, con la participación activa de la sociedad.','b',false) ,
        new Opcion(' Eficacia y eficiencia enlas actuaciones que se realicen en este campo, así como su evaluación y adaptación permanente a las nuevas necesidades.','c',false) ,
        new Opcion(' Todas las respuestas anteriores son correctas.','d',true) 
    ])
    ,
    new Pregunta('24',24,'* 24. Las Corporaciones Locales ejercerán en materia sanitaria, según la legislación de régimen local:',false,
    [
        new Opcion(' El control de los cementerios y policía sanitaria mortuoria.','a',false) ,
        new Opcion(' El control de industrias, actividades, servicios y transportes.','b',false) ,
        new Opcion(' El control de la distribución y suministro de alimentos, bebidas y demás productos relacionados con el uso o consumo humano, así como los medios de su transporte.','c',false) ,
        new Opcion(' El control sanitario del medio ambiente: contaminación atmosférica, ruidos y vibraciones, abastecimiento y saneamiento de aguas, residuos urbanos e industriales.','d',true) 
    ])
    ,
    new Pregunta('25',25,'* 25. ¿Qué ley regula la realización de las inspecciones para asegurar el cumplimiento de la legislación sanitaria vigente?:',false,
    [
        new Opcion(' La Ley General de Sanidad.','a',false) ,
        new Opcion(' La Ley 12/2001, de 21 de diciembre, de Oedenación Sanitaria de la Comunidad de Madrid.','b',false) ,
        new Opcion('[x2] La Ley General de Sanidad y las leyes estatales y autonómicas que resulten de aplicación.','c',false) ,
        new Opcion(' Las respuestas a), b) y c) son correctas.','d',false) 
    ])  
]),
new Examen('Cuestionario 4.1',4,
[
    new Pregunta('1',1,' ¿En qué Título y Capítulo de la Ley Orgánica 1/2004, de Medidas de Protección Integral contra la Violencia de Género se regula el ámbito sanitario:',false,
    [
        new Opcion(' Título I, Capítulo III.','a',true) ,
        new Opcion(' Título III, Capítulo I.','b',false) ,
        new Opcion('  Título II, Capítulo II.','c',false) ,
        new Opcion('  Título I, Capítulo II.','d',false) 
    ])
    ,
    new Pregunta('2',2,' Según el artículo 2 de la Ley 1/2004 entre sus principios rectores no se encuentra:',false,
    [
        new Opcion(' Fortalecer las medidas de sensibilización ciudadana de prevención.','a',false) ,
        new Opcion(' Reforzar la Seguridad Social de información, atención, apoyo y recuperación integral.','b',true) ,
        new Opcion(' Garantizar los derechos en el ámbito laboral y funcionarial.','c',false) ,
        new Opcion(' Fortalecer el marco penal y procesal para asegurar una protección integral.','d',false) 
    ])
    ,
    new Pregunta('3',3,' En relación con la Violencia de Género, ¿qué pondrá e marcha el Gobierno?:',false,
    [
        new Opcion(' Actuaciones de prevención de la Violencia de Género.','a',false) ,
        new Opcion(' Sensibilización de la población contra la Violencia de Género.','b',false) ,
        new Opcion(' Un plan de Sensibilización y de Prevención de la Violencia de Género.','c',true) ,
        new Opcion(' Publicitará la información sobre la Violencia de Género.','d',false) 
    ])
    ,
    new Pregunta('4',4,' En el escenario social en relación a la Violencia de Género, las nuevas escalas de valores estarán basadas en:',false,
    [
        new Opcion(' Respetar los derechos y libertades fundamentales.','a',false) ,
        new Opcion(' Respetar la igualdad entre hombres y mujeres.','b',false) ,
        new Opcion(' El ejercicio de la tolerancia y de la libertad dentro de los principios democráticos de convivencia.','c',false) ,
        new Opcion(' Todas las respuestas anteriores son correctas.','d',true) 
    ])
    ,
    new Pregunta('5',5,' ¿Dónde promoverán e impulsarán las Administraciones sanitarias las actuaciones de los profesionales para la detección precoz de la violencia de género?',false,
    [
        new Opcion(' En los servicios donde ejercen los profesionales.','a',false) ,
        new Opcion(' En Atención Primaria.','b',false) ,
        new Opcion(' En el Consejo Interterritorial del Sistema NAcional de Salud.','c',true) ,
        new Opcion(' Durante la formación de los profesionales en la Universidad en los estudios de Grado y postgrado.','d',false) 
    ])
    ,
    new Pregunta('6',6,' Con que fin se desarrollarán programas de sensibilización y formación continuada del personal sanitario en relacion con la violencia de género.',false,
    [
        new Opcion(' Para concienciar a los profesionales sobre el problema de Violencia de Género.','a',false) ,
        new Opcion(' Para detectar si hay Violencia de Género en el seno de su actividad.','b',false) ,
        new Opcion(' Para mejorar e impulsar el diagnóstico precoz, la asistencia y la rehabilitación.','c',true) ,
        new Opcion(' Las respuestas a) y b) son correctas.','d',false) 
    ])
    ,
    new Pregunta('7',7,' ¿Qué se crea en sesión plenaria del Consejo Interterritorial del Sistema Nacional de Salud el día 22 de septiembre de 2004?:',false,
    [
        new Opcion(' Una Comisión de estudio sobre la violencia del hombre sobre la mujer.','a',false) ,
        new Opcion(' Una Comisión contra la violencia de género.','b',true) ,
        new Opcion(' Una Comisión contra la violencia de género dentro del seno del Ministerio de Igualdad.','c',false) ,
        new Opcion('  Una Comisión contra la violencia de género dentro del seno del Instituto de la Mujer.','d',false) 
    ])
    ,
    new Pregunta('8',8,' La funcionaria victima de violencia de género tendrá derecho a coger una excedencia:',false,
    [
        new Opcion('  Sin necesidad de haber prestado un tiempo mínimo de servicios previos.','a',true) ,
        new Opcion(' De seis meses prorrogables en periodos de seis meses hasta un máximo de 18 meses.','b',false) ,
        new Opcion(' Solo  durante seis meses son prologa.','c',false) ,
        new Opcion(' Sin reserva de puesto.','d',false) 
    ])
    ,
    new Pregunta('9',9,' ¿Qué acreditación resultará necesaria para reconocer los derechos de movilidad geográfica de centro de trabajo a una funcionaria víctima de violencia de género?:',false,
    [
        new Opcion(' Copia de la denuncia enla comisaría de policia.','a',false) ,
        new Opcion(' Orden de protección.','b',false) ,
        new Opcion(' Informe del Ministerio Fiscal.','c',false) ,
        new Opcion(' Las respuestas b) y c) son correctas.','d',true) 
    ])
    ,
    new Pregunta('10',10,'* 10. La funcionaria víctima de violencia de género podrá ausentarse de forma justificada de su puesto de trabajo:',false,
    [
        new Opcion(' Por la situación física o psicológica derivada de la violencia de género.','a',true) ,
        new Opcion(' Por la situación de acoso sufrida por la mujer víctima de vilencia de género.','b',false) ,
        new Opcion(' Por indicación de actuación en la normativa sobre violencia de género independientemente del motivo.','c',false) ,
        new Opcion(' Para no agravar la situación de la mujer víctima de violencia de género.','d',false) 
    ])
    ,
    new Pregunta('11',11,'* 11. ¿Tiene derecho la funcionaria víctima de violencia de género a la reducciín o reordenación de la jornada de trabajo?',false,
    [
        new Opcion(' Si, sin necesidad de haber prestado un tiempo de servicio previo.','a',false) ,
        new Opcion(' Si, libremente, le comunicará al servicio de personal cuál será su nuevo horario.','b',false) ,
        new Opcion(' Si, en los términos que establezca la Administración Pública competente en estos supuestos.','c',true) ,
        new Opcion(' Tiene dereco a la reducción de la jornada, pero no a la reordenación del horario.','d',false) 
    ])
    ,
    new Pregunta('12',12,'* 12. La norma que legisla la igualdad efectiva de mujeres y hombres es:',false,
    [
        new Opcion(' Ley Orgánica 3/2007.','a',true) ,
        new Opcion(' Ley Orgánica 1/2004.','b',false) ,
        new Opcion('  Ley Ordinaria 3/2004.','c',false) ,
        new Opcion('  Ley Ordinaria 3/2007.','d',false) 
    ])
    ,
    new Pregunta('13',13,'* 13. La igualdad efectiva entre mujeres y hombres es:',false,
    [
        new Opcion(' Un derecho reconocido en la Constitución Española en el artículo 14.','a',false) ,
        new Opcion('  Un principio jurídico universal reconocido','b',false) ,
        new Opcion(' Un principio fundamental en la Unión Europea reconocido en el Tratado de Ámsterdam.','c',false) ,
        new Opcion(' Las respuestas a) y b) son correctas, la c) no es incorrecta.','d',true) 
    ])
    ,
    new Pregunta('14',14,'* 14. ¿Cuál es el objeto de la Ley de igualdad efectiva de mujeres y hombres?',false,
    [
        new Opcion(' Que mujeres y hombres somos iguales y no se puede discriminar solo a las mujeres.','a',false) ,
        new Opcion(' Hacer efectivo el derecho de igualdad de trato y de oportunidades entre mujeres y hombres.','b',true) ,
        new Opcion(' Hacer frente al deber de igualdad entre mujeres y hombres.','c',false) ,
        new Opcion(' Hacer efectivo el derecho de igualdad de trato y de oportunidaes entre mujeres y hombres en la esfera política.','d',false) 
    ])
    ,
    new Pregunta('15',15,'* 15. Singularmente , en que ámbitos de la vida se busca erradicar la desigualdad entre mujeres y hombres:',false,
    [
        new Opcion(' En el ámbito laboral y en el familiar.','a',false) ,
        new Opcion(' En el ámbito rural y ecológico.','b',false) ,
        new Opcion(' En el laboral, civil, económico, social y cultural.','c',true) ,
        new Opcion(' En el familiar y en la esfera política.','d',false) 
    ])
    ,
    new Pregunta('16',16,'* 16. A quién obliga La Ley de igualdad efectiva entre mujeres y hombres:',false,
    [
        new Opcion(' A todas las personas física o jurídica dentro de España, mayores de edad.','a',false) ,
        new Opcion(' A todas las personas física o jurídica dentro del territorio español.','b',true) ,
        new Opcion(' A todos los españoles con residencia en España.','c',false) ,
        new Opcion(' A todos los españoles y extranjeros residentes en España.','d',false) 
    ])
    ,
    new Pregunta('17',17,'* 17. ¿Quiénes gozarán de los derechos derivados del principio de igualdad de trato y de la prohibición de discriminación por razón de sexo?',false,
    [
        new Opcion(' Todas las personas.','a',true) ,
        new Opcion(' Todas las mujeres españolas.','b',false) ,
        new Opcion(' Todas las mujeres residentes en España.','c',false) ,
        new Opcion(' Todos los hombres mayores de edad.','d',false) 
    ])
    ,
    new Pregunta('18',18,'* 18. ¿Quién desarrollará la adopción sistemática, dentro de las acciones de educación sanitaria, de iniciativas para favorecer la promoción específica de la salud de las mujeres?:',false,
    [
        new Opcion(' Las Comunidades autónomas.','a',false) ,
        new Opcion(' La Consejería de Sanidad.','b',false) ,
        new Opcion(' La normativa de los Centros Sanitarios.','c',false) ,
        new Opcion(' Las Administraciones Públicas.','d',true) 
    ])
    ,
    new Pregunta('19',19,'* 19. La integración del proncipio de igualdad en la formación del personal al servicio de las organizaciones sanitarias, se hace para:',false,
    [
        new Opcion(' Tener una mejor formación en violencia de género.','a',false) ,
        new Opcion(' Detectar a primera vista un caso de violencia de género.','b',false) ,
        new Opcion(' Detectar y atender las situaciones por vilencia de género.','c',true) ,
        new Opcion(' Registrar los datos desagregados por sexo.','d',false) 
    ])
    ,
    new Pregunta('20',20,'* 20.  Siempre que se pueda los datos contenidos en encuestas, estadísticas u otros sistemas de información médica y sanitaria se hará:',false,
    [
        new Opcion(' En formato papel y en disco informático.','a',false) ,
        new Opcion(' Desagregados por sexo.','b',true) ,
        new Opcion(' En formato informático y soporte digital.','c',false) ,
        new Opcion(' Desagregados por sexo, edad y situación personal.','d',false) 
    ])
    ,
    new Pregunta('21',21,'* 21. Según la modificación a ravés de la Disposición Adicional octava de la Ley de igualdad efectiva entre mujeres y hombres delartículo 3 de la Ley General de Sanidad, las políticas y estrategias y programas de salud integrarán activamente.',false,
    [
        new Opcion(' El principio de igualdad entre mujeres y hombres.','a',true) ,
        new Opcion(' Las discriminaciones enlos objetivos y actuaciones sanitarias.','b',false) ,
        new Opcion(' La integración del principio de igualdad entre mujeres y hombres.','c',false) ,
        new Opcion('  La adaptación sistemática de acciones para la educación sanitaria.','d',false) 
    ])
    ,
    new Pregunta('22',22,'* 22. En qué Título de la Ley de igualdad efectiva entre mujeres y hombres viene recogido el objeto y ámbito de la misma:',false,
    [
        new Opcion(' En el Título Preliminar.','a',true) ,
        new Opcion(' En el Título I.','b',false) ,
        new Opcion('  En el Título II.','c',false) ,
        new Opcion('  En el Título III.','d',false) 
    ])
    ,
    new Pregunta('23',23,'* 23. ¿Qué artículos de la Constitución desarrolla la Ley de igualdad efectiva entre mujeres y hombres?',false,
    [
        new Opcion(' Artículos 9.1 y 14.','a',false) ,
        new Opcion(' Artículos 8.2 y 15.','b',false) ,
        new Opcion('  Artículos 7.1 y 13.','c',false) ,
        new Opcion('  Artículos 9.2 y 14.','d',true) 
    ])
    ,
    new Pregunta('24',24,'* 24. La llamada paridad en los puestos directivos se hará efectiva mediante:',false,
    [
        new Opcion(' El desequilibrio de mujeres y hombres.','a',false) ,
        new Opcion(' La presencia equilibrada de mujeres y hombres.','b',true) ,
        new Opcion(' La aparición de la Ley de igualdad efectiva entre mujeres y hombres.','c',false) ,
        new Opcion(' La modificación de la Ley General de Sanidad.','d',false) 
    ])
    ,
    new Pregunta('25',25,'* 25. La igualdad de trato y de oportunidades en el ámbito laboral viene regulado en la Ley de igualdad efectiva entre mujeres y hombres en el:',false,
    [
        new Opcion('  Título III, Capítulo I.','a',false) ,
        new Opcion('  Título IV, Capítulo I.','b',true) ,
        new Opcion('  Título V, Capítulo IV.','c',false) ,
        new Opcion('  Título VI, Capítulo I.','d',false) 
    ]) 
]),
new Examen('Cuestionario 5.1',5,
[
    new Pregunta('1',1,' ¿Qué se establece en el artículo 104 del Decreto 2065/1974, vigente en la actualidad?',false,
    [
        new Opcion(' La atención sanitaria integral.','a',false) ,
        new Opcion(' La asistencia sanitaria especializada.','b',false) ,
        new Opcion(' La asistencia sanitaria a domicilio.','c',true) ,
        new Opcion(' Todas las respuestas anteriores son incorrectas.','d',false) 
    ])
    ,
    new Pregunta('2',2,' ¿Cómo será el coste de los métodos y tecnologías utilizadas en la Atención Primaria de Salud?',false,
    [
        new Opcion(' Ajustado al presupuesto anual.','a',false) ,
        new Opcion(' El que la comunidad y el país puedan soportar.','b',true) ,
        new Opcion(' El necesario para la curación del individuo.','c',false) ,
        new Opcion(' Lo más reducido posible.','d',false) 
    ])
    ,
    new Pregunta('3',3,' ¿Cual será el primer paso a dar dentro de las actividades en la Atención Primaria?',false,
    [
        new Opcion(' Atender las necesidades sanitarias de las personas.','a',false) ,
        new Opcion(' Participar en las fases de programación de las actividades de salud.','b',false) ,
        new Opcion(' Diagnosticar la salud de la Zona.','c',true) ,
        new Opcion(' Enseñar técnicas de prevención de enfermedades.','d',false) 
    ])
    ,
    new Pregunta('4',4,'Una vez detectado el problema sanitario, la actividad no se puede subdividir en:',false,
    [
        new Opcion(' Programada.','a',false) ,
        new Opcion(' Espontánea.','b',true) ,
        new Opcion(' Urgente.','c',false) ,
        new Opcion(' No programada.','d',false) 
    ])
    ,
    new Pregunta('5',5,' Dentro de las características de la Atención Primaria podemos señalar que no está presente:',false,
    [
        new Opcion(' Atención programada.','a',false) ,
        new Opcion(' Atención individualizada.','b',true) ,
        new Opcion(' Atención participativa.','c',false) ,
        new Opcion(' Atención sectorializada.','d',false) 
    ])
    ,
    new Pregunta('6',6,' Juan está citado con su médico de Atención Primaria, y al finalizar su consulta su médico le da una nueva cita para dentro de 15 días, pues quiere ver su evolución. ¿En qué modalidad incluiríamos la nueva consulta para diferenciarla del resto?',false,
    [
        new Opcion(' Consulta a demanda.','a',false) ,
        new Opcion(' Consulta urgente.','b',false) ,
        new Opcion(' Consulta reprogramada.','c',false) ,
        new Opcion(' Consulta programada.','d',true) 
    ])
    ,
    new Pregunta('7',7,' La atención paliativa a enfermos terminales además de la atención al paciente incluye la atención a:',false,
    [
        new Opcion(' El familiar directo que le cuide en el domicilio.','a',false) ,
        new Opcion(' El cuidador que le cuide en el domicilio.','b',false) ,
        new Opcion(' Las personas a ellas vinculadas.','c',true) ,
        new Opcion(' El amigo que le cuide en el domicilio.','d',false) 
    ])
    ,
    new Pregunta('8',8,' En la rehabilitación básica, ¿se incluye la asistencia domiciliaria si es necesaria por circunstancias clínicas o por limitaciones en la accesibilidad?',false,
    [
        new Opcion(' Si, previa indicación médica.','a',true) ,
        new Opcion(' No, la rehabilitación se da en el centro de Atención Primaria.','b',false) ,
        new Opcion(' Si, si el centro de Atención Primaria no tiene rampa de acceso a discapacitados.','c',false) ,
        new Opcion(' No, la rehabilitación se da en la Atención Hospitalitaria.','d',false) 
    ])
    ,
    new Pregunta('9',9,' La atención a la salud mental comprende:',false,
    [
        new Opcion(' El seguimiento de forma coordinada con los servicios de salud mental y servicios sociales.','a',false) ,
        new Opcion(' Las actividades de prevención y promoción, consejo y apoyo para el mantenimiento de la salud mental.','b',false) ,
        new Opcion(' Detección, diagnóstico y tratamiento de trastornos adaptativos, por ansiedad y depresivos.','c',false) ,
        new Opcion(' Todas las respuestas anteriores son correctas.','d',true) 
    ])
    ,
    new Pregunta('10',10,'* 10. ¿Quien realizará la salud bucodental en Atención Primaria?',false,
    [
        new Opcion(' Los Odontólogos.','a',false) ,
        new Opcion(' Los Otorrinolaringólogos y Odontólogos.','b',false) ,
        new Opcion(' Los Estomatólogos y Odontólogos.','c',true) ,
        new Opcion(' Los Otorrinolaringólogos y Estomatólogos.','d',false) 
    ])
    ,
    new Pregunta('11',11,'* 11. Dentro de las funciones del Director del Centro de Salud, no está:',false,
    [
        new Opcion(' Realizar el diagnóstico de salud de la Zona.','a',true) ,
        new Opcion(' La dirección y representación del centro de salud.','b',false) ,
        new Opcion(' La gestión del contrato programa del centro.','c',false) ,
        new Opcion(' La evaluación del desempeño y la propuesta de las medidas de incentivación.','d',false) 
    ])
    ,
    new Pregunta('12',12,'* 12. La asistencia sanitaria especializada incluye:',false,
    [
        new Opcion(' La asistencia domiciliaria y la hospitalización.','a',false) ,
        new Opcion(' La hospitalización y la rehabilitación.','b',false) ,
        new Opcion(' La asistencia domiciliaria, la hospitalización y la rehabilitación.','c',true) ,
        new Opcion(' La hospitalización a domicilio.','d',false) 
    ])
    ,
    new Pregunta('13',13,'* 13. La asistencia hospitalaria la recibimos:',false,
    [
        new Opcion(' Únicamente en el hospital.','a',false) ,
        new Opcion(' En el hospital y en los centros de especialidades que son un servicio más del hospital a pesar de que estén separados físicamente. ','b',true) ,
        new Opcion(' En las consultas externas que dependen del hospital.','c',false) ,
        new Opcion(' En el hospital, en los centros de especialidades y en el domicilio.','d',false) 
    ])
    ,
    new Pregunta('14',14,'* 14. La asistencia médica, quirúrgica, obstétrica y pediátrica está dentro de las prestaciones de:',false,
    [
        new Opcion(' La asistencia especializada en consultas.','a',false) ,
        new Opcion(' La asistencia especializada en hospital de día, médico y quirúrgico.','b',false) ,
        new Opcion(' La hospitalización en régimen de internamiento.','c',true) ,
        new Opcion(' El apoyo a la atención primaria en el alta hospitalaria precoz.','d',false) 
    ])
    ,
    new Pregunta('15',15,'* 15. La asistencia que comprende las actividades asistenciales, diagnósticas, terapéuticas y de rehabilitación destinadas a pacientes que requieren cuidados especializados continuados, incluida la cirugía mayor ambulatoria, se conoce como prestación:',false,
    [
        new Opcion(' Asistencia especializada en consultas.','a',false) ,
        new Opcion(' Asistencia especializada en hospital de día, médico y quirúrgico.','b',true) ,
        new Opcion(' Hospitalización en régimen de internamiento.','c',false) ,
        new Opcion(' Apoyo a la atención primaria en el alta hospitalaria precoz.','d',false) 
    ])
    ,
    new Pregunta('16',16,'* 16. ¿Cuál es el objetivo de la Atención paliativa a enfermos terminales?',false,
    [
        new Opcion(' Garantizar la coordinación con otros servicios necesarios en la asistencia a estos pacientes.','a',false) ,
        new Opcion(' La atención integral al paciente y personas que le cuiden.','b',false) ,
        new Opcion(' Darle tratamientos con finalidad curativa.','c',false) ,
        new Opcion(' Es terapéutico, para conseguir la mejora de la calidad de vida.','d',true) 
    ])
    ,
    new Pregunta('17',17,'* 17. ¿Qué sistemas funcionales se intentarán recuperar mediante la rehabilitación?:',false,
    [
        new Opcion(' El sistema musculoesquelético.','a',false) ,
        new Opcion(' El sistema respiratorio.','b',false) ,
        new Opcion(' El sistema cardiovascular.','c',false) ,
        new Opcion(' Todos los sistemas anteriores.','d',true) 
    ])
    ,
    new Pregunta('18',18,'* 18. Según la Organización Mundial de la Salud, ¿qué misión tiene un hospital?',false,
    [
        new Opcion(' Proporcionar una asistencia médico-sanitaria completa.','a',true) ,
        new Opcion(' Servir de centro educativo universitario.','b',false) ,
        new Opcion(' Atender a pacientes paliativos y terminales.','c',false) ,
        new Opcion(' Realizar las intervenciones quirúrgicas.','d',false) 
    ])
    ,
    new Pregunta('19',19,'* 19. ¿Qué dispone el artículo 69 de la Ley General de Sanidad? ',false,
    [
        new Opcion(' Que los hospitales tendrán como funciones primordiales las de prestación de asistencia especializada.','a',false) ,
        new Opcion(' Que en los Servicios Sanitarios públicos se tenderá hacia la autonomia y control democrático de su gestión.','b',true) ,
        new Opcion(' Que cada Área de Salud estará vinculada o dispondrá al menos de un Hospital General.','c',false) ,
        new Opcion(' Que el Hospital es la institución donde se presta la atención especializada.','d',false) 
    ])
    ,
    new Pregunta('20',20,'* 20. ¿De quién depende las Direcciones Gerencias de los Centros Hospitalarios? ',false,
    [
        new Opcion(' De Gerencia Asistencial de Atención Primaria.','a',false) ,
        new Opcion(' De Gerencia Asistencial de Atención Hospitalaria.','b',true) ,
        new Opcion(' Del Viceconsejero de Sanidad.','c',false) ,
        new Opcion(' Del SERMAS.','d',false) 
    ])
    ,
    new Pregunta('21',21,'* 21. ¿En cuántas divisiones se agrupan los servicios y actividades de los hospitales?:',false,
    [
        new Opcion(' Cuatro.','a',true) ,
        new Opcion(' Cinco.','b',false) ,
        new Opcion(' Tres.','c',false) ,
        new Opcion(' Seis.','d',false) 
    ])
    ,
    new Pregunta('22',22,'* 22. Dentro de los servicios adscritos a la División de Gerencia, cuál de los siguientes no corresponde a la misma:',false,
    [
        new Opcion(' Control de gestión.','a',false) ,
        new Opcion(' Atención al paciente.','b',false) ,
        new Opcion(' Gestión administrativa en general y de la política de personal.','c',true) ,
        new Opcion(' Análisis y planificación.','d',false) 
    ])
    ,
    new Pregunta('23',23,'* 23. Dentro de los servicios adscritos a la División de Enfermería, cuál de los siguientes corresponde a la misma:',false,
    [
        new Opcion(' Hospitalización a domicilio','a',false) ,
        new Opcion(' Hosteleria.','b',false) ,
        new Opcion(' Quirófano.','c',true) ,
        new Opcion(' Servicios centrales.','d',false) 
    ])
    ,
    new Pregunta('24',24,'* 24. Los Centros de especialidades son considerados como:',false,
    [
        new Opcion(' Instituciones de atención ambulatoria.','a',false) ,
        new Opcion(' Instituciones abiertas.','b',false) ,
        new Opcion(' Un servicio más del hospital.','c',false) ,
        new Opcion(' Todas las respuestas anteriores son correctas.','d',true) 
    ])
    ,
    new Pregunta('25',25,'* 25. ¿Qué factores no se tendrán en cuenta para delimitar la Áreas de Salud?',false,
    [
        new Opcion(' El económico.','a',false) ,
        new Opcion(' El demográfico.','b',false) ,
        new Opcion(' El climatológico.','c',false) ,
        new Opcion(' Las respuestas a) y c) son incorrectas.','d',true) 
    ])

  
])
,new Examen('Revision 7,8,9',6,
[
    new Pregunta('1',1,' Según la Ley 41/2002, de 14 de noviembre, quien es el titular del derecho a la información asistencial:',false,
    [
        new Opcion(' El titular del derecho a la información es el paciente. También serán informadas las personas vinculadas a él, por razones familiares o de hecho, en la medida que el paciente lo permita de manera expresa o tácita.','a',true) ,
        new Opcion(' El titular del derecho a la información es el paciente y las personas vinculadas a él, por razones familiares o de hecho, en la medida que el paciente lo permita de manera expresa o tácita.','b',false) ,
        new Opcion(' El titular del derecho a la información es el médico responsable del paciente que podrá informar a las personas vinculadas a él, por razones familiares o de hecho, en la medida que el paciente lo permita de manera expresa o tácita.','c',false) ,
        new Opcion(' El titular del derecho a la información al paciente, es el responsable de la institución sanitaria donde se encuentre el paciente. Y también podrá informar a las personas vinculadas a él, por razones familiares o de hecho, en la medida que el paciente lo permita de manera expresa o tácita.','d',false) 
    ])
    ,
    new Pregunta('2',2,' No forma parte del derecho a la información que se proporciona al paciente',false,
    [
        new Opcion(' La finalidad y la maturaleza de cada intervención.','a',false) ,
        new Opcion(' Los riesgos de cada intervención.','b',false) ,
        new Opcion(' Las consecuencias de cada intervención.','c',false) ,
        new Opcion(' Todas forman parte del derecho a la información.','d',true) 
    ])
    ,
    new Pregunta('3',3,' Según la Ley, la tarjeta sanitaria individual permite acceder a los servicios de:',false,
    [
        new Opcion(' El servicio de salud.','a',false) ,
        new Opcion(' El sistema macional de salud.','b',true) ,
        new Opcion('Los centros sanitarios.','c',false) ,
        new Opcion(' Todas son correctas.','d',false) 
    ])
    ,
    new Pregunta('4',4,' No es una característica de l aTarjeta Sanitaria Individual:',false,
    [
        new Opcion(' Sirve para acceder a cualquier prestación farmaceútica o anitaria.','a',false) ,
        new Opcion(' Se puede solicitar por vía telemática.','b',false) ,
        new Opcion(' Su renovación es automática en todos los casos.','c',true) ,
        new Opcion(' A los 14 años habrá que facilitar el DNI.','d',false) 
    ])
    ,
    new Pregunta('5',5,' Sobre el contenido del derecho a la información asistencial recogido en la Ley 41/2001, de 14 de noviembre (Señala la respuesta incorrecta)',false,
    [
        new Opcion(' Los pacientes tienen derecho a conocer, y también a que se respete su voluntad de no ser informado.','a',false) ,
        new Opcion(' La información, que como regla general se proporcionará verbalmente dejando constancia en la historia clinica, comprende, como mínimo, la finalidad y la naturaleza de cada intervención, sus riesgos y sus consecuencias.','b',false) ,
        new Opcion(' El médico responsable del paciente le garantiza el cumplimiento de su derecho a la información y también los profesionales que le atiendan durante el proceso asistencial.','c',false) ,
        new Opcion(' La información, que como regla general se proporcionará por escrito dejando constancia en la historia clínica, comprendem como mínimo, la finalidad y la naturaleza de cada intervención, sis riesgos y sus consecuencias.','d',true) 
    ])
    ,
    new Pregunta('6',6,' De acuerdo con el Real Decreto 487/1997 y la guía técnica sobre las disposiciones mínimas de seguridad y salud relativas a la manipulación manual de cargas, la evaluación de riesgos ergonómicos por el manejo frecuente de cargas, debe realizarse en todos los puestos de trabajo en que se manipulan más de:',false,
    [
        new Opcion(' 15 kg','a',false) ,
        new Opcion(' 8 kg','b',false) ,
        new Opcion(' 3 Kg','c',true) ,
        new Opcion(' 25 kg','d',false) 
    ])
    ,
    new Pregunta('7',7,' Son competencias de los Delegados de Prevención:',false,
    [
        new Opcion(' Colaborar con la direccion de la empresa en la mejora de la acción preventiva.','a',false) ,
        new Opcion(' Promover y fomentar la cooperación de los trabajadores en la ejecución de la normativa sobre prevención de riesgos laborales.','b',false) ,
        new Opcion(' Ser consultados por el empresario, con carácter previo a su ejecución, de cualquier decisiñon sobre seguridad y salud.','c',false) ,
        new Opcion(' Todas las anteriores son competencias de los Delegados de Prevención.','d',true) 
    ])
    ,
    new Pregunta('8',8,' Señale la respuesta CORRECTA sobre los equipos de proteccion individual:',false,
    [
        new Opcion(' La protección individual debe anteponerse a la adopción de medidas organizativas.','a',false) ,
        new Opcion(' En caso de ser necesario el uso simultáneo de varios equipoe de protección individual, no es imprescindible que sean compatibles entre sí.','b',false) ,
        new Opcion(' En ocasiones es posible la utilización de un equipo de protección personal por varios trabajadores.','c',true) ,
        new Opcion(' El modo de utilizacion del equipo de proteccion individual se realizará de acuerdo a las preferencias del trabajador.','d',false) 
    ])
    ,
    new Pregunta('9',9,' Según el Real Decreto 664/1993 de 12 de mayo, señale la respuesta CORRECTA:',false,
    [
        new Opcion(' Agente biológico del grupo 1: aquel que resulta probable que cause una enfermedad en el hombre.','a',false) ,
        new Opcion(' Agente biológico del grupo 2: aquel que puede causar una enfermedad en el hombre y puede suponer un peligro para los trabajadores, siendo muy probable que se propague a la colectividad y existiendo generalmente profilaxis o tratamiento eficaces..','b',false) ,
        new Opcion(' Agente biológico del grupo 3: aquel que puede causar una enfermedad grave en el hombre y presenta un serio peligro para los trabajadores, con riesgo de que se propague a la colectividad y existiendo generalmente profilaxis o tratamiento eficaz.','c',true) ,
        new Opcion(' Agente biológico del grupo 4: aquel que puede causar una enfermedad grave en el hombre y supone un serio peligro para los trabajadores con muchas probabilidades de que se propague a la colectividad y sin que exista profilaxis pero con tratamiento eficaz.','d',false) 
    ])
    ,
    new Pregunta('10',10,'* 10. Según la ley 41/2002, de 14 de noviembre, básica reguladora de la autonoméa del paciente, se otorgará el consentimiento por representación een los siguientes supuestos... ( señale la respuesta incorrecta):',false,
    [
        new Opcion(' Cuando el paciente no sea capaz de tomar decsiones, a criterio del médico responsable de la asistencia, o su estado fisico o psiquico no le permita hacerse cargo de su situación.','a',false) ,
        new Opcion(' Cuando el paciente esté incapacitado legalmente.','b',false) ,
        new Opcion('  Cuando se trate de menores no incapaces ni incapacitados, pero emancipados o con dieciséis años cumplidos.','c',true) ,
        new Opcion(' Cuando el paciente menor de edad no sea capaz intelectual ni emocionalmente de comprender el alcance de la intervención.','d',false) 
    ])
    ,
    new Pregunta('11',11,'* 11.  Según la ley 41/2002, de 14 de noviembre, básica reguladora de la autonomía del paciente, se otorgará el consentiminto por escrito en los siguientes casos... (señale la respuesta incorrecta):',false,
    [
        new Opcion(' Intervenciones quirúrgicas.','a',false) ,
        new Opcion(' Siempre','b',true) ,
        new Opcion(' Procedimientos diagnósticos y terapéuticos invasores.','c',false) ,
        new Opcion(' En la aplicación de procedimientos que suponen riesgos o inconvenientes de notoria y previsible repercusión negativca sobre la salud del paciente.','d',false) 
    ])
    ,
    new Pregunta('12',12,'* 12. Según la ley 41/2002, de 141 de noviembre, básica reguladora de la autonomía del paciente, una de las siguientes afirmaciones respecto al titular del derecho a la información asistencial es correcta:',false,
    [
        new Opcion(' El paciente no será informado en caso de incapacidad.','a',false) ,
        new Opcion(' El derecho a la información sanitaria de los pacientes puede limitarse por la existencia acreditada de un estado de necesidad terapéutica.','b',true) ,
        new Opcion(' Sólo se informará a los familiares cuando haya consentimiento expreso del paciente.','c',false) ,
        new Opcion(' Sólo se tendrá derecho al acceso a la información epidemiológica cuando implique un riesgo para la salud individual del paciente.','d',false) 
    ])
    ,
    new Pregunta('13',13,'* 13. Según la ley 41/2002, de 14 de noviembre, básica reguladora de la autonomía del paciente, una de estas afirmaciones no es correcta, señálela:',false,
    [
        new Opcion(' Según la normativa vigente el paciente tiene derecho de acceso al contenido integro de su historia clinica.','a',true) ,
        new Opcion('  Según la normativa vigente el paciente tiene derecho de acceso al contenido integro de su historia clínica, con ciertas limitaciones.','b',false) ,
        new Opcion(' El acesso de un tercero a la historia clínica, motivado por un riesgo para su salud, se limitará a los datos pertinentes.','c',false) ,
        new Opcion(' El derecho de acceso del paciente a la historia clínica puede ejrcerse también por representación debidamente acreditada.','d',false) 
    ])
    ,
    new Pregunta('14',14,'* 14.  Según la ley 41/2002, de 14 de noviembre, básica reguladora de la autonomía del paciente, ¿quién regula el procedimiento pra que quede constancia del acceso a la historia clínica y su correspondiente uso?',false,
    [
        new Opcion(' La Administración y Gestión de los centros sanitarios.','a',false) ,
        new Opcion(' El Estado','b',false) ,
        new Opcion(' Las Comunidades Autónomas.','c',true) ,
        new Opcion(' Los Centros de Salud.','d',false) 
    ])
    ,
    new Pregunta('15',15,'* 15. Según la ley 41/2002, de 14 de noviembre, básica reguladora de la autonomía del paciente, el consentimiento informado podrá ser revocado por el paciente:',false,
    [
        new Opcion(' Libremente y por escrito, en cualquier momento.','a',true) ,
        new Opcion(' Cuando lo permita la Dirección del Hospital.','b',false) ,
        new Opcion(' Cuando el facultativo de la autorización.','c',false) ,
        new Opcion(' Cuando no corra riesgo la salud del paciente.','d',false) 
    ])
    ,
    new Pregunta('16',16,'* 16. Conforme al art. 17 de la ley 41/2002, 14 de noviembre, la obligación de conservar la documentación clínica en condiciones que garanticen su correcto mantenimiento y seguridad, corresponde a :',false,
    [
        new Opcion(' Al responsable del archivo y documentación clínica.','a',false) ,
        new Opcion(' Al personal de gestión y servicios.','b',false) ,
        new Opcion(' Al centro sanitario','c',true) ,
        new Opcion(' Auxiliares administrativos.','d',false) 
    ])
    ,
    new Pregunta('17',17,'* 17. Son causas de extinción de la condición de personal estatuario fijo:',false,
    [
        new Opcion(' La sanción disciplinaria firme de separación del servicio.','a',false) ,
        new Opcion(' La jubilación','b',false) ,
        new Opcion(' La renuncia','c',false) ,
        new Opcion(' Las tres anteriores son correctas.','d',true) 
    ])
    ,
    new Pregunta('18',18,'* 18. La sanción de traslado forzoso con cambiio de localidad sin derecho a indemnización y con prohibición temporal de participar en procedimientos de movilidad para reincorporarse a la localidd de procedencia hasta un máximo de cuatro años, sólo podrá imponerse como consecuencia de:',false,
    [
        new Opcion(' Faltas graves.','a',false) ,
        new Opcion(' Faltas muy graves.','b',true) ,
        new Opcion(' Faltas leves.','c',false) ,
        new Opcion(' En faltas graves y muy graves.','d',false) 
    ])
    ,
    new Pregunta('19',19,'* 19. Los datos relativos a la vigilancia de la salud de los trabajadores no podrán ser usados con fines discriminatorios ni en perjuicio del trabajador y vienen recogidos en que artículo de la ley 31/1995.',false,
    [
        new Opcion(' Artículo 15','a',false) ,
        new Opcion(' Artículo 22','b',true) ,
        new Opcion(' Artículo 23','c',false) ,
        new Opcion(' Artículo 16','d',false) 
    ])
    ,
    new Pregunta('20',20,'* 20.  ¿En qué aartículo de la ley de prevención hace mención a los trabajadores especialmente sensibles?',false,
    [
        new Opcion(' Art. 22','a',false) ,
        new Opcion('  Art. 23','b',false) ,
        new Opcion('  Art. 14','c',false) ,
        new Opcion('  Art. 25','d',true) 
    ])
    ,
    new Pregunta('21',21,'* 21.  ¿Qué artículo de la ley 31/1995 trata sobre la protección de la maternidad?',false,
    [
        new Opcion('  Art. 26','a',true) ,
        new Opcion(' Art.25','b',false) ,
        new Opcion(' Art.22','c',false) ,
        new Opcion('  Art. 16','d',false) 
    ])
    ,
    new Pregunta('22',22,'* 22. En relación con la ley 41/2002, de 14 de noviembre, básica reguladora de la autonomía del paciente y de derechos y obligaciones en materia de información y documentación clínica,indique la afirmación correcta:',false,
    [
        new Opcion(' Toda persona tiene derecho a que se respete el carácter confidencial de los datos referentes a su salud, y a que cualquiera pueda acceder a ellos sin previa autorización amparada por la Ley.','a',false) ,
        new Opcion(' Toda persona tiene derecho a respetar el carácter público de los datos referengtes a su salud y a la de sus familiares, sin que nadie pueda acceder a ellos ni aun con la previa autorización amparada por la Ley.','b',false) ,
        new Opcion(' Toda persona tiene derecho a que se respete el carácter confidencial de los datos referentes a su salud, y a que nadie pueda acceder a ellos sin previa autorización amparada por la Ley.','c',true) ,
        new Opcion(' Toda persona tiene derecho a que se le respete el el carácter público de los datos referentes a su salud, y a que cualquiera pueda acceder a ellos con la previa autorización amparada por la Dirección del Cenro SAnitario respectivo.','d',false) 
    ])
    ,
    new Pregunta('23',23,'* 23. Cuál de las siguientes afirmaciones relacionadas con el capítulo II "derecho a la información sanitaria" de la ley 41/2002, reguladora de la autonomía del paciente, es correcta:',false,
    [
        new Opcion('Los pacientes tienen derecho a conocer, con motivo de cualquier actuación en el ámbito de su salud, toda la información disponible sobre la misma, sin ecepciones','a',false) ,
        new Opcion(' El médico responable del paciente, y los profesionales que le atiendan durante el proceso asistencial, garantizarán el cumplimiento de su derecho a la información.','b',true) ,
        new Opcion(' El titulas del derecho a la información es tanto el paciente como las personas vinculadas a él, por razones familiares o de hecho.','c',false) ,
        new Opcion(' La información clínica no forma parte de las actuaciones asistenciales.','d',false) 
    ])
    ,
    new Pregunta('24',24,'* 24. Conforme el art. 71 de la Ley 55/2003, en lo que se refiere al Régimen disciplinario, señale cuál de estas afirmaciones es la correcta:',false,
    [
        new Opcion(' Cuando de la instrucción de un expediente disciplinario resulte la existencia de indicios fundados de criminalidad, se continuará su tramitación.','a',false) ,
        new Opcion(' Los hechos declarados probados por resoluciones judiciales firmes no vinculan a los servicios de salud.','b',false) ,
        new Opcion(' Las sanciones que, en su caso, se impongan, tendrán validez y eficacia en el servicio de salud en el que el interesado se encuentre prestando servicios en el momento de comisión de la falta.','c',false) ,
        new Opcion(' Entre la infracción cometida y la sanción impuesta deberá existir la adecuada proporcionalidad.','d',true) 
    ])
    ,
    new Pregunta('25',25,'* 25. ¿Cómo se le llama al soporte de cualquier tipo o clase que contiene un conjunto de datos e informaciónes de carácter asistencial?',false,
    [
        new Opcion(' Informe de alta médica.','a',false) ,
        new Opcion(' Historia clínica.','b',false) ,
        new Opcion(' Información clínica.','c',false) ,
        new Opcion(' Documentación clínica.','d',true) 
    ])
    ,
    new Pregunta('26',26,'* 26. Según la Ley, la tarjeta sanitaria individual permite acceder a:',false,
    [
        new Opcion(' El servicio de salud de las Comunidades Autónomas.','a',false) ,
        new Opcion(' El sistema nacional de salud','b',true) ,
        new Opcion(' Los centros sanitarios','c',false) ,
        new Opcion(' Todas son correctas.','d',false) 
    ])
    ,
    new Pregunta('27',27,'* 27. Según el art. 18 de la ley 41/2002, de 14 de noviembre, básica reguladora de la autonomía del paciente y de derechos y obligaciones en materia de información y documentación clinica. ¿qué derecho tiene el paciente con respecto al acceso y copia de los documentos de su historioa clínica?',false,
    [
        new Opcion(' Derecho de acceso y copia de todos los documentos que figuren en la Historia Clinica.','a',false) ,
        new Opcion(' Derecho de copia de todos los documentos que figuren en la Historia Clinica con la única salvedad de aquellos que contengan anotaciones subjetivas de los profesionales.','b',false) ,
        new Opcion(' Derecho de acceso a toda la Historia Clínica y copia únicamente del informe clínico de alta y del informe de urgencias.','c',false) ,
        new Opcion(' Derecho de acceso y copia de los datos que figuran en su Historia Clínica,salvo aquellos datos correspondientes a terceras personas que constan en ella recogidos en interés terapéutico del paciente, y a las anotaciones subjetivas de los profesionales participantes, a las que éstos pueden oponer el derecho de acceso.','d',true) 
    ])
    ,
    new Pregunta('28',28,'* 28. La ley 41/2002, de 14 de noviembre, básica reguladora de la autonomía del paciente y de derechos y obligaciones en materia de información y documentación clinica, indica que la conformidad del paciente a que se refiere el consentimiento informado será:',false,
    [
        new Opcion(' Libre, voluntaria y por escrito.','a',false) ,
        new Opcion(' Libre y voluntaria.','b',true) ,
        new Opcion(' Voluntaria e inconsciente.','c',false) ,
        new Opcion(' Meticulosa, libre y voluntaria.','d',false) 
    ])
    ,
    new Pregunta('29',29,'* 29. No forma parte del derecho a la información que se proporciona al paciente',false,
    [
        new Opcion(' La finalidad y la naturaleza de cada intervención','a',false) ,
        new Opcion(' Los riesgos de cada intervención.','b',false) ,
        new Opcion(' Las consecuencias de cada intervención.','c',false) ,
        new Opcion(' Todas forman parte del derecho a la información.','d',true) 
    ])
    ,
    new Pregunta('30',30,'* 30. No es un contenido de la Tarjeta Sanitaria Individual:',false,
    [
        new Opcion(' El DNI','a',false) ,
        new Opcion(' El CITE','b',false) ,
        new Opcion(' El CIPA','c',false) ,
        new Opcion(' Todos son contenidos de este documento.','d',true) 
    ])
    ,
    new Pregunta('31',31,'* 31. Según la Ley de Prevención de Riesgos laborales, es competencia del Comité de Seguridad y Salud:',false,
    [
        new Opcion(' Proyectar y aprobar la elaboración, puesta en práctica y evaluación de los planes y programas de protección de riesgos en la empresa','a',false) ,
        new Opcion(' Participar en la elaboración, puesta en práctica y evaluación de los planes y programas de prevencion de riesgos en la empresa.','b',true) ,
        new Opcion(' Aprobar y elaborar la evaluación de los planes y programas de prevención de riesgos en la empresa.','c',false) ,
        new Opcion('Ninguna es correcta','d',false) 
    ])
    ,
    new Pregunta('32',32,'* 32. Según la Ley de Prevención de Riesgos laborales, es obligatorio del trabajador:',false,
    [
        new Opcion(' Utilizar correctamente los medios y equipos de protección que ha adquirido a su costa, de acuerdo con las instrucciones recibidas de éste.','a',false) ,
        new Opcion('Utilizar correctamente los medios y equipos de proteccion facilitados por el empresario, de acuerdo con las instrucciones recibidas de éste.','b',true) ,
        new Opcion(' No existe obligación del trabajador, son del empresario.','c',false) ,
        new Opcion('Recibir una adecuada formacion de los riesgos laborales.','d',false) 
    ])
    ,
    new Pregunta('33',33,'* 33. Según la Ley de Prevención de Riesgos laborales, es obligación del trabajador:',false,
    [
        new Opcion(' Cooperar con el empresario para que éste pueda garantizar unas condiciones de trabajo que sean seguras.','a',true) ,
        new Opcion(' Exigir al empresario que siempre garantice las condiciones de trabajo sean o no seguras','b',false) ,
        new Opcion(' EWl trabajador no tiene que cooperar con el empresario.','c',false) ,
        new Opcion('Participar activamente en el Comité de Seguridad y Salud, a través de sus repesentantes.','d',false) 
    ])
    ,
    new Pregunta('34',34,'* 34.Según lo dispuesto en el artículo 31 de l aLey 55/2003, de 16 de diciembre, del Estatuto MArco del personal estatuario de los servicios de salud, señale la afirmación correcta:',false,
    [
        new Opcion(' La selección del presonal estatuario fijo se efectuará con carácter general a través del sistema de oposición','a',false) ,
        new Opcion(' La selección del personal estatuario fijo podrá realizarse a traves del sistema de concurso cuando asi resulte mas adecuado en función de las care¡acteristicas socio-culturales del colectivo.','b',false) ,
        new Opcion('La selección del personal estatuario fijo se realizará por el sistema de concurso-oposición únicamente cuando las peculiaridades de las tareas a desarrollar asi lo aconsejen.','c',false) ,
        new Opcion(' La selección del personal estartuario fijo se efectuará con caracter general a través del sistema concurso-oposición.','d',true) 
    ])
    ,
    new Pregunta('35',35,'* 35. En materia sanitaria, la resistencia a suministrar datos, facilitar información o prestar colaboración al órgano encargado del Registro Estatal de Profesiones Sanitarias se tipifica como:',false,
    [
        new Opcion(' Infracción grave','a',true) ,
        new Opcion('Infracción leve','b',false) ,
        new Opcion('Infracción muy grave','c',false) ,
        new Opcion('Apercibimiento','d',false) 
    ])
    ,
    new Pregunta('36',36,'* 36. Según el artículo 71 del Estatuto Marco del personal estatuaria de los servicios de salud, el procedimiento disciplinario se ajustrá en todos los servicios de salud a los principios de:',false,
    [
        new Opcion(' Inmediatez y economñia procesal y tipicidadl','a',false) ,
        new Opcion(' Cooperacion, proporcionalidad y tipicidadl','b',false) ,
        new Opcion('Inmediatez, economía procesal y plen respeto delos derechos y garantñias correspondientesl','c',true) ,
        new Opcion('Economía procesal y cooperación.','d',false) 
    ])
    ,
    new Pregunta('37',37,'* 37. Según el artículo 72 de la Ley 55/2003, de 16 de diciembre, del Estatuto marco del personal estatuaria de los servicios de salud, la exigencia de cualquier tipo de compensación por los servicios prestados a los usuarios de los servicios de salud, se considera una falta disciplinaria de cara´cter:',false,
    [
        new Opcion('Leve','a',false) ,
        new Opcion('Grave','b',false) ,
        new Opcion('Muy grave','c',true) ,
        new Opcion('No se considera una falta','d',false) 
    ])
    ,
    new Pregunta('38',38,'* 38. La falta de respeto con los superiores, compañeros, subordinados y público será:',false,
    [
        new Opcion(' Falta leve','a',false) ,
        new Opcion('Falta grave','b',true) ,
        new Opcion('Falta muy grave','c',false) ,
        new Opcion('No es una falta, es una sanción.','d',false) 
    ])
    ,
    new Pregunta('39',39,'* 39. Los proncipies de acción preventiva mencionados en la ley de prevención de riesgos laborales, vienen establecidos en:',false,
    [
        new Opcion(' en el artículo 15.','a',true) ,
        new Opcion(' en el artículo 22.','b',false) ,
        new Opcion(' en el artículo 11.','c',false) ,
        new Opcion(' en el artículo 19.','d',false) 
    ])
    ,
    new Pregunta('40',40,'* 40. El artículo 22 de la ley de prevención de riesgos laborales 31/1995 trata sobre:',false,
    [
        new Opcion(' protección de menores.','a',false) ,
        new Opcion(' La vigilancia de la salud','b',true) ,
        new Opcion(' Formación de los trabajadores','c',false) ,
        new Opcion(' Riesgo grave e inminente','d',false) 
    ])
    ,
    new Pregunta('41',41,'* 41. Las sanciones impuestas por faltas graves prescriben a los:',false,
    [
        new Opcion(' Cuatro años.','a',false) ,
        new Opcion(' Seis meses','b',false) ,
        new Opcion(' Dos años','c',true) ,
        new Opcion('Seis años','d',false) 
    ])
    ,
    new Pregunta('42',42,'* 42. El quebranto de la reserva de los datos del centro o la intimidad personal de los usuarios y la información de su proceso y estancia en las instituciones o centros sanitarios, ¿es una falta desciplinaria de carácter...?',false,
    [
        new Opcion('Leve','a',false) ,
        new Opcion('Grave, si hay encubrimiento y consentimiento.','b',false) ,
        new Opcion('Grave','c',false) ,
        new Opcion('Muy grave','d',true) 
    ])
    ,
    new Pregunta('43',43,'* 43. El artículo 5 del Estatuto MArco indica que el personal estatuario de los Servicios de SAlud se clasifica en:',false,
    [
        new Opcion(' En personal sanitario y personal de gestión y servicios.','a',false) ,
        new Opcion('En personal fijo y personal temporal','b',false) ,
        new Opcion('En personal universitario, personal con formación profesional y otro tipo de personal','c',false) ,
        new Opcion('Atendiendo a la función desarrollada, al nivel del tñitulo exigido para el ingreso y al tipo de su nombramiento','d',true) 
    ])
    ,
    new Pregunta('44',44,'* 44. El Estatuto Marco del personal estatuario de los Servicios de Salud es aplicable:',false,
    [
        new Opcion(' Exclusivamente al personal sanitario funcionario y al personal sanitario laboral que preste servicios enlos Centros del Sistema NAcional de SAlud.','a',false) ,
        new Opcion('Al personal estatuario que desempeña su función en los Centros e Insatituciones Sanitarias de los Servicios de Salud de las Comunidades Autónomas.','b',false) ,
        new Opcion(' Al personal estatuario que desempeña su función en los Centros e Instituciones Sanitarias de los Servicios Sanitaria de la Adminisración General del EStado.','c',false) ,
        new Opcion(' Al personal estatuario que desempeña su función en los Centros e Instituciones Sanitarias de los Servicios de Salud de las Comunidades Autónomas o en los Centros y Servicios SAnitariios de la Administración General del EStado.','d',true) 
    ])
    ,
    new Pregunta('45',45,'* 45. Las sanciones impuestas por faltas muy graves prescriben:',false,
    [
        new Opcion(' A los seis meses.','a',false) ,
        new Opcion(' A los dos años.','b',false) ,
        new Opcion(' A los cuatro años.','c',true) ,
        new Opcion(' A los seis años.','d',false) 
    ])
    ,
    new Pregunta('46',46,'* 46. El personal estatuario de los sevicios de salud se clasifica atendiendo (señale la incorrecta):',false,
    [
        new Opcion(' Al nivel del titulo académico exigido para el ingreso.','a',false) ,
        new Opcion('A la función desarrollada.','b',false) ,
        new Opcion('Al tipo de su nombramiento.','c',false) ,
        new Opcion('A la categoria profesional y el órgano en el que presta sus servicios.','d',true) 
    ])
    ,
    new Pregunta('47',47,'* 47. Dentro de las medidas de prevención del dolor de esplada en la movilización de enfermos está:',false,
    [
        new Opcion(' Utilización de apoyos.','a',false) ,
        new Opcion('Cargar cerca del cuerpo','b',false) ,
        new Opcion('Espalda recta y piernas flexionadas','c',false) ,
        new Opcion('Todas son correctas.','d',true) 
    ])
    ,
    new Pregunta('48',48,'* 48. La entrada y salida del ascensor con cama o camilla se hará de la siguiente forma:',false,
    [
        new Opcion(' Para entrar en el ascenso entrara primero el celador, tirando de la cabecera de la cama o camilla, entrando los pies lo último.','a',false) ,
        new Opcion('Para salir del ascensor empujará por el cabecero de la cama o camilla, saliendo del mismo los pies del paciente primero.','b',false) ,
        new Opcion('Para entrar empujará la cabecera y para salir tirara de la cama o camilla, teniendo siempre contacto visual con el enfermo.','c',false) ,
        new Opcion('La respuesta correcta es a) y b).','d',true) 
    ])
    ,
    new Pregunta('49',49,'* 49. Atendiendo al nivel académico del título exigido para el ingreso, el personal estatuario sanitario se clasifica de la siguiente forma (señale la incorrecta):',false,
    [
        new Opcion('Personal de formación universitaria','a',false) ,
        new Opcion('Técnicos superiores.','b',false) ,
        new Opcion('otro personal','c',true) ,
        new Opcion('Personal de formación profesional','d',false) 
    ])
    ,
    new Pregunta('50',50,'* 50. El personal estatuario temporal podrá ser:',false,
    [
        new Opcion(' Fijo, de interinidad, de carácter eventual o de sustitución.','a',false) ,
        new Opcion(' De interinidad, o de sustitución.','b',false) ,
        new Opcion('De interinidad o de carácter eventual.','c',false) ,
        new Opcion(' De interinidad, de carácter eventual o de sustitución.','d',true) 
    ])
    ,
    new Pregunta('51',51,'* 51.¿Qué normativa trata sobre la protección de trabajadores ante la exposición a agentes biológicos?',false,
    [
        new Opcion(' RD 488/1997','a',false) ,
        new Opcion(' RD 487/1997','b',false) ,
        new Opcion(' RD 485/1997','c',false) ,
        new Opcion(' RD 664/1997','d',true) 
    ])
    ,
    new Pregunta('52',52,'* 52. El nombramiento de personal estatuario interino se expendirá:',false,
    [
        new Opcion(' Para el desempeño de una plaza vacante de los centros o servicios de salud, cuando sea necesario atender las correspondientes funciones.','a',true) ,
        new Opcion('Para la prestación de servicios complementarios de una reduccion de jornada ordinaria.','b',false) ,
        new Opcion('Cuando se trate de la prestación de servicios determinados de naturaleza temporal, coyuntural o extraordinaria.','c',false) ,
        new Opcion('Cuando sea necesario pra garantizar el funcionamiento permanente y continuado de los centros sanitarios.','d',false) 
    ])
    ,
    new Pregunta('53',53,'* 53. No es un derecho individual del personal estatuario de los servicios de salud:',false,
    [
        new Opcion(' La negociación colectiva, representación y participación en la determinación de las condiciones de trabajo.','a',true) ,
        new Opcion(' La estabilidad en el empleo y al ejercicio o desempeño efectivo de la profesión o funciones que correspondan a su nombramiento.','b',false) ,
        new Opcion('La formación continuada adecuada a la función desempeñada y al  reconocimiento de su cualificación profesional en relación a dichas funciones.','c',false) ,
        new Opcion('La acción social en los términos y ámbitos subjetivos que sedeterminen en las normas, acuerdos o convenios aplicables.','d',false) 
    ])
    ,
    new Pregunta('54',54,'* 54. No es un deber del personal estatuario de los servicios de salud:',false,
    [
        new Opcion(' Ser identificados por su nombre y categoría profesional por los usuario del Sistema NAcional de Salud.','a',false) ,
        new Opcion('Respetar la dignidad e intimidad personal de los usuarios de los servicios de salud, su libre disposición en las decisiones que le conciernen y el resto de los derechos que les reconocen las disposiciones aplicables.','b',false) ,
        new Opcion(' Mantener la debida reserva y confidencialidad de la información y documentación relativa a los centros sanitarios y a los usuarios obtenida, o a la que tenga acceso, en el ejercicio de sus funciones.','c',false) ,
        new Opcion(' No realizar discriminación alguna por motivos de nacimiento, raza, sexo, religión, opinión o cualquier otra circunstancia personal o social, salvo por la condición en virtud de la cual los usuarios de los centros e instituciones sanitarias accedan a los mismos.','d',true) 
    ])
    ,
    new Pregunta('55',55,'* 55. El personal estatuario de los servicios de salud (señale la incorrecta)',false,
    [
        new Opcion(' Tiene derecho a progresar, de forma individualizada, como reconocimiento a su desarrollo profesional en cuanto a conocimientos,, experiencia y cumplimiento de los objetivos de la organizaviòn a la cual prestan sus servicios.','a',false) ,
        new Opcion(' No tiene derecho a la carrera preofesional','b',true) ,
        new Opcion('Todas las respuestas son incorrectas','c',false) ,
        new Opcion(' Tiene derecho a la carrera profesional de acuerdo con lo establecido con carácter general al personal del resto de servicioes públicos.','d',false) 
    ])
    ,
    new Pregunta('56',56,'* 56.La excedencia voluntaria puede ser (señale la incorrecta)',false,
    [
        new Opcion('De oficio','a',false) ,
        new Opcion('Por agrupación familiar','b',false) ,
        new Opcion('Por prestar servicios en el sector público','c',true) ,
        new Opcion('Por interés particular','d',false) 
    ])
    ,
    new Pregunta('57',57,'* 57.El personal en excedencia voluntaria:',false,
    [
        new Opcion('Tendrá derecho al cómputo de tiempo a efectos de antiguedad y carrera, en su caso, al percibo de trienios y a la reserva de la plaza de origen.','a',false) ,
        new Opcion(' No devengará retribuciones, ni le será computable el tiempo que permanezca en tal situación a efectos de carrera profesional o trienios.','b',true) ,
        new Opcion('Tendrá derecho al cómputo de tiempo a efectos de antiguedad y a la reserva de la plaza de origen.','c',false) ,
        new Opcion(' Goza de todos los derechos y queda sometido a todos los deberes','d',false) 
    ])
    ,
    new Pregunta('58',58,'* 58. El celador en la subida y bajada de una rampa con silla de ruedas, actuará...',false,
    [
        new Opcion('Para subir, empujará la silla desde atrás , el paciente irá de cara a la marcha.','a',false) ,
        new Opcion(' PAra bajar, caminara de espladas a la rampa.','b',false) ,
        new Opcion('Las respuestas a) y b) son correctas.','c',true) ,
        new Opcion('Las respuestas a) y b) son incorrectas.','d',false) 
    ])
    ,
    new Pregunta('59',59,'* 59. Se debe tramitar un expediente disciplinario por la imposición de faltas:',false,
    [
        new Opcion('Muy graves','a',false) ,
        new Opcion('Graves','b',false) ,
        new Opcion('Leves','c',false) ,
        new Opcion('Son correctas a) y b).','d',true) 
    ])
    ,
    new Pregunta('60',60,'* 60.No es un criterio aplicable en la imposición de las sanciones la:',false,
    [
        new Opcion('Del grado de intencionalidad','a',false) ,
        new Opcion('El daño al interés publico','b',false) ,
        new Opcion('La negligencia','c',false) ,
        new Opcion('Todas son correctas','d',true) 
    ])

  
])
,new Examen('CCOO (1.2.3)',7,
[
        new Pregunta('1',1,'La coordinación General de la Sanidad es una competencia que se califica en la Ley General de Sanidad como:',false,
        [
            new Opcion(' Exclusiva del Estado, respecto de toda la Nación. ','a',true) ,
            new Opcion(' Exclusiva de cada Comunidad Autónoma, en sus respectivos territorios. ','b',false) ,
            new Opcion(' Compartida entre el estado y las Comunidades Autónomas.  ','c',false) ,
            new Opcion(' La Ley General de Sanidad nada menciona sobre ella.  ','d',false) 
        ])
        ,
        new Pregunta('2',2,'El “Derecho a la protección de la salud” recogido en el art. 43 de la Constitución, es considerado dentro del Texto constitucional:',false,
        [
            new Opcion(' Un derecho fundamental ','a',false) ,
            new Opcion(' Un derecho y un deber ','b',false) ,
            new Opcion(' Uno de los principios rectores de la política social reconocido en el Cap. III del Titulo Primero de la Constitución ','c',true) ,
            new Opcion(' Todas las anteriores son correctas ','d',false) 
        ])
        ,
        new Pregunta('3',3,'Según el artículo 1.2 de la Ley 14/1986, de 25 de abril, general de sanidad, son titulares del derecho a la protección de la salud y a la atención sanitaria:',false,
        [
            new Opcion(' Todos los ciudadanos españoles. ','a',false) ,
            new Opcion(' Los ciudadanos españoles mayores de edad. ','b',false) ,
            new Opcion(' Los ciudadanos españoles y los ciudadanos extranjeros que tengan establecida su residencia en el territorio nacional. ','c',true) ,
            new Opcion(' Los ciudadanos extranjeros no tienen derecho en ningún caso a la asistencia sanitaria. ','d',false) 
        ])
        ,
        new Pregunta('4',4,'Indica cuál de los siguientes es un derecho de los usuarios con respecto a las distintas administraciones públicas sanitarias según la ley 14/1986, de 25 de abril, general de sanidad:',false,
        [
            new Opcion(' A la información sobre los servicios sanitarios a que puede acceder y sobre los requisitos necesarios para su uso. ','a',true) ,
            new Opcion(' A tener acceso a la historia clínica de aquellos pacientes con los que se guarde relación de consanguinidad hasta el segundo grado. ','b',false) ,
            new Opcion(' A participar en la actividad sanitaria del centro de salud que se le asigne. ','c',false) ,
            new Opcion(' Todas las respuestas anteriores son correctas. ','d',false) 
        ])
        ,
        new Pregunta('5',5,'La normativa principal que regula la Ordenación Sanitaria de la Comunidad de Madrid es:',false,
        [
            new Opcion(' El Decreto 12/2001, de 21 de diciembre. ','a',false) ,
            new Opcion(' La Ley 12/2001, de 21 de diciembre. ','b',true) ,
            new Opcion(' La Ley 12/2001, de 26 de diciembre. ','c',false) ,
            new Opcion(' La Orden de la Consejería de Sanidad de la Comunidad de Madrid de de 21 de diciembre de 2001. ','d',false) 
        ])
        ,
        new Pregunta('6',6,'Según el artículo 4 de la ley que regula la Ordenación Sanitaria de la Comunidad de Madrid, el Sistema Sanitario se organiza en:',false,
        [
            new Opcion(' Un Área Sanitaria Única. ','a',true) ,
            new Opcion(' Once Áreas Sanitarias. ','b',false) ,
            new Opcion(' Quince Áreas Sanitarias. ','c',false) ,
            new Opcion(' Diez Áreas Sanitarias, una por Distrito. ','d',false) 
        ])
        ,
        new Pregunta('7',7,'La separación de las funciones de autoridad sanitaria, aseguramiento, compra y provisión de servicios sanitarios, constituye un principio del Sistema Sanitario de la Comunidad de Madrid de:',false,
        [
            new Opcion(' Eficacia. ','a',false) ,
            new Opcion(' Eficiencia. ','b',false) ,
            new Opcion(' Organización y funcionamiento. ','c',true) ,
            new Opcion(' Calidad. ','d',false) 
        ])
        ,
        new Pregunta('8',8,'La planificación y programación del Sistema Sanitario es competencia de:',false,
        [
            new Opcion(' La Asamblea de la Comunidad de Madrid. ','a',false) ,
            new Opcion(' La Consejería de Sanidad. ','b',false) ,
            new Opcion(' El Gobierno de la Comunidad de Madrid. ','c',true) ,
            new Opcion(' Ninguna de las respuestas anteriores es correcta. ','d',false) 
        ])
        ,
        new Pregunta('9',9,'El Estatuto de Autonomía de Madrid se aprobó como:',false,
        [
            new Opcion(' Ley 5/1985. ','a',false) ,
            new Opcion(' Ley Orgánica 5/1985. ','b',false) ,
            new Opcion(' Ley Orgánica 3/1983. ','c',true) ,
            new Opcion(' Decreto Ley 3/1985. ','d',false) 
        ])
        ,
        new Pregunta('10',10,'La Asamblea de Madrid estará compuesta por un Diputado:',false,
        [
            new Opcion(' Por cada 25.000 habitantes o fracción superior a 10.000. ','a',false) ,
            new Opcion(' Por cada 40.000 habitantes o fracción superior a 20.000. ','b',false) ,
            new Opcion(' Por cada 50.000 habitantes o fracción superior a 25.000. ','c',true) ,
            new Opcion(' Por cada 75.000 habitantes o fracción superior a 50.000. ','d',false) 
        ])
        ,
        new Pregunta('11',11,'En su condición de Presidente del Consejo de Gobierno, al Presidente de la Comunidad de Madrid no le corresponde:',false,
        [
            new Opcion(' Plantear ante la Asamblea, previa deliberación del Consejo de Gobierno, la cuestión de confianza. ','a',false) ,
            new Opcion(' Solicitar, previo acuerdo del Consejo de Gobierno, que la Asamblea se reúna en sesión ordinaria. ','b',true) ,
            new Opcion(' La autorización de los gastos que le correspondan según las normas vigentes. ','c',false) ,
            new Opcion(' Velar por el cumplimiento de los Acuerdos del Consejo de Gobierno y de las Comisiones Delegadas. ','d',false) 
        ])
        ,
        new Pregunta('12',12,'Constituirán la Administración Institucional de la Comunidad de Madrid:',false,
        [
            new Opcion(' Los Órganos Delegados. ','a',false) ,
            new Opcion(' Las Empresas Públicas. ','b',true) ,
            new Opcion(' Los Órganos de Gestión con personalidad jurídica distinta de la Comunidad. ','c',false) ,
            new Opcion(' Todas las contestaciones anteriores son correctas. ','d',false) 
        ])
        ,
        new Pregunta('13',13,'¿En qué artículo de la Constitución Española se reconoce el derecho a la protección de la salud?',false,
        [
            new Opcion(' En el artículo 41 ','a',false) ,
            new Opcion(' En el artículo 43 ','b',true) ,
            new Opcion(' En el artículo 40 ','c',false) ,
            new Opcion(' En el artículo 33 ','d',false) 
        ])
        ,
        new Pregunta('14',14,'La promoción de la información, formación y participación de los trabajadores y empresarios en los planes, programas y actuaciones sanitarias en el ámbito de la salud laboral es una función de:',false,
        [
            new Opcion(' La Asamblea de la Comunidad de Madrid. ','a',false) ,
            new Opcion(' La Consejería de Sanidad. ','b',true) ,
            new Opcion(' El Gobierno de la Comunidad de Madrid. ','c',false) ,
            new Opcion(' Ninguna de las respuestas anteriores es correcta. ','d',false) 
        ])
        ,
        new Pregunta('15',15,'La autoridad sanitaria garantizará el derecho a recibir información sanitaria por medio de las siguientes actuaciones:',false,
        [
            new Opcion(' Fomento del autocontrol responsable en la información sanitaria. ','a',false) ,
            new Opcion(' Control directo de la publicidad sanitaria en los casos y en la forma que reglamentariamente se determine. ','b',false) ,
            new Opcion(' Desarrollo de redes de información sanitaria integrada de calidad. ','c',false) ,
            new Opcion(' Todas las respuestas anteriores son correctas. ','d',true) 
        ])
        ,
        new Pregunta('16',16,'Según la Ley 14/1986, general de sanidad, ¿cuál de los siguientes no es un derecho con respecto a las distintas administraciones públicas sanitarias?',false,
        [
            new Opcion(' A la confidencialidad de toda la información relacionada con su estancia en instituciones sanitarias privadas que colaboren con el sistema público. ','a',false) ,
            new Opcion(' A que se le asigne un médico, que será interlocutor principal con el equipo asistencial. ','b',false) ,
            new Opcion(' A la información sobre los servicios sanitarios a los que puede acceder, en el formato solicitado por el interesado. ','c',true) ,
            new Opcion(' A utilizar las vías de reclamación y de propuesta de sugerencias, en los plazos previstos. ','d',false) 
        ])
        ,
        new Pregunta('17',17,'No es obligación del ciudadano, según el artículo 11 de la Ley general de sanidad:',false,
        [
            new Opcion(' Cuidar las instalaciones y colaborar en el mantenimiento de la habitabilidad de las instituciones sanitarias. ','a',false) ,
            new Opcion(' Cumplir las prescripciones de naturaleza sanitaria determinadas por los servicios sanitarios. ','b',false) ,
            new Opcion(' Utilizar las vías de reclamación y de propuesta de sugerencias en los plazos previstos. ','c',true) ,
            new Opcion(' Responsabilizarse del uso adecuado de las prestaciones ofrecidas por el sistema sanitario. ','d',false) 
        ])
        ,
        new Pregunta('18',18,'Según el artículo 56 de la Ley general de sanidad, ¿quién delimita el marco territorial que abarca cada zona de salud?',false,
        [
            new Opcion(' El Estado. ','a',false) ,
            new Opcion(' Las Entidades Locales. ','b',false) ,
            new Opcion(' La Comunidad Autónoma. ','c',true) ,
            new Opcion(' El Ministerio de Sanidad. ','d',false) 
        ])
        ,
        new Pregunta('19',19,'Según el artículo 55 de la Ley 14/1986, de 25 de abril, ¿a quién corresponde regular la organización, funciones y asignación de medios materiales y personales de cada uno de los servicios de salud?',false,
        [
            new Opcion(' A las Diputaciones Provinciales. ','a',false) ,
            new Opcion(' A los Ayuntamientos. ','b',false) ,
            new Opcion(' Al Estado a través del Ministerio de Sanidad. ','c',false) ,
            new Opcion(' A las Comunidades Autónomas. ','d',true) 
        ])
        ,
        new Pregunta('20',20,'Para la distribución de escaños en la Asamblea de Madrid, sólo serán tenidas en cuenta las listas que hayan obtenido:',false,
        [
            new Opcion(' Al menos, el 1 por 100 de los sufragios válidamente emitidos.  ','a',false) ,
            new Opcion(' Al menos, el 5 por 100 de los sufragios válidamente emitidos.  ','b',true) ,
            new Opcion(' Más del 2 por 100 de los sufragios válidamente emitidos.  ','c',false) ,
            new Opcion(' Más del 0.5 por 100 de los sufragios válidamente emitidos.  ','d',false) 
        ])
        ,
        new Pregunta('21',21,'Los principios rectores de la política social y económica se regulan en el siguiente Capitulo y Titulo de la Constitución:',false,
        [
            new Opcion(' Segundo del Primero ','a',false) ,
            new Opcion(' Tercero del Primero ','b',true) ,
            new Opcion(' Tercero del Preliminar ','c',false) ,
            new Opcion(' Segundo del Tercero ','d',false) 
        ])
        ,
        new Pregunta('22',22,'Según el Estatuto de Autonomía de la Comunidad de Madrid:',false,
        [
            new Opcion(' La Comunidad de Madrid podrá establecer acuerdos de cooperación con otras Comunidades Autónomas, previa autorización de las Cortes Generales.  ','a',true) ,
            new Opcion(' La Comunidad de Madrid no podrá establecer acuerdos de cooperación con otras Comunidades Autónomas.  ','b',false) ,
            new Opcion(' La Comunidad de Madrid podrá establecer acuerdos de cooperación con otras Comunidades Autónomas, sin autorización de las Cortes Generales.  ','c',false) ,
            new Opcion(' Ninguna respuesta es correcta.  ','d',false) 
        ])
        ,
        new Pregunta('23',23,'Ordenar la publicación en el “Boletín Oficial de la Comunidad de Madrid” del nombramiento de Presidente del Tribunal Superior de Justicia de Madrid, es competencia de:',false,
        [
            new Opcion(' Consejero de Justicia. ','a',false) ,
            new Opcion(' Presidente de la Asamblea de la Comunidad de Madrid. ','b',false) ,
            new Opcion(' El Rey. ','c',false) ,
            new Opcion(' Presidente de la Comunidad de Madrid. ','d',true) 
        ])
        ,
        new Pregunta('24',24,'Las normas con rango de ley emanadas del Consejo de Gobierno son denominadas:',false,
        [
            new Opcion(' Decretos. ','a',false) ,
            new Opcion(' Reales Decretos. ','b',false) ,
            new Opcion(' Decretos Legislativos. ','c',true) ,
            new Opcion(' Decretos Leyes.  ','d',false) 
        ])
        ,
        new Pregunta('25',25,'El derecho de los usuarios a la información sobre los servicios sanitarios se reconoce:',false,
        [
            new Opcion(' Por la Organización Mundial de la Salud. ','a',false) ,
            new Opcion(' En la Constitución. ','b',false) ,
            new Opcion(' En la Ley General de Sanidad. ','c',true) ,
            new Opcion(' En la Ley General de Salud. ','d',false) 
        ])
        ,
        new Pregunta('26',26,'La Ley General de Sanidad se compone de:',false,
        [
            new Opcion(' Dos Títulos Preliminares y siete títulos más. ','a',false) ,
            new Opcion(' De ocho Títulos. ','b',false) ,
            new Opcion(' Un Título preliminar y siete Títulos más. ','c',true) ,
            new Opcion(' Ninguna es correcta. ','d',false) 
        ])
        ,
        new Pregunta('27',27,'El Título II de la Ley General de Sanidad hace referencia a:',false,
        [
            new Opcion(' A la Salud Mental. ','a',false) ,
            new Opcion(' A las competencias de las administraciones públicas. ','b',true) ,
            new Opcion(' A la estructura del Sistema Sanitario. ','c',false) ,
            new Opcion(' A las actividades Sanitarias privadas. ','d',false) 
        ])
        ,
        new Pregunta('28',28,'¿En qué capítulo de la ley general sanitaria se encuentran recogidos los servicios de salud de las comunidades autónomas?',false,
        [
            new Opcion(' Capítulo II del Título III. ','a',true) ,
            new Opcion(' Capítulo II del Título II. ','b',false) ,
            new Opcion(' Capítulo III del Título II. ','c',false) ,
            new Opcion(' Capítulo III del Título III. ','d',false) 
        ])
        ,
        new Pregunta('29',29,'El Consejo Interterritorial del S.N.S. ha sido creado por:',false,
        [
            new Opcion(' Real Decreto. ','a',false) ,
            new Opcion(' La Ley General de Sanidad. ','b',true) ,
            new Opcion(' Acuerdo entre el Estado y las CC.AA. ','c',false) ,
            new Opcion(' Orden Ministerial. ','d',false) 
        ])
        ,
        new Pregunta('30',30,'Según la Ley general de sanidad, los medios y actuaciones del sistema sanitario español estarán orientados además de a promover la salud a:',false,
        [
            new Opcion(' El control del consumo alimentario. ','a',false) ,
            new Opcion(' El conocimiento de terapia de nuevas patologías. ','b',false) ,
            new Opcion(' La prevención de enfermedades. ','c',true) ,
            new Opcion(' La investigación y desarrollo de la ciencia. ','d',false) 
        ])
        ,
        new Pregunta('31',31,'El modelo elegido por la Ley General de Sanidad, para implantar el Sistema Nacional de la Salud es el de:',false,
        [
            new Opcion(' La Zona de Salud ','a',false) ,
            new Opcion(' El Área de Salud ','b',false) ,
            new Opcion(' La Zona Básica de Salud ','c',false) ,
            new Opcion(' Las Comunidades Autónomas ','d',true) 
        ])
        ,
        new Pregunta('32',32,'El Órgano de gobierno del Servicio Madrileño de Salud (SERMAS) es:',false,
        [
            new Opcion(' El Director General. ','a',false) ,
            new Opcion(' El Instituto Madrileño de la Salud. ','b',false) ,
            new Opcion(' El Instituto de Salud Pública. ','c',false) ,
            new Opcion(' El Consejo de Administración del SERMAS. ','d',true) 
        ])
        ,
        new Pregunta('33',33,'El Director General del SERMAS será nombrado por:',false,
        [
            new Opcion(' El Consejo de Gobierno de la Comunidad de Madrid. ','a',true) ,
            new Opcion(' El Consejero de Sanidad, oído el Consejo de Administración. ','b',false) ,
            new Opcion(' El Consejo de Administración del SERMAS. ','c',false) ,
            new Opcion(' El Consejero de Sanidad, a propuesta del Consejo de Gobierno de la Comunidad de Madrid. ','d',false) 
        ])
        ,
        new Pregunta('34',34,'No es un derecho del ciudadano el de:',false,
        [
            new Opcion(' La libre elección de medico ','a',false) ,
            new Opcion(' La libre elección de Centro sanitario ','b',false) ,
            new Opcion(' conocer la identidad de su medico ','c',false) ,
            new Opcion(' Todos son derechos del ciudadano. ','d',true) 
        ])
        ,
        new Pregunta('35',35,'No es un deber de los ciudadanos:',false,
        [
            new Opcion(' Cumplir las prescripciones generales en materia de salud ','a',false) ,
            new Opcion(' Firmar el documento en el que consta su rechazo al procedimiento clínico requerido. ','b',false) ,
            new Opcion(' A mantener la confidencialidad de sus datos sanitarios. ','c',true) ,
            new Opcion(' Todos son deberes del ciudadano. ','d',false) 
        ])
        ,
        new Pregunta('36',36,'No es una de las características de la información sanitaria la de que sea:',false,
        [
            new Opcion(' Equilibrada ','a',false) ,
            new Opcion(' De calidad ','b',false) ,
            new Opcion(' Relevante ','c',false) ,
            new Opcion(' Todas son características de esta información ','d',true) 
        ])
        ,
        new Pregunta('37',37,'¿Quién nombra al Presidente de la Comunidad de Madrid, de conformidad con su Estatuto de Autonomía?',false,
        [
            new Opcion(' La Asamblea de Madrid. ','a',false) ,
            new Opcion(' El Congreso. ','b',false) ,
            new Opcion(' El Senado. ','c',false) ,
            new Opcion(' El Rey. ','d',true) 
        ])
        ,
        new Pregunta('38',38,'Según el Estatuto de Autonomía, es necesario ser diputado de la Asamblea de la Comunidad de Madrid, para:',false,
        [
            new Opcion(' Ser Vicepresidente del Gobierno de la Comunidad de Madrid. ','a',false) ,
            new Opcion(' Ser Consejero del Gobierno de la Comunidad de Madrid, pero no para ser Vicepresidente del mismo. ','b',false) ,
            new Opcion(' Ser tanto Vicepresidente como Consejero del Gobierno de la Comunidad de Madrid. ','c',false) ,
            new Opcion(' Ninguna respuesta es correcta. ','d',true) 
        ])
        ,
        new Pregunta('39',39,'Sobre el derecho a la protección de la salud es correcto afirmar que:',false,
        [
            new Opcion(' No se encuentra comprendido entre los principios rectores de la política social y económica. ','a',false) ,
            new Opcion(' Es de gran importancia ya que debe informar y ser respetado por la legislación ordinaria y de ahí que goce de una protección directa. ','b',false) ,
            new Opcion(' Al gozar de una protección directa, puede ser alegado por los ciudadanos antes los tribunales en todo momento. ','c',false) ,
            new Opcion(' Los derechos y deberes de todos al respecto deben regularse por Ley. ','d',true) 
        ])
        ,
        new Pregunta('40',40,'En relación al Presidente de la Comunidad de Madrid, y de acuerdo con lo previsto en el Estatuto de Autonomía, señale la afirmación correcta:',false,
        [
            new Opcion(' Puede plantear ante la Asamblea una moción de censura sobre su  programa. ','a',false) ,
            new Opcion(' Es políticamente responsable ante el pueblo de Madrid. ','b',false) ,
            new Opcion(' Previa deliberación del Gobierno, y bajo su exclusiva responsabilidad, podrá acordar la disolución de la Asamblea con anticipación al término natural de la legislatura. ','c',true) ,
            new Opcion(' Podrá acordar la disolución de la Asamblea durante el primer período de sesiones de la legislatura. ','d',false) 
        ])
        ,
        new Pregunta('41',41,'En atención a lo dispuesto en el Estatuto de Autonomía, y en cuanto a la disolución de la Asamblea, el Presidente de la Comunidad de Madrid:',false,
        [
            new Opcion(' Podrá acordar la disolución de la Asamblea durante el primer período de sesiones de la legislatura.  ','a',false) ,
            new Opcion(' No podrá acordar la disolución de la Asamblea cuando esté convocado un proceso electoral estatal. ','b',true) ,
            new Opcion(' Podrá acordar la disolución de la Asamblea cuando reste menos de un año para la terminación de la legislatura.  ','c',false) ,
            new Opcion(' No podrá, en ningún caso, acordar la disolución de la Asamblea con anticipación al término natural de la legislatura. ','d',false) 
        ])
        ,
        new Pregunta('42',42,'En atención a lo establecido en el Estatuto de Autonomía, el Gobierno de la Comunidad de Madrid:',false,
        [
            new Opcion(' Responde políticamente ante el pueblo de Madrid de forma solidaria. ','a',false) ,
            new Opcion(' Estará compuesto por el Presidente, el o los Viceconsejeros, en su caso, y los Consejeros. ','b',false) ,
            new Opcion(' Es el órgano colegiado que dirige la política de la Comunidad de Madrid. ','c',true) ,
            new Opcion(' Responde políticamente ante la Asamblea de forma mancomunada. ','d',false) 
        ])
        ,
        new Pregunta('43',43,'La sesión constitutiva de la Asamblea tendrá lugar:',false,
        [
            new Opcion(' Dentro de los veinte días siguientes a la proclamación de los resulta dos electorales. ','a',false) ,
            new Opcion(' Dentro de los quince días siguientes a la proclamación de los resultados electorales. ','b',false) ,
            new Opcion(' Dentro de los veinticinco días siguientes a la proclamación de los resultados electorales. ','c',true) ,
            new Opcion(' Dentro del mes siguiente a la proclamación de los resultados  electorales. ','d',false) 
        ])
        ,
        new Pregunta('44',44,'Los poderes de la Comunidad de Madrid se ejercen a través de sus instituciones de autogobierno, que son:',false,
        [
            new Opcion(' La Asamblea y el Presidente de la Comunidad. ','a',false) ,
            new Opcion(' El Gobierno de la Asamblea y el Presidente de la Comunidad. ','b',false) ,
            new Opcion(' La Asamblea, el Gobierno y el Presidente de la Comunidad. ','c',true) ,
            new Opcion(' Todas las respuestas son falsas. ','d',false) 
        ])
        ,
        new Pregunta('45',45,'Los servicios sanitarios, según la Ley 14/1986, de 25 de abril, general de sanidad, adecuarán su organización y funcionamiento a los principios de:',false,
        [
            new Opcion(' Eficiencia, economía y flexibilidad. ','a',false) ,
            new Opcion(' Eficacia, eficiencia, efectividad y flexibilidad. ','b',false) ,
            new Opcion(' Eficacia, celeridad, economía y transparencia. ','c',false) ,
            new Opcion(' Eficacia, celeridad, economía y flexibilidad. ','d',true) 
        ])
        ,
        new Pregunta('46',46,'Conforme a la Ley General de Sanidad, en todo caso, las Áreas de Salud deberán desarrollar sus actividades en el ámbito de:',false,
        [
            new Opcion(' La atención primaria de salud y atención especializada. ','a',true) ,
            new Opcion(' La inspección sanitaria. ','b',false) ,
            new Opcion(' La elaboración del Reglamento de la salud del Área. ','c',false) ,
            new Opcion(' El plan de salud del Área. ','d',false) 
        ])
        ,
        new Pregunta('47',47,'La Ley 14/86 General de Sanidad establece que:',false,
        [
            new Opcion(' El Sistema Nacional de Salud es el conjunto de los Servicios de Salud de la Administración del Estado y de los Servicios de Salud de las Comunidades Autónomas. ','a',true) ,
            new Opcion(' El Sistema Nacional de Salud es el conjunto de los Servicios de Salud de la Administración de las Comunidades Autónomas. ','b',false) ,
            new Opcion(' El Sistema Nacional de Salud es el conjunto de los Servicios de Salud de la Administración del Estado. ','c',false) ,
            new Opcion(' El Sistema Nacional de Salud es el conjunto de los Servicios de Salud de la Administración Local. ','d',false) 
        ])
        ,
        new Pregunta('48',48,'El profesional que debe proporcionar la información asistencial necesaria al paciente para que otorgue el consentimiento informado es:',false,
        [
            new Opcion(' el sanitario no facultativo ','a',false) ,
            new Opcion(' el sanitario facultativo ','b',true) ,
            new Opcion(' Ambos son competentes ','c',false) ,
            new Opcion(' Todo el personal, pero atendiendo las circunstancias de cada caso. ','d',false) 
        ])
        ,
        new Pregunta('49',49,'El grado de confidencialidad de los datos contenidos en la historia clínica lo decide:',false,
        [
            new Opcion(' El personal sanitario ','a',false) ,
            new Opcion(' El personal sanitario facultativo ','b',false) ,
            new Opcion(' El propio paciente ','c',true) ,
            new Opcion(' Son correctas ','d',false) 
        ])
        ,
        new Pregunta('50',50,'No es un fin del SERMAS el de:',false,
        [
            new Opcion(' La adecuada continuidad entre la atención primaria y la atención especializada ','a',false) ,
            new Opcion(' La coordinación de las gerencias de las áreas sanitarias ','b',false) ,
            new Opcion(' El acercamiento y la accesibilidad de los servicios a la población. ','c',false) ,
            new Opcion(' La gestión de los recursos materiales y financieros. ','d',true) 
        ])
        ,
        new Pregunta('51',51,'Las competencias relativas a la sanidad quedan expuestas en la Constitución Española en el artículo:',false,
        [
            new Opcion(' 149.1.16 ','a',true) ,
            new Opcion(' 149.1.17 ','b',false) ,
            new Opcion(' 146.1.17 ','c',false) ,
            new Opcion(' 146.1.19 ','d',false) 
        ])
        ,
        new Pregunta('52',52,'Señale en que artículo de la Constitución se reconoce el derecho a la protección de la salud y en cual se recoge la existencia de un régimen publico de Seguridad Social. ',false,
        [
            new Opcion(' Arts. 41 y 149.1.16 de la Constitución ','a',false) ,
            new Opcion(' Arts. 43 y 41 de la Constitución ','b',true) ,
            new Opcion(' Arts. 43 y 146.11.16 ','c',false) ,
            new Opcion(' En el texto constitucional no se recoge ninguno de esos derechos, es la Ley General de Sanidad y la Ley General de Seguridad Social quienes regulan dichas materias. ','d',false) 
        ])
        ,
        new Pregunta('53',53,'La Comunidad de Madrid se organiza territorialmente en:',false,
        [
            new Opcion(' Municipios. ','a',true) ,
            new Opcion(' Municipios, regiones y pueblos. ','b',false) ,
            new Opcion(' En áreas metropolitanas, pueblos y municipios. ','c',false) ,
            new Opcion(' En municipios y regiones, siendo la más importante de éstas la de la Sierra Norte. ','d',false) 
        ])
        ,
        new Pregunta('54',54,'Conforme al apartado 2 del artículo 1 del Estatuto de Autonomía, la Comunidad Autónoma de Madrid se denomina:',false,
        [
            new Opcion(' Comunidad Autónoma de Madrid. ','a',false) ,
            new Opcion(' Comunidad de Madrid. ','b',true) ,
            new Opcion(' Comunidad Autonómica de Madrid. ','c',false) ,
            new Opcion(' No se recoge denominación específica de la Comunidad Autónoma en el  Estatuto de Autonomía. ','d',false) 
        ])
        ,
        new Pregunta('55',55,'Celebradas las elecciones a la Asamblea de Madrid, ésta se reunirá en sesión constitutiva:',false,
        [
            new Opcion(' Que será inicialmente presida por los Diputados de mayor y menor edad de los presentes, asistidos por un Secretario. ','a',false) ,
            new Opcion(' Entre los 30 y 60 días siguientes a la celebración de elecciones. ','b',false) ,
            new Opcion(' La constitución de la Asamblea será notificada por el Presidente al Rey, al  Senado, al Gobierno de la Nación y al Presidente de la Comunidad de Madrid. ','c',true) ,
            new Opcion(' Todas las respuestas son correctas. ','d',false) 
        ])
        ,
        new Pregunta('56',56,'No es un criterio para delimitar las Áreas Sanitarias el:',false,
        [
            new Opcion(' Socioeconómico ','a',false) ,
            new Opcion(' Demográfico ','b',false) ,
            new Opcion(' Geográfico ','c',false) ,
            new Opcion(' Todos son criterios aplicables ','d',true) 
        ])
        ,
        new Pregunta('57',57,'La Asamblea puede exigir responsabilidad política del Presidente o del Gobierno de la Comunidad de Madrid mediante la adopción por mayoría absoluta de la moción de censura. Ésta habrá de ser propuesta por:',false,
        [
            new Opcion(' Al menos un 15% de los diputados. ','a',true) ,
            new Opcion(' Un 10% de los diputados. ','b',false) ,
            new Opcion(' Al menos un 10% de los diputados. ','c',false) ,
            new Opcion(' Ninguna de las anteriores es correcta. ','d',false) 
        ])
        ,
        new Pregunta('58',58,'Una de las siguientes afirmaciones según el Estatuto de Autonomía de la  Comunidad de Madrid es correcta:',false,
        [
            new Opcion(' El Presidente de la Comunidad es responsable administrativamente ante la Asamblea.  ','a',false) ,
            new Opcion(' El Presidente de la Comunidad es el representante del Gobierno en la Comunidad de Madrid. ','b',false) ,
            new Opcion(' El Presidente de la Comunidad ostenta la suprema representación de la Comunidad Autónoma. ','c',true) ,
            new Opcion(' Todas las respuestas son falsas. ','d',false) 
        ])
        ,
        new Pregunta('59',59,'Señale cuál de las funciones enumeradas no corresponde al Gobierno de la Comunidad de Madrid según lo establecido en el Estatuto de Autonomía de la Comunidad de Madrid:',false,
        [
            new Opcion(' Dirigir la política de la Comunidad. ','a',false) ,
            new Opcion(' Promulgar en nombre del Rey Decretos Legislativos. ','b',true) ,
            new Opcion(' Ejercitar la potestad reglamentaria en materias no reservadas en el Estatuto a la Asamblea. ','c',false) ,
            new Opcion(' Funciones ejecutivas y administrativas. ','d',false) 
        ])
        ,
        new Pregunta('60',60,'El Estatuto de Autonomía de la Comunidad de Madrid tiene:',false,
        [
            new Opcion(' Dos disposiciones adicionales, siete disposiciones transitorias y una disposición final.  ','a',true) ,
            new Opcion(' Tres disposiciones adicionales, siete disposiciones transitorias y dos disposiciones finales.  ','b',false) ,
            new Opcion(' Dos disposiciones adicionales, tres disposiciones transitorias y una disposición final.  ','c',false) ,
            new Opcion(' Una disposición adicional, seis disposiciones transitorias y una disposición final.  ','d',false) 
        ])
])
,
new Examen('CCOO (4.5.6)',8,
[
        new Pregunta('1',1,' En la actualidad, la Atención Especializada se presta en régimen de:',false,
        [
            new Opcion(' Ambulatorio y de urgencias ','a',false) ,
            new Opcion(' Asistencia en régimen de internamiento ','b',false) ,
            new Opcion(' En régimen domiciliario y rehabilitación ','c',false) ,
            new Opcion(' Todas son asistencias especializadas ','d',true) 
        ])
        ,
        new Pregunta('2',2,' La Comisión Central de Garantía de la Calidad deberá reunirse como mínimo al año:',false,
        [
            new Opcion(' Seis veces ','a',true) ,
            new Opcion(' Una vez al semestre ','b',false) ,
            new Opcion(' Una vez al año ','c',false) ,
            new Opcion(' Siempre que lo solicite el Gerente ','d',false) 
        ])
        ,
        new Pregunta('3',3,' Analizar la información recogida por el Servicio de Atención al Paciente es una función de:',false,
        [
            new Opcion(' Comisión Central de Garantía de la Calidad ','a',false) ,
            new Opcion(' Comisión de Bienestar Social ','b',true) ,
            new Opcion(' Junta Técnico-Asistencial ','c',false) ,
            new Opcion(' Comisión de Dirección ','d',false) 
        ])
        ,
        new Pregunta('4',4,' El Título Preliminar de la Ley para la igualdad efectiva de hombres y mujeres, recoge:',false,
        [
            new Opcion(' El objeto y ámbito de la Ley Orgánica ','a',true) ,
            new Opcion(' El principio de igualdad y la no discriminación ','b',false) ,
            new Opcion(' Los criterios de orientación de las políticas públicas de igualdad ','c',false) ,
            new Opcion(' Esta Ley no tiene Título Preliminar ','d',false) 
        ])
        ,
        new Pregunta('5',5,' El órgano colegiado de participación de los profesionales en la toma de decisiones que afecten a sus actividades y de asesoramiento de la Dirección Gerencia y de la Comisión de Dirección es:',false,
        [
            new Opcion(' La Dirección Territorial de Atención Primaria ','a',false) ,
            new Opcion(' La Junta Técnico Asistencial  ','b',true) ,
            new Opcion(' La Comisión Técnica Consultiva ','c',false) ,
            new Opcion(' El Consejo de Salud ','d',false) 
        ])
        ,
        new Pregunta('6',6,' No es obligatorio que los hospitales cuenten con una Comisión Técnica Consultiva de:',false,
        [
            new Opcion(' Calidad ','a',false) ,
            new Opcion(' Salud Mental  ','b',true) ,
            new Opcion(' Investigación ','c',false) ,
            new Opcion(' Mortalidad ','d',false) 
        ])
        ,
        new Pregunta('7',7,' Los órganos de participación y coordinación de la gestión socio-sanitaria y sanitaria de las organizaciones del SERMAS son:',false,
        [
            new Opcion(' Los Consejos Territoriales de Salud  ','a',true) ,
            new Opcion(' Las Comisiones Consultivas ','b',false) ,
            new Opcion(' Las Zonas Básicas de Salud ','c',false) ,
            new Opcion(' Los Gerentes de Hospitales y de las Direcciones Territoriales de Atención Primaria. ','d',false) 
        ])
        ,
        new Pregunta('8',8,' Según la Ley de Buen Gobierno y Profesionalización de la Gestión de los Centros y Organizaciones Sanitarias del Servicio Madrileño de Salud, no es una Organización Sanitaria del SERMAS ',false,
        [
            new Opcion(' Los Hospitales ','a',false) ,
            new Opcion(' Los Centros de Especialidades y Equipos de Atención Primaria ','b',true) ,
            new Opcion(' Las Direcciones Territoriales de Atención Primaria ','c',false) ,
            new Opcion(' El SUMMA 112 ','d',false) 
        ])
        ,
        new Pregunta('9',9,' El órgano colegiado de asesoramiento de la Comisión de Dirección del hospital, en lo relativo a la actividad asistencial, así como de participación de los profesionales en el mecanismo de toma de decisiones que afecten a sus actividades, se llama:',false,
        [
            new Opcion(' Comisión de Participación Asistencial ','a',false) ,
            new Opcion(' Junta Rectora Asistencial ','b',false) ,
            new Opcion(' Junta Técnico-Asistencial ','c',true) ,
            new Opcion(' Comisión de Bienestar Social y Asistencial ','d',false) 
        ])
        ,
        new Pregunta('10',10,' En un hospital del SERMAS quien tiene las competencias en la gestión del personal y orden interno. ',false,
        [
            new Opcion(' El Director de Personal ','a',false) ,
            new Opcion(' El Director de Gestión y Recursos Humanos ','b',false) ,
            new Opcion(' El Director de Gestión y Servicios Generales ','c',true) ,
            new Opcion(' El Director Gerente ','d',false) 
        ])
        ,
        new Pregunta('11',11,' El Director del Centro de Salud puede realizar funciones asistenciales. ',false,
        [
            new Opcion(' Si, en todo caso ','a',false) ,
            new Opcion(' No, porque ejerce la dirección y representación del centro de salud ','b',false) ,
            new Opcion(' Solo parcialmente si le exime la Gerente Asistencial de Atención Primaria ','c',false) ,
            new Opcion(' La ','d',true) 
        ])
        ,
        new Pregunta('12',12,' La extensión territorial de cada Dirección Territorial de Atención Primaria se fijará:',false,
        [
            new Opcion(' Por ley de la Asamblea de Madrid. ','a',false) ,
            new Opcion(' Por lo que fije la ley estatal que se dicte sobre la materia. ','b',false) ,
            new Opcion(' Por Reglamento.  ','c',true) ,
            new Opcion(' Por lo que se disponga al efecto en el Estatuto de la Comunidad de Madrid. ','d',false) 
        ])
        ,
        new Pregunta('13',13,' El Presidente de la Junta de Gobierno será nombrado por:',false,
        [
            new Opcion(' La Comisión de Dirección.  ','a',false) ,
            new Opcion(' El Presidente del Consejo de Administración del Servicio Madrileño de Salud. ','b',true) ,
            new Opcion(' El Director General del Servicio Madrileño de Salud. ','c',false) ,
            new Opcion(' El Consejo Territorial de Salud. ','d',false) 
        ])
        ,
        new Pregunta('14',14,' La normativa sobre Buen Gobierno y Profesionalización de la Gestión del SERMAS es:',false,
        [
            new Opcion(' Una ley ordinaria.  ','a',true) ,
            new Opcion(' Una ley orgánica. ','b',false) ,
            new Opcion(' Una ley de bases. ','c',false) ,
            new Opcion(' Una norma reglamentaria. ','d',false) 
        ])
        ,
        new Pregunta('15',15,'Todas las organizaciones del Servicio Madrileño de Salud tendrán los siguientes órganos de Dirección:',false,
        [
            new Opcion('. ','a',false) ,
            new Opcion(' Órganos unipersonales: las Direcciones Gerencia de los centros hospitalarios, de la Unidad Central de Radiodiagnóstico ','b',false) ,
            new Opcion(' Las Comisiones de Dirección.  ','c',false) ,
            new Opcion(' El personal directivo dependiente de la Dirección Gerencia o de la Dirección Territorial de Atención Primaria. ','d',true) 
        ])
        ,
        new Pregunta('16',16,' Las Áreas de Salud son estructuras fundamentales del sistema sanitario, responsabilizadas de la gestión unitaria de los centros y establecimientos del Servicio de Salud y deben desarrollar sus actividades en:',false,
        [
            new Opcion(' El ámbito de la Atención Primaria de salud ','a',false) ,
            new Opcion(' El ámbito de la Atención Especializada ','b',false) ,
            new Opcion(' La ','c',true) ,
            new Opcion(' y ','d',false) 
        ])
        ,
        new Pregunta('17',17,' La Comisión contra la Violencia de Género del Consejo Interterritorial del Sistema Nacional de Salud estará compuesta por:',false,
        [
            new Opcion(' Ministerio Fiscal y Jueces de reconocido prestigio ','a',false) ,
            new Opcion(' Ministerio de Sanidad y representantes de asociaciones de mujeres contra la violencia de género ','b',false) ,
            new Opcion(' Representantes de todas la Comunidades Autónomas con competencia en la materia ','c',true) ,
            new Opcion(' Los Jueces de Instrucción de los Juzgados de Violencia sobre la Mujer ','d',false) 
        ])
        ,
        new Pregunta('18',18,' El ámbito de aplicación de la Ley Orgánica para la igualdad efectiva de hombres y mujeres ',false,
        [
            new Opcion(' Se aplicara todas las mujeres que se encuentren en territorio español, cualquiera que fuese su nacionalidad ','a',false) ,
            new Opcion(' Se aplicara toda persona física que se encuentre en territorio español, cualquiera que fuese su nacionalidad ','b',false) ,
            new Opcion(' Se aplicara toda persona física o jurídica que se encuentre en territorio español, cualquiera que fuese su nacionalidad ','c',true) ,
            new Opcion(' Se aplicara a toda la mujer que sufra discriminación o violencia de género, independientemente de su nacionalidad ','d',false) 
        ])
        ,
        new Pregunta('19',19,' La Junta Técnica Asistencial será presidida:',false,
        [
            new Opcion(' En los Centros hospitalarios por el Director Médico. ','a',true) ,
            new Opcion(' En las Direcciones Territoriales de Atención Primaria por el Director Médico. ','b',false) ,
            new Opcion(' En los Centros hospitalarios por el Director Gerente. ','c',false) ,
            new Opcion(' En las Direcciones Territoriales de Atención Primaria por el Director General del SERMAS. ','d',false) 
        ])
        ,
        new Pregunta('20',20,' En las Direcciones Territoriales de Atención Primaria deberán establecerse en todo caso las Comisiones Técnicas consultivas siguientes (señalar la incorrect',false,
        [
            new Opcion(': ','a',false) ,
            new Opcion(' Comisión de Salud Mental. ','b',false) ,
            new Opcion(' Comisión de Formación e Investigación.  ','c',false) ,
            new Opcion(' Comisión de Farmacia y Terapéutica. ','d',true) 
        ])
        ,
        new Pregunta('21',21,' La composición de la Comisión de Coordinación de los Consejos de Salud estará integrada por:',false,
        [
            new Opcion(' Cinco representantes designados entre las organizaciones sindicales como mayor implantación en la Comunidad de Madrid. ','a',false) ,
            new Opcion(' Dos representantes designados entre las organizaciones sindicales con mayor implantación en la Comunidad de Madrid.  ','b',false) ,
            new Opcion(' Un representante designado entre las organizaciones sindicales con mayor implantación en la Comunidad de Madrid. ','c',false) ,
            new Opcion(' Ninguna de las anteriores respuestas es correcta. ','d',true) 
        ])
        ,
        new Pregunta('22',22,' En las organizaciones del SERMAS el Reglamento de Régimen Interior es (señalar la incorrect',false,
        [
            new Opcion(': ','a',false) ,
            new Opcion(' Elaborado y propuesto por la Dirección Territorial de Atención Primaria.  ','b',false) ,
            new Opcion(' Aprobado por la Junta de Gobierno. ','c',false) ,
            new Opcion(' Objeto de información y alegaciones por los sectores profesionales y sindicales de la organización. ','d',true) 
        ])
        ,
        new Pregunta('23',23,' Los Directores Gerentes serán nombrados por un período de:',false,
        [
            new Opcion(' Diez años. ','a',false) ,
            new Opcion(' Cinco años.  ','b',true) ,
            new Opcion(' Tres años. ','c',false) ,
            new Opcion(' Con carácter indefinido. ','d',false) 
        ])
        ,
        new Pregunta('24',24,' Según La Ley 14/1986, de 25 de abril General de Sanidad, cuáles serán modalidades de asistencia sanitarias. ',false,
        [
            new Opcion(' Las modalidades que establezcan las Comunidades Autónomas en sus disposiciones reglamentarias. ','a',false) ,
            new Opcion(' Atención Primaria ','b',false) ,
            new Opcion(' Atención Especializada ','c',false) ,
            new Opcion(' La respuesta b y c son correctas ','d',true) 
        ])
        ,
        new Pregunta('25',25,' Que norma establece la estructura básica sanitaria en la Comunidad de Madrid ',false,
        [
            new Opcion(' La Ley 12/2001, de 21 de diciembre de Ordenación Sanitaria de la Comunidad de Madrid ','a',false) ,
            new Opcion(' La Ley 21/2001, de 12 de diciembre de Ordenación Sanitaria de la Comunidad de Madrid ','b',false) ,
            new Opcion(' El Decreto 52/2010 de 29 de julio, del Consejo de Gobierno. ','c',true) ,
            new Opcion(' El Decreto 51/2010 de 29 de julio, del Consejo de Gobierno. ','d',false) 
        ])
        ,
        new Pregunta('26',26,' Cuales son las estructuras básicas sanitarias de Atención Primaria en la Comunidad de Madrid ',false,
        [
            new Opcion(' El Área Única Sanitaria ','a',false) ,
            new Opcion(' La zona básica de salud ','b',false) ,
            new Opcion(' El centro de salud ','c',false) ,
            new Opcion(' La respuesta correcta es ','d',true) 
        ])
        ,
        new Pregunta('27',27,' Señala la respuesta incorrecta. Que Gerencia Adjunta depende de la Gerencia Asistencial de Atención Primaria   ',false,
        [
            new Opcion(' Gerencia Adjunta de Asistencia Sanitaria. ','a',false) ,
            new Opcion(' Gerencia Adjunta de Planificación y Calidad. ','b',false) ,
            new Opcion(' Gerencia Adjunta de Recursos Humanos y Relaciones Laborales ','c',true) ,
            new Opcion(' Gerencia Adjunta de Gestión y Servicios Generales. ','d',false) 
        ])
        ,
        new Pregunta('28',28,' Cuando los Planes de Salud conjuntos impliquen a todas las Comunidades Autónomas, se formularán:',false,
        [
            new Opcion(' Por el Departamento de Sanidad de la Administración del Estado. ','a',false) ,
            new Opcion(' Por el órgano competente de cada una de las Comunidades Autónomas. ','b',false) ,
            new Opcion(' Por el Consejo Interterritorial del Sistema Nacional de Salud. ','c',true) ,
            new Opcion(' Por cada una de las áreas de salud ','d',false) 
        ])
        ,
        new Pregunta('29',29,' Los titulares de la Dirección Gerencia de los centros hospitalarios y, la Dirección Territorial de Atención Primaria, como órganos de dirección, tendrán a su cargo la gestión de las actividades de las organizaciones sanitarias respectivas y ejercerán las siguientes funciones:',false,
        [
            new Opcion(' Estudiar y, en su caso, impulsar las propuestas que eleven la Junta Técnica Asistencial y las distintas comisiones técnicas consultivas.  ','a',false) ,
            new Opcion(' Participar en la elaboración del Contrato-Programa y suscribirlo. ','b',true) ,
            new Opcion(' Adoptar las medidas que sean necesarias para la optimización de los recursos.  ','c',false) ,
            new Opcion(' Aplicar los principios de transparencia, publicidad activa, ética y buen gobierno en las decisiones organizativas y en las actuaciones de sus directivos y profesionales.  ','d',false) 
        ])
        ,
        new Pregunta('30',30,' De conformidad con el artículo 64 de la Ley 14/1986, de 25 de abril, General de Sanidad, el centro de salud tendrá las siguientes funciones:',false,
        [
            new Opcion(' Servir como centro de reunión de la comunidad. ','a',false) ,
            new Opcion(' Albergar los recursos materiales precisos para la realización de las exploraciones complementarias de que se pueda disponer en la zona. ','b',false) ,
            new Opcion(' Facilitar el trabajo en equipo de los profesionales sanitarios del área. ','c',false) ,
            new Opcion(' Todas son correctas. ','d',true) 
        ])
        ,
        new Pregunta('31',31,' Señale la afirmación correcta:',false,
        [
            new Opcion(' Las Comunidades Autónomas podrán organizar sus servicios de salud de acuerdo con los principios básicos de la Constitución Española. ','a',false) ,
            new Opcion(' Las Comunidades Autónomas podrán organizar sus servicios de salud de acuerdo con los principios básicos de la Ley General de Sanidad. ','b',false) ,
            new Opcion(' Las Comunidades Autónomas deberán organizar sus servicios de salud de acuerdo con los principios básicos de la Constitución Española. ','c',false) ,
            new Opcion(' Las Comunidades Autónomas deberán organizar sus servicios de salud de acuerdo con los principios básicos de la Ley General de Sanidad. ','d',true) 
        ])
        ,
        new Pregunta('32',32,'. Con el objeto de avanzar en la autonomía de gestión se elaborará un Contrato Programa en las organizaciones del Servicio Madrileño de Salud de acuerdo con el presupuesto, este deberá permitir la descentralización de la gestión y que se fundamente una rendición de cuentas integrada que vincule financiación, recursos, actividad, calidad y resultados. Para su cumplimiento el control de la gestión se hará:',false,
        [
            new Opcion(' Mensualmente ','a',false) ,
            new Opcion(' Trimestralmente ','b',true) ,
            new Opcion(' Semestralmente ','c',false) ,
            new Opcion(' Anualmente ','d',false) 
        ])
        ,
        new Pregunta('33',33,' La Ley Orgánica para la igualdad efectiva de mujeres y hombres es:',false,
        [
            new Opcion(' Ley Orgánica 3/2007, de 22 marzo ','a',true) ,
            new Opcion(' Ley Orgánica 4/2007,de 22 marzo ','b',false) ,
            new Opcion(' Ley Orgánica 14/2007, de 22 marzo ','c',false) ,
            new Opcion(' Ley Orgánica 1/2004, de 22 marzo ','d',false) 
        ])
        ,
        new Pregunta('34',34,' La Ley dispone medidas de sensibilización e intervención en los siguientes ámbitos:',false,
        [
            new Opcion(' Ámbito educativo: el sistema educativo español incluirá, dentro de sus principios, la formación en el respeto de los derechos y libertades fundamentales y la igualdad entre hombres y mujeres. ','a',false) ,
            new Opcion(' Ámbito de la publicidad y medios de comunicación: asegurando un tratamiento de la mujer conforme con los principios y valores constitucionales, respetando la dignidad de las mujeres. ','b',false) ,
            new Opcion(' Ámbito sanitario: promoviendo actuaciones para la detección precoz de la violencia de género y de apoyo a las víctimas. ','c',false) ,
            new Opcion(' Ámbito del derecho a la asistencia jurídica gratuita: con el fin de garantizar a aquellas víctimas con recursos insuficientes para litigar una asistencia letrada en todos los procesos y procedimientos, relacionados con la violencia de género. ','d',true) 
        ])
        ,
        new Pregunta('35',35,' Según dispone la Ley de Medidas de Protección Integral contra la Violencia de Género, cuando la funcionaria pública es víctima de violencia de género tendrá derecho a:',false,
        [
            new Opcion('. ','a',false) ,
            new Opcion(' A la reducción de su tiempo de trabajo  ','b',false) ,
            new Opcion(' A la reordenación de su tiempo de trabajo,  ','c',true) ,
            new Opcion(' A la movilidad funcional en su centro de trabajo ','d',false) 
        ])
        ,
        new Pregunta('36',36,' El permiso por razón de violencia de género sobre la mujer funcionaria, tendrán la consideración de justificadas por el tiempo y en las condiciones en que así lo determinen los servicios sociales de atención o de salud según proceda. ',false,
        [
            new Opcion(' Cuando las faltas de asistencia de las funcionarias víctimas de violencia de género, sean totales. ','a',false) ,
            new Opcion(' Cuando las faltas de asistencia de las funcionarias víctimas de violencia de género, sean parciales ','b',false) ,
            new Opcion(' Las respuestas ','c',false) ,
            new Opcion(' y ','d',true) 
        ])
        ,
        new Pregunta('37',37,' Como principio general las actuaciones de las Administraciones Públicas Sanitarias estarán orientadas:',false,
        [
            new Opcion(' Las Administraciones públicas sanitarias asegurarán la integración del principio de igualdad entre mujeres y hombres, garantizando su igual derecho a la salud. ','a',true) ,
            new Opcion(' La asistencia sanitaria pública y privada se extenderá a toda la población española. El acceso y las prestaciones sanitarias se realizarán en condiciones de igualdad efectiva. ','b',false) ,
            new Opcion(' Los programas de salud garantizaran y aseguraran el principio de igualdad entre mujeres y hombres ','c',false) ,
            new Opcion(' Las Administraciones públicas sanitarias garantizarán la integración del principio de igualdad entre mujeres y hombres, asegurando su igual derecho a la salud. ','d',false) 
        ])
        ,
        new Pregunta('38',38,'La Comisión contra la Violencia de Género que depende del Consejo Interterritorial del Sistema Nacional de Salud tiene entre sus funciones:',false,
        [
            new Opcion(' Garantizar y apoyar  la planificación de medidas sanitarias  ','a',false) ,
            new Opcion(' Asegurar y proponer medidas sanitarias  ','b',false) ,
            new Opcion(' Emitir un Informe semestral y otro anual al Observatorio Estatal y al Pleno del Consejo Interterritorial  ','c',false) ,
            new Opcion(' Ninguna es correcta ','d',true) 
        ])
        ,
        new Pregunta('39',39,' Que Gerencia está adscrita a la Dirección General de Coordinación de la Asistencia Sanitaria:',false,
        [
            new Opcion(' La Gerencia Asistencial de Atención Primaria.  ','a',false) ,
            new Opcion(' La Gerencia Asistencial de Atención Hospitalaria.  ','b',false) ,
            new Opcion(' La Gerencia del SUMMA 112. ','c',false) ,
            new Opcion(' Todas son correctas. ','d',true) 
        ])
        ,
        new Pregunta('40',40,' Indique la respuesta correcta respecto al Equipo de Atención Primaria ',false,
        [
            new Opcion(' Estará compuesto, entre otros, por los veterinarios titulares radicados en la zona. ','a',false) ,
            new Opcion(' Es el conjunto de profesionales sanitarios y no sanitarios con actuación en la zona básica de salud ','b',false) ,
            new Opcion(' Le corresponde la asistencia ambulatoria especializada, en consultas médicas y pediátricas ','c',false) ,
            new Opcion(' Son correctas la ','d',true) 
        ])
        ,
        new Pregunta('41',41,'Cuál de estos se consideran principios rectores de la Ley 1/2004 de Medidas de Protección integral contra La violencia de género  ',false,
        [
            new Opcion(' Garantizar los Derechos en ámbito laboral y funcionarial  ','a',false) ,
            new Opcion(' Establecer un Sistema Integral de Tutela Institucional ','b',false) ,
            new Opcion(' Fomentar la Especialización de los colectivos Profesionales  ','c',false) ,
            new Opcion(' Todos son principios rectores ','d',true) 
        ])
        ,
        new Pregunta('42',42,' Los criterios de coordinación para los niveles asistenciales de Atención Primaria y Atención Especializada, serán establecidos ',false,
        [
            new Opcion(' Director General del SERMAS ','a',false) ,
            new Opcion(' Gerente de Atención Especializada y Gerente de Atención Primaria, conjuntamente ','b',false) ,
            new Opcion(' Comisión de Coordinación Asistencial ','c',false) ,
            new Opcion(' Ninguna es correcta ','d',true) 
        ])
        ,
        new Pregunta('43',43,' Quien aprueba el Reglamento General de Organización y Funcionamiento de los Centros de Salud ',false,
        [
            new Opcion(' La Comunidad Autónoma ','a',true) ,
            new Opcion(' El Director Asistencial ','b',false) ,
            new Opcion(' El Coordinador del Equipo de Atención Primaria ','c',false) ,
            new Opcion(' La Comisión Central de Garantía de Calidad ','d',false) 
        ])
        ,
        new Pregunta('44',44,' En Atención Primaria, los Directores Asistenciales dependerán de:',false,
        [
            new Opcion(' Gerencia Adjunta de Asistencia Sanitaria ','a',true) ,
            new Opcion(' Gerencia Adjunta de Planificación Asistencial ','b',false) ,
            new Opcion(' Gerencia Adjunta de Gestión y Servicios Generales ','c',false) ,
            new Opcion(' Gerente Asistencial de Atención Primaria ','d',false) 
        ])
        ,
        new Pregunta('45',45,' Para la delimitación de las zonas básicas deberán tenerse en cuenta:',false,
        [
            new Opcion(' El grado de concentración o dispersión de la población ','a',false) ,
            new Opcion(' Las características epidemiológicas de la zona ','b',false) ,
            new Opcion(' Las instalaciones y recursos sanitarios de la zona ','c',false) ,
            new Opcion(' Todas son correctas ','d',true) 
        ])
        ,
        new Pregunta('46',46,' Como norma general la Zona Básica de Salud abarcará una población comprendida, entre:',false,
        [
            new Opcion(' Entre 5.000 y 15.000 habitantes ','a',false) ,
            new Opcion(' Entre 15.000 y 25.000 habitantes ','b',false) ,
            new Opcion(' Entre 5.000 y 20.000 habitantes ','c',false) ,
            new Opcion(' Cada Comunidad Autónoma teniendo en cuenta los criterios demográficos, geográficos y sociales establecerá sus delimitaciones ','d',true) 
        ])
        ,
        new Pregunta('47',47,' Cual es el órgano colegiado de participación y asesoramiento a la Dirección de un hospital ',false,
        [
            new Opcion(' Junta Técnico-Asistencial ','a',false) ,
            new Opcion(' Comisión Central de Garantía de Calidad ','b',false) ,
            new Opcion(' Comisión de Bienestar Social ','c',false) ,
            new Opcion(' Todas son correctas ','d',true) 
        ])
        ,
        new Pregunta('48',48,' Entre los compromisos del Código de Transparencia, Ética y Buen Gobierno de las organizaciones del SERMAS se encuentra (señalar la respuesta incorrect',false,
        [
            new Opcion(': ','a',false) ,
            new Opcion(' Establecer normas de transparencia para el acceso a la información. ','b',false) ,
            new Opcion(' Implicar a los profesionales en la buena práctica clínica. ','c',true) ,
            new Opcion(' Regular las infracciones y sanciones en el ámbito sanitario. ','d',false) 
        ])
        ,
        new Pregunta('49',49,' La Ley Orgánica 3/2007 se basa en dos artículos de la Constitución Española que se refieren directamente al principio de igualdad, son:',false,
        [
            new Opcion(' Art. 1 y art. 14. ','a',false) ,
            new Opcion(' Art. 1 y art. 9.2 ','b',false) ,
            new Opcion(' Art. 9.2 y art. 14 ','c',true) ,
            new Opcion(' Ninguna de las anteriores es correcta. ','d',false) 
        ])
        ,
        new Pregunta('50',50,' La Junta Técnica Asistencial es:',false,
        [
            new Opcion(' Un órgano colegiado de gestión y participación de los profesionales. ','a',false) ,
            new Opcion(' Un órgano de asesoramiento y participación de los profesionales. ','b',false) ,
            new Opcion(' Un órgano colegiado de participación de los profesionales y de asesoramiento de la Dirección Gerencia y de la Comisión de Dirección.  ','c',true) ,
            new Opcion(' Un órgano colegiado de gestión y de gobierno. ','d',false) 
        ])
        ,
        new Pregunta('51',51,' A quien le corresponde la gestión de los recursos humanos y económicos de los centros de salud. ',false,
        [
            new Opcion(' A la Gerencia Adjunta de Gestión y Servicios Generales ','a',true) ,
            new Opcion(' A la Dirección Técnica de Recursos Humanos y Gestión Económica ','b',false) ,
            new Opcion(' A la Gerencia Asistencial de Atención Primaria ','c',false) ,
            new Opcion(' Al Director del centro de salud  ','d',false) 
        ])
        ,
        new Pregunta('52',52,' La atención integral de Atención Primaria, se refiere a la:',false,
        [
            new Opcion(' Promoción de la salud exclusivamente. ','a',false) ,
            new Opcion(' Rehabilitación de la salud del enfermo ','b',false) ,
            new Opcion(' Actividades de fomento de la salud, tanto en su promoción, como en la prevención, recuperación y rehabilitación. ','c',true) ,
            new Opcion(' Promoción de la salud y la prevención de enfermedades. ','d',false) 
        ])
        ,
        new Pregunta('53',53,' La aprobación del Plan de Salud de la Comunidad de Madrid es una competencia atribuida a:',false,
        [
            new Opcion(' El Consejo de Gobierno de la Comunidad de Madrid ','a',false) ,
            new Opcion(' El Presidente de la Comunidad de Madrid ','b',false) ,
            new Opcion(' El Consejero de Sanidad ','c',true) ,
            new Opcion(' Son correctas la ','d',false) 
        ])
        ,
        new Pregunta('54',54,' No es una función propia de la Atención Primaria, según el Real Decreto regulador, la de:',false,
        [
            new Opcion(' Investigación y Docencia ','a',false) ,
            new Opcion(' Participar en los programas de salud laboral ','b',false) ,
            new Opcion(' Reinserción social ','c',false) ,
            new Opcion(' Todas son funciones de Atención Primaria ','d',true) 
        ])
        ,
        new Pregunta('55',55,' El conjunto de profesionales sanitarios y no sanitarios que actúan en la zona de salud, se denomina:',false,
        [
            new Opcion(' Equipo de salud ','a',false) ,
            new Opcion(' Centro de salud ','b',false) ,
            new Opcion(' Equipo de Atención Primaria ','c',true) ,
            new Opcion(' Son correctas la ','d',false) 
        ])
        ,
        new Pregunta('56',56,' El Director del centro de salud no tiene como función:',false,
        [
            new Opcion(' Establecer los cauces de coordinación con otros niveles asistenciales y con otros organismos e instituciones públicos y privados.  ','a',true) ,
            new Opcion(' Facilitar una correcta y ágil atención, tramitación, contestación y, en su caso, resolución de las sugerencias, quejas y reclamaciones de los usuarios. ','b',false) ,
            new Opcion(' La organización de los profesionales y de la actividad del centro según las directrices establecidas por el Servicio Madrileño de Salud. ','c',false) ,
            new Opcion(' La gestión del contrato programa del centro. ','d',false) 
        ])
        ,
        new Pregunta('57',57,'El Plan Nacional de Sensibilización y Prevención de la Violencia de Género está dirigido:',false,
        [
            new Opcion(' A las mujeres víctimas de violencia de género ','a',false) ,
            new Opcion(' A los hombres y mujeres ','b',true) ,
            new Opcion(' A todas las mujeres ','c',false) ,
            new Opcion(' A todos los colectivos especializados en violencia de género ','d',false) 
        ])
        ,
        new Pregunta('58',58,' Según la Ley Orgánica 1/2004, en el ámbito sanitario, las medidas de sensibilización y formación, se desarrollaran programas con el fin de:',false,
        [
            new Opcion(' La rehabilitación de las victimas ','a',false) ,
            new Opcion(' Mejorar e impulsar el apoyo a las victimas ','b',false) ,
            new Opcion(' Hacer un diagnostico precoz y asistencia a la mujer ','c',false) ,
            new Opcion(' Las respuestas a y c son correctas  ','d',true) 
        ])
        ,
        new Pregunta('59',59,'- No es un Órgano de Dirección de las Organizaciones del Servicio Madrileño de Salud:',false,
        [
            new Opcion(' Las Direcciones Gerencia ','a',false) ,
            new Opcion(' Las Comisiones de Dirección ','b',false) ,
            new Opcion(' El personal directivo dependiente de las Direcciones Gerencia o de las Direcciones Territoriales ','c',false) ,
            new Opcion(' Todos los anteriores son órganos de Dirección de las Organizaciones del SERMAS.  ','d',true) 
        ])
        ,
        new Pregunta('60',60,' La acreditación de las situaciones de violencia de género ejercida sobre las mujeres tendrá lugar con:',false,
        [
            new Opcion(' La orden de protección a favor de la victima ','a',false) ,
            new Opcion(' La denuncia puesta ante la policía o en el juzgado ','b',false) ,
            new Opcion(' Excepcionalmente, con el informe del Ministerio Fiscal, hasta que no se dicte orden de protección ','c',false) ,
            new Opcion(' La ','d',true) 
        ])
])
,new Examen('CCOO (7.8.9)',9,
[
        new Pregunta('1',1,'Según la Ley 41/2002, de 14 de noviembre, quien es el titular del derecho a la información asistencial:',false,
        [
            new Opcion(' El titular del derecho a la información es el paciente. También serán informadas las personas vinculadas a él, por razones familiares o de hecho, en la medida que el paciente lo permita de manera expresa o tácita. ','a',true) ,
            new Opcion(' El titular del derecho a la información es el paciente y las personas vinculadas a él, por razones familiares o de hecho, en la medida que el paciente lo permita de manera expresa o tácita. ','b',false) ,
            new Opcion(' El titular del derecho a la información es el médico responsable del paciente que podrá informar a las personas vinculadas a él, por razones familiares o de hecho, en la medida que el paciente lo permita de manera expresa o tácita. ','c',false) ,
            new Opcion(' El titular del derecho a la información al paciente, es el responsable de la institución sanitaria donde se encuentre el paciente. Y también podrá informar a las personas vinculadas a él, por razones familiares o de hecho, en la medida que el paciente lo permita de manera expresa o tácita. ','d',false) 
        ])
        ,
        new Pregunta('2',2,'No forma parte del derecho a la información que se proporciona al paciente  ',false,
        [
            new Opcion(' La finalidad y la naturaleza de cada intervención ','a',false) ,
            new Opcion(' Los riesgos de cada intervención ','b',false) ,
            new Opcion(' Las consecuencias de cada intervención ','c',false) ,
            new Opcion(' Todas forman parte del derecho a la información ','d',true) 
        ])
        ,
        new Pregunta('3',3,'Es causa de extinción de la condición de personal estatutario fijo:',false,
        [
            new Opcion(' La incapacidad temporal ','a',false) ,
            new Opcion(' La renuncia ','b',true) ,
            new Opcion(' La sanción disciplinaria no firme de separación del servicio ','c',false) ,
            new Opcion(' Ninguna es correcta ','d',false) 
        ])
        ,
        new Pregunta('4',4,'No es una característica de la Tarjeta Sanitaria Individual:',false,
        [
            new Opcion(' Sirve para acceder a cualquier prestación farmacéutica o sanitaria ','a',false) ,
            new Opcion(' Se puede solicitar por vía telemática.  ','b',false) ,
            new Opcion(' Su renovación es automática en todos los casos    ','c',true) ,
            new Opcion(' A los 14 años habrá que facilitar el DNI ','d',false) 
        ])
        ,
        new Pregunta('5',5,'Sobre el contenido del derecho a la información asistencial recogido en la Ley 41/2002, de 14 de noviembre (Señala la respuesta incorrect',false,
        [
            new Opcion('  ','a',false) ,
            new Opcion(' Los pacientes tienen derecho a conocer, y  también a que se respete su voluntad de no ser informado ','b',false) ,
            new Opcion(' La información, que como regla general se proporcionará verbalmente dejando constancia en la historia clínica, comprende, como mínimo, la finalidad y la naturaleza de cada intervención, sus riesgos y sus consecuencias. ','c',false) ,
            new Opcion(' El médico responsable del paciente le garantiza el cumplimiento de su derecho a la información y también los profesionales que le atiendan durante el proceso asistencial ','d',true) 
        ])
        ,
        new Pregunta('6',6,'De acuerdo con el Real Decreto 487/1997 y la guía técnica sobre las disposiciones mínimas de seguridad y salud relativas a la manipulación manual de cargas, la evaluación de riesgos ergonómicos por el manejo frecuente de cargas, debe realizarse en todos los puestos de trabajo en que se manipulan más de:',false,
        [
            new Opcion(' 15 Kg. ','a',false) ,
            new Opcion(' 8 Kg. ','b',false) ,
            new Opcion(' 3 Kg. ','c',true) ,
            new Opcion(' 25 Kg. ','d',false) 
        ])
        ,
        new Pregunta('7',7,'Son competencias de los Delegados de Prevención:',false,
        [
            new Opcion(' Colaborar con la dirección de la empresa en la mejora de la acción preventiva. ','a',false) ,
            new Opcion(' Promover y fomentar la cooperación de los trabajadores en la ejecución de la normativa sobre prevención de riesgos laborales. ','b',false) ,
            new Opcion(' Ser consultados por el empresario, con carácter previo a su ejecución, de cualquier decisión sobre seguridad y salud. ','c',false) ,
            new Opcion(' Todas las anteriores son competencias de los Delegados de Prevención ','d',true) 
        ])
        ,
        new Pregunta('8',8,'Señale la respuesta CORRECTA sobre los equipos de protección individual:',false,
        [
            new Opcion(' La protección individual debe anteponerse a la adopción de medidas organizativas. ','a',false) ,
            new Opcion(' En caso de ser necesario el uso simultáneo de varios equipos de protección individual, no es imprescindible que sean compatibles entre sí. ','b',false) ,
            new Opcion(' En ocasiones es posible la utilización de un equipo de protección personal por varios trabajadores. ','c',true) ,
            new Opcion(' El modo de utilización del equipo de protección individual se realizará de acuerdo a las preferencias del trabajador. ','d',false) 
        ])
        ,
        new Pregunta('9',9,'Según el Real Decreto 664/1997 de 12 de mayo, señale la respuesta CORRECTA:',false,
        [
            new Opcion(' Agente biológico del grupo 1: aquel que resulta probable que cause una enfermedad en el hombre. ','a',false) ,
            new Opcion(' Agente biológico del grupo 2: aquel que puede causar una enfermedad en el hombre y puede suponer un peligro para los trabajadores, siendo muy probable que se propague a la colectividad y existiendo generalmente profilaxis o tratamiento eficaces. ','b',false) ,
            new Opcion(' Agente biológico del grupo 3: aquel que puede causar una enfermedad grave en el hombre y presenta un serio peligro para los trabajadores, con riesgo de que se propague a la colectividad y existiendo generalmente una profilaxis o tratamiento eficaz. ','c',true) ,
            new Opcion(' Agente biológico del grupo 4: aquel que puede causar una enfermedad grave en el hombre y supone un serio peligro para los trabajadores con muchas probabilidades de que se propague a la colectividad y sin que exista profilaxis pero con tratamiento eficaz ','d',false) 
        ])
        ,
        new Pregunta('10',10,'Según la ley 41/2002, de 14 de noviembre, básica reguladora de la autonomía del paciente, se otorgará el consentimiento por representación en los siguientes supuestos... (señale la respuesta incorrect',false,
        [
            new Opcion(': ','a',false) ,
            new Opcion(' Cuando el paciente no sea capaz de tomar decisiones, a criterio del médico responsable de la asistencia, o su estado físico o psíquico no le permita hacerse cargo de su situación ','b',false) ,
            new Opcion(' Cuando el paciente esté incapacitado legalmente ','c',true) ,
            new Opcion(' Cuando se trate de menores no incapaces ni incapacitados, pero emancipados o con dieciséis años cumplidos ','d',false) 
        ])
        ,
        new Pregunta('11',11,'Según la ley 41/2002, de 14 de noviembre, básica reguladora de la autonomía del paciente, se otorgará el consentimiento por escrito en los siguientes casos... (señale la respuesta incorrect',false,
        [
            new Opcion(': ','a',false) ,
            new Opcion(' Intervenciones quirúrgicas ','b',true) ,
            new Opcion(' Siempre ','c',false) ,
            new Opcion(' Procedimientos diagnósticos y terapéuticos invasores ','d',false) 
        ])
        ,
        new Pregunta('12',12,'Según la ley 41/2002, de 14 de noviembre, básica reguladora de la autonomía del paciente, una de las siguientes afirmaciones respecto al titular del derecho a la información asistencial es correcta:',false,
        [
            new Opcion(' El paciente no será informado en caso de incapacidad ','a',false) ,
            new Opcion(' El derecho a la información sanitaria de los pacientes puede limitarse por la existencia acreditada de un estado de necesidad terapéutica ','b',true) ,
            new Opcion(' Sólo se informará a los familiares cuando haya consentimiento expreso del paciente ','c',false) ,
            new Opcion(' Sólo se tendrá derecho al acceso a la información epidemiológica cuando implique un riesgo para la salud individual del paciente ','d',false) 
        ])
        ,
        new Pregunta('13',13,'Según la ley 41/2002, de 14 de noviembre, básica reguladora de la autonomía del paciente, una de estas afirmaciones no es correcta, señálela:',false,
        [
            new Opcion(' Según la normativa vigente el paciente tiene derecho de acceso al contenido íntegro de su historia clínica ','a',true) ,
            new Opcion(' Según la normativa vigente el paciente tiene derecho de acceso al contenido íntegro de su historia clínica, con ciertas limitaciones ','b',false) ,
            new Opcion(' El acceso de un tercero a la historia clínica, motivado por un riesgo para su salud, se limitará a los datos pertinentes ','c',false) ,
            new Opcion(' El derecho de acceso del paciente a la historia clínica puede ejercerse también por representación debidamente acreditada ','d',false) 
        ])
        ,
        new Pregunta('14',14,'Según la ley 41/2002, de 14 de noviembre, básica reguladora de la autonomía del paciente, ¿quién regula el procedimiento para que quede constancia del acceso a la historia clínica y su correspondiente uso?',false,
        [
            new Opcion(' La Administración y Gestión de los centros sanitarios ','a',false) ,
            new Opcion(' El Estado ','b',false) ,
            new Opcion(' Las Comunidades Autónomas ','c',true) ,
            new Opcion(' Los Centros de Salud ','d',false) 
        ])
        ,
        new Pregunta('15',15,'Según la ley 41/2002, de 14 de noviembre, básica reguladora de la autonomía del paciente, el consentimiento informado podrá ser revocado por el paciente:',false,
        [
            new Opcion(' Libremente y por escrito, en cualquier momento ','a',true) ,
            new Opcion(' Cuando lo permita la Dirección del Hospital ','b',false) ,
            new Opcion(' Cuando el facultativo dé la autorización ','c',false) ,
            new Opcion(' Cuando no corra riesgo la salud del paciente ','d',false) 
        ])
        ,
        new Pregunta('16',16,'Conforme al art. 17 de la ley 41/2002, de 14 de noviembre, la obligación de conservar la documentación clínica en condiciones que garanticen su correcto mantenimiento y seguridad, corresponde a:',false,
        [
            new Opcion(' Al responsable del archivo y documentación clínica ','a',false) ,
            new Opcion(' Al personal de gestión y servicios ','b',false) ,
            new Opcion(' Al centro sanitario ','c',true) ,
            new Opcion(' Auxiliares administrativos ','d',false) 
        ])
        ,
        new Pregunta('17',17,'Son causas de extinción de la condición de personal estatutario fijo:',false,
        [
            new Opcion(' La sanción disciplinaria firme de separación del servicio ','a',false) ,
            new Opcion(' La jubilación ','b',false) ,
            new Opcion(' La renuncia ','c',false) ,
            new Opcion(' Las tres anteriores son correctas ','d',true) 
        ])
        ,
        new Pregunta('18',18,'La sanción de traslado forzoso con cambio de localidad sin derecho a indemnización y con prohibición temporal de participar en procedimientos de movilidad para reincorporarse a la localidad de procedencia, hasta un máximo de cuatro años, sólo podrá imponerse como consecuencia de :',false,
        [
            new Opcion(' Faltas graves. ','a',false) ,
            new Opcion(' Faltas muy graves. ','b',true) ,
            new Opcion(' Faltas leves. ','c',false) ,
            new Opcion(' En faltas graves y muy graves. ','d',false) 
        ])
        ,
        new Pregunta('19',19,'Los datos relativos a la vigilancia de la salud de los trabajadores no podrán ser usados con fines discriminatorios ni en perjuicio del trabajador y vienen recogidos en que artículo de la ley 31/1995.  ',false,
        [
            new Opcion(' Articulo 15 ','a',false) ,
            new Opcion(' Articulo 22  ','b',true) ,
            new Opcion(' Articulo 23  ','c',false) ,
            new Opcion(' Articulo 16 ','d',false) 
        ])
        ,
        new Pregunta('20',20,'¿En qué artículo de la ley de prevención hace mención a los trabajadores especialmente sensibles?',false,
        [
            new Opcion(' Art. 22  ','a',false) ,
            new Opcion(' Art. 23  ','b',false) ,
            new Opcion(' Art. 14  ','c',false) ,
            new Opcion(' Art. 25 ','d',true) 
        ])
        ,
        new Pregunta('21',21,'¿Qué artículo de la ley 31/1995 trata sobre la protección de la maternidad?',false,
        [
            new Opcion(' Art. 26  ','a',true) ,
            new Opcion(' Art. 25  ','b',false) ,
            new Opcion(' Art. 22  ','c',false) ,
            new Opcion(' Art .16 ','d',false) 
        ])
        ,
        new Pregunta('22',22,'En relación con la ley 41/2002, de 14 de noviembre, básica reguladora de la autonomía del paciente y de derechos y obligaciones en materia de información y documentación clínica, indique la afirmación correcta:',false,
        [
            new Opcion(' Toda persona tiene derecho a que se respete el carácter confidencial de los datos referentes a su salud, y a que cualquiera pueda acceder a ellos sin previa autorización amparada por la Ley ','a',false) ,
            new Opcion(' Toda persona tiene derecho a respetar el carácter público de los datos referentes a su salud y a la de sus familiares, sin que nadie pueda acceder a ellos ni aun con la previa autorización amparada por la Ley ','b',false) ,
            new Opcion(' Toda persona tiene derecho a que se respete el carácter confidencial de los datos referentes a su salud, y a que nadie pueda acceder a ellos sin previa autorización amparada por la Ley ','c',true) ,
            new Opcion(' Toda persona tiene derecho a que se respete el carácter público de los datos referentes a su salud, y a que cualquiera pueda acceder a ellos con la previa autorización amparada por la Dirección del Centro Sanitario respectivo ','d',false) 
        ])
        ,
        new Pregunta('23',23,'Cuál de las siguientes afirmaciones relacionadas con el capítulo II “derecho a la información sanitaria” de la ley 41/2002, reguladora de la autonomía del paciente, es correcta:',false,
        [
            new Opcion(' Los pacientes tienen derecho a conocer, con motivo de cualquier actuación en el ámbito de su salud, toda la información disponible sobre la misma, sin excepciones ','a',false) ,
            new Opcion(' El médico responsable del paciente, y los profesionales que le atiendan durante el proceso asistencial, garantizarán el cumplimiento de su derecho a la información ','b',true) ,
            new Opcion(' El titular del derecho a la información es tanto el paciente como las personas vinculadas a él, por razones familiares o de hecho ','c',false) ,
            new Opcion(' La información clínica no forma parte de las actuaciones asistenciales ','d',false) 
        ])
        ,
        new Pregunta('24',24,'Conforme el art. 71 de la Ley 55/2003, en lo que se refiere al Régimen disciplinario, señale cuál de estas afirmaciones es la correcta:',false,
        [
            new Opcion(' Cuando de la instrucción de un expediente disciplinario resulte la existencia de indicios fundados de criminalidad, se continuará su tramitación. ','a',false) ,
            new Opcion(' Los hechos declarados probados por resoluciones judiciales firmes no vinculan a los servicios de salud.  ','b',false) ,
            new Opcion(' Las sanciones que, en su caso, se impongan, tendrán validez y eficacia en el servicio de salud en el que el interesado se encuentre prestando servicios en el momento de comisión de la falta. ','c',false) ,
            new Opcion(' Entre la infracción cometida y la sanción impuesta deberá existir la adecuada proporcionalidad. ','d',true) 
        ])
        ,
        new Pregunta('25',25,'¿Cómo se le llama al soporte de cualquier tipo o clase que contiene un conjunto de datos e informaciones de carácter asistencial?',false,
        [
            new Opcion(' Informe de alta médica ','a',false) ,
            new Opcion(' Historia clínica ','b',false) ,
            new Opcion(' Información clínica ','c',false) ,
            new Opcion(' Documentación clínica ','d',true) 
        ])
        ,
        new Pregunta('26',26,'Según la Ley, la tarjeta sanitaria individual permite acceder a:',false,
        [
            new Opcion(' El servicio de salud de las Comunidades Autónomas ','a',false) ,
            new Opcion(' El sistema nacional de salud ','b',true) ,
            new Opcion(' Los centros sanitarios ','c',false) ,
            new Opcion(' Todas son correctas ','d',false) 
        ])
        ,
        new Pregunta('27',27,'Según el art. 18 de la ley 41/2002, de 14 de noviembre, básica reguladora de la autonomía del paciente y de derechos y obligaciones en materia de información y documentación clínica, ¿qué derecho tiene el paciente con respecto al acceso y copia de los documentos de su historia clínica?',false,
        [
            new Opcion(' Derecho de acceso y copia de todos los documentos que figuren en la Historia Clínica ','a',false) ,
            new Opcion(' Derecho de copia de todos los documentos que figuren en la Historia Clínica con la única salvedad de aquellos que contengan anotaciones subjetivas de los profesionales ','b',false) ,
            new Opcion(' Derecho de acceso a toda la Historia Clínica y copia únicamente del informe clínico de alta y del informe de urgencias ','c',false) ,
            new Opcion(' Derecho de acceso y copia de los datos que figuran en su Historia Clínica, salvo aquellos datos correspondientes a terceras personas que constan en ella recogidos en interés terapéutico del paciente, y a las anotaciones subjetivas de los profesionales participantes, a las que éstos pueden oponer el derecho de acceso ','d',true) 
        ])
        ,
        new Pregunta('28',28,'La ley 41/2002, de 14 de noviembre, básica reguladora de la autonomía del paciente y de derechos y obligaciones en materia de información y documentación clínica, indica que la conformidad del paciente a que se refiere el consentimiento informado será:',false,
        [
            new Opcion(' Libre, voluntaria y por escrito ','a',false) ,
            new Opcion(' Libre y voluntaria ','b',true) ,
            new Opcion(' Voluntaria e inconsciente ','c',false) ,
            new Opcion(' Meticulosa, libre y voluntaria ','d',false) 
        ])
        ,
        new Pregunta('29',29,'No forma parte del derecho a la información que se proporciona al paciente  ',false,
        [
            new Opcion(' La finalidad y la naturaleza de cada intervención ','a',false) ,
            new Opcion(' Los riesgos de cada intervención ','b',false) ,
            new Opcion(' Las consecuencias de cada intervención ','c',false) ,
            new Opcion(' Todas forman parte del derecho a la información ','d',true) 
        ])
        ,
        new Pregunta('30',30,'No es un contenido de la Tarjeta Sanitaria Individual:',false,
        [
            new Opcion(' El DNI ','a',false) ,
            new Opcion(' El CITE ','b',false) ,
            new Opcion(' El CIPA ','c',false) ,
            new Opcion(' Todos son contenidos de este documento ','d',true) 
        ])
        ,
        new Pregunta('31',31,' Según la Ley de Prevención de Riesgos laborales, es competencia del Comité de Seguridad y Salud:',false,
        [
            new Opcion(' Proyectar y aprobar la elaboración, puesta en práctica y evaluación de los planes y programas de protección de riesgos en la empresa  ','a',false) ,
            new Opcion(' Participar en la elaboración, puesta en práctica y evaluación de los planes y programas de prevención de riesgos en la empresa  ','b',true) ,
            new Opcion(' Aprobar y elaborar la evaluación de los planes y programas de prevención de riesgos en la empresa  ','c',false) ,
            new Opcion(' Ninguna es correcta ','d',false) 
        ])
        ,
        new Pregunta('32',32,' Según la Ley de Prevención de Riesgos laborales, es obligación del trabajador:',false,
        [
            new Opcion(' Utilizar correctamente los medios y equipos de protección que ha adquirido a su costa, de acuerdo con las instrucciones recibidas de éste  ','a',false) ,
            new Opcion(' Utilizar correctamente los medios y equipos de protección facilitados por el empresario, de acuerdo con las instrucciones recibidas de éste  ','b',true) ,
            new Opcion(' No existe obligación del trabajador, son del empresario  ','c',false) ,
            new Opcion(' Recibir una adecuada formación de los riesgos laborales ','d',false) 
        ])
        ,
        new Pregunta('33',33,' Según la Ley de Prevención de Riesgos laborales, es obligación del trabajador:',false,
        [
            new Opcion(' Cooperar con el empresario para que éste pueda garantizar unas condiciones de trabajo que sean seguras  ','a',true) ,
            new Opcion(' Exigir al empresario que siempre garantice las condiciones de trabajo sean o no seguras  ','b',false) ,
            new Opcion(' El trabajador no tiene que cooperar con el empresario  ','c',false) ,
            new Opcion(' Participar activamente en el Comité de Seguridad y Salud, a través de sus representantes ','d',false) 
        ])
        ,
        new Pregunta('34',34,'Según lo dispuesto en el artículo 31 de la Ley 55/2003, de 16 de diciembre, del Estatuto Marco del personal estatutario de los servicios de salud, señale la afirmación correcta:',false,
        [
            new Opcion(' La selección del personal estatutario fijo se efectuará con carácter general a través del sistema de oposición. ','a',false) ,
            new Opcion(' La selección del personal estatutario fijo podrá realizarse a través del sistema de concurso cuando así resulte más adecuado en función de las características socio-culturales del colectivo. ','b',false) ,
            new Opcion(' La selección del personal estatutario fijo se realizará por el sistema de concurso-oposición únicamente cuando las peculiaridades de las tareas a desarrollar así lo aconsejen. ','c',false) ,
            new Opcion(' La selección del personal estatutario fijo se efectuará con carácter general a través del sistema concurso-oposición.  ','d',true) 
        ])
        ,
        new Pregunta('35',35,'Conforme al art 6 de la Ley 41/2002 la titularidad del derecho a la información epidemiológica corresponde a... ',false,
        [
            new Opcion(' Los ciudadanos ','a',true) ,
            new Opcion(' El equipo asistencial ','b',false) ,
            new Opcion(' Los medios de comunicación ','c',false) ,
            new Opcion(' El paciente es el titular de este derecho ','d',false) 
        ])
        ,
        new Pregunta('36',36,'Según el artículo 71 del Estatuto Marco del personal estatutario de los servicios de salud, el procedimiento disciplinario se ajustará en todos los servicios de salud a los principios de:',false,
        [
            new Opcion(' Inmediatez y economía procesal y tipicidad.  ','a',false) ,
            new Opcion(' Cooperación, proporcionalidad y tipicidad. ','b',false) ,
            new Opcion(' Inmediatez, economía procesal y pleno respeto de los derechos y garantías correspondientes. ','c',true) ,
            new Opcion(' Economía procesal y cooperación. ','d',false) 
        ])
        ,
        new Pregunta('37',37,'Según el artículo 72 de la Ley 55/2003, de 16 de diciembre, del Estatuto marco del personal estatutario de los servicios de salud, la exigencia de cualquier tipo de compensación por los servicios prestados a los usuarios de los servicios de salud, se considera una falta disciplinaria de carácter:',false,
        [
            new Opcion(' Leve ','a',false) ,
            new Opcion(' Grave  ','b',false) ,
            new Opcion(' Muy grave ','c',true) ,
            new Opcion(' No se considera una falta ','d',false) 
        ])
        ,
        new Pregunta('38',38,'La falta de respeto con los superiores, compañeros, subordinados y público será:',false,
        [
            new Opcion(' Falta leve ','a',false) ,
            new Opcion(' Falta grave  ','b',true) ,
            new Opcion(' Falta muy grave ','c',false) ,
            new Opcion(' No es una falta, es una sanción ','d',false) 
        ])
        ,
        new Pregunta('39',39,'Los principios de acción preventiva mencionados en la ley de prevención de riesgos laborales, vienen establecidos en:',false,
        [
            new Opcion(' en el artículo 15  ','a',true) ,
            new Opcion(' en el artículo 22  ','b',false) ,
            new Opcion(' en el artículo 11  ','c',false) ,
            new Opcion(' en el artículo 19 ','d',false) 
        ])
        ,
        new Pregunta('40',40,'El artículo 22 de la ley de prevención de riesgos laborales 31/1995 trata sobre:',false,
        [
            new Opcion(' protección de menores.  ','a',false) ,
            new Opcion(' La vigilancia de la salud  ','b',true) ,
            new Opcion(' Formación de los trabajadores  ','c',false) ,
            new Opcion(' Riesgo grave e inminente ','d',false) 
        ])
        ,
        new Pregunta('41',41,'Las sanciones impuestas por faltas graves prescriben a los:',false,
        [
            new Opcion(' Cuatro años ','a',false) ,
            new Opcion(' Seis meses ','b',false) ,
            new Opcion(' Dos años ','c',true) ,
            new Opcion(' Seis años ','d',false) 
        ])
        ,
        new Pregunta('42',42,'El quebranto de la reserva de los datos del centro o la intimidad personal de los usuarios y la información de su proceso y estancia en las instituciones o centros sanitarios, ¿es una falta disciplinaria de carácter...?',false,
        [
            new Opcion(' Leve ','a',false) ,
            new Opcion(' Grave, si hay encubrimiento y consentimiento ','b',false) ,
            new Opcion(' Grave  ','c',false) ,
            new Opcion(' Muy grave ','d',true) 
        ])
        ,
        new Pregunta('43',43,'El artículo 5 del Estatuto Marco indica que el personal estatutario de los Servicios de Salud se clasifica en:',false,
        [
            new Opcion(' En personal sanitario y personal de gestión y servicios ','a',false) ,
            new Opcion(' En personal fijo y personal temporal ','b',false) ,
            new Opcion(' En personal universitario, personal con formación profesional y otro tipo de personal ','c',false) ,
            new Opcion(' Atendiendo a la función desarrollada, al nivel del título exigido para el ingreso y al tipo de su nombramiento  ','d',true) 
        ])
        ,
        new Pregunta('44',44,'El Estatuto Marco del personal estatutario de los Servicios de Salud es aplicable:',false,
        [
            new Opcion(' Exclusivamente al personal sanitario funcionario y al personal sanitario laboral que preste servicios en los Centros del Sistema Nacional de Salud ','a',false) ,
            new Opcion(' Al personal estatutario que desempeña su función en los Centros e Instituciones Sanitarias de los Servicios de Salud de las Comunidades Autónomas ','b',false) ,
            new Opcion(' Al personal estatutario que desempeña su función en los Centros e Instituciones Sanitarias de los Servicios Sanitaria de la Administración General del Estado ','c',false) ,
            new Opcion(' Al personal estatutario que desempeña su función en los Centros e Instituciones Sanitarias de los Servicios de Salud de las Comunidades Autónomas o en los Centros y Servicios Sanitarios de la Administración General del Estado  ','d',true) 
        ])
        ,
        new Pregunta('45',45,'Las sanciones impuestas por faltas muy graves prescriben:',false,
        [
            new Opcion(' A los seis meses ','a',false) ,
            new Opcion(' A los dos años  ','b',false) ,
            new Opcion(' A los cuatro años ','c',true) ,
            new Opcion(' A los seis años ','d',false) 
        ])
        ,
        new Pregunta('46',46,'El personal estatutario de los servicios de salud se clasifica atendiendo (señale la incorrect',false,
        [
            new Opcion(': ','a',false) ,
            new Opcion(' Al nivel del título académico exigido para el ingreso ','b',false) ,
            new Opcion(' A la función desarrollada ','c',false) ,
            new Opcion(' Al tipo de su nombramiento. ','d',true) 
        ])
        ,
        new Pregunta('47',47,'Dentro de las medidas de prevención del dolor de espalda en la movilización de enfermos está:',false,
        [
            new Opcion(' Utilización de apoyos ','a',false) ,
            new Opcion(' Cargar cerca del cuerpo ','b',false) ,
            new Opcion(' Espalda recta y piernas flexionadas ','c',false) ,
            new Opcion(' Todas son correctas ','d',true) 
        ])
        ,
        new Pregunta('48',48,'La entrada y salida del ascensor con cama o camilla se hará de la siguiente forma:',false,
        [
            new Opcion(' Para entrar en el ascensor entrara primero el celador, tirando de la cabecera de la cama o camilla, entrando los pies lo último. ','a',false) ,
            new Opcion(' Para salir del ascensor empujara por el cabecero de la cama o camilla, saliendo del mismo los pies del paciente primero. ','b',false) ,
            new Opcion(' Para entrar empujará la cabecera y para salir tirara de la cama o camilla, teniendo siempre contacto visual con el enfermo. ','c',false) ,
            new Opcion(' La respuesta correcta es ','d',true) 
        ])
        ,
        new Pregunta('49',49,'Atendiendo al nivel académico del título exigido para el ingreso, el personal estatutario sanitario se clasifica de la siguiente forma (señale la incorrect',false,
        [
            new Opcion(': ','a',false) ,
            new Opcion(' Personal de formación universitaria ','b',false) ,
            new Opcion(' Técnicos superiores. ','c',true) ,
            new Opcion(' Otro personal.  ','d',false) 
        ])
        ,
        new Pregunta('50',50,'El personal estatutario temporal podrá ser:',false,
        [
            new Opcion(' Fijo, de interinidad, de carácter eventual o de sustitución. ','a',false) ,
            new Opcion(' De interinidad, o de sustitución. ','b',false) ,
            new Opcion(' De interinidad o de carácter eventual. ','c',false) ,
            new Opcion(' De interinidad, de carácter eventual o de sustitución.  ','d',true) 
        ])
        ,
        new Pregunta('51',51,'¿Qué normativa trata sobre la protección de trabajadores ante la exposición a agentes biológicos?',false,
        [
            new Opcion(' RD 488/1997  ','a',false) ,
            new Opcion(' RD 487/1997  ','b',false) ,
            new Opcion(' RD 485/1997  ','c',false) ,
            new Opcion(' RD 664/1997 ','d',true) 
        ])
        ,
        new Pregunta('52',52,'El nombramiento de personal estatutario interino se expedirá:',false,
        [
            new Opcion(' Para el desempeño de una plaza vacante de los centros o servicios de salud, cuando sea necesario atender las correspondientes funciones. ','a',true) ,
            new Opcion(' Para la prestación de servicios complementarios de una reducción de jornada ordinaria. ','b',false) ,
            new Opcion(' Cuando se trate de la prestación de servicios determinados de naturaleza temporal, coyuntural o extraordinaria. ','c',false) ,
            new Opcion(' Cuando sea necesario para garantizar el funcionamiento permanente y continuado de los centros sanitarios.  ','d',false) 
        ])
        ,
        new Pregunta('53',53,'No es un derecho individual del personal estatutario de los servicios de salud:',false,
        [
            new Opcion(' La negociación colectiva, representación y participación en la determinación de las condiciones de trabajo. ','a',true) ,
            new Opcion(' La estabilidad en el empleo y al ejercicio o desempeño efectivo de la profesión o funciones que correspondan a su nombramiento. ','b',false) ,
            new Opcion(' La formación continuada adecuada a la función desempeñada y al reconocimiento de su cualificación profesional en relación a dichas funciones. ','c',false) ,
            new Opcion(' La acción social en los términos y ámbitos subjetivos que se determinen en las normas, acuerdos o convenios aplicables.  ','d',false) 
        ])
        ,
        new Pregunta('54',54,'No es un deber del personal estatutario de los servicios de salud:',false,
        [
            new Opcion(' Ser identificados por su nombre y categoría profesional por los usuarios del Sistema Nacional de Salud. ','a',false) ,
            new Opcion(' Respetar la dignidad e intimidad personal de los usuarios de los servicios de salud, su libre disposición en las decisiones que le conciernen y el resto de los derechos que les reconocen las disposiciones aplicables, ','b',false) ,
            new Opcion(' Mantener la debida reserva y confidencialidad de la información y documentación relativa a los centros sanitarios y a los usuarios obtenida, o a la que tenga acceso, en el ejercicio de sus funciones. ','c',false) ,
            new Opcion(' No realizar discriminación alguna por motivos de nacimiento, raza, sexo, religión, opinión o cualquier otra circunstancia personal o social, salvo por la condición en virtud de la cual los usuarios de los centros e instituciones sanitarias accedan a los mismos.  ','d',true) 
        ])
        ,
        new Pregunta('55',55,'El personal estatutario de los servicios de salud (señale la incorrect',false,
        [
            new Opcion(' ','a',false) ,
            new Opcion(' Tiene derecho a progresar, de forma individualizada, como reconocimiento a su desarrollo profesional en cuanto a conocimientos, experiencia y cumplimiento de los objetivos de la organización a la cual prestan sus servicios ','b',true) ,
            new Opcion(' No tiene derecho a la carrera profesional ','c',false) ,
            new Opcion(' Todas las respuestas son incorrectas.  ','d',false) 
        ])
        ,
        new Pregunta('56',56,'La excedencia voluntaria puede ser (señale la incorrect',false,
        [
            new Opcion(' ','a',false) ,
            new Opcion(' De oficio  ','b',false) ,
            new Opcion(' Por agrupación familiar ','c',true) ,
            new Opcion(' Por prestar servicios en el sector público. ','d',false) 
        ])
        ,
        new Pregunta('57',57,'El personal en excedencia voluntaria:',false,
        [
            new Opcion(' Tendrá derecho al cómputo de tiempo a efectos de antigüedad y carrera, en su caso, al percibo de trienios y a la reserva de la plaza de origen. ','a',false) ,
            new Opcion(' No devengará retribuciones, ni le será computable el tiempo que permanezca en tal situación a efectos de carrera profesional o trienios.  ','b',true) ,
            new Opcion(' Tendrá derecho al cómputo de tiempo a efectos de antigüedad y a la reserva de la plaza de origen ','c',false) ,
            new Opcion(' Goza de todos los derechos y queda sometido a todos los deberes ','d',false) 
        ])
        ,
        new Pregunta('58',58,'El celador en la subida y bajada de una rampa con silla de ruedas, actuará... ',false,
        [
            new Opcion(' Para subir, empujara la silla desde atrás, el paciente irá de cara a la marcha. ','a',false) ,
            new Opcion(' Para bajar, caminara de espaldas a la rampa.  ','b',false) ,
            new Opcion(' Las repuestas ','c',true) ,
            new Opcion(' y ','d',false) 
        ])
        ,
        new Pregunta('59',59,' Se debe tramitar un expediente disciplinario por la imposición de faltas:',false,
        [
            new Opcion(' Muy graves ','a',false) ,
            new Opcion(' Graves ','b',false) ,
            new Opcion(' Leves ','c',false) ,
            new Opcion(' Son correctas ','d',true) 
        ])
        ,
        new Pregunta('60',60,'No es un criterio aplicable en la imposición de las sanciones la:',false,
        [
            new Opcion(' Del grado de intencionalidad ','a',false) ,
            new Opcion(' El daño al interés publico ','b',false) ,
            new Opcion(' La negligencia ','c',false) ,
            new Opcion(' Todas son correctas ','d',true) 
        ])
])
,new Examen('CCOO (11-15)',10,
[
        new Pregunta('1',1,' En relación con la utilización de ayudas técnicas para movilizar a un paciente, señalar la respuesta correcta:',false,
        [
            new Opcion(' Se usarán siempre que se tengan a disposición ','a',false) ,
            new Opcion(' Se usarán siempre que resulte más fácil para el celador ','b',false) ,
            new Opcion(' Se usarán una vez valorado el estado del paciente y verificado que con la movilización manual existe un riesgo de lesión para el personal celador o para el estado del paciente ','c',true) ,
            new Opcion(' El uso de grúas indiscriminado para cualquier tipo de persona enferma encamada facilita su recuperación funcional ','d',false) 
        ])
        ,
        new Pregunta('2',2,' La movilidad de los enfermos encamados para hacerles la cama corresponde a:',false,
        [
            new Opcion(' Los enfermeros de planta de hospitalización ','a',false) ,
            new Opcion(' Los auxiliares de enfermería ','b',false) ,
            new Opcion(' Los celadores  ','c',false) ,
            new Opcion(' Al personal de enfermería ayudados por el celador cuando el enfermo requiera un trato especial en razón a sus dolencias  ','d',true) 
        ])
        ,
        new Pregunta('3',3,' Indique la opción incorrecta. Cuando el paciente no colabora para hacer un cambio postural:',false,
        [
            new Opcion(' Se coloca un auxiliar de enfermería al lado derecho de la cama y un celador al lado izquierdo ','a',false) ,
            new Opcion(' Los pies del auxiliar de enfermería y celador deben estar separados y las rodillas ligeramente flexionadas ','b',false) ,
            new Opcion(' Hay que retirar la almohada del paciente ','c',false) ,
            new Opcion(' Se le dice al paciente que haga fuerzas con sus pies y brazos intentando incorporarse ','d',true) 
        ])
        ,
        new Pregunta('4',4,' Para sentar al paciente en el borde de la cama el celador deberá:',false,
        [
            new Opcion(' Colocar la cama en posición Trendelemburg ','a',false) ,
            new Opcion(' Mover al paciente hacia el centro de la cama elevando ésta con la manivela ','b',false) ,
            new Opcion(' Sujetar con una mano el hombro más alejado del paciente, pasando el brazo por detrás de la cabeza, y con la otra mano sujetará sus piernas, colocando el brazo por encima de sus rodillas, a continuación elevará y rotará su cuerpo en un solo movimiento hasta sentarlo ','c',true) ,
            new Opcion(' Sujetar con una mano el hombro más cercano del paciente y con la otra mano sujetará sus piernas, colocando el brazo por debajo de sus rodillas, a continuación elevará y rotará su cuerpo en un solo movimiento hasta sentarlo ','d',false) 
        ])
        ,
        new Pregunta('5',5,' Sobre la higiene de manos y uso correcto de guantes en los centros sanitarios, ¿cuál de las siguientes recomendaciones es incorrecta?',false,
        [
            new Opcion(' Cuando se va a realizar un procedimiento quirúrgico se deben frotar las manos y antebrazos con jabón antiséptico durante el tiempo recomendado por el fabricante, generalmente entre 2 y 6 minutos. Mayor tiempo de frotamiento (10 minutos) no es necesario ','a',false) ,
            new Opcion(' Descontaminación de manos antes y después del contacto con piel intacta o ropa no manchada del paciente  ','b',false) ,
            new Opcion(' El uso de guantes evita la necesidad de descontaminación de manos ','c',true) ,
            new Opcion(' No añadir jabón en un dispensador parcialmente vacío. Esta práctica del "relleno" puede provocar la contaminación bacteriana del jabón ','d',false) 
        ])
        ,
        new Pregunta('6',6,' La posición en la que hay que colocar a los pacientes para realizar una R.C.P, es la:',false,
        [
            new Opcion(' Sims ','a',false) ,
            new Opcion(' Antishock ','b',false) ,
            new Opcion(' Decúbito supino ','c',true) ,
            new Opcion(' Decúbito lateral de seguridad  ','d',false) 
        ])
        ,
        new Pregunta('7',7,' Un paciente encamado y en decúbito supino, se le coloca una almohada a la altura de los gemelos con el objetivo de:',false,
        [
            new Opcion(' Ayudar al paciente para que esté más cómodo ','a',false) ,
            new Opcion(' Dejar los talones al aire, para quitar presión en ellos ','b',true) ,
            new Opcion(' Evitar que las rodillas estén en extensión ','c',false) ,
            new Opcion(' Ninguna de las respuestas anteriores es correcta ','d',false) 
        ])
        ,
        new Pregunta('8',8,' ¿Cuál es la posición anatómica que es una modificación del "decúbito prono", en la cual el paciente se coloca con las caderas elevadas respecto al resto del cuerpo?',false,
        [
            new Opcion(' De Roser ','a',false) ,
            new Opcion(' De Laminectomía ','b',false) ,
            new Opcion(' De Trendelemburg ','c',false) ,
            new Opcion(' De Kraske ','d',true) 
        ])
        ,
        new Pregunta('9',9,' En el supuesto en que un celador esté trasladando a un paciente encamado y súbitamente éste tenga problemas respiratorios, ¿en qué posición debe colocarlo el celador?',false,
        [
            new Opcion(' Posición de Fowler ','a',true) ,
            new Opcion(' Posición antishock ','b',false) ,
            new Opcion(' Posición lateral de seguridad ','c',false) ,
            new Opcion(' Posición de decúbito prono ','d',false) 
        ])
        ,
        new Pregunta('10',10,' Indicar cuál es la posición más adecuada en la que hay que colocar al enfermo para realizarle una extracción de fecalomas:',false,
        [
            new Opcion(' Sims ','a',false) ,
            new Opcion(' Antitrendelenburg ','b',false) ,
            new Opcion(' Fowler completa ','c',false) ,
            new Opcion(' Genupectoral ','d',true) 
        ])
        ,
        new Pregunta('11',11,' En el caso de que un paciente presente shock hipovolémico, hipotensión arterial severa y otras situaciones que requieran un buen aporte sanguíneo cerebral está indicada la posición:',false,
        [
            new Opcion(' Antitrendelenburg ','a',false) ,
            new Opcion(' Morestin ','b',false) ,
            new Opcion(' Trendelenburg ','c',true) ,
            new Opcion(' Litotomía ','d',false) 
        ])
        ,
        new Pregunta('12',12,' En el animalario es tarea propia del celador:',false,
        [
            new Opcion(' Vigilar la distribución de las comidas ','a',false) ,
            new Opcion(' Vigilar personalmente la limpieza de la institución ','b',false) ,
            new Opcion(' Cuidar del uso indebido de los medicamentos en la farmacia hospitalaria ','c',false) ,
            new Opcion(' Limpiar las jaulas de los animales en los laboratorios experimentales ','d',true) 
        ])
        ,
        new Pregunta('13',13,' En el animalario, indicar cuál de estas funciones no corresponde al celador:',false,
        [
            new Opcion(' Mantener limpias las jaulas de los animales utilizados en experimentación ','a',false) ,
            new Opcion(' Alimentar y asear a los animales utilizados en experimentación ','b',false) ,
            new Opcion(' Seccionar dichos animales en los quirófanos por indicación del personal facultativo ','c',true) ,
            new Opcion(' Ninguna de las anteriores corresponde al celador ','d',false) 
        ])
        ,
        new Pregunta('14',14,' El celador que presta sus servicios en el animalario deberá:',false,
        [
            new Opcion(' Tener a su cargo los animales utilizados en los quirófanos experimentales ','a',false) ,
            new Opcion(' Tener a su cargo los animales utilizados en los laboratorios ','b',false) ,
            new Opcion(' Cuidar de los animales, alimentándolos, manteniendo limpias las jaulas y aseándoles ','c',false) ,
            new Opcion(' Todas las respuestas anteriores son correctas ','d',true) 
        ])
        ,
        new Pregunta('15',15,' En un servicio de farmacia se denomina unidosis:',false,
        [
            new Opcion(' A la conservación de una dosis de cada medicamento para su posterior análisis ','a',false) ,
            new Opcion(' A la distribución de medicamentos según las necesidades de cada servicio ','b',false) ,
            new Opcion(' A la dispensación de un mismo medicamento para todos los pacientes ','c',false) ,
            new Opcion(' A la dispensación individualizada de medicamentos ','d',true) 
        ])
        ,
        new Pregunta('16',16,' No es función propia del celador de farmacia:',false,
        [
            new Opcion(' El traslado de carros unidosis a las Unidades asistenciales ','a',false) ,
            new Opcion(' Preparar los pedidos de sueros y su traslado a las Unidades peticionarias ','b',false) ,
            new Opcion(' La distribución individual de la medicación en los carros de unidosis ','c',true) ,
            new Opcion(' La custodia de la farmacia y la elaboración de alcohol ','d',false) 
        ])
        ,
        new Pregunta('17',17,' ¿Cuándo se deben efectuar los cuidados post-mortem?',false,
        [
            new Opcion(' Antes de que los familiares conozcan la muerte del paciente ','a',false) ,
            new Opcion(' Cuando el médico haya certificado el fallecimiento ','b',true) ,
            new Opcion(' Antes de que aparezca el rigor mortis ','c',false) ,
            new Opcion(' Cuando el cuerpo esté debidamente aislado ','d',false) 
        ])
        ,
        new Pregunta('18',18,' Se va a realizar un cambio postural a un paciente de la posición decúbito supino a decúbito lateral, ¿cómo se realizará el movimiento?',false,
        [
            new Opcion(' Desplazándolo hasta la misma orilla de la cama hacia la que se va a girar el cuerpo ','a',false) ,
            new Opcion(' Desplazándolo hasta la orilla contraria de la cama hacia la que se va a girar el cuerpo ','b',true) ,
            new Opcion(' Colocándole en la posición de Morestin ','c',false) ,
            new Opcion(' Poniéndole una almohada debajo de los pies ','d',false) 
        ])
        ,
        new Pregunta('19',19,' Durante una intervención quirúrgica el celador permanecerá en:',false,
        [
            new Opcion(' El antequirófano ','a',true) ,
            new Opcion(' La sala de reanimación ','b',false) ,
            new Opcion(' Los pasillos del quirófano ','c',false) ,
            new Opcion(' Cualquier sitio, ya que es indiferente ','d',false) 
        ])
        ,
        new Pregunta('20',20,' En el quirófano, una de las principales tareas del celador es:',false,
        [
            new Opcion(' Trasladar a los pacientes desde sus respectivas habitaciones a las zonas de quirófano ','a',true) ,
            new Opcion(' Ayudar dentro del quirófano a entregar el instrumental al personal médico y sanitario ','b',false) ,
            new Opcion(' Las dos respuestas anteriores son correctas ','c',false) ,
            new Opcion(' Ninguna de las respuestas anteriores es correcta ','d',false) 
        ])
        ,
        new Pregunta('21',21,' ¿Cuál es la posición que se emplea para casi todos los procedimientos quirúrgicos perianales, rectales y vaginales?',false,
        [
            new Opcion(' Posición de Trendelemburg ','a',false) ,
            new Opcion(' Posición de Sims ','b',false) ,
            new Opcion(' Posición de Litotomía ','c',true) ,
            new Opcion(' Posición de Decúbito dorsal ','d',false) 
        ])
        ,
        new Pregunta('22',22,' En el plan de cambios posturales del paciente encamado, la posición se mantendrá:',false,
        [
            new Opcion(' Durante 2 o 3 horas como máximo ','a',true) ,
            new Opcion(' Se realizarán cambios posturales coincidiendo con la toma de constantes por turno ','b',false) ,
            new Opcion(' Estarán a criterio del paciente ','c',false) ,
            new Opcion(' Todas las respuestas anteriores son correctas ','d',false) 
        ])
        ,
        new Pregunta('23',23,' ¿Cómo se denomina la posición en la que el plano del cuerpo está inclinado 45º respecto al plano del suelo, pero la cabeza está más elevada que los pies?',false,
        [
            new Opcion(' Posición de Trendelenburg ','a',false) ,
            new Opcion(' Posición Ginecológica ','b',false) ,
            new Opcion(' Posición Antitrendelenburg ','c',true) ,
            new Opcion(' Posición de Sims ','d',false) 
        ])
        ,
        new Pregunta('24',24,' En la preparación para la transferencia del paciente de la cama a una camilla debemos:',false,
        [
            new Opcion(' Colocar la camilla en posición perpendicular a la cama y frenar ambas ','a',false) ,
            new Opcion(' Colocar al paciente en posición de decúbito prono ','b',false) ,
            new Opcion(' Colocar la camilla en paralelo junto a la cama y frenar ambas ','c',true) ,
            new Opcion(' Deslizar nuestras manos en sentido oblicuo bajo las articulaciones del paciente ','d',false) 
        ])
        ,
        new Pregunta('25',25,' Si es necesario realizarle a un paciente una radiografía con el aparato de rayos portátil, ¿cuál de las siguientes no será una misión del celador?',false,
        [
            new Opcion(' Ayudar a incorporar al paciente y colocar el chasis de la radiografía ','a',true) ,
            new Opcion(' Tomar las medidas de protección individual correspondientes ','b',false) ,
            new Opcion(' Transportar el aparato de rayos desde su ubicación hasta el paciente ','c',false) ,
            new Opcion(' Llevar la  petición o el parte de exploración al Servicio correspondiente ','d',false) 
        ])
        ,
        new Pregunta('26',26,' Usted está destinado como celador en el servicio de U.V.I. del centro hospitalario. A la hora de realizar los levantamientos de los pacientes que, según sus patologías, sean susceptibles de ser levantados se le indica que no se pueden utilizar medios mecánicos para ejecutar esa tarea. Usted:',false,
        [
            new Opcion(' Exigirá que se le explique el motivo de tal medida ','a',false) ,
            new Opcion(' Colaborará en la realización del trabajo de la forma indicada y, a continuación lo pondrá en conocimiento   de sus superiores para que tomen las medidas oportunas ','b',true) ,
            new Opcion(' No colaborará en la realización del trabajo de esa forma, y lo pondrá en conocimiento de sus superiores para que tomen las medidas oportunas ','c',false) ,
            new Opcion(' Las respuestas A y B son las correctas ','d',false) 
        ])
        ,
        new Pregunta('27',27,' Qué deberá utilizar habitualmente el celador de quirófano como medida de higiene?',false,
        [
            new Opcion(' Nada, no es necesario nada en absoluto. Porque el celador se queda en el antiquirófano.  ','a',false) ,
            new Opcion(' Unos zuecos y un uniforme verde ','b',false) ,
            new Opcion(' Uniforme aséptico, calzas, mascarilla y gorro ','c',true) ,
            new Opcion(' Unos guantes y una bata no estériles únicamente ','d',false) 
        ])
        ,
        new Pregunta('28',28,' Cómo se debe colocar el cuerpo del paciente después de la muerte?',false,
        [
            new Opcion(' En decúbito prono, con los brazos a los lados, las palmas de las manos hacia abajo o cruzadas debajo de su abdomen ','a',false) ,
            new Opcion(' En decúbito supino, con los brazos a los lados, las palmas de las manos hacia abajo o cruzadas sobre el abdomen ','b',true) ,
            new Opcion(' En decúbito prono, con los brazos extendidos y las palmas de las manos hacia arriba ','c',false) ,
            new Opcion(' En decúbito supino, con los brazos extendidos y las palmas de las manos hacia arriba ','d',false) 
        ])
        ,
        new Pregunta('29',29,' “La salud es el perfecto estado de bienestar físico, psíquico y social, y no sólo la ausencia de enfermedad", es la definición de salud que hace la:',false,
        [
            new Opcion(' O.N.U ','a',false) ,
            new Opcion(' O.M.S ','b',true) ,
            new Opcion(' Ley General de Sanidad ','c',false) ,
            new Opcion(' Constitución ','d',false) 
        ])
        ,
        new Pregunta('30',30,' El traslado de un fallecido desde el servicio de urgencias de un hospital hasta el mortuorio es una función de:',false,
        [
            new Opcion(' Auxiliar de enfermería ','a',false) ,
            new Opcion(' Personal de la funeraria ','b',false) ,
            new Opcion(' Celador ','c',true) ,
            new Opcion(' Autoriza el traslado el coordinador de urgencias y lo traslada el celador ','d',false) 
        ])
        ,
        new Pregunta('31',31,' Si dentro del quirófano el facultativo le encomienda al celador varias tareas. ¿Cuál de las siguientes deberá realizar?',false,
        [
            new Opcion(' Revisar los quirófanos pertenecientes al bloque quirúrgico y reponer el mobiliario preciso en cada uno de ellos ','a',false) ,
            new Opcion(' Colocar el aparato de anestesia y la mesa de quirófano de la forma por él especificada para proceder a la intervención ','b',true) ,
            new Opcion(' Preparar lo necesario para una extracción de órganos destinada a un trasplante ','c',false) ,
            new Opcion(' El celador realizará todas las tareas enunciadas en los apartados anteriores ','d',false) 
        ])
        ,
        new Pregunta('32',32,' Si el encargado de turno le indica al celador que acuda urgentemente al quirófano, antes de entrar en el mismo, en todo caso deberá:',false,
        [
            new Opcion(' Ponerse ropa de uso exclusivo ','a',false) ,
            new Opcion(' Cambiar el calzado ','b',false) ,
            new Opcion(' Colocarse una mascarilla ','c',false) ,
            new Opcion(' Son correctas las respuestas A y C ','d',true) 
        ])
        ,
        new Pregunta('33',33,' La alimentación de los animales utilizados en los quirófanos experimentales es función de:',false,
        [
            new Opcion(' El Veterinario ','a',false) ,
            new Opcion(' El Auxiliar de Enfermería ','b',false) ,
            new Opcion(' El Celador ','c',true) ,
            new Opcion(' La Unidad de Nutrición ','d',false) 
        ])
        ,
        new Pregunta('34',34,' ¿Es función del celador amortajar al paciente fallecido en una planta de hospitalización?',false,
        [
            new Opcion(' Si ','a',false) ,
            new Opcion(' No ','b',false) ,
            new Opcion(' El celador colabora en la práctica del amortajamiento ayudando a las enfermeras o personas encargadas  ','c',true) ,
            new Opcion(' Ninguna de las respuestas anteriores es correcta ','d',false) 
        ])
        ,
        new Pregunta('35',35,' Según el estatuto jurídico del personal no sanitario al servicio de las instituciones sanitarias de la seguridad social, ¿a quién corresponde limpiar las jaulas de los animales utilizados en los laboratorios?',false,
        [
            new Opcion(' Al personal de limpieza especialista ','a',false) ,
            new Opcion(' A los celadores ','b',true) ,
            new Opcion(' Al personal Técnico en Cuidados de Auxiliar de Enfermería ','c',false) ,
            new Opcion(' Al personal Técnico Especialista de Laboratorio ','d',false) 
        ])
        ,
        new Pregunta('36',36,' Los celadores destinados en el animalario, ¿tienen como una de sus funciones ayudar a los facultativos en el quirófano de experimentación?',false,
        [
            new Opcion(' No, no es una de sus funciones ','a',true) ,
            new Opcion(' No, si no reciben la instrucción del personal del animalario por escrito ','b',false) ,
            new Opcion(' No, si no reciben la orden de los facultativos por escrito ','c',false) ,
            new Opcion(' Si, pero sólo cuando se trate de animales de gran tamaño ','d',false) 
        ])
        ,
        new Pregunta('37',37,' ¿Cuál no es función del celador de animalario?',false,
        [
            new Opcion(' Alimentación de los animales ','a',false) ,
            new Opcion(' Vacunación de los animales ','b',true) ,
            new Opcion(' Aseo de los animales ','c',false) ,
            new Opcion(' Cuidado de los animales ','d',false) 
        ])
        ,
        new Pregunta('38',38,' Entre las funciones de un celador en el servicio de farmacia:',false,
        [
            new Opcion(' Llevar los pedidos a las unidades destinatarias ','a',true) ,
            new Opcion(' Embolsar las unidosis ','b',false) ,
            new Opcion(' Ayudar en la realización de los preparados ','c',false) ,
            new Opcion(' Ninguna de las respuestas anteriores es correcta ','d',false) 
        ])
        ,
        new Pregunta('39',39,' Un celador destinado en el servicio de farmacia de un hospital deberá:',false,
        [
            new Opcion(' Trasladar los pedidos a los servicios que lo soliciten ','a',false) ,
            new Opcion(' Atender con carácter de urgencia la expedición de medicamentos por orden del farmacéutico, ante la ausencia del personal autorizado ','b',false) ,
            new Opcion(' Trasladar los medicamentos desde las plantas de hospitalización hasta la farmacia del hospital ','c',false) ,
            new Opcion(' Las respuestas A y C son correctas ','d',true) 
        ])
        ,
        new Pregunta('40',40,' Los pedidos que las unidades de hospitalización, incluida la urgencia hacen a la farmacia los realiza:',false,
        [
            new Opcion(' El farmacéutico o responsable de la farmacia hospitalaria ','a',false) ,
            new Opcion(' Es una de las funciones del celador de farmacia ','b',false) ,
            new Opcion(' La supervisora de la unidad de hospitalización ','c',true) ,
            new Opcion(' La Técnico en Cuidados de  Auxiliar de Enfermería o Auxiliar de Farmacia. ','d',false) 
        ])
        ,
        new Pregunta('41',41,' En los quirófanos, los celadores:',false,
        [
            new Opcion(' Informarán a los familiares de los pacientes intervenidos sobre el diagnóstico y tratamiento que se les aplica ','a',false) ,
            new Opcion(' Auxiliarán en aquellas labores propias de los Celadores destinados en estos servicios, así como en las que sean ordenadas por los Médicos, Supervisoras o Enfermeras ','b',true) ,
            new Opcion(' No existen celadores destinados en los quirófanos ','c',false) ,
            new Opcion(' Ninguna de las respuestas anteriores es correcta ','d',false) 
        ])
        ,
        new Pregunta('42',42,' En el traslado de un paciente desde la habitación de la planta hasta el quirófano, el celador comprobará:',false,
        [
            new Opcion(' Que, el paciente va rasurado ','a',false) ,
            new Opcion(' Que, se ha preparado correctamente al paciente para la intervención ','b',false) ,
            new Opcion(' Que, la identidad del paciente se corresponde con la historia clínica que le acompaña ','c',true) ,
            new Opcion(' Las respuestas B y C son correctas ','d',false) 
        ])
        ,
        new Pregunta('43',43,' En relación con el amortajamiento, no es correcto:',false,
        [
            new Opcion(' Realizar la higiene del cuerpo ','a',false) ,
            new Opcion(' Poner el cuerpo en decúbito prono ','b',true) ,
            new Opcion(' Colocar la cama en posición horizontal ','c',false) ,
            new Opcion(' Todas las respuestas anteriores son correctas ','d',false) 
        ])
        ,
        new Pregunta('44',44,' Sobre la higiene de manos y uso correcto de guantes en los centros sanitarios, ¿cuál de las siguientes recomendaciones es incorrecta?',false,
        [
            new Opcion(' Cuando se va a realizar un procedimiento quirúrgico se deben frotar las manos y antebrazos con jabón antiséptico durante el tiempo recomendado por el fabricante, generalmente entre 2 y 6 minutos. Mayor tiempo de frotamiento (10 minutos) no es necesario ','a',false) ,
            new Opcion(' Descontaminación de manos antes y después del contacto con piel intacta o ropa no manchada del paciente  ','b',false) ,
            new Opcion(' El uso de guantes evita la necesidad de descontaminación de manos ','c',true) ,
            new Opcion(' No añadir jabón en un dispensador parcialmente vacío. Esta práctica del "relleno" puede provocar la contaminación bacteriana del jabón ','d',false) 
        ])
        ,
        new Pregunta('45',45,' La higiene de manos por fricción con un preparado de base alcohólica se realizará:',false,
        [
            new Opcion(' Siempre que se vaya a realizar una tarea aséptica  ','a',false) ,
            new Opcion(' Cuando las manos estén visiblemente sucias ','b',false) ,
            new Opcion(' Cuando las manos no estén visiblemente sucias ','c',true) ,
            new Opcion(' Ninguna de las respuestas anteriores es correcta ','d',false) 
        ])
        ,
        new Pregunta('46',46,' Los llamados cinco momentos para el lavado de manos en el contexto hospitalario, son:',false,
        [
            new Opcion(' Antes de comenzar el turno de trabajo, antes de realizar una técnica aséptica, después de exponerse a fluidos corporales, después de entrar en contacto con el paciente y después de entrar en contacto con el entorno que rodea al paciente ','a',false) ,
            new Opcion(' Antes de entrar en la habitación del paciente, antes de realizar una técnica aséptica, antes de exponerse a fluidos corporales, antes de entrar en contacto con el paciente y antes de entrar en contacto con el entorno que rodea al paciente ','b',false) ,
            new Opcion(' Antes de entrar en contacto con el paciente, antes de realizar una técnica aséptica, después de exponerse a fluidos corporales, después de entrar en contacto con el paciente y después de entrar en contacto con el entorno que rodea al paciente ','c',true) ,
            new Opcion(' Antes de realizar una técnica aséptica, antes de exponerse a fluidos corporales, después de entrar en contacto con el paciente, después de entrar en contacto con el entorno que rodea al paciente y después de realizar el registro de los cuidados realizados al paciente ','d',false) 
        ])
        ,
        new Pregunta('47',47,' Las recomendaciones de la OMS sobre la duración del proceso de higiene de manos por fricción con un preparado de base alcohólica es de:',false,
        [
            new Opcion(' 10 segundos ','a',false) ,
            new Opcion(' 20-30 segundos ','b',true) ,
            new Opcion(' 50-60 segundos ','c',false) ,
            new Opcion(' 1-2 minutos ','d',false) 
        ])
        ,
        new Pregunta('48',48,' ¿Cuando el celador ayudará a realizar la movilización de un paciente intubado en U.V.I..?',false,
        [
            new Opcion(' No, tiene que realizarla el personal sanitario ','a',false) ,
            new Opcion(' Sí, con mucha precaución y siempre siguiendo las instrucciones del personal sanitario encargado del paciente ','b',true) ,
            new Opcion(' Si, si se lo ordena el médico de guardia ','c',false) ,
            new Opcion(' No, en ningún caso. A los pacientes intubados no se les moviliza. ','d',false) 
        ])
        ,
        new Pregunta('49',49,' En el servicio de anatomía patológica, ella celador/a deberá:',false,
        [
            new Opcion(' Limpiar la mesa, el instrumental y la propia sala de autopsias ','a',false) ,
            new Opcion(' Ayudará en la redacción de los informes ','b',false) ,
            new Opcion(' Ayudará en la práctica de autopsias en aquellas funciones auxiliares que no requieran, por su parte, hacer uso de ningún instrumental sobre el cadáver ','c',false) ,
            new Opcion(' Las respuestas A y C son correctas ','d',true) 
        ])
        ,
        new Pregunta('50',50,' ¿Qué medidas profilácticas deberá llevar a cabo el/la celador/a en la sala de autopsias?',false,
        [
            new Opcion(' Ninguna ','a',false) ,
            new Opcion(' El lavado de manos  ','b',true) ,
            new Opcion(' El uso de guantes estériles ','c',false) ,
            new Opcion(' Todas las respuestas anteriores son correctas ','d',false) 
        ])
        ,
        new Pregunta('51',51,' Las recomendaciones de la OMS sobre la duración de todo el proceso de higiene de manos por lavado es de:',false,
        [
            new Opcion(' 10 segundos ','a',false) ,
            new Opcion(' 15 segundos ','b',false) ,
            new Opcion(' 40-60 segundos ','c',true) ,
            new Opcion(' 1-2 minutos ','d',false) 
        ])
        ,
        new Pregunta('52',52,' El uso de guantes en materia de higiene del personal celador:',false,
        [
            new Opcion(' No sustituye al lavado de manos ','a',true) ,
            new Opcion(' Evita el lavado de manos antes del contacto con el paciente ','b',false) ,
            new Opcion(' Evita el lavado de manos después del contacto con el paciente ','c',false) ,
            new Opcion(' Evita el lavado de manos entre pacientes ','d',false) 
        ])
        ,
        new Pregunta('53',53,' Respecto a la sujeción mecánica del paciente en la unidad de psiquiatría, no es necesario:',false,
        [
            new Opcion(' El consentimiento del médico por escrito ','a',false) ,
            new Opcion(' Que esté registrada minuciosamente en el registro de contención mecánica ','b',false) ,
            new Opcion(' Utilizar sistemas homologados de sujeción física ','c',false) ,
            new Opcion(' El consentimiento informado del paciente ','d',true) 
        ])
        ,
        new Pregunta('54',54,' En la unidad de psiquiatría, es tarea propia del celador:',false,
        [
            new Opcion(' Quitar la sujeción terapéutica cuando el mismo considera que el paciente ya está tranquilo ','a',false) ,
            new Opcion(' Dar la comida al paciente que se resiste a comer ','b',false) ,
            new Opcion(' Colaborar en la sujeción o reducción del paciente ','c',true) ,
            new Opcion(' Comprobar que el paciente ha tomado la medicación para dormir ','d',false) 
        ])
        ,
        new Pregunta('55',55,' En la unidad de psiquiatría del hospital un paciente empieza a actuar de forma muy violenta. ¿Quién tendría que realizar las maniobras de contención mecánica?',false,
        [
            new Opcion(' Exclusivamente el Celador de la Unidad ','a',false) ,
            new Opcion(' El Personal Sanitario iniciara la contención administrando los fármacos que el enfermo precise ','b',false) ,
            new Opcion(' La implicación en la actuación de reducir al paciente debe ser de todo el personal, independientemente del estamento profesional ','c',true) ,
            new Opcion(' El personal de seguridad por que tienen una formación especializada ','d',false) 
        ])
        ,
        new Pregunta('56',56,' Como regla general los locales para la realización de estudios autópsicos clínicos deberán reunir las siguientes condiciones:',false,
        [
            new Opcion(' 20 m de superficie y refrigeradores de cadáveres con capacidad para dos cadáveres cada doscientas camas 2 ','a',true) ,
            new Opcion(' 40 m de superficie y refrigeradores de cadáveres con capacidad para dos cadáveres cada doscientas camas 2 ','b',false) ,
            new Opcion(' 30 m de superficie y refrigeradores de cadáveres con capacidad para dos cadáveres cada doscientas camas 2 ','c',false) ,
            new Opcion(' 20 m de superficie y refrigeradores de cadáveres con capacidad para dos cadáveres cada cien camas ','d',false) 
        ])
        ,
        new Pregunta('57',57,' ¿Cuál de estos datos debe estar consignado en la ficha del almacén?',false,
        [
            new Opcion(' La referencia del producto  ','a',true) ,
            new Opcion(' De donde viene  ','b',false) ,
            new Opcion(' Quien lo ha solicitado  ','c',false) ,
            new Opcion(' Como ha sido transportado el material. ','d',false) 
        ])
        ,
        new Pregunta('58',58,' ¿Qué es lo que caracteriza el material fungible?',false,
        [
            new Opcion(' Su larga duración  ','a',false) ,
            new Opcion(' Su coste  ','b',false) ,
            new Opcion(' Su función  ','c',false) ,
            new Opcion(' Su fragilidad, desaparece con el uso y tiene una vida corta. ','d',true) 
        ])
        ,
        new Pregunta('59',59,' ¿Cuáles son los objetivos fundamentales en la distribución de productos?',false,
        [
            new Opcion(' Rapidez y limpieza  ','a',false) ,
            new Opcion(' Efectividad y orden  ','b',false) ,
            new Opcion(' Rapidez y efectividad  ','c',true) ,
            new Opcion(' Periodicidad y orden. ','d',false) 
        ])
        ,
        new Pregunta('60',60,' La comprobación de que los bultos que llegan al almacén, son los que constan en el albarán de entrega se realizará:',false,
        [
            new Opcion(' En el instante de la petición del material ','a',false) ,
            new Opcion(' Al recibir el material ','b',true) ,
            new Opcion(' Al realizar el inventario ','c',false) ,
            new Opcion(' En el momento de entrega del material a los distintos servicios ','d',false) 
        ])
])
/*
,new Examen('Cuestionario 5.1',5,
[

  
])

*/
  ]
}

