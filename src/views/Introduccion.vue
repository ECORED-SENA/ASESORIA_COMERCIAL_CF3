<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    figure.mb-5(data-aos="fade")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/7b44onFfp9U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    .cajon-b.color-primario.p-3.mb-0(data-aos="fade-left")
      p.mb-0 Para que la empresa tome decisiones de mercado, debe tener claro a quienes va a servir, cuáles son sus características y necesidades, para ello es fundamental el manejo expedito de la información. En el desarrollo de este componente se trata aspectos del manejo de la información, la interpretación basada en los diferentes tipos de análisis cuantitativos o cualitativos, ello define la propuesta de la empresa a cada uno de los segmentos de mercado seleccionados. Así mismo, se realiza un recorrido por la recolección de la información y sus diferentes técnicas de recogida, operacionalización de variables, además de los pasos para definir el procesamiento de la información, preparación, interpretación y almacenamiento. Luego se mira qué estrategias de análisis de datos tradicionales y modernos recurren las empresas de hoy para alcanzar una mayor cobertura de mercado. Finalmente, los tipos de informes que se construyen con el proceso anteriormente expuesto y sus elementos básicos.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
