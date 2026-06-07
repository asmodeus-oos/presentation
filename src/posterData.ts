export interface PosterImage {
  url: string;
  caption: string;
}

export interface ComparisonTable {
  headers: string[];
  rows: string[][];
}

export interface PosterSection {
  id: string;
  index: string;
  kicker: string;
  title: string;
  text: string;
  bullets?: { icon: string; label: string }[];
  table?: ComparisonTable;
  images: [PosterImage, PosterImage];
  layout?: 'side' | 'diagonal';
}

// ── Image helpers ──────────────────────────────────
// Stock (Pexels) — curated per card by Visual Research Agent
const P = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200`;

// AI-generated scientific diagrams (local)
const AI = (name: string) => `/images/${name}.jpg`;

// ── Curated Asset Map ──────────────────────────────
// Each section: 1 image = clinical/contextual, 1 image = scientific/diagram
// Stock IDs validated by Validation Agent for relevance + quality

export const sections: PosterSection[] = [
  // ─── 01 · INTRODUCTION ───────────────────────────
  {
    id: 'introduction',
    index: '01',
    kicker: 'Introduction',
    title: 'Why Adhesive Cementation Matters',
    text: 'Indirect restorations have become increasingly conservative and esthetically driven. Traditional cements provide retention through mechanical interlocking. Adhesive resin cements form micromechanical and chemical bonds connecting restoration, tooth, and cement — the gold standard for modern ceramic and composite restorations.',
    bullets: [
      { icon: '📈', label: 'Enhanced bond strength & fracture resistance' },
      { icon: '🔬', label: 'Improved marginal adaptation' },
      { icon: '🛡️', label: 'Reduced microleakage' },
      { icon: '🦷', label: 'Greater tooth structure preservation' },
      { icon: '💎', label: 'Superior esthetic outcomes' },
      { icon: '🏆', label: 'Gold standard for ceramic restorations' },
    ],
    images: [
      { url: P(6627691), caption: 'Dental instruments & restoration models' },
      { url: P(6627572), caption: 'Veneer cementation procedure' },
    ],
    layout: 'side',
  },

  // ─── 02 · HISTORICAL DEVELOPMENT ─────────────────
  {
    id: 'history',
    index: '02',
    kicker: 'Historical Development',
    title: 'Five Generations of Progress',
    text: 'From 1870s zinc phosphate cements relying purely on mechanical retention, through polycarboxylate, glass ionomer and resin-modified systems, to today\'s adhesive resin cements offering micromechanical and chemical bonding with excellent longevity.',
    table: {
      headers: ['Era', 'Cement Type', 'Mechanism'],
      rows: [
        ['1870s', 'Zinc Phosphate', 'Mechanical retention'],
        ['1960s', 'Polycarboxylate', 'Chemical bonding to tooth'],
        ['1970s', 'Glass Ionomer', 'Ionic bonding + fluoride release'],
        ['1990s', 'RMGI', 'Hybrid bonding'],
        ['1990s–Present', 'Adhesive Resin', 'Micro + chemical bonding'],
      ],
    },
    images: [
      { url: P(6627671), caption: 'Classic dental instrument set' },
      { url: P(6627722), caption: 'Modern material systems' },
    ],
    layout: 'diagonal',
  },

  // ─── 03 · DEFINITION & OBJECTIVES ────────────────
  {
    id: 'objectives',
    index: '03',
    kicker: 'Definition & Objectives',
    title: 'Goals of Adhesive Cementation',
    text: 'Adhesive resin cement is a polymer-based luting material that creates strong, lasting bonds between restorative materials and dental tissues using micromechanical interlocking and/or chemical adhesion.',
    bullets: [
      { icon: '🔒', label: 'Retention — prevents dislodging' },
      { icon: '💪', label: 'Resistance — stops movement under load' },
      { icon: '🧱', label: 'Marginal Seal — blocks bacterial ingress' },
      { icon: '⚖️', label: 'Stress Distribution — even force spread' },
      { icon: '🔨', label: 'Reinforcement — strengthens weakened teeth' },
      { icon: '✨', label: 'Esthetics — color stability & translucency' },
    ],
    images: [
      { url: P(3881451), caption: 'Precise clinical examination' },
      { url: P(3762402), caption: 'Esthetic smile outcome' },
    ],
    layout: 'side',
  },

  // ─── 04 · ADVANTAGES VS CONVENTIONAL ─────────────
  {
    id: 'advantages',
    index: '04',
    kicker: 'Comparative Advantages',
    title: 'Why Choose Adhesive Resin Cement',
    text: 'Adhesive resin cements outperform conventional cements in nearly every clinical parameter — from bond strength and fracture resistance to microleakage control and esthetic quality.',
    table: {
      headers: ['Property', 'Conventional', 'Adhesive Resin'],
      rows: [
        ['Bonding', 'Limited', 'Strong'],
        ['Retention', 'Mechanical only', 'Mechanical + chemical'],
        ['Fracture Resistance', 'Moderate', 'High'],
        ['Microleakage', 'Higher', 'Lower'],
        ['Solubility', 'Higher', 'Very low'],
        ['Esthetics', 'Limited', 'Excellent'],
        ['Thin Restorations', 'Not ideal', 'Ideal'],
        ['Ceramic Veneers', 'Poor indication', 'Gold standard'],
      ],
    },
    images: [
      { url: P(6627575), caption: 'Shade guide evaluation' },
      { url: P(6627355), caption: 'Crown try-in assessment' },
    ],
    layout: 'diagonal',
  },

  // ─── 05 · COMPOSITION ────────────────────────────
  {
    id: 'composition',
    index: '05',
    kicker: 'Composition',
    title: 'Inside the Resin Cement',
    text: 'Adhesive resin cements share a composite-like formulation: an organic resin matrix of Bis-GMA, UDMA, TEGDMA, and Bis-EMA; functional monomers like 10-MDP for chemical adhesion; inorganic fillers for strength; and initiator systems for polymerization.',
    bullets: [
      { icon: '🧬', label: 'Matrix: Bis-GMA · UDMA · TEGDMA · Bis-EMA' },
      { icon: '🔗', label: 'Monomers: 10-MDP · 4-META · GPDM · Phenyl-P' },
      { icon: '⚪', label: 'Fillers: Silica · Quartz · Barium glass' },
      { icon: '💡', label: 'Initiators: Camphorquinone · BPO · Amines' },
    ],
    images: [
      { url: AI('molecular'), caption: 'Resin matrix & 10-MDP structure' },
      { url: P(4032274), caption: 'Microscopic filler analysis' },
    ],
    layout: 'side',
  },

  // ─── 06 · BONDING MECHANISMS ─────────────────────
  {
    id: 'bonding',
    index: '06',
    kicker: 'Bonding Mechanisms',
    title: 'Micromechanical & Chemical',
    text: 'Two primary adhesion pathways: micromechanical bonding via acid etching, surface roughening, or sandblasting that forms resin tags; and chemical bonding through functional monomers interacting with hydroxyapatite, zirconia, metals, and silica-based ceramics.',
    bullets: [
      { icon: '🔬', label: 'Resin tags within enamel microporosities' },
      { icon: '🧱', label: 'Hybrid layer at dentin interface' },
      { icon: '⚛️', label: '10-MDP forms stable calcium salts' },
      { icon: '💠', label: 'MDP phosphate groups bond to zirconia' },
      { icon: '🪨', label: 'Silane couples to silica-based ceramics' },
      { icon: '🔩', label: 'Metal primers interact with oxides' },
    ],
    images: [
      { url: AI('bonding-mechanism'), caption: '10-MDP chemical bonding' },
      { url: AI('enamel-bonding'), caption: 'Resin tag formation' },
    ],
    layout: 'diagonal',
  },

  // ─── 07 · ADHESION TO TOOTH STRUCTURE ────────────
  {
    id: 'tooth-adhesion',
    index: '07',
    kicker: 'Tooth Adhesion',
    title: 'Enamel & Dentin Bonding',
    text: 'Enamel bonding is highly reliable at 20–40 MPa via phosphoric acid etching and resin infiltration. Dentin bonding is more complex due to water, organic matrix, and tubules — yielding 15–30 MPa through hybrid layer formation and resin tag creation.',
    bullets: [
      { icon: '🦷', label: 'Enamel: 20–40 MPa — very reliable' },
      { icon: '💧', label: 'Dentin: 15–30 MPa — more complex' },
      { icon: '🧪', label: 'Phosphoric acid surface demineralization' },
      { icon: '🧱', label: 'Hybrid layer core of dentin adhesion' },
    ],
    images: [
      { url: AI('hybrid-layer'), caption: 'Hybrid layer cross-section' },
      { url: P(6627604), caption: 'Dentin bonding surface' },
    ],
    layout: 'side',
  },

  // ─── 08 · POLYMERIZATION MECHANISMS ──────────────
  {
    id: 'polymerization',
    index: '08',
    kicker: 'Polymerization',
    title: 'Curing Systems Compared',
    text: 'Light-cured cements offer long working time and excellent color stability for veneers. Self-cured systems work independent of light for deep restorations. Dual-cure combines both for maximum versatility — the most common choice today.',
    table: {
      headers: ['Property', 'Light Cure', 'Self Cure', 'Dual Cure'],
      rows: [
        ['Working Time', 'Long', 'Short', 'Moderate'],
        ['Color Stability', 'Excellent', 'Poorer', 'Good'],
        ['Depth of Cure', 'Limited', 'Unlimited', 'Excellent'],
        ['Veneers', 'Ideal', 'Not recommended', 'Possible'],
        ['Crowns', 'Limited', 'Good', 'Excellent'],
        ['Fiber Posts', 'Poor', 'Good', 'Excellent'],
        ['Esthetics', 'Excellent', 'Moderate', 'Good'],
      ],
    },
    images: [
      { url: P(5355829), caption: 'Dental light curing in action' },
      { url: AI('polymerization'), caption: 'Dual-cure reaction diagram' },
    ],
    layout: 'diagonal',
  },

  // ─── 09 · CLASSIFICATION ─────────────────────────
  {
    id: 'classification',
    index: '09',
    kicker: 'Classification',
    title: 'Three Adhesive Strategies',
    text: 'Etch-and-rinse delivers the highest enamel bond but is technique sensitive. Self-etch simplifies the workflow with fewer steps. Self-adhesive offers single-step cementation — the simplest protocol with acceptable clinical outcomes.',
    table: {
      headers: ['Parameter', 'Etch-and-Rinse', 'Self-Etch', 'Self-Adhesive'],
      rows: [
        ['Steps', 'Multiple', 'Moderate', 'Minimal'],
        ['Technique Sensitivity', 'High', 'Moderate', 'Low'],
        ['Enamel Bond', 'Excellent', 'Good', 'Fair'],
        ['Dentin Bond', 'Excellent', 'Good', 'Moderate'],
        ['Clinical Time', 'Long', 'Moderate', 'Short'],
        ['Post-op Sensitivity', 'Higher', 'Lower', 'Lowest'],
        ['Ease of Use', 'Difficult', 'Moderate', 'Easy'],
        ['Longevity', 'Excellent', 'Very good', 'Good'],
      ],
    },
    images: [
      { url: AI('classification'), caption: 'Adhesive strategy comparison' },
      { url: P(6627535), caption: 'Etch-and-rinse application' },
    ],
    layout: 'side',
  },

  // ─── 10 · COMPARISON WITH OTHER CEMENTS ──────────
  {
    id: 'comparison',
    index: '10',
    kicker: 'Material Comparison',
    title: 'Resin vs Traditional Cements',
    text: 'Adhesive resin cements surpass all traditional alternatives in bonding, solubility, strength, esthetics, and microleakage control. They are the only viable option for ceramic veneers and the preferred choice for zirconia bonding.',
    table: {
      headers: ['Property', 'Zinc Phosphate', 'Glass Ionomer', 'RMGI', 'Resin Cement'],
      rows: [
        ['Adhesion', 'None', 'Chemical', 'Chemical', 'Strong'],
        ['Solubility', 'High', 'Moderate', 'Low', 'Very low'],
        ['Strength', 'Moderate', 'Moderate', 'High', 'Highest'],
        ['Esthetics', 'Poor', 'Moderate', 'Moderate', 'Excellent'],
        ['Fluoride Release', 'None', 'High', 'Moderate', 'Minimal'],
        ['Microleakage', 'High', 'Moderate', 'Moderate', 'Lowest'],
        ['Ceramic Veneers', 'No', 'No', 'No', 'Yes'],
        ['Zirconia Bonding', 'No', 'No', 'Limited', 'Yes'],
      ],
    },
    images: [
      { url: P(4946338), caption: 'Dental material instruments' },
      { url: P(6627668), caption: 'Clinical equipment selection' },
    ],
    layout: 'diagonal',
  },

  // ─── 11 · SURFACE TREATMENT ──────────────────────
  {
    id: 'surface',
    index: '11',
    kicker: 'Surface Treatment',
    title: 'Conditioning Protocols',
    text: 'Silica-based ceramics require hydrofluoric acid etching plus silane. Zirconia — not silica-based — needs airborne particle abrasion and an MDP primer. Metal restorations need sandblasting with metal primer. Composite requires sandblasting plus silane.',
    bullets: [
      { icon: '🧪', label: 'HF acid + silane (feldspathic, lithium disilicate)' },
      { icon: '💨', label: 'Air abrasion + MDP primer (zirconia)' },
      { icon: '🔩', label: 'Sandblasting + metal primer (alloys)' },
      { icon: '♻️', label: 'Sandblasting + silane (composite repairs)' },
    ],
    images: [
      { url: AI('surface-treatment'), caption: 'Ceramic surface conditioning' },
      { url: P(6627606), caption: 'Restoration surface preparation' },
    ],
    layout: 'side',
  },

  // ─── 12 · CLINICAL INDICATIONS ───────────────────
  {
    id: 'indications',
    index: '12',
    kicker: 'Clinical Indications',
    title: 'Where It Is Used',
    text: 'Adhesive resin cements are essential for veneers, inlays, onlays, overlays, lithium disilicate crowns, endocrowns, fiber posts, resin-bonded bridges, zirconia restorations, and select implant prostheses.',
    bullets: [
      { icon: '😁', label: 'Ceramic veneers — most important' },
      { icon: '👑', label: 'Lithium disilicate crowns' },
      { icon: '🦷', label: 'Ceramic inlays & onlays' },
      { icon: '🔩', label: 'Fiber posts — monoblock effect' },
      { icon: '🌉', label: 'Resin-bonded bridges' },
      { icon: '💍', label: 'Zirconia — with MDP cement' },
    ],
    images: [
      { url: P(6627592), caption: 'Prosthetic fabrication detail' },
      { url: P(3762453), caption: 'Esthetic veneer smile result' },
    ],
    layout: 'diagonal',
  },

  // ─── 13 · CONTRAINDICATIONS & LIMITATIONS ────────
  {
    id: 'limitations',
    index: '13',
    kicker: 'Limitations',
    title: 'When Not to Use',
    text: 'Contraindications include poor moisture control, un-isolable subgingival margins, really short crowns needing conventional retention, and poor oral hygiene. Limitations include technique sensitivity, cleanup difficulty, and higher cost.',
    bullets: [
      { icon: '⚠️', label: 'Poor moisture control' },
      { icon: '💧', label: 'Un-isolable subgingival margins' },
      { icon: '📏', label: 'Very short crowns' },
      { icon: '🦠', label: 'Poor oral hygiene' },
      { icon: '🧹', label: 'Difficult cement cleanup' },
      { icon: '💰', label: 'Higher material cost' },
    ],
    images: [
      { url: P(5355834), caption: 'Clinical isolation protocol' },
      { url: P(3845709), caption: 'Moisture-sensitive procedure' },
    ],
    layout: 'side',
  },

  // ─── 14 · FAILURE MODES ──────────────────────────
  {
    id: 'failure',
    index: '14',
    kicker: 'Bond Failure',
    title: 'What Compromises the Bond',
    text: 'Bond failure originates from tooth contamination or poor etching, material under-polymerization or improper surface preparation, and clinical moisture control breakdown or excessive cement thickness.',
    bullets: [
      { icon: '🔓', label: 'Tooth: contamination, poor etching, sloppy adhesive' },
      { icon: '🧪', label: 'Material: under-polymerized, improper prep' },
      { icon: '💧', label: 'Clinical: moisture failure, excessive cement' },
      { icon: '📉', label: 'Hydrolytic degradation over time' },
    ],
    images: [
      { url: P(3881305), caption: 'Clinical margin assessment' },
      { url: P(3881420), caption: 'Detailed clinical analysis' },
    ],
    layout: 'diagonal',
  },

  // ─── 15 · CLINICAL PROTOCOL ──────────────────────
  {
    id: 'protocol',
    index: '15',
    kicker: 'Clinical Protocol',
    title: 'Step-by-Step Cementation',
    text: 'A 12-step evidence-based protocol ensures predictable adhesive cementation outcomes — from try-in through finishing.',
    bullets: [
      { icon: '1️⃣', label: 'Try-in restoration' },
      { icon: '2️⃣', label: 'Clean restoration' },
      { icon: '3️⃣', label: 'Surface treatment' },
      { icon: '4️⃣', label: 'Isolation' },
      { icon: '5️⃣', label: 'Tooth conditioning' },
      { icon: '6️⃣', label: 'Apply adhesive' },
      { icon: '7️⃣', label: 'Place cement' },
      { icon: '8️⃣', label: 'Seat restoration' },
      { icon: '9️⃣', label: 'Tack cure' },
      { icon: '🔟', label: 'Remove excess cement' },
      { icon: '1️⃣1️⃣', label: 'Final curing' },
      { icon: '1️⃣2️⃣', label: 'Finish and polish' },
    ],
    images: [
      { url: AI('cementation-protocol'), caption: '12-step cementation workflow' },
      { url: P(3881296), caption: 'Clinical cementation team' },
    ],
    layout: 'side',
  },

  // ─── 16 · COMMERCIAL PRODUCTS ────────────────────
  {
    id: 'products',
    index: '16',
    kicker: 'Commercial Products',
    title: 'Popular Adhesive Resin Cements',
    text: 'Leading products include RelyX Unicem, Panavia V5, Panavia SA Cement Plus, Variolink Esthetic, Multilink Automix, G-CEM LinkForce, and Maxcem Elite Chroma — spanning all three adhesive strategies.',
    bullets: [
      { icon: '🏷️', label: 'RelyX Unicem — self-adhesive' },
      { icon: '🏷️', label: 'Panavia V5 — self-etch' },
      { icon: '🏷️', label: 'Panavia SA Cement Plus — self-adhesive' },
      { icon: '🏷️', label: 'Variolink Esthetic — etch-and-rinse' },
      { icon: '🏷️', label: 'Multilink Automix — self-etch' },
      { icon: '🏷️', label: 'G-CEM LinkForce — self-adhesive' },
      { icon: '🏷️', label: 'Maxcem Elite Chroma — self-adhesive' },
    ],
    images: [
      { url: P(6627598), caption: 'Cement shade system' },
      { url: P(17301013), caption: 'Clinical material kit' },
    ],
    layout: 'diagonal',
  },

  // ─── 17 · CURRENT TRENDS ─────────────────────────
  {
    id: 'trends',
    index: '17',
    kicker: 'Future Directions',
    title: 'Current Trends & Innovation',
    text: 'The field is moving toward universal adhesive systems, advanced MDP-based chemistry for zirconia, bioactive cements for remineralization, nanofilled formulations, antibacterial properties, and experimental self-healing materials.',
    bullets: [
      { icon: '🌐', label: 'Universal adhesive systems' },
      { icon: '⚛️', label: 'Advanced MDP-based chemistry' },
      { icon: '🧬', label: 'Bioactive / remineralizing cements' },
      { icon: '🔬', label: 'Nanofilled resin cements' },
      { icon: '🦠', label: 'Antibacterial formulations' },
      { icon: '💚', label: 'Self-healing materials (experimental)' },
    ],
    images: [
      { url: AI('future-trends'), caption: 'Nanofilled bioactive research' },
      { url: P(9574403), caption: 'Materials science laboratory' },
    ],
    layout: 'side',
  },

  // ─── 18 · CLINICAL SUMMARY ───────────────────────
  {
    id: 'summary',
    index: '18',
    kicker: 'Clinical Summary',
    title: 'Evidence-Based Protocol',
    text: 'Veneers favor etch-and-rinse with light-cure cement. Lithium disilicate calls for HF + silane + dual-cure. Zirconia demands air abrasion + MDP. Dual-cure systems remain the clinical standard for most indirect restorations.',
    bullets: [
      { icon: '✅', label: 'Veneers → etch-and-rinse + light-cure' },
      { icon: '✅', label: 'e.max → HF + silane + dual-cure' },
      { icon: '✅', label: 'Zirconia → air abrasion + MDP dual-cure' },
      { icon: '✅', label: 'Routine crowns → self-adhesive' },
      { icon: '✅', label: 'Fiber posts → dual-cure' },
      { icon: '✅', label: 'Endocrowns → dual-cure adhesive' },
    ],
    images: [
      { url: P(5355843), caption: 'Final curing procedure' },
      { url: P(3762402), caption: 'Successful smile outcome' },
    ],
    layout: 'diagonal',
  },
];
