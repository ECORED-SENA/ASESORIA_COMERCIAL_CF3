<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Análisis de datos
    
    p.mb-5 El análisis de datos es el proceso de examinar conjuntos de datos para encontrar tendencias y sacar conclusiones sobre la información que contienen; en la investigación cuantitativa apela a técnicas de cálculo de variables y  a la estadística como técnica específica en la ordenación y la exégesis de datos cuantitativos o cualitativos.

    #t4_1.titulo-segundo
      h2 4.1 Antecedentes
    
    p.mb-4 Son todos los trabajos realizados previamente sobre el tema que se va a investigar y que aportan información relevante para nuestro trabajo. La web page de Quality Leadership University (QLE) indica que tradicionalmente en el análisis de antecedentes se verifica:

    .row.BG30.justify-content-around.mb-5.p-4
      .col-lg-7
        .p-4          
          ul.lista-ul--color
            li
              i.fas.fa-check
              | Los resultados de otras investigaciones o estudios
            li
              i.fas.fa-check
              | La importancia de estos con relación al tema planteado
            li
              i.fas.fa-check
              | Título y autores del trabajo de referencia
            li
              i.fas.fa-check
              | El planteamiento del problema, los objetivos e hipótesis planteadas por estos estudios o investigadores
            li
              i.fas.fa-check
              | Metodología utilizada

      .col-6.col-lg-3
        figure.mbN01
          img(src='@/assets/curso/tema4/img01.svg', alt='')

    #t4_2.titulo-segundo.mtP01
      h2 4.2 Tipos de análisis de datos
    
    p.mb-4 Son varios los tipos de análisis de datos que se pueden realizar dependiendo de la información que se dispone, a continuación se destacan los más importantes.

    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-botones
          h5 Figura 3.
          span Tipos de análisis de datos
        .row.align-items-end
          .col-lg-6.mb-4.mb-lg-0
            figure
              img.w-25.mx-auto(src='@/assets/curso/tema4/img02.svg', alt='')
          .col-lg-6.BG10.rounded.p-4
            p.mb-0 #[strong El análisis cualitativo] es un proceso mediante el cual se extraen conclusiones de datos no estructurados y heterogéneos que no son expresados de forma numérica o cuantificable, por tanto, las conclusiones lógicas del análisis están basadas en el conocimiento causal de los hechos los cuales permiten inferir los efectos.
        .row
          .col-12.my-4
            figure
              img(src='@/assets/curso/tema4/img03.svg', alt='')
        .row
          .col-lg-6.BG40.rounded.p-4.mb-4.mb-lg-0
            p.mb-0 #[strong El análisis cuantitativo] es el proceso de análisis que emplea métodos matemáticos, econométricos y estadísticos para justificar, o vaticinar futuros eventos mediante datos numéricos.
          .col-lg-6
            figure
              img.w-25.mx-auto(src='@/assets/curso/tema4/img04.svg', alt='')    
    
    p.mb-5
      strong De acuerdo con el Blogs Questionpro (2021): 
      | también se recurre a otros tipos de análisis entre los cuales está el análisis descriptivo, que como su nombre lo indica, consiste en describir las tendencias claves en los datos existentes y observar las situaciones que conduzcan a nuevos hechos, está basada en la estadística descriptiva que conlleva a las medidas de tendencia central (media, mediana y moda) esta información es cotejada con las medidas de dispersión (desviación estándar y error estándar) para su validación.
      br
      br
      | Por su parte, el análisis predictivo se conceptúa por parte del mismo blog Questionpro (2021) como una forma de análisis estadístico que se encomienda de conseguir información nueva o histórica y utilizarla para pronosticar patrones de conducta.
      br
      br
      | Por último, está el análisis prescriptivo se encarga de encontrar una solución entre una gama de variantes con el objetivo de optimizar los recursos y aumentar la eficiencia operativa, es decir, ayuda a entender qué tenemos que hacer para obtener los resultados que queramos en el futuro.

    .row.justify-content-center.mb-5
      .col-lg-10    
        .titulo-sexto.color-acento-botones
          h5 Figura 4.
          span Análisis descriptivo, predictivo y prescriptivo
        figure
          img(src='@/assets/curso/tema4/img05.svg', alt='')
    
    #t4_3.titulo-segundo.mtP01
      h2 4.3 Técnicas  de análisis de datos
    
    p.mb-4 Las técnicas de análisis de datos se definen como el proceso de explorar los datos  metódicamente con el objetivo de destacar aquella información que sea más útil, con el auge y la aplicación de las tecnologías basadas en las industrias 4.0 los análisis de datos se hacen cada vez más precisos, disminuyendo la incertidumbre y el riesgo de errores.

    .tarjeta.tarjeta--gris.p-4.mb-5
      LineaTiempoC.color-acento-contenido(text-small)
        .row.justify-content-center(titulo="Minería de datos")
          .col-12.mb-4
            p Aprendizaje  automático es la parte de la inteligencia artificial (IA) que se concentra en desarrollar sistemas que aprenden, u optimizan el rendimiento, en dependencia  de los datos que ejecuten. Inteligencia artificial es un término amplio que se refiere a sistemas o máquinas que imitan la inteligencia humana, se puede decir que, el Machine Learning (como también es conocido el aprendizaje automático) es una disciplina del ámbito de la Inteligencia Artificial que, a través de algoritmos o guarismos matemáticos, otorga a los computadores de la capacidad de asemejar estándares en datos masivos y elaborar predicciones (para hacer análisis predictivos)          
          .col-md-10
            figure
              img(src='@/assets/curso/tema4/img06.png', alt='')
        
        .row.justify-content-center(titulo="Business intelligence")
          .col-12.mb-4
            p Business intelligence se conceptúa al conjunto de metodologías, aplicaciones, prácticas y capacidades enfocadas a la creación y administración de información que permite tomar mejores decisiones a los usuarios de una organización (Conesa y Curto, 2010, p18). Estas acciones pueden ser procesos, técnicas, metodologías, herramientas y tecnologías que generan información para que sirva de base para la toma de decisiones. En otras palabras la inteligencia de negocios o business intelligence (BI), mezcla lo más profundo del análisis de negocios con el trabajo del big data y la minería de datos, para obtener la información más expedita que  permita la mejor decisión posible en los escenarios posibles, minimizando siempre de esta forma los riesgos posibles.
          .col-md-10
            figure
              img(src='@/assets/curso/tema4/img07.png', alt='')
        
        .row.justify-content-center(titulo="Aprendizaje  automático")
          .col-12.mb-4
            p Aprendizaje  automático es la parte de la inteligencia artificial (IA) que se concentra en desarrollar sistemas que aprenden, u optimizan el rendimiento, en dependencia  de los datos que ejecuten. Inteligencia artificial es un término amplio que se refiere a sistemas o máquinas que imitan la inteligencia humana, se puede decir que, el Machine Learning (como también es conocido el aprendizaje automático) es una disciplina del ámbito de la Inteligencia Artificial que, a través de algoritmos o guarismos matemáticos, otorga a los computadores de la capacidad de asemejar estándares en datos masivos y elaborar predicciones (para hacer análisis predictivos).     
          .col-md-10
            figure
              img(src='@/assets/curso/tema4/img08.png', alt='')
        
        .row.justify-content-center(titulo="Análisis del Big Data")
          .col-12.mb-4
            p
              | Análisis del Big Data,  el análisis de ‘grandes datos’ es el proceso de inspeccionar grandes cantidades de datos de una diversidad de tipos (big data) para descubrir patrones escondidos u ocultos, correspondencias inéditas u otra información útil, para generar información que posteriormente se convierta en conocimiento y aprendizaje en la toma asertiva de decisiones. Según Rodal Montero (2.020) define la “analítica de Big Data como  la recolección, gestión y análisis a alta velocidad de grandes, dinámicos y heterogéneos volúmenes de datos generados por usuarios y máquinas, que debido a su tamaño y complejidad superan las capacidades de procesamiento de las herramientas de software tradicionales, por lo que requieren técnicas innovadoras para su procesamiento y tratamiento”. (p 65)
              br
              br
              | Las fases del proceso de la analítica de grandes datos es la recolección de grandes magnitudes de datos, posteriormente existe todo un proceso de limpieza de esos datos, evitando los valores que constituyan ruido.    
          .col-md-10
            figure
              img(src='@/assets/curso/tema4/img09.png', alt='')
    
    .cajon-b.color-acento-contenido.p-3.mb-0
      p.mb-4 Para Big Data Internacional Campus (2.020) Data mining es el proceso de identificación de toda la información que es relevante y es extraída de grandes cantidades de datos. El objetivo de esta extracción es descubrir patrones y tendencias estructurando la información que se ha obtenido de una manera que sea comprensible para su utilización. El data mining reúne las ventajas de varias áreas como la inteligencia artificial, la estadística, las bases de datos, la computación gráfica y el procesamiento masivo.

      p.mb-0 La principal diferencia entre big data y data mining (grandes datos y minería de datos) se halla en que data mining se refiere a operaciones que implican búsquedas sofisticadas para la obtención de datos específicos y concretos dentro del gran mundo de los datos (big data) Ejemplificando la data mining es observar, analizar y estudiar los datos con  microscopios, mientras que el big data utilizará telescopios para observar, analizar y estudiar los datos

  
</template>

<script>
export default {
  name: 'Tema4',
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
