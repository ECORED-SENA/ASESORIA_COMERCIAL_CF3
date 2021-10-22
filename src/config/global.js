export default {
  global: {
    componenteFormativo: 'Manejo de la información',
    descripcionCurso:
      'En este documento se comprenderá el manejo de la información y sus tipos de análisis, los cuales son necesarios para la toma de decisiones, dirigidos a minimizar la incertidumbre y el riesgo en el mercado. Igualmente se abordarán las variedades de presentación de la información de mercados, su procesamiento, desde su recolección, depuración, análisis y construcción de conocimiento de mercados.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'La información',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Datos, información y conocimiento',
            hash: 't1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Importancia de la información',
            hash: 't1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Fuentes de información',
            hash: 't1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Técnicas de recolección de información',
            hash: 't1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Análisis de la información',
            hash: 't1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Variables de información',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Tipos de variables',
            hash: 't2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Clasificación de las variables',
            hash: 't2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Procesamiento de la información',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Análisis de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Antecedentes',
            hash: 't4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Tipos de análisis ',
            hash: 't4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Técnicas de análisis de datos',
            hash: 't4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Técnicas de evaluación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Informes y documentos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Informes',
            hash: 't6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo: 'Tipos de informes',
            hash: 't6_2',
          },
        ],
      },
    ],
    subMenu: [
      //{
      //  nombreRuta: 'actividad',
      //  icono: 'far fa-question-circle',
      //  titulo: 'Actividad didáctica',
      //  desarrolloContenidos: true,
      //},
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Bernal T cesar Augusto. (2.003) Metodología de la investigación aplicada para administración y economía. Editorial Prentice Hill.',
    },
    {
      referencia:
        'Big Data Internacional Campus (2.020). Data mining vs Big data. ',
      link:
        'https://www.campusbigdata.com/big-data-blog/item/82-data-mining-vs-big-data',
    },
    {
      referencia:
        'Harpersbazaar. (2019). La ropa que eliges afecta a tu estado de ánimo y cerebro, según expertos. En arpersbazaar.mx.',
    },
    {
      referencia:
        'Lafuente M., Navarro J., y Navarro J. (2005). Ilustración de moda. Sistema de Bibliotecas SENA ',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000025549',
    },
    {
      referencia: 'Conceptos. (2018). Minería de datos. ',
      link: 'https://mineriadedatos1.blogspot.com/2018/10/conceptos.html',
    },
    {
      referencia:
        'Conesa Caralt Jordi, Curto Diaz Josep. (2010). Introducción al Bussines Intelligence. Editorial UOC.',
    },
    {
      referencia:
        'Dertiano Victor. (2014). ¿Qué es Business Intelligence? Beneficios del BI. ',
      link: 'https://blog.bi-geek.com/que-es-business-intelligence-beneficios/',
    },
    {
      referencia:
        'Espinoza Freire, Eudaldo. (2018). Las variables y su operacionalización en la investigación educativa. Scielo. ',
      link:
        'http://scielo.sld.cu/scielo.php?script=sci_arttext&pid=S1990-86442018000500039',
    },
    {
      referencia:
        'Fernández Jorge. (2016). Investigación Cualitativa Vs Investigación Cuantitativa. Investigación y docencia ',
      link:
        'https://www.investigacion360.com/2017/02/investigacion-cualitativa-vs-investigacion-cuantitativa.html',
    },
    {
      referencia: 'Florencia. (2013). Importancia de la información. ',
      link: 'https://www.importancia.org/informacion.php',
    },
    {
      referencia: 'Grupo 10. (2015). Tipos de gráficas de control. ',
      link:
        'http://grupo10direccion.blogspot.com/2015/06/tipos-de-graficas-de-control-1.html',
    },
    {
      referencia:
        'Hernández Macario. (2008). El control estadístico del proceso. ',
      link:
        'https://optyestadistica.wordpress.com/2008/06/11/el-control-estadistico-de-proceso-3-de-3/',
    },
    {
      referencia:
        'Hernández Noelia. (2019). Esto es lo que puede hacer la Inteligencia Artificial por la educación. Educación 3.0 ',
      link:
        'https://www.educaciontrespuntocero.com/noticias/inteligencia-artificial-en-educacion/',
    },
    {
      referencia:
        'Hidalgo Nuchera Antonio, León Serrano Gonzalo, Pavon Morote Julián. (2013). la gestión de la innovación y la tecnología en las organizaciones. Editorial Pirámide.',
    },
    {
      referencia: 'Khan academy. (2018) Polígonos de frecuencia. ',
      link:
        'https://es.khanacademy.org/math/2-secundaria-pe/xf4e5558599a475b6:probabilidad-y-estadistica-2sec/xf4e5558599a475b6:preguntas-estadisticas-representacion-de-datos-a-traves-de-histogramas-y-poligonos-de-frecuencia/a/81817-artculo-polgonos-de-frecuencia',
    },
    {
      referencia:
        'Higuita David. (2016). Analítica y productividad aplicada al ruteo de vehículos. ',
      link:
        'https://www.grupobancolombia.com/wps/portal/empresas/capital-inteligente/entorno-empresarial/tendencias/analitica-y-productividad',
    },
    {
      referencia:
        'IBM. (2007). Análisis de causa raíz: el diagrama de espina de pescado. ',
      link:
        'https://managing-ils-reporting.itcilo.org/es/herramientas/analisis-de-causa-raiz-el-diagrama-de-espina-de-pescado',
    },
    {
      referencia:
        'Lam Diaz Rosa. (2016).  La redacción de un artículo científico. ',
      link:
        'http://scielo.sld.cu/scielo.php?script=sci_arttext&pid=S0864-02892016000100006',
    },
    {
      referencia: 'Marques Fidel. (2017). Datos, información y conocimiento. ',
      link:
        'https://facturin-bi.inftel.com.mx/index.php/conocimiento/datos-informacion-conocimiento',
    },
    {
      referencia: 'Marta. (2019). ¿Qué es un Histograma?  Super prof ',
      link:
        'https://www.superprof.es/apuntes/escolar/matematicas/estadistica/descriptiva/histograma.html',
    },
    {
      referencia:
        'Lind Douglas A, Marchal William E, Wathen Samuel A. (2.008). Estadística aplicada a los negocios y la economía. MC Graw Hill Interamericana.',
    },
    {
      referencia: 'Marcondes José. (2020). Diagrama ou grafico de Pareto. ',
      link:
        'https://gestaodesegurancaprivada.com.br/diagrama-ou-grafico-de-pareto-conceito/',
    },
    {
      referencia:
        'Pulido Raúl. (2018).   Como iniciarse en el Big Data y el Análisis de Datos y no morir en el intento: La limpieza de datos. Puentes digitales ',
      link:
        'https://puentesdigitales.com/2018/02/09/como-iniciarse-en-el-big-data-y-el-analisis-de-datos-y-no-morir-en-el-intento-la-limpieza-de-datos/',
    },
    {
      referencia:
        'Quality Leadership University. (2020). Ejemplos de antecedentes de un anteproyecto ',
      link: 'https://qlu.ac.pa/ejemplos-antecedentes-anteproyecto/',
    },
    {
      referencia: 'Questionpro. (2021). ¿Qué es el análisis descriptivo? ',
      link: 'https://www.questionpro.com/blog/es/analisis-descriptivo/',
    },
    {
      referencia:
        'Rodal Montero Enrique, 2.020, Industrias 4.0. Editorial Pirámide.',
    },
    {
      referencia:
        'SAS. (2021). minería de datos, ¿Qué es y porqué es importante? ',
      link: 'https://www.sas.com/es_co/insights/analytics/data-mining.html',
    },
    {
      referencia:
        'Temas de enfermería. (2012). La media aritmética en medidas de tendencia central. ',
      link:
        'https://temasdeenfermeria.com.ar/2012/06/la-media-aritmetica-en-medidas-de-tendencia-central/',
    },
    {
      referencia:
        'Samperi Hernández Roberto, 2.006, Metodología de la investigación. Editorial Mc Graw Hill',
    },
    {
      referencia:
        'Suarez R. Pedro Alejandro, 2.001, Metodología de la investigación diseños y técnicas. Orión editores.',
    },
  ],
  glosario: [
    {
      termino: 'Base de datos',
      significado:
        'las bases de datos son una herramienta fundamental en el entorno informático hoy en día y tienen aplicación en la práctica totalidad de campos como los negocios, organizaciones y en la vida personal. Su aplicabilidad responde a la necesidad de gestionar datos que provean información pertinente.',
    },
    {
      termino: 'Encuesta',
      significado:
        'las encuestas son un método de investigación y recopilación de datos utilizados para obtener información a un grupo de individuos sobre diversos temas',
    },
    {
      termino: 'Entrevista',
      significado:
        'la entrevista es una charla en la que una persona hace a otra una serie de preguntas sobre un tema determinado.',
    },
    {
      termino: 'Observación',
      significado:
        'es una técnica que consiste en observar atentamente el fenómeno, hecho o caso, tomar información y registrarla para su posterior análisis.',
    },
  ],
  complementario: [
    {
      texto: 'Pérez, J. (2008) concepto de información.',
      tipo: 'Página web',
      link: 'https://definicion.de/informacion/',
    },
    {
      texto:
        'Questionpro (2021) cuales son los tipos de variables de la información',
      tipo: 'Página web',
      link:
        'https://www.questionpro.com/blog/es/tipos-de-variables-en-una-investigacion/',
    },
    {
      texto:
        'Espinoza F. (2018). Las variables y su operacionalización en la investigación educativa. Scielo.',
      tipo: 'Página web',
      link: 'http://www.scielo.org.pe/pdf/biblios/n75/a05n75.pdf',
    },
    {
      texto: 'Universidad del sur.(2.018), Análisis de datos',
      tipo: 'Página web',
      link:
        'https://sites.google.com/site/tecnicasdeinvestigaciond38/metodos-estadisticos/1-1-analisis-de-datos',
    },
    {
      texto: 'Equipo editorial etece. (2021) Concepto, informes',
      tipo: 'Página web',
      link: 'https://concepto.de/informe/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Carlo Julián Ramírez Benítez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Diego Fernando Velasco Güiza',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
