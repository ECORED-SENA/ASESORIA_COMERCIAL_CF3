<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Técnicas de evaluación
    
    p.mb-5(data-aos="fade") Bernal (2.000) muestra las siguientes técnicas de evaluación de la información que pueden efectuarse:

    .tarjeta.tarjeta--azul.BGYenny.p-4.mb-5(data-aos="fade-up")
      SlyderA
        .row.justify-content-center.m-4
          .col-md-11
            .bg-white.br01.p-4.mb-4
              .row.justify-content-center.m-4
                .col-md-9
                  figure
                    img(src='@/assets/curso/tema5/img01.svg', alt='')
                    figcaption.mt-2 Nota: Adaptada de Jose Marcondes (2.020)

            .bg-white.br01.p-4
              .row.justify-content-center.m-4
                .col-md-12
                  h3 Análisis de Pareto
                  p Es una técnica para analizar orígenes de problemas y las procedencias de sus causas, de igual forma, es una técnica que permite catalogar gráficamente la información de mayor a menor preeminencia, con el fundamento de identificar los problemas más trascendentales en los que se debe enfocar y solucionar, tiene como procedimiento generalizado:
                  ul.lista-ul--color.CT10
                    li
                      i.fas.fa-check
                      p Identifica el problema que deseas analizar, es prioritario identificar el problema que está afectando el hecho, evento, situación a investigar.
                    li
                      i.fas.fa-check
                      p Agrupar los datos que ayudan a evaluar el problema, identificando en las categorías o problemas (eje de las y) y la frecuencia de ocurrencia de esos problemas ( eje de las x)
                    li
                      i.fas.fa-check
                      p Ordenar los datos en una tabla de forma decreciente de la frecuencia (de mayor a menor), luego calcular sus porcentajes y acumulados.
                    li
                      i.fas.fa-check
                      p Construir una gráfica de barras con estos datos.
        
        .row.justify-content-center.m-4
          .col-md-11
            .bg-white.br01.p-4.mb-4
              .row.justify-content-center.m-4
                .col-md-10
                  figure
                    img(src='@/assets/curso/tema5/img02.svg', alt='')
                    figcaption.mt-2 Nota: Adaptada de IBM (2.007)

            .bg-white.br01.p-4
              .row.justify-content-center.m-4
                .col-md-12
                  h3 Diagrama de causa efecto
                  p.mb-0 Bernal, (2003):  (espina de pescado) es una gráfica mediante la cual los miembros de un equipo representan, categorizan y evalúan todos los posibles motivos de un resultado o reacción; por lo general, se expresa como un problema para resolver. Se le conoce como diagrama de Ishikaw. (p180)
        
        .row.justify-content-center.m-4
          .col-md-11
            .bg-white.br01.p-4.mb-4
              .row.justify-content-center.m-4
                .col-md-10
                  figure
                    img(src='@/assets/curso/tema5/img03.svg', alt='')
                    figcaption.mt-2 Nota: Adaptada de Grupo 10 (2.015)
            
            .bg-white.br01.p-4
              .row.justify-content-center.m-4
                .col-md-12
                  h3 Gráficas de control
                  p Se recurren a ellas cuando existe la necesidad de control de calidad de procesos. Según Levin y Rubin (1996) “estas graficas reciben el nombre de diagramas de control y son de varios tipos:
                  ul.lista-ul--color.CT10
                    li
                      i.fas.fa-check
                      p Diagramas  o diagramas de control para medias de procesos.
                    li
                      i.fas.fa-check
                      p Diagramas #[em R] o diagramas de control para variabilidad en los procesos.
                    li
                      i.fas.fa-check
                      p Diagramas √ o diagramas de control para atributos.(p 528)

        .row.justify-content-center.m-4
          .col-md-11
            .bg-white.br01.p-4.mb-4
              .row.justify-content-center.m-4
                .col-md-10
                  figure
                    img(src='@/assets/curso/tema5/img04.svg', alt='')
                    figcaption.mt-2 Nota: Adaptada de Marta (2.019)

            .bg-white.br01.p-4
              .row.justify-content-center.m-4
                .col-md-12
                  h3 Distribución de frecuencias y representaciones gráficas
                  p De acuerdo con Mason y Lind (1994) es el conjunto de datos en categorías que muestran el número de observaciones de cada categoría, en otras palabras, una distribución de frecuencias indica el número de veces que ocurre cada valor o dato en una tabla de resultados. (p.24)
                  p Histogramas son medios gráficos para la representación de la distribución de frecuencias
                  p.mb-4 Polígonos de frecuencia son representaciones gráficas que reflejan  una imagen veloz de los más importantes rasgos de los datos de una distribución de frecuencias.
                .col-md-10
                  figure
                    img(src='@/assets/curso/tema5/img05.svg', alt='')
                    figcaption.mt-2 Nota: Adaptada de Khan Academy (2.018)
        
        .row.justify-content-center.m-4
          .col-md-11
            .bg-white.br01.p-4.mb-4
              .row.justify-content-center.m-4
                .col-md-10
                  figure
                    img(src='@/assets/curso/tema5/img06.svg', alt='')
                    figcaption.mt-2 Nota: Adaptada de estudiar física.wordpress (2.009)
            
            .bg-white.br01.p-4
              .row.justify-content-center.m-4
                .col-md-12
                  h3 Medidas de tendencia central
                  p Son medidas estadísticas que pretenden resumir en un solo valor a un conjunto de valores. Se reconocen de manera universal las siguientes:
                  ul.lista-ul--color.CT10
                    li
                      i.fas.fa-check
                      p  la media o promedio aritmético es la sumatoria de un conjunto de frecuencias divididos por la cantidad total de los mismos
                    li
                      i.fas.fa-check
                      p  la moda se  identifica con el valor con la frecuencia que más se repite en una tabla de distribución de datos.
                    li
                      i.fas.fa-check
                      p  La mediana es el valor que resulta una vez organizado la distribución de frecuencias de manera ascendente o descendente y se encuentre justo en la mitad de los datos
                  p.mb-0 El concepto de simetría que se aprecia en la figura 12, no es más que la distancia en la cual se encuentran la moda y la mediana con respecto a la media aritmética, mientras más cerca se encuentren mayor confiabilidad tiene el análisis de la población, mientras más lejos se encuentre menor confiabilidad.
        
        .row.justify-content-center.m-4
          .col-md-11
            .bg-white.br01.p-4.mb-4
              .row.justify-content-center.m-4
                .col-md-10
                  figure
                    img(src='@/assets/curso/tema5/img07.svg', alt='')
                    figcaption.mt-2 Nota: Adaptada de matemáticas con tecnología.
            
            .bg-white.br01.p-4
              .row.justify-content-center.m-4
                .col-md-12
                  h3 Medidas de dispersión
                  p Hablan cómo se dividen los datos en torno a una de las medidas de tendencia central conceptuadas anteriormente, y son un valor añadido a estas últimas para representar más fidedignamente un conjunto de datos. Dentro de las medidas de dispersión más reconocidas están:
                  ul.lista-ul--color.CT10
                    li
                      i.fas.fa-check
                      p la varianza  es la suma de las desviaciones de la media elevada al cuadrado, dividida  entre el número de observaciones menos uno, en otras maneras de explicar, es una medida de dispersión que significa la movilidad de una serie de datos en relación a su promedio o media aritmética.
                    li
                      i.fas.fa-check
                      p La desviación estándar  es la cuantía media en que cada una de las frecuencias individuales varía respecto a la media aritmética del conjunto de datos; dicho de otras maneras,  cuanto mayor sea la dispersión mayor es la desviación estándar
        
        .row.justify-content-center.m-4
          .col-md-11            
            .bg-white.br01.p-4
              .row.justify-content-center.m-4
                .col-md-12
                  h3 Pruebas estadísticas
                  p Son diversas las pruebas estadísticas  que pueden aplicarse al conjunto de datos, a continuación se relacionan algunas de las más utilizadas
                  ul.lista-ul--color.CT10
                    li
                      i.fas.fa-check
                      p Prueba t de student es un medidor estadístico para poblaciones menores o iguales a 30.
                    li
                      i.fas.fa-check
                      p Prueba z es una prueba para distribuciones normales, que muestra la posibilidad que un data aparezca reflejado en la distribución de frecuencias.
                    li
                      i.fas.fa-check
                      p Análisis de varianza es una test estadístico para examinar si dos o más grupos de datos se diferencian entre sí, analizando  sus medidas de tendencia central y  sus varianzas.
                    li
                      i.fas.fa-check
                      p Análisis de covarianza  según Bernal (2006) es una prueba que se utiliza para analizar y determinar la relación entre una variable dependiente y dos o más variables independientes. (p 181)
                    li
                      i.fas.fa-check
                      p Chi cuadrado. Es una prueba estadística que permite demostrar si dos fracciones de población pueden considerarse iguales, es decir, si no presentan diferencias significativas.
                  p.mb-0 En la actualidad todos los ordenadores facilitan la verificación de todas estas pruebas estadísticas de la información, a través de Excel, o de programas especiales como stapgraphic o SSPS, entre otros validados por la comunidad científica.










  
</template>

<script>
export default {
  name: 'Tema5',
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
