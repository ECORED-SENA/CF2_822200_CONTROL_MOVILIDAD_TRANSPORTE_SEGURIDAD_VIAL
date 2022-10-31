<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Aspectos relacionados con el transporte

    .row.justify-content-center.align-items-start.mb-5
      .col-lg-4(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t2/t2_01.png", alt="alt")
      .col-lg-8(data-aos="fade-left")
        .bg--yellow2.p-4
          p.mb-0 En la historia colombiana el tema del transporte es un aspecto sustancial para la economía del país, en cuanto a la producción y el servicio público de movilidad, por tanto, la responsabilidad que se desarrolla en torno a los modos de transporte puede definirse de la siguiente manera.

    .row.mb-4(data-aos="fade-right")
      .col-auto
        .cstmH3
          .row
            .col-auto
              figure
                img(src="@/assets/curso/temas/recursos/h3_icon.svg", alt="alt").img35
            .col.gx-0
              h3 Modos de transporte    

    p(data-aos="fade-left").mb-4 El sector transporte se encuentra en cabeza del Ministerio de Transporte como su máxima autoridad, que a través del Decreto 1079 de 2015 indica como objetivo primordial “la formulación y adopción de las políticas, planes, programas, proyectos y regulación económica en materia de transporte, tránsito e infraestructura y, la regulación técnica del transporte y tránsito de los modos carretero, marítimo, fluvial, férreo y aéreo”. Por ello, se invita a que observe el video que presenta con mayor detalle dicha  información.

    .row.mb-5(data-aos="zoom-in")
      .col-lg-8
        .bg--yellow2.p-4
          p.mb-0 #[strong Con el fin de contextualizarlo en los temas que se abordarán en el presente componente, revise el siguiente video.]

    .bg_slider.p-2.p-md-4.p-lg-5.mb-5(data-aos="zoom-in")
      SlyderA(tipo="b")
        .row
          .col-lg-6.mb-4.mb-lg-0
            h4 Transporte aéreo aviación civil
            p Permite el crecimiento ordenado de la aviación civil, la utilización segura del espacio aéreo colombiano, la infraestructura ambientalmente sostenible, la conexión de las regiones entre sí y con el mundo, impulsando la competitividad, la industria aérea y la formación de un talento humano de excelencia.
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/t2/t2_02.png', alt='')

        .row
          .col-lg-6.mb-4.mb-lg-0
            h4 Transporte marítimo y fluvial
            p Los puertos, las terminales, los muelles, las embarcaderas o similares, donde se preste el servicio de transporte público fluvial de pasajeros.
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/t2/t2_03.png', alt='')

        .row
          .col-lg-6.mb-4.mb-lg-0
            h4 Transporte por cable
            p Los sistemas de transporte por cable se clasifican en cuatro grandes grupos:
            ul.fa-ul
              li.mb-2
                i.fa-li.fas.fa-check.txt--orange
                | Teleférico.
              li.mb-2
                i.fa-li.fas.fa-check.txt--orange
                | Cable aéreo.
              li.mb-2
                i.fa-li.fas.fa-check.txt--orange
                | Cable remolcador.
              li.mb-2
                i.fa-li.fas.fa-check.txt--orange
                | Funicular.

          .col-lg-6
            figure
              img(src='@/assets/curso/temas/t2/t2_04.png', alt='')

        .row
          .col-lg-6.mb-4.mb-lg-0
            h4 Transporte férreo
            p Los equipos de trenes de pasajeros, metro y de transporte masivo que se adquieran o acondicionen con posterioridad al 18 de junio de 2003, deben garantizar el transporte cómodo y seguro de las personas, en especial de aquellas personas en situación de discapacidad.
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/t2/t2_05.png', alt='')

        .row
          .col-lg-6.mb-4.mb-lg-0
            h4 Transporte terrestre automotor
            p Presenta diferentes servicios como:
            ul.fa-ul
              li.mb-2
                i.fa-li.fas.fa-check.txt--orange
                | Colectivo metropolitano, distrital y municipal de pasajeros.
              li.mb-2
                i.fa-li.fas.fa-check.txt--orange
                | Individual de pasajeros en vehículos taxi.
              li.mb-2
                i.fa-li.fas.fa-check.txt--orange
                | Pasajeros por carretera.
              li.mb-2
                i.fa-li.fas.fa-check.txt--orange
                | Servicio público de transporte terrestre automotor mixto.
              li.mb-2
                i.fa-li.fas.fa-check.txt--orange
                | Servicio público de transporte terrestre automotor especial.
              li.mb-2
                i.fa-li.fas.fa-check.txt--orange
                | Transporte de carga.

          .col-lg-6
            figure
              img(src='@/assets/curso/temas/t2/t2_06.png', alt='')

    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p(data-aos="fade-left").mb-5 La siguiente ilustración presenta algunas entidades del sector público y del servicio de transporte donde cada una de ellas tiene una finalidad diferente, pero todas se enmarcan dentro del mismo sector, estas son:

    .row.mb-4(data-aos="fade-right")
      .col-auto
        .cstmH3
          .row
            .col-auto
              figure
                img(src="@/assets/curso/temas/recursos/h3_icon.svg", alt="alt").img35
            .col.gx-0
              h3 Estructura del sector transporte

    SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
      .bg--yellow2.br-01.p-4.hgt--100
        figure.mb-4
          img(src='@/assets/curso/temas/t2/t2_07.png', alt='')
        h4.text-center ANSV
        p.mb-0 #[strong Agencia Nacional de Seguridad Vial:] tiene por objeto la planificación, articulación y gestión de la seguridad vial del país. Será el soporte institucional y de coordinación para la ejecución, seguimiento y control de estrategias para el cumplimiento de políticas de seguridad vial del Gobierno Nacional en todo el país.

      .bg--yellow2.br-01.p-4.hgt--100
        figure.mb-4
          img(src='@/assets/curso/temas/t2/t2_08.png', alt='')
        h4.text-center INVIAS
        p.mb-0 #[strong Instituto Nacional de Vías:] responsable de la ejecución de las políticas, estrategias, planes, programas y proyectos de la infraestructura no concesionada de la red vial nacional, de carreteras primarias, terciarias, férreas, fluvial y marítima acorde con los lineamientos dados por el Ministerio de Transporte.

      .bg--yellow2.br-01.p-4.hgt--100
        figure.mb-4
          img(src='@/assets/curso/temas/t2/t2_09.png', alt='')
        h4.text-center ANI
        p.mb-0 #[strong Agencia Nacional de Infraestructura:] tiene por objeto planear, coordinar, estructurar, contratar, ejecutar, administrar y evaluar proyectos de concesiones, para el diseño, construcción, mantenimiento, operación, administración y/o explotación de la infraestructura pública de transporte.

      .bg--yellow2.br-01.p-4.hgt--100
        figure.mb-4
          img(src='@/assets/curso/temas/t2/t2_10.png', alt='')
        h4.text-center ANI
        p.mb-0 #[strong Aeronáutica civil:] su objetivo es garantizar el desarrollo de la aviación civil y de la administración del espacio aéreo en condición de seguridad y eficiencia acorde con las políticas, los planes y los programas gubernamentales.

      .bg--yellow2.br-01.p-4.hgt--100
        figure.mb-4
          img(src='@/assets/curso/temas/t2/t2_11.png', alt='')
        h4.text-center SPT
        p.mb-0 #[strong Superintendencia de Puertos y Transporte:] tiene por objeto ejercer las funciones de inspección, control y vigilancia que le corresponden al Presidente de la República como suprema autoridad administrativa en materia de puertos, de tránsito, transporte y su infraestructura.

      .bg--yellow2.br-01.p-4.hgt--100
        figure.mb-4
          img(src='@/assets/curso/temas/t2/t2_12.png', alt='')
        h4.text-center UPIT
        p.mb-0 #[strong Unidad de Planeación de Infraestructura de Transporte:]  su objeto es planear el desarrollo de la infraestructura de transporte de manera integral, indicativa, permanente y coordinada con los agentes del sector transporte, para promover la competitividad, la conectividad, la movilidad y el desarrollo en el territorio nacional.

    p(data-aos="fade-left") Históricamente la producción y el transporte colombiano han tenido relación directa con el avance de las vías de transporte y con los vehículos destinados para tal fin, de ahí que sus características sean especiales y la atención por parte de las autoridades respectivas también despliegan una serie de características que focalicen su control y el desarrollo idóneo en todos sus procesos.

    separador

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Aspectos normativos del transporte terrestre automotor de servicio público

    p(data-aos="fade-left").mb-4 Frente al aspecto normativo es de vital importancia reconocer que hay una regulación especial para cada uno de los tipos de transporte terrestre automotor, reconociendo el #[span.txt--orange.bold Decreto 1079 de 2015 “Por medio del cual se expide el Decreto Único Reglamentario del Sector Transporte”] como compilatorio de las normas reglamentarias preexistentes, que al momento de su expedición realizó la actualización, por lo cual las mismas no requieren consulta previa, ya que estas se integraron al Decreto en mención y se presenta como la principal normatividad en el tema.

    p(data-aos="fade-left").mb-5 #[strong Esta norma se encuentra dividida en tres libros principales así:]

    .row.justify-content-center.align-items-center
      .col-lg-6.mb-4.mb-lg-0
        .bg--gray.p-4.mb-4(data-aos="flip-left")
          .row.justify-content-center 
            .col-auto
              figure
                img(src='@/assets/curso/temas/t2/t2_13.svg', alt='').img145.m-auto
            .col
              h5 Libro 1. Estructura
              p.mb-0 Estructura del sector transporte, presenta el objeto de la norma y las entidades que trabajan en las diferentes áreas del sector.

        .bg--gray.p-4.mb-4(data-aos="flip-left")
          .row.justify-content-center 
            .col-auto
              figure
                img(src='@/assets/curso/temas/t2/t2_13.svg', alt='').img145.m-auto
            .col
              h5 Libro 2. Reglamentación
              p.mb-0 Régimen reglamentario del sector, en el cual encuentra toda la reglamentación de los diferentes servicios públicos de transporte terrestre automotor.

        .bg--gray.p-4(data-aos="flip-left")
          .row.justify-content-center 
            .col-auto
              figure
                img(src='@/assets/curso/temas/t2/t2_13.svg', alt='').img145.m-auto
            .col
              h5 Libro 3. Disposiciones
              p.mb-0 Contiene todas las disposiciones finales.
      .col-1.d-none.d-lg-flex

      .col-lg-5.d-none.d-lg-flex(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/t2/t2_14.svg', alt='')

    separador

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Tipos de transporte terrestre automotor (T.T.A.)

    p(data-aos="fade-left") El servicio público de transporte terrestre automotor se puede dividir en dos temas importantes que son: el transporte de pasajeros y el transporte de carga como lo presenta la siguiente tabla con sus características.

    .titulo-sexto.color-acento-contenido(data-aos="fade-left")
      h5 Tabla 2.
      span Servicio público de transporte de pasajeros y de transporte de carga

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-8
        .tabla-a
          table
            thead(style="border-top:none;")
              tr.cell--yellow2
                th.p-4 Servicio público de transporte terrestre automotor de pasajeros
                th.p-4 Servicio público de transporte terrestre automotor de carga             
            tbody
              tr.cell--yellow
                td.p-4 Es un transporte colectivo, masivo, individual como el taxi que transita por carretera. También puede ser especial como el transporte mixto donde prima el transporte de personas.                 
                td.p-4 Extradimensional, transporta mercancías peligrosas, especies venales, animales, entre otros.

    p(data-aos="fade-left").mb-5 #[strong Ahora conozca en detalle el tipo de transporte y sus características.]

    .bg_slider.p-2.p-md-4.p-lg-5.mb-5(data-aos="zoom-in")
      SlyderA(tipo="b")
        .row
          .col-lg-6.mb-4.mb-lg-0
            h4 Colectivo de pasajeros
            p Este tipo de transporte terrestre hace referencia a lo que comúnmente se  llama busetas, microbuses y colectivos urbanos, que son los vehículos que prestan este servicio público a la comunidad y se encuentran caracterizados por estar  bajo la responsabilidad de una empresa de transporte legalmente constituida y debidamente habilitada en esta modalidad, donde se entiende que el valor del pasaje es un contrato celebrado entre la empresa y cada una de las personas que han de utilizar el vehículo de servicio público, para recorrer total o parcialmente una o más rutas legalmente autorizadas.
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/t2/t2_15.png', alt='')

        .row.justify-content-center
          .col-lg-6.mb-4.mb-lg-0
            h4 Transporte masivo
            p Este sistema habla sobre el servicio público de transporte masivo de pasajeros, se presta a través de una combinación organizada de infraestructura y equipos, en un sistema que cubre un alto volumen de pasajeros y da respuesta a un porcentaje significativo de necesidades de movilización.
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/t2/t2_16.png', alt='')

        .row.justify-content-center
          .col-lg-6.mb-4.mb-lg-0
            h4 Taxi
            p Este servicio se presta en el nivel básico y de lujo, bajo la responsabilidad de una empresa de transporte legalmente constituida, en forma individual, sin sujeción a rutas, ni horarios, donde el usuario fija el lugar de destino y su recorrido es establecido por las partes contratantes.
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/t2/t2_17.png', alt='')

        .row.justify-content-center
          .col-lg-6.mb-4.mb-lg-0
            h4 Transporte mixto
            p Es aquel que se presta bajo la responsabilidad de una empresa de transporte legalmente constituida, a través de un contrato celebrado entre la empresa de transporte y cada una de las personas que utilizan el servicio para su traslado simultáneo con el de sus bienes o carga, en una zona de operación autorizada. Titulo 1 Capítulo 5 del Decreto 1079 de 2015.
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/t2/t2_18.png', alt='')

        .row.justify-content-center
          .col-lg-6.mb-4.mb-lg-0
            h4 Transporte especial
            p Como lo menciona el decreto que lo reglamenta, este  servicio se presta bajo la responsabilidad de una empresa de transporte legalmente constituida y debidamente habilitada para esta modalidad, a un grupo específico de personas que tengan una característica común y homogénea en su origen y destino, como estudiantes, turistas, empleados, personas en situación de discapacidad o personas con movilidad reducida, entre otros, siempre que hagan parte de un grupo determinable y de acuerdo con las condiciones y las características. Este servicio se encuentra en el Título 1 Capítulo 5 del Decreto 1079 de 2015.
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/t2/t2_19.png', alt='')

        .row.justify-content-center
          .col-lg-6.mb-4.mb-lg-0
            h4 Transporte de carga
            p Este servicio busca satisfacer las necesidades de movilización de diferentes comerciantes o empresas, al requerir mover diversos tipos objetos, artículos o mercancía, entre otras cosas, de un lugar a otro. El servicio es prestado bajo la responsabilidad de una empresa de transporte legalmente constituida y habilitada para esta modalidad a cambio de una negociación o pago.
            p Dentro de este tipo de transporte terrestre automotor se encuentran el transporte de mercancías peligrosas, el transporte de cargas extra-dimensionadas, extrapesadas, especiales, de alimentos perecederos, animales en general, todos los insumos que requiere la economía. 
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/t2/t2_20.png', alt='')

    p(data-aos="fade-left") Cada uno de estos tipos de transporte tiene su propia reglamentación tanto en el Decreto 1079 de 2015 como en la Resolución 4959 de 2006 “Por la cual se fijan los requisitos y procedimientos para conceder los permisos para el transporte de cargas indivisibles extrapesadas y extradimensionadas, y las especificaciones de los vehículos destinados a esta clase de transporte”, que es muy importante para el acompañamiento y control vial. 

    separador

    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 Orden de comparendo e informe único de infracción al transporte IUIT

    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-4.mb-lg-0(data-aos="flip-left")
        figure
          img(src='@/assets/curso/temas/t2/t2_21.png', alt='')
      .col-lg-8(data-aos="fade-left")
        p Continuando con los temas relacionados con el transporte terrestre automotor y sus características es necesario conocer que las autoridades de control operativo del tránsito y transporte pueden realizar una orden de comparendo ante la detección de infracciones de tránsito estipuladas en la Resolución 3027 de 2010 o pueden realizar el informe único de infracción de transporte ante la observancia de infracciones a las normas de transporte terrestre automotor establecidas en el Decreto 1079 de 2015 y en la Ley 336 de 1996 Estatuto General de Transporte.
        .bg--PaleYellow2.p-4(data-aos="zoom-in")
          p.mb-0 Por lo anterior, es necesario precisar las siguientes palabras: #[strong “comparendo” o “infracción”], las cuales según el Artículo 2 de la Ley 769 de 2002 se definen de la siguiente manera:

    h3.text-center(data-aos="fade-left").mb-4 Comparendo e infracciones de tránsito

    .row.justify-content-center.mb-5
      .col-lg-4(data-aos="flip-left")
        .bg--paleBlue.p-4.br-01.hgt--100
          h4.text-center Infracción
          figure
            img(src='@/assets/curso/temas/t2/t2_22.svg', alt='')
          p.mb-0 Se define como transgresión o violación de una norma de tránsito. Puede ser de dos tipos: simple, si se trata de violación a la mera norma y, compleja si se produce un daño material.

      .col-lg-4(data-aos="flip-left")
        .bg--yellow2.p-4.br-01.hgt--100
          h4.text-center Comparendo
          figure
            img(src='@/assets/curso/temas/t2/t2_23.svg', alt='')
          p.mb-0 Se define como una orden formal de notificación para que el presunto contraventor o implicado se presente ante la autoridad de tránsito por la comisión de una infracción. 


    p(data-aos="fade-left").mb-5 Cabe resaltar que el Ministerio de Transporte creó la Resolución 20203040003785 de 2020 "Por la cual se adecua la reglamentación para la adaptación del Informe único de Infracciones al Transporte IUIT y se dictan otras disposiciones", con el objeto de adoptar el formato IUIT para que las autoridades de control de transporte lo implementen en el servicio operativo, aclarando que no debe indicarse código de infracción, solamente lo establecido en la ley general del transporte. Dicha resolución establece al final de su anexo el formato de IUIT y un recuadro normativo, que sirve de guía a las autoridades de control al momento de realizar la vigilancia en vía. 

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-10  
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/componentes/ej-02.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 IUIT
                  p.mb-0 Se invita a revisar de manera detallada el formato de informe de infracción de transporte y se recomienda la descarga del siguiente documento.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Resolucion_20203040024865_2020.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    p(data-aos="fade-left").mb-5 Finalmente, se simplifica el procedimiento de conocer las infracciones de transporte terrestre automotor como una guía del paso a seguir para las autoridades de tránsito de control operativo, el cual puede clasificarse de la siguiente manera:

    h3(data-aos="fade-right").mb-5.text-center Pasos para un control operativo

    .row.justify-content-center.align-items-center
      .col-lg-6(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/t2/t2_24.svg', alt='')

      .col-lg-6(data-aos="fade-left")
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Observar ")
            .col-12
              p.mb-0 La autoridad de tránsito debe observar y/o verificar comportamientos que constituyan infracciones de transporte.
          .row(numero="2" titulo="Detener")
            .col-12
              p.mb-0 La autoridad de tránsito debe detener la marcha del vehículo.
          .row(numero="3" titulo="Saludar")
            .col-12
              p.mb-0 La autoridad de tránsito debe saludar, identificarse y requerir los documentos de las personas y del vehículo.
          .row(numero="4" titulo="Informar")
            .col-12
              p.mb-0 Debe informar al infractor sobre la contravención cometida.
          .row(numero="5" titulo="Diligenciar")
            .col-12
              p.mb-0 El oficial de tránsito debe diligenciar el formato de informe único de infracciones al transporte.
          .row(numero="6" titulo="Inmovilización")
            .col-12
              p.mb-0 La autoridad de tránsito debe generar la orden de inmovilización del vehículo.
          .row(numero="7" titulo="Informe")
            .col-12
              p.mb-0 Entregar el informe único de infracciones al transporte a la autoridad competente de investigar.


         













  


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
