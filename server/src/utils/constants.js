const issuesList = [
    {
      id: 1,
      name: "Issue Report N 221212",
      cover_image: "issue-1.png",
      description: `El proceso se inicia cuando un usuario detecta que se ha producido una incidencia de
      seguridad. El usuario se deberá identificar para acceder al sistema y realizar la
      comunicación de la incidencia. El sistema proporcionará una lista de incidencias tipo
      más comunes de entre las cuales seleccionará, en caso de que la incidencia fuera de
      otra índole se procederá a su descripción.
      Posteriormente se introducirá todos aquellos datos referentes a la incidencia que son
      requeridos y establecidos en el modelo el documento de seguridad editado por la
      Agencia de Protección de datos.
      En el caso de que la incidencia conlleve para su resolución la recuperación de datos el
      proceso deberá contemplar dicha actuación.`,
    },
    {
      id: 2,
      name: "Issue Report N 112221",
      cover_image: "issue-2.png",
      description: `El Reglamento de la LODP permite realizar el registro de incidencias mediante el
      rellenado de formularios en soporte papel si este no está informatizado.
      El proyecto de informatización del registro de incidencias tiene como objeto :
      . Contribuir a la implantación de la Oficina sin papeles, como metodología
      avanzada de reducción del consumo de materias primas – papel -, mediante la
      utilización de las tecnologías disponibles.
      . Servir de canal de comunicación, en donde interactúen el responsable de
      seguridad y las personas que notifican las posibles incidencias, de forma rápida y
      eficaz. 
      `,
    },
    {
      id: 3,
      name: "Issue Report N AR2921",
      cover_image: "issue-3.png",
      description: `Se pretende desarrollar el proyecto utilizando un entorno distribuido cliente/servidor,
      por las ventajas que aporta en cuanto a que permite que la información se procese
      cerca de donde se genera, facilidad de uso de interfaces gráficas de usuario.
      Para el desarrollo y documentación del proyecto, en el aspecto tecnológico se propone
      los siguientes software y herramientas de desarrollo y diseño: El proyecto se va a desarrollar siguiendo 
      el método del ciclo de vida clásico o en
      cascada, al ser una metodología donde cada una de las etapas se desarrolla de
      manera lineal facilita la realización de este proyecto`,
    },
    {
      id: 4,
      name: "Issue Report N LT998721",
      cover_image: "issue-4.png",
      description: `El proyecto ha sido organizado teniendo en cuenta las fechas de entrega de las PECs
      propuestas por el aula de TFC – Ingeniería del Software de la UOC. La planificación
      ha sido pensada en que habrá una dedicación constante, incluyendo los días del fin de
      semana. Este documento engloba las diferentes fases del proyecto con los siguientes
      hitos:
      1. Inicio: 23 de septiembre de 2012. Hito 1
      2. Documento PEC1 Planificación: 3 de octubre de 2012. Hito 2
      3. Documento PEC2 Análisis de Requerimientos: 7 de noviembre de 2012. Hito 3
      4. Documento PEC3 Diseño técnico: 12 de diciembre de 2012. Hito 4
      5. Memoria y presentación del proyecto: 2 de enero de 2013. Hito 5
      6. Tribunal virtual: 25 de enero de 2013. Hito 6  
      `,
    },
    {
      id: 5,
      name: "Issue Report N DE77762",
      cover_image: "issue-5.png",
      description: `Esta fase de análisis de requerimientos o requisitos tiene como objetivo definir con
      detalle las necesidades de información para el desarrollo del software objeto del
      proyecto que nos ocupa.
      El conocimiento necesario del dominio de la aplicación, que nos permita precisar las
      funciones y los requisitos en general del software, está basado en la recogida de
      información del las siguientes fuentes:
       Medidas de seguridad en ficheros automatizados reguladas en los artículos 89
      a 104 del reglamento que desarrolla la LOPD (Ley Orgánica de Protección de Datos
      15/1999 - Real Decreto 1720/2007. Las medidas de seguridad aplicables a los ficheros
      están clasificadas en tres niveles.
      `,
    },
    {
      id: 6,
      name: "Issue Report N 233310",
      cover_image: "issue-6.png",
      description: `Guía Modelo del Documento de Seguridad, publicada por la Agencia Española
      de Protección de Datos. En el apartado 4. se desarrolla los procedimientos de
      notificación, gestión y respuesta ante incidencias de seguridad en ficheros
      automatizados.
      El registro de incidencias es una herramienta indispensable en todo sistema de
      información, este forma parte del documento de seguridad de cualquier empresa o
      administración donde se trata con ficheros que contienen datos de carácter personal, y
      por tanto deberá estar a disposición de los funcionarios de la AEPD (Agencia Española
      de Protección de Datos), en caso de inspección si estos lo requieren. 
      `,
    },
    {
      id: 7,
      name: "Issue Report N 65472",
      cover_image: "issue-7.png",
      description: `El registro de incidencias tiene como objeto crear un procedimiento de notificación y
      gestión de las incidencias que afecten a los datos de carácter personal, así como dejar
      constancia de la adopción de las medidas correctoras para que dicha incidencia sea
      controlada, por lo que debe mantenerse una acción permanente de control, revisión y
      actuación sobre las medidas implantadas e incidencias detectadas. 
      `,
    },
    {
      id: 8,
      name: "Issue Report N 23166",
      cover_image: "issue-8.png",
      description: `En el registro de incidencias deben quedar registrados todos aquellos problemas
      ocurridos en el sistema de información, de forma que nos permita por un lado evitar
      que se produzcan de nuevo y en caso de repetirse, poder disponer de un histórico de
      soluciones adecuadas para una mayor rapidez en la resolución de la incidencias que
      se detecten. El histórico deberá contener un conjunto de incidencias tipificadas así
      como la resolución asignada al tipo de incidencia.
      El procedimiento de registro de incidencias lo podemos descomponer en tres
      subsistemas diferenciados, por una parte el subsistema de conexión, el subsistema de
      gestión de incidencias y el subsistema de consultas y estadísticas.  
      `,
    },
    {
      id: 9,
      name: "Issue Report N 568990",
      cover_image: "issue-9.png",
      description: `En este subsistema se desarrolla el mantenimiento de usuarios para acceder al
      sistema. Se tienen en cuenta las medidas y normas relativas a la autenticación de los
      actores intervinientes en el sistema.
      La identificación de los usuarios se debe realizar de forma inequívoca y personalizada
      verificando su autorización, a cada usuario se le asigna un rol según las funciones
      asignadas dentro del sistema.
      Las operaciones son las siguientes:
      • Alta de usuario
      • Baja de usuario
      • Modificación de usuario
      • Conexión al sistema.  
      `,
    },
    {
      id: 10,
      name: "Issue Report N 90432",
      cover_image: "issue-10.png",
      description: `Los actores que interviene en el procedimiento de registro de incidencias son usuarios
      registrados en el sistema, en el caso del usuario administrador tiene calidad de
      superusuario ya que se encarga de la gestión del resto de usuarios.
      Administrador.-
      Usuario del sistema cuya función es realizar el mantenimiento de usuarios del sistema,
      consiste en conceder, modificar o cancelar el acceso al sistema por parte de los
      usuarios y los distintos responsables.
      Usuario:
      Toda persona que tiene acceso a los datos de carácter personal de la base de datos
      del sistema de información, por tanto responsable de notificar cualquier incidencia que
      se produzca al responsable de seguridad. 
       
      `,
    },
  ];

  module.exports = issuesList;