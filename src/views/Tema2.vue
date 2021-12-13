<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Variables de  información

    p.mb-5(data-aos="fade") Según Espinoza (2018):

    .row.justify-content-center.mb-1(data-aos="fade-up")
      .col-lg-10
        .bloque-texto-f.color-secundario.pt-4.px-5.mb-5
          .bloque-texto-f__comillas
            i.fas.fa-quote-left
            i.fas.fa-quote-right
          h4.text-regular.bloque-texto-f__texto Las variables son elementos que se ponen en dependencia a un referente teórico y según lo que se puede pronosticar en la población de estudio, por tanto, la variable es una propiedad que puede cambiar de valor en cada situación o de un individuo a otro y cuyo cambio o alteración es capaz de medirse en torno a una escala.

    #t2_1.titulo-segundo(data-aos="flip-up")
      h2 2.1 Tipos de variables en el análisis de datos
    
    p.mb-5(data-aos="fade-up") Existen varios tipos de variables y cada una de ellas representa una característica, número o cantidad que puede ser medida o contada.    
    
    .row.justify-content-center.mb-4
      .col-md-10.col-lg-8
        .titulo-sexto.color-acento-botones(data-aos="fade")
          h5 Figura 1.
          span Tipos de Variable

        ImagenInfografica.color-secundario.mb-5(data-aos="fade-down")
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema2/img01.svg', alt='')

          .tarjeta.color-acento-contenido.text-white.p-3(x="49%" y="35%")
            h4 Variables numéricas
            p.mb-0 Son aquellas que personifican números y con ellas se logran realizar procedimientos aritméticamente. Por ejemplo, ventas mensuales puede representar a las ventas de productos  que hay en un mes cualquiera. También son conocidas como variables cuantitativas, que a su vez se clasifican en discretas y continuas.

          .tarjeta.color-primario.BG10.p-3(x="100%" y="11%")
            p.mb-0 #[strong Las variables continuas] son variables cuyos valores cambian en carácter progresivo y no a irrupciones o de otra condición, tienen una disposición que no puede alterarse y sobre ellas se pueden hacer análisis estadísticos descriptivos mediante medidas de tendencia central (media, mediana y moda) y medidas de dispersión. Por ejemplo, la estatura de los jugadores de la selección Colombia de fútbol, la respuesta sería que el jugador A mide 1.80 m, el jugador B 1,82 m, el jugador C 1.79 m, el jugador D 1.85 m y el jugador E 1.78 m; sobre esa estatura es típico poder calcular medidas de tendencia central estadísticas, como el promedio de estatura que sería 1.80 m.

          .tarjeta.color-primario.BG10.p-3(x="100%" y="34%")
            p.mb-0 #[strong Las variables discretas] son aquellas cuyos valores corresponden a clases independientes, no admiten valores intermedios y por lo tanto en ellas no tiene sentido hablar de promedios estadísticos, un ejemplo clásico, es la respuesta a la pregunta cuántos hermanos tienen los 5 amigos de Javier Martínez, la respuesta a esta pregunta es 3, 2, 1, 0, 2; es preciso aclarar que no cabe en las respuestas un amigo de Javier Martínez que tenga 1.5 hermanos o alguna respuesta semejante.

          .tarjeta.color-acento-contenido.text-white.p-3(x="49%" y="89%")
            h4 Variables categóricas
            p.mb-0 Son un número definido de valores diferentes o categorías (por ejemplo, raza, género, sexo o religión). Las variables categóricas pueden ser nominales u ordinales.

          .tarjeta.color-primario.BG10.p-3(x="100%" y="67%")
            p.mb-0 #[strong Una variable ordinal] es un tipo de variable estadística de tipo cualitativo que expresa con palabras una cualidad de naturaleza ordenable como por ejemplo primer puesto, segundo puesto, tercer puesto.

          .tarjeta.color-primario.BG10.p-3(x="100%" y="89%")
            p.mb-0 #[strong Una variable nominal] es un tipo de variable estadística de tipo cualitativo que expresa con nombre una cualidad no necesariamente ordenable, como puede ser por ejemplo los colores de ojos de los estudiantes de un salón de clases.
    
    #t2_2.titulo-segundo(data-aos="flip-up")
      h2 2.2 Clasificación de las variables
    
    p.mb-5(data-aos="fade") Se pueden identificar 2 tipos de variables que participan en el manejo de la información de un proceso investigativo y pueden señalar relaciones comportamentales  al medir determinado número de sucesos:    
    
    .row.justify-content-around(data-aos="fade-left")
      .col-md-11.col-lg-10
        .titulo-sexto.color-acento-botones
          h5 Figura 2.
          span  Causa y efecto
      .col-10.col-md-6.col-lg-4.mb-4.mb-md-0
        figure.mb-4
          img(src='@/assets/curso/tema2/img02.svg', alt='')
      .col-md-6
        .BG40.p-4.mb-4(data-aos="flip-right")
          p.mb-0 #[strong Variable dependiente] es definida por Bernal (2.003) como el “resultado” o “efecto” producido por la variable independiente
        .BG10.p-4(data-aos="flip-right")
          p.mb-0 #[strong Variable independiente] es definida como todo aquel aspecto, hecho, situación, rasgo, que se considera como “la causa de” en una relación entre variables.

</template>

<script>
export default {
  name: 'Tema2',
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
