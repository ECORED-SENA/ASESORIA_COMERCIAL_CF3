<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Procesamiento de la información
    
    .row.BG30.justify-content-around.mb-5.p-4
      .col-lg-7
        .p-4
          h3 Es un proceso que implica:
          ul.lista-ul--color
            li
              i.fas.fa-check
              | Determinación clara de los objetivos que  ameritan la necesidad de información.
            li
              i.fas.fa-check
              | Tener una población plenamente identificada para la recolección de la información.
            li
              i.fas.fa-check
              | Identificar las técnicas de recolección de la información debidamente validadas.
      .col-6.col-lg-3
        figure.mbN01
          img(src='@/assets/curso/tema3/img01.svg', alt='')
    
    p.mb-4.mtP01 A continuación se muestran una cadena de pasos que pueden emplearse para la  recaudación de los datos necesarios para responder a los objetivos:

    TabsA.color-acento-contenido
      .tarjeta.color-primario.BG10.p-4(titulo="Recogida de los datos")
        h4 Recogida de los datos
        p Esta parte del procesamiento de la información requiere previamente haber perfilado los instrumentos de recolección que hayan sido validados y que generen confiabilidad.  La recolección de datos se realiza siguiendo tres (3) pasos:
        ul.lista-ul--color.mb-4.CT10
          li
            i.fas.fa-check
            | Elegir y confeccionar un instrumento de recolección de datos validado.
          li
            i.fas.fa-check
            | Utilizar el instrumento de recolección de datos validado en las fuentes de información previamente escogidas. 
          li
            i.fas.fa-check
            | Una vez recopilada la información obtenida se debe codificar.
        .row.justify-content-center
          .col-md-6.col-lg-4
            figure
              img(src='@/assets/curso/tema3/img02.svg', alt='')
      
      .tarjeta.color-primario.BG10.p-4(titulo="Procesamiento de los datos")
        h4 Procesamiento de los datos
        p Debe efectuarse mediante el uso de herramientas estadísticas apoyadas en software reconocidos por la comunidad científica, que hoy fácilmente se encuentran en el mercado. Para realizar la actividad de procesar los datos se siguen unos pasos de los cuales Bernal (2.003) postula lo siguiente:
        ul.lista-ul--color.mb-4.CT10
          li
            i.fas.fa-check
            | Obtener la información de la población o muestra objeto de la investigación. 
          li
            i.fas.fa-check
            | Definir las variables o criterios para ordenar los datos obtenidos.
          li
            i.fas.fa-check
            | Definir las herramientas estadísticas y  software reconocidos por la comunidad científica. 
          li
            i.fas.fa-check
            | Introducir los datos en el computador y activar el programa para que procese la información. 
          li
            i.fas.fa-check
            | Imprimir los resultados. (p.179)

        .row.justify-content-center
          .col-md-6.col-lg-4
            figure
              img(src='@/assets/curso/tema3/img03.svg', alt='')
      
      .tarjeta.color-primario.BG10.p-4(titulo="Interpretación de los datos")
        h4 Interpretación de los datos
        p.mb-4 Se refiere a la ejecución de procesos por medio de los cuales se examinan los datos con el fin de llegar a una conclusión informada y una etapa esencial del procesamiento de datos.

        .row.justify-content-center
          .col-md-6.col-lg-4
            figure
              img(src='@/assets/curso/tema3/img04.svg', alt='')
      
      .tarjeta.color-primario.BG10.p-4(titulo="Almacenamiento de los datos")
        h4 Almacenamiento de los datos 
        p.mb-4 Es el proceso de custodia o protección de la información a través del empleo de un conjunto de técnicas desarrollada enfáticamente para guardar esos datos y garantizar su acceso en el momento en que se requiera.

        .row.justify-content-center
          .col-md-6.col-lg-4
            figure
              img(src='@/assets/curso/tema3/img05.svg', alt='')
  
</template>

<script>
export default {
  name: 'Tema3',
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
