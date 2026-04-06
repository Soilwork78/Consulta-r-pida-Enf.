// ============================================================
// data.js — Consulta Rápida ENF — UDP v1.0 DEMO
// Farmacología ENF3013 + Fisiopatología ENF3014
// Temas con definición rápida + keywords expandidas
// ============================================================

const APP_DATA = {

// ============================================================
// FARMACOLOGÍA — ENF3013
// ============================================================
farm: {
  units: [
    // ──────────────────────────────────────────────────────
    // UNIDAD I: BASES
    // ──────────────────────────────────────────────────────
    {
      id:'farm-u1', title:'Unidad I: Bases de la Farmacología',
      sessions:[
        {
          id:'farm-s1', title:'Sesión 1: Introducción a la Farmacología',
          topics:[
            {t:'Rol de enfermería en el tratamiento farmacológico', def:'El enfermero/a es responsable de los "5 correctos" (paciente, fármaco, dosis, vía, hora), la monitorización de efectos adversos y la educación del paciente sobre su tratamiento.'},
            {t:'Tipos de acción farmacológica', def:'Estimulación (↑función celular), depresión (↓función), irritación (inflamación local), reemplazo (suplir déficit hormonal/enzimático) y antiinfecciosa (eliminación de microorganismos). Define el objetivo terapéutico de cada fármaco.'},
            {t:'Vías de administración', def:'Enteral (oral, sublingual, rectal): absorción GI. Parenteral (IV, IM, SC): evita primer paso hepático, biodisponibilidad ~100% en IV. Tópica, inhalatoria, oftálmica/ótica: efecto local o sistémico selectivo.'},
            {t:'Formas farmacéuticas y requisitos de administración', def:'Comprimidos, cápsulas, soluciones, suspensiones, parches transdérmicos, inhaladores. Cada forma tiene una velocidad de absorción distinta y condiciones de administración específicas (ej. comprimidos de liberación prolongada: NO fraccionar).'},
            {t:'Farmacocinética básica — ADME', def:'Absorción: paso del fármaco al torrente sanguíneo. Distribución: reparto a tejidos (depende de flujo, unión a proteínas, liposolubilidad). Metabolismo: biotransformación hepática. Excreción: eliminación renal/biliar. Determina concentración plasmática y duración del efecto.'},
            {t:'Mecanismos de absorción', def:'Difusión pasiva (mayoría, a favor de gradiente, no saturable), transporte activo (contra gradiente, saturable, requiere energía), pinocitosis (englobamiento de partículas). El pH del medio determina la ionización del fármaco y su capacidad de cruzar membranas.'},
            {t:'Biodisponibilidad (f = fL × fI × fH)', def:'Fracción del fármaco que alcanza la circulación sistémica sin cambios. IV = 100%. Oral < 100% por pérdidas en lumen (fL), intestino (fI) y primer paso hepático (fH). Clave para ajustar dosis entre vía oral e IV.'},
            {t:'Efecto de primer paso hepático', def:'Metabolismo del fármaco al pasar por el hígado antes de llegar a circulación sistémica. Fármacos con alto primer paso (ej. nitroglicerina, morfina oral, propranolol) tienen baja biodisponibilidad oral. La vía sublingual y rectal baja evitan parcialmente este efecto.'}
          ],
          keywords:['ADME','biodisponibilidad','primer paso hepático','vías de administración','absorción','distribución','metabolismo','excreción','farmacocinética','forma farmacéutica','difusión pasiva','transporte activo','pinocitosis','liposolubilidad','pH','ionización','5 correctos','fármaco','dosis','vía enteral','vía parenteral','vía sublingual','subcutánea','intramuscular','intravenosa','tópica','inhalatoria','supositorio','parche transdérmico'],
          alerts:[],
          connections:[
            {toId:'fisio-s17',title:'AKI / Insuficiencia Renal',desc:'Insuficiencia renal → acumulación de fármacos por ↓excreción',type:'fisio'},
            {toId:'fisio-serc',title:'ERC',desc:'Alteración hepática y renal modifica ADME → ajuste de dosis obligatorio',type:'fisio'}
          ]
        },
        {
          id:'farm-s2', title:'Sesión 2: Farmacocinética, Farmacodinamia, RAM y Farmacovigilancia',
          topics:[
            {t:'Distribución: unión a proteínas plasmáticas', def:'Albúmina (fármacos ácidos) y α1-glucoproteína ácida (fármacos básicos). Solo la fracción libre es farmacológicamente activa. En hipoalbuminemia (ERC, cirrosis, desnutrición) → ↑fracción libre → mayor efecto y toxicidad con la misma dosis.'},
            {t:'Volumen de distribución (Vd)', def:'Volumen teórico necesario para contener toda la dosis a la concentración plasmática medida. Vd bajo (<0.5 L/kg): fármaco retenido en plasma (ej. warfarina). Vd alto (>1 L/kg): amplia distribución tisular (ej. digoxina, amiodarona). Determina dosis de carga.'},
            {t:'Barrera hematoencefálica (BHE)', def:'Uniones estrechas endoteliales que limitan el paso de fármacos al SNC. Solo pasan fármacos liposolubles, pequeños y no ionizados. Relevante en infecciones SNC (meningitis: BHE inflamada → ↑permeabilidad → permite penicilina) y analgesia central (opioides cruzan BHE).'},
            {t:'Metabolismo hepático: Fase I y Fase II', def:'Fase I (oxidación, reducción, hidrólisis): citocromo P450 (CYP3A4, CYP2D6, CYP2C19). Convierte fármacos en metabolitos activos o inactivos. Fase II (conjugación): glucuronidación, sulfatación, acetilación → metabolitos hidrosolubles para excreción renal.'},
            {t:'Citocromo P450 (CYP450): inductores e inhibidores', def:'Inductores (rifampicina, carbamazepina, fenitoína): aceleran metabolismo → ↓efecto del fármaco. Inhibidores (ketoconazol, eritromicina, jugo de pomelo): retardan metabolismo → ↑niveles → toxicidad. Base de las interacciones medicamentosas más clínicas.'},
            {t:'Farmacodinamia: interacción fármaco-receptor', def:'Agonista: se une al receptor y lo activa (ej. morfina en receptor μ). Antagonista competitivo: ocupa el receptor sin activarlo, desplazable (ej. naloxona). Antagonista no competitivo: unión irreversible. La afinidad determina la potencia, la eficacia intrínseca determina el efecto máximo.'},
            {t:'Relación dosis-respuesta: potencia y eficacia', def:'Potencia: dosis necesaria para alcanzar un efecto dado (posición de la curva en eje X). Eficacia: efecto máximo alcanzable (altura de la curva). Un fármaco puede ser muy potente pero poco eficaz. DE50: dosis que produce el 50% del efecto máximo.'},
            {t:'Ventana terapéutica', def:'Rango de concentración plasmática entre la concentración mínima eficaz (CME) y la concentración tóxica mínima (CTM). Fármacos con ventana estrecha (digoxina, litio, aminoglucósidos, warfarina, fenitoína) requieren monitorización de niveles séricos obligatoria.'},
            {t:'Reacciones Adversas a Medicamentos (RAM)', def:'Tipo A (augmented): predecibles, dosis-dependientes, frecuentes (ej. hipotensión por antihipertensivos). Tipo B (bizarre): impredecibles, no dosis-dependientes, idiosincráticas (ej. anafilaxia a penicilina). Tipo C: uso crónico. Tipo D: diferidas (ej. teratogénesis).'},
            {t:'Interacciones medicamentosas', def:'Sinergismo: efecto combinado > suma individual (ej. trimetoprim + sulfametoxazol). Antagonismo: un fármaco reduce el efecto del otro (ej. naloxona vs morfina). Potenciación: uno potencia el efecto del otro sin tener efecto propio (ej. ác. clavulánico + amoxicilina).'},
            {t:'Farmacovigilancia y tarjeta amarilla', def:'Ciencia que detecta, evalúa y previene efectos adversos de medicamentos post-comercialización. La tarjeta amarilla es el sistema de notificación voluntaria de RAM por profesionales de salud. Permite detectar RAM tipo B que no aparecen en ensayos clínicos.'}
          ],
          keywords:['citocromo P450','CYP3A4','CYP2D6','CYP2C19','agonista','antagonista','antagonista competitivo','RAM','farmacovigilancia','interacción medicamentosa','ventana terapéutica','sinergismo','antagonismo','potenciación','albúmina','fracción libre','volumen de distribución','BHE','Fase I','Fase II','glucuronidación','conjugación','inductor enzimático','inhibidor enzimático','potencia','eficacia','DE50','dosis-respuesta','tarjeta amarilla','idiosincrasia','alergia medicamentosa'],
          alerts:[
            {type:'warning',title:'Polimorfismos genéticos',text:'NAT1/NAT2: acetiladores lentos vs rápidos → dosis estándar puede ser tóxica o ineficaz. CYP2D6: metabolizadores ultrarrápidos de codeína → toxicidad por exceso de morfina.'},
            {type:'info',title:'Receptores farmacológicos',text:'GPCR (mayoría), ionotrópicos (ms), nucleares (horas). Diferentes latencias: agonista β2 (segundos) vs corticoide (horas-días).'}
          ],
          connections:[
            {toId:'fisio-serc',title:'ERC',desc:'Insuficiencia renal → ↓excreción → acumulación tóxica. Ajuste de dosis obligatorio',type:'fisio'},
            {toId:'fisio-c13',title:'Neurofisiopatología',desc:'BHE como barrera farmacocinética. Fármacos liposolubles cruzan → efecto en SNC',type:'fisio'}
          ]
        }
      ]
    },
    // ──────────────────────────────────────────────────────
    // UNIDAD II: FARMACOLOGÍA HUMANA BÁSICA
    // ──────────────────────────────────────────────────────
    {
      id:'farm-u2', title:'Unidad II: Farmacología Humana Básica',
      sessions:[
        {
          id:'farm-s3', title:'Sesión 3: Antibióticos — Betalactámicos y Aminoglucósidos',
          topics:[
            {t:'Clasificación antimicrobiana: espectro, estructura, mecanismo', def:'Espectro amplio (gram+ y gram-), medio o estrecho (solo gram+ o -). La clasificación por mecanismo de acción (5 grandes grupos) guía la selección empírica y la combinación racional de antibióticos.'},
            {t:'5 mecanismos de acción antibiótica', def:'1) Inhibición pared celular (β-lactámicos, vancomicina). 2) Inhibición síntesis proteica (aminoglucósidos 30S, macrólidos 50S). 3) Inhibición ADN (quinolonas). 4) Destrucción membrana (polimixinas). 5) Interferencia metabólica (sulfas, trimetoprim).'},
            {t:'Bactericida vs bacteriostático', def:'Bactericida: mata la bacteria (β-lactámicos, aminoglucósidos, quinolonas). Bacteriostático: detiene el crecimiento (macrólidos, tetraciclinas, cloranfenicol). En inmunodeprimidos o infecciones graves (endocarditis, meningitis, neutropenia febril): siempre bactericida.'},
            {t:'CMI, CMB y PAE', def:'CMI (concentración mínima inhibitoria): menor concentración que inhibe crecimiento visible. CMB: menor concentración que mata ≥99.9%. PAE (efecto post-antibiótico): tiempo que la bacteria sigue inhibida después de retirar el ATB. Aminoglucósidos y quinolonas tienen PAE prolongado → permiten dosis únicas diarias.'},
            {t:'Concentración-dependiente vs tiempo-dependiente', def:'Concentración-dependiente (aminoglucósidos, quinolonas): eficacia depende de Cmax/CMI. Se administran en dosis altas infrecuentes. Tiempo-dependiente (β-lactámicos): eficacia depende de T>CMI. Se administran en dosis frecuentes o infusión prolongada. PK/PD guía la posología.'},
            {t:'Penicilinas: naturales, aminopenicilinas, anti-Pseudomonas', def:'Naturales: penicilina G (IV) y V (oral) — Streptococcus, sífilis. Aminopenicilinas: amoxicilina/ampicilina — espectro ampliado a gram(-). Anti-Pseudomonas: piperacilina (+ tazobactam). Mecanismo: inhiben transpeptidasas (PBPs) → impiden entrecruzamiento del peptidoglicano.'},
            {t:'Cefalosporinas: 1ª a 4ª generación', def:'1ª gen (cefazolina): gram(+), profilaxis quirúrgica. 2ª gen (cefuroxima): amplían gram(-). 3ª gen (ceftriaxona): gran actividad gram(-), penetración SNC → meningitis. Ceftazidima: anti-Pseudomonas. 4ª gen (cefepime): gram(+) y gram(-) incluyendo Pseudomonas.'},
            {t:'Carbapenemes e inhibidores de β-lactamasas', def:'Carbapenemes (imipenem, meropenem, ertapenem): el espectro más amplio de los β-lactámicos. Reserva hospitalaria para infecciones graves/resistentes. Ác. clavulánico, sulbactam, tazobactam: inhiben β-lactamasas producidas por bacterias resistentes → restauran actividad del β-lactámico asociado.'},
            {t:'Aminoglucósidos: gentamicina, amikacina', def:'Bactericidas concentración-dependientes. Inhiben subunidad 30S ribosomal → lectura errónea del ARNm. Excelente actividad gram(-). Sinergia con β-lactámicos (facilitan entrada del aminoglucósido). Nefrotóxicos y ototóxicos → monitorizar niveles séricos y función renal.'}
          ],
          keywords:['β-lactámico','CMI','CMB','PAE','cefalosporina','carbapeneme','penicilina','aminoglucósido','amoxicilina','ceftriaxona','ceftazidima','cefepime','cefazolina','imipenem','meropenem','ertapenem','piperacilina','tazobactam','ác. clavulánico','resistencia bacteriana','bactericida','bacteriostático','PK/PD','PBP','peptidoglicano','gram positivo','gram negativo','Pseudomonas','BLEE','espectro','profilaxis quirúrgica','gentamicina','amikacina','nefrotoxicidad','ototoxicidad'],
          alerts:[
            {type:'danger',title:'Alergia cruzada penicilinas-cefalosporinas (~10%)',text:'Interrogar antecedentes alérgicos antes de administrar. Si anafilaxia a penicilina → evitar cefalosporinas de 1ª gen. Carbapenemes tienen <1% reactividad cruzada.'},
            {type:'danger',title:'Aminoglucósidos: nefrotoxicidad y ototoxicidad',text:'Monitorizar función renal (creatinina) y niveles séricos (concentración valle <2 μg/mL para gentamicina). Riesgo mayor con uso prolongado, deshidratación o combinación con furosemida.'},
            {type:'warning',title:'Imipenem: convulsiones (1.5%)',text:'Requiere cilastatina (inhibe DHP-I renal). Usar con precaución en daño neurológico previo. Meropenem tiene menor riesgo convulsivo y no requiere cilastatina.'}
          ],
          connections:[
            {toId:'fisio-s8',title:'Shock séptico',desc:'ATB empírico amplio espectro <1h del diagnóstico. De-escalamiento tras cultivos',type:'fisio'},
            {toId:'fisio-s17',title:'AKI',desc:'Aminoglucósidos como causa de NTA intrarrenal vía megalina en TCP',type:'fisio'},
            {toId:'fisio-serc',title:'ERC',desc:'Ajuste de dosis obligatorio. Aminoglucósidos aceleran progresión de ERC',type:'fisio'}
          ]
        },
        {
          id:'farm-s4', title:'Sesión 4: Antifúngicos, Antivirales y Antiparasitarios',
          topics:[
            {t:'Clasificación de micosis', def:'Superficiales (piel, uñas, mucosas — dermatofitos, Candida). Subcutáneas (sporotricosis). Sistémicas endémicas (histoplasma, coccidioides). Oportunistas (Candida invasiva, Aspergillus, Cryptococcus — en inmunosuprimidos). La localización determina vía de tratamiento.'},
            {t:'Anfotericina B: unión a ergosterol', def:'Se une al ergosterol de la membrana fúngica → forma poros → pérdida de iones K+, Mg2+ → muerte celular. El gold standard en micosis sistémicas graves. Formulación liposomal reduce nefrotoxicidad (~30% menos). Siempre premedicar e hidratar.'},
            {t:'Azoles: fluconazol, itraconazol, voriconazol', def:'Inhiben 14α-desmetilasa (CYP51) → bloquean síntesis de ergosterol → membrana fúngica defectuosa. Fluconazol: Candida, criptococo (penetra SNC). Voriconazol: Aspergillus (1ª línea). Todos son inhibidores de CYP450 → múltiples interacciones.'},
            {t:'Equinocandinas: caspofungina, micafungina', def:'Inhiben β-(1,3)-glucano sintasa → destruyen la pared celular fúngica. Fungicidas para Candida, fungistáticas para Aspergillus. Solo IV. Pocas interacciones. 1ª línea en candidemia. No actúan contra Cryptococcus ni mucorales.'},
            {t:'Antivirales: aciclovir, ganciclovir, oseltamivir', def:'Aciclovir: análogo de guanosina. Requiere fosforilación por timidina kinasa viral (HSV, VZV). Ganciclovir: CMV (mielotóxico). Oseltamivir: inhibidor de neuraminidasa → impide liberación de viriones de influenza A/B. Efectivo si se inicia <48h de los síntomas.'},
            {t:'Antirretrovirales VIH y ciclo de replicación', def:'7 puntos de intervención: 1) Fusión (enfuvirtida). 2) Correceptor CCR5 (maraviroc). 3) Transcriptasa reversa: ITIAN (tenofovir, emtricitabina), ITINAN (efavirenz). 4) Integrasa (dolutegravir, raltegravir). 5) Proteasa (atazanavir, darunavir). TARV combina ≥3 fármacos de ≥2 clases.'}
          ],
          keywords:['ergosterol','azol','equinocandina','fluconazol','voriconazol','anfotericina B','caspofungina','micafungina','aciclovir','ganciclovir','neuraminidasa','oseltamivir','zanamivir','antirretroviral','VIH','ITIAN','ITINAN','inhibidor proteasa','inhibidor integrasa','TARV','Candida','Aspergillus','Cryptococcus','micosis oportunista','timidina kinasa','CMV','herpes','influenza','dermatofito'],
          alerts:[
            {type:'danger',title:'Anfotericina B: nefrotoxicidad severa',text:'Dose-limiting. Hidratación con SF pre y post infusión. Monitorizar creatinina, K+, Mg2+. Formulación liposomal es la preferida.'},
            {type:'warning',title:'Azoles: inhibidores potentes de CYP450',text:'↑niveles de warfarina, ciclosporina, estatinas, benzodiacepinas. Revisar TODAS las interacciones antes de prescribir.'},
            {type:'warning',title:'Aciclovir: ajuste renal obligatorio',text:'Cristaluria y neurotoxicidad en IR. Hidratación adecuada obligatoria en tratamiento IV. Reducir dosis con ClCr <50 mL/min.'}
          ],
          connections:[
            {toId:'fisio-s14',title:'Hematooncología',desc:'Inmunosupresión por quimioterapia → micosis oportunistas (Candida, Aspergillus)',type:'fisio'}
          ]
        },
        {
          id:'farm-s5', title:'Sesión 5: Alergias, Vía Aérea y Antihistamínicos',
          topics:[
            {t:'Inflamación: mediadores y signos cardinales', def:'Histamina (mastocitos), bradicinina (plasma), prostaglandinas (COX), serotonina (plaquetas). Signos: rubor (vasodilatación), tumor (edema), calor (hiperemia), dolor (PGE2 sensibiliza nociceptores), pérdida de función. Son el blanco farmacológico de antiinflamatorios.'},
            {t:'Cascada del ácido araquidónico: vía COX y LOX', def:'Fosfolipasa A2 libera ác. araquidónico de membrana. Vía COX: COX-1 (constitutiva: protección gástrica, hemostasia) y COX-2 (inducible: inflamación) → PGE2 (dolor/fiebre), TXA2 (agregación plaquetaria), PGI2 (vasodilatación). Vía LOX → leucotrienos LTC4/D4 (broncoconstricción potente 1000× histamina).'},
            {t:'Receptores de histamina: H1, H2, H3', def:'H1 (bronquial, piel, GI): broncoconstricción, vasodilatación, prurito, edema. H2 (gástrico): secreción de HCl. H3 (SNC): regulación de liberación de neurotransmisores. Los antihistamínicos terapéuticos son anti-H1 (alergias) y anti-H2 (úlcera gástrica).'},
            {t:'Antihistamínicos 1ª generación', def:'Clorfenamina, clemastina, difenhidramina, prometacina. Cruzan BHE → sedación, efectos anticolinérgicos (boca seca, retención urinaria, visión borrosa). Difenhidramina tiene uso como hipnótico y antiemético. Duración corta → múltiples dosis diarias.'},
            {t:'Antihistamínicos 2ª generación', def:'Cetirizina, fexofenadina, loratadina, desloratadina. NO cruzan BHE significativamente → no sedantes. Selectivos H1 periféricos. Mayor duración (1 dosis/día). Preferidos para rinitis alérgica crónica y urticaria. Astemizol y terfenadina retirados por prolongación QT.'},
            {t:'Cromoglicato sódico', def:'Estabilizador de mastocitos → impide degranulación → ↓liberación histamina/leucotrienos. Uso PROFILÁCTICO (no sirve en crisis aguda). Inhalado antes de ejercicio o exposición a alérgeno. Muy seguro, mínimos efectos adversos.'},
            {t:'Broncodilatadores en contexto de EPOC y asma', def:'EPOC: obstrucción irreversible → LAMA (tiotropio) y LABA (salmeterol) como base. Asma: obstrucción reversible → SABA (salbutamol) como rescate + ICS (budesonida, fluticasona) como controlador. Mediadores: histamina, ECF-A, PG, leucotrienos/SRS-A.'}
          ],
          keywords:['histamina','receptor H1','receptor H2','receptor H3','antihistamínico','1ª generación','2ª generación','cetirizina','loratadina','fexofenadina','clorfenamina','difenhidramina','prometacina','leucotrieno','prostaglandina','PGE2','PGI2','TXA2','COX-1','COX-2','LOX','ácido araquidónico','fosfolipasa A2','cromoglicato','broncodilatador','EPOC','asma','SABA','salbutamol','LABA','LAMA','ICS','SRS-A','mastocito','prurito','urticaria','anafilaxia','rinitis alérgica'],
          alerts:[
            {type:'danger',title:'Antihistamínicos 1ª gen + depresores SNC',text:'Sedación potenciada con alcohol, opioides, BZD. Riesgo de depresión respiratoria. Evitar en conductores y trabajo con maquinaria.'},
            {type:'warning',title:'Loratadina + azoles/macrólidos',text:'Inhibición CYP3A4 → ↑concentración plasmática. Riesgo de prolongación QT.'},
            {type:'danger',title:'IMAO + antihistamínicos = hipotensión severa',text:'Interacción farmacodinámica. Evitar combinación especialmente con antihistamínicos sedantes.'}
          ],
          connections:[
            {toId:'fisio-c01pdf',title:'Inflamación Aguda y Crónica',desc:'Misma cascada araquidónico: diana de AINEs (COX) y corticoides (fosfolipasa A2)',type:'fisio'},
            {toId:'fisio-c03',title:'Asma Bronquial',desc:'Histamina, leucotrienos y PG son los blancos farmacológicos del tratamiento del asma',type:'fisio'}
          ],
          diagrams:[
            {title:'Cascada del Ácido Araquidónico',steps:[
              {label:'Daño celular / estímulo inflamatorio',color:'blue'},
              {label:'Fosfolipasa A2 → Ác. Araquidónico',color:'orange',note:'Bloqueada por CORTICOIDES'},
              {label:'Vía COX-1 / COX-2',color:'blue',note:'Bloqueada por AINEs'},
              {label:'PGE2 (dolor/fiebre) · TXA2 (agregación) · PGI2 (vasodilatación)',color:'red'},
              {label:'Vía LOX → Leucotrienos LTC4/D4/E4',color:'purple',note:'Bloqueada por Montelukast'}
            ]}
          ]
        }
      ]
    },
    // ──────────────────────────────────────────────────────
    // UNIDAD III: CARDIOVASCULAR
    // ──────────────────────────────────────────────────────
    {
      id:'farm-u3', title:'Unidad III: Farmacología Cardiovascular',
      sessions:[
        {
          id:'farm-s6', title:'Sesión 6: Fármacos Antihipertensivos',
          topics:[
            {t:'Clasificación HTA (JNC-7 y ESH/ESC)', def:'Normal <120/80. Prehipertensión 120-139/80-89. Grado 1: 140-159/90-99. Grado 2: ≥160/≥100. La HTA es el FR modificable más importante para AVE (54%) e IAM (47%). Daño de órgano blanco: corazón, riñón, cerebro, retina, arterias.'},
            {t:'IECA: captopril, enalapril, ramipril, lisinopril', def:'Inhiben Enzima Convertidora de Angiotensina → ↓Ang II (vasoconstrictor + proliferativo) + ↑bradicinina (vasodilatador). Captopril es activo; enalapril/ramipril son profármacos. Nefroprotectores en DM. RAM: tos seca (10-15%, por bradicinina), angioedema (raro pero grave). Contraindicados en embarazo.'},
            {t:'ARA-II: losartán, valsartán, candesartán', def:'Bloquean receptor AT1 de angiotensina II → mismos beneficios que IECA pero SIN tos ni angioedema. Efecto renoprotector en nefropatía diabética (estudio RENAAL con losartán). No combinar con IECA (doble bloqueo SRAA → hiperpotasemia).'},
            {t:'β-bloqueantes: cardioselectivos y no selectivos', def:'No cardioselectivos (propranolol): β1+β2 → broncoespasmo, hipoglicemia enmascarada. Cardioselectivos (bisoprolol, atenolol, metoprolol): β1 → ↓FC, ↓contractilidad, ↓renina. α+β (carvedilol, labetalol): vasodilatación adicional. Carvedilol: pilar en IC.'},
            {t:'BCC: dihidropiridinas y no dihidropiridinas', def:'Dihidropiridinas (nifedipino, amlodipino): selectividad vascular 10:1 → vasodilatación potente. Taquicardia refleja. No DHP: verapamilo (1:1 vascular:cardíaco → ↓FC + ↓conducción AV), diltiazem (intermedio). BCC útiles en HTA + DM (no alteran metabolismo glucídico).'},
            {t:'Sistema Renina-Angiotensina-Aldosterona (SRAA)', def:'Renina (riñón) → angiotensinógeno → Ang I → ECA → Ang II → receptor AT1 (vasoconstricción, retención Na+, aldosterona, remodelación, sed) y AT2 (vasodilatación, antiproliferación). Aldosterona → retención Na+/H2O + excreción K+. El SRAA es la diana terapéutica central de la HTA y la IC.'},
            {t:'Otros: α-bloqueantes, hipotensores centrales, vasodilatadores', def:'α-bloqueantes (doxazosina, prazosina): vasodilatación → HTA + HPB. Centrales (α-metildopa: embarazo; clonidina: crisis HTA). Vasodilatadores: hidralazina (IC en embarazo), nitroprusiato (emergencia HTA en UCI → riesgo cianuro >72h), minoxidilo (HTA refractaria + hirsutismo).'}
          ],
          keywords:['IECA','ARA-II','β-bloqueante','BCC','SRAA','angiotensina','ECA','receptor AT1','receptor AT2','dihidropiridina','captopril','enalapril','ramipril','lisinopril','losartán','valsartán','candesartán','bisoprolol','metoprolol','atenolol','propranolol','carvedilol','labetalol','nifedipino','amlodipino','verapamilo','diltiazem','aldosterona','renina','α-metildopa','clonidina','hidralazina','nitroprusiato','doxazosina','JNC-7','daño órgano blanco','bradicinina'],
          alerts:[
            {type:'danger',title:'IECA + ARA-II = doble bloqueo SRAA',text:'Hiperpotasemia severa. La combinación NO está recomendada (estudio ONTARGET).'},
            {type:'danger',title:'β-bloqueantes + verapamilo/diltiazem',text:'Bradicardia severa y bloqueo AV. Monitorizar ECG y FC. Combinación potencialmente letal.'},
            {type:'warning',title:'AINE + IECA/ARA-II',text:'AINEs inhiben PGE2 vasodilatadora renal → ↓efecto hipotensor + ↑riesgo IRA. Triple whammy: AINE + IECA + diurético.'},
            {type:'danger',title:'Suspensión brusca de β-bloqueantes',text:'Up-regulation de receptores β → rebote hipertensivo, taquicardia, angina. Retiro gradual en 2-4 semanas.'},
            {type:'warning',title:'Nitroprusiato >72h: toxicidad por cianuro',text:'Acumulación de tiocianato. Monitorizar niveles. Antídoto: tiosulfato de sodio + hidroxocobalamina.'}
          ],
          connections:[
            {toId:'fisio-c09pptx',title:'HTA — Fisiopatología',desc:'SRAA, disfunción endotelial, PA=GC×RVS como base del tratamiento farmacológico',type:'fisio'},
            {toId:'fisio-c07',title:'Insuficiencia Cardíaca',desc:'IECA + β-bloqueantes son pilares del tratamiento de IC con FEVIr',type:'fisio'},
            {toId:'fisio-serc',title:'ERC / Nefropatía',desc:'IECA/ARA-II nefroprotectores: vasodilatación arteriola eferente → ↓presión intraglomerular',type:'fisio'}
          ]
        },
        {
          id:'farm-s8', title:'Sesión 8: Diuréticos',
          topics:[
            {t:'Fisiología de la nefrona y sitios de acción diurética', def:'Cada diurético actúa en un segmento específico: TCP (acetazolamida, manitol), asa de Henle ascendente gruesa (furosemida), TCD proximal (tiazidas), TCD distal y colector (espironolactona, amilorida). Del total de Na+ filtrado, el asa reabsorbe ~25% (potencia máxima de furosemida).'},
            {t:'Inhibidores de anhidrasa carbónica: acetazolamida', def:'TCP: inhibe anhidrasa carbónica → ↓reabsorción NaHCO3 → diuresis leve + pérdida de bicarbonato → acidosis metabólica hiperclorémica. Usos: glaucoma (↓humor acuoso), alcalosis metabólica, mal de altura (estimula ventilación).'},
            {t:'Diuréticos osmóticos: manitol', def:'Filtrado pero NO reabsorbido → gradiente osmótico → arrastra agua. Solo IV. Usos: edema cerebral agudo (↓PIC rápidamente), glaucoma, IRA por rabdomiólisis, intoxicaciones. Contraindicado en ICC (expande volumen) y anuria.'},
            {t:'Diuréticos de asa: furosemida, bumetanida, torasemida', def:'Los MÁS POTENTES. Inhiben cotransportador Na+/K+/2Cl- (NKCC2) en rama ascendente gruesa del asa de Henle. Eficaces incluso con VFG <30 mL/min (ventaja sobre tiazidas). Furosemida IV: inicio 5 min, efecto 2h. RAM: hipopotasemia, alcalosis hipoclorémica, hiperuricemia, ototoxicidad.'},
            {t:'Tiazidas: hidroclorotiazida, clortalidona, indapamida', def:'Inhiben cotransportador Na+/Cl- (NCC) en TCD proximal. Potencia intermedia. Requieren VFG >30 mL/min. Pilar del tratamiento de HTA (JNC-8: 1ª línea). Efecto vasodilatador adicional a largo plazo. RAM: hipopotasemia, hiperuricemia, hiperglicemia, hipercalcemia.'},
            {t:'Ahorradores de K+: espironolactona, amilorida, triamtereno', def:'Espironolactona: antagonista competitivo de aldosterona en TCD y colector → retiene K+, excreta Na+. Efecto antifibrótico y antiproliferativo. ↓Mortalidad en IC (RALES) y cirrosis. Amilorida/triamtereno: bloquean canal ENaC directamente. RAM espironolactona: ginecomastia, hiperpotasemia.'},
            {t:'Combinaciones sinérgicas de diuréticos', def:'Tiazida + ahorrador K+ (ej. HCTZ + espironolactona): equilibra K+ y ↑natriuresis. Furosemida + metolazona: bloqueo secuencial de nefrona → diuresis masiva en IC refractaria. NUNCA combinar 2 ahorradores de K+ (hiperpotasemia severa).'}
          ],
          keywords:['diurético','nefrona','furosemida','bumetanida','torasemida','tiazida','hidroclorotiazida','clortalidona','indapamida','espironolactona','amilorida','triamtereno','manitol','acetazolamida','hipopotasemia','hiperpotasemia','NKCC2','NCC','ENaC','aldosterona','asa de Henle','TCD','TCP','conducto colector','alcalosis hipoclorémica','hiperuricemia','ototoxicidad','ginecomastia','VFG','bloqueo secuencial'],
          alerts:[
            {type:'danger',title:'Furosemida + aminoglucósidos = ↑ototoxicidad',text:'Ambos son ototóxicos. Daño coclear potenciado. Monitorizar audición y función vestibular.'},
            {type:'danger',title:'Tiazidas + litio = toxicidad',text:'↓Excreción de litio → ↑niveles plasmáticos. Vigilar litemia. Furosemida tiene menos efecto sobre litio.'},
            {type:'danger',title:'Espironolactona + IECA = hiperpotasemia',text:'Ambos elevan K+. Monitorizar K+ sérico especialmente en ERC (VFG <45). Restricción dietaria de K+.'},
            {type:'warning',title:'Manitol sin función renal = sobrecarga de volumen',text:'Contraindicado en anuria. Expande volumen extracelular antes de producir diuresis.'}
          ],
          connections:[
            {toId:'fisio-c07',title:'Insuficiencia Cardíaca',desc:'Furosemida IV: alivio rápido de congestión/EPA. Espironolactona: ↓mortalidad en IC (RALES)',type:'fisio'},
            {toId:'fisio-c09pptx',title:'HTA',desc:'Tiazidas: 1ª línea HTA no complicada. Espironolactona: HTA resistente (hiperaldosteronismo)',type:'fisio'},
            {toId:'fisio-shidro',title:'Equilibrio Hidrosalino',desc:'Cada diurético actúa en segmentos específicos de la nefrona con impacto en Na+, K+, Ca2+, Mg2+, pH',type:'fisio'}
          ]
        },
        {
          id:'farm-s9', title:'Sesión 9: Antiarrítmicos, Antiagregantes y Anticoagulantes',
          topics:[
            {t:'Clasificación Vaughan-Williams de antiarrítmicos', def:'Clase I (bloquean Na+): Ia (disopiramida — ↓conducción, prolongan repolarización), Ib (lidocaína — acortan PA, ↑PRE), Ic (flecainida — ↓despolarización). Clase II: β-bloqueantes. Clase III (prolongan PA): amiodarona, sotalol. Clase IV (BCC): verapamilo, diltiazem. Clasifica por mecanismo iónico.'},
            {t:'Amiodarona: el antiarrítmico más usado', def:'T1/2 extremadamente larga: 14-59 días (metabolito activo 60-90 días). Bloquea canales Na+, K+, Ca2+ + β-bloqueo → acción multiclase. Indicado en FA, TV, FV refractaria. Carga oral o IV. Toxicidad multiorgánica: pulmonar (fibrosis), tiroidea (contiene 37% yodo), hepática, ocular, cutánea.'},
            {t:'Hemostasia primaria: adhesión, activación, agregación', def:'Lesión vascular → exposición colágeno → adhesión plaquetaria (vWF + GPIb). Activación: TXA2 (COX plaquetaria) + ADP/P2Y12 + trombina → cambio conformacional. Agregación: GPIIb/IIIa + fibrinógeno → tapón plaquetario. Cada paso es un blanco farmacológico.'},
            {t:'AAS: inhibición irreversible de COX plaquetaria', def:'Acetila irreversiblemente COX-1 plaquetaria → ↓TXA2 por toda la vida de la plaqueta (8-12 días). Dosis antiagregante: 75-100 mg/día (dosis bajas). Dosis analgésica: 500-1000 mg. Efecto adverso principal: hemorragia GI. Piedra angular de la prevención cardiovascular secundaria.'},
            {t:'Clopidogrel: bloqueo irreversible de P2Y12', def:'Profármaco → metabolito activo por CYP2C19 → bloquea receptor P2Y12 de ADP irreversiblemente → ↓activación plaquetaria. Recuperación plaquetaria en 7 días. Polimorfismo CYP2C19: metabolizadores lentos → eficacia reducida (considerar ticagrelor o prasugrel).'},
            {t:'Anticoagulantes: heparina, warfarina y ACODs', def:'Heparina no fraccionada (HNF): potencia antitrombina III → inhibe trombina + Xa. Monitor: TTPA (1.5-2.5× basal). HBPM (enoxaparina): inhibe Xa > trombina. Warfarina: inhibe factores vitamina K-dependientes (II, VII, IX, X). Monitor: INR (2-3). ACODs: dabigatrán (anti-IIa), rivaroxabán/apixabán (anti-Xa) — dosis fijas, sin monitoreo de rutina.'}
          ],
          keywords:['antiarrítmico','Vaughan-Williams','amiodarona','lidocaína','flecainida','adenosina','sotalol','antiagregante','AAS','aspirina','clopidogrel','ticagrelor','prasugrel','GPIIb/IIIa','P2Y12','TXA2','COX plaquetaria','anticoagulante','heparina','HBPM','enoxaparina','warfarina','INR','TTPA','dabigatrán','rivaroxabán','apixabán','edoxabán','ACOD','vitamina K','antitrombina III','factor Xa','fibrinólisis','alteplasa'],
          alerts:[
            {type:'danger',title:'Amiodarona: toxicidad multiorgánica',text:'Control basal y cada 6 meses: función tiroidea (TSH), función hepática, Rx tórax, examen ocular. Fotosensibilidad → protector solar.'},
            {type:'danger',title:'Amiodarona + warfarina = hemorragia',text:'Amiodarona inhibe CYP2C9 → ↑INR. Reducir dosis warfarina 30-50% y controlar INR semanalmente.'},
            {type:'danger',title:'Sotalol: torsades de pointes',text:'Prolonga QT. Contraindicado con QTc >450ms basal. Iniciar hospitalizado con monitoreo ECG continuo.'},
            {type:'warning',title:'AAS + anticoagulantes = ↑sangrado',text:'Combinar solo con indicación precisa (ej. SCA+FA). Usar IBP como gastroprotección. HAS-BLED score para evaluar riesgo.'}
          ],
          connections:[
            {toId:'fisio-c10pptx',title:'IAM / SCA',desc:'Doble antiagregación AAS+clopidogrel + heparina en fase aguda del SCA',type:'fisio'},
            {toId:'fisio-s14',title:'Hemostasia',desc:'Hemostasia primaria (AAS, clopidogrel) y secundaria (heparina, warfarina) como blancos farmacológicos',type:'fisio'}
          ]
        },
        {
          id:'farm-slipid', title:'Sesión: Fármacos Hipolipemiantes',
          topics:[
            {t:'Dislipidemias: clasificación y riesgo cardiovascular', def:'Hipercolesterolemia (↑LDL): principal FR de aterosclerosis. Hipertrigliceridemia (↑TG): riesgo de pancreatitis si >500 mg/dL. Dislipidemia mixta. Clasificación Fredrickson (I-V) según patrón lipoproteico. DM, obesidad, hipotiroidismo, síndrome nefrótico causan dislipidemias secundarias.'},
            {t:'Estatinas: inhibidores de HMG-CoA reductasa', def:'Atorvastatina, rosuvastatina, simvastatina. Inhiben la enzima limitante de la síntesis de colesterol hepático → ↑receptores LDL hepáticos → ↓LDL plasmático 30-55%. Efectos pleiotrópicos: antiinflamatorio (↓PCR), estabilización de placa aterosclerótica, mejora función endotelial (↑NO). Fármacos que más reducen eventos CV.'},
            {t:'Fibratos y otros hipolipemiantes', def:'Fibratos (fenofibrato): activan PPARα → ↑lipoproteínlipasa → ↓TG 20-50%, ↑HDL moderado. Quelantes (colestiramina): impiden reabsorción de ácidos biliares. Ezetimiba: inhibe NPC1L1 intestinal → ↓absorción colesterol. Omega-3 (EPA/DHA): ↓síntesis hepática de VLDL.'}
          ],
          keywords:['estatina','HMG-CoA reductasa','atorvastatina','rosuvastatina','simvastatina','pravastatina','fibrato','fenofibrato','colestiramina','ezetimiba','omega-3','LDL','HDL','VLDL','triglicéridos','dislipidemia','Fredrickson','colesterol','NPC1L1','PPARα','pleiotrófico','PCR','placa aterosclerótica','rabdomiólisis','CPK','miopatía','síndrome metabólico','riesgo cardiovascular'],
          alerts:[
            {type:'danger',title:'Estatinas: rabdomiólisis',text:'Rara pero potencialmente mortal (miopatía → rabdomiólisis → IRA). Monitorizar CPK y transaminasas. Suspender si CPK >10× límite normal o dolor muscular intenso.'},
            {type:'danger',title:'Estatina + fibrato = ↑riesgo miopatía',text:'Especialmente con gemfibrozil. Si necesario, preferir fenofibrato. No combinar con dosis altas de estatinas.'},
            {type:'warning',title:'Colestiramina interfiere absorción de fármacos',text:'Administrar otros fármacos 1h ANTES o 4-6h DESPUÉS de colestiramina. Afecta: warfarina, levotiroxina, digoxina, tiazidas.'}
          ],
          connections:[
            {toId:'fisio-saterom',title:'Ateromatosis',desc:'Estatinas estabilizan placa vulnerable → ↓eventos CV. Efecto pleiotrópico independiente de LDL',type:'fisio'},
            {toId:'fisio-c10pdf',title:'Diabetes Mellitus',desc:'DM2 tiene dislipidemia característica: ↑TG + ↓HDL + LDL pequeñas y densas. Estatinas obligatorias en DM+RCV alto',type:'fisio'}
          ]
        }
      ]
    },
    // ──────────────────────────────────────────────────────
    // UNIDAD IV: ENDOCRINA
    // ──────────────────────────────────────────────────────
    {
      id:'farm-u4', title:'Unidad IV: Farmacología Endocrina',
      sessions:[
        {
          id:'farm-s11', title:'Sesión 11: Fármacos Tiroideos y Antitiroideos',
          topics:[
            {t:'Hormonas tiroideas T3 y T4', def:'T4 (tiroxina): 90% de la secreción tiroidea, T1/2 6-7 días, reservorio. T3 (triyodotironina): 10% secretada directamente, 80% por conversión periférica de T4→T3 (desyodasas). T3 es 3-5× más potente y la forma activa. Regulación: TSH (hipófisis) estimulada por TRH (hipotálamo) → feedback negativo por T3/T4.'},
            {t:'Levotiroxina (L-T4): tratamiento del hipotiroidismo', def:'Tratamiento de elección. Se convierte periféricamente a T3. Inicio de acción lento (3-4 semanas). Estado estacionario en 6 semanas. En ayunas 30-60 min antes del desayuno. Dosis: 1.6 μg/kg/día. En cardiopatía/ancianos: iniciar 25 μg e ir subiendo. Control: TSH cada 6-8 semanas hasta estabilizar.'},
            {t:'Tionamidas: PTU y metimazol/tiamazol', def:'PTU: inhibe peroxidasas tiroideas (↓organificación de yodo) + inhibe conversión periférica T4→T3 (ventaja en crisis tirotóxica). T1/2 ~2h. Metimazol: más potente, T1/2 más larga, 1 dosis/día. Estado eutiroideo en 4-6 semanas. PTU preferido en 1er trimestre embarazo (metimazol: aplasia cutis).'},
            {t:'Yodo radiactivo (I-131) y suplemento de yodo', def:'I-131: concentrado en tiroides por NIS, destruye tejido por radiación β. Indicado en hipertiroidismo refractario, Graves, cáncer diferenciado de tiroides. CONTRAINDICADO ABSOLUTO en embarazo. Yodo nutricional: 90-200 μg/día. Déficit → bocio, cretinismo (daño cerebral irreversible fetal).'}
          ],
          keywords:['tiroxina','T3','T4','levotiroxina','propiltiouracilo','PTU','metimazol','tiamazol','tionamida','yodo radiactivo','I-131','hipotiroidismo','hipertiroidismo','Graves','Hashimoto','TSH','TRH','desyodasa','peroxidasa tiroidea','NIS','calcitonina','bocio','cretinismo','tormenta tiroidea','tirotoxicosis','feedback negativo','agranulocitosis','embarazo'],
          alerts:[
            {type:'danger',title:'PTU: agranulocitosis y hepatotoxicidad',text:'Suspender si fiebre + odinofagia. Hemograma basal. La agranulocitosis es rara (~0.3%) pero potencialmente fatal.'},
            {type:'warning',title:'Levotiroxina en cardiopatía',text:'Iniciar 12.5-25 μg y titular lentamente. Puede precipitar angina, arritmias o IAM en cardiopatía preexistente.'},
            {type:'danger',title:'I-131: contraindicado en embarazo',text:'Destruye tiroides fetal. Test de embarazo obligatorio previo. Esperar 6-12 meses post-I-131 para concebir.'}
          ],
          connections:[
            {toId:'fisio-saterom',title:'Ateromatosis / Dislipidemia',desc:'Hipotiroidismo → ↑LDL, ↑TG (dislipidemia secundaria). Tratar tiroides resuelve la dislipidemia',type:'fisio'}
          ]
        },
        {
          id:'farm-sdiab', title:'Sesión: Antidiabéticos e Insulinas',
          topics:[
            {t:'DM1 vs DM2: fisiopatología y enfoque terapéutico', def:'DM1 (10-20%): autoinmune, destrucción células β, déficit absoluto de insulina → insulinoterapia obligatoria. DM2 (80-90%): resistencia insulínica + disfunción β progresiva → tratamiento escalonado: estilo de vida → metformina → combinaciones → insulina. HbA1c <7% como meta general.'},
            {t:'Insulina: señalización y tipos de preparados', def:'Receptor tirosina kinasa → IRS → PI3K → AKT → translocación GLUT4 (músculo, adiposo). Rápidas: lispro/aspart/glulisina (inicio 15min, prandiales). Regular: inicio 30min. NPH: intermedia (pico 6-12h). Glargina/detemir: acción prolongada sin pico (basal). Esquema basal-bolo: glargina nocturna + rápida preprandial.'},
            {t:'Sulfonilureas: secretagogos de insulina', def:'Glibenclamida, glimepirida, glipizida. Bloquean canales K+/ATP (subunidad SUR1/Kir6.2) → despolarización célula β → exocitosis insulina. Eficaces solo con reserva β residual (DM2). RAM principal: hipoglicemia (especialmente glibenclamida en ancianos/ERC). No usar en DM1.'},
            {t:'Metformina: biguanida de primera línea', def:'Reduce producción hepática de glucosa (↓gluconeogénesis vía AMPK), mejora sensibilidad a insulina en tejidos periféricos. No causa hipoglicemia en monoterapia. ↓Peso o neutro. ↓Eventos CV (UKPDS). RAM: GI (náusea, diarrea) y acidosis láctica (rara, con VFG <30). Suspender con VFG <30 mL/min o uso de contraste.'},
            {t:'iSGLT2: dapagliflozina, empagliflozina, canagliflozina', def:'Inhiben cotransportador SGLT2 en TCP → ↓reabsorción glucosa → glucosuria (~70g/día). Beneficios extra: ↓peso, ↓PA, protección cardiorrenal (↓hospitalización por IC, ↓progresión ERC). Aprobados para IC y ERC independiente de DM. RAM: ITU, infecciones genitales por Candida, cetoacidosis euglicémica (rara).'},
            {t:'GLP-1 RA: liraglutida, semaglutida, dulaglutida', def:'Agonistas del receptor de GLP-1 (incretina). ↑Secreción insulina dependiente de glucosa, ↓glucagón, ↓vaciado gástrico, ↑saciedad. Inyectable SC (semaglutida oral disponible). ↓Peso 5-15%. ↓Eventos CV (LEADER, SUSTAIN-6). Nuevo paradigma en DM2+obesidad. RAM: náuseas (transitorias), pancreatitis (rara).'}
          ],
          keywords:['insulina','GLUT4','DM1','DM2','glargina','detemir','NPH','lispro','aspart','glulisina','regular','basal-bolo','sulfonilurea','glibenclamida','glimepirida','metformina','AMPK','gluconeogénesis','iSGLT2','dapagliflozina','empagliflozina','GLP-1','semaglutida','liraglutida','dulaglutida','incretina','HbA1c','célula beta','péptido C','HOMA-IR','hipoglicemia','cetoacidosis','UKPDS','protección cardiorrenal','SUR1','Kir6.2'],
          alerts:[
            {type:'danger',title:'Insulina + sulfonilureas = hipoglicemia severa',text:'Educar: síntomas (sudoración, temblor, confusión), manejo (15g glucosa oral, glucagón IM). β-bloqueantes enmascaran taquicardia.'},
            {type:'warning',title:'Corticoides antagonizan insulina',text:'Hiperglicemia especialmente postprandial. Ajustar insulina rápida al iniciar corticoides. Monitorizar HGT 4 veces/día.'},
            {type:'danger',title:'Glargina: no mezclar con otras insulinas',text:'pH ácido (4.0) precipita con insulinas neutras. Jeringa separada. Limpidez indica buen estado (turbia = deteriorada).'},
            {type:'warning',title:'Metformina: suspender con contraste yodado',text:'Riesgo acidosis láctica. Suspender 48h antes del procedimiento. Reiniciar tras confirmar función renal estable.'}
          ],
          connections:[
            {toId:'fisio-c10pdf',title:'Diabetes Mellitus',desc:'Fisiopatología de DM1/DM2 explica el blanco de cada antidiabético oral e insulina',type:'fisio'},
            {toId:'fisio-c09pdf',title:'Obesidad Visceral',desc:'GLP-1 RA y iSGLT2: nuevo paradigma en obesidad + DM2 + protección cardiorrenal',type:'fisio'},
            {toId:'fisio-serc',title:'ERC / Nefropatía diabética',desc:'iSGLT2 tienen efecto nefroprotector independiente de glicemia. Metformina: ajustar/suspender con VFG <30',type:'fisio'}
          ]
        }
      ]
    },
    // ──────────────────────────────────────────────────────
    // UNIDAD V: SNC
    // ──────────────────────────────────────────────────────
    {
      id:'farm-u5', title:'Unidad V: Farmacología del SNC',
      sessions:[
        {
          id:'farm-s12', title:'Sesión 12: Sistema Neurovegetativo',
          topics:[
            {t:'SNA simpático (adrenérgico) vs parasimpático (colinérgico)', def:'Simpático: noradrenalina → receptores α1 (vasoconstricción), α2 (feedback inhibitorio), β1 (↑FC, ↑contractilidad), β2 (broncodilatación, vasodilatación). Parasimpático: acetilcolina → muscarínicos M1-M5 (↓FC, ↑peristalsis, miosis, ↑secreciones) y nicotínicos (placa neuromuscular, ganglios).'},
            {t:'Agonistas y anticolinérgicos', def:'Agonistas directos: pilocarpina (glaucoma), betanecol (retención urinaria). Anticolinesterásicos reversibles: neostigmina/piridostigmina (miastenia gravis), edrofonio (diagnóstico). Irreversibles: organofosforados → crisis colinérgica (SLUDGE) → atropina + pralidoxima. Atropina: antídoto, premedicación, bradicardia.'},
            {t:'Simpaticomiméticos directos e indirectos', def:'Directos: adrenalina (α+β → anafilaxia, paro), noradrenalina (α>β → shock séptico vasopresor 1ª línea), fenilefrina (α1 puro → descongestivo, hipotensión), salbutamol (β2 → broncodilatación, hiperkalemia). Indirectos: anfetamina, efedrina → liberan NA almacenada.'},
            {t:'Dobutamina: inotrópico β1 selectivo', def:'Agonista β1 predominante → ↑contractilidad cardíaca (inotropismo+) con leve ↑FC y ↓RVS. Fármaco de elección en shock cardiogénico con hipoperfusión. Infusión IV continua (2.5-20 μg/kg/min). NO es vasopresor (no eleva PA por sí solo). Se combina con noradrenalina si hay hipotensión + ↓GC.'}
          ],
          keywords:['simpático','parasimpático','acetilcolina','noradrenalina','adrenalina','dopamina','muscarínico','nicotínico','α1','α2','β1','β2','atropina','salbutamol','fenilefrina','dobutamina','noradrenalina','organofosforado','pralidoxima','neostigmina','piridostigmina','pilocarpina','ipratropio','ondansetrón','5-HT3','triptanes','SLUDGE','crisis colinérgica','miastenia gravis'],
          alerts:[
            {type:'warning',title:'Atropina: síndrome anticolinérgico',text:'"Ciego como murciélago, rojo como tomate, seco como hueso, loco como cabra". Taquicardia, midriasis, retención urinaria, íleo, delirium en ancianos.'},
            {type:'danger',title:'Organofosforados → emergencia',text:'Crisis colinérgica: SLUDGE. Atropina IV dosis altas (2-4 mg cada 5-10 min) + pralidoxima <24h. Decontaminación. UCI.'}
          ],
          connections:[
            {toId:'fisio-s8',title:'Shock',desc:'NA: vasopresor 1ª línea shock séptico. Dobutamina: inotrópico en shock cardiogénico. Adrenalina: anafilaxia',type:'fisio'},
            {toId:'fisio-c03',title:'Asma',desc:'Salbutamol (β2) rescate. Ipratropio (anticolinérgico) complementario en EPOC',type:'fisio'}
          ]
        },
        {
          id:'farm-sansio', title:'Sesión: Ansiolíticos e Hipnóticos',
          topics:[
            {t:'Benzodiazepinas: mecanismo GABAA', def:'Modulación alostérica positiva del receptor GABAA → ↑frecuencia apertura canal Cl- → hiperpolarización neuronal → inhibición. Acciones: ansiólisis (dosis bajas), sedación, hipnosis, anticonvulsivante, miorrelajación central. NO abren el canal por sí solas (diferencia con barbitúricos → menor riesgo en sobredosis aislada).'},
            {t:'Clasificación BZD por vida media', def:'Corta (T1/2 <12h): alprazolam (6-12h), lorazepam (10-20h), midazolam (1.5-2.5h — sedación procedimientos, premedicación anestésica). Intermedia: clonazepam (18-50h — epilepsia, pánico). Larga: diazepam (20-100h, metabolito activo desmetildiazepam). BZD de T1/2 corta → mayor riesgo de dependencia y abstinencia.'},
            {t:'Hipnóticos no BZD (Z-drugs) y buspirona', def:'Zopiclona, zolpidem, zaleplón: actúan en subunidad α1 del GABAA → selectividad hipnótica, respetan mejor la arquitectura del sueño. Menor potencial de dependencia. Buspirona: agonista parcial 5-HT1A. Sin sedación, sin dependencia, sin interacción con alcohol. Inicio de acción: 2-4 semanas (no sirve para crisis aguda).'},
            {t:'Flumazenil: antagonista BZD', def:'Antagonista competitivo del sitio BZD en GABAA. IV exclusivamente. T1/2 45-75 min (más corta que la mayoría de BZD → vigilar RESEDACIÓN). Indicaciones: intoxicación BZD, reversión de sedación post-procedimiento. Cuidado: puede precipitar convulsiones en dependientes crónicos.'}
          ],
          keywords:['benzodiazepina','GABAA','canal cloro','diazepam','alprazolam','lorazepam','midazolam','clonazepam','flurazepam','buspirona','zolpidem','zopiclona','flumazenil','hipnótico','ansiolítico','dependencia','abstinencia','tolerancia','sedación','miorrelajación','anticonvulsivante','barbitúrico','GABA','5-HT1A','modulación alostérica','Beers','caídas','ancianos'],
          alerts:[
            {type:'danger',title:'BZD + opioides = depresión respiratoria letal',text:'FDA black box warning. Muerte por depresión respiratoria sinérgica. Si inevitable: dosis mínimas, naloxona disponible, monitorización continua.'},
            {type:'danger',title:'Suspensión brusca BZD = convulsiones',text:'Retiro gradual (5-10% por semana). La abstinencia de BZD puede ser fatal. Mayor riesgo con BZD de T1/2 corta y uso >4 semanas.'},
            {type:'warning',title:'BZD en ancianos: criterios de Beers',text:'↑Riesgo caídas, fractura de cadera, confusión, delirium, dependencia. Si necesario: lorazepam (sin metabolitos activos) dosis mínima, tiempo limitado.'}
          ],
          connections:[
            {toId:'fisio-c13',title:'Neurofisiopatología',desc:'Status epiléptico → diazepam/midazolam IV. Abstinencia alcohólica → BZD de acción larga (diazepam)',type:'fisio'}
          ]
        },
        {
          id:'farm-spsiq', title:'Sesión: Antidepresivos, Antipsicóticos y Antiparkinsonianos',
          topics:[
            {t:'Antidepresivos: ISRS, tricíclicos, IMAO, IRSN', def:'ISRS (fluoxetina, sertralina, escitalopram): 1ª línea, selectivos 5-HT, perfil seguro. Tricíclicos (amitriptilina, imipramina): eficaces pero RAM anticolinérgicas, cardiotóxicos en sobredosis. IRSN (venlafaxina, duloxetina): dual NA+5-HT, útil en dolor neuropático. IMAO: reacción tiramínica → solo si otros fallan.'},
            {t:'Antipsicóticos típicos y atípicos', def:'Típicos (haloperidol, clorpromazina): bloquean D2 mesolímbico → ↓síntomas positivos (alucinaciones, delirios). RAM: síntomas extrapiramidales (distonía aguda, acatisia, parkinsonismo, discinesia tardía), síndrome neuroléptico maligno. Atípicos (clozapina, risperidona, olanzapina): bloquean D2 + 5-HT2A → menos EPS, mejoran síntomas negativos. Clozapina: gold standard en esquizofrenia resistente pero agranulocitosis → hemograma semanal.'},
            {t:'Antiparkinsonianos: L-DOPA, agonistas DA, iMAO-B', def:'L-DOPA + carbidopa (inhibidor DOPA decarboxilasa periférica): 95% de L-DOPA se metaboliza antes de llegar al SNC sin inhibidor. Mejora bradicinesia > rigidez > temblor. Fluctuaciones on-off tras 2-3 años. Agonistas DA (pramipexol, ropinirol): monoterapia inicial en jóvenes o complemento a L-DOPA. Inhibidores MAO-B (selegilina, rasagilina): prolongan efecto DA endógena. Inhibidores COMT (entacapona): ↑biodisponibilidad L-DOPA.'}
          ],
          keywords:['ISRS','fluoxetina','sertralina','escitalopram','paroxetina','citalopram','tricíclico','amitriptilina','imipramina','IMAO','fenelzina','moclobemida','IRSN','venlafaxina','duloxetina','bupropión','mirtazapina','serotonina','noradrenalina','dopamina','antipsicótico','haloperidol','clorpromazina','clozapina','risperidona','olanzapina','quetiapina','discinesia tardía','síndrome neuroléptico maligno','levodopa','carbidopa','pramipexol','selegilina','entacapona','Parkinson','D2','5-HT2A'],
          alerts:[
            {type:'danger',title:'ISRS + IMAO = síndrome serotoninérgico',text:'Hipertermia, clonus, rigidez muscular, agitación. Potencialmente fatal. Período de lavado: 14 días IMAO→ISRS, 5 semanas fluoxetina→IMAO.'},
            {type:'danger',title:'IMAO + tiramina = crisis hipertensiva',text:'Queso curado, vino tinto, embutidos → liberación masiva de NA → PA >200 mmHg. Dieta estricta obligatoria.'},
            {type:'danger',title:'Clozapina: agranulocitosis obligatoria',text:'1-2% incidencia. Hemograma semanal primeras 18 semanas, luego mensual. Suspender si neutrófilos <1500/mm³.'},
            {type:'danger',title:'Haloperidol: síndrome neuroléptico maligno',text:'Hipertermia >40°C + rigidez + CK>10000 + alteración consciencia. Emergencia. Suspender fármaco + dantroleno IV + bromocriptina.'}
          ],
          connections:[
            {toId:'fisio-c13',title:'Neurofisiopatología',desc:'Parkinson: degeneración SNpc. Alzheimer: déficit colinérgico. Depresión: hipótesis monoaminérgica → blancos farmacológicos',type:'fisio'}
          ]
        },
        {
          id:'farm-saline', title:'Sesión: Alzheimer — Inhibidores AChE y Memantina',
          topics:[
            {t:'Enfermedad de Alzheimer: déficit colinérgico', def:'Degeneración del núcleo basal de Meynert → ↓acetilcolina cortical → deterioro cognitivo progresivo. Además: placas β-amiloide (Aβ42, neurotóxicas) y ovillos neurofibrilares (tau hiperfosforilada). Biomarcadores: amiloide PET, tau en LCR. La pérdida colinérgica es la diana farmacológica actual principal.'},
            {t:'Inhibidores de AChE: donepezilo, rivastigmina, galantamina', def:'Inhiben acetilcolinesterasa → ↑ACh en sinapsis corticales → mejoran síntomas cognitivos y funcionales (no modifican la enfermedad). Donepezilo: 1 dosis nocturna. Rivastigmina: parches transdérmicos disponibles. Galantamina: además modula receptores nicotínicos. Indicados en EA leve-moderada. Eficacia modesta pero significativa.'},
            {t:'Memantina: antagonista NMDA', def:'Antagonista no competitivo del receptor NMDA (glutamato). Bloquea excitotoxicidad glutamatérgica (exceso de Ca2+ → muerte neuronal). Para EA moderada-severa. Puede combinarse con inhibidores AChE. Buena tolerancia. Metabolismo renal (ajustar en ERC).'}
          ],
          keywords:['Alzheimer','donepezilo','rivastigmina','galantamina','memantina','acetilcolinesterasa','AChE','NMDA','glutamato','β-amiloide','tau','Meynert','deterioro cognitivo','LCR','PET amiloide','neurodegenerativo','placa senil','ovillo neurofibrilar','excitotoxicidad','demencia'],
          alerts:[
            {type:'warning',title:'Donepezilo: efectos colinérgicos',text:'Bradicardia, síncope, náuseas, diarrea. Iniciar dosis baja nocturna (5mg → 10mg). Precaución en cardiopatía.'},
            {type:'danger',title:'Anticolinérgicos en Alzheimer: CONTRAINDICADOS',text:'Empeoran cognición directamente. Revisar TODA la medicación (antihistamínicos sedantes, antiespasmódicos, tricíclicos). Anticholinergic Burden Scale.'}
          ],
          connections:[
            {toId:'fisio-c13',title:'Neurofisiopatología',desc:'Bases fisiopatológicas: placas Aβ, tau, déficit colinérgico → dianas farmacológicas actuales',type:'fisio'}
          ]
        }
      ]
    },
    // ──────────────────────────────────────────────────────
    // UNIDAD VI: DIGESTIVO, AINEs Y OTROS
    // ──────────────────────────────────────────────────────
    {
      id:'farm-u6', title:'Unidad VI: Digestivo, AINEs y Otros',
      sessions:[
        {
          id:'farm-sgastro', title:'Sesión: Sistema Digestivo — IBP y Gastroprotección',
          topics:[
            {t:'Célula parietal y mecanismo de secreción de HCl', def:'3 estímulos: ACh (nervio vago → M3), gastrina (células G → CCK-B), histamina (células ECL → H2). Los 3 convergen en la bomba H+/K+-ATPasa (cara apical). La bomba es el efector final → blanco de IBP. Inhibir H2 solo bloquea un estímulo; IBP bloquea el paso final → máxima supresión ácida.'},
            {t:'IBP: omeprazol, lansoprazol, pantoprazol, esomeprazol', def:'Profármacos activados en el canalículo secretor ácido de la célula parietal. Bloqueo IRREVERSIBLE de H+/K+-ATPasa. Dosis única matutina en ayunas 30 min antes del desayuno. Supresión ácida >90%. Indicaciones: ERGE, úlcera, Zollinger-Ellison, erradicación H. pylori, gastroprotección por AINEs.'},
            {t:'Vonoprazan (P-CAB): nueva generación', def:'Inhibidor competitivo REVERSIBLE de la bomba de protones. No requiere activación ácida (funciona desde primera dosis). Independiente de CYP2C19 (ventaja sobre IBP). Acción más rápida y sostenida. Aprobado en Japón para ERGE y erradicación H. pylori. Podría reemplazar IBP en el futuro.'},
            {t:'Protectores gástricos y erradicación de H. pylori', def:'Sucralfato: polímero que forma barrera física sobre la úlcera (requiere pH ácido → no combinar con IBP). Misoprostol: análogo PGE1 → gastroprotección en pacientes que requieren AINEs crónicos (contraindicado en embarazo). H. pylori: terapia triple (IBP + claritromicina + amoxicilina × 14 días). Resistencia a claritromicina >15% → terapia cuádruple con bismuto.'}
          ],
          keywords:['IBP','omeprazol','lansoprazol','pantoprazol','esomeprazol','rabeprazol','vonoprazan','P-CAB','anti-H2','cimetidina','famotidina','ranitidina','antiácido','célula parietal','H+/K+-ATPasa','H. pylori','ERGE','úlcera gástrica','Zollinger-Ellison','sucralfato','misoprostol','bismuto','terapia triple','gastroprotección','bomba de protones'],
          alerts:[
            {type:'warning',title:'IBP crónico: efectos adversos',text:'Hipomagnesemia, ↑fracturas óseas, infección C. difficile, déficit B12, nefritis intersticial. Evaluar periódicamente necesidad de continuar.'},
            {type:'danger',title:'Omeprazol + clopidogrel',text:'Omeprazol inhibe CYP2C19 → ↓activación clopidogrel → ↓efecto antiagregante. Usar pantoprazol como alternativa.'},
            {type:'danger',title:'Misoprostol: contraindicado en embarazo',text:'Análogo PGE1 → contracción uterina → abortifaciente. Advertir a mujeres en edad fértil.'}
          ],
          connections:[
            {toId:'fisio-c01pdf',title:'Inflamación',desc:'PGE2 protege mucosa gástrica (vía COX-1). AINEs inhiben COX-1 → gastropatía → necesidad de IBP',type:'fisio'}
          ]
        },
        {
          id:'farm-saines', title:'Sesión 16: AINEs, Anestésicos y Corticoides',
          topics:[
            {t:'AINEs: mecanismo COX-1/COX-2 y clasificación', def:'No selectivos (ibuprofeno, naproxeno, diclofenaco, ketorolaco): inhiben COX-1 + COX-2 → antiinflamatorio, analgésico, antipirético, pero ↓PGE2 gástrica (gastropatía) y ↓TXA2 plaquetaria (sangrado). Selectivos COX-2 (celecoxib, etoricoxib): ↓riesgo GI pero ↑riesgo CV trombótico. Ketorolaco: el más potente analgésico, solo ≤5 días.'},
            {t:'Paracetamol y metamizol', def:'Paracetamol: analgésico-antipirético, NO antiinflamatorio. Mecanismo central (inhibición COX-3 central discutida). Seguro a dosis terapéuticas (<4g/día adulto). Hepatotóxico en sobredosis: NAPQI (metabolito reactivo) satura glutatión → necrosis centrolobulillar. Antídoto: N-acetilcisteína IV (dentro de 8-10h). Metamizol/dipirona: analgésico potente pero riesgo de agranulocitosis (restringido en muchos países).'},
            {t:'Anestésicos locales: ésteres y amidas', def:'Bloquean canales Na+ voltaje-dependientes → impiden despolarización → bloqueo conducción nerviosa. Ésteres (procaína, tetracaína): metabolizados por pseudocolinesterasa plasmática. Amidas (lidocaína, bupivacaína, ropivacaína): metabolismo hepático, más estables. Orden de bloqueo: dolor > temperatura > tacto > presión > motor.'},
            {t:'Corticosteroides como antiinflamatorios e inmunosupresores', def:'Inhiben fosfolipasa A2 (vía lipocortina) → bloquean TODA la cascada araquidónico (PG + leucotrienos). Además inhiben NF-κB → ↓citoquinas proinflamatorias. Potencia: hidrocortisona < prednisona < metilprednisolona < dexametasona. RAM crónicas: Cushing, osteoporosis, hiperglicemia, inmunosupresión, cataratas, miopatía, insuficiencia suprarrenal al suspender.'}
          ],
          keywords:['AINE','COX-1','COX-2','ibuprofeno','naproxeno','diclofenaco','ketorolaco','piroxicam','indometacina','celecoxib','etoricoxib','paracetamol','acetaminofén','N-acetilcisteína','NAPQI','metamizol','anestésico local','lidocaína','bupivacaína','ropivacaína','procaína','corticoide','prednisona','dexametasona','hidrocortisona','metilprednisolona','fosfolipasa A2','lipocortina','NF-κB','Cushing','gastropatía','propofol','ketamina','inmunosupresor','ciclosporina','tacrolimus'],
          alerts:[
            {type:'danger',title:'AINE + anticoagulantes = sangrado GI',text:'Doble mecanismo: gastropatía + antiplaquetario. Gastroprotección con IBP obligatoria si necesario.'},
            {type:'danger',title:'AINE + IECA = "triple whammy"',text:'AINE + IECA + diurético → IRA prerrenal. Evitar la triple combinación, especialmente en ancianos y ERC.'},
            {type:'danger',title:'Paracetamol >4g/día = hepatotoxicidad',text:'Dosis tóxica: >150 mg/kg. N-acetilcisteína IV máxima efectividad <8h. Nomograma de Rumack-Matthew para decisión.'},
            {type:'danger',title:'Bupivacaína: cardiotoxicidad',text:'Inyección intravascular accidental → arritmias ventriculares graves, paro cardíaco resistente. Tratamiento: Intralipid 20% IV.'}
          ],
          connections:[
            {toId:'fisio-c01pdf',title:'Inflamación',desc:'AINEs actúan en COX (distal). Corticoides en fosfolipasa A2 (proximal). Bloqueo complementario de la cascada',type:'fisio'},
            {toId:'fisio-s17',title:'AKI',desc:'AINEs: principal causa farmacológica de AKI prerrenal (↓PGE2 vasodilatadora renal → vasoconstricción aferente)',type:'fisio'}
          ]
        },
        {
          id:'farm-svacunas', title:'Sesión: Vacunas e Inmunosupresores',
          topics:[
            {t:'Tipos de vacunas y calendario MINSAL Chile', def:'Vivas atenuadas (BCG, SRP, varicela, fiebre amarilla): generan inmunidad potente, contraindicadas en inmunosuprimidos. Inactivadas (influenza, hepatitis A, rabia). Subunitarias (hepatitis B, VPH). Toxoides (difteria, tétanos). Conjugadas (neumococo, meningococo, Hib). ARNm (COVID-19): nueva plataforma, rápida producción. Cadena de frío: 2-8°C obligatorio.'},
            {t:'Inmunosupresores: ciclosporina, tacrolimus, micofenolato', def:'Ciclosporina/tacrolimus: inhiben calcineurina → ↓NFAT → ↓IL-2 → ↓activación linfocitos T. Pilar en trasplante. Ciclosporina: nefrotóxica, HTA, hirsutismo. Tacrolimus: 100× más potente, ↓nefrotoxicidad pero diabetes post-trasplante. Micofenolato: inhibe síntesis de novo de purinas → ↓proliferación linfocitaria. Ventana terapéutica estrecha en todos → monitorización de niveles.'}
          ],
          keywords:['vacuna','inmunización','atenuada','inactivada','subunitaria','toxoide','conjugada','ARNm','calendario vacunal','cadena de frío','ciclosporina','tacrolimus','micofenolato','azatioprina','basiliximab','calcineurina','NFAT','IL-2','trasplante','inmunosupresión','linfocito T','nefrotoxicidad','rechazo'],
          alerts:[
            {type:'danger',title:'Vacunas vivas en inmunosuprimidos: contraindicadas',text:'Riesgo de enfermedad diseminada por el agente vacunal. Aplica a: trasplantados, quimioterapia, corticoides altas dosis, VIH con CD4 <200.'},
            {type:'warning',title:'Ciclosporina/tacrolimus: ventana estrecha',text:'Nefrotoxicidad dosis-dependiente + múltiples interacciones CYP3A4. Monitorizar niveles séricos. Ajustar con inhibidores (azoles) e inductores (rifampicina).'}
          ],
          connections:[
            {toId:'fisio-s14',title:'Hematooncología e Inmunidad',desc:'Inmunidad adaptativa → memoria inmunológica (base vacunal). Quimioterapia → inmunosupresión → riesgo infeccioso',type:'fisio'}
          ]
        }
      ]
    }
  ]
},

// ============================================================
// FISIOPATOLOGÍA — ENF3014 (estructura compacta con defs)
// ============================================================
fisio: {
  units: [
    {
      id:'fisio-u1', title:'Unidad I: Fisiopatología General y Celular',
      sessions:[
        {
          id:'fisio-c01pptx', title:'Clase 01: Adaptación Celular',
          topics:[
            {t:'Homeostasis y respuesta adaptativa', def:'Homeostasis: equilibrio dinámico del medio interno. Frente a un estresor, la célula intenta adaptarse; si la injuria supera la capacidad adaptativa → lesión → muerte celular. Factores que determinan la respuesta: reserva fisiológica, duración/intensidad del estímulo, genética, edad, nutrición.'},
            {t:'Atrofia: ↓tamaño celular', def:'Reducción del volumen celular por desbalance síntesis/degradación proteica (vía ubiquitina-proteosoma). Causas: desuso (inmovilización), hipoxia crónica, déficit nutricional, pérdida de estímulo endocrino (menopausia → atrofia endometrial), presión persistente (hidronefrosis). Reversible si se elimina la causa.'},
            {t:'Hipertrofia: ↑tamaño celular (sin nuevas células)', def:'Aumento del tamaño celular por ↑síntesis proteica y organelos. Fisiológica: músculo esquelético (ejercicio), útero (embarazo). Patológica: HVI por HTA → inicialmente compensadora, luego → IC. Estímulos: sobrecarga hemodinámica, factores de crecimiento, hormonas.'},
            {t:'Hiperplasia: ↑número de células', def:'Aumento del número de células por mitosis. Solo en tejidos con capacidad proliferativa (NO en neuronas ni cardiomiocitos adultos). Hormonal (mama en pubertad), compensadora (hígado post-hepatectomía), patológica (hiperplasia endometrial → riesgo de displasia). Factores de crecimiento → up-regulation vías mitóticas.'},
            {t:'Metaplasia, displasia y progresión neoplásica', def:'Metaplasia: cambio de un tipo celular diferenciado por otro (reversible). Ej: Esófago de Barrett (epitelio escamoso → intestinal por reflujo crónico → ↑30-40× riesgo adenocarcinoma). Displasia: crecimiento desordenado, pérdida de arquitectura → lesión preneoplásica. La secuencia metaplasia → displasia → neoplasia es el paradigma de la carcinogénesis.'},
            {t:'Calcificación patológica: distrófica y metastásica', def:'Distrófica: depósito Ca2+ en tejidos ya dañados/necróticos (ej. valvas cardíacas escleróticas, ateromas). Calcemia NORMAL. Metastásica: depósito Ca2+ en tejidos normales por HIPERCALCEMIA: IRC (↓excreción), hiperparatiroidismo (↑PTH), hipervitaminosis D, metástasis osteolíticas.'}
          ],
          keywords:['atrofia','hipertrofia','hiperplasia','metaplasia','displasia','neoplasia','esteatosis','calcificación distrófica','calcificación metastásica','Esófago de Barrett','homeostasis','noxa','injuria','reserva fisiológica','ubiquitina-proteosoma','HVI','TGF-β','carcinogénesis','lesión preneoplásica'],
          alerts:[{type:'info',title:'Secuencia: normal → metaplasia → displasia → neoplasia',text:'El Esófago de Barrett requiere vigilancia endoscópica periódica por su potencial de progresión a adenocarcinoma esofágico.'}],
          connections:[{toId:'farm-s6',title:'Antihipertensivos',desc:'HTA → HVI (hipertrofia patológica). IECA/β-bloqueantes revierten la remodelación cardíaca',type:'farm'}]
        },
        {
          id:'fisio-c02pptx', title:'Clase 02: Lesión y Muerte Celular',
          topics:[
            {t:'Depleción de ATP: modelo isquémico', def:'Isquemia → ↓O2 → ↓fosforilación oxidativa → depleción ATP → falla Na+/K+ ATPasa → edema celular + acumulación Ca2+ intracelular → activación fosfolipasas, proteasas, endonucleasas → destrucción membranas → muerte celular. Es el mecanismo central del infarto (miocárdico, cerebral, renal).'},
            {t:'Estrés oxidativo: ERO y ERN', def:'Desbalance entre producción y eliminación de especies reactivas de oxígeno (O2•-, H2O2, OH•) y nitrógeno (ONOO-). Fuentes: mitocondria, NADPH oxidasa, NOS desacoplada. Daños: peroxidación lipídica (membranas), oxidación proteínas, lesiones ADN → mutaciones, apoptosis, inflamación. Defensa: SOD, catalasa, glutatión.'},
            {t:'Apoptosis vs necrosis', def:'Apoptosis (muerte programada): membrana intacta, cuerpos apoptóticos, SIN inflamación. Caspasas ejecutoras. Vía intrínseca (mitocondrial: citocromo C → caspasa 9) y extrínseca (receptores de muerte: Fas, TNF → caspasa 8). Necrosis (muerte accidental): tumefacción, ruptura membrana, liberación enzimas → inflamación secundaria. El infarto es necrosis. Ambas pueden coexistir.'}
          ],
          keywords:['ERO','ERN','estrés oxidativo','depleción ATP','citocromo C','apoptosis','necrosis','caspasas','peroxidación lipídica','isquemia','hipoxia','hipoxemia','superóxido','glutatión','SOD','catalasa','Na+/K+ ATPasa','calcio intracelular','mitocondria','infarto','necroptosis'],
          alerts:[{type:'info',title:'Apoptosis ≠ necrosis',text:'Apoptosis: programada, sin inflamación (ej. recambio celular, embriogénesis). Necrosis: accidental, con inflamación (ej. infarto, quemaduras). Implicaciones terapéuticas distintas.'}],
          connections:[
            {toId:'farm-saines',title:'Paracetamol y AINEs',desc:'Paracetamol sobredosis → NAPQI → depleción glutatión → estrés oxidativo → necrosis hepática centrolobulillar',type:'farm'}
          ]
        },
        {
          id:'fisio-c01pdf', title:'Inflamación Aguda y Crónica',
          topics:[
            {t:'Signos cardinales y respuesta vascular', def:'Rubor (vasodilatación → hiperemia), tumor (edema por ↑permeabilidad capilar), calor (hiperemia + metabolismo), dolor (PGE2 + bradicinina sensibilizan nociceptores), pérdida de función. Vasodilatación arteriolar (histamina, NO) → ↑flujo sanguíneo → edema proteico (exudado).'},
            {t:'Migración leucocitaria y fagocitosis', def:'Neutrófilos: marginación (selectinas E, P) → rodamiento → adhesión firme (integrinas: ICAM-1, VCAM-1) → diapédesis (PECAM-1) → quimiotaxis (C5a, LTB4, IL-8). Fagocitosis: reconocimiento (opsoninas: IgG, C3b) → englobamiento → destrucción intracelular (mieloperoxidasa, ERO). Neutrófilos = 1as 24-48h; macrófagos = 48-72h+.'},
            {t:'Cascada ácido araquidónico: COX y LOX', def:'Fosfolipasa A2 → ácido araquidónico → COX-1 (constitutiva: PGE2 gástrica protectora, TXA2 plaquetaria) y COX-2 (inducible: PGE2 inflamatoria, PGI2 vasodilatadora). LOX → leucotrienos LTB4 (quimiotaxis neutrófilos) y LTC4/D4/E4 (=SRS-A: broncoconstricción 1000× más potente que histamina). Diana de AINEs (COX), corticoides (fosfolipasa A2) y montelukast (leucotrienos).'},
            {t:'Sistema del complemento e inflamación crónica', def:'3 vías de activación: clásica (Ag-Ac), alternativa (superficie microbiana), lectinas (MBL). Efectores: C3a/C5a (anafilotoxinas → degranulación mastocitos), C3b (opsonización), C5b-9 MAC (lisis). Inflamación crónica: macrófagos activados, linfocitos, granulomas (TBC, sarcoidosis), fibrosis. Transición aguda→crónica cuando persiste el estímulo.'}
          ],
          keywords:['inflamación aguda','inflamación crónica','fagocitosis','diapédesis','quimiotaxis','ácido araquidónico','COX-1','COX-2','LOX','complemento','prostaglandinas','leucotrienos','histamina','bradicinina','opsonina','C3b','C5a','MAC','granuloma','fibrosis','selectinas','integrinas','neutrófilos','macrófagos','IL-8','LTB4'],
          alerts:[{type:'info',title:'COX-1 vs COX-2: clave clínica',text:'COX-1 constitutiva: protección gástrica + hemostasia. COX-2 inducible: inflamación. AINEs no selectivos inhiben ambas → gastropatía. COX-2 selectivos (celecoxib) protegen estómago pero ↑riesgo trombótico.'}],
          connections:[
            {toId:'farm-s5',title:'Antihistamínicos',desc:'Histamina liberada por mastocitos → receptores H1 → bloqueados por antihistamínicos',type:'farm'},
            {toId:'farm-saines',title:'AINEs y Corticoides',desc:'AINEs inhiben COX (distal). Corticoides inhiben fosfolipasa A2 (proximal → bloquean toda la cascada)',type:'farm'}
          ]
        },
        {
          id:'fisio-cicatr', title:'Cicatrización y sus Etapas',
          topics:[
            {t:'5 fases de cicatrización', def:'1) Hemostasia (inmediata): vasoconstricción + tapón plaquetario + fibrina. 2) Inflamación (24-72h): neutrófilos → macrófagos → limpieza. 3) Granulación (día 3-21): angiogénesis, fibroblastos, colágeno III. 4) Epitelización: migración queratinocitos, contracción. 5) Remodelación (semanas-2 años): colágeno III→I, 80% fuerza tensil máxima. CADA FASE DEPENDE DE LA ANTERIOR.'},
            {t:'Factores que alteran cicatrización', def:'Negativos: DM (↓fagocitosis neutrófilos, microangiopatía), corticoides (inhiben fase inflamatoria), AINEs (↓PGE2 → ↓angiogénesis), desnutrición (↓colágeno por ↓vitamina C, zinc), infección, tabaco (vasoconstricción → hipoxia tisular), edad avanzada. Positivos: buena nutrición, control glicémico, oxigenación tisular.'}
          ],
          keywords:['hemostasia','granulación','epitelización','remodelación','colágeno','angiogénesis','fibroblastos','queratinocitos','cicatrización','herida','fibrina','vitamina C','zinc','pie diabético','úlcera crónica','TGF-β','PDGF','VEGF','contracción'],
          alerts:[{type:'warning',title:'AINEs y corticoides retrasan cicatrización',text:'Ambos inhiben mediadores inflamatorios necesarios para las fases iniciales. Especial cuidado en heridas quirúrgicas, pie diabético y úlceras crónicas.'}],
          connections:[
            {toId:'farm-saines',title:'AINEs y corticoides',desc:'Inhibición inflamatoria → retraso de granulación y remodelación',type:'farm'},
            {toId:'fisio-c10pdf',title:'Diabetes Mellitus',desc:'DM → disfunción neutrófilos + microangiopatía → cicatrización defectuosa → pie diabético',type:'fisio'}
          ]
        }
      ]
    },
    {
      id:'fisio-u2', title:'Unidad II: Fisiopatología Respiratoria',
      sessions:[
        {id:'fisio-c02pdf',title:'Generalidades Respiratorias',
          topics:[
            {t:'Relación V/Q y espirometría',def:'V/Q normal ~0.8. Shunt (V/Q=0): unidad perfundida sin ventilación (atelectasia, neumonía, SDRA). Espacio muerto (V/Q=∞): ventilada sin perfusión (TEP). VEF1/CVF <0.7 post-broncodilatador = patrón obstructivo (EPOC, asma). CVF ↓ con VEF1/CVF normal/↑ = patrón restrictivo (fibrosis, obesidad).'}
          ],
          keywords:['V/Q','espirometría','VEF1','CVF','patrón restrictivo','patrón obstructivo','difusión','shunt','espacio muerto','gradiente A-a','atelectasia','TEP'],
          alerts:[],connections:[{toId:'farm-s12',title:'Broncodilatadores',desc:'β2-agonistas y anticolinérgicos revierten obstrucción bronquial → mejoran VEF1',type:'farm'}]
        },
        {id:'fisio-c03',title:'Clase 03: Asma Bronquial (GINA)',
          topics:[
            {t:'Fisiopatología del asma: inflamación Th2 y remodelación',def:'Inflamación crónica eosinofílica → hiperreactividad bronquial → broncoconstricción reversible. Alérgeno + IgE → mastocitos → histamina + PG + leucotrienos (fase temprana, minutos). Luego eosinófilos + linfocitos Th2 → inflamación sostenida + remodelación (colágeno subepitelial, hiperplasia muscular, hiperplasia glandular). La remodelación es parcialmente irreversible.'},
            {t:'Tratamiento escalonado GINA',def:'Paso 1-2: ICS dosis baja + formoterol a demanda (ya no SABA solo). Paso 3: ICS dosis baja + LABA diario. Paso 4: ICS dosis media-alta + LABA. Paso 5: agregar anti-IgE (omalizumab), anti-IL-5 (mepolizumab), LAMA (tiotropio). El SABA (salbutamol) como monoterapia está DESACONSEJADO desde GINA 2019.'}
          ],
          keywords:['GINA','hiperreactividad bronquial','Th2','IgE','mastocitos','eosinófilos','remodelación vía aérea','broncoconstricción','salbutamol','ICS','LABA','formoterol','budesonida','fluticasona','montelukast','omalizumab','mepolizumab','atopia'],
          alerts:[{type:'info',title:'GINA actualizado: no SABA en monoterapia',text:'Desde 2019 se recomienda ICS+formoterol a demanda desde paso 1. Monoterapia con SABA → subdiagnóstico de inflamación → remodelación silente.'}],
          connections:[{toId:'farm-s5',title:'Antihistamínicos y cascada araquidónico',desc:'Histamina, leucotrienos y PG son mediadores directos de la crisis asmática',type:'farm'}]
        },
        {id:'fisio-c04',title:'Clase 04: EPOC (GOLD)',
          topics:[
            {t:'Bronquitis crónica y enfisema',def:'Bronquitis crónica: tos productiva ≥3 meses/año × 2 años consecutivos. Hiperplasia glándulas mucosas (índice de Reid >0.4). Enfisema: destrucción paredes alveolares por desbalance proteasas (elastasa neutrofílica)/antiproteasas (α1-antitripsina) → pérdida retracción elástica → atrapamiento aéreo → hiperinsuflación. GOLD: VEF1 post-BD <0.7 confirma diagnóstico.'},
            {t:'Clasificación y tratamiento GOLD',def:'GOLD 1 (leve ≥80%), 2 (moderado 50-79%), 3 (grave 30-49%), 4 (muy grave <30%). Grupo A: SABA/SAMA prn. Grupo B: LAMA (tiotropio, 1ª elección). Grupo E (exacerbador): LAMA+LABA ± ICS si eosinófilos ≥300. Abandonar tabaco es la ÚNICA intervención que modifica historia natural. O2 domiciliario si PaO2 <55 mmHg.'}
          ],
          keywords:['GOLD','EPOC','bronquitis crónica','enfisema','VEF1','proteasas','antiproteasas','α1-antitripsina','atrapamiento aéreo','LAMA','LABA','tiotropio','indacaterol','ICS','exacerbación','tabaquismo','hiperinsuflación','índice de Reid','drive hipóxico'],
          alerts:[{type:'danger',title:'O2 en EPOC: target 88-92%',text:'EPOC severo con hipercapnia crónica → drive ventilatorio hipóxico. O2 excesivo (>92%) → ↓ventilación → narcosis CO2. NUNCA SpO2 objetivo 100%.'}],
          connections:[{toId:'farm-s12',title:'Broncodilatadores SNA',desc:'LAMA (tiotropio): anticolinérgico inhalado 1ª línea. LABA: simpaticomimético β2 de acción larga',type:'farm'}]
        },
        {id:'fisio-c05',title:'Edema Pulmonar y SDRA',
          topics:[
            {t:'Edema cardiogénico vs no cardiogénico',def:'Cardiogénico (hidrostático): IC izquierda → ↑presión capilar pulmonar (>18 mmHg) → transudado → edema alveolar. Responde a diuréticos. No cardiogénico (↑permeabilidad): daño endotelial directo (sepsis, aspiración, trauma) → exudado proteico → SDRA. NO responde a diuréticos → ventilación protectora.'},
            {t:'SDRA: criterios de Berlín 2012',def:'Inicio agudo (<7 días). Opacidades bilaterales (Rx o TC, no explicadas por derrame o atelectasia). Origen no cardíaco (descartar ICC). PaO2/FiO2 con PEEP ≥5: leve ≤300, moderado ≤200, severo ≤100. Manejo: VT 6 mL/kg peso ideal, plateau <30 cmH2O, PEEP titulado, posición prono si P/F <150.'}
          ],
          keywords:['Starling','edema hidrostático','edema por permeabilidad','SDRA','Berlín 2012','PaO2/FiO2','PEEP','cardiogénico','no cardiogénico','transudado','exudado','ventilación protectora','prono','ARDSnet','Kigali'],
          alerts:[{type:'info',title:'SDRA severo: prono mejora mortalidad',text:'PROSEVA trial: posición prono ≥16h/día en P/F <150 reduce mortalidad de 32% a 16%. Iniciar precozmente.'}],
          connections:[{toId:'farm-s8',title:'Diuréticos',desc:'Furosemida IV en edema cardiogénico (↓precarga). En SDRA: balance hídrico restrictivo, NO diuréticos como tratamiento primario',type:'farm'}]
        },
        {id:'fisio-c06',title:'Insuficiencia Respiratoria',
          topics:[
            {t:'IR tipo I (hipoxémica) vs tipo II (hipercápnica)',def:'Tipo I: PaO2 <60 mmHg, PaCO2 normal/↓. Falla del INTERCAMBIADOR (pulmón): neumonía, SDRA, TEP, fibrosis. Tipo II: PaCO2 >50 mmHg ± hipoxemia. Falla de la BOMBA (ventilación): EPOC severo, falla neuromuscular (Guillain-Barré, miastenia), sobredosis sedantes, obesidad extrema. 4 mecanismos de hipoxemia: alteración V/Q (#1), shunt, hipoventilación, alteración difusión.'}
          ],
          keywords:['IR tipo I','IR tipo II','hipoxemia','hipercapnia','falla de bomba','falla de intercambiador','shunt','hipoventilación','PaO2','PaCO2','ventilación mecánica','VMNI','oxigenoterapia'],
          alerts:[],connections:[{toId:'farm-s12',title:'SNA y sedantes',desc:'Sedantes/opioides → ↓drive ventilatorio → IR tipo II. β2-agonistas mejoran broncoespasmo → corrigen alteración V/Q',type:'farm'}]
        }
      ]
    },
    {
      id:'fisio-u3', title:'Unidad III: Fisiopatología Cardiovascular',
      sessions:[
        {id:'fisio-c07',title:'Clase 07: Insuficiencia Cardíaca',
          topics:[
            {t:'IC con FEVI reducida vs preservada',def:'FEVIr (<40%): falla sistólica (↓contractilidad). Forward failure: ↓GC → hipoperfusión (fatiga, oliguria). Backward failure: congestión (IC izquierda → EPA, disnea, ortopnea; IC derecha → edema periférico, hepatomegalia, IY). FEVIp (≥50%): falla diastólica (rigidez ventricular → ↓llenado). Mecanismos compensadores: SRAA, SNS, ADH, remodelación → deletéreos a largo plazo.'},
            {t:'Clasificación NYHA y tratamiento pilar',def:'NYHA I: sin limitación. II: síntomas con actividad ordinaria. III: síntomas con mínimo esfuerzo. IV: síntomas en reposo. Tratamiento FEVIr que reduce mortalidad: IECA (o sacubitril/valsartán) + β-bloqueante (carvedilol/bisoprolol/metoprolol) + espironolactona + iSGLT2. Los 4 deben iniciarse y titularse. Diuréticos de asa para control de congestión (no reducen mortalidad).'}
          ],
          keywords:['FEVI','FEVIr','FEVIp','forward failure','backward failure','remodelación cardíaca','NYHA','ACC/AHA','congestión','gasto cardíaco','BNP','NT-proBNP','edema pulmonar','sacubitril/valsartán','iSGLT2','RALES','PARADIGM-HF','disnea','ortopnea','ingurgitación yugular'],
          alerts:[{type:'info',title:'4 pilares que reducen mortalidad en FEVIr',text:'IECA/ARNI + β-bloqueante + espironolactona + iSGLT2. Cada clase debe iniciarse tempranamente y titularse a dosis objetivo.'}],
          connections:[{toId:'farm-s6',title:'Antihipertensivos',desc:'IECA y β-bloqueantes: piedra angular de IC-FEVIr. Reducen remodelación + mortalidad',type:'farm'},{toId:'farm-s8',title:'Diuréticos',desc:'Furosemida para alivio congestión. Espironolactona ↓mortalidad (RALES)',type:'farm'}]
        },
        {id:'fisio-s8',title:'Clase 08: Shock',
          topics:[
            {t:'Clasificación y manejo del shock',def:'Hipovolémico: hemorragia (ATLS I-IV), deshidratación → cristaloides + hemoderivados. Cardiogénico: IAM extenso → GC↓, PCP↑ → dobutamina ± balón intraaórtico. Distributivo: séptico (↑NO → vasodilatación, 1ª línea: noradrenalina + ATB <1h), anafiláctico (adrenalina IM 0.3-0.5mg), neurogénico. Obstructivo: TEP masivo, neumotórax tensión, taponamiento → tratar causa.'},
            {t:'Shock séptico: fisiopatología y bundles',def:'LPS → TLR4 → NF-κB → TNF-α, IL-1, IL-6 → iNOS → ↑NO → vasodilatación masiva + ↓RVS + canales KATP + ↓vasopresina. SvO2 <65% = extracción compensadora. Lactato >2 = hipoperfusión. Bundle 1h Surviving Sepsis: lactato, hemocultivos, ATB <1h, cristaloides 30 mL/kg, vasopresores si PAM <65. Cada hora de retraso en ATB = ↑7% mortalidad.'}
          ],
          keywords:['DO2','VO2','SvO2','shock hipovolémico','cardiogénico','distributivo','obstructivo','séptico','anafiláctico','neurogénico','ATLS','lactato','CID','FMO','vasopresores','noradrenalina','dobutamina','adrenalina','vasopresina','PAM','Surviving Sepsis','bundle','TLR4','iNOS','NO'],
          alerts:[{type:'danger',title:'Shock séptico: ATB <1h',text:'Cada hora de retraso = ↑7% mortalidad. Hemocultivos ANTES de ATB pero sin retrasar antibioterapia. Noradrenalina si PAM <65 mmHg pese a volumen.'}],
          connections:[{toId:'farm-s12',title:'Simpaticomiméticos',desc:'NA (vasopresor α1 1ª línea séptico), dobutamina (β1 inotrópico cardiogénico), adrenalina (α+β anafilaxia)',type:'farm'},{toId:'farm-s3',title:'Antibióticos',desc:'ATB empírico amplio espectro <1h en shock séptico. Cobertura según foco sospechado',type:'farm'}]
        },
        {id:'fisio-saterom',title:'Ateromatosis',
          topics:[
            {t:'Formación y ruptura de placa aterosclerótica',def:'Disfunción endotelial (↓NO, ↑adhesión) → infiltración LDL → oxidación LDL → macrófagos fagocitan → células espumosas → estría grasa → placa fibrosa (capa fibrosa + core lipídico). Placa vulnerable: capa fina, core lipídico grande, inflamación activa → ruptura → exposición Factor Tisular + colágeno → vía extrínseca coagulación → trombo agudo → SCA. Estatinas estabilizan la placa (↓inflamación, engrosan capa fibrosa).'}
          ],
          keywords:['disfunción endotelial','placa aterosclerótica','ruptura de placa','Factor Tisular','remodelación vascular','trombosis','células espumosas','LDL oxidado','Lp(a)','estría grasa','capa fibrosa','core lipídico','placa vulnerable'],
          alerts:[],connections:[{toId:'farm-slipid',title:'Hipolipemiantes',desc:'Estatinas estabilizan placa vulnerable y reducen eventos CV independientemente de LDL',type:'farm'},{toId:'farm-s9',title:'Antiagregantes',desc:'Ruptura de placa → activación plaquetaria → trombo. AAS+clopidogrel bloquean este proceso',type:'farm'}]
        },
        {id:'fisio-c09pptx',title:'Clase 09: Hipertensión Arterial',
          topics:[
            {t:'HTA: fisiopatología y daño de órgano blanco',def:'PA = GC × RVS. HTA primaria (90-95%): multifactorial. Disfunción endotelial (↓NO → vasoconstricción) + SRAA activado + SNS + retención Na+ + remodelación vascular (hiperplasia muscular, fibrosis). Daño órgano blanco: corazón (HVI→IC), riñón (nefroesclerosis→ERC), cerebro (AVE, encefalopatía), retina, arterias (aterosclerosis acelerada). HTA resistente: ≥3 fármacos incluyendo diurético sin control.'}
          ],
          keywords:['HTA','SRAA','disfunción endotelial','NO','resistencia vascular','angiotensina','aldosterona','HTA resistente','PA','GC','RVS','daño órgano blanco','HVI','nefroesclerosis','AVE','retinopatía hipertensiva'],
          alerts:[{type:'info',title:'HTA = FR #1 modificable',text:'Responsable de 47% de IAM y 54% de AVE. Cada 10 mmHg de reducción de PAS → ↓20% eventos CV mayores.'}],
          connections:[{toId:'farm-s6',title:'Antihipertensivos',desc:'IECA/ARA-II (SRAA), β-bloqueantes (GC/renina), BCC (arteriolas), diuréticos (volemia): mecanismos complementarios',type:'farm'}]
        },
        {id:'fisio-c10pptx',title:'Isquemia Miocárdica e IAM',
          topics:[
            {t:'Angina estable, inestable y IAM',def:'Estable: dolor con esfuerzo predecible, por agotamiento de reserva coronaria (ateroma fijo). Cede con reposo/nitritos. Inestable: en reposo, umbral variable, 25-40% progresa a IAM. IAM: oclusión trombótica completa (IAMCEST) o subtotal (IAMSEST). Troponinas I/T aparecen 3-6h, pico 12-24h, persisten 14 días. Tiempo = músculo: angioplastia <90 min o fibrinólisis <30 min.'},
            {t:'Complicaciones del IAM',def:'Mecánicas: ruptura pared libre (taponamiento), músculo papilar (insuficiencia mitral aguda), septo (CIV). Eléctricas: TV/FV (principal causa muerte 1as horas), bloqueos AV. Hemodinámicas: EPA, shock cardiogénico (Killip IV, mortalidad >50%). Remodelación: dilatación ventricular → IC crónica. Daño por reperfusión: paradójico post-revascularización (↑Ca2+, ERO).'}
          ],
          keywords:['reserva coronaria','angina estable','angina inestable','IAM','IAMCEST','IAMSEST','troponinas','CK-MB','reperfusión','angioplastia','fibrinólisis','alteplasa','TV','FV','Killip','shock cardiogénico','SCA','doble antiagregación','nitratos'],
          alerts:[{type:'danger',title:'IAMCEST: tiempo = músculo',text:'Puerta-balón <90 min (angioplastia primaria) o puerta-aguja <30 min (fibrinólisis). Cada 30 min retraso = ↑10% mortalidad relativa.'}],
          connections:[{toId:'farm-s9',title:'Antiagregantes/Anticoagulantes',desc:'AAS+clopidogrel + heparina + β-bloqueantes + IECA post-IAM. Alteplasa si fibrinólisis',type:'farm'}]
        }
      ]
    },
    {
      id:'fisio-u4', title:'Unidad IV: Fisiopatología Endocrina',
      sessions:[
        {id:'fisio-c09pdf',title:'Obesidad Visceral',
          topics:[
            {t:'Obesidad visceral y resistencia insulínica',def:'Grasa visceral >> subcutánea en riesgo metabólico. Adipocitoquinas proinflamatorias (TNF-α, IL-6, IL-1β) → metainflamación → fosforilación en serina de IRS → ↓PI3K/Akt → ↓GLUT4 → resistencia insulínica. HOMA-IR >2.5. Perímetro cintura (H>102cm, M>88cm) mejor predictor que IMC. GLP-1 RA (semaglutida) → ↓peso 15-20% → nuevo paradigma.'}
          ],
          keywords:['obesidad visceral','metainflamación','adipocitoquinas','TNF-α','IL-6','resistencia insulínica','HOMA-IR','IRS','PI3K','Akt','NF-κB','JNK','orlistat','semaglutida','liraglutida','GLP-1','cirugía bariátrica','perímetro cintura','síndrome metabólico','UCP-1','tejido adiposo pardo'],
          alerts:[],connections:[{toId:'farm-sdiab',title:'Antidiabéticos',desc:'GLP-1 RA y iSGLT2: reducen peso, mejoran RI, protección cardiorrenal',type:'farm'}]
        },
        {id:'fisio-c10pdf',title:'Diabetes Mellitus',
          topics:[
            {t:'DM1 vs DM2: mecanismos y complicaciones',def:'DM1: autoinmunidad → destrucción células β → déficit absoluto insulina. Estadios: 1 (autoanticuerpos+), 2 (disglicemia), 3 (síntomas). DM2: RI + disfunción β progresiva. 9-12 años subclínica. ADA: ayunas ≥126, PTGO ≥200, HbA1c ≥6.5%. Complicaciones agudas: CAD (DM1: acidosis AG elevado), SHHNC (DM2: osmolaridad >320), hipoglicemia. Complicaciones crónicas: vía polyol (↑sorbitol), AGEs, ↑PKC → microvasculares (nefropatía, retinopatía, neuropatía) + macrovasculares (IAM, AVE, gangrena).'}
          ],
          keywords:['DM1','DM2','HbA1c','ADA','CAD','SHHNC','metformina','iSGLT2','GLP-1','nefropatía diabética','retinopatía','neuropatía','pie diabético','vía polyol','AGE','PKC','microangiopatía','macroangiopatía','PTGO','autoinmunidad','célula beta','resistencia insulínica','glicemia'],
          alerts:[{type:'danger',title:'CAD vs SHHNC',text:'CAD: DM1, acidosis AG elevado, cetonemia → insulina IV + fluidos. SHHNC: DM2 mayor, osmolaridad >320, sin cetosis → fluidos hipotónicos + insulina baja dosis.'}],
          connections:[{toId:'farm-sdiab',title:'Antidiabéticos',desc:'Fisiopatología DM explica blancos: sulfonilureas (célula β), metformina (hígado), iSGLT2 (riñón), GLP-1 (incretinas)',type:'farm'},{toId:'fisio-serc',title:'ERC',desc:'DM = 1ª causa de ERC (35-40%). Nefropatía diabética: hiperfiltración → esclerosis',type:'fisio'}]
        }
      ]
    },
    {
      id:'fisio-u5', title:'Unidad V: Fisiopatología Renal',
      sessions:[
        {id:'fisio-shidro',title:'Equilibrio Hidrosalino',
          topics:[
            {t:'Regulación de Na+, agua y potasio',def:'Na+ (principal catión LEC): regulado por SRAA (retención), ANP/BNP (natriuresis), catecolaminas. ADH (vasopresina): ↑reabsorción agua en colector → regula osmolaridad. K+ (98% intracelular): regulado por Na+/K+ ATPasa, insulina (redistribución), aldosterona (secreción renal). pH: la acidosis redistribuye K+ al LEC → hiperkalemia. Diuréticos alteran todos estos ejes.'},
            {t:'Trastornos del sodio y potasio',def:'Hiponatremia (<135): dilucional (SIADH), depletiva (diuréticos, vómitos). Corrección: ≤10-12 mEq/L/24h (riesgo mielinólisis central pontina). Hipernatremia (>145): déficit agua libre. Hiperkalemia (>5.5): ECG picudo → gluconato Ca2+ + insulina/glucosa + salbutamol → kayexalate/hemodiálisis. Hipokalemia (<3.5): onda U, ↓ST → suplementación KCl.'}
          ],
          keywords:['VEC','osmolaridad','tonicidad','ADH','vasopresina','SRAA','hiponatremia','SIADH','hipernatremia','hiperkalemia','hipokalemia','NKCC2','NCC','aldosterona','ENaC','ROMK','gluconato calcio','kayexalate','mielinólisis','SS hipertónica','ANP','BNP','Na+/K+ ATPasa','pH','acidosis'],
          alerts:[
            {type:'danger',title:'Corrección rápida hiponatremia → mielinólisis',text:'≤10-12 mEq/L en 24h. Desmielinización osmótica es IRREVERSIBLE. Mayor riesgo en hiponatremia crónica.'},
            {type:'danger',title:'Hiperkalemia >6.5 = emergencia cardíaca',text:'Ondas T picudas → QRS ancho → FV/asistolia. Gluconato Ca2+ IV INMEDIATO (estabiliza membrana). Luego redistribución: insulina+glucosa, salbutamol NEB.'}
          ],
          connections:[{toId:'farm-s8',title:'Diuréticos',desc:'Furosemida (NKCC2), tiazidas (NCC), espironolactona (aldosterona): cada uno afecta segmentos y electrolitos específicos',type:'farm'}]
        },
        {id:'fisio-c11',title:'Equilibrio Ácido-Base',
          topics:[
            {t:'4 trastornos primarios y algoritmo de GSA',def:'pH 7.35-7.45, PaCO2 35-45, HCO3 22-26. Acidosis metabólica: ↓HCO3 → AG elevado (MUDPILES: Metanol, Uremia, CAD, Propilenglicol, Isoniazida, Lactato, Etilenglicol, Salicilatos) o AG normal (hiperclorémica: diarrea, ATR). Acidosis respiratoria: ↑PaCO2 (EPOC, sedación). Alcalosis metabólica: ↑HCO3 (vómitos, diuréticos). Alcalosis respiratoria: ↓PaCO2 (hiperventilación). Algoritmo: pH → proceso primario → compensación esperada (Winter) → AG → AG corregido.'}
          ],
          keywords:['GSA','pH','PaCO2','HCO3','anion gap','acidosis metabólica','alcalosis metabólica','acidosis respiratoria','alcalosis respiratoria','MUDPILES','Winter','compensación','hiperclorémica','ATR','lactato','CAD','vómitos','diarrea','bicarbonato','AG corregido'],
          alerts:[{type:'info',title:'MUDPILES: acidosis AG elevado',text:'Metanol, Uremia, Diabética (CAD), Propilenglicol, Isoniazida/Infección, Lactato (#1 en UCI), Etilenglicol, Salicilatos.'}],
          connections:[{toId:'fisio-s8',title:'Shock',desc:'Shock → hipoperfusión → metabolismo anaerobio → ↑lactato → acidosis metabólica AG elevado',type:'fisio'},{toId:'fisio-c10pdf',title:'DM/CAD',desc:'CAD = acidosis metabólica AG elevado clásica. Insulina IV + fluidos + corrección electrolitos',type:'fisio'}]
        },
        {id:'fisio-serc',title:'ERC y Síndrome Urémico',
          topics:[
            {t:'ERC: progresión y complicaciones',def:'Destrucción progresiva de nefronas → hiperfiltración compensadora → esclerosis glomerular (ciclo vicioso). KDIGO: 1 (≥90), 2 (60-89), 3a (45-59), 3b (30-44), 4 (15-29), 5 (<15 → diálisis). Etiología: DM (35-40%), HTA, GN, nefrotóxicos. Síndrome urémico: anemia (↓EPO), osteodistrofia (↓Vit D, ↑PTH, ↑P), neuropatía, hipervolemia, hiperkalemia, acidosis. Frenar progresión: IECA/ARA-II + control PA + iSGLT2 + evitar nefrotóxicos.'}
          ],
          keywords:['ERC','VFG','hiperfiltración','esclerosis glomerular','KDIGO','nefropatía diabética','Sd nefrótico','uremia','EPO','osteodistrofia','PTH','hiperfosfatemia','TGF-β','iSGLT2','proteinuria','microalbuminuria','diálisis','síndrome cardiorrenal','hepcidina','eritropoyetina'],
          alerts:[{type:'warning',title:'Ajuste de dosis en ERC: OBLIGATORIO',text:'Aminoglucósidos, vancomicina, metformina (suspender VFG<30), AINEs (contraindicados), gadolinio (fibrosis sistémica nefrogénica VFG<30). Calcular VFG SIEMPRE antes de prescribir.'}],
          connections:[{toId:'farm-s6',title:'IECA/ARA-II',desc:'1ª línea nefroprotección: vasodilatación eferente → ↓presión intraglomerular → ↓proteinuria',type:'farm'},{toId:'farm-s8',title:'Diuréticos',desc:'Furosemida en ERC avanzada (tiazidas ineficaces con VFG<30). Espironolactona con precaución (hiperkalemia)',type:'farm'}]
        },
        {id:'fisio-s17',title:'Daño Renal Agudo (AKI)',
          topics:[
            {t:'AKI: prerrenal, intrarrenal y postrenal',def:'Prerrenal (60-70%): hipovolemia, sepsis, ICC, AINEs → FENa <1%, reversible con volumen. Intrarrenal: NTA isquémica (evolución de prerrenal no tratada, FENa >2%), nefrotóxicos (aminoglucósidos/megalina, contraste → nefropatía CIN, cisplatino). Postrenal (5-10%): obstrucción (HBP, litiasis, cáncer) → ↑presión → ↓filtración. Diagnóstico: ↑Cr ≥0.3 mg/dL en 48h o ≥1.5× basal; oliguria <0.5 mL/kg/h ×6h. RIFLE/AKIN para estadificación.'}
          ],
          keywords:['AKI','RIFLE','AKIN','KDIGO','NTA','FENa','prerrenal','intrarrenal','postrenal','nefrotoxicidad','TRR','creatinina','oliguria','aminoglucósidos','contraste','megalina','cisplatino','hemodiálisis','AEIOU','sepsis','AINEs'],
          alerts:[{type:'danger',title:'TRR urgente: AEIOU',text:'Acidosis refractaria, Electrolitos (K+ refractario), Intoxicación dializable, Overload (volumen refractario), Uremia sintomática (encefalopatía, pericarditis).'}],
          connections:[{toId:'farm-s3',title:'Antibióticos',desc:'Aminoglucósidos: NTA intrarrenal (acumulación en TCP vía megalina). Monitorizar niveles',type:'farm'},{toId:'farm-saines',title:'AINEs',desc:'AINEs: causa #1 farmacológica de AKI prerrenal (↓PGE2 vasodilatadora aferente)',type:'farm'}]
        }
      ]
    },
    {
      id:'fisio-u6', title:'Unidad VI: Neurofisiopatología',
      sessions:[
        {id:'fisio-c13',title:'AVE, Alzheimer y Parkinson',
          topics:[
            {t:'AVE isquémico: penumbra y excitotoxicidad',def:'Oclusión arterial → core isquémico (muerte celular en minutos) + penumbra (tejido hipoperfundido viable, rescatable). Mecanismos de daño: 1) Excitotoxicidad: isquemia → liberación glutamato → activación NMDA → entrada masiva Ca2+ → muerte neuronal. 2) Disfunción BHE → edema. 3) Inflamación post-isquémica. Trombolisis con alteplasa IV <4.5h o trombectomía mecánica <24h (según criterios).'},
            {t:'Alzheimer y Parkinson: bases fisiopatológicas',def:'Alzheimer: placas β-amiloide (Aβ42 por β/γ-secretasa) + ovillos tau hiperfosforilada + déficit colinérgico (Meynert). Tratamiento: inhibidores AChE + memantina. Parkinson: degeneración SNpc → ↓dopamina estriatal → bradicinesia, rigidez, temblor reposo. α-sinucleinopatía (cuerpos de Lewy). Estadificación Braak (I-VI): bulbo olfatorio → tronco → límbico → neocorteza. Hipótesis gut-brain. Tratamiento: L-DOPA + carbidopa.'}
          ],
          keywords:['AVE','excitotoxicidad','penumbra isquémica','BHE','glutamato','NMDA','alteplasa','trombectomía','Alzheimer','β-amiloide','APP','tau','AChE','donepezilo','memantina','Parkinson','α-sinucleína','Braak','L-DOPA','COMT','MAO-B','SNpc','cuerpos de Lewy','dopamina','estriado'],
          alerts:[{type:'info',title:'AVE isquémico: ventana terapéutica',text:'Alteplasa IV: <4.5h del inicio. Trombectomía mecánica: hasta 24h con penumbra demostrada por imagen (mismatch). "Time is brain".'}],
          connections:[{toId:'farm-spsiq',title:'Antiparkinsonianos',desc:'L-DOPA + carbidopa restaura DA en estriado. Inhibidores AChE + memantina en Alzheimer',type:'farm'},{toId:'farm-saline',title:'Farmacología Alzheimer',desc:'Donepezilo, rivastigmina, galantamina (↑ACh) + memantina (anti-NMDA)',type:'farm'}]
        }
      ]
    },
    {
      id:'fisio-u7', title:'Unidad VII: Hematología e Inmunidad',
      sessions:[
        {id:'fisio-s14',title:'Hematooncología y Hemostasia',
          topics:[
            {t:'Eritropoyesis, anemias y metabolismo del hierro',def:'EPO (90% renal, estímulo: hipoxia/HIF). Hierro: absorción (DMT1), transporte (transferrina), depósito (ferritina), regulación (hepcidina). Anemia ferropriva: ferritina↓, TIBC↑, sat.Tf↓ → Fe oral + vit C. Anemia inflamatoria: IL-6→↑hepcidina→bloquea ferroportina→Fe secuestrado. Ferritina normal/↑, TIBC↓. Macrocítica: déficit B12/folato → megaloblastos, trampa del folato.'},
            {t:'Hemostasia y cascada de coagulación',def:'1) Vasoconstricción. 2) Hemostasia primaria: plaquetas (adhesión por vWF/GPIb → activación TXA2/ADP → agregación GPIIb/IIIa+fibrinógeno). 3) Hemostasia secundaria: vía intrínseca (TTPA: XII→XI→IX→VIII→X) y extrínseca (TP/INR: FT→VII→X). Vía común: X→V→protrombina→trombina→fibrinógeno→fibrina. 4) Fibrinólisis (plasmina→Dímero-D). Hemofilia A (↓VIII, TTPA↑), B (↓IX). Blancos farmacológicos: AAS (COX→TXA2), clopidogrel (P2Y12), heparina (AT-III), warfarina (factores K-dep).'}
          ],
          keywords:['EPO','hepcidina','ferroportina','DMT1','ferritina','transferrina','anemia ferropriva','anemia inflamatoria','B12','folato','DHFR','hemostasia','vWF','GPIb','GPIIb/IIIa','TTPA','TP','INR','hemofilia','Dímero-D','plaquetas','fibrina','trombina','cascada coagulación','fibrinólisis','plasmina','Factor Tisular'],
          alerts:[{type:'warning',title:'Ferropriva vs inflamatoria: no confundir',text:'Ferropriva: ferritina BAJA, TIBC alto. Inflamatoria: ferritina NORMAL/ALTA (reactante). NO suplementar Fe en anemia inflamatoria sin confirmar déficit real (ferritina + sat.Tf).'}],
          connections:[{toId:'farm-s9',title:'Anticoagulantes/Antiagregantes',desc:'Hemostasia 1ª (AAS, clopidogrel) y 2ª (heparina→TTPA, warfarina→INR) como blancos farmacológicos',type:'farm'}]
        }
      ]
    }
  ]
},

// ============================================================
// REFERENCIAS CRUZADAS
// ============================================================
crossrefs: [
  {fisioId:'fisio-c01pdf',fisioTitle:'Inflamación',farmId:'farm-saines',farmTitle:'AINEs / Corticoides',desc:'AINEs inhiben COX. Corticoides bloquean fosfolipasa A2 (toda la cascada)'},
  {fisioId:'fisio-c03',fisioTitle:'Asma',farmId:'farm-s12',farmTitle:'Broncodilatadores SNA',desc:'Salbutamol (β2), ipratropio (antiM), ICS, montelukast (anti-LT)'},
  {fisioId:'fisio-c04',fisioTitle:'EPOC',farmId:'farm-s12',farmTitle:'Broncodilatadores',desc:'LAMA (tiotropio) 1ª línea. O2 controlado (drive hipóxico)'},
  {fisioId:'fisio-c07',fisioTitle:'Insuficiencia Cardíaca',farmId:'farm-s6',farmTitle:'IECA + β-bloqueo',desc:'IECA + β-bloq + espironolactona + iSGLT2: 4 pilares FEVIr'},
  {fisioId:'fisio-s8',fisioTitle:'Shock',farmId:'farm-s12',farmTitle:'Simpaticomiméticos',desc:'NA (séptico), dobutamina (cardiogénico), adrenalina (anafilaxia)'},
  {fisioId:'fisio-c09pptx',fisioTitle:'HTA',farmId:'farm-s6',farmTitle:'Antihipertensivos',desc:'IECA/ARA-II, β-bloq, BCC, diuréticos: mecanismos complementarios'},
  {fisioId:'fisio-c10pptx',fisioTitle:'IAM/SCA',farmId:'farm-s9',farmTitle:'Antiagregantes',desc:'AAS+clopidogrel, heparina, β-bloq, alteplasa en IAMCEST'},
  {fisioId:'fisio-c09pdf',fisioTitle:'Obesidad',farmId:'farm-sdiab',farmTitle:'GLP-1 RA / iSGLT2',desc:'Semaglutida: ↓peso 15-20% + protección cardiorrenal'},
  {fisioId:'fisio-c10pdf',fisioTitle:'Diabetes',farmId:'farm-sdiab',farmTitle:'Antidiabéticos',desc:'Metformina, iSGLT2, GLP-1 RA, insulina según fisiopatología'},
  {fisioId:'fisio-shidro',fisioTitle:'Hidrosalino',farmId:'farm-s8',farmTitle:'Diuréticos',desc:'Furosemida (NKCC2), tiazidas (NCC), espironolactona (aldosterona)'},
  {fisioId:'fisio-c11',fisioTitle:'Ácido-base',farmId:'farm-s8',farmTitle:'Diuréticos/Bicarbonato',desc:'Acetazolamida → acidosis; furosemida → alcalosis hipoclorémica'},
  {fisioId:'fisio-serc',fisioTitle:'ERC',farmId:'farm-s6',farmTitle:'IECA/ARA-II',desc:'Nefroprotección: vasodilatación eferente + iSGLT2'},
  {fisioId:'fisio-s17',fisioTitle:'AKI',farmId:'farm-saines',farmTitle:'AINEs',desc:'AINEs: causa #1 farmacológica AKI prerrenal'},
  {fisioId:'fisio-c13',fisioTitle:'Neuro (AVE/Alzheimer/Parkinson)',farmId:'farm-spsiq',farmTitle:'Antiparkinsonianos/SNC',desc:'L-DOPA, donepezilo, memantina según mecanismo neurodegenerativo'},
  {fisioId:'fisio-s14',fisioTitle:'Hemostasia/Anemias',farmId:'farm-s9',farmTitle:'Anticoagulantes',desc:'Vía intrínseca→heparina, extrínseca→warfarina, plaquetas→AAS'},
  {fisioId:'fisio-saterom',fisioTitle:'Ateromatosis',farmId:'farm-slipid',farmTitle:'Estatinas',desc:'Estabilizan placa (↓LDL + antiinflamatorio + ↑NO endotelial)'},
  {fisioId:'fisio-cicatr',fisioTitle:'Cicatrización',farmId:'farm-saines',farmTitle:'AINEs/Corticoides',desc:'Ambos retardan cicatrización. Cuidado en pie diabético'},
  {fisioId:'fisio-c05',fisioTitle:'SDRA/Edema pulmonar',farmId:'farm-s8',farmTitle:'Diuréticos',desc:'Furosemida en edema cardiogénico. Ventilación protectora en SDRA'}
]

}; // fin APP_DATA
