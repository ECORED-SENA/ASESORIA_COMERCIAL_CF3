<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Informes y documentos
    
    row.justify-content-center.mb-5
      .col-lg-5
        .cajon-b.color-acento-contenido.p-3.mb-0
          h3 Los informes y documentos son parte fundamental del proceso que se llevará a cabo.
    
    #t6_1.titulo-segundo.mt-4
      h2 6.1 Informe

    .row.mb-5.align-items-center
      .col-lg-6.mb-4.mb-lg-0
        p.mb-0 Es un escrito que tiene como resultado anunciar y dar balance de una situación desde diferentes perspectivas, es decir, de algo sobre lo que se está efectuando una investigación exhaustiva; entre las principales características que debe tener el informe, la primera es la claridad en el lenguaje para que tenga comprensión por parte del lector, la segunda característica del informe escrito es la objetividad en reflejar los hechos basados en información comprobable, la tercera característica es la estructuración respondiendo a criterios narrativos y presentar una estructura mínima en cuanto introducción, desarrollo y conclusiones.
      .col-lg-1
      .col-lg-4
        figure.myN01
          img(src='@/assets/curso/tema6/img01.svg', alt='')
    
    #t6_2.titulo-segundo.mt-4
      h2 6.2 Tipos de informes
    
    p.mb-5
      | En la contemporaneidad en la cual recurre el mundo moderno,  para cualquier administrativo o comercial de una empresa debe ser importante saber dirigir, saber presidir una reunión, dictar conferencias, también lo es escribir informes, luego entonces, es imprescindible desarrollar estas habilidades de comunicación escrita en este tipo de personal.
      br
      br
      | Por tanto, la calidad de la información que se transmite en los informes debe ser tal que facilite la comprensión del texto, que transmita el mensaje apropiado y que facilite el flujo de trabajo en los procesos de la empresa.

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      div(titulo="Según el contenido")
        p.mb-4  Se pueden encontrar 3 grandes tipos de informes de acuerdo con la especificidad del contenido del informe.
        ul.lista-ul--color
          li
            i.fas.fa-check
            p #[strong Informes técnicos:] son informes basados en exploraciones sobre fenómenos sociales, psicológicos o económicos adaptados para las organizaciones que se nutren de esos datos.
          li
            i.fas.fa-check
            p #[strong Informes científicos:] se define como un informe escrito y publicado que describe resultados originales de una investigación. (Lam, 2016)
          li
            i.fas.fa-check
            p #[strong Informes de divulgación:] es un escrito generalmente breve, que puede explicar hechos, ideas, conceptos, descubrimientos vinculados al quehacer científico y tecnológico.

      div(titulo="Según la estructura")
        p.mb-4 Se destacan con preeminencia 3 tipos de informes.
        ul.lista-ul--color
          li
            i.fas.fa-check
            p #[strong Informes persuasivos:] tienen como finalidad convencer a los lectores de las conclusiones e ideas desarrolladas en el proceso de trabajo.
          li
            i.fas.fa-check
            p #[strong Informes expositivos:] es una cadena de hechos relatada sin análisis e interpretaciones del autor, debe contener referencias que ayuden a comprender lo que se narra.
          li
            i.fas.fa-check
            p #[strong Informe analítico:]  es un tipo de informe o evaluación de un conjunto particular de circunstancias relacionadas con el efecto que producen, por lo tanto, determinan y desarrollan las causas de un hecho o fenómeno.
        
  
</template>

<script>
export default {
  name: 'Tema6',
  components: {},
  data: () => ({}),
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

<style lang="sass" scoped></style>
