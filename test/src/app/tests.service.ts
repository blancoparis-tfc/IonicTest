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
])

  ]
}

