// Shared content for all three directions. Single source of truth so
// updates propagate everywhere.

window.IRIS = {
  name: "Iris (Yirong) Chen",
  pronouns: "she/her",
  location: "Boston, MA",
  email: "iiiiiris52799@outlook.com",
  linkedin: "https://www.linkedin.com/in/yirong-c-0282a9270",
  resumeUrl: "uploads/Iris(Yirong) Chen.pdf",

  // Three positioning lines — each direction picks one.
  headlines: {
    editorial: "Epidemiologist in training, building rigorous evidence at the intersection of health, data, and human stories.",
    mono:      "MS candidate, Epidemiology @ Harvard Chan. Statistical genetics, multi-omics, and real-world evidence.",
    kinetic:   "Translating large-scale health data into decisions that move people forward — at the intersection of evidence and impact."
  },

  pitch: [
    "I'm a Master's student in Epidemiology at Harvard T.H. Chan School of Public Health, concentrating in Epidemiology.",
    "My work bridges experimental biology and rigorous quantitative methods. I run GWAS pipelines, integrate multi-omics datasets, and build risk prediction models that turn population-scale data into translational insight.",
    "I'm exploring roles in HEOR / real-world evidence, biotech, pharma, consulting, and healthcare investing: anywhere that values clear thinking about evidence, decisions, and impact."
  ],

  seeking: {
    label: "Currently seeking",
    text: "Summer 2026 internship: HEOR/RWE, biotech & pharma research, life-sciences consulting, or healthcare investing."
  },

  education: [
    {
      school: "Harvard T.H. Chan School of Public Health",
      degree: "M.S., Epidemiology",
      dates: "Sep 2025 – May 2027 (expected)",
      gpa: "4.0 / 4.0",
      city: "Boston, MA",
      coursework: [
        "Applied Regression Analysis",
        "Study Design in Epidemiologic Research",
        "Research Synthesis & Meta-Analysis",
        "Epidemiologic Methods in Health Services Research",
        "Analysis of Genetic Association Studies",
        "Cancer Prevention",
      ],
    },
    {
      school: "University of Wisconsin – Madison",
      degree: "B.S., Biochemistry & Psychology",
      dates: "Sep 2021 – May 2025",
      gpa: "4.0 / 4.0 · Dean's List",
      city: "Madison, WI",
      coursework: [
        "Biochemical Methods",
        "Fundamentals of Analytical Science",
        "Nutritional Biochemistry & Metabolism",
      ],
      credential: {
        id: "250XOM3UYVN4",
        url: "https://apps2.registrar.wisc.edu/cediploma/",
      },
    },
  ],

  experience: [
    {
      title: "Graduate Research Assistant",
      group: "Liang Lab · Computational Genomics",
      org: "Harvard T.H. Chan School of Public Health",
      dates: "Oct 2025 – Present",
      bullets: [
        "Analyzed multi-omics datasets across 5+ cardiometabolic and respiratory traits in R, building risk-prediction models with translational relevance.",
        "Executed GWAS pipelines (REGENIE) on HPC systems for 3+ phenotypes, enabling reproducible genotype–phenotype analyses.",
        "Integrated QTL mapping and Mendelian Randomization across 2+ omics layers (expression, methylation, metabolomics) to strengthen causal inference.",
      ],
    },
    {
      title: "Graduate Research Assistant",
      group: "De Vivo Lab · Epigenetic Epidemiology",
      org: "Harvard T.H. Chan School of Public Health",
      dates: "Mar 2026 – Present",
      bullets: [
        "Synthesized literature on epigenetic mechanisms and aging biomarkers (telomere biology, DNA methylation) for active research and grant development.",
        "Built graduate-level lecture content from primary literature into structured outlines and visual summaries.",
        "Contributed to grant proposal writing, translating evidence into narratives aligned with funding priorities.",
      ],
    },
    {
      title: "Undergraduate Student Researcher",
      group: "Gisriel Lab · Protein Biochemistry",
      org: "University of Wisconsin – Madison",
      dates: "Aug 2024 – Feb 2025",
      bullets: [
        "Ran SDS-PAGE, HPLC, and UV-Vis to characterize photosynthetic protein complexes, delivering analysis-ready datasets to PI and postdoc collaborators.",
        "Optimized cyanobacteria culture conditions, cutting failed runs ~25% and saving 20–30% of lab time.",
        "Presented findings at 5+ lab meetings and departmental sessions to audiences of 50+ researchers.",
      ],
    },
  ],

  projects: [
    {
      title: "RPD Metabolomics Project",
      kicker: "AMD biomarker discovery",
      kickerSub: "Boston (MEEI) + Portugal cohorts",
      dates: "Feb 2026 – Present",
      summary: null,
      highlights: [
        "Built an R pipeline that merged OCT imaging, REDCap clinical data, and untargeted metabolomics into a unified analytic dataset of 632 metabolites × 4,025 eye-visits across 822 patients in two international cohorts, with full audit trails for missingness and stage inconsistencies.",
        "Led a metabolome-wide association analysis linking baseline metabolites to RPD presence, area, and volume.",
        "Combined cohort-specific models via fixed-effect inverse-variance meta-analysis, with a pooled mega-analysis as a sensitivity comparison; surfaced 140+ nominally significant metabolite–outcome associations and flagged cohort discordances for follow-up.",
        "Delivered results, discordance diagnostics, and visualizations to the clinical team via reproducible R Markdown reports and slide decks — accelerating downstream pathway interpretation and manuscript prep.",
      ],
      tags: ["R", "Metabolomics", "Meta-Analysis", "Cohort Study"],
      link: null,
      featured: true,
    },
    {
      title: "Vitamin D & IVF Meta-Analysis",
      kicker: "Systematic Review & Meta-Analysis",
      kickerSub:"Reproductive Epidemiology",
      dates: "Jan 2026 – Present",
      summary: null,
      highlights: [
        "Conducted a systematic review and random-effects meta-analysis of 5 RCTs (n = 1,341) examining the effect of vitamin D supplementation on clinical pregnancy rate in women with PCOS undergoing IVF/ICSI, with comprehensive searches across PubMed and Embase.",
        "Built a full analysis pipeline in R to pool risk ratios, quantify between-study heterogeneity, and generate prediction intervals under a random-effects model; assessed publication bias via Egger's test and funnel plot inspection.",
        "Performed leave-one-out sensitivity analysis to assess the influence of individual studies on pooled estimates; traced residual heterogeneity to between-trial differences in vitamin D dosing strategy, timing of supplementation, and patient population.",
        "Synthesized findings into a manuscript in preparation for peer-reviewed publication, offering updated pooled evidence to inform clinical decision-making on vitamin D supplementation protocols in IVF.",
      ],
      tags: ["R","Systematic Review","Meta-Analysis","Literature Search"],
      link: null,
      featured: true,
    },
    {
      title: "BMI, Metabolomic Signature & Type 2 Diabetes",
      kicker: "GWAS & Meta-Analysis",
      kickerSub:"Genetic Epidemiology",
      dates: "Jan 2026 – Feb 2026",
      summary: null,
      highlights: [
        "Investigated observational associations between BMI, a metabolomic BMI signature (elastic net-derived predictScore), and type 2 diabetes in the HPFS cohort (n = 1,368) using logistic regression models fit separately and jointly, demonstrating that the metabolomic signature captures metabolic information independent of BMI.",
        "Conducted genome-wide association analyses for BMI and the metabolomic BMI signature; evaluated results via Manhattan and QQ plots, computed genomic inflation factors, and annotated top loci using gnomAD, identifying the FTO locus as the primary signal for BMI.",
        "Applied LD Score Regression (LDSC) via GenomicSEM to estimate SNP-based heritability, assess population stratification, and quantify genetic correlation between BMI, the metabolomic signature, and T2D; found strong genetic correlation between BMI and T2D.",
        "Performed Mendelian randomization using MR-APSS to test causal effects of BMI and the metabolomic signature on T2D risk, providing robust evidence for a causal effect of BMI on T2D while identifying limited power as the key barrier to causal inference for the metabolomic signature.",
      ],
      tags: ["R","GWAS","GWAS Meta-Analysis","Mendelian Randomization"],
      link: null,
      featured: true,
    },
    {
      title: "V121T Mutation & Human Carbonic Anhydrase II Function",
      kicker: "Protein Biochemistry & Enzyme Kinetics",
      kickerSub: "Biochemical Methods",
      dates: "Jan 2025 – May 2025",
      summary: null,
      highlights: [
        "Investigated how the V121T point mutation, substituting hydrophobic valine with polar threonine at residue 121, affects the structural stability, catalytic activity, and ligand-binding behavior of human carbonic anhydrase II.",
        "Cloned, expressed, and purified wild-type and V121T mutant HCAII using Gibson Assembly, E. coli expression, Ni-NTA affinity chromatography, dialysis, and SDS-PAGE validation to confirm successful recombinant protein production.",
        "Assessed protein stability using urea-induced chemical denaturation and intrinsic tryptophan fluorescence spectroscopy, finding a lower ΔG_unfolding trend for V121T compared with wild-type HCAII, suggesting modest destabilization that was not statistically significant.",
        "Measured enzyme activity through PNPA hydrolysis and Michaelis-Menten kinetic analysis, comparing Vmax, KM, kcat, and catalytic efficiency between wild-type and mutant proteins, with results indicating no substantial effect of V121T on catalytic performance.",
        "Evaluated ligand binding using FRET-based DNSA binding and acetazolamide competition assays, observing a slight increase in DNSA binding affinity for the V121T mutant.",
      ],
      tags: ["Protein Biochemistry", "Enzyme Kinetics", "SDS-PAGE", "Fluorescence Spectroscopy", "PyMOL"],
      link: null,
      featured: false,
    },
  ],

  skills: {
    "Computational Genetics & Epidemiology": ["GWAS", "GWAS Meta-Analysis", "Mendelian Randomization", "Multi-Omics", "Risk Prediction", "Causal Inference"],
    "Statistical Tools": ["R", "Stata", "Python", "Unix / Linux", "Conda", "Bash","Microsoft Office"],
    "Molecular & Quantitative Methods": ["SDS-PAGE", "HPLC", "PCR", "UV-Vis", "FRET", "Protein Purification", "PyMOL", "GraphPad Prism"],
  },

  // Off-the-clock — the personality layer that makes the page memorable.
  offTheClock: {
    headline: "Off the clock",
    body: "I dance, a lot. As a former board member of Dancas Dance Crew at UW–Madison, I led choreography, ran rehearsals, and helped a 40-person team show up for annual showcases. Dance taught me what a lot of research training also teaches: pay attention to the details no one will notice if you do them right, and trust the people next to you.",
    badges: ["Choreographer", "Crew Board Member", "Stage Designer"],
  },
};
