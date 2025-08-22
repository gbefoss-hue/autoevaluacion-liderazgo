document.addEventListener('DOMContentLoaded', () => {

    const questionsData = [
    {
        "dimension": "Inteligencia emocional",
        "idPrefix": "ie",
        "questions": [
            {
                "title": "Cuando noto que me tenso en una conversación:",
                "options": [
                    { "text": "Sigo el hilo y suelo revisar qué sentí después.", "value": 1 },
                    { "text": "A veces identifico lo que siento, aunque me llega tarde o con palabras generales.", "value": 2 },
                    { "text": "Antes de responder, ubico la emoción con una pausa breve.", "value": 3 },
                    { "text": "Pongo en palabras cómo estoy y cómo voy a seguir; invito a otros a hacerlo y registro desencadenantes personales.", "value": 4 }
                ]
            },
            {
                "title": "Si aparece un desacuerdo fuerte mientras trabajo:",
                "options": [
                    { "text": "Respondo en el momento y me quedo analizando el asunto antes de retomar.", "value": 1 },
                    { "text": "Hago alguna pausa, pero tardo en volver a lo que estaba haciendo", "value": 2 },
                    { "text": "Pausa corta, respuesta acorde y regreso a lo importante en al poco tiempo.", "value": 3 },
                    { "text": "Mantengo calma y encuadro para que el equipo avance sin problemas", "value": 4 }
                ]
            },
            {
                "title": "En reuniones de equipo, respecto al clima del grupo:",
                "options": [
                    { "text": "Sigo la agenda y priorizo los temas; si noto algo del clima, lo reviso después para no desvirtuar la reunión.", "value": 1 },
                    { "text": "Empiezo a notar el clima cuando aparecen pausas largas o intercambios repetidos.", "value": 2 },
                    { "text": "Si percibo señales, ajusto algo en mi intervención (por ejemplo, el tiempo o el tono).", "value": 3 },
                    { "text": "Anticipo las señales y sugiero cambios (como una pausa o continuar en otro momento)", "value": 4 }
                ]
            }
        ]
    },
    {
        "dimension": "Comunicación y relaciones",
        "idPrefix": "cr",
        "questions": [
            {
                "title": "Al comunicarme con otras personas:",
                "options": [
                    { "text": "Interpreto el mensaje por su contenido y no me dejo llevar por las interpretaciones de tono o gestos.", "value": 1 },
                    { "text": "A veces confirmo lo que entendí y ajusto algo mi forma de comunicar.", "value": 2 },
                    { "text": "Escucho y parafraseo; adapto tono, ritmo y canal según la persona.", "value": 3 },
                    { "text": "Planifico el mensaje según la audiencia y confirmo comprensión real.", "value": 4 }
                ]
            },
            {
                "title": "Cuando converso por separado con alguien del equipo:",
                "options": [
                    { "text": "Tengo conversaciones individuales cuando aparece un tema urgente y sin registro.", "value": 1 },
                    { "text": "Realizo conversaciones individuales de forma irregular y doy más consejos que guía.", "value": 2 },
                    { "text": "Sostengo encuentros individuales con frecuencia fija, pregunto y acordamos tareas con responsables y fechas.", "value": 3 },
                    { "text": "Mantengo agenda estable, doy seguimiento y pido retroalimentación sobre la utilidad de estos espacios.", "value": 4 }
                ]
            },
            {
                "title": "En el día a día, sobre devoluciones y reconocimiento:",
                "options": [
                    { "text": "La retroalimentación aparece poco y el reconocimiento es general.", "value": 1 },
                    { "text": "Doy devoluciones esporádicas y a veces poco específicas.", "value": 2 },
                    { "text": "Brindo retroalimentación clara y a tiempo y reconozco conductas y logros concretos.", "value": 3 },
                    { "text": "Facilito que la retroalimentación sea habitual entre pares y se notan mejoras derivadas.", "value": 4 }
                ]
            }
        ]
    },
    {
        "dimension": "Dirección y delegación",
        "idPrefix": "dd",
        "questions": [
            {
                "title": "Cuando encargo una tarea a otra persona:",
                "options": [
                    { "text": "Asigno tareas con poca información sobre propósito o resultados esperados.", "value": 1 },
                    { "text": "Comparto algunos elementos (motivo o recursos), pero quedan vacíos.", "value": 2 },
                    { "text": "Acordamos por qué, éxito esperado, recursos y límites, por escrito.", "value": 3 },
                    { "text": "Definimos éxito con métricas y revisamos acuerdos en hitos.", "value": 4 }
                ]
            },
            {
                "title": "Al repartir responsabilidades y decisiones:",
                "options": [
                    { "text": "Concentro decisiones, lo que enlentece el trabajo.", "value": 1 },
                    { "text": "Delego tareas acotadas y superviso de cerca.", "value": 2 },
                    { "text": "Delego responsabilidades con autonomía y puntos de revisión acordados.", "value": 3 },
                    { "text": "Delego decisiones relevantes con indicadores claros y desarrollo reemplazos.", "value": 4 }
                ]
            },
            {
                "title": "Sobre el crecimiento del equipo y posibles reemplazos:",
                "options": [
                    { "text": "El crecimiento y los reemplazos quedan sin plan.", "value": 1 },
                    { "text": "Ofrezco apoyo puntual, sin metas ni seguimiento.", "value": 2 },
                    { "text": "Cada persona tiene objetivos de desarrollo y revisiones periódicas.", "value": 3 },
                    { "text": "Identifico sucesores y activo oportunidades concretas.", "value": 4 }
                ]
            }
        ]
    },
    {
        "dimension": "Ejecución y resultados",
        "idPrefix": "er",
        "questions": [
            {
                "title": "Al evaluar cómo va el equipo:",
                "options": [
                    { "text": "Evalúo mi aporte por tareas propias.", "value": 1 },
                    { "text": "Miro resultados del equipo de forma ocasional.", "value": 2 },
                    { "text": "Uso métricas del equipo para decidir y priorizar.", "value": 3 },
                    { "text": "Contamos con indicadores compartidos y ajustamos con los datos.", "value": 4 }
                ]
            },
            {
                "title": "Al organizar el trabajo y las fechas:",
                "options": [
                    { "text": "Trabajo sin un plan o calendario claro.", "value": 1 },
                    { "text": "El plan existe, pero parcial o desactualizado; responsabilidades poco claras.", "value": 2 },
                    { "text": "Plan claro y actualizado con responsables y fechas; revisión periódica.", "value": 3 },
                    { "text": "Plan que se actualiza, muestra alertas a tiempo y permite ajustar antes de que impacte.", "value": 4 }
                ]
            },
            {
                "title": "Frente a posibles trabas o riesgos:",
                "options": [
                    { "text": "Los riesgos se hacen visibles cuando ya impactaron.", "value": 1 },
                    { "text": "Registro los riesgos al cierre.", "value": 2 },
                    { "text": "Listado a tiempo y mitigaciones con responsables.", "value": 3 },
                    { "text": "Anticipo bloqueos y activo contingencias antes del impacto.", "value": 4 }
                ]
            }
        ]
    },
    {
        "dimension": "Pensamiento crítico y decisiones",
        "idPrefix": "pc",
        "questions": [
            {
                "title": "Antes de decidir, sobre mis supuestos:",
                "options": [
                    { "text": "Sostengo supuestos sin cuestionarlos.", "value": 1 },
                    { "text": "Reviso supuestos tras errores y consulto a veces.", "value": 2 },
                    { "text": "Cuestiono supuestos antes de decidir e invito miradas críticas.", "value": 3 },
                    { "text": "Revisión por pares y ajuste de paradigmas cuando los hechos lo exigen.", "value": 4 }
                ]
            },
            {
                "title": "Cuando necesito entender mejor un tema:",
                "options": [
                    { "text": "Formulo preguntas cerradas o doy respuestas por otros.", "value": 1 },
                    { "text": "Uso algunas preguntas abiertas, sin continuidad.", "value": 2 },
                    { "text": "Planteo preguntas que abren opciones mejores.", "value": 3 },
                    { "text": "El equipo pregunta mejor y piensa con criterio propio.", "value": 4 }
                ]
            },
            {
                "title": "Al tomar decisiones importantes:",
                "options": [
                    { "text": "Decido por intuición sin criterios explícitos.", "value": 1 },
                    { "text": "Uso algunos datos con criterios confusos.", "value": 2 },
                    { "text": "Defino criterios simples y uso datos relevantes trazables.", "value": 3 },
                    { "text": "Dejo constancia breve de criterios y reviso la decisión después.", "value": 4 }
                ]
            }
        ]
    },
    {
        "dimension": "Aprendizaje e innovación",
        "idPrefix": "ai",
        "questions": [
            {
                "title": "Cuando surge una idea nueva:",
                "options": [
                    { "text": "Las ideas nuevas rara vez pasan a prueba.", "value": 1 },
                    { "text": "Se prueban algunas tarde o de modo improvisado y casi no se registra.", "value": 2 },
                    { "text": "Probamos cambios chicos rápido, con expectativa escrita y resultado observado.", "value": 3 },
                    { "text": "Exploramos ideas de forma habitual con criterios claros y compartimos resultados.", "value": 4 }
                ]
            },
            {
                "title": "Al cerrar una etapa o proyecto:",
                "options": [
                    { "text": "Cierre sin revisión; errores se repiten.", "value": 1 },
                    { "text": "Conversaciones informales sin pasos definidos.", "value": 2 },
                    { "text": "Revisión breve al cierre con al menos dos mejoras con responsables y fechas.", "value": 3 },
                    { "text": "Revisión como rutina: salen acciones y se hace seguimiento.", "value": 4 }
                ]
            },
            {
                "title": "Para registrar lo que aprendemos:",
                "options": [
                    { "text": "Aprendizajes sin registro.", "value": 1 },
                    { "text": "Notas sueltas de poco uso.", "value": 2 },
                    { "text": "Repositorio simple que el equipo consulta.", "value": 3 },
                    { "text": "Repositorio actualizado que usamos para decidir y para formar.", "value": 4 }
                ]
            }
        ]
    },
    {
        "dimension": "Propósito y ética",
        "idPrefix": "pye",
        "questions": [
            {
                "title": "Sobre hacia dónde vamos y qué es éxito:",
                "options": [
                    { "text": "La visión y el éxito no están definidos.", "value": 1 },
                    { "text": "La visión existe de forma general y a veces conecta con impacto.", "value": 2 },
                    { "text": "Visión simple, éxito definido y tareas vinculadas al impacto.", "value": 3 },
                    { "text": "Relato claro y constante con métricas y celebraciones alineadas.", "value": 4 }
                ]
            },
            {
                "title": "Respecto a cumplir lo que digo:",
                "options": [
                    { "text": "Compromisos y acciones no siempre coinciden.", "value": 1 },
                    { "text": "Cumplo lo esencial y explico poco.", "value": 2 },
                    { "text": "Actúo según valores y aviso a tiempo ante desvíos.", "value": 3 },
                    { "text": "Decisiones visibles y coherentes que sostienen confianza.", "value": 4 }
                ]
            },
            {
                "title": "Al explicar por qué decido:",
                "options": [
                    { "text": "Criterios y consecuencias no se explicitan.", "value": 1 },
                    { "text": "Explico criterios parcialmente y si lo piden.", "value": 2 },
                    { "text": "Declaro criterios e impactos y dejo una síntesis.", "value": 3 },
                    { "text": "Abro la discusión ética y cuido la coherencia en el tiempo.", "value": 4 }
                ]
            }
        ]
    },
    {
        "dimension": "Cambio y mejora",
        "idPrefix": "cm",
        "questions": [
            {
                "title": "Cuando impulsamos un cambio:",
                "options": [
                    { "text": "Cambios sin plan ni roles definidos.", "value": 1 },
                    { "text": "Plan parcial con roles difusos.", "value": 2 },
                    { "text": "Plan visible con hitos y roles claros.", "value": 3 },
                    { "text": "Plan integrado con dependencias y cronograma acordado.", "value": 4 }
                ]
            },
            {
                "title": "Ante dudas o resistencias al cambio:",
                "options": [
                    { "text": "Las resistencias se atienden poco o de forma frontal.", "value": 1 },
                    { "text": "Se abordan tarde y sin datos.", "value": 2 },
                    { "text": "Se anticipan y se definen apoyos para adoptar.", "value": 3 },
                    { "text": "Ajustes por grupos con señales de adopción.", "value": 4 }
                ]
            },
            {
                "title": "Luego de iniciar un cambio:",
                "options": [
                    { "text": "Seguimiento esporádico y el cambio retrocede.", "value": 1 },
                    { "text": "Seguimiento intermitente.", "value": 2 },
                    { "text": "Rutinas de seguimiento y soporte estable.", "value": 3 },
                    { "text": "Rituales que aseguran mejora continua.", "value": 4 }
                ]
            }
        ]
    },
    {
        "dimension": "Productividad y energía",
        "idPrefix": "pe",
        "questions": [
            {
                "title": "Para organizar mi día:",
                "options": [
                    { "text": "El día lo marcan las urgencias.", "value": 1 },
                    { "text": "Intento ordenar, pero los bloques de foco varían.", "value": 2 },
                    { "text": "Protejo bloques y trabajo por prioridades.", "value": 3 },
                    { "text": "Agenda por prioridades revisada semanalmente.", "value": 4 }
                ]
            },
            {
                "title": "Cuando me piden más trabajo:",
                "options": [
                    { "text": "Tiendo a aceptar más de lo que puedo.", "value": 1 },
                    { "text": "A veces digo no y delego poco.", "value": 2 },
                    { "text": "Digo no a lo de bajo valor y delego tareas acordes.", "value": 3 },
                    { "text": "Lista y proyectos ordenados por prioridad; delegación sostenida.", "value": 4 }
                ]
            },
            {
                "title": "Sobre cuidar mi energía:",
                "options": [
                    { "text": "La energía personal queda al margen.", "value": 1 },
                    { "text": "El cuidado es intermitente.", "value": 2 },
                    { "text": "Rutinas básicas de descanso y recuperación.", "value": 3 },
                    { "text": "Hábitos estables y promoción de prácticas saludables en el equipo.", "value": 4 }
                ]
            }
        ]
    }
    ];

    const resultsData = {
        "Inteligencia emocional": {
            "Crítico": {
                "comentario": "No identificar emociones propias ni ajenas puede llevar a reacciones impulsivas, conflictos no resueltos y pérdida de confianza en el equipo.",
                "recomendacion": "Registre durante una semana momentos de tensión y cómo reaccionó, para detectar patrones y puntos de mejora.",
                "preguntas": "¿Qué episodios recuerda en los que la falta de control emocional complicó la situación?"
            },
            "En desarrollo": {
                "comentario": "Reconocer emociones solo de manera ocasional genera mensajes contradictorios y puede afectar la credibilidad del liderazgo.",
                "recomendacion": "Practique una pausa de 2 minutos antes de reuniones para identificar su estado emocional y ajustarlo si es necesario y lleve un registro diario al cierre de la jornada por 1 semana.",
                "preguntas": "¿Qué dos rituales breves podría adoptar para que la conciencia emocional sea más constante?"
            },
            "Sólido": {
                "comentario": "Gestionar emociones de forma consistente refuerza la toma de decisiones y la comunicación, pero puede quedar limitado si no se conecta con el desarrollo de los demás. Aproveche su autocontrol para facilitar conversaciones difíciles.",
                "recomendacion": "Dedique un espacio semanal a preguntar al equipo cómo se sienten frente a los desafíos actuales y escuche activamente sus respuestas y registre 1 acuerdo de cuidado del equipo.",
                "preguntas": "¿Cómo podría usar su conciencia emocional para mejorar la empatía y colaboración en el equipo?"
            },
            "Excelente": {
                "comentario": "Integrar la inteligencia emocional de forma natural transmite calma y claridad al equipo. Se nota en conversaciones exigentes bien encauzadas y en decisiones serenas; seguir expandiendo y enseñando estas prácticas como referencia del equipo.",
                "recomendacion": "Participe en actividades de formación o feedback 360° anual centradas en inteligencia emocional para descubrir nuevas áreas de desarrollo.",
                "preguntas": "¿Cómo se asegura de seguir expandiendo su inteligencia emocional en distintos contextos?"
            }
        },
        "Comunicación y relaciones": {
            "Crítico": {
                "comentario": "No fomentar la comunicación ni cuidar las relaciones genera aislamiento, rumores y pérdida de coordinación dentro del equipo.",
                "recomendacion": "Establezca un espacio semanal breve para compartir información clave y aclarar dudas del equipo.",
                "preguntas": "¿Qué señales de desconexión o malentendidos ha notado recientemente en su entorno?"
            },
            "En desarrollo": {
                "comentario": "Comunicar de manera ocasional o informal puede dar lugar a interpretaciones erróneas y relaciones superficiales.",
                "recomendacion": "Defina un canal formal de comunicación (ej. grupo de trabajo o mailing) y normas básicas de uso; utilícelo de forma constante para mensajes relevantes.",
                "preguntas": "¿Qué rutinas podría instaurar para asegurar claridad y continuidad en los vínculos?"
            },
            "Sólido": {
                "comentario": "Mantener una comunicación clara y relaciones fluidas fortalece la confianza y la colaboración, pero puede quedarse en lo operativo si no se profundiza en la escucha activa.",
                "recomendacion": "Incorpore una práctica de “confirmación de entendimiento” pidiendo a su interlocutor resumir lo conversado en reuniones clave.",
                "preguntas": "¿Cómo valida que sus mensajes son comprendidos y generan alineación?"
            },
            "Excelente": {
                "comentario": "Construir relaciones sólidas y abiertas genera compromiso y cohesión. Sus mensajes llegan claros, los acuerdos quedan escritos y el vínculo se fortalece; mantener este estándar y compartirlo como buena práctica.",
                "recomendacion": "Modele y documente buenas prácticas de comunicación para que otros líderes puedan replicarlas en sus equipos.",
                "preguntas": "¿Cómo puede transferir estas habilidades comunicacionales al resto de la organización?"
            }
        },
        "Dirección y delegación": {
            "Crítico": {
                "comentario": "No dar dirección ni delegar tareas provoca desorden, sobrecarga personal y dependencia excesiva del líder.",
                "recomendacion": "Haga una lista de las tareas que realiza en solitario e identifique al menos una que pueda delegar esta semana, definiendo el resultado esperado y el criterio de “listo es…”.",
                "preguntas": "¿En qué áreas nota que todo termina recayendo únicamente en usted?"
            },
            "En desarrollo": {
                "comentario": "Dar dirección clara pero delegar de forma limitada puede generar microgestión y frenar la autonomía del equipo.",
                "recomendacion": "Elija una tarea recurrente, delegue con instrucciones claras y defina un espacio de seguimiento en vez de control permanente, acordando hitos y criterios de calidad.",
                "preguntas": "¿Qué tareas podría soltar de manera controlada para promover más iniciativa en otros?"
            },
            "Sólido": {
                "comentario": "Direccionar con claridad y delegar consistentemente refuerza la eficiencia, pero puede caer en exceso de control si no se ajusta a cada persona.",
                "recomendacion": "Adapte el nivel de supervisión al nivel de experiencia de cada persona, utilizando más guía con novatos y más confianza con experimentados, usando autonomía progresiva según experiencia y riesgo del entregable.",
                "preguntas": "¿Cómo asegura que el nivel de autonomía entregado es adecuado para cada integrante del equipo?"
            },
            "Excelente": {
                "comentario": "Combinar dirección estratégica con delegación madura desarrolla autonomía. Los resultados se logran con claridad de “qué y para cuándo” y con supervisión justa; documentar el modo de delegar para escalarlo.",
                "recomendacion": "Documente un protocolo de delegación con pasos y criterios, y compártalo como guía en la organización, incluyendo plantillas de briefing, definición de resultados y calendario de hitos.",
                "preguntas": "¿Cómo puede transferir este modelo de dirección y delegación a otros líderes?"
            }
        },
        "Ejecución y resultados": {
            "Crítico": {
                "comentario": "No dar seguimiento ni asegurar resultados genera incumplimientos, pérdida de credibilidad y desgaste en el equipo.",
                "recomendacion": "Elija un proyecto actual y defina un tablero simple con tarea, responsable y fecha (Excel, Trello o similar) para dar seguimiento a entregables y responsables. Haga una revisión semanal de 10 minutos.",
                "preguntas": "¿Qué consecuencias ha observado cuando no se cumplen los compromisos asumidos?"
            },
            "En desarrollo": {
                "comentario": "Cumplir parcialmente o de forma irregular mantiene avances, pero también genera retrasos y reprocesos.",
                "recomendacion": "Establezca una reunión corta semanal enfocada en qué frena el avance. Antes de cada entrega use una lista de verificación de 5–7 puntos para evitar errores repetidos.",
                "preguntas": "¿Qué mecanismos podría implementar para sostener la ejecución y reducir errores?"
            },
            "Sólido": {
                "comentario": "Lograr resultados de manera constante refuerza la confianza del equipo y de la organización, pero puede llevar a conformismo.",
                "recomendacion": "Defina indicadores de desempeño clave y revise trimestralmente con el equipo cómo superarlos, no solo cumplirlos.",
                "preguntas": "¿Cómo puede elevar el estándar para que los resultados sean sobresalientes y sostenibles?"
            },
            "Excelente": {
                "comentario": "Integrar planificación simple con seguimiento constante permite cumplir lo prometido. Se ven entregas a tiempo y menos retrabajos; convertir el método en formato breve para que otros lo repliquen.",
                "recomendacion": "Diseñe una guía breve con buenas prácticas de planificación y control, y compártala como estándar interno.",
                "preguntas": "¿Cómo puede documentar y replicar sus métodos de ejecución en otros equipos?"
            }
        },
        "Pensamiento crítico y decisiones": {
            "Crítico": {
                "comentario": "Tomar decisiones sin análisis crítico suele basarse en la primera impresión o en lo que se quiere oír, lo que aumenta errores y pérdida de credibilidad. También genera errores y retrabajo innecesario.",
                "recomendacion": "Antes de decidir, escriba 2 opciones y 1 contra de cada una. Si nota que falta un dato clave, frene y búsquelo antes de cerrar la decisión.",
                "preguntas": "¿Qué ejemplos recuerda en los que actuar por impulso lo llevó a un resultado negativo? ¿Cuál fue el costo más claro?"
            },
            "En desarrollo": {
                "comentario": "Analizar de forma esporádica ayuda, pero sin constancia se termina priorizando lo más reciente o lo más cómodo y quedan fuera datos relevantes.",
                "recomendacion": "Busque 1 fuente adicional que confirme o desafíe su idea y comparta su conclusión con alguien no involucrado para que la cuestione, antes de decidir.",
                "preguntas": "¿Qué herramientas podría aplicar para no basarse solo en recuerdos o percepciones inmediatas? ¿Qué hábito simple usará para sostener el análisis cada vez?"
            },
            "Sólido": {
                "comentario": "Aplicar pensamiento crítico con regularidad mejora la calidad de las decisiones, aunque el equipo puede reforzar siempre la misma idea y no explorar alternativas.",
                "recomendacion": "Designe a una persona para el rol de “quien objeta” en cada decisión importante: debe preguntar “¿y si estamos equivocados?” y proponer una alternativa. Rote ese rol en cada reunión.",
                "preguntas": "¿Cómo puede fomentar que se cuestionen las ideas dominantes en el grupo?"
            },
            "Excelente": {
                "comentario": "Decidir con análisis profundo y visión equilibrada entre datos y contexto demuestra criterio maduro. Explorar, validar supuestos y explicar el porqué consolidan la calidad; mantener este estándar enseñando el proceso al equipo.",
                "recomendacion": "Elija 2 decisiones del último trimestre que no salieron bien. En 15 minutos con el equipo, anoten qué harían distinto y agreguen 1 paso nuevo a su lista de verificación para próximas decisiones.",
                "preguntas": "¿Cómo puede asegurarse de seguir aprendiendo y no caer en la idea de que su proceso ya alcanza?"
            }
        },
        "Aprendizaje e innovación": {
            "Crítico": {
                "comentario": "No fomentar el aprendizaje ni la generación de ideas nuevas deja al equipo en la repetición de lo conocido y se repiten errores.",
                "recomendacion": "Programe una reunión simple de 15 minutos, una vez al mes. Cada persona comparte 1 aprendizaje y 1 idea. Elija 1 idea para probar la próxima semana y anótela en una lista compartida con responsable y fecha.",
                "preguntas": "¿Qué consecuencias ha visto cuando el equipo repite prácticas sin cuestionarlas? ¿Qué práctica seguimos igual aunque ya no funciona?"
            },
            "En desarrollo": {
                "comentario": "Impulsar aprendizajes o innovaciones de forma ocasional genera entusiasmo, pero al no sostenerse ni registrarse pierde impacto.",
                "recomendacion": "Instale un espacio quincenal de 10 minutos. Rote quién presenta 1 mejora concreta. Registre todo en una hoja compartida e indique quién hace qué y para cuándo. Revise al inicio del siguiente encuentro qué se probó y qué resultó.",
                "preguntas": "¿Qué rutinas podría instalar para que el aprendizaje sea constante y no solo eventual? ¿Quién será el dueño de llevarlas?"
            },
            "Sólido": {
                "comentario": "Promover aprendizajes e innovaciones de forma consistente fortalece la adaptación, pero puede quedarse en mejoras menores y no abrir espacio a ideas distintas.",
                "recomendacion": "Haga un taller trimestral de 45–60 minutos. Use la regla de “1 idea loca por persona”. Seleccionen 1 experimento sencillo para testear en 2 semanas, con dueño, pasos y fecha de revisión.",
                "preguntas": "¿Cómo puede alentar propuestas más arriesgadas y transformadoras sin perder el control?"
            },
            "Excelente": {
                "comentario": "Instalar el aprendizaje continuo y convertir ideas en mejoras reales consolida al equipo como motor de mejora. Registrar lo aprendido, probar con experimentos simples y difundir lo que funciona; seguir alimentando el repositorio para inspirar a otros.",
                "recomendacion": "Cree un repositorio simple (carpeta o documento) con fichas breves: problema, idea, cómo se probó, qué pasó, recomendación. Asigne responsables y una fecha de actualización para que el contenido no caduque.",
                "preguntas": "¿Cómo puede asegurar que los aprendizajes e innovaciones queden disponibles para otros y perduren más allá de su gestión?"
            }
        },
        "Propósito y ética": {
            "Crítico": {
                "comentario": "Actuar sin un propósito claro ni criterios éticos definidos puede generar decisiones contradictorias, pérdida de confianza y percepción de incoherencia. Tomar atajos a corto plazo también daña la reputación.",
                "recomendacion": "Escriba en una frase el propósito central de su rol y úselo como filtro antes de decidir. Agregue 2–3 “no haré” que no va a cruzar y léalos antes de cerrar decisiones.",
                "preguntas": "¿En qué situaciones ha sentido que actuó más por presión externa que por convicción personal? ¿Cuándo dijo “sí” a algo que iba contra lo que considera correcto?"
            },
            "En desarrollo": {
                "comentario": "Tener claridad parcial sobre propósito y ética ayuda, pero la falta de coherencia puede generar dudas en el equipo y afectar el compromiso. La incoherencia se nota en lo cotidiano.",
                "recomendacion": "Identifique un valor clave y comparta con el equipo cómo espera vivirlo en la práctica diaria. Defina 2 conductas visibles que muestren ese valor y pida que se las recuerden si se aparta.",
                "preguntas": "¿Qué valores le resultan más difíciles de sostener en contextos de presión? ¿Por qué?"
            },
            "Sólido": {
                "comentario": "Actuar con propósito y ética de forma consistente refuerza la confianza, pero puede quedar en eslogan si no baja a prácticas diarias.",
                "recomendacion": "Incluya en las reuniones un espacio para reconocer ejemplos de comportamientos que reflejen los valores del equipo. Cierre cada reunión destacando 1 conducta alineada y anotando 1 mejora concreta para la próxima.",
                "preguntas": "¿Cómo asegura que sus valores se traduzcan en prácticas concretas y no solo en declaraciones? ¿Cómo verifica que sus decisiones del día a día respetan esos valores?"
            },
            "Excelente": {
                "comentario": "Actuar con propósito claro y principios visibles en el día a día refuerza la legitimidad del liderazgo. Se percibe coherencia entre lo que dice y hace; seguir haciéndolo explícito con ejemplos que guíen a otros en dilemas.",
                "recomendacion": "¿Qué método dejará para que otros decidan con los mismos principios?",
                "preguntas": "¿Cómo puede garantizar que el propósito y la ética no dependan solo de su liderazgo?"
            }
        },
        "Cambio y mejora": {
            "Crítico": {
                "comentario": "Resistirse al cambio o no gestionar la transición hace que el equipo siga igual o vuelva a lo de antes, con pérdida de tiempo y motivación.",
                "recomendacion": "Elija 1 proceso que hoy no funciona. Haga una prueba corta de 2 semanas con un cambio simple. Defina qué debería mejorar y cómo lo medirá. Si no mejora, vuelva atrás sin culpa y pruebe otra alternativa.",
                "preguntas": "¿Qué consecuencia vio cuando se intentó cambiar algo y se volvió a la forma anterior?"
            },
            "En desarrollo": {
                "comentario": "Hacer cambios sueltos sin seguimiento genera avances que se diluyen y se pierden.",
                "recomendacion": "Use un registro simple (lista compartida) con: cambio, responsable y fecha. Haga una revisión mensual de 10 minutos para ver qué siguió, qué se frenó y qué ayuda hace falta para sostenerlo.",
                "preguntas": "¿Qué impide dar seguimiento a los cambios iniciados y verificar si funcionaron?"
            },
            "Sólido": {
                "comentario": "Impulsar mejoras constantes ayuda, pero puede quedarse en retoques y no abordar cuando ya no alcanza con ajustes.",
                "recomendacion": "Cada 6 meses, revise con el equipo 2–3 procesos clave. Si un problema reaparece, proponga un rediseño completo: pasos, responsables y fecha de prueba, con criterios de éxito claros.",
                "preguntas": "¿Cómo decide que es momento de pasar de una mejora puntual a un rediseño más grande?"
            },
            "Excelente": {
                "comentario": "Conducir cambios como práctica habitual y lograr adopción sin fricción evidencia madurez de transformación. Definir por qué cambiar, probar en pequeño y consolidar lo que sirve; mantener el modelo y enseñarlo como ruta de cambio.",
                "recomendacion": "Defina un método simple y visible en una página: 1) diagnóstico, 2) prueba, 3) evaluación, 4) despliegue. Enséñelo al equipo y dé ejemplos reales. Asigne roles y ponga fechas para practicarlo.",
                "preguntas": "¿Cómo hará para que el equipo pueda gestionar cambios sin depender de usted?"
            }
        },
        "Productividad y energía": {
            "Crítico": {
                "comentario": "No organizar la energía ni gestionar el tiempo provoca desgaste, acumulación de pendientes, pérdida de foco y errores por trabajar cansado.",
                "recomendacion": "Haga una lista diaria de 3 prioridades. Trabaje en bloques de 45’ con pausas de 5’ y apague notificaciones durante ese bloque. Al cierre del día marque qué quedó sin hacer y por qué, para reprogramarlo.",
                "preguntas": "¿Qué señales físicas o emocionales le muestran que usted o su equipo están al borde del agotamiento? ¿Cuáles son las tres más frecuentes?"
            },
            "En desarrollo": {
                "comentario": "Mantener productividad sin constancia genera picos de esfuerzo y caídas que afectan calidad y ánimo.",
                "recomendacion": "Bloquee en agenda dos franjas fijas para tareas críticas. Programe una pausa diaria con recordatorio. Defina “hora sin reuniones” para el equipo y respétela.",
                "preguntas": "¿Qué rutinas podría implementar para sostener el ritmo sin depender solo de la urgencia? ¿Qué dos hábitos sostendrá cada semana?"
            },
            "Sólido": {
                "comentario": "Organizar bien energía y tiempo permite resultados consistentes, pero puede llevar a sobrecarga del equipo si todo se vuelve “urgente”.",
                "recomendacion": "Use un semáforo semanal de carga por persona (verde ≤80%, amarillo 80–100%, rojo >100%). Redistribuya cuando vea rojo. Limite el trabajo en curso a 2–3 tareas por persona.",
                "preguntas": "¿Cómo detecta exceso de carga antes de que sea tarde?"
            },
            "Excelente": {
                "comentario": "Sostener un ritmo saludable con foco y pausas que cuidan al equipo mantiene el rendimiento sin desgaste. Priorizar lo importante, limitar interrupciones y equilibrar cargas; convertir estos hábitos en acuerdos escritos para preservarlos.",
                "recomendacion": "Convierta hábitos en acuerdos escritos: 3–5 reglas simples (horarios, bloques de foco sin interrupciones, pausas, no chats fuera de horario). Revise cada 2 meses y ajuste. Reconozca su cumplimiento.",
                "preguntas": "¿Qué prácticas quiere dejar como estándar del equipo?"
            }
        }
    };

    const globalResultsData = {
        "Crítico": "El perfil global muestra brechas que hoy afectan coordinación y confianza. Se traducen en retrabajos, decisiones apuradas y mensajes que llegan tarde. Señales: tareas trabadas más de un día, reuniones sin acuerdos y entregas que vuelven para corregir. Prioridad: estabilizar la base con un seguimiento semanal simple y conversaciones breves, por separado, con cada integrante para aclarar expectativas. En dos semanas debería bajar el “último momento” y quedar claro quién hace qué y para cuándo.",
        "En desarrollo": "Perfil en desarrollo con algunos avances puntuales. Se logran entregas cuando la tarea está bien delimitada, pero el liderazgo sigue básico y dependiente de instrucciones cercanas. Los avances son frágiles: hay cambios de última hora, correcciones repetidas, metas sin fecha y mensajes que no llegan a todos. Siguiente paso: fijar un control semanal de 10 minutos, usar una lista de verificación de 5 puntos antes de entregar, dejar acuerdos por escrito con responsable y fecha, y registrar en una hoja compartida qué se probó y qué funcionó. Meta a 30 días: menos reprocesos y cumplimiento de ≥80% de fechas comprometidas.",
        "Sólido": "Perfil sólido con resultados consistentes. Entregas a tiempo, menos correcciones, reuniones que cierran con acuerdos y vínculos de trabajo sanos. Hay orden, prioridades claras y seguimiento regular. Se delega con criterio y el equipo responde. El aprendizaje se usa para mejorar procesos y ya se notan impactos. Riesgo: acomodarse y que lo operativo tape lo estratégico; repetir fórmulas y quedarse en mejoras pequeñas. Próximo paso: subir el estándar. Definir un KPI faro por proyecto, nombrar en cada reunión a quien cuestione supuestos, documentar el “cómo trabajamos” y compartirlo. Meta del trimestre: lograr que otro equipo replique un resultado con la misma calidad.",
        "Excelente": "El perfil evidencia liderazgo de alto desempeño: resultados sostenidos, entregas a tiempo, menos retrabajos, decisiones claras, comunicación abierta y un clima de confianza que impulsa la colaboración. Se observa un ritmo de trabajo ordenado, prioridades bien definidas, delegación que desarrolla autonomía y mejoras que elevan el estándar del equipo y la experiencia de usuarios/clientes. Además, el aprendizaje se pone en práctica y se traduce en prácticas efectivas que ya generan impacto. Próximo paso natural: multiplicar estos logros compartiendo las prácticas en guías simples y acompañando a otros equipos para que alcancen el mismo nivel."
    };
    
    // El resto del código de lógica no necesita cambios
    
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
            if (averageScore >= 1 && averageScore < 2) { nivel = "Crítico"; }
            else if (averageScore >= 2 && averageScore < 3) { nivel = "En desarrollo"; }
            else if (averageScore >= 3 && averageScore < 4) { nivel = "Sólido"; }
            else if (averageScore >= 4) { nivel = "Excelente"; }

            const dimensionData = questionsData.find(d => d.idPrefix === dimension);
            const dimensionName = dimensionData ? dimensionData.dimension : "";
            
            const dimensionId = `results-${dimensionName.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-')}`;
            const dimensionResultDiv = document.getElementById(dimensionId);

            if (dimensionResultDiv && resultsData[dimensionName] && resultsData[dimensionName][nivel]) {
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

            if (score >= 1 && score < 2) { backgroundColors.push(colors.critico); }
            else if (score >= 2 && score < 3) { backgroundColors.push(colors.enDesarrollo); }
            else if (score >= 3 && score < 4) { backgroundColors.push(colors.solido); }
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
        
        const totalQuestions = questionsData.reduce((acc, dim) => acc + dim.questions.length, 0);
        const allAnsweredRadios = document.querySelectorAll('input[type="radio"]:checked');
        if (allAnsweredRadios.length < totalQuestions) {
            alert("Por favor, responde todas las preguntas para ver los resultados totales.");
            return;
        }

        let totalGlobalScore = 0;
        allAnsweredRadios.forEach(input => {
            totalGlobalScore += parseInt(input.value);
        });

        let globalNivel = "";
        // Ajustando los rangos a las 9 dimensiones x 3 preguntas = 27 preguntas totales
        // Rango de puntos: 27*1=27 a 27*4=108
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
            if (avgScore >= 1 && avgScore < 2) { nivel = "Crítico"; }
            else if (avgScore >= 2 && avgScore < 3) { nivel = "En desarrollo"; }
            else if (avgScore >= 3 && avgScore < 4) { nivel = "Sólido"; }
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