document.addEventListener('DOMContentLoaded', () => {

    const questionsData = [
        {
            "dimension": "Mentalidad de líder",
            "explanation": "Es el paso de “resolver yo” a “lograr resultados a través de otros”.",
            "idPrefix": "p1",
            "questions": [
                {
                    "title": "Al empezar la semana, respecto a prioridades del equipo:",
                    "options": [
                        { "text": "Ordeno mis tareas personales.", "value": 1 },
                        { "text": "Comparto lo que haré y pido avances cuando surja.", "value": 2 },
                        { "text": "Acordamos prioridades breves con responsables y fechas.", "value": 3 },
                        { "text": "Acordamos prioridades y dejamos un resumen compartido para todos.", "value": 4 }
                    ]
                },
                {
                    "title": "Ante un error del equipo:",
                    "options": [
                        { "text": "Resuelvo yo para que no se frene.", "value": 1 },
                        { "text": "Pido que corrijan y aviso si vuelve a pasar.", "value": 2 },
                        { "text": "Revisamos qué faltó y acordamos cómo resolverlo.", "value": 3 },
                        { "text": "Hacemos lo anterior y documentamos el cambio para próximos casos.", "value": 4 }
                    ]
                },
                {
                    "title": "Cómo defino éxito:",
                    "options": [
                        { "text": "Por mis entregas.", "value": 1 },
                        { "text": "Por lo que vamos cerrando entre todos.", "value": 2 },
                        { "text": "Por lo que logra el equipo vs. lo planificado.", "value": 3 },
                        { "text": "Por impacto del equipo y cómo otros replican la forma de trabajar.", "value": 4 }
                    ]
                }
            ]
        },
        {
            "dimension": "Conversaciones por separado que suman valor",
            "explanation": "Es el paso de charlas reactivas a espacios breves y regulares que clarifican expectativas y dejan acuerdos útiles.",
            "idPrefix": "p2",
            "questions": [
                {
                    "title": "Frecuencia de mis conversaciones:",
                    "options": [
                        { "text": "Solo cuando hay urgencia.", "value": 1 },
                        { "text": "A veces, si el tiempo da.", "value": 2 },
                        { "text": "Tenemos un momento breve fijo.", "value": 3 },
                        { "text": "Momento fijo y registro breve compartido.", "value": 4 }
                    ]
                },
                {
                    "title": "Estilo de conversación:",
                    "options": [
                        { "text": "Doy indicaciones.", "value": 1 },
                        { "text": "Escucho algo y recomiendo.", "value": 2 },
                        { "text": "Pregunto, acordamos pasos y fecha.", "value": 3 },
                        { "text": "Hacemos lo anterior y revisamos qué funcionó la vez pasada.", "value": 4 }
                    ]
                },
                {
                    "title": "Seguimiento:",
                    "options": [
                        { "text": "Depende de que me lo recuerden.", "value": 1 },
                        { "text": "Reviso si me lo piden o cuando lo necesito.", "value": 2 },
                        { "text": "Miro los acuerdos antes del día pactado.", "value": 3 },
                        { "text": "Miro los acuerdos y pregunto si necesitan algo para cumplirlos.", "value": 4 }
                    ]
                }
            ]
        },
        {
            "dimension": "Preparar al equipo para lograr resultados",
            "explanation": "Es el paso de encargar tareas sueltas a crear condiciones claras (para qué, éxito, roles y plan) que permiten avanzar sin fricción.",
            "idPrefix": "p3",
            "questions": [
                {
                    "title": "Al encargar trabajo:",
                    "options": [
                        { "text": "Digo lo que tienen que hacer.", "value": 1 },
                        { "text": "Explico el contexto o el resultado (uno de los dos).", "value": 2 },
                        { "text": "Acordamos propósito, resultado y límites.", "value": 3 },
                        { "text": "Lo anterior y queda escrito en formato sencillo.", "value": 4 }
                    ]
                },
                {
                    "title": "Seguimiento de avances:",
                    "options": [
                        { "text": "Pregunto cuando me acuerdo.", "value": 1 },
                        { "text": "Revisamos si hay problemas.", "value": 2 },
                        { "text": "Revisamos en un espacio breve y regular.", "value": 3 },
                        { "text": "Revisamos y actualizamos un tablero que todos ven.", "value": 4 }
                    ]
                },
                {
                    "title": "Riesgos y bloqueos:",
                    "options": [
                        { "text": "Los vemos cuando suceden.", "value": 1 },
                        { "text": "Los anotamos al cierre.", "value": 2 },
                        { "text": "Listamos riesgos y dueños temprano.", "value": 3 },
                        { "text": "Activamos alternativas antes de que frenen el plan.", "value": 4 }
                    ]
                }
            ]
        },
        {
            "dimension": "Cultura de retroalimentación",
            "explanation": "Es el paso de la cultura del error a la cultura del crecimiento sostenido",
            "idPrefix": "p4",
            "questions": [
                {
                    "title": "Pedir retroalimentación:",
                    "options": [
                        { "text": "Rara vez la pido.", "value": 1 },
                        { "text": "La pido anualmente a través de encuestas.", "value": 2 },
                        { "text": "La pido en momentos definidos de forma personal.", "value": 3 },
                        { "text": "Lo anterior y muestro qué cambié con eso.", "value": 4 }
                    ]
                },
                {
                    "title": "Dar retroalimentación:",
                    "options": [
                        { "text": "Marco los errores en reuniones de equipo", "value": 1 },
                        { "text": "Doy devoluciones privadas pero de manera genérica y tardía", "value": 2 },
                        { "text": "Clara, a tiempo, en privado y evidenciando comportamientos observables.", "value": 3 },
                        { "text": "Además, acordamos el comportamiento esperado a futuro", "value": 4 }
                    ]
                },
                {
                    "title": "Reconocer logros:",
                    "options": [
                        { "text": "Cuando me acuerdo.", "value": 1 },
                        { "text": "De manera genérica a todo el equipo.", "value": 2 },
                        { "text": "Con ejemplos concretos e individuales.", "value": 3 },
                        { "text": "Lo hacemos visible para implementar buenas prácticas", "value": 4 }
                    ]
                }
            ]
        },
        {
            "dimension": "Liderar el cambio",
            "explanation": "Es el paso de anunciar y empujar a guiar adopción con propósito claro, pruebas pequeñas, apoyos y ajustes tempranos.",
            "idPrefix": "p5",
            "questions": [
                {
                    "title": "Plan de cambio:",
                    "options": [
                        { "text": "Avanzamos sin plan.", "value": 1 },
                        { "text": "Hacemos planes hablados pero que vamos cambiando en la marcha.", "value": 2 },
                        { "text": "Plan simple con hitos y roles.", "value": 3 },
                        { "text": "Plan claro, compartido, con calendario acordado y escenarios posibles (riesgos y supuestos)", "value": 4 }
                    ]
                },
                {
                    "title": "Adopción del cambio:",
                    "options": [
                        { "text": "Las dudas se resuelven en el momento por quien las trae y el plan sigue igual.", "value": 1 },
                        { "text": "Reunimos preguntas y respondemos al cierre, los ajustes en la forma de trabajar quedan para más adelante.", "value": 2 },
                        { "text": "Antes de que frenen el avance, visualizamos obstáculos repetidos y acordamos apoyos simples", "value": 3 },
                        { "text": "Variamos apoyo y exigencias por grupo según señales de adopción, quitamos tareas que compiten con el cambio y celebramos avances pequeños mientras ajustamos la guía.", "value": 4 }
                    ]
                },
                {
                    "title": "Seguimiento:",
                    "options": [
                        { "text": "Sin seguimiento y el cambio retrocede o muchas veces no llega a implementarse", "value": 1 },
                        { "text": "Seguimiento intermitente", "value": 2 },
                        { "text": "Rutinas de seguimiento y soporte estable.", "value": 3 },
                        { "text": "Rituales que aseguran mejora continua.", "value": 4 }
                    ]
                }
            ]
        },
        {
            "dimension": "Gestionar tiempo y energía",
            "explanation": "Es el paso de vivir por urgencias a proteger prioridades y energía para sostener rendimiento sin desgaste",
            "idPrefix": "p6",
            "questions": [
                {
                    "title": "Prioridades del día:",
                    "options": [
                        { "text": "Me guío por lo que llega.", "value": 1 },
                        { "text": "Intento ordenar, a veces cambia.", "value": 2 },
                        { "text": "Bloques de tiempo protegidos para lo importante.", "value": 3 },
                        { "text": "Agenda por prioridades y revisión semanal.", "value": 4 }
                    ]
                },
                {
                    "title": "Carga de trabajo:",
                    "options": [
                        { "text": "Suelo decir que sí a todo.", "value": 1 },
                        { "text": "A veces digo que no.", "value": 2 },
                        { "text": "Digo que no a lo de bajo valor y delego tareas acordes.", "value": 3 },
                        { "text": "Delego de forma sostenida y mantengo lista ordenada por prioridad.", "value": 4 }
                    ]
                },
                {
                    "title": "Sobre cuidar mi energía:",
                    "options": [
                        { "text": "Descuido mi energía y no practico autocuidado (descansar, relajarse, comer bien).", "value": 1 },
                        { "text": "Cuido mi energía de forma irregular.", "value": 2 },
                        { "text": "Tengo rutinas de autocuidado", "value": 3 },
                        { "text": "Mantengo hábitos estables de energía y promuevo prácticas saludables también en el equipo.", "value": 4 }
                    ]
                }
            ]
        },
        {
            "dimension": "Inteligencia emocional",
            "explanation": "Es el paso de sostener la tensión a encuadrar, reparar a tiempo y acordar cómo seguir cuidando la relación y el trabajo.",
            "idPrefix": "p7",
            "questions": [
                {
                    "title": "Cuando una conversación sube de tono:",
                    "options": [
                        { "text": "Reacciono impulsivamente sin atender lo que estoy sintiendo", "value": 1 },
                        { "text": "Hago una pausa breve y retomo mi punto principal. A veces identifico lo que estoy sintiendo, aunque me llega tarde y con poca claridad.", "value": 2 },
                        { "text": "Marco que quiero entendernos y ajusto mi intervención (pido turno, bajo el ritmo) para seguir.", "value": 3 },
                        { "text": "Digo en una frase cómo lo estoy viviendo y qué necesito para continuar; acordamos un modo simple de seguir (pausa, orden de palabra).", "value": 4 }
                    ]
                },
                {
                    "title": "Si noto que fui injusto o me excedí en la charla:",
                    "options": [
                        { "text": "Lo dejo pasar y sigo con el tema.", "value": 1 },
                        { "text": "Aclaro que fue por la tensión del momento y continúo.", "value": 2 },
                        { "text": "Reconozco lo específico y pregunto cómo reparar para seguir trabajando bien.", "value": 3 },
                        { "text": "Reconozco sin excusas, ofrezco una acción concreta de reparación y confirmo que alcance antes de seguir.", "value": 4 }
                    ]
                },
                {
                    "title": "Después de una conversación tensa:",
                    "options": [
                        { "text": "Retomo tareas y evito volver al tema.", "value": 1 },
                        { "text": "Espero a que baje la tensión y, si surge, lo converso más adelante.", "value": 2 },
                        { "text": "Dejo por escrito un resumen breve de lo acordado y qué haré distinto.", "value": 3 },
                        { "text": "Envío ese resumen y pido validar o ajustar; acordamos cómo veremos que la situación mejoró.", "value": 4 }
                    ]
                }
            ]
        }
    ];
    
    const resultsData = {
        "Mentalidad de líder": {
            "Inicial": {
                "comentario": "Mostrás compromiso y esfuerzo personal, pero el resultado se define por lo que hacés vos más que por lo que logra el equipo. Se activa el reflejo “si quiero que salga bien, lo hago yo” y la idea de que delegar demora más. Eso mantiene el día a día, pero limita el aprendizaje del equipo y refuerza la urgencia constante. Si no avanzás, seguirán los apagafuegos y la sensación de que todo pasa por vos.",
                "senales": "Tareas que se frenan cuando no estás. Prioridades que cambian por urgencias. Acuerdos de palabra sin registro. Frases tipo “más rápido si lo hago yo”. Elegir tareas conocidas por sobre las importantes.",
                "practicas": "Publicá cada lunes 3 prioridades del equipo con responsable y fecha. Encargá una tarea que hoy hacés vos, definiendo qué y para cuándo. Cerrá el viernes en 10 minutos qué se logró y qué pasa a la semana siguiente."
            },
            "En progreso": {
                "comentario": "Ya aparecen momentos de coordinación y mirás más el avance del equipo. El riesgo es la intermitencia: bajo presión se vuelve a lo conocido, se confunde actividad con avance y se atiende primero lo que grita más fuerte. Si no avanzás, habrá retrabajos y dudas sobre prioridades.",
                "senales": "Dudas que reaparecen. Cambios de último momento. Planes visibles para pocos o que nadie usa. Justificaciones como “no hay tiempo para explicarlo”. Avanzar en lo pedido primero, no en lo más valioso.",
                "practicas": "Dejá por escrito un resumen semanal con 3 prioridades y responsables. Sumá un renglón para \"posibles equivocaciones sobre lo que pienso que va a pasar” y una forma simple de chequearlo. Cerrá la semana con una revisión"
            },
            "Sólido": {
                "comentario": "El equipo entiende el para qué y avanza sin trabarse. El resultado ya se mide por impacto de equipo. Esto reduce urgencias y permite mejorar la forma de trabajar. Mantenerlo y compartirlo multiplica el efecto.",
                "senales": "Prioridades visibles. Entregas que no dependen de tu presencia. Otros replican la forma de trabajo.",
                "practicas": "Documentá en una página cómo priorizan y cierran. Generá un modelo en formato simple para que otros la usen por una semana y te den mejoras."
            }
        },
        "Conversaciones por separado que suman valor": {
            "Inicial": {
                "comentario": "Las conversaciones aparecen en crisis o cuando queda tiempo. Sirven para apagar incendios, pero no previenen problemas ni generan acuerdos claros. Si no avanzás, los temas sensibles se acumulan y vuelven.",
                "senales": "“Avisame si pasa algo” como norma. Tareas sin responsable. La misma charla repetida.",
                "practicas": "Agendá 15 minutos con dos personas clave esta semana. Usá tres preguntas fijas: qué va bien, qué bloquea, qué acordamos con fecha. Dejá el acuerdo en tres líneas."
            },
            "En progreso": {
                "comentario": "Existen espacios y se notan acuerdos más claros. El punto débil es el seguimiento irregular. Si no avanzás, dependerán de recordatorios y se perderán compromisos.",
                "senales": "“Lo hablamos pero no quedó escrito”. Seguimientos tardíos.",
                "practicas": "Sostené un encuentro breve quincenal. Cerrá siempre con qué, quién y para cuándo. Revisá esos acuerdos antes del día pactado."
            },
            "Sólido": {
                "comentario": "Conversaciones breves y útiles que mejoran el trabajo y la relación. Se previenen desvíos y los pedidos de ayuda llegan a tiempo. Compartir lo que funciona ayuda a elevar el estándar del equipo.",
                "senales": "Acuerdos claros antes de la crisis. Temas sensibles que se tratan a tiempo.",
                "practicas": "Pedí una devolución sobre la utilidad del espacio y ajustá. Publicá en el equipo un listado modelo de preguntas que ya les sirve."
            }
        },
        "Preparar al equipo para lograr resultados": {
            "Inicial": {
                "comentario": "Encargás trabajo con lo básico. Se avanza, pero con interpretaciones distintas y retrabajo. Si no avanzás, el plan seguirá en chats y cada uno entenderá algo distinto.",
                "senales": "“No era esto”. Responsables difusos. Fechas que se mueven sin aviso.",
                "practicas": "Para el próximo entregable, escribí en cuatro líneas: para qué, listo es, responsable, fecha. Mostralo al equipo en un lugar compartido."
            },
            "En progreso": {
                "comentario": "Hay plan y seguimiento, a veces desactualizados. Se gana previsibilidad, pero se pierde trazabilidad cuando cambia el contexto. Si no avanzás, volverán las versiones múltiples y los malentendidos.",
                "senales": "Plan parcial o duplicado. Fechas que cambian sin registro.",
                "practicas": "Hacé una revisión semanal de 10 minutos. Marcá próximos pasos y resolvé un estado de bloqueo (trabas en el avance de las tareas) cuando corresponda."
            },
            "Sólido": {
                "comentario": "El plan es claro, se actualiza y ayuda a decidir. Los próximos pasos son visibles y los bloqueos se tratan a tiempo. Mantenerlo simple facilita que otros lo adopten.",
                "senales": "Menos sorpresas. Cambios registrados. Responsables claros por tarea.",
                "practicas": "Probá que alguien del equipo lidere la actualización del tablero por una semana, comparta lo aprendido y proponga mejoras"
            }
        },
        "Cultura de retroalimentación": {
            "Inicial": {
                "comentario": "La retroalimentación es esporádica y general. Ayuda poco a mejorar y el reconocimiento llega tarde. Si no avanzás, se repetirán errores y se desmotivarán buenos hábitos.",
                "senales": "Devoluciones solo cuando algo salió mal. Reconocimientos vagos.",
                "practicas": "Dale a alguien una devolución específica esta semana usando observar (lo que viste), impacto (lo que generó), propuesta (lograr acuerdo de como seguir). Reconocé un comportamiento concreto en público."
            },
            "En progreso": {
                "comentario": "Las devoluciones son más claras y oportunas. Se ven ajustes, aunque el intercambio depende mucho del líder. Si no avanzás, el aprendizaje quedará concentrado y no circulará.",
                "senales": "Pares que esperan bajada. Cambios que no se comparten.",
                "practicas": "Pedí una devolución breve sobre tu trabajo y contá qué vas a cambiar. Proponé una ronda mensual de qué mantener y qué ajustar entre pares."
            },
            "Sólido": {
                "comentario": "La retroalimentación mejora el trabajo y sostiene la motivación. Hay ejemplos concretos y cambios pequeños frecuentes. Compartir método y ejemplos acelera el progreso del equipo.",
                "senales": "Devoluciones específicas. Reconocimientos vinculados a conductas.",
                "practicas": "Publicá un guion simple de retroalimentación en el canal del equipo. Compartí un caso de antes y después que hayan logrado."
            }
        },
        "Liderar el cambio": {
            "Inicial": {
                "comentario": "Los cambios se hacen sobre la marcha. Se avanza, pero con confusión y retornos a lo anterior. Si no avanzás, aumentarán las resistencias y la fatiga.",
                "senales": "Roles difusos. Preguntas repetidas. Mensajes que se contradicen.",
                "practicas": "Escribí en cinco líneas qué cambia, por qué, quién hace qué, primer hito y apoyo disponible. Compartilo con quienes impacta."
            },
            "En progreso": {
                "comentario": "Ya hay plan y apoyos, a veces tardíos. La adopción empieza, pero pierde impulso si no se ajusta a cada grupo. Si no avanzás, convivirán distintas formas de trabajo por más tiempo del necesario.",
                "senales": "Dudas que aparecen tarde. Grupos que avanzan a ritmos muy distintos.",
                "practicas": "Hacé una prueba chica de dos semanas con un grupo. Ajustá el plan según lo que veas y contalo de forma simple."
            },
            "Sólido": {
                "comentario": "El cambio se entiende, se prueba y se sostiene. Hay pasos claros, dudas atendidas y mejoras integradas. Convertir tu ruta en algo explicable ayuda a que otros la repliquen.",
                "senales": "Señales de adopción visibles. Ajustes tempranos y concretos.",
                "practicas": "Documentá en una página tu ruta de cambio con ejemplos. Presentala a un equipo aliado y recogé mejoras."
            }
        },
        "Gestionar tiempo y energía": {
            "Inicial": {
                "comentario": "El día lo marcan urgencias y la energía queda al margen. Cumplís, pero con desgaste y variación en la calidad. Si no avanzás, aumentarán errores por cansancio y la sensación de estar siempre corriendo.",
                "senales": "Cambios de foco constantes. Decir sí a todo. Pausas que se postergan.",
                "practicas": "Hacé una lista diaria de tres prioridades. Trabajá un bloque de 45 minutos sin interrupciones y tomá una pausa de 5 minutos real."
            },
            "En progreso": {
                "comentario": "Hay más orden y algunos bloques de tiempo protegidos. La calidad mejora, aunque aparecen picos y caídas. Si no avanzás, será difícil sostener el rendimiento sin sobrecarga.",
                "senales": "Semanas con mucha carga seguidas de frenadas. Autocuidado intermitente.",
                "practicas": "Reservá 30 minutos para planear la semana. Decí no a un pedido de bajo valor y delegá una tarea concreta."
            },
            "Sólido": {
                "comentario": "Prioridades claras, bloques de concentración reales y energía cuidada. El trabajo fluye sin depender de horas extra. Convertir hábitos personales en acuerdos del equipo consolida el avance.",
                "senales": "Menos urgencias. Mejor calidad sostenida.",
                "practicas": "Convertí tres hábitos en acuerdos del equipo por dos semanas. Por ejemplo, bloques de foco, pausas y no mensajería fuera de horario. Ajustá lo que no funcione."
            }
        },
        "Inteligencia emocional": {
            "Inicial": {
                "comentario": "Mostrás compromiso, pero muchas veces las emociones suelen gestionarte a vos más que vos a ellas. Predomina reaccionar en el momento, leer poco el clima y “seguir de largo” después de una tensión. Eso resuelve lo inmediato, aunque deja residuos en la relación y decisiones hechas desde el apuro. Avanzar implica reconocer lo que sentís, bajar el ritmo antes de responder y hacer pequeñas reparaciones a tiempo.",
                "senales": "Respuestas impulsivas. Pensar en la conversación durante horas. Frases dichas “en caliente” y temas que quedan picando. Reuniones con silencios largos o cruces repetidos que nadie nombra.",
                "practicas": "Practicá una pausa de 60–90 s antes de responder en temas sensibles. Cerrá conversaciones tensas con un “resumen espejo” de lo entendido. Si te excediste, reconocé lo específico y acordá una reparación simple (p. ej., retomar con otro tono o revisar el acuerdo por escrito)."
            },
            "En progreso": {
                "comentario": "Ya aparecen pausas y más escucha. En general regulás mejor y leés señales del entorno, aunque bajo presión volvés a tus automatismos: explicar más, o evitar el tema para no escalar. El siguiente paso es sostener la consistencia y abrir espacio a la perspectiva del otro cuando tu primera lectura podría estar sesgada.",
                "senales": "“Me frené, pero después seguí con lo mío”. Tensión que baja en la reunión y vuelve por chat. Preguntar poco cuando no coincidís. Malentendidos por tono o canal.",
                "practicas": "En desacuerdos, usá la secuencia: reconocer emoción propia → pedir un ejemplo concreto → co‑definir próximo paso. Iniciá reuniones con un check‑in de 30″ por persona cuando haya temas sensibles. Al final, pedí a otro que resuma acuerdos para validar comprensión compartida."
            },
            "Sólido": {
                "comentario": "Mostrás autoconsciencia, regulás en calor y cuidás el vínculo sin perder foco. Anticipás tensiones, las encuadrás y facilitás acuerdos claros. Esto habilita conversaciones difíciles más cortas, decisiones más serenas y relaciones que se fortalecen con el tiempo. Mantenerlo pide modelar reparación rápida y enseñar el “cómo” al equipo.",
                "senales": "Escalada rara vez necesaria. Diferencias tratadas temprano y con respeto. Las personas buscan tu encuadre cuando el tema es delicado.",
                "practicas": "Modelá el guion breve en charlas complejas: “lo que veo/lo que siento/lo que necesito/qué proponés”. Rotá un “guardabosque del clima” en reuniones para señalar tensiones y proponer una pausa o cambio de turno cuando haga falta."
            }
        }
    };
    
    const globalResultsData = {
        "Inicial": "Tu resultado refleja que el liderazgo todavía se apoya más en el esfuerzo personal que en la construcción de un trabajo sostenido con el equipo. Esto no significa falta de compromiso, sino que las prácticas aún no logran instalarse como hábitos compartidos. La tendencia a resolver por cuenta propia o priorizar lo urgente por sobre lo importante asegura que las cosas salgan en el corto plazo, pero deja poco espacio para el aprendizaje colectivo y la innovación. Este nivel es propio de lidergos en transición, donde predomina la intuición y la reacción frente a problemas inmediatos. Avanzar significa empezar a dar visibilidad a lo que se espera, explicitar acuerdos y animarse a delegar aunque al principio parezca más lento. Cada pequeño paso en esa dirección abre la puerta a resultados más sostenidos y a un equipo que aprende a trabajar con autonomía.",
        "En desarrollo": "El resultado muestra que ya hay avances significativos: aparecen rutinas de coordinación, mayor claridad en los planes y momentos de retroalimentación. El equipo empieza a organizarse de forma más ordenada, aunque todavía de manera muy intermitente o dependiente de las personas individuales. El riesgo en este punto es caer en la confusión entre “estar muy ocupado” y “avanzar en lo importante”. Cuando la presión aumenta, es común volver a prácticas anteriores, delegando menos o resolviendo en base a intuiciones. Este nivel refleja un liderazgo en camino de consolidarse, pero que necesita consistencia para no depender de picos de esfuerzo. Profundizar en este estadio significa mantener la disciplina de revisar lo acordado, registrar cambios y asegurarse de que todos comprendan el propósito de las tareas. Es un momento clave para transformar prácticas esporádicas en hábitos estables que sostengan al equipo incluso en contextos de mayor presión.",
        "Sólido": "Este puntaje refleja un liderazgo que ha logrado consolidar prácticas efectivas y sostenidas en el tiempo. El equipo entiende el propósito de lo que hace, los resultados no dependen exclusivamente de la figura del líder y las rutinas de planificación, seguimiento y mejora ya forman parte del día a día. Estar en este nivel significa haber pasado de un liderazgo centrado en “resolver” a uno orientado en “desarrollar” y “multiplicar”. Los logros del equipo muestran autonomía, previsibilidad y capacidad de adaptación frente a cambios o desafíos. El desafío ahora no es instalar lo básico, sino evitar la complacencia: continuar cuestionando supuestos, buscando innovación y compartiendo con otros lo que funciona. Este nivel permite no solo sostener resultados, sino también convertirse en referente y motor de mejora para otros equipos u organizaciones."
    };

    const totalQuestions = questionsData.reduce((acc, dim) => acc + dim.questions.length, 0);

    const normalizeString = (str) => {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    };

    const updateProgress = () => {
        const checkedRadios = document.querySelectorAll('input[type="radio"]:checked').length;
        const progressIndicator = document.getElementById('progress-indicator');
        const progressBar = document.getElementById('progress-bar');
        
        if (progressIndicator) {
            progressIndicator.textContent = `Avance ${checkedRadios} / ${totalQuestions}`;
        }
        if (progressBar) {
            const percentage = (checkedRadios / totalQuestions) * 100;
            progressBar.style.width = percentage + '%';
        }
    };

    const renderQuestions = () => {
        const container = document.getElementById('questions-container');
        let html = '';

        questionsData.forEach((dimension) => {
            const dimensionId = `results-${normalizeString(dimension.dimension).replace(/\s+/g, '-')}`;
            
            html += `<div class="category">`;
            html += `<h2>${dimension.dimension}</h2>`;
            html += `<p class="dimension-explanation">${dimension.explanation}</p>`;

            dimension.questions.forEach((question, qIndex) => {
                const questionName = `${dimension.idPrefix}-q${qIndex + 1}`;
                html += `<div class="question">`;
                html += `<p>${question.title}</p>`;
                html += `<div class="options">`;

                question.options.forEach(option => {
                    html += `<label><input type="radio" name="${questionName}" value="${option.value}">${option.text}</label>`;
                });

                html += `</div></div>`;
            });

            html += `</div>`;
            html += `<div id="${dimensionId}" class="dimension-results" style="display: none;"></div>`;
        });

        container.innerHTML = html;
    };

    const calculatePartialScore = (dimensionPrefix) => {
        const questions = document.querySelectorAll(`input[name^="${dimensionPrefix}-"]`);
        let totalScore = 0;
        let answeredCount = 0;
        
        const questionGroups = {};
        questions.forEach(q => {
            if (!questionGroups[q.name]) {
                questionGroups[q.name] = 0;
            }
            if (q.checked) {
                questionGroups[q.name] = 1;
                totalScore += parseInt(q.value);
            }
        });
        
        answeredCount = Object.values(questionGroups).reduce((a, b) => a + b, 0);

        const dimensionData = questionsData.find(d => d.idPrefix === dimensionPrefix);
        if (!dimensionData || answeredCount < dimensionData.questions.length) {
            return; 
        }

        let nivel = "";
        if (totalScore >= 3 && totalScore <= 6) { nivel = "Inicial"; }
        else if (totalScore >= 7 && totalScore <= 10) { nivel = "En progreso"; }
        else if (totalScore >= 11 && totalScore <= 12) { nivel = "Sólido"; }

        const dimensionName = dimensionData.dimension;
        const dimensionId = `results-${normalizeString(dimensionName).replace(/\s+/g, '-')}`;
        const dimensionResultDiv = document.getElementById(dimensionId);

        if (dimensionResultDiv && resultsData[dimensionName] && resultsData[dimensionName][nivel]) {
            const data = resultsData[dimensionName][nivel];
            const normalizedNivel = normalizeString(nivel).toLowerCase().replace(/\s/g, '-');
            
            dimensionResultDiv.innerHTML = `
                <p class="result-level-title"><strong>Resultado del nivel: <span class="level-text-${normalizedNivel}">${nivel}</span></strong></p>
                <p><strong>Comentario:</strong> ${data.comentario}</p>
                <p><strong>Señales a vigilar:</strong> ${data.senales}</p>
                <p><strong>Prácticas a implementar:</strong> ${data.practicas}</p>
            `;
            dimensionResultDiv.className = `dimension-results level-${normalizedNivel}`;
            dimensionResultDiv.style.display = 'block';
        }
    };
    
    const addEventListenersToQuestions = () => {
        const allRadios = document.querySelectorAll('input[type="radio"]');
        allRadios.forEach(radio => {
            radio.addEventListener('change', () => {
                const dimensionPrefix = radio.name.split('-')[0];
                calculatePartialScore(dimensionPrefix);
                updateProgress();
            });
        });
    };

    const generateResultsChart = (scores) => {
        const ctx = document.getElementById('resultsChart').getContext('2d');
        const labels = Object.values(scores).map(s => s.name);
        const dataPoints = Object.values(scores).map(s => s.score);
        
        const backgroundColors = dataPoints.map(score => {
            if (score >= 3 && score <= 6) return 'rgba(231, 76, 60, 0.6)'; // Inicial
            if (score >= 7 && score <= 10) return 'rgba(241, 196, 15, 0.6)'; // En progreso
            if (score >= 11 && score <= 12) return 'rgba(46, 204, 113, 0.6)'; // Sólido
            return 'rgba(201, 203, 207, 0.6)';
        });

        const isMobile = window.innerWidth < 768;
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Puntaje por Práctica',
                    data: dataPoints,
                    backgroundColor: backgroundColors,
                    borderColor: backgroundColors,
                    borderWidth: 1
                }]
            },
            options: {
                indexAxis: isMobile ? 'y' : 'x',
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    [isMobile ? 'x' : 'y']: {
                        beginAtZero: true,
                        max: 12,
                        ticks: { color: '#333', stepSize: 3 }
                    }
                },
                plugins: {
                    legend: { display: false },
                    title: {
                        display: true,
                        text: 'Resumen Gráfico de Resultados por Práctica',
                        font: { size: 18 },
                        color: '#333'
                    }
                }
            }
        });
    };

    document.getElementById('calculateScore').addEventListener('click', () => {
        const finalResultsContainer = document.getElementById('final-results-container');
        const allAnsweredRadios = document.querySelectorAll('input[type="radio"]:checked');
        
        if (allAnsweredRadios.length < totalQuestions) {
            alert(`Por favor, responde todas las ${totalQuestions} preguntas para ver los resultados totales.`);
            return;
        }

        let totalGlobalScore = 0;
        allAnsweredRadios.forEach(input => {
            totalGlobalScore += parseInt(input.value);
        });

        let globalNivel = "";
        if (totalGlobalScore >= 21 && totalGlobalScore <= 52) { globalNivel = "Inicial"; }
        else if (totalGlobalScore >= 53 && totalGlobalScore <= 73) { globalNivel = "En desarrollo"; }
        else if (totalGlobalScore >= 74 && totalGlobalScore <= 84) { globalNivel = "Sólido"; }
        
        const globalComentario = globalResultsData[globalNivel];
        const normalizedGlobalNivel = normalizeString(globalNivel).toLowerCase().replace(/\s/g, '-');

        let finalHtml = `<h2>Resultados Totales</h2>`;
        finalHtml += `
            <div class="global-result-comment">
                <h3>Tu Perfil de Liderazgo General: <span class="level-${normalizedGlobalNivel}-text">${globalNivel}</span></h3>
                <p><strong>Puntaje Total: ${totalGlobalScore} de 84</strong></p>
                <p>${globalComentario}</p>
            </div>
        `;
        finalHtml += `<div class="chart-container"><canvas id="resultsChart"></canvas></div>`;
        
        let scoresForChart = {};
        questionsData.forEach(dim => {
            let totalScore = 0;
            document.querySelectorAll(`input[name^="${dim.idPrefix}-"]:checked`).forEach(q => {
                totalScore += parseInt(q.value);
            });
            scoresForChart[dim.idPrefix] = { score: totalScore, name: dim.dimension };
        });

        // Hide individual dimension results now shown in the final summary
        document.querySelectorAll('.dimension-results').forEach(el => el.style.display = 'none');
        
        for (const dimPrefix in scoresForChart) {
            const dimensionData = questionsData.find(d => d.idPrefix === dimPrefix);
            const { score, name: dimName } = scoresForChart[dimPrefix];
            
            let nivel = "";
            if (score >= 3 && score <= 6) { nivel = "Inicial"; }
            else if (score >= 7 && score <= 10) { nivel = "En progreso"; }
            else if (score >= 11 && score <= 12) { nivel = "Sólido"; }

            const data = resultsData[dimName][nivel];
            const normalizedNivel = normalizeString(nivel).toLowerCase().replace(/\s/g, '-');
            
            finalHtml += `
                <div class="dimension-comment level-${normalizedNivel}">
                    <h3>${dimName} - ${nivel} (Puntaje: ${score})</h3>
                    <p><strong>Comentario:</strong> ${data.comentario}</p>
                    <p><strong>Señales a vigilar:</strong> ${data.senales}</p>
                    <p><strong>Prácticas a implementar:</strong> ${data.practicas}</p>
                </div>
            `;
        }

        finalResultsContainer.innerHTML = finalHtml;
        generateResultsChart(scoresForChart);
        finalResultsContainer.scrollIntoView({ behavior: 'smooth' });
    });

    renderQuestions();
    addEventListenersToQuestions();
    updateProgress(); // Initialize progress bar at 0
});