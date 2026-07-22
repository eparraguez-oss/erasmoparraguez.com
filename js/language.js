'use strict';

/*LANGUAGE DATA*/
const translations = {
    en: {
        "explore-solutions": "Explore Solutions",
        "schedule-meeting": "Schedule a Meeting",
        "hero-eyebrow": "Decision Intelligence",
        "hero-title": "Helping Organizations Make Better Decisions.",
        "hero-subtitle":"Artificial Intelligence • Decision Intelligence • Quantitative Analytics",
        "hero-text":"Organizations increasingly face complex analytical challenges. Better decisions require more than technology. They require the right analytical approach.",

        "nav-solutions": "Solutions",
        "nav-experience": "Experience",
        "nav-industries": "Markets, Industries & Research",
        
        /*"nav-insights": "Insights",*/
        "nav-about": "About Me",
        "nav-contact": "Contact",
        "schedule-meeting": "Schedule a Meeting",

        "industries-subtitle": "Financial Services • Mining • Government • Technology",

        /* BUSINESS CHALLENGES */
        "challenge-eyebrow": "Business Challenges",
        "challenge-title": "Helping Organizations Solve Complex Business Problems",
        "challenge-text": "Applying advanced analytics, artificial intelligence and quantitative modelling to support strategic decisions.",

        "challenge-card1-category": "FINANCIAL SERVICES",
        "challenge-card1-title":"Credit Risk & Portfolio Analytics",
        "challenge-card1-text": "Improve portfolio monitoring, provisioning models and strategic decision making through advanced analytical techniques.",
        "challenge-card1-outcome": "Better Governance",
        "challenge-card2-category": "ARTIFICIAL INTELLIGENCE",
        "challenge-card2-title": "AI for Business Decisions",
        "challenge-card2-text": "Integrate Artificial Intelligence into business processes to strengthen analytical capabilities and executive decision making.",
        "challenge-card2-outcome": "Smarter Decisions",
        "challenge-card3-category": "MINING",
        "challenge-card3-title": "Operational Analytics",
        "challenge-card3-text": "Transform operational information into actionable insights that improve efficiency and productivity.",
        "challenge-card3-outcome": "Greater Operational Performance",

        /*STRATEGIC CAPABILITIES*/
        "capabilities-eyebrow":"Strategic Capabilities",
        "capabilities-title":"Transforming Complexity Into Better Decisions",
        "capabilities-text":"Empowering leaders with integrated decision frameworks that merge quantitative modeling, business expertise and Artificial Intelligence to transform market uncertainty into strategic competitive advantage.",

        "capability1-number": "01",
        "capability1-title": "Artificial Intelligence",
        "capability1-text": "Design and implementation of intelligent analytical solutions that support decision makers across financial, operational and strategic environments.",
        "capability1-item1": "Generative AI",
        "capability1-item2": "Machine Learning",
        "capability1-item3": "Large Language Models",
        "capability1-item4":"Process Automation",

        "capability2-number":"02",
        "capability2-title":"Advanced Analytics",
        "capability2-text":"Transform large volumes of operational and financial data into meaningful information that supports tactical and strategic decision making across the organization.",
        "capability2-item1":"Predictive Analytics",
        "capability2-item2":"Business Intelligence",
        "capability2-item3":"Data Visualization",
        "capability2-item4":"Performance Dashboards",

        "capability3-number":"03",
        "capability3-title":"Risk Modelling",
        "capability3-text": "Development of quantitative models to assess financial, operational and strategic risks while supporting governance and regulatory compliance.",
        "capability3-item1":"Credit Risk",
        "capability3-item2":"IFRS 9",
        "capability3-item3":"Stress Testing",
        "capability3-item4":"Portfolio Analytics",

        "capability4-number":"04",
        "capability4-title": "Decision Intelligence",
        "capability4-text": "Integrating analytical models, artificial intelligence and business knowledge into a unified decision framework that empowers executives to navigate complex environments with confidence.",
        "capability4-item1": "Decision Support Systems",
        "capability4-item2": "C-Suite & Executive Intelligence",
        "capability4-item3": "Scenario Analysis", 
        "capability4-item4": "Strategic Planning",

        /* SECTION: EXPERIENCE*/
        "experience-eyebrow": "Experience",
        "experience-title":"Experience Across Complex Business Environments",
        "experience-text":"Every organization faces unique challenges. The analytical approach changes, but the objective remains the same: making better business decisions.",
    
        "experience-challenge":"Challenge",
        "experience-approach":"Approach",
        "experience1-title":"Financial Services",
        "experience1-challenge":"Managing portfolio risk while meeting regulatory requirements in increasingly complex financial environments.",
        "experience1-approach":"Development of quantitative models, portfolio analytics, IFRS 9, stress testing and decision-support frameworks.",
        "experience1-outcome":"Better Governance · Better Forecasting · Better Decisions",

        "experience2-title":"Mining",
        "experience2-challenge":"Increasing operational efficiency while integrating production, logistics and business information.",
        "experience2-approach": "Analytical models, operational dashboards, KPI monitoring and productivity analysis for large-scale mining operations.",
        "experience2-outcome": "Better Productivity · Better Visibility · Better Decisions",

        "experience3-title":"Government",
        "experience3-challenge":"Supporting public organizations through better information, transparency and evidence-based decision making.",
        "experience3-approach":"Data integration, performance indicators and analytical tools for institutional management.",
        "experience3-outcome":"Better Planning · Better Governance · Better Public Value",

        "experience4-title": "Cross-Industry Decision Intelligence",
        "experience4-challenge": "Every industry produces different data, but executive decisions require the same analytical discipline.",
        "experience4-approach":"Applying transferable analytical methodologies that adapt to different business environments and organizational realities.",
        "experience4-outcome": "Better Adaptability · Better Insights · Better Business Outcomes",

        /*INSIGHTS*/
        "insights-eyebrow": "Insights",
        "insights-title": "Ideas That Drive Better Decisions",
        "insights-text":"Decision making evolves continuously. These articles reflect practical perspectives on analytics, artificial intelligence, financial risk and digital transformation.",
    
        "insight1-category":"Artificial Intelligence",
        "insight1-title": "Beyond ChatGPT: Building AI That Creates Business Value",
        "insight1-text":"Artificial Intelligence becomes valuable only when it supports measurable business decisions rather than isolated technological initiatives.",
    
        "insight2-category":"Financial Risk",
        "insight2-title":"Risk Models as Strategic Decision Tools",
        "insight2-text":"Modern risk management extends far beyond regulatory compliance and becomes a competitive advantage.",
    
        "insight3-category":"Advanced Analytics",
        "insight3-title":"From Information to Executive Intelligence",
        "insight3-text": "Organizations already possess valuable data. The challenge is transforming information into actionable knowledge.",
        
        "read-article":"Read Article",

        /*MARKETS, INDUSTRIES & RESEARCH*/
        "markets-eyebrow":"Markets, Industries & Research",
        "markets-title":"Knowledge Built Across Industries and Disciplines",
        "markets-text":"Analytical thinking creates greater value when applied across industries, markets and research environments. This multidisciplinary perspective enables better decisions under uncertainty.",
        
        "market1-category":"FINANCIAL SERVICES",
        "market1-title":"Financial Services",
        "market1-text":"Quantitative risk modelling, portfolio analytics, IFRS 9 and decision intelligence supporting strategic financial decisions.",
        "market1-item1":"Credit Risk",
        "market1-item2":"Portfolio Analytics",
        "market1-item3":"IFRS 9",
        "market1-item4":"Decision Intelligence",

        "market2-category":"MINING",
        "market2-title":"Mining",
        "market2-text":"Operational analytics supporting productivity, efficiency and strategic decision making across complex mining operations.",
        "market2-item1":"Operational Analytics",
        "market2-item2":"Productivity",
        "market2-item3":"KPIs",
        "market2-item4":"Decision Support",

        "market3-category":"STATE",
        "market3-title":"Public Sector",
        "market3-text":"Analytical frameworks improving institutional performance, transparency and evidence-based decision making.",
        "market3-item1":"Public Analytics",
        "market3-item2":"Strategic Planning",
        "market3-item3":"Performance Indicators",
        "market3-item4":"Evidence-Based Decisions",

        "market4-category":"INTERNATIONAL TRADE",
        "market4-title":"International Trade",
        "market4-text":"Understanding global markets, trade flows and international supply chains to support strategic business expansion and economic decision making.",
        "market4-item1":"Global Markets",
        "market4-item2":"Trade Intelligence",
        "market4-item3":"Supply Chains",
        "market4-item4":"Economic Integration",

        "market5-category":"ECONOMICS & MARKETS",
        "market5-title":"Economics & Markets",
        "market5-text":"Macroeconomic analysis, market intelligence and quantitative forecasting supporting executive decision making in dynamic environments.",
        "market5-item1":"Economic Analysis",
        "market5-item2":"Market Intelligence",
        "market5-item3":"Forecasting",
        "market5-item4":"Strategic Planning",

        "market6-category":"RESEARCH & INNOVATION",
        "market6-title":"Research & Innovation",
        "market6-text":"Applied research integrating artificial intelligence, quantitative analytics and decision sciences to develop practical solutions for complex organizational challenges.",
        "market6-item1":"Applied Research",
        "market6-item2":"Decision Sciences",
        "market6-item3":"Artificial Intelligence",
        "market6-item4":"Innovation",

        /*ABOUT ME*/
        "about-eyebrow":"About Me",
        "about-title":"Bridging Business, Analytics and Artificial Intelligence",
        "about-intro":"Empowering leaders with integrated decision frameworks that merge quantitative modeling, business expertise and Artificial Intelligence.",
        "about-text1":"Organizations create sustainable value when business expertise, quantitative thinking and Artificial Intelligence converge into better strategic decisions.",
        "about-text2":"For more than two decades I have worked across financial services, mining and public sector organizations, designing quantitative models, analytical frameworks and decision-support solutions that connect business strategy with modern technology.",
        "about-text3":"Today my work integrates Decision Intelligence, Artificial Intelligence and Advanced Analytics into practical business solutions that help executives navigate complexity with confidence.",
        "about-quote":"Helping organizations make better decisions.",
        "about-highlight1":"Years",
        "about-highlight2":"Sectors",
        "about-highlight3":"Decision Intelligence",
        
        /*CONTACT*/
        "contact-eyebrow":"Contact",
        "contact-title": "Let's Build Better Decisions Together",
        "contact-text": "Every organization faces unique analytical challenges. Whether you are exploring Artificial Intelligence, Advanced Analytics or Decision Intelligence, I would be pleased to discuss how analytical thinking can support your strategic objectives.",
        "contact-role": "Artificial Intelligence • Advanced Analytics • International Business Consulting",
        "contact-email-title":"Email",
        "contact-phone-title":"Phone",
        "contact-location-title":"Location",
        "contact-location":"Santiago, Chile",
        "contact-availability-title":"Availability",
        "contact-availability":"Consulting • Advisory • Executive Projects",
        "contact-whatsapp":"Chat on WhatsApp",
        "contact-response":"Usually replying within one business day.",
        "form-name":"Name",
        "form-email":"Email",
        "form-company":"Organization",
        "form-message":"Message",
        "form-button":"Let's Talk",
        "placeholder-name":"Your Name",
        "placeholder-email":"name@company.com",
        "placeholder-company":"Organization",
        "placeholder-message":"Tell me about your project...",

        /*FOOTER*/
        "footer-brand":"Decision Intelligence",
        "footer-description":"Helping organizations make better decisions through Artificial Intelligence, Advanced Analytics and Quantitative Modelling.",
        "footer-solutions": "Solutions",
        "footer-solutions-item1":"Business Challenges",
        "footer-solutions-item2":"Capabilities",
        "footer-solutions-item3":"Experience",
        "footer-company":"Company",
        "footer-company-item1":"About",
        "footer-company-item2":"Markets",
        "footer-company-item3":"Contact",
        "footer-connect":"Connect",
        "footer-connect-item1":"LinkedIn",
        "footer-connect-item2":"GitHub",
        "footer-connect-item3":"Email",
        "footer-copyright":"© 2026 Erasmo Parraguez. All Rights Reserved.",
        "footer-developed":"Designed, Developed & Powered by Erasmo Parraguez.",
    }, 
    es: {
        "explore-solutions": "Explorar Soluciones",
        "schedule-meeting": "Agendar Reunión",
        "hero-eyebrow": "Inteligencia para la Toma de Decisiones",
        "hero-title": "Ayudando a las organizaciones a tomar mejores decisiones.",
        "hero-subtitle": "Inteligencia Artificial • Inteligencia para la Decisión • Analítica Cuantitativa",
        "hero-text": "Las organizaciones enfrentan desafíos analíticos cada vez más complejos. Las mejores decisiones requieren mucho más que tecnología. Requieren el enfoque analítico adecuado.",

        "nav-solutions": "Soluciones",
        "nav-experience": "Experiencia",
        "nav-industries": "Mercados, Sectores & Investigación",
        
        "nav-about": "Acerca de mi",
        "nav-contact": "Contacto",
        "schedule-meeting": "Agendar Reunión",

        "industries-subtitle": "Servicios Financieros • Minería • Gobierno • Tecnología",
        
        /* BUSINESS CHALLENGES */
        "challenge-card1-category": "SERVICIOS FINANCIEROS",
        "challenge-card1-title": "Riesgo de Crédito y Analítica de Portafolios",
        "challenge-card1-text": "Mejorar el monitoreo de portafolios, los modelos de provisiones y la toma de decisiones estratégicas mediante técnicas avanzadas de analítica.",
        "challenge-card1-outcome": "Mejor Gobernanza",
        "challenge-card2-category": "INTELIGENCIA ARTIFICIAL",
        "challenge-card2-title": "IA para la Toma de Decisiones",
        "challenge-card2-text": "Integrar Inteligencia Artificial en los procesos de negocio para fortalecer las capacidades analíticas y apoyar la toma de decisiones ejecutivas.",
        "challenge-card2-outcome": "Decisiones Más Inteligentes",
        "challenge-card3-category": "MINERÍA",
        "challenge-card3-title": "Analítica Operacional",
        "challenge-card3-text": "Transformar la información operacional en conocimiento accionable que incremente la eficiencia y la productividad.",
        "challenge-card3-outcome":"Mayor Desempeño Operacional",
        "challenge-eyebrow": "Desafíos de Negocio",
        "challenge-title": "Ayudando a las organizaciones a resolver problemas complejos",
        "challenge-text": "Aplicando analítica avanzada, inteligencia artificial y modelos cuantitativos para apoyar la toma de decisiones estratégicas.",
        
        /*STRATEGIC CAPABILITIES*/
        "capabilities-eyebrow":"Capacidades Estratégicas",
        "capabilities-title":"Transformando la Complejidad en Mejores Decisiones",
        "capabilities-text": "Potenciando a los líderes con marcos integrados para la toma de decisiones que combinan modelos cuantitativos, conocimiento del negocio e Inteligencia Artificial para convertir la incertidumbre en ventajas competitivas sostenibles.",

        "capability1-number": "01",
        "capability1-title": "Inteligencia Artificial",
        "capability1-text": "Diseño e implementación de soluciones analíticas inteligentes que apoyan la toma de decisiones en entornos financieros, operacionales y estratégicos.",
        "capability1-item1": "IA Generativa",
        "capability1-item2": "Aprendizaje Automático",
        "capability1-item3": "Modelos de Lenguaje de Gran Escala (LLM)",
        "capability1-item4":"Automatización de Procesos",

        "capability2-number":"02",
        "capability2-title":"Analítica Avanzada",
        "capability2-text":"Transformar grandes volúmenes de datos operacionales y financieros en información relevante que apoye la toma de decisiones tácticas y estratégicas.",
        "capability2-item1":"Analítica Predictiva",
        "capability2-item2":"Inteligencia de Negocios",
        "capability2-item3":"Visualización de Datos",
        "capability2-item4":"Paneles Ejecutivos",

        "capability3-number":"03",
        "capability3-title":"Modelos de Riesgo",
        "capability3-text":"Desarrollo de modelos cuantitativos para evaluar riesgos financieros, operacionales y estratégicos, fortaleciendo la gobernanza y el cumplimiento regulatorio.",
        "capability3-item1":"Riesgo de Crédito",
        "capability3-item2":"IFRS 9",
        "capability3-item3":"Pruebas de Estrés",
        "capability3-item4":"Análisis de Portafolios",

        "capability4-number":"04",
        "capability4-title": "Inteligencia para la Toma de Decisiones",
        "capability4-text":"Integración de modelos analíticos, inteligencia artificial y conocimiento del negocio en un marco unificado que permite a los ejecutivos enfrentar entornos complejos con mayor confianza.",
        "capability4-item1":"Sistemas de Apoyo a la Decisión",
        "capability4-item2":"Inteligencia C-Level y Alta Dirección",
        "capability4-item3":"Análisis de Escenarios",
        "capability4-item4":"Planificación Estratégica",

        /* SECTION: EXPERIENCE*/
        "experience-eyebrow": "Experiencia",
        "experience-title":"Experiencia en Entornos Empresariales Complejos",
        "experience-text":"Cada organización enfrenta desafíos únicos. El enfoque analítico cambia, pero el objetivo permanece intacto: tomar mejores decisiones de negocio.",

        "experience-challenge":"Desafío",
        "experience-approach":"Enfoque",
        "experience1-title":"Servicios Financieros",
        "experience1-challenge":"Gestionar el riesgo de portafolio cumpliendo con los requerimientos regulatorios en entornos financieros cada vez más complejos.",
        "experience1-approach":"Desarrollo de modelos cuantitativos, analítica de portafolios, IFRS 9, pruebas de estrés y marcos de apoyo para la toma de decisiones.",
        "experience1-outcome":"Mejor Gobernanza · Mejor Proyección · Mejores Decisiones",

        "experience2-title":"Minería",
        "experience2-challenge":"Incrementar la eficiencia operacional integrando producción, logística e información del negocio.",
        "experience2-approach":"Modelos analíticos, tableros operacionales, monitoreo de indicadores y análisis de productividad para operaciones mineras de gran escala.",
        "experience2-outcome": "Mayor Productividad · Mayor Visibilidad · Mejores Decisiones",

        "experience3-title":"Sector Público",
        "experience3-challenge":"Apoyar a las organizaciones públicas mediante mejor información, transparencia y decisiones basadas en evidencia.",
        "experience3-approach":"Integración de datos, indicadores de desempeño y herramientas analíticas para la gestión institucional.",
        "experience3-outcome":"Mejor Planificación · Mejor Gobernanza · Mayor Valor Público",

        "experience4-title": "Inteligencia para la Toma de Decisiones Multisectorial",
        "experience4-challenge": "Cada industria genera información distinta, pero las decisiones ejecutivas requieren la misma disciplina analítica.",
        "experience4-approach":"Aplicación de metodologías analíticas transferibles que se adaptan a diferentes entornos de negocio y realidades organizacionales.",
        "experience4-outcome":"Mayor Adaptabilidad · Mejor Conocimiento · Mejores Resultados de Negocio",
    
        /*INSIGHTS*/
        "insights-eyebrow": "Perspectivas",
        "insights-title": "Ideas que impulsan mejores decisiones",
        "insights-text":"La toma de decisiones evoluciona continuamente. Estos artículos presentan perspectivas prácticas sobre analítica, inteligencia artificial, riesgo financiero y transformación digital.",
    
        "insight1-category":"Inteligencia Artificial",
        "insight1-title":"Más Allá de ChatGPT: Construyendo IA que Genera Valor para el Negocio",
        "insight1-text": "La Inteligencia Artificial solo genera valor cuando apoya decisiones de negocio medibles y no iniciativas tecnológicas aisladas.",
        
        "insight2-category": "Riesgo Financiero",
        "insight2-title": "Los Modelos de Riesgo como Herramientas Estratégicas para la Toma de Decisiones",
        "insight2-text":"La gestión moderna del riesgo va mucho más allá del cumplimiento regulatorio y se convierte en una ventaja competitiva.",
    
        "insight3-category": "Analítica Avanzada",
        "insight3-title":"De la Información a la Inteligencia Ejecutiva",
        "insight3-text":"Las organizaciones ya poseen datos valiosos. El desafío consiste en transformar la información en conocimiento accionable.",
        
        "read-article":"Leer artículo",

        /*MARKETS, INDUSTRIES & RESEARCH*/
        "markets-eyebrow":"Mercados, Industrias e Investigación",
        "markets-title":"Conocimiento Construido a Través de Industrias y Disciplinas",
        "markets-text":"El pensamiento analítico genera mayor valor cuando se aplica en industrias, mercados y entornos de investigación. Esta perspectiva multidisciplinaria permite tomar mejores decisiones en contextos de incertidumbre.",
        
        "market1-category":"SERVICIOS FINANCIEROS",
        "market1-title":"Servicios Financieros",
        "market1-text":"Modelos cuantitativos de riesgo, analítica de portafolios, IFRS 9 e inteligencia para la toma de decisiones estratégicas.",
        "market1-item1":"Riesgo de Crédito",
        "market1-item2":"Analítica de Portafolios",
        "market1-item3":"IFRS 9",
        "market1-item4":"Inteligencia para la Decisión",

        "market2-category":"MINERÍA",
        "market2-title":"Minería",
        "market2-text":"Analítica operacional enfocada en productividad, eficiencia y apoyo a la toma de decisiones en operaciones mineras complejas.",
        "market2-item1":"Analítica Operacional",
        "market2-item2":"Productividad",
        "market2-item3":"Indicadores KPI",
        "market2-item4":"Apoyo a la Decisión",

        "market3-category":"Estado",
        "market3-title":"Sector Público",
        "market3-text":"Modelos analíticos para fortalecer el desempeño institucional, la transparencia y la toma de decisiones basada en evidencia.",
        "market3-item1":"Analítica Pública",
        "market3-item2":"Planificación Estratégica",
        "market3-item3":"Indicadores de Gestión",
        "market3-item4":"Decisiones Basadas en Evidencia",

        "market4-category":"COMERCIO INTERNACIONAL",
        "market4-title":"Comercio Internacional",
        "market4-text":"Comprensión de mercados globales, comercio internacional y cadenas de suministro para apoyar decisiones estratégicas de expansión y desarrollo económico.",
        "market4-item1":"Mercados Globales",
        "market4-item2":"Inteligencia Comercial",
        "market4-item3":"Cadenas de Suministro",
        "market4-item4":"Integración Económica",

        "market5-category":"ECONOMÍA Y MERCADOS",
        "market5-title":"Economía y Mercados",
        "market5-text":"Análisis macroeconómico, inteligencia de mercados y modelos cuantitativos para apoyar la planificación y la toma de decisiones estratégicas.",
        "market5-item1":"Análisis Económico",
        "market5-item2":"Inteligencia de Mercados",
        "market5-item3":"Proyecciones",
        "market5-item4":"Planificación Estratégica",

        "market6-category":"INVESTIGACIÓN E INNOVACIÓN",
        "market6-title":"Investigación e Innovación",
        "market6-text":"Investigación aplicada que integra inteligencia artificial, analítica cuantitativa y ciencias de la decisión para desarrollar soluciones frente a desafíos organizacionales complejos.",
        "market6-item1":"Investigación Aplicada",
        "market6-item2":"Ciencias de la Decisión",
        "market6-item3":"Inteligencia Artificial",
        "market6-item4":"Innovación",

        /*ABOUT ME*/
        "about-eyebrow":"Acerca de mi",
        "about-title":"Conectando Negocios, Analítica e Inteligencia Artificial",
        "about-intro":"Apoyando a líderes y organizaciones mediante marcos integrados de decisión que combinan modelación cuantitativa, conocimiento del negocio e Inteligencia Artificial.",
        "about-text1":"Las organizaciones generan valor sostenible cuando el conocimiento del negocio, el pensamiento cuantitativo y la Inteligencia Artificial convergen para apoyar mejores decisiones estratégicas.",
        "about-text2":"Durante más de dos décadas he trabajado en instituciones financieras, minería y organizaciones públicas, desarrollando modelos cuantitativos, marcos analíticos y soluciones para la toma de decisiones que conectan la estrategia de negocio con la tecnología moderna.",
        "about-text3":"Actualmente mi trabajo integra Inteligencia para la Toma de Decisiones, Inteligencia Artificial y Analítica Avanzada para desarrollar soluciones prácticas que ayudan a los ejecutivos a enfrentar entornos complejos con mayor confianza.",
        "about-quote":"Ayudando a las organizaciones a tomar mejores decisiones.",
        "about-highlight1":"Años",
        "about-highlight2":"Sectores",
        "about-highlight3":"Inteligencia para las decisiones",

        /*CONTACT*/
        "contact-eyebrow":"Contacto",
        "contact-title":"Construyamos Mejores Decisiones Juntos",
        "contact-text":"Cada organización enfrenta desafíos analíticos únicos. Ya sea que estés explorando Inteligencia Artificial, Analítica Avanzada o Inteligencia para la Toma de Decisiones, estaré encantado de conversar sobre cómo el pensamiento analítico puede apoyar tus objetivos estratégicos.",
        "contact-role": "Inteligencia para la Toma de Decisiones • Inteligencia Artificial • Analítica Avanzada",
        "contact-email-title": "Correo Electrónico",
        "contact-phone-title":"Teléfono",
        "contact-location-title":"Ubicación",
        "contact-location":"Santiago, Chile",
        "contact-availability-title":"Disponibilidad",
        "contact-availability":"Consultoría • Asesoría • Proyectos Ejecutivos",
        "contact-whatsapp":"Escríbeme por WhatsApp",
        "contact-response":"Normalmente respondo dentro de un día hábil.",
        "form-name":"Nombre",
        "form-email":"Correo Electrónico",
        "form-company":"Organización",
        "form-message":"Mensaje",
        "form-button":"Conversemos",
        "placeholder-name":"Tu nombre",
        "placeholder-email":"nombre@empresa.com",
        "placeholder-company":"Organización",
        "placeholder-message":"Cuéntame sobre tu proyecto...",

        /*FOOTER*/
        "footer-brand":"Inteligencia para la Toma de Decisiones",
        "footer-description":"Ayudando a las organizaciones a tomar mejores decisiones mediante Inteligencia Artificial, Analítica Avanzada y Modelación Cuantitativa.",
        "footer-solutions":"Soluciones",
        "footer-solutions-item1": "Desafíos Empresariales",
        "footer-solutions-item2":"Capacidades",
        "footer-solutions-item3":"Experiencia",
        "footer-company":"Compañía",
        "footer-company-item1":"Acerca de",
        "footer-company-item2":"Mercados",
        "footer-company-item3":"Contacto",
        "footer-connect":"Conectar",
        "footer-connect-item1":"LinkedIn",
        "footer-connect-item2":"GitHub",
        "footer-connect-item3":"Correo Electrónico",
        "footer-copyright":"© 2026 Erasmo Parraguez. Todos los derechos reservados.",
        "footer-developed":"Diseñado, desarrollado y potenciado por Erasmo Parraguez.",
    },
};

function setLanguage(language){

    const dictionary = translations[language];

    if(!dictionary) return;

    /* TEXT */
    document
        .querySelectorAll("[data-lang]")
        .forEach(element => {

            const key = element.dataset.lang;

            if(dictionary[key]){
                element.innerHTML = dictionary[key];
            }

        });

    /* PLACEHOLDERS */
    document
        .querySelectorAll("[data-lang-placeholder]")
        .forEach(element => {

            const key = element.dataset.langPlaceholder;

            if(dictionary[key]){
                element.placeholder = dictionary[key];
            }

        });

    localStorage.setItem("language", language);

    updateButtons(language);

}

document
    .querySelectorAll(".language")
    .forEach(button => {

        button.addEventListener("click", () => {

            setLanguage(button.dataset.language);

        });

    });

    const savedLanguage =
    localStorage.getItem("language") || "en";

setLanguage(savedLanguage);
