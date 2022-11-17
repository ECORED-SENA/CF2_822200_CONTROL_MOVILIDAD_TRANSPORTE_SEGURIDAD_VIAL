<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.mb-4
      .col-auto.d-none.d-md-flex(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/intro/intro.svg", alt="alt").img85
      .col(data-aos="fade-left")
        p.mb-0 Estimado aprendiz, bienvenido a este momento de aprendizaje, orientado a conocer todo sobre la normatividad vigente para la movilización a través de los diferentes medios de transporte existentes. Al igual que conocer sobre los planes estratégicos que se tienen, con el fin de dar la seguridad a las personas que transitan por las diferentes vías del territorio nacional. Por lo anterior, se invita a revisar el siguiente video para identificar el contexto de aprendizaje.

    p(data-aos="fade-left").mb-5 Con el fin de contextualizarlo en los temas que se abordarán en el presente componente, revise el siguiente video. Se recomienda su descarga.

    figure(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/aUgBuliiMxE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)       


    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
