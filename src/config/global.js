export default {
  global: {
    componenteFormativo: 'Transporte y seguridad vial',
    descripcionCurso:
      'Un aspecto de vital importancia en cualquier sociedad es la movilidad, que  es considerada un factor determinante para el desarrollo de una nación, los desplazamientos tanto de personas como de mercancías se dan por diferentes medios de transporte, por lo que debe garantizarse un control en la movilidad que redunde en una acertada seguridad vial en todo el territorio nacional.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/deco_01.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/deco_02.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/deco_03.png'),
      },
    ],
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
        titulo: 'Plan estratégico de seguridad vial y relaciones humanas',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Aspectos relacionados con el transporte',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Aspectos normativos del transporte terrestre automotor de servicio público',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Tipos de transporte terrestre automotor (T.T.A.)',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'Orden de comparendo e Informe Único de Infracción al Transporte IUIT',
            hash: 't_2_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
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
  complementario: [
    {
      tema: 'Formato para el informe único de infracciones de transporte IUIT',
      referencia:
        'Resolución 20203040003785 de 2020. [Ministerio de Transporte]. Por la cual se adopta el formato para el informe único de infracciones de transporte IUIT. Mayo 26 de 2020.',
      tipo: 'Documento legal',
      link: 'https://www.mintransporte.gov.co/documentos/479/2020/genPagDocs=6',
    },
    {
      tema: 'Plan estratégico de seguridad vial',
      referencia:
        'Resolución 20223040040595 de 2022. [Ministerio de Transporte]. Por la cual se adopta la metodología para el diseño, implementación y verificación de los Planes Estratégicos de Seguridad Vial y se dictan otras disposiciones. Julio 14 de 2022.',
      tipo: 'Documento legal',
      descarga: '/downloads/R_20223040040595.pdf',
    },
    {
      tema: 'Decreto único reglamentario del sector transporte',
      referencia:
        'Decreto 1079 de 2015. [El Presidente de la República de Colombia]. Por medio del cual se expide el Decreto Único Reglamentario del Sector Transporte.Mayo 26 de 2015.',
      tipo: 'Documento legal',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=77889#:~:text=Tiene%20por%20objeto%20la%20ejecuci%C3%B3n,por%20el%20Ministerio%20de%20Transporte',
    },
  ],
  glosario: [
    {
      termino: 'Actividad transportadora',
      significado:
        'Conjunto organizado de operaciones tendientes a ejecutar el traslado de personas o cosas, separada o conjuntamente, de un lugar a otro, utilizando uno o varios modos de conformidad con las autorizaciones expedidas por las autoridades competentes.',
    },
    {
      termino: 'COPASST',
      significado: 'Comité paritario de seguridad vial y salud en el trabajo.',
    },
    {
      termino: 'CSV',
      significado: 'Comité de seguridad vial.',
    },
    {
      termino: 'EPP',
      significado: 'Elementos de protección personal.',
    },
    {
      termino: 'PESV',
      significado: 'Plan estratégico de seguridad vial.',
    },
    {
      termino: 'PHVA',
      significado: 'Planear, hacer, verificar, actuar.',
    },
    {
      termino: 'PND',
      significado: 'Plan nacional de desarrollo.',
    },
    {
      termino: 'PNSV',
      significado: 'Plan nacional de seguridad vial.',
    },
    {
      termino: 'SG-SST',
      significado: 'Sistema de gestión de seguridad y salud en el trabajo.',
    },
    {
      termino: 'Transporte privado',
      significado:
        'Aquel que tiende a satisfacer las necesidades de movilización de personas o cosas dentro del ámbito de las actividades exclusivas de las personas naturales o jurídicas.',
    },
    {
      termino: 'Transporte público',
      significado:
        'Industria encaminada a garantizar la movilización de personas o cosas, por medio de vehículos apropiados en condiciones de libertad de acceso, calidad y seguridad de los usuarios, sujeto a una contraprestación económica.',
    },
  ],
  referencias: [
    {
      referencia:
        'Decreto 1079 de 2015. [El Presidente de la República de Colombia]. Por medio del cual se expide el Decreto Único Reglamentario del Sector Transporte. Mayo 26 de 2015. ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=77889#:~:text=Tiene%20por%20objeto%20la%20ejecuci%C3%B3n,por%20el%20Ministerio%20de%20Transporte',
    },
    {
      referencia:
        'Decreto 1252 de 2021. [Ministerio del Interior]. Por el cual se modifica el literal a del Artículo 2.3.2.1 del Título 2 de la Parte 3 del Libro 2 y se sustituye el Capítulo 3 del Título 2 de la Parte 3 del Libro 2 del Decreto 1079 de 2015, único Reglamentario del Sector Transporte, en lo relacionado con los Planes Estratégicos de Seguridad Vial. Octubre 12 de 2021.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=172386',
    },
    {
      referencia:
        'Ley 336 de 1996. [Congreso de Colombia].  Por la cual se adopta el estatuto nacional de transporte. Diciembre 20 de 1996. ',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_0336_1996_pr001.html',
    },
    {
      referencia:
        'Ley 769 de 2002. [Poder público – Rama Legislativa]. Por la cual se expide el Código Nacional de Tránsito Terrestre y se dictan otras disposiciones. Julio 6 de 2002. ',
      link:
        'https://www.movilidadbogota.gov.co/web/sites/default/files/ley-769-de-2002-codigo-nacional-de-transito_3704_0.pdf',
    },
    {
      referencia:
        'Ley 1503 de 2011. [Congreso de la República]. Por la cual se promueve la formación de hábitos, comportamientos y conductas seguros en la vía y se dictan otras disposiciones. Diciembre 29 de 2011.',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_1503_2011.html',
    },
    {
      referencia:
        'Resolución 4959 de 2006. [Ministerio de Transporte]. Por la cual se fijan los requisitos y procedimientos para conceder los permisos para el transporte de cargas indivisibles extrapesadas y extradimensionadas, y las especificaciones de los vehículos destinados a esta clase de transporte Noviembre 8 de 2006. ',
      link:
        'https://www.invias.gov.co/index.php/normativa/resoluciones-circulares-otros/5576-resolucion-4959-de-8-noviembre-de-2006',
    },
    {
      referencia:
        'Resolución 20203040003785 de 2020. [Ministerio de Transporte]. Por la cual se adopta el formato para el informe único de infracciones de transporte IUIT. Mayo 26 de 2020. ',
      link: 'https://www.mintransporte.gov.co/documentos/479/2020/genPagDocs=6',
    },
    {
      referencia:
        'Resolución 20223040040595 de 2022. [Ministerio de Transporte]. Por la cual se adopta la metodología para el diseño, implementación y verificación de los Planes Estratégicos de Seguridad Vial y se dictan otras disposiciones. Julio 14 de 2022.',
      link:
        'https://www.mintransporte.gov.co/documentos/buscar/?q=20223040040595',
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
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lino Andrés Quiroga Amaya',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Julián Ramírez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'John Jairo Arciniegas González ',
        cargo: 'Producción audiovisual ',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ludwyng Corzo García ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Melina Tatiana Quintero Rodriguez ',
        cargo: 'Validación Contenido ',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres ',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Magdi Khalifah',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Melina Tatiana Quintero',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
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
