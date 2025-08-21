document.addEventListener('DOMContentLoaded', () => {

    // ===== NUEVO: Toda la data de preguntas ahora vive aquí =====
    const questionsData = [
        {
            dimension: "Inteligencia emocional",
            idPrefix: "ie",
            questions: [
                {
                    title: "P1 · Autoconciencia emocional",
                    options: [
                        { text: "Reacciono sin pensar y no puedo decir qué emoción siento.", value: 1 },
                        { text: "A veces noto lo que siento, pero tarde o con palabras vagas.", value: 2 },
                        { text: "Antes de responder, nombro la emoción y hago una breve pausa.", value: 3 },
                        { text: "Digo en voz alta lo que siento y mi plan para responder; invito a otros a hacerlo y anoto las situaciones que me activan.", value: 4 }
                    ]
                },
                {
                    title: "P2 · Autorregulación y foco",
                    options: [
                        { text: "Respondo impulsivamente y me quedo dándole vueltas al tema.", value: 1 },
                        { text: "A veces pauso, pero tardo horas en retomar el foco.", value: 2 },
                        { text: "Uso una pausa corta, elijo una respuesta acorde y vuelvo a la prioridad en ≤30’.", value: 3 },
                        { text: "Mantengo la calma en crisis y ayudo al equipo a reencuadrar y seguir en minutos.", value: 4 }
                    ]
                },
                {
                    title: "P3 · Conciencia social y lectura de clima",
                    options: [
                        { text: "No noto señales de ánimo o tensión en el equipo.", value: 1 },
                        { text: "Detecto señales cuando el problema ya apareció.", value: 2 },
                        { text: "Noto a tiempo el clima y ajusto mi forma de interactuar.", value: 3 },
                        { text: "Anticipo tensiones y las desactivo con intervenciones breves y oportunas.", value: 4 }
                    ]
                }
            ]
        },
        {
            dimension: "Comunicación y relaciones",
            idPrefix: "cr",
            questions: [
                {
                    title: "P1 · Comunicación empática y adaptación",
                    options: [
                        { text: "Supongo lo que la otra persona quiere decir y no presto atención a gestos o tono.", value: 1 },
                        { text: "A veces repito lo que entendí, pero de forma esporádica; ajusto poco mi forma de comunicar.", value: 2 },
                        { text: "Escucho y confirmo con mis palabras lo que entendí; adapto mi tono, ritmo y canal según la otra persona.", value: 3 },
                        { text: "Diseño mis mensajes pensando en cada audiencia y reviso que realmente se hayan comprendido.", value: 4 }
                    ]
                },
                {
                    title: "P2 · Espacios 1:1 efectivos",
                    // ===== TEXTOS ACTUALIZADOS EN ESTA PREGUNTA =====
                    options: [
                        { text: "No hago instancias de 1:1 con las personas o solo en crisis; no dejo registro.", value: 1 },
                        { text: "Tengo espacios 1:1 con las personas de forma irregular y doy más consejos que guía.", value: 2 },
                        { text: "Tengo una frecuencia fija de reuniones 1:1, hago preguntas de coaching y acuerdo tareas con responsables y fechas.", value: 3 },
                        { text: "Sostengo un calendario estable, sigo acuerdos y pido feedback sobre la utilidad de los espacios 1:1.", value: 4 }
                    ]
                },
                {
                    title: "P3 · Feedback constructivo",
                    options: [
                        { text: "Evito dar feedback duro.", value: 1 },
                        { text: "Doy feedback esporádico y general.", value: 2 },
                        { text: "Doy feedback específico y respetuoso.", value: 3 },
                        { text: "El feedback fluye y se da de forma continua, oportuna y efectiva.", value: 4 }
                    ]
                }
            ]
        },
        {
            dimension: "Dirección y delegación",
            idPrefix: "dd",
            questions: [
                {
                    title: "P1 · Visibilidad y propósito",
                    options: [
                        { text: "Las tareas no tienen propósito; los roles están mezclados.", value: 1 },
                        { text: "Doy visibilidad parcial; el propósito no siempre es claro.", value: 2 },
                        { text: "Delegas responsabilidades con acuerdos claros, límites y autonomía.", value: 3 },
                        { text: "Delegas decisiones relevantes con límites claros, monitoreas el avance y formas a tus sucesores.", value: 4 }
                    ]
                },
                {
                    title: "P2 · Claridad y confianza",
                    options: [
                        { text: "Hago micro-management; me encargo de todo para que salga bien.", value: 1 },
                        { text: "Controlo mucho las tareas que delego; no dejo autonomía.", value: 2 },
                        { text: "Confías en tu equipo para resolver, delegas sin tanto control y dejas espacio para el error y el aprendizaje.", value: 3 },
                        { text: "El equipo funciona sin tu presencia, porque delegas con autonomía, defines planes de desarrollo y empoderas a las personas.", value: 4 }
                    ]
                },
                {
                    title: "P3 · Desarrollo del equipo",
                    options: [
                        { text: "No me encargo de desarrollar a nadie; todos crecen solos.", value: 1 },
                        { text: "El desarrollo es esporádico o solo en los casos que me lo piden.", value: 2 },
                        { text: "Promueves el desarrollo con planes y conversaciones activas para crecer a las personas.", value: 3 },
                        { text: "Escalas el desarrollo de líderes y talentos; tu equipo es una máquina de formación.", value: 4 }
                    ]
                }
            ]
        },
		{
            dimension: "Ejecución y resultados",
            idPrefix: "er",
            questions: [
                {
                    title: "P1 · Métricas y visibilidad",
                    options: [
                        { text: "No uso métricas ni un plan de trabajo visible; los problemas se detectan tarde.", value: 1 },
                        { text: "Hay métricas parciales y un plan visible, pero incompleto.", value: 2 },
                        { text: "Las métricas guían decisiones y el plan de trabajo se mantiene actualizado.", value: 3 },
                        { text: "Anticipo bloqueos con alertas tempranas y la operación es estable y previsible.", value: 4 }
                    ]
                },
                {
                    title: "P2 · Planificación y seguimiento",
                    options: [
                        { text: "La ejecución es reactiva; la carga de trabajo no está balanceada.", value: 1 },
                        { text: "Se avanza con sobresaltos y poca previsión.", value: 2 },
                        { text: "Los problemas se mitigan a tiempo y la operación es estable.", value: 3 },
                        { text: "Los rituales de seguimiento están estandarizados y el sistema sostiene velocidad y calidad.", value: 4 }
                    ]
                },
                {
                    title: "P3 · Visibilidad y alineación",
                    options: [
                        { text: "La visibilidad limitada dificulta la priorización.", value: 1 },
                        { text: "Hay transparencia, pero la información no se usa para alinear.", value: 2 },
                        { text: "La información es visible y se usa para alinear expectativas.", value: 3 },
                        { text: "Comparto los avances de forma visual y tengo un sistema de reporte simple.", value: 4 }
                    ]
                }
            ]
        },
		{
            dimension: "Pensamiento crítico y decisiones",
            idPrefix: "pc",
            questions: [
                {
                    title: "P1 · Criterios y sesgos",
                    options: [
                        { text: "Decido por intuición y no reviso mis supuestos.", value: 1 },
                        { text: "Uso algunos datos pero de forma irregular.", value: 2 },
                        { text: "Revisas tus criterios de forma consistente y detectas sesgos.", value: 3 },
                        { text: "Tus decisiones son trazables y están basadas en datos y evidencia.", value: 4 }
                    ]
                },
                {
                    title: "P2 · Perspectivas y revisión",
                    options: [
                        { text: "Hago pocas preguntas desafiantes y no busco otras perspectivas.", value: 1 },
                        { text: "Pido una revisión externa tarde; los supuestos se cuestionan poco.", value: 2 },
                        { text: "Buscas distintas perspectivas antes de decidir y las usas para fundamentar.", value: 3 },
                        { text: "Fomentas el pensamiento crítico en el equipo y validas decisiones con pares.", value: 4 }
                    ]
                },
                {
                    title: "P3 · Comunicación de decisiones",
                    options: [
                        { text: "Comunico decisiones sin explicar el “por qué” o los criterios.", value: 1 },
                        { text: "La comunicación es confusa; no todos la comprenden.", value: 2 },
                        { text: "Comunico decisiones de forma clara, con el “por qué” y los criterios.", value: 3 },
                        { text: "Formalizas un esquema estándar para las decisiones y enseñas al equipo a usarlo.", value: 4 }
                    ]
                }
            ]
        },
		{
            dimension: "Aprendizaje e innovación",
            idPrefix: "ai",
            questions: [
                {
                    title: "P1 · Experimentación y error",
                    options: [
                        { text: "No hay espacios para probar ideas; el error se vive como amenaza.", value: 1 },
                        { text: "Hay intentos de prueba, pero llegan tarde o no dejan registro.", value: 2 },
                        { text: "Realizas pruebas rápidas, registras aprendizajes y aplicas las mejoras.", value: 3 },
                        { text: "Existe una cultura de experimentación y mejora continua, donde el error se aprovecha.", value: 4 }
                    ]
                },
                {
                    title: "P2 · Retrospectivas y feedback",
                    options: [
                        { text: "No generas revisiones al cierre de etapas o proyectos; los errores se repiten.", value: 1 },
                        { text: "Haces revisiones informales, pero no quedan acciones claras.", value: 2 },
                        { text: "Las revisiones generan acciones con responsables y fechas.", value: 3 },
                        { text: "Las revisiones son parte de la rutina y siempre salen acciones, se da seguimiento y todos participan.", value: 4 }
                    ]
                },
                {
                    title: "P3 · Repositorio de lecciones",
                    options: [
                        { text: "No registro aprendizajes.", value: 1 },
                        { text: "Anoto lecciones sueltas que nadie usa.", value: 2 },
                        { text: "Tengo un repositorio simple que el equipo consulta.", value: 3 },
                        { text: "Mantengo un repositorio que guía decisiones, formación y está al día.", value: 4 }
                    ]
                }
            ]
        },
		{
            dimension: "Propósito y ética",
            idPrefix: "pye",
            questions: [
                {
                    title: "P1 · Visión e impacto",
                    options: [
                        { text: "No tengo una visión ni definición de éxito.", value: 1 },
                        { text: "Tengo una visión genérica y rara vez la conecto con impacto.", value: 2 },
                        { text: "Formulas una visión simple, muestras cómo luce el éxito y ligas tareas con el impacto.", value: 3 },
                        { text: "Sostienes una narrativa clara, con métricas y celebraciones acordes al propósito.", value: 4 }
                    ]
                },
                {
                    title: "P2 · Coherencia y valores",
                    options: [
                        { text: "Las decisiones no están alineadas a valores; se dice una cosa y se hace otra.", value: 1 },
                        { text: "La coherencia entre lo que se dice y se hace es baja.", value: 2 },
                        { text: "Tus decisiones suelen estar alineadas con valores definidos y los criterios éticos son explícitos.", value: 3 },
                        { text: "Los valores y criterios éticos se hacen visibles en la práctica diaria; son parte de la cultura.", value: 4 }
                    ]
                },
                {
                    title: "P3 · Liderazgo ético",
                    options: [
                        { text: "Ignoro dilemas éticos o no los hago visibles.", value: 1 },
                        { text: "Explicito los criterios éticos solo si me los piden.", value: 2 },
                        { text: "Registro los criterios éticos que aparecen en las decisiones para que queden como guía.", value: 3 },
                        { text: "Promueves que otros expliciten sus decisiones a partir de criterios éticos, elevando el estándar colectivo.", value: 4 }
                    ]
                }
            ]
        },
		{
            dimension: "Cambio y mejora",
            idPrefix: "cm",
            questions: [
                {
                    title: "P1 · Gestión del cambio",
                    options: [
                        { text: "Los cambios se llevan de forma improvisada; sin mapa ni roles definidos.", value: 1 },
                        { text: "Existe algún nivel de planificación, pero es parcial o poco claro.", value: 2 },
                        { text: "Hay un mapa de cambio visible, con roles claros y resistencias previstas.", value: 3 },
                        { text: "El proceso de cambio está consolidado y las resistencias se gestionan con naturalidad.", value: 4 }
                    ]
                },
                {
                    title: "P2 · Gestión de resistencias y adopción",
                    options: [
                        { text: "Ignoro las resistencias o las enfrento tarde.", value: 1 },
                        { text: "Se atienden las resistencias tarde y sin medidas concretas.", value: 2 },
                        { text: "Anticipas las resistencias y defines acciones para apoyar la adopción.", value: 3 },
                        { text: "Ajustas el plan por grupos con métricas y datos de adopción.", value: 4 }
                    ]
                },
                {
                    title: "P3 · Rutinas de seguimiento",
                    options: [
                        { text: "No existen rutinas de seguimiento, lo que genera retrocesos frecuentes.", value: 1 },
                        { text: "Las rutinas de seguimiento son intermitentes.", value: 2 },
                        { text: "Mantienes rutinas de seguimiento sostenidas que permiten mantener la adopción de las nuevas prácticas.", value: 3 },
                        { text: "El cambio se convierte en parte de la cultura, porque instalas rituales que aseguran la mejora continua.", value: 4 }
                    ]
                }
            ]
        },
		{
            dimension: "Productividad y energía",
            idPrefix: "pe",
            questions: [
                {
                    title: "P1 · Prioridades y bloques de foco",
                    options: [
                        { text: "Me dejo llevar por urgencias y pierdo el foco.", value: 1 },
                        { text: "Intento organizarme, pero los bloques de foco son irregulares.", value: 2 },
                        { text: "Protejo bloques de foco y trabajo en prioridades claras.", value: 3 },
                        { text: "Organizo mi agenda por prioridades y la reviso semanalmente.", value: 4 }
                    ]
                },
                {
                    title: "P2 · Decir no y delegar bajo valor",
                    options: [
                        { text: "Digo sí a todo y me saturo.", value: 1 },
                        { text: "A veces digo que no y delego poco.", value: 2 },
                        { text: "Digo que no a lo que no aporta y delego tareas de bajo valor.", value: 3 },
                        { text: "Mantengo organizada mi lista de tareas y proyectos según prioridades, y delego de forma estable y efectiva lo que no requiere mi foco principal.", value: 4 }
                    ]
                },
                {
                    title: "P3 · Higiene de energía y recuperación",
                    options: [
                        { text: "Descuido mi energía y no practico autocuidado.", value: 1 },
                        { text: "Cuido mi energía de forma irregular.", value: 2 },
                        { text: "Tengo rutinas básicas de descanso y recuperación.", value: 3 },
                        { text: "Mantengo hábitos estables de energía y promuevo prácticas saludables también en el equipo.", value: 4 }
                    ]
                }
            ]
        }
    ];

    const resultsData = {
        "Inteligencia emocional": {
            "Crítico": {
                "comentario": "Tu capacidad para gestionar emociones parece estar en una fase inicial. Es posible que reacciones de forma impulsiva y te cueste identificar o nombrar lo que sientes en el momento. El clima emocional del equipo puede pasar desapercibido, lo que a veces genera roces o malentendidos que podrían evitarse. La base está, pero faltan hábitos para regular tus respuestas.",
                "recomendacion": "Un primer paso es nombrar tu emoción antes de responder. Haz una pausa, respira y di para ti mismo: 'estoy sintiendo frustración'. Este pequeño acto crea una distancia útil. Para leer mejor el clima, inicia tus reuniones con un check-in rápido donde cada persona comparta en una palabra cómo llega.",
                "preguntas": "¿Qué situaciones o personas suelen activar tus respuestas emocionales más intensas? ¿En qué momentos del día sientes que tienes menos control sobre tus reacciones? ¿Qué señal corporal te indica que estás a punto de reaccionar de forma impulsiva?"
            },
            "En desarrollo": {
                "comentario": "Muestras avances en la gestión de tus emociones, aunque de forma irregular. A veces logras identificar lo que sientes y pausas antes de reaccionar, pero en situaciones de alta presión, las emociones pueden tomar el control. Lees algunas señales del clima del equipo, pero podrías anticiparte más a las tensiones.",
                "recomendacion": "Cuando sientas que una emoción te desborda, ponla en palabras y comparte tu estado con el equipo de forma simple: 'Necesito un momento para procesar esto'. Luego, abre el juego con una pregunta: '¿Qué ven ustedes?'. Esto quita el foco de tu reacción y lo pone en la colaboración.",
                "preguntas": "¿Qué recurso o técnica te ha funcionado en el pasado para calmarte en momentos de estrés? ¿Qué emoción te resulta más difícil de gestionar en el trabajo? ¿Cómo podrías diferenciar entre tu estado emocional y el clima general del equipo?"
            },
            "Sólido": {
                "comentario": "Tienes un buen manejo de tus estados emocionales. Pausas, eliges tus respuestas y lees las señales del equipo para prevenir conflictos. Esta habilidad te permite comunicar con mayor claridad y construir un ambiente de confianza y seguridad, donde los problemas se pueden hablar sin temor a una reacción desmedida.",
                "recomendacion": "Para seguir profundizando, pide a un colega de confianza que te dé feedback sobre cómo impacta tu comunicación no verbal en conversaciones difíciles. Además, lleva un registro de tus 'disparadores emocionales' y las estrategias que mejor te funcionan para desactivarlos. Esto refuerza tu autoconocimiento.",
                "preguntas": "¿Qué creencia o pensamiento suele acompañar a tus emociones más recurrentes? ¿Cómo modelas la regulación emocional para que tu equipo aprenda de ti? ¿Qué haces para recargar tu energía emocional después de un día intenso?"
            },
            "Excelente": {
                "comentario": "Tu autoconciencia y autorregulación son un modelo para el equipo. No solo mantienes la calma en crisis, sino que ayudas a otros a regularse. Esto crea un entorno de alta seguridad psicológica, donde las personas se atreven a ser vulnerables, a asumir riesgos y a colaborar de forma más auténtica y efectiva. Eres un pilar de estabilidad.",
                "recomendacion": "Comparte tus técnicas de gestión emocional de forma explícita. Por ejemplo, puedes decir en voz alta: 'Noto que esta situación me genera ansiedad, así que voy a hacer una pausa para ordenar mis ideas'. Al modelar este hábito, enseñas a tu equipo a hacer lo mismo. Considera mentorizar a otros líderes en esta área.",
                "preguntas": "¿Cómo aprovechas tu inteligencia emocional para influir positivamente en la cultura de la organización? ¿De qué manera puedes enseñar a tu equipo a tener conversaciones emocionalmente difíciles sin tu intervención? ¿Cuál es tu próximo desafío en tu desarrollo emocional como líder?"
            }
        },
        "Comunicación y relaciones": {
            "Crítico": {
                "comentario": "Tu estilo de comunicación tiende a ser unidireccional. A menudo, te centras en transmitir tu propio mensaje sin explorar la perspectiva de los demás. Esto puede generar malentendidos, falta de confianza y un bajo nivel de compromiso en el equipo. Las conversaciones 1:1 y el feedback son esporádicos o inexistentes.",
                "recomendacion": "Practica la escucha activa. Antes de dar tu opinión, repite con tus palabras lo que entendiste de la otra persona: 'Entonces, si te entiendo bien, lo que propones es...'. Al comunicar algo importante, cierra preguntando: '¿Qué dudas o preocupaciones te genera esto?'.",
                "preguntas": "¿En qué tipo de conversaciones tiendes a escuchar menos? ¿Cuál es el mayor obstáculo que encuentras para dar feedback constructivo? ¿Qué podría pasar si no mejoras tu forma de comunicarte en los próximos meses?"
            },
            "En desarrollo": {
                "comentario": "Haces esfuerzos por conectar con tu equipo, pero de manera inconsistente. A veces logras tener conversaciones empáticas, pero otras veces la prisa o la presión te llevan a comunicarte de forma directiva. Tus 1:1 y sesiones de feedback existen, pero carecen de una estructura y una cadencia predecible.",
                "recomendacion": "Establece un ritual de 1:1 quincenal con cada persona de tu equipo. Usa una estructura simple: 1) ¿Cómo estás?, 2) ¿Qué obstáculos tienes?, 3) ¿Cómo puedo ayudarte?. Para el feedback, usa la fórmula: 'Cuando haces X, el impacto es Y, y me siento Z'.",
                "preguntas": "¿Qué es lo que hace que un 1:1 sea realmente valioso para ti? ¿Qué emoción sientes justo antes de dar un feedback difícil? ¿Cómo puedes crear un espacio seguro para que tu equipo te dé feedback a ti?"
            },
            "Sólido": {
                "comentario": "Te comunicas de forma empática y efectiva. Escuchas para entender, no solo para responder. Tus 1:1 son regulares y se perciben como espacios de valor, y tu feedback es oportuno, específico y constructivo. Esto fortalece la confianza, la claridad y la cohesión en tu equipo.",
                "recomendacion": "Eleva el nivel de tus 1:1. En lugar de centrarte solo en tareas, úsalos para hablar de aspiraciones y desarrollo de carrera. Haz preguntas como: '¿Qué proyecto te gustaría liderar en el futuro?' o '¿Qué habilidad nueva te gustaría adquirir este año?'.",
                "preguntas": "¿Cómo adaptas tu estilo de comunicación a cada miembro de tu equipo? ¿Cuál es la conversación más difícil que has tenido como líder y qué aprendiste de ella? ¿Cómo mides la calidad de tus relaciones con tu equipo?"
            },
            "Excelente": {
                "comentario": "Eres un comunicador excepcional. Tus mensajes son intencionales, claros e inspiradores. El feedback es un flujo natural y constante en el equipo, y tus 1:1 son espacios de alto impacto que potencian el crecimiento y la autonomía. Has construido relaciones de alta confianza.",
                "recomendacion": "Ahora tu rol es multiplicar tu habilidad. Enseña a tu equipo a comunicarse con la misma maestría. Crea talleres internos sobre cómo dar y recibir feedback, cómo tener conversaciones difíciles o cómo adaptar la comunicación a diferentes audiencias. Conviértete en un formador de comunicadores.",
                "preguntas": "¿Cómo puedes escalar tu impacto como comunicador más allá de tu equipo directo? ¿Qué estructura o ritual puedes crear para que el feedback entre pares se convierta en un hábito cultural? ¿Cómo utilizas la comunicación para alinear a tu equipo con la visión de la organización?"
            }
        },
        "Dirección y delegación": {
            "Crítico": {
                "comentario": "Tiendes a centralizar las tareas y decisiones en ti. Te cuesta delegar, lo que genera un cuello de botella, limita el desarrollo de tu equipo y te sobrecarga de trabajo. Es posible que sientas que 'es más rápido hacerlo uno mismo', pero a largo plazo, este hábito frena el crecimiento de todos.",
                "recomendacion": "Elige una tarea de bajo riesgo esta semana. Delégala a alguien de tu equipo. Sé muy claro sobre el 'qué' (el resultado esperado), pero dale libertad en el 'cómo'. Define un único punto de control para revisar el avance, y resiste la tentación de intervenir antes.",
                "preguntas": "¿Qué es lo peor que podría pasar si delegas esa tarea y no sale perfecta? ¿Qué tarea repetitiva de tu agenda podrías soltar hoy mismo? ¿Qué creencia limitante se esconde detrás de tu dificultad para delegar?"
            },
            "En desarrollo": {
                "comentario": "Delegas tareas, pero a menudo con un alto nivel de supervisión (micromanagement). El equipo no siempre tiene claridad sobre los objetivos o el propósito de lo que hace, lo que genera interrupciones y retrabajos. Hay un intento de dar autonomía, pero la confianza aún es limitada.",
                "recomendacion": "Cada vez que delegues, explica el 'porqué'. Conecta la tarea con el objetivo del equipo o del cliente. Por ejemplo: 'Te pido que hagas este análisis (el qué) para que podamos tomar una mejor decisión sobre X (el porqué)'. Esto aumenta el compromiso y la calidad del trabajo.",
                "preguntas": "¿Cómo puedes diferenciar entre un seguimiento saludable y el micromanagement? ¿Qué evidencia necesitas para confiar más en tu equipo? ¿Cómo comunicas los niveles de autonomía esperados para cada tarea que delegas?"
            },
            "Sólido": {
                "comentario": "Delegas de forma efectiva, ajustando el nivel de autonomía a la persona y la tarea. Defines objetivos claros, el equipo conoce el plan y hay un sistema visible para seguir los avances. Has logrado construir un equipo con un buen nivel de autonomía, capaz de funcionar sin tu supervisión constante.",
                "recomendacion": "El siguiente paso es delegar una decisión, no solo una tarea. Identifica una decisión recurrente que tomas tú. Comparte con la persona los criterios que usas para decidir, dale el contexto necesario y permítele tomar la decisión final. Acompáñala en el proceso.",
                "preguntas": "¿Quién en tu equipo está listo para asumir más responsabilidades? ¿Cómo puedes hacer para que el error sea visto como una oportunidad de aprendizaje? ¿Qué estás haciendo para desarrollar a tus posibles sucesores?"
            },
            "Excelente": {
                "comentario": "Eres un verdadero multiplicador de talento. Delegas no solo tareas, sino también decisiones importantes. Empoderas a tu equipo, fomentas su autonomía y dedicas gran parte de tu tiempo a desarrollar a las personas. Has trascendido el rol de 'jefe' para convertirte en un 'líder que forma líderes'.",
                "recomendacion": "Formaliza tu rol como desarrollador de talento. Crea un plan de desarrollo individual para cada miembro de tu equipo. Asigna mentores, busca proyectos desafiantes y comparte abiertamente tus reflexiones sobre cómo y por qué delegas. Tu mayor legado será el talento que dejes.",
                "preguntas": "¿Cómo puedes identificar el potencial de liderazgo en personas que aún no se ven a sí mismas como líderes? ¿Qué sistema puedes crear para que el conocimiento y las habilidades se transfieran de forma continua dentro del equipo? ¿Cómo mides tu éxito como desarrollador de personas?"
            }
        },
        "Ejecución y resultados": {
            "Crítico": {
                "comentario": "La ejecución del equipo es principalmente reactiva y desorganizada. Se trabaja 'al día', sin un plan visible o prioridades claras. No se utilizan métricas para guiar el trabajo, y los problemas suelen detectarse cuando ya es tarde, lo que genera estrés y una sensación de caos constante.",
                "recomendacion": "Crea un tablero simple (puede ser en Trello, Notion o una pizarra) con tres columnas: 'Por hacer', 'En proceso' y 'Hecho'. Define junto a tu equipo las 3 únicas prioridades de la semana. Realicen una reunión diaria de 10 minutos para sincronizar avances y bloqueos.",
                "preguntas": "¿Cuál es la tarea más importante que tu equipo debe completar esta semana? ¿Qué es lo que más interrumpe a tu equipo durante el día? ¿Cómo podrías visualizar el trabajo de todos en un solo lugar?"
            },
            "En desarrollo": {
                "comentario": "Existe un plan de trabajo, pero a menudo está desactualizado o es poco visible para todos. Se usan algunas métricas, pero no de forma sistemática para anticipar problemas. La ejecución avanza, pero con sobresaltos, 'incendios' y una falta de previsibilidad que desgasta al equipo.",
                "recomendacion": "Implementa un ritual de revisión semanal de 30 minutos. El objetivo es simple: 1) Revisar las métricas clave, 2) Celebrar los avances, 3) Identificar un posible bloqueo para la próxima semana y 4) Definir las prioridades para los próximos 7 días. La clave es la constancia.",
                "preguntas": "¿Qué métrica única podría decirte si la semana fue exitosa o no? ¿Cuál es el mayor riesgo o bloqueo que enfrenta tu equipo en este momento? ¿Cómo puedes hacer para que el plan de trabajo esté siempre visible y actualizado para todos?"
            },
            "Sólido": {
                "comentario": "Gestionas la ejecución de forma proactiva y ordenada. Tu equipo tiene un plan claro y visible, y utiliza métricas para tomar decisiones y ajustar el rumbo. Logras anticipar problemas y mitigarlos a tiempo, lo que genera un flujo de trabajo estable, predecible y orientado a resultados.",
                "recomendacion": "Optimiza tu sistema. Designa a un 'guardián del proceso' en tu equipo, responsable de mantener el tablero actualizado y de facilitar los rituales de seguimiento. Esto te libera tiempo para pensar más estratégicamente y fomenta la responsabilidad compartida en la gestión de la ejecución.",
                "preguntas": "¿Qué parte de tu proceso de ejecución es todavía demasiado manual o dependiente de ti? ¿Cómo puedes empoderar a tu equipo para que resuelvan más problemas sin escalártelos a ti? ¿Qué nuevo ritual o mejora podría aumentar la eficiencia de tu equipo?"
            },
            "Excelente": {
                "comentario": "Has construido un sistema de ejecución robusto y autónomo. El plan, las métricas y los avances son transparentes para todos. Tu equipo no solo cumple sus objetivos, sino que lo hace de forma sostenible y predecible. Tu rol ha pasado de 'gestionar el trabajo' a 'mejorar el sistema que gestiona el trabajo'.",
                "recomendacion": "Documenta tu sistema. Crea un 'manual de ejecución' simple que explique el porqué de sus rituales, el cómo se usan sus herramientas y el quién es responsable de cada parte. Esto no solo facilita la incorporación de nuevas personas, sino que convierte tu método en un activo de la organización.",
                "preguntas": "¿Cómo puedes hacer para que tu sistema de ejecución no solo sea eficiente, sino también una fuente de aprendizaje continuo? ¿Qué datos o métricas podrías empezar a rastrear para predecir resultados futuros? ¿Cómo puedes compartir las mejores prácticas de tu equipo con otras áreas de la compañía?"
            }
        },
        "Pensamiento crítico y decisiones": {
            "Crítico": {
                "comentario": "Tus decisiones suelen basarse en la intuición, la costumbre o la opinión de la persona que habló más fuerte. Rara vez desafías tus propios supuestos o buscas datos para validarlos. Esto aumenta el riesgo de cometer los mismos errores y de tomar decisiones de baja calidad.",
                "recomendacion": "Antes de tomar tu próxima decisión importante, haz un ejercicio simple en una hoja. Escribe: 1) El problema a resolver, 2) Mi hipótesis inicial, 3) ¿Qué datos necesito para confirmar o refutar mi hipótesis?, 4) ¿A quién más debería consultar? Este hábito de 5 minutos cambiará la calidad de tus decisiones.",
                "preguntas": "¿Cuál fue la última decisión que tomaste que no salió como esperabas? ¿Qué supuestos hiciste? ¿Qué sesgo cognitivo (ej. sesgo de confirmación, optimismo) puede estar influyendo en tu forma de decidir? ¿A quién podrías pedirle que actúe como tu 'abogado del diablo'?"
            },
            "En desarrollo": {
                "comentario": "A veces usas datos para decidir y buscas otras perspectivas, pero no de forma sistemática. Todavía te cuesta cuestionar tus propias creencias o sesgos, especialmente cuando estás bajo presión. La calidad de tus decisiones es inconsistente.",
                "recomendacion": "Prepárate para las reuniones de decisión. Lleva siempre 2 o 3 preguntas desafiantes para poner sobre la mesa. Por ejemplo: '¿Qué pasaría si estuviéramos completamente equivocados en esto?', '¿Qué evidencia podría refutar nuestra hipótesis?', '¿Estamos resolviendo el problema correcto?'.",
                "preguntas": "¿Cómo puedes diferenciar entre una decisión que necesita datos y una que puede tomarse con la intuición? ¿Qué proceso sigues cuando tienes que tomar una decisión difícil y con información incompleta? ¿Cómo comunicas una decisión cuando sabes que no todos estarán de acuerdo?"
            },
            "Sólido": {
                "comentario": "Tus decisiones se apoyan en un equilibrio saludable entre datos y criterio. Cuestionas activamente los supuestos, buscas perspectivas diversas y comunicas el 'porqué' de tus decisiones de forma clara. Esto genera confianza en el equipo y mejora la calidad de los resultados.",
                "recomendacion": "Formaliza tu proceso de decisión para que otros puedan aprender de él. Crea un esquema simple que puedas compartir, por ejemplo: 1) Definir el problema y los criterios de éxito, 2) Recopilar datos y perspectivas, 3) Evaluar opciones y sesgos, 4) Decidir y comunicar. Úsalo en las decisiones de equipo.",
                "preguntas": "¿Cómo fomentas el debate saludable de ideas antes de llegar a un consenso o una decisión? ¿Qué haces para evitar la 'parálisis por análisis'? ¿Cómo revisas la calidad de tus decisiones pasadas para aprender de ellas?"
            },
            "Excelente": {
                "comentario": "Has cultivado una cultura de pensamiento crítico en tu equipo. No solo tomas buenas decisiones, sino que has enseñado a tu equipo a hacerlo. El proceso de toma de decisiones es transparente, basado en datos y diseñado para minimizar los sesgos. Esto convierte a tu equipo en una máquina de resolver problemas complejos.",
                "recomendacion": "Crea herramientas simples para escalar esta habilidad. Diseña una 'plantilla de decisión' de una página con preguntas clave que el equipo pueda usar para decisiones del día a día. Por ejemplo: ¿Qué problema resolvemos? ¿Cuál es nuestra hipótesis? ¿Qué datos la respaldan? ¿Quién debe ser consultado? Esto fomenta la autonomía y la calidad.",
                "preguntas": "¿Cómo puedes utilizar el pensamiento crítico no solo para resolver problemas, sino también para descubrir nuevas oportunidades? ¿Qué sistema puedes implementar para que el equipo cuestione constructivamente el 'statu quo'? ¿Cómo mides el impacto de una cultura de pensamiento crítico en los resultados del negocio?"
            }
        },
        "Aprendizaje e innovación": {
            "Crítico": {
                "comentario": "En tu equipo, el error se castiga o se esconde, lo que inhibe por completo la experimentación y el aprendizaje. No existen espacios formales para revisar lo que funcionó y lo que no, por lo que se repiten los mismos errores una y otra vez. El miedo a fallar frena cualquier intento de innovación.",
                "recomendacion": "Cambia la narrativa sobre el error. Cuando algo falle, sé el primero en decir en voz alta: 'Esto no salió como esperábamos. ¿Qué podemos aprender de esto?'. Implementa una 'retrospectiva' de 15 minutos al final de cada semana para responder a tres preguntas: ¿Qué funcionó? ¿Qué no funcionó? ¿Qué vamos a probar la próxima semana?",
                "preguntas": "¿Cuál es tu reacción instintiva cuando alguien de tu equipo comete un error? ¿Qué es lo más innovador que ha hecho tu equipo en los últimos seis meses? Si no lo ha hecho, ¿por qué? ¿Cómo podrías celebrar un 'fracaso inteligente' públicamente?"
            },
            "En desarrollo": {
                "comentario": "Hay intentos de probar cosas nuevas, pero son esporádicos y desestructurados. Se habla de los errores, pero no se extraen lecciones claras ni se documentan para el futuro. El aprendizaje es individual y se pierde mucho conocimiento valioso por el camino.",
                "recomendacion": "Crea un 'muro de aprendizajes' en un documento o pizarra compartida. Al final de cada proyecto o sprint, pide al equipo que anote en post-its virtuales una lección clave en formato 'Aprendimos que...'. Revisa este muro al inicio de cada nuevo proyecto para no empezar de cero.",
                "preguntas": "¿Cómo puedes diferenciar entre un error por negligencia y un error por experimentación? ¿Qué proceso sigues para asegurarte de que las lecciones aprendidas se apliquen en el futuro? ¿Cómo fomentas la curiosidad en tu equipo?"
            },
            "Sólido": {
                "comentario": "Has creado un entorno seguro donde se puede experimentar de forma controlada. Tu equipo realiza pruebas rápidas y de bajo riesgo, y tiene un proceso simple para analizar los resultados, extraer lecciones y aplicar mejoras. El aprendizaje es una parte visible y valorada del trabajo.",
                "recomendacion": "Asigna un 'champion del aprendizaje' en cada retrospectiva. Su rol será tomar nota de las lecciones y acciones clave, y asegurarse de que se compartan y se les dé seguimiento. Rotar este rol ayuda a que todo el equipo se sienta dueño del proceso de mejora continua.",
                "preguntas": "¿Cómo mides el impacto de los experimentos y las mejoras que implementa tu equipo? ¿Qué haces para que el aprendizaje no sea solo sobre procesos, sino también sobre el cliente y el mercado? ¿Cómo conectas los objetivos de aprendizaje del equipo con los objetivos de negocio?"
            },
            "Excelente": {
                "comentario": "La mejora continua y la innovación son parte del ADN de tu equipo. Experimentar, medir, aprender y mejorar es la forma en que trabajan todos los días. Has creado un sistema robusto donde el aprendizaje se captura, se comparte y se reutiliza para acelerar el crecimiento colectivo. Tu equipo es una fuente de nuevas ideas.",
                "recomendacion": "Formaliza y comparte tu 'motor de aprendizaje'. Anima a tu equipo a organizar 'charlas de aprendizaje' internas donde compartan con otras áreas lo que han aprendido de sus experimentos. Esto no solo refuerza su propio conocimiento, sino que posiciona a tu equipo como un referente de innovación en la organización.",
                "preguntas": "¿Cómo puedes crear un presupuesto (de tiempo o dinero) para la experimentación? ¿Qué sistema puedes diseñar para que las ideas innovadoras de tu equipo sean escuchadas por la alta dirección? ¿Cómo equilibras la necesidad de ejecutar el plan actual con la necesidad de explorar nuevas oportunidades?"
            }
        },
        "Propósito y ética": {
            "Crítico": {
                "comentario": "El trabajo del equipo se siente como una lista de tareas desconectadas de un propósito mayor. No hay una visión clara que inspire o dé sentido al esfuerzo diario. Las decisiones se toman sin un marco ético explícito, lo que puede generar confusión, cinismo y una cultura de 'todo vale'.",
                "recomendacion": "Dedica 30 minutos a escribir una primera versión de la 'visión' de tu equipo. No tiene que ser perfecta. Responde a: '¿Qué problema fundamental resolvemos para nuestros clientes/usuarios?'. Luego, en cada reunión de equipo, empieza conectando las tareas de la semana con esa visión.",
                "preguntas": "¿Por qué es importante el trabajo que hace tu equipo? ¿Qué impacto tiene en el mundo? ¿Cuál es la línea ética que tu equipo nunca debería cruzar, sin importar la presión? ¿Cómo se vería el éxito de tu equipo de aquí a un año?"
            },
            "En desarrollo": {
                "comentario": "Tienes una visión, pero es genérica o no se conecta con el día a día. Hablas de valores, pero las decisiones del equipo no siempre son coherentes con ellos. Esto puede generar una brecha entre lo que se dice y lo que se hace, erosionando la confianza.",
                "recomendacion": "Haz que los valores sean prácticos. Antes de tomar una decisión importante, pregúntate en voz alta frente al equipo: '¿Cómo se alinea esta opción con nuestro valor de 'poner al cliente primero'?'. Este simple acto de reflexión pública modela el comportamiento y hace que los valores cobren vida.",
                "preguntas": "¿Qué decisión reciente no fue coherente con los valores que pregonas? ¿Qué aprendiste de ello? ¿Cómo puedes involucrar al equipo en la definición o revisión de la visión y los valores? ¿Qué historia real puedes contar para ilustrar uno de los valores de tu equipo en acción?"
            },
            "Sólido": {
                "comentario": "Has logrado construir y comunicar una visión clara que da propósito al trabajo del equipo. Tus decisiones y las del equipo están alineadas con un conjunto de valores compartidos y un marco ético sólido. Esto genera un alto nivel de confianza, compromiso y coherencia.",
                "recomendacion": "Pide feedback sobre tu coherencia. En un 1:1, pregunta: '¿Ha habido alguna decisión mía reciente que te haya parecido inconsistente con nuestros valores?'. Esta pregunta demuestra humildad y un compromiso real con la integridad, fortaleciendo aún más la confianza.",
                "preguntas": "¿Cómo utilizas la visión y el propósito para ayudar al equipo a priorizar en momentos de sobrecarga? ¿Cómo manejas un dilema ético donde los valores del equipo chocan con una directiva de la organización? ¿Cómo celebras los comportamientos que refuerzan la cultura y los valores del equipo?"
            },
            "Excelente": {
                "comentario": "El propósito y la ética son el motor de tu equipo. No solo tienes una visión inspiradora, sino que has creado una cultura donde cada persona se siente conectada con un 'porqué' trascendente. Los valores no están en un póster, sino que se viven en las decisiones diarias, generando un ambiente de alta confianza e integridad.",
                "recomendacion": "Convierte a tu equipo en un 'faro' cultural. Designa a una persona cada semana para que identifique y comparta una historia de un compañero que haya ejemplificado uno de los valores del equipo. Celebrar estas historias públicamente es la forma más poderosa de reforzar la cultura que has construido.",
                "preguntas": "¿Cómo puedes asegurarte de que el propósito y los valores de tu equipo evolucionen a medida que cambia el contexto? ¿De qué manera puedes ayudar a cada persona a conectar su propósito personal con el propósito del equipo? ¿Qué legado quieres dejar como líder en términos de cultura y valores?"
            }
        },
        "Cambio y mejora": {
            "Crítico": {
                "comentario": "Los cambios se imponen sin un plan claro ni una comunicación efectiva. Esto genera una alta resistencia, confusión y frustración en el equipo. La gente no entiende el 'porqué' del cambio, lo que a menudo lleva a que los nuevos procesos sean saboteados o abandonados rápidamente.",
                "recomendacion": "Antes de implementar tu próximo cambio, dibuja un 'mapa de cambio' simple. Responde a estas preguntas: 1) ¿Qué estamos cambiando y por qué es necesario? 2) ¿Quiénes se verán afectados? 3) ¿Cuál es el primer paso que daremos? 4) ¿Cómo mediremos el éxito? Comunica este mapa antes de empezar.",
                "preguntas": "¿Cuál fue el último cambio que intentaste implementar y fracasó? ¿Por qué crees que falló? ¿Quiénes son las personas más influyentes en tu equipo (formal o informalmente) y cómo podrías involucrarlas como aliadas del cambio? ¿Qué es lo que más valora tu equipo de la forma actual de trabajar?"
            },
            "En desarrollo": {
                "comentario": "Planificas los cambios, pero la comunicación es a menudo parcial y los roles no siempre están claros. Tiendes a identificar y gestionar las resistencias de forma tardía, cuando ya se han convertido en un obstáculo importante. El proceso de cambio es agotador para todos.",
                "recomendacion": "Anticípate a la resistencia. Antes de anunciar un cambio, haz una lista de las personas que probablemente se opondrán. Piensa: '¿Qué es lo que más le preocupa a esta persona?'. Luego, ten una conversación individual con ellas para escuchar sus preocupaciones antes de la comunicación grupal. Esto reduce la resistencia a la mitad.",
                "preguntas": "¿Cómo puedes comunicar un cambio de una manera que genere entusiasmo en lugar de miedo? ¿Qué canal o formato de comunicación es el más efectivo para tu equipo? ¿Cómo puedes romper un gran cambio en pequeños pasos para hacerlo menos abrumador?"
            },
            "Sólido": {
                "comentario": "Gestionas el cambio de forma estructurada y empática. Creas un plan claro, comunicas el 'porqué', anticipas las resistencias y estableces rutinas de seguimiento para asegurar que el cambio se adopte y se sostenga en el tiempo. El equipo confía en tu capacidad para guiarlos a través de la incertidumbre.",
                "recomendacion": "Crea un 'tablero de gestión del cambio' visible. Usa columnas simples: 'Acciones clave', 'Responsable', 'Fecha' y 'Estado'. Revísalo brevemente en tus reuniones de equipo. Esto hace que el proceso sea transparente, genera responsabilidad y permite celebrar los pequeños avances.",
                "preguntas": "¿Cómo mides el nivel de adopción de un nuevo proceso o herramienta? ¿Qué haces para apoyar a las personas que más les cuesta adaptarse al cambio? ¿Cómo recoges feedback durante el proceso de cambio para ajustar el plan sobre la marcha?"
            },
            "Excelente": {
                "comentario": "Eres un agente de cambio excepcional. No solo gestionas los cambios de forma profesional, sino que has creado una cultura donde el cambio y la mejora continua son la norma. Tu equipo no le teme al cambio, lo ve como una oportunidad para crecer y mejorar. Has desarrollado una organización ágil y adaptable.",
                "recomendacion": "Empodera a tu equipo para que ellos mismos se conviertan en agentes de cambio. Crea un 'manual de gestión del cambio' simple con las mejores prácticas que han aprendido. Anímalos a identificar oportunidades de mejora, a proponer cambios y a liderar su implementación usando este manual. Tu rol es ser el mentor de estos líderes de cambio.",
                "preguntas": "¿Cómo puedes crear un sistema para que las ideas de mejora de cualquier miembro del equipo sean escuchadas y evaluadas? ¿Qué habilidad o recurso necesita tu equipo para ser aún más autónomo en la gestión del cambio? ¿Cómo celebras y recompensas la proactividad y la adaptabilidad?"
            }
        },
        "Productividad y energía": {
            "Crítico": {
                "comentario": "Tu agenda está dominada por las urgencias y las interrupciones. Te cuesta decir 'no' y proteger tu tiempo, lo que te lleva a un estado de estrés y reactividad constante. No tienes un sistema claro para priorizar, por lo que dedicas demasiado tiempo a tareas de bajo impacto y descuidas tu propia energía.",
                "recomendacion": "Define tus '3 prioridades de la semana'. Escríbelas en un lugar visible. Luego, bloquea en tu calendario la primera hora de cada día como 'tiempo de foco' para trabajar exclusivamente en esas prioridades. Defiende ese bloque como si fuera tu reunión más importante.",
                "preguntas": "¿Qué tarea has estado posponiendo durante semanas y sabes que es importante? ¿Cuál es la mayor fuente de interrupciones en tu día? ¿Qué pasaría si dijeras 'no' a una petición de bajo valor?"
            },
            "En desarrollo": {
                "comentario": "Intentas organizar tu tiempo y priorizar, pero de forma inconsistente. A veces logras tener bloques de trabajo enfocado, pero a menudo la marea de urgencias te arrastra. Te cuesta delegar tareas de bajo valor, por lo que tu agenda sigue estando más llena de lo que te gustaría.",
                "recomendacion": "Aplica la 'regla de los 2 minutos': si una tarea llega y puedes hacerla en menos de 2 minutos, hazla inmediatamente. Si lleva más tiempo, agéndala o delégala. Además, crea una lista de 'cosas que puedo delegar' y consulta esa lista cada vez que te sientas abrumado.",
                "preguntas": "¿Cómo decides qué es lo más importante en lo que debes trabajar cada día? ¿Qué actividad te da más energía en tu trabajo y cuál te la quita? ¿Cómo puedes diseñar tu semana para tener más momentos de alta energía?"
            },
            "Sólido": {
                "comentario": "Tienes un sistema de productividad personal robusto. Proteges activamente tu tiempo de foco, priorizas en base al impacto, dices 'no' con asertividad y delegas de forma consistente. Gestionas tu agenda y tu energía de una manera que te permite avanzar en lo importante de forma sostenible.",
                "recomendacion": "Optimiza tu sistema revisando tu agenda al final de cada semana. Pregúntate: '¿Qué reunión podría haber sido un email? ¿Qué tarea repetitiva podría automatizar o delegar por completo? ¿Qué actividad me dio el mayor retorno de inversión de mi tiempo?'. La mejora continua también se aplica a tu productividad.",
                "preguntas": "¿Cuál es tu sistema para capturar ideas y tareas para que no se te olviden? ¿Cómo planificas tus descansos para mantener un alto nivel de energía durante todo el día? ¿Cómo ayudas a tu equipo a proteger su propio tiempo de foco?"
            },
            "Excelente": {
                "comentario": "Eres un maestro de la productividad y la gestión de la energía. Tu sistema no solo te permite alcanzar resultados sobresalientes sin agotarte, sino que también sirve de modelo para tu equipo. Has creado un entorno donde se valora el trabajo enfocado, se respetan las prioridades y se cuida la energía como un activo clave.",
                "recomendacion": "Comparte tu sistema de forma proactiva. Organiza una breve sesión con tu equipo para mostrarles tus prácticas de priorización, planificación semanal y gestión de la energía. Crea plantillas o checklists que puedan adoptar. Tu objetivo ahora es elevar la productividad y el bienestar de todo el equipo.",
                "preguntas": "¿Cómo puedes crear una cultura de equipo que desaliente la 'urgencia constante' y promueva la planificación? ¿Qué rituales de equipo podéis implementar para asegurar que todos estáis trabajando en las prioridades correctas? ¿Cómo mides y gestionas el 'capital energético' de tu equipo, no solo su tiempo?"
            }
        }
    };

    const globalResultsData = {
        "Crítico": "El resultado global indica que tu estilo de liderazgo se encuentra en una fase inicial. Las prácticas de conducción son más reactivas que proactivas, con una coherencia limitada entre las distintas dimensiones. La comunicación puede ser poco efectiva, la gestión emocional inconsistente y la delegación limitada, lo que genera sobrecarga y baja autonomía en el equipo. La falta de métricas y una visión clara dificultan la construcción de confianza y compromiso. En este nivel, el liderazgo genera esfuerzos aislados, pero aún no logra sostener una dinámica que inspire y potencie al equipo.",
        "En desarrollo": "Tu liderazgo está en transición. Algunas prácticas comienzan a consolidarse, mientras que otras siguen siendo irregulares, especialmente bajo presión. Hay momentos de buena comunicación y conexión, pero no se sostienen de forma consistente. La delegación de tareas existe, pero con un control cercano. Se usan algunas métricas, pero sin la sistematicidad necesaria para anticipar problemas. El propósito y los valores empiezan a guiar algunas decisiones, pero no son aún el motor principal. En este rango, tu liderazgo está en clara construcción, con un potencial visible que necesita más consistencia.",
        "Sólido": "Has logrado integrar de forma consistente la mayoría de las dimensiones clave de un liderazgo transformacional. Tu comunicación es clara, gestionas bien las emociones y delegas de forma que genera autonomía. Usas métricas para guiar la ejecución, y tus decisiones se basan en criterios definidos y múltiples perspectivas. El propósito y la ética son pilares en tu forma de liderar, lo que fortalece la confianza y la seguridad psicológica. Tu liderazgo es confiable y moviliza al equipo hacia resultados compartidos, aunque siempre hay espacio para profundizar en áreas como la innovación continua.",
        "Excelente": "Tu liderazgo ha alcanzado un alto grado de madurez transformacional. Todas las dimensiones están desarrolladas e integradas. No solo comunicas e inspiras, sino que has creado una cultura de alta confianza y rendimiento. Delegas para potenciar, y tu gestión es predecible y proactiva. Las decisiones se toman con pensamiento crítico, y el propósito es el motor del equipo. En este nivel, tu rol trasciende la gestión: eres un referente que crea cultura, desarrolla a otros líderes y actúa como un multiplicador de talento y sostenibilidad en la organización."
    };

    const normalizeString = (str) => {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    };

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const renderQuestions = () => {
        const container = document.getElementById('questions-container');
        let html = '';

        questionsData.forEach((dimension, dimIndex) => {
            const dimensionId = `results-${dimension.dimension.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-')}`;
            
            html += `<div class="category">`;
            html += `<h2>${dimIndex + 1}. ${dimension.dimension}</h2>`;

            dimension.questions.forEach((question, qIndex) => {
                const questionName = `${dimension.idPrefix}-q${qIndex + 1}`;
                html += `<div class="question">`;
                html += `<p>${question.title}</p>`;
                html += `<div class="options">`;

                const shuffledOptions = shuffleArray([...question.options]);

                shuffledOptions.forEach(option => {
                    html += `<label><input type="radio" name="${questionName}" value="${option.value}">${option.text}</label>`;
                });

                html += `</div></div>`;
            });

            html += `</div>`;
            html += `<div id="${dimensionId}" class="dimension-results"></div>`;
        });

        container.innerHTML = html;
    };

    const calculatePartialScore = (dimension) => {
        const questions = document.querySelectorAll(`input[name^="${dimension}-"]`);
        let totalScore = 0;
        
        const questionGroups = {};
        questions.forEach(q => {
            if (!questionGroups[q.name]) {
                questionGroups[q.name] = false;
            }
            if(q.checked) {
                questionGroups[q.name] = true;
                totalScore += parseInt(q.value);
            }
        });

        const answeredQuestions = Object.values(questionGroups).filter(Boolean).length;
        const totalQuestionsInDim = Object.keys(questionGroups).length;

        if (answeredQuestions === totalQuestionsInDim && answeredQuestions > 0) {
            const averageScore = totalScore / totalQuestionsInDim;
            let nivel = "";
            if (averageScore >= 1 && averageScore <= 1.99) { nivel = "Crítico"; }
            else if (averageScore >= 2 && averageScore <= 2.99) { nivel = "En desarrollo"; }
            else if (averageScore >= 3 && averageScore <= 3.99) { nivel = "Sólido"; }
            else if (averageScore >= 4) { nivel = "Excelente"; }

            let dimensionName = "";
            switch (dimension) {
                case "ie": dimensionName = "Inteligencia emocional"; break;
                case "cr": dimensionName = "Comunicación y relaciones"; break;
                case "dd": dimensionName = "Dirección y delegación"; break;
                case "er": dimensionName = "Ejecución y resultados"; break;
                case "pc": dimensionName = "Pensamiento crítico y decisiones"; break;
                case "ai": dimensionName = "Aprendizaje e innovación"; break;
                case "pye": dimensionName = "Propósito y ética"; break;
                case "cm": dimensionName = "Cambio y mejora"; break;
                case "pe": dimensionName = "Productividad y energía"; break;
            }
            
            const dimensionId = `results-${dimensionName.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-')}`;
            const dimensionResultDiv = document.getElementById(dimensionId);

            if (dimensionResultDiv) {
                const data = resultsData[dimensionName][nivel];
                const normalizedNivel = normalizeString(nivel).toLowerCase().replace(' ', '-');
                dimensionResultDiv.innerHTML = `
                    <p class="dimension-score"><strong>Resultado:</strong> ${nivel}</p>
                    <p><strong>Comentario:</strong> ${data.comentario}</p>
                    <p><strong>Recomendación:</strong> ${data.recomendacion}</p>
                    <p><strong>Preguntas para reflexionar:</strong> ${data.preguntas}</p>
                `;
                dimensionResultDiv.className = `dimension-results level-${normalizedNivel}`;
            }
        }
    };
    
    const addEventListenersToQuestions = () => {
        const allDimensions = questionsData.map(d => d.idPrefix);
        allDimensions.forEach(dim => {
            const questionsInDim = document.querySelectorAll(`input[name^="${dim}-"]`);
            questionsInDim.forEach(question => {
                question.addEventListener('change', () => calculatePartialScore(dim));
            });
        });
    };

    const generateResultsChart = (scores) => {
        const ctx = document.getElementById('resultsChart').getContext('2d');
        const labels = [];
        const dataPoints = [];
        const backgroundColors = [];
        
        const colors = {
            critico: 'rgba(231, 76, 60, 0.6)',
            enDesarrollo: 'rgba(241, 196, 15, 0.6)',
            solido: 'rgba(46, 204, 113, 0.6)',
            excelente: 'rgba(0, 123, 255, 0.6)'
        };

        for (const dimKey in scores) {
            const score = scores[dimKey].average;
            const dimensionName = scores[dimKey].name;
            labels.push(dimensionName);
            dataPoints.push(score);

            if (score >= 1 && score <= 1.99) { backgroundColors.push(colors.critico); }
            else if (score >= 2 && score <= 2.99) { backgroundColors.push(colors.enDesarrollo); }
            else if (score >= 3 && score <= 3.99) { backgroundColors.push(colors.solido); }
            else if (score >= 4) { backgroundColors.push(colors.excelente); }
        }
        
        const isMobile = window.innerWidth < 768;
        const axis = isMobile ? 'y' : 'x';
        const chartType = 'bar';

        new Chart(ctx, {
            type: chartType,
            data: {
                labels: labels,
                datasets: [{
                    label: 'Promedio de Resultados',
                    data: dataPoints,
                    backgroundColor: backgroundColors,
                    borderColor: backgroundColors,
                    borderWidth: 1
                }]
            },
            options: {
                indexAxis: axis,
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    [axis]: { ticks: { color: '#333' } },
                    [isMobile ? 'x' : 'y']: {
                        beginAtZero: true,
                        max: 4,
                        ticks: { color: '#333', stepSize: 1 }
                    }
                },
                plugins: {
                    legend: { display: false },
                    title: {
                        display: true,
                        text: 'Resumen Gráfico de Resultados por Dimensión',
                        font: { size: 18 },
                        color: '#333'
                    }
                }
            }
        });
    };

    document.getElementById('calculateScore').addEventListener('click', () => {
        const finalResultsContainer = document.getElementById('final-results-container');
        finalResultsContainer.innerHTML = '';
        
        const allAnsweredRadios = document.querySelectorAll('input[type="radio"]:checked');
        if (allAnsweredRadios.length < (questionsData.length * 3)) {
            alert("Por favor, responde todas las preguntas para ver los resultados totales.");
            return;
        }

        let totalGlobalScore = 0;
        allAnsweredRadios.forEach(input => {
            totalGlobalScore += parseInt(input.value);
        });

        let globalNivel = "";
        if (totalGlobalScore >= 27 && totalGlobalScore <= 47) { globalNivel = "Crítico"; }
        else if (totalGlobalScore >= 48 && totalGlobalScore <= 71) { globalNivel = "En desarrollo"; }
        else if (totalGlobalScore >= 72 && totalGlobalScore <= 95) { globalNivel = "Sólido"; }
        else if (totalGlobalScore >= 96 && totalGlobalScore <= 108) { globalNivel = "Excelente"; }
        
        const globalComentario = globalResultsData[globalNivel];
        const normalizedGlobalNivel = normalizeString(globalNivel).toLowerCase().replace(' ', '-');

        let finalHtml = `<h2>Resultados Totales</h2>`;
        finalHtml += `
            <div class="global-result-comment">
                <h3>Tu Perfil de Liderazgo General: <span class="level-${normalizedGlobalNivel}-text">${globalNivel}</span></h3>
                <p>${globalComentario}</p>
            </div>
        `;
        finalHtml += `<div class="chart-container"><canvas id="resultsChart"></canvas></div>`;
        
        let scoresForChart = {};
        
        questionsData.forEach(dim => {
            let totalScore = 0;
            const questionsInDim = document.querySelectorAll(`input[name^="${dim.idPrefix}-"]:checked`);
            questionsInDim.forEach(q => totalScore += parseInt(q.value));
            
            const averageScore = totalScore / dim.questions.length;
            scoresForChart[dim.idPrefix] = { average: averageScore, name: dim.dimension };
        });

        for (const dimPrefix in scoresForChart) {
            const dimName = scoresForChart[dimPrefix].name;
            const avgScore = scoresForChart[dimPrefix].average;
            
            let nivel = "";
            if (avgScore >= 1 && avgScore <= 1.99) { nivel = "Crítico"; }
            else if (avgScore >= 2 && avgScore <= 2.99) { nivel = "En desarrollo"; }
            else if (avgScore >= 3 && avgScore <= 3.99) { nivel = "Sólido"; }
            else if (avgScore >= 4) { nivel = "Excelente"; }

            const data = resultsData[dimName][nivel];
            const normalizedNivel = normalizeString(nivel).toLowerCase().replace(' ', '-');
            
            finalHtml += `
                <div class="dimension-comment level-${normalizedNivel}">
                    <h3>${dimName} - ${nivel}</h3>
                    <p><strong>Comentario:</strong> ${data.comentario}</p>
                    <p><strong>Recomendación:</strong> ${data.recomendacion}</p>
                    <p><strong>Preguntas para reflexionar:</strong> ${data.preguntas}</p>
                </div>
            `;
        }

        finalResultsContainer.innerHTML = finalHtml;
        generateResultsChart(scoresForChart);
        finalResultsContainer.scrollIntoView({ behavior: 'smooth' });
    });

    renderQuestions();
    addEventListenersToQuestions();
});