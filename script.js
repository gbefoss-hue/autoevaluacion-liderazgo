document.addEventListener('DOMContentLoaded', () => {

    const resultsData = {
        "Inteligencia emocional": {
            "Crítico": {
                "comentario": "Hoy no solés nombrar lo que sentís ni hacer pausas antes de responder, y el clima del equipo suele pasarte desapercibido. Eso incrementa roces innecesarios y mensajes confusos. La intención está, pero faltan hábitos simples que ordenen tu respuesta emocional.",
                "recomendacion": "Empezá por un microhábito: antes de responder, nombrá en una frase tu emoción y hacé una pausa breve. Abrí reuniones con un check-in de estado de 30–60 segundos por persona para registrar el clima y ajustar el tono a tiempo."
            },
            "En desarrollo": {
                "comentario": "En varios momentos identificás lo que sentís y moderás tu reacción, pero suele ocurrir tarde y las tensiones ya se instalaron. El avance es real, aunque irregular y difícil de sostener bajo presión.",
                "recomendacion": "Cuando sientas que la emoción te domina, ponela en palabras y hacé una pausa de unos segundos. Después, en vez de seguir con tu idea, abrí el espacio con una pregunta: ‘¿qué opinás vos?’, ‘¿cómo te sentís con esto?’. Ese pequeño hábito corta la fricción y transforma la charla en un intercambio más equilibrado."
            },
            "Sólido": {
                "comentario": "Mostrás buen dominio de tu estado emocional, pausás y elegís respuestas proporcionales, y leés señales del clima para prevenir malentendidos. Esto baja fricción y mejora la calidad de tus mensajes.",
                "recomendacion": "Pedí a un par que valide el tono de tus comunicaciones sensibles antes de realizarlas. Registrá tus disparadores y la intervención que mejor te funciona para reforzar el aprendizaje."
            },
            "Excelente": {
                "comentario": "Tu autoconciencia y autorregulación emocional son un modelo para el equipo. Lográs mantener la calma en crisis y ayudás a otros a regularse. Esto genera confianza y un clima seguro.",
                "recomendacion": "Modelá tus hábitos de autoetiquetado en voz alta para ayudar a tu equipo a hacer lo mismo. Registrá situaciones clave que te activan para seguir profundizando en tus patrones."
            }
        },
        "Comunicacion y relaciones": {
            "Crítico": {
                "comentario": "Tu comunicación se centra en lo que vos querés expresar, sin considerar realmente la perspectiva de la otra persona. Esto genera malentendidos y baja confianza en el equipo.",
                "recomendacion": "Practicá la escucha activa: antes de responder, repetí con tus palabras lo que entendiste. Al comunicar, ajustá tu tono y ritmo. Si es un mensaje complejo, preguntá ‘¿qué dudas tenés de lo que te acabo de decir?’."
            },
            "En desarrollo": {
                "comentario": "A veces lográs conectar con el otro, pero de manera irregular. Todavía hay inconsistencias en tu forma de dar feedback y tus 1:1 suelen ser esporádicos o sin una estructura clara.",
                "recomendacion": "Establecé una cadencia fija para tus 1:1 (por ejemplo, cada 15 días) y seguí una estructura simple: estado, obstáculos, próximos pasos. Usá la fórmula de feedback ‘Me siento [emoción] cuando [situación específica] porque [impacto en mi]’."
            },
            "Sólido": {
                "comentario": "Escuchás para entender, no para responder. Tu comunicación es empática, mantenés 1:1 regulares y das feedback de forma específica y a tiempo. Esto consolida la confianza y la claridad en tu equipo.",
                "recomendacion": "Usá tus 1:1 como un espacio para hacer preguntas abiertas que fomenten el crecimiento y la autonomía. Registrá los temas y acuerdos para no perder el hilo. Pedí feedback a tu equipo sobre la calidad de tus 1:1."
            },
            "Excelente": {
                "comentario": "Diseñás tus comunicaciones de forma intencional y el feedback es un flujo continuo y natural. Tus 1:1 son espacios de alto valor que elevan el compromiso, y el equipo crece en autonomía.",
                "recomendacion": "Compartí tu metodología de comunicación con tu equipo. Enseñales a dar feedback de alto valor, a diseñar sus mensajes y a tener conversaciones difíciles."
            }
        },
        "Direccion y delegacion": {
            "Crítico": {
                "comentario": "Tendés a concentrar tareas y te cuesta delegar. Esto genera una carga excesiva para vos, baja la autonomía del equipo y limita su desarrollo, ya que te conviertes en un 'cuello de botella'.",
                "recomendacion": "Identificá una tarea de bajo riesgo que puedas delegar en alguien del equipo esta semana. Sé explícito en el resultado esperado, definí el nivel de autonomía y establecé un punto de control para revisar el avance."
            },
            "En desarrollo": {
                "comentario": "A veces delegás, pero con una alta supervisión. Los objetivos no siempre son claros y el plan de trabajo no es visible para todos, lo que genera confusión e interrupciones constantes.",
                "recomendacion": "Mejorá la visibilidad: usá un tablero (Trello, Notion) para que todos sepan en qué está el equipo. Cada vez que delegues, aclarale al otro 'qué' y 'por qué' para que no quede solo el 'cómo'."
            },
            "Sólido": {
                "comentario": "Definís objetivos claros, delegás con el nivel de autonomía correcto y ayudás a tu equipo a crecer. Hay un plan visible y un registro de acuerdos que da orden al trabajo. ",
                "recomendacion": "Identificá una oportunidad para delegar una decisión, no solo una tarea. Conversá con la persona para que entienda el impacto y los criterios para tomar esa decisión, y establecé un punto de control."
            },
            "Excelente": {
                "comentario": "Sos un líder que multiplica el talento. Delegás decisiones, no solo tareas, y fomentás la autonomía en el equipo. Tu rol principal es el de desarrollador de personas.",
                "recomendacion": "Identificá a tus sucesores en el equipo. Formalizá un plan de desarrollo para cada uno, asignando mentores o proyectos clave. Compartí tus reflexiones sobre cómo delegás y por qué en reuniones de equipo."
            }
        },
        "Ejecucion y resultados": {
            "Crítico": {
                "comentario": "La ejecución es reactiva y se gestiona al día. No usás métricas para guiar el trabajo, no hay un plan visible y los problemas se detectan cuando ya generaron impacto.",
                "recomendacion": "Creá un tablero simple con las 3 prioridades semanales del equipo, asignando responsables y fechas. Definí una métrica sencilla para medir el avance y revísenla en un check-in diario de 10 minutos."
            },
            "En desarrollo": {
                "comentario": "Hay un plan de trabajo, pero no está completo ni actualizado, lo que limita la visibilidad. Tenés métricas parciales, pero no hay un sistema para anticipar problemas de forma proactiva.",
                "recomendacion": "Instalá un ritual de revisión semanal: actualizá el tablero, revisá las métricas y definí las prioridades para los próximos 7 días. Anticipá un bloqueo de antemano y planificá una acción para mitigarlo."
            },
            "Sólido": {
                "comentario": "Usás métricas para guiar la ejecución y tu equipo tiene visibilidad del avance. Anticipás problemas a tiempo y ajustás el plan para mitigar el impacto. Tenés el control del proceso.",
                "recomendacion": "Mejorá el sistema de visibilidad: formalizá los rituales de seguimiento con agendas claras y definí quién es el responsable de mantenerlo actualizado y claro para todo el equipo."
            },
            "Excelente": {
                "comentario": "Tenés un sistema de gestión de la ejecución robusto, donde el plan y las métricas son transparentes y predecibles. Esto genera un ambiente de confianza y resultados sobresalientes.",
                "recomendacion": "Formalizá un manual de 'gestión de la ejecución' para tu equipo, donde se explique el 'cómo' y el 'por qué' de sus rituales de planificación, control y seguimiento."
            }
        },
        "Pensamiento critico y decisiones": {
            "Crítico": {
                "comentario": "Tomás decisiones basadas en la intuición y sin datos. No buscás otras perspectivas ni desafiás tus propios supuestos, lo que genera el riesgo de repetir errores pasados.",
                "recomendacion": "Antes de tomar una decisión importante, escribí en una hoja el problema, tu suposición inicial y los datos que necesitás para validarla. Pedí una segunda opinión antes de avanzar."
            },
            "En desarrollo": {
                "comentario": "A veces usás datos y buscás otras opiniones, pero no de forma consistente. Te cuesta cuestionar tus propios sesgos, lo que limita la calidad de tus decisiones.",
                "recomendacion": "Antes de una reunión de toma de decisiones, prepará dos o tres preguntas desafiantes sobre los supuestos detrás de la propuesta. Por ejemplo: ‘¿Qué pasaría si estuviéramos equivocados con esta idea?’."
            },
            "Sólido": {
                "comentario": "Tus decisiones se apoyan en datos y criterios claros. Cuestionás tus supuestos y buscás distintas perspectivas para tener una visión más completa antes de avanzar.",
                "recomendacion": "Diseñá un esquema de decisión que puedas compartir con el equipo para que todos entiendan el proceso. Por ejemplo, antes de decidir: ‘Criterios > Datos > Opiniones > Decisión’."
            },
            "Excelente": {
                "comentario": "Fomentás activamente el pensamiento crítico en tu equipo. Formalizaste un proceso de decisiones basado en datos y múltiples perspectivas, lo que genera confianza y mejores resultados.",
                "recomendacion": "Creá una plantilla simple de 'Decisión Rápida' para que el equipo la use en su día a día. Incluí preguntas como '¿Cuál es la hipótesis? ¿Qué datos necesitamos? ¿A quién consultamos?'."
            }
        },
        "Aprendizaje e innovacion": {
            "Crítico": {
                "comentario": "No hay un espacio para revisar lo que pasó y se penalizan los errores, lo que frena la experimentación y el aprendizaje. El equipo tiene miedo a probar cosas nuevas.",
                "recomendacion": "Modelá el comportamiento: cuando algo falle, decí en voz alta ‘¿qué aprendimos de esto?’. Implementá una retrospectiva de 15 minutos al final de cada semana para registrar una lección."
            },
            "En desarrollo": {
                "comentario": "Hay intentos de probar ideas nuevas, pero son irregulares. Se revisan los errores, pero no se extraen lecciones claras ni se documentan para que el equipo las use en el futuro.",
                "recomendacion": "Implementá un 'Repositorio de Aprendizajes' en un documento compartido. Pedile al equipo que anote, en una frase, una lección clave al final de cada proyecto o etapa. Por ejemplo: ‘Aprendimos que la comunicación es clave antes de un cambio’."
            },
            "Sólido": {
                "comentario": "Tenés una cultura de experimentación controlada. Realizás pruebas rápidas y de bajo riesgo, y tenés un proceso simple para extraer lecciones y aplicar mejoras continuas.",
                "recomendacion": "Asigná a una persona en cada reunión de retrospectiva para que tome nota de las lecciones clave. Revisen este documento al inicio de cada nuevo proyecto para no repetir los mismos errores."
            },
            "Excelente": {
                "comentario": "La mejora continua es parte de la cultura de tu equipo. Se experimenta de forma regular y se documentan las lecciones para guiar decisiones futuras y acelerar el aprendizaje colectivo.",
                "recomendacion": "Promové que el equipo enseñe lo que aprendió en un 'Café del Aprendizaje' o en una reunión informal. Esto refuerza la cultura de la curiosidad."
            }
        },
        "Propósito y ética": {
            "Crítico": {
                "comentario": "No tenés una visión clara, lo que genera que las tareas de tu equipo se sientan como acciones aisladas. Las decisiones no están alineadas con valores, y la ética es un tema que no se aborda.",
                "recomendacion": "Dedicale 30 minutos a escribir una visión simple y motivadora para el equipo. En las reuniones, conectá cada tarea con el propósito superior: '¿Por qué hacemos esto?'."
            },
            "En desarrollo": {
                "comentario": "Tenés una visión genérica, pero no se ve su impacto en el día a día. Hablás de valores, pero tus decisiones no siempre son coherentes con ellos, lo que puede generar dudas en el equipo.",
                "recomendacion": "Antes de tomar una decisión importante, preguntate: '¿Esta decisión está alineada con nuestros valores?'. Compartí esta reflexión con el equipo en voz alta para que entiendan tu proceso de pensamiento."
            },
            "Sólido": {
                "comentario": "Tu visión es clara y ligás las tareas con el impacto. Tus decisiones están alineadas con los valores, lo que modela una conducta ética y genera confianza.",
                "recomendacion": "Pedí feedback a tu equipo sobre tu coherencia: '¿Hay alguna decisión mía que no les parezca alineada con nuestros valores?'. Usá un ejemplo reciente de cómo tomaste una decisión difícil con base en la ética."
            },
            "Excelente": {
                "comentario": "Vives el propósito y la ética en tu día a día, y tu equipo lo nota. Sostenés una narrativa clara sobre el 'por qué' del trabajo, lo que genera compromiso y un ambiente de alta confianza.",
                "recomendacion": "Asigná una persona del equipo para que, al final de la semana, comparta una historia breve de alguien que haya actuado según los valores, celebrando públicamente esa conducta."
            }
        },
        "Cambio y mejora": {
            "Crítico": {
                "comentario": "Los cambios se implementan sin un plan claro ni una comunicación efectiva, lo que genera resistencia, confusión y retrocesos. El equipo no entiende 'por qué' está cambiando.",
                "recomendacion": "Antes de un cambio, definí un mapa simple: '¿Qué va a cambiar?', '¿Quiénes se verán afectados?', '¿Cuál es el rol de cada uno?'. Comunicá el 'por qué' del cambio para reducir la resistencia."
            },
            "En desarrollo": {
                "comentario": "Tenés un plan parcial y los roles son difusos. Identificás las resistencias de forma tardía, lo que frena la adopción del cambio y desgasta al equipo en el proceso.",
                "recomendacion": "Anticipá las resistencias antes de que ocurran: '¿Quién podría oponerse a este cambio y por qué?'. Diseñá una estrategia para hablar con esas personas y validar sus preocupaciones de antemano."
            },
            "Sólido": {
                "comentario": "Tu plan de cambio es claro, con roles bien definidos y resistencias previstas. Aplicás rutinas de seguimiento que ayudan a que el equipo se adapte y sostenga el nuevo proceso.",
                "recomendacion": "Mantené un tablero simple de 'Gestión del Cambio' con las acciones, responsables y fechas. En reuniones de equipo, revisá el avance y celebrá los pequeños logros de adopción."
            },
            "Excelente": {
                "comentario": "Gestionás el cambio de forma profesional y transparente. Anticipás bloqueos, ajustás con datos y lográs que el cambio se vuelva parte de la cultura, con una alta tasa de adopción.",
                "recomendacion": "Creá un manual de 'gestión del cambio' para que tu equipo se convierta en agentes de cambio. Formalizá un canal de feedback continuo para ir midiendo la adopción en tiempo real."
            }
        },
        "Productividad y energia": {
            "Crítico": {
                "comentario": "Tu agenda está dominada por urgencias y te cuesta decir ‘no’. Esto genera estrés, te resta tiempo para lo importante y no te permite tener espacios de foco para el trabajo de valor.",
                "recomendacion": "Identificá tus 3 prioridades semanales. Bloqueá al menos una hora por día en tu calendario para trabajar sin interrupciones en esas prioridades. Practicá decir 'no' a una tarea de bajo valor."
            },
            "En desarrollo": {
                "comentario": "Tenés una intención de organizarte, pero los bloques de foco son irregulares y aún te cuesta delegar. Esto genera una energía inconstante y un progreso irregular en tus proyectos.",
                "recomendacion": "Creá una lista de 'cosas que puedo delegar'. Cada vez que te llegue una tarea de bajo valor, asignásela a alguien de esa lista. Usá la 'Regla del NO': 'No es una prioridad para mí en este momento, ¿quién más podría hacerlo?'."
            },
            "Sólido": {
                "comentario": "Protegés tus bloques de foco, decís 'no' a lo que no aporta valor y delegás de forma consistente. Esto te permite tener una agenda alineada con tus prioridades y una energía estable.",
                "recomendacion": "Revisá tu agenda semanalmente. Identificá las tareas repetitivas y explorá si se pueden automatizar o delegar por completo. Priorizá siempre lo que te da mayor retorno de energía."
            },
            "Excelente": {
                "comentario": "Tu sistema de prioridades es robusto, delegas de forma efectiva y cuidás tu energía de manera integral. Has formalizado un 'portafolio de proyectos' que te permite gestionar múltiples tareas con un enfoque claro.",
                "recomendacion": "Compartí tus prácticas de productividad con tu equipo. Promové que ellos también cuiden su energía y tengan bloques de foco. Diseñá rituales de equipo para revisar prioridades."
            }
        }
    };

    const globalResultsData = {
        "Crítico": "El resultado global indica que el estilo de liderazgo todavía se encuentra en una fase incipiente y fragmentada. Esto significa que las prácticas de conducción del equipo aparecen de manera reactiva, sin una coherencia clara entre las distintas dimensiones evaluadas. En este nivel, la comunicación suele ser confusa o poco efectiva, la gestión emocional carece de recursos consistentes y la delegación es limitada, lo que genera sobrecarga en la figura de liderazgo y una baja autonomía en el equipo. La ausencia de métricas, tableros de seguimiento o criterios claros de decisión aumenta la probabilidad de improvisación y de respuestas poco alineadas con los objetivos colectivos. Asimismo, la visión, el sentido ético y el propósito aparecen débiles o poco visibles, dificultando la construcción de confianza y el compromiso a largo plazo. En este rango, el liderazgo puede generar esfuerzos aislados, pero aún no logra sostener una dinámica que inspire ni que potencie a las personas.",
        "En desarrollo": "El puntaje refleja un liderazgo en transición, donde algunas prácticas comienzan a consolidarse mientras que otras permanecen poco sistemáticas o irregulares. Esto significa que hay momentos de claridad comunicacional y de conexión emocional con el equipo, pero no siempre se sostienen en el tiempo. La delegación puede darse en tareas puntuales, aunque todavía predomina el control cercano y la dificultad de confiar plenamente en la autonomía del equipo. Se observa cierta incorporación de métricas o rutinas de seguimiento, pero sin consistencia, lo que limita la posibilidad de anticipar problemas y tomar decisiones basadas en evidencias. El propósito y los valores empiezan a estar presentes, pero no logran aún orientar de forma clara las prioridades ni ser compartidos como una narrativa común. En este rango, el liderazgo se reconoce en construcción: hay avances que muestran el potencial de un estilo transformacional, aunque todavía conviven con prácticas más tradicionales y centradas en la figura del líder.",
        "Sólido": "Un resultado en este rango muestra un liderazgo que ha logrado integrar de forma consistente la mayoría de las dimensiones clave. Esto se traduce en una comunicación clara y adaptada, en la capacidad de regular las emociones propias y leer las del equipo, y en prácticas de delegación que generan autonomía y desarrollo en las personas. El liderazgo cuenta con rutinas de seguimiento basadas en métricas y tableros vivos, que permiten anticipar problemas y ajustar la ejecución de manera oportuna. Las decisiones se toman con criterios definidos, considerando distintas perspectivas y evitando caer en patrones automáticos o creencias limitantes. El propósito, la ética y los valores guían la toma de decisiones incluso en contextos de presión, fortaleciendo la confianza y la coherencia en el equipo. Este nivel refleja que el liderazgo es confiable, genera seguridad psicológica y moviliza a las personas hacia resultados compartidos. Aun así, el rango sólido también implica que pueden persistir algunos puntos de mejora para alcanzar una madurez plena en todas las dimensiones, por ejemplo, profundizar la cultura de aprendizaje y de innovación continua.",
        "Excelente": "El puntaje máximo refleja un liderazgo con un alto grado de madurez transformacional, donde todas las dimensiones se encuentran desarrolladas de manera integral y coherente. Esto significa que el liderazgo no solo comunica con claridad, regula y transmite estabilidad emocional, sino que además logra inspirar, motivar y construir confianza de forma sostenida. La delegación es efectiva, con sucesores preparados y con espacios de desarrollo diseñados para que las personas desplieguen su máximo potencial. La gestión por métricas y tableros está plenamente interiorizada, lo que permite prever obstáculos, anticipar bloqueos y mantener resultados de manera previsible. Las decisiones se caracterizan por la trazabilidad, el pensamiento crítico y la consideración activa de distintas perspectivas, limitando la influencia de sesgos o paradigmas restrictivos. El propósito y la ética no solo están presentes, sino que forman parte de la identidad del equipo y la organización, generando un sentido compartido que trasciende los objetivos inmediatos. En este nivel, el liderazgo se convierte en referente: crea cultura, potencia a otros líderes y actúa como un multiplicador de confianza, innovación y sostenibilidad en el tiempo."
    };

    const normalizeString = (str) => {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    };

    const calculatePartialScore = (dimension) => {
        const questions = document.querySelectorAll(`input[name^="${dimension}-"]`);
        let totalScore = 0;
        let answeredQuestions = 0;

        questions.forEach(question => {
            if (question.checked) {
                totalScore += parseInt(question.value);
                answeredQuestions++;
            }
        });

        if (answeredQuestions > 0) {
            const averageScore = totalScore / answeredQuestions;
            let nivel = "";
            if (averageScore >= 1 && averageScore <= 1.99) {
                nivel = "Crítico";
            } else if (averageScore >= 2 && averageScore <= 2.99) {
                nivel = "En desarrollo";
            } else if (averageScore >= 3 && averageScore <= 3.99) {
                nivel = "Sólido";
            } else if (averageScore >= 4) {
                nivel = "Excelente";
            }

            let dimensionName = "";
            switch (dimension) {
                case "ie": dimensionName = "Inteligencia emocional"; break;
                case "cr": dimensionName = "Comunicacion y relaciones"; break;
                case "dd": dimensionName = "Direccion y delegacion"; break;
                case "er": dimensionName = "Ejecucion y resultados"; break;
                case "pc": dimensionName = "Pensamiento critico y decisiones"; break;
                case "ai": dimensionName = "Aprendizaje e innovacion"; break;
                case "pye": dimensionName = "Propósito y ética"; break;
                case "cm": dimensionName = "Cambio y mejora"; break;
                case "pe": dimensionName = "Productividad y energia"; break;
            }

            const dimensionIdMap = {
                "Inteligencia emocional": "Inteligencia-emocional",
                "Comunicacion y relaciones": "Comunicacion-y-relaciones",
                "Direccion y delegacion": "Direccion-y-delegacion",
                "Ejecucion y resultados": "Ejecucion-y-resultados",
                "Pensamiento critico y decisiones": "Pensamiento-critico-y-decisiones",
                "Aprendizaje e innovacion": "Aprendizaje-e-innovacion",
                "Propósito y ética": "Propósito-y-etica",
                "Cambio y mejora": "Cambio-y-mejora",
                "Productividad y energia": "Productividad-y-energia"
            };

            const htmlDimensionId = `results-${dimensionIdMap[dimensionName]}`;
            const dimensionResultDiv = document.getElementById(htmlDimensionId);

            if (dimensionResultDiv) {
                const data = resultsData[dimensionName][nivel];
                const normalizedNivel = normalizeString(nivel).toLowerCase().replace(' ', '-');
                dimensionResultDiv.innerHTML = `
                    <p class="dimension-score"><strong>Resultado:</strong> ${nivel}</p>
                    <p class="dimension-comment-text"><strong>Comentario:</strong> ${data.comentario}</p>
                    <p class="dimension-recommendation-text"><strong>Recomendación:</strong> ${data.recomendacion}</p>
                `;
                dimensionResultDiv.className = `dimension-results level-${normalizedNivel}`;
            }
        }
    };

    const allDimensions = ["ie", "cr", "dd", "er", "pc", "ai", "pye", "cm", "pe"];

    allDimensions.forEach(dim => {
        const questions = document.querySelectorAll(`input[name^="${dim}-"]`);
        questions.forEach(question => {
            question.addEventListener('change', () => {
                calculatePartialScore(dim);
            });
        });
    });
    
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

            if (score >= 1 && score <= 1.99) {
                backgroundColors.push(colors.critico);
            } else if (score >= 2 && score <= 2.99) {
                backgroundColors.push(colors.enDesarrollo);
            } else if (score >= 3 && score <= 3.99) {
                backgroundColors.push(colors.solido);
            } else if (score >= 4) {
                backgroundColors.push(colors.excelente);
            }
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
                    [axis]: { 
                        ticks: { color: '#333' }
                    },
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
        let allAnswered = true;

        allDimensions.forEach(dim => {
            const questions = document.querySelectorAll(`input[name^="${dim}-"]`);
            const numQuestionsPerDim = questions.length / 4;
            if (questions.length > 0 && document.querySelectorAll(`input[name^="${dim}-"]:checked`).length !== numQuestionsPerDim) {
                allAnswered = false;
            }
        });

        if (allAnswered) {
            let totalGlobalScore = 0;
            document.querySelectorAll('input[type="radio"]:checked').forEach(input => {
                totalGlobalScore += parseInt(input.value);
            });

            let globalNivel = "";
            let globalComentario = "";
            if (totalGlobalScore >= 27 && totalGlobalScore <= 47) {
                globalNivel = "Crítico";
            } else if (totalGlobalScore >= 48 && totalGlobalScore <= 71) {
                globalNivel = "En desarrollo";
            } else if (totalGlobalScore >= 72 && totalGlobalScore <= 95) {
                globalNivel = "Sólido";
            } else if (totalGlobalScore >= 96 && totalGlobalScore <= 108) {
                globalNivel = "Excelente";
            }
            globalComentario = globalResultsData[globalNivel];

            const normalizedGlobalNivel = normalizeString(globalNivel).toLowerCase().replace(' ', '-');

            let finalHtml = `<h2>Resultados Totales</h2>`;
            finalHtml += `
                <div class="global-result-comment">
                    <h3>Tu Perfil de Liderazgo General: <span class="level-${normalizedGlobalNivel}-text">${globalNivel}</span></h3>
                    <p>${globalComentario}</p>
                </div>
            `;
            finalHtml += `<div class="chart-container"><canvas id="resultsChart"></canvas></div>`;
            
            let finalScores = {};
            let scoresForChart = {};

            allDimensions.forEach(dim => {
                const questions = document.querySelectorAll(`input[name^="${dim}-"]`);
                let totalScore = 0;
                questions.forEach(question => {
                    if (question.checked) {
                        totalScore += parseInt(question.value);
                    }
                });
                
                const numQuestionsPerDim = questions.length / 4;
                const averageScore = totalScore / numQuestionsPerDim;
                
                let nivel = "";
                if (averageScore >= 1 && averageScore <= 1.99) { nivel = "Crítico"; } 
                else if (averageScore >= 2 && averageScore <= 2.99) { nivel = "En desarrollo"; } 
                else if (averageScore >= 3 && averageScore <= 3.99) { nivel = "Sólido"; } 
                else if (averageScore >= 4) { nivel = "Excelente"; }
                
                let dimensionName = "";
                 switch (dim) {
                    case "ie": dimensionName = "Inteligencia emocional"; break;
                    case "cr": dimensionName = "Comunicacion y relaciones"; break;
                    case "dd": dimensionName = "Direccion y delegacion"; break;
                    case "er": dimensionName = "Ejecucion y resultados"; break;
                    case "pc": dimensionName = "Pensamiento critico y decisiones"; break;
                    case "ai": dimensionName = "Aprendizaje e innovacion"; break;
                    case "pye": dimensionName = "Propósito y ética"; break;
                    case "cm": dimensionName = "Cambio y mejora"; break;
                    case "pe": dimensionName = "Productividad y energia"; break;
                }

                finalScores[dim] = { nivel, data: resultsData[dimensionName][nivel], name: dimensionName };
                scoresForChart[dim] = { average: averageScore, name: dimensionName };
            });

            for (const dimKey in finalScores) {
                const { nivel, data, name } = finalScores[dimKey];
                const normalizedNivel = normalizeString(nivel).toLowerCase().replace(' ', '-');
                finalHtml += `
                    <div class="dimension-comment level-${normalizedNivel}">
                        <h3>${name} - ${nivel}</h3>
                        <p><strong>Comentario:</strong> ${data.comentario}</p>
                        <p><strong>Recomendación:</strong> ${data.recomendacion}</p>
                    </div>
                `;
            }

            finalResultsContainer.innerHTML = finalHtml;
            generateResultsChart(scoresForChart);

        } else {
            alert("Por favor, responde todas las preguntas para ver los resultados totales.");
        }
    });
});