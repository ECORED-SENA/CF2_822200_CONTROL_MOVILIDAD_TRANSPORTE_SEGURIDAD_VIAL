<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 La normatividad en materia de planes estratégicos de seguridad vial pretende dar lineamientos en aspectos como educación vial y responsabilidad social para que muchas partes que integran la sociedad realicen acciones, con el fin de promover en las personas la formación de hábitos, comportamientos y conductas seguras en la vía, formando así criterios autónomos, solidarios y prudentes para su desplazamiento en la vía pública, siendo el tema de las relaciones humanas de vital importancia para el desarrollo de la movilidad.<br><br>El análisis a los aspectos normativos relacionados con los modos de transporte resaltan la importancia del Decreto 1079 de 2015, simplificando así los diferentes tipos de servicio público de transporte terrestre automotor, como lo son el servicio especial, colectivo, masivo, individual, por carretera, mixto y el transporte de carga, analizando el Informe Único de Infracciones al Transporte IUIT.


    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
