<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 La información
    
    .bloque-texto-a.color-primario.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/tema1/img01.svg', alt='información')
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p En el actual siglo XXI, una de sus principales características es la valía de la información para la toma de decisiones tanto empresariales, como ambientales y sociales; la sociedad vive en un mundo de permanente bombardeo de la información en noticias de prensa, radio y televisión como los medios más tradicionales, pero con la masificación de la web y de las redes sociales hoy día el ser humano vive rodeado de información útil y también de información bastante inservible o inútil.
    
    p.mb-5 Ahora bien, en los desempeños en que cotidianamente se desenvuelve la gran mayoría de las profesiones, oficios y artes, la información es trascendente en la toma de decisiones para el desempeño laboral. Para que este proceso de decisión sea lo más acertado posible es necesario determinar primero lo que es dato, información y generación de conocimientos. 

    #t1_1.titulo-segundo
      h2 1.1 Datos, información y conocimientos
    
    p.mb-5 En el presente milenio sea caracterizado por lo que la sociedad científica ha denominado como la sociedad de la información según las expresiones de Ruiz de Querol (2.007), y es que ha sido tanta la exposición de la sociedad a todo tipo de información y en todos los momentos, que se ha convertido en una desventaja competitiva no hacer parte de esta sociedad del conocimiento, para esto es importante, entonces entender como los datos se convierten en conocimiento en el contexto contemporáneo.

    .row.justify-content-center.mb-4
      .col-lg-10
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema1/img02.svg', alt='')

          .tarjeta.color-primario.p-3(x="12%" y="27%")
            p.mb-0.text-white Datos es la diferenciación simbólica de una variable que puede ser clasificada como cualitativa o cuantitativa, indicando un valor representativo a dicha variable para su análisis, estudio y clasificación. Por ejemplo: Juan pesa 80 kilogramos, la expresión 80 es el valor representativo del peso de Juan que se mide en kilogramos. 

          .tarjeta.color-acento-botones.p-3(x="49%" y="65%")
            p.mb-0 Información es la denominación que se le da a la agrupación organizada de datos significativos que describen sucesos, eventos y hechos, con cuyo procesamiento se puede construir un mensaje descriptivo y/o analítico.

          .tarjeta.color-acento-contenido.p-3(x="86%" y="27%")
            p.mb-0.text-white Conocimiento es la explicación e interpretación de la información producto de los procesos cognitivos de comparar, analizar, combinar o experimentar, permitiendo al sujeto la argumentación y la aplicación de la información.
    
    #t1_2.titulo-segundo
      h2 1.2 Importancia de la información
    
    p.mb-4 Es importante estar debidamente informado sobre un propósito, porque no solamente permite desenrollar un punto de vista o postura respecto del mismo, sino también porque permite adelantarse  a un hecho o estar prevenidos sobre determinada situación.

    .row.mb-5
      .col-lg-6.mb-4.mb-md-0
        .bloque-texto-b.color-primario.p-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            h3.text-regular gracias a la información se puede conceptuar, significar o encontrarle sentido a las cosas que rodean o acontecen en la sociedad, para luego de concebir el conocimiento debido, tomar decisiones”.
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            p.mb-0 Florencia (2.013) 
      .col-lg-5
        figure.px-4
          img(src='@/assets/curso/tema1/img03.svg', alt='')

    .cajon.color-primario.BGYenny.p-4.mb-5
      p Entonces, la información es necesaria y vital en muchos aspectos de la vida personal y profesional, y en los tiempos presentes se le atribuye a la misma una especial valoración en diversos contextos ya que sin duda alguna en la actualidad la humanidad está atravesando la era de la información.
    
    #t1_3.titulo-segundo
      h2 1.3 Fuentes de información
    
    p.mb-5 Por fuente de información se define cualquier instrumento o en un sentido más amplio, recurso, que permita satisfacer una necesidad informativa. La expresión fuente se entiende entonces, como el documento, sitio, lugar, página, domicilio, persona natural o jurídica, en donde se encuentra la información que necesita un demandante de la misma.

    h3 #[i Fuentes de información primaria y secundaria]

    p.mb-4 Obtener información confiable y válida requiere cuidado y dedicación, pues de ello depende la confiabilidad y validez del estudio, estos datos o información que va a recolectarse en el medio, a través del cual se responden las preguntas de investigación y se logran los objetivos del estudio. Los datos deben ser pertinentes y suficientes para lo cual es necesario definir las fuentes y técnicas adecuadas para su recolección.

    .row.mb-5.justify-content-center
      .col-lg-5.mb-4.mb-lg-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img04.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-lg-5
              h4.text-center Fuentes de información primarias
              p.mb-0 Son todas aquellas personas, empresas, organizaciones, los acontecimientos que aquejan o benefician a la sociedad, el propio medio ambiente natural de las donde  se obtienen información directa, es decir, de donde se origina la información, también son conocidas como fuentes de primera mano o desde el lugar de los hechos.


      .col-lg-5.mb-4.mb-lg-0
        .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img05.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-lg-5
              h4.text-center Fuentes de información secundarias
              p.mb-0 Son todas aquellas revistas, libros, los documentales, los noticieros, medios de información  y   los documentos escritos (todo medio impreso físico o digital) que ofrecen información sobre el tema por investigar, pero que no son la fuente original de los hechos o situaciones, sino que los referencian.

    #t1_4.titulo-segundo
      h2 1.4 Técnicas de recolección de la información
    
    p.mb-5 Debe entenderse que los procesos de recolección de la información constan una gran multiplicidad de técnicas o herramientas para la recopilación de la misma, las técnicas más usadas son:

    .row.justify-content-center.mb-4
      .col-md-10.col-lg-8
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema1/img06.svg', alt='')

          .tarjeta.color-acento-contenido.p-3(x="7%" y="47%")
            p.mb-0.text-white
              | Encuesta es según Bernal (2.000) “una de las técnicas más reconocidas y utilizadas, a pesar de que ha perdido credibilidad por  el sesgo que hay en las personas encuestadas y por el uso cada vez más frecuente de TIC´S” (p.172)
              br
              br
              | Por tanto, la encuesta está fundada en un agregado de interrogantes que son planeadas con la finalidad de obtener información de las personas en referencia a una temática o hecho específico.

          .tarjeta.color-acento-contenido.p-3(x="22%" y="78%")
            p.mb-0.text-white Entrevista es una técnica orientada a obtener una conversación estructurada con las personas con apropiación de la información, la entrevista a pesar de manejar un cuestionario base con el cual se establecerá una comunicación dialógica con el entrevistado, permite la flexibilidad de ampliar la respuesta del entrevistado con nuevas preguntas.

          .tarjeta.color-acento-contenido.p-3(x="50%" y="91%")
            p.mb-0.text-white Observación directa cada día cobra mayor fuerza y credibilidad, y cada vez tiende a generalizarse más, dado que permite la obtención de información directa y confiable, siempre que medie un procedimiento sistematizado y supervisado, para lo cual hoy en día se utilizan medios audiovisuales muy completos y con alto componente tecnológico en las industrias 4.0, permite estudios de comportamiento del consumidor, del personal en el puesto de trabajo, estímulos basados en percepciones sensoriales en pruebas de productos, entre otros.
          
          .tarjeta.color-acento-contenido.p-3(x="78%" y="78%")
            p.mb-0.text-white Análisis de documentos se utiliza bajo los criterios de fichas bibliográficas que analizan material impreso o digital, su principal uso está en la elaboración del marco teórico del estudio.

          .tarjeta.color-acento-contenido.p-3(x="93%" y="47%")
            p.mb-0.text-white Búsquedas web  la consulta de bases de datos, páginas web, bloog´s, en la red virtual se ha convertido en técnica de recolección de información por excelencia de toda la sociedad.
    
    #t1_5.titulo-segundo
      h2 1.5 Análisis de la información 
    
    p.mb-5 La información tiene diversas formas de ser examinada y analizada, de ello, dependerá las conclusiones que sean pertinentes al proceso de investigación que se está desarrollando, por tanto a continuación se presenta la conceptualización de las formas de análisis de la información.

    a(:href="obtenerLink('/downloads/Analisis_de_la_informacion.pdf')" target="_blank")      
      img.mb-4(src='@/assets/curso/tema1/img07.svg', alt='')
      .indicador--click(v-if="mostrarIndicador")
    
    .tarjeta.color-primario.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/template/icono-pdf.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 Análisis de la información
            .col-sm-auto
              a.boton.color-acento-contenido.texto-blanco(:href="obtenerLink('/downloads/Analisis_de_la_informacion.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download

    p.mb-0 Para concretar la investigación cualitativa pretende profundizar en los conceptos y valores, detectar motivadores y valorar las reacciones y para su ejecución requiere un soporte de psicología. Por otro lado en la  investigación cuantitativa pretende cuantificar, establecer proporciones y diferencias e importancia relativa y para su ejecución requiere un soporte estadístico.
  
</template>

<script>
export default {
  name: 'Tema1',
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
