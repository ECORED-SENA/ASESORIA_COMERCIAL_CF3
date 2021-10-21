<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Variables de  información

    p.mb-5 Según Espinoza (2018):

    .row.justify-content-center.mb-1
      .col-lg-10
        .bloque-texto-f.color-secundario.pt-4.px-5.mb-5
          .bloque-texto-f__comillas
            i.fas.fa-quote-left
            i.fas.fa-quote-right
          h4.text-regular.bloque-texto-f__texto Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt augue in augue tempus, in dapibus justo interdum. Sed viverra sed odio quis rhoncus. In elementum purus massa, id venenatis purus ullamcorper ut. Vestibulum vel dictum dolor, nec fringilla orci. Nulla vestibulum, metus nec porttitor bibendum, lectus ligula viverra eros, eget tempor risus nulla pretium justo. Nullam turpis dolor, pharetra vel fermentum at, rutrum in elit. Maecenas vitae hendrerit libero, et ornare augue. Vestibulum iaculis, metus et accumsan malesuada, ligula sapien convallis risus, a iaculis velit ante at turpis. Vivamus bibendum tellus sed tincidunt rhoncus. Nam velit massa, porttitor eget quam et, porttitor viverra eros. Donec eget pharetra metus. Cras porta arcu eu mauris iaculis euismod. Sed fringilla vel nisl quis aliquam.

    #t2_1.titulo-segundo
      h2 2.1 Tipos de variables en el análisis de datos
    
    p.mb-5 Existen varios tipos de variables y cada una de ellas representa una característica, número o cantidad que puede ser medida o contada.    
    
    .row.justify-content-center.mb-4
      .col-md-10.col-lg-8
        .titulo-sexto.color-acento-botones
          h5 Figura 1.
          span Tipos de Variable

        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema2/img01.svg', alt='')

          .tarjeta.color-acento-contenido.text-white.p-3(x="49%" y="35%")
            h4 Variables numéricas
            p.mb-0 Son aquellas que personifican números y con ellas se logran realizar procedimientos aritméticamente. Por ejemplo, ventas mensuales puede representar a las ventas de productos  que hay en un mes cualquiera. También son conocidas como variables cuantitativas, que a su vez se clasifican en discretas y continuas.

          .tarjeta.color-primario.BG10.p-3(x="100%" y="11%")
            p.mb-0 #[strong Las variables continuas] son aquellas cuyos valores corresponden a clases independientes, no admiten valores intermedios y por lo tanto en ellas no tiene sentido hablar de promedios estadísticos, un ejemplo clásico, es la respuesta a la pregunta cuántos hermanos tienen los 5 amigos de Javier Martínez, la respuesta a esta pregunta es 3, 2, 1, 0, 2; es preciso aclarar que no cabe en las respuesta un amigo de Javier Martínez que tenga 1.5 hermanos o alguna respuesta semejante.

          .tarjeta.color-primario.BG10.p-3(x="100%" y="34%")
            p.mb-0 #[strong Las variables discretas] son aquellas cuyos valores corresponden a clases independientes, no admiten valores intermedios y por lo tanto en ellas no tiene sentido hablar de promedios estadísticos, un ejemplo clásico, es la respuesta a la pregunta cuántos hermanos tienen los 5 amigos de Javier Martínez, la respuesta a esta pregunta es 3, 2, 1, 0, 2; es preciso aclarar que no cabe en las respuesta un amigo de Javier Martínez que tenga 1.5 hermanos o alguna respuesta semejante.

          .tarjeta.color-acento-contenido.text-white.p-3(x="49%" y="89%")
            h4 Variables categóricas
            p.mb-0 Son un número definido de valores diferentes o categorías (por ejemplo, raza, género, sexo o religión). Las variables categóricas pueden ser nominales u ordinales.

          .tarjeta.color-primario.BG10.p-3(x="100%" y="67%")
            p.mb-0 #[strong Una variable ordinal] es un tipo de variable estadística de tipo cualitativo que expresa con palabras una cualidad de naturaleza ordenable como por ejemplo primer puesto, segundo puesto, tercer puesto.

          .tarjeta.color-primario.BG10.p-3(x="100%" y="89%")
            p.mb-0 #[strong Una variable nominal] es un tipo de variable estadística de tipo cualitativo que expresa con nombre una cualidad no necesariamente ordenable, como puede ser por ejemplo los colores de ojos de un salón de clases.
    
    #t2_2.titulo-segundo
      h2 2.2 Clasificación de las variables
    
    p.mb-5 Se pueden identificar 2 tipos de variables que participan en el manejo de la información de un proceso investigativo y pueden señalar relaciones comportamentales  al medir determinado número de sucesos:    
    
    .row.justify-content-around
      .col-md-11.col-lg-10
        .titulo-sexto.color-acento-botones
          h5 Figura 2.
          span  Causa y efecto
      .col-10.col-md-6.col-lg-4.mb-4.mb-md-0
        figure.mb-4
          img(src='@/assets/curso/tema2/img02.svg', alt='')
      .col-md-6
        .BG40.p-4.mb-4
          p.mb-0 #[strong Variable dependiente] es definida por Bernal (2.003) como el “resultado” o “efecto” producido por la variable independiente
        .BG10.p-4
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
