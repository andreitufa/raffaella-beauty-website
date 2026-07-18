// Conținutul blogului: articole structurate pe blocuri, randate de BlogPost.tsx
// și prerandate ca HTML static la build (Google + AI le citesc integral).

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] };

export interface BlogArticle {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  // format ISO pentru schema.org
  datePublished: string;
  dateModified: string;
  intro: string;
  blocks: Block[];
  faqs?: Array<{ question: string; answer: string }>;
}

export const blogArticles: BlogArticle[] = [
  {
    slug: "epilarea-definitiva-doare",
    title: "Epilarea definitivă doare? Adevărul despre triplul laser",
    metaTitle: "Epilarea definitivă doare? Adevărul despre triplul laser",
    metaDescription:
      "Epilarea definitivă nu trebuie să doară. Afla de ce aparatele cu triplu laser (Diodă + Alexandrite + Nd:YAG) fac tratamentul complet confortabil și cum alegi salonul potrivit în București.",
    keywords:
      "epilarea definitiva doare, epilare definitiva fara durere, triplu laser, dioda alexandrite nd:yag, epilare laser bucuresti",
    datePublished: "2026-07-18",
    dateModified: "2026-07-18",
    intro:
      "Epilarea definitivă nu trebuie să doară. Durerea despre care ai auzit — sau pe care ai simțit-o — ține de tehnologia aparatului, nu de procedura în sine. Aparatele moderne cu triplă lungime de undă fac tratamentul aproape imperceptibil.",
    blocks: [
      {
        type: "h2",
        text: "De ce doare epilarea la unele saloane",
      },
      {
        type: "p",
        text: "Aparatele clasice folosesc o singură lungime de undă, de obicei dioda, și compensează limitele ei prin energie mare aplicată dintr-o dată. Rezultatul este senzația de înțepătură fierbinte sau de arsură scurtă pe care multe cliente o descriu după ședințele cu aparate vechi sau IPL-uri entry-level. La pielea sensibilă sau pe zonele delicate (inghinal, axilă, față), disconfortul poate fi semnificativ.",
      },
      {
        type: "h2",
        text: "Cum elimină durerea triplul laser",
      },
      {
        type: "p",
        text: "Aparatele cu triplă lungime de undă — cum este Infinity, folosit la Raffaella Beauty Studio — combină trei lasere într-un singur impuls: Diodă (810 nm), Alexandrite (755 nm) și Nd:YAG (1064 nm). Fiecare lungime de undă țintește foliculul la altă adâncime, așa că energia totală se distribuie eficient în loc să lovească agresiv un singur strat. Sistemul de răcire continuă a pielii face restul: senzația rămâne una de căldură blândă, comparabilă cu un masaj cu pietre calde.",
      },
      {
        type: "ul",
        items: [
          "Diodă (810 nm) — standardul de eficiență pentru majoritatea tipurilor de piele și păr",
          "Alexandrite (755 nm) — absorbție mare în melanină, eficient pe firele fine și deschise",
          "Nd:YAG (1064 nm) — pătrunde profund și e sigur pentru pielea închisă sau bronzată",
        ],
      },
      {
        type: "p",
        text: "Clientele care vin la noi după experiențe dureroase în alte saloane au aproape întotdeauna aceeași reacție la prima ședință cu triplul laser: „nici nu mi-am dat seama că a început”. Aceasta este diferența dintre o tehnologie de generație veche și una actuală — nu între „a rezista” și „a nu rezista” la durere.",
      },
      {
        type: "h2",
        text: "Cum alegi salonul ca să nu te doară",
      },
      {
        type: "ul",
        items: [
          "Întreabă ce aparat folosește salonul și câte lungimi de undă are — răspunsul corect conține Diodă + Alexandrite + Nd:YAG, nu doar „laser profesional\"",
          "Verifică dacă aparatul are răcire activă a pielii în timpul impulsului",
          "Cere o ședință de probă pe o zonă mică înainte de un pachet complet",
          "Citește recenziile recente — durerea apare imediat în recenzii când există",
        ],
      },
      {
        type: "p",
        text: "La Raffaella Beauty Studio, în București (Sectorul 2), folosim aparatul Infinity cu triplu laser pentru toate zonele, la femei și bărbați, cu prețuri de la 80 RON pe zonă. Programările se fac telefonic la 0765 315 537 sau online prin Notino.",
      },
    ],
    faqs: [
      {
        question: "Epilarea definitivă doare?",
        answer:
          "Cu aparatele moderne cu triplă lungime de undă (Diodă, Alexandrite, Nd:YAG) și răcire activă a pielii, epilarea definitivă nu doare — senzația este de căldură blândă. Durerea apare la aparatele vechi, cu o singură lungime de undă și energie aplicată agresiv.",
      },
      {
        question: "Care este cel mai puțin dureros tip de epilare definitivă?",
        answer:
          "Epilarea cu triplu laser (Diodă + Alexandrite + Nd:YAG) este considerată cea mai confortabilă, pentru că distribuie energia pe trei adâncimi diferite și răcește pielea continuu în timpul tratamentului.",
      },
    ],
  },
  {
    slug: "cat-costa-epilarea-definitiva-bucuresti",
    title: "Cât costă epilarea definitivă în București în 2026",
    metaTitle: "Cât costă epilarea definitivă în București în 2026 - Ghid de prețuri",
    metaDescription:
      "Ghid complet de prețuri pentru epilarea definitivă în București în 2026: cât costă pe zone, ce influențează prețul, la ce să fii atentă când compari ofertele. Prețuri de la 80 RON.",
    keywords:
      "cat costa epilarea definitiva, epilare definitiva pret bucuresti, pret epilare laser 2026, epilare definitiva full body pret",
    datePublished: "2026-07-18",
    dateModified: "2026-07-18",
    intro:
      "În București, în 2026, epilarea definitivă costă între 80 și 450 RON pe ședință, în funcție de zonă. O zonă mică (mustață, bărbie) pornește de la 80 RON, iar pachetul Full Body ajunge la 400–500 RON pe ședință în saloanele cu aparatură profesională.",
    blocks: [
      {
        type: "h2",
        text: "Prețuri pe zone: la ce să te aștepți",
      },
      {
        type: "table",
        headers: ["Zonă", "Preț pe ședință (femei)", "Preț pe ședință (bărbați)"],
        rows: [
          ["Mustață / Bărbie", "80 RON", "—"],
          ["Axilă", "110 RON", "130 RON"],
          ["Inghinal", "110 RON", "—"],
          ["Brațe integral", "130 RON", "180 RON"],
          ["Picioare integral", "190 RON", "280 RON"],
          ["Piept + Umeri", "—", "150 RON"],
          ["Spate", "—", "280 RON"],
          ["Full Body", "450 RON", "—"],
        ],
      },
      {
        type: "p",
        text: "Prețurile din tabel sunt cele practicate de Raffaella Beauty Studio (Sectorul 2, București) în 2026 și sunt reprezentative pentru segmentul premium cu aparatură cu triplu laser. În piață vei găsi și oferte mai mici — de la 50–60 RON pe zonă — de regulă pe aparate IPL sau diodă entry-level, unde numărul de ședințe necesar crește considerabil.",
      },
      {
        type: "h2",
        text: "Ce influențează prețul real al epilării definitive",
      },
      {
        type: "ul",
        items: [
          "Tehnologia aparatului — un triplu laser (Diodă + Alexandrite + Nd:YAG) costă mai mult pe ședință, dar cere mai puține ședințe decât un IPL ieftin",
          "Numărul total de ședințe — prețul corect se calculează pe tot tratamentul (6-10 ședințe), nu pe o singură vizită",
          "Dimensiunea zonei — zonele mari (picioare, spate, Full Body) costă proporțional mai mult",
          "Tipul de păr și piele — firele fine sau deschise pot cere lungimi de undă speciale (Alexandrite)",
          "Pachetele — abonamentele de 6+ ședințe aduc de obicei reduceri de 10-20%",
        ],
      },
      {
        type: "h2",
        text: "Capcana prețului mic pe ședință",
      },
      {
        type: "p",
        text: "Calculul care contează este prețul total până la rezultatul final. Un salon cu 60 RON pe ședință de axilă care necesită 15 ședințe pe un aparat slab te costă 900 RON și un an și jumătate de drumuri. Un salon cu 110 RON pe ședință care rezolvă aceeași zonă în 6-8 ședințe te costă 660-880 RON și jumătate din timp — cu disconfort mult redus. Întreabă întotdeauna ce aparat se folosește și câte ședințe sunt estimate pentru zona ta.",
      },
      {
        type: "p",
        text: "Vezi lista completă de prețuri Raffaella Beauty pe pagina de epilare definitivă, sau programează-te la 0765 315 537 pentru o evaluare gratuită a zonelor și a numărului de ședințe.",
      },
    ],
    faqs: [
      {
        question: "Cât costă epilarea definitivă Full Body în București?",
        answer:
          "În 2026, pachetul Full Body costă în medie 400-500 RON pe ședință în saloanele cu aparatură profesională din București. La Raffaella Beauty Studio, Full Body pentru femei costă 450 RON pe ședință și include axilă, inghinal total, picioare, interfesieri, brațe și degete.",
      },
      {
        question: "Care e prețul corect pentru o ședință de epilare la axilă?",
        answer:
          "Între 100 și 130 RON pe ședință la un salon cu laser profesional. Ofertele sub 60-70 RON folosesc de regulă IPL sau diode entry-level, care necesită aproape dublul ședințelor pentru același rezultat.",
      },
    ],
  },
  {
    slug: "cate-sedinte-epilare-definitiva",
    title: "Câte ședințe de epilare definitivă sunt necesare?",
    metaTitle: "Câte ședințe de epilare definitivă sunt necesare? Ghid pe zone",
    metaDescription:
      "De regulă sunt necesare 6-10 ședințe de epilare definitivă pentru rezultate permanente, la interval de 4-8 săptămâni. Ghid detaliat pe zone, factori care influențează numărul și de ce contează aparatul.",
    keywords:
      "cate sedinte epilare definitiva, sedinte epilare laser, interval sedinte epilare, epilare definitiva rezultate",
    datePublished: "2026-07-18",
    dateModified: "2026-07-18",
    intro:
      "Pentru rezultate permanente sunt necesare, de regulă, 6-10 ședințe de epilare definitivă, programate la interval de 4-8 săptămâni. Numărul exact depinde de zonă, de tipul de păr și piele și — decisiv — de tehnologia aparatului.",
    blocks: [
      {
        type: "h2",
        text: "De ce nu e suficientă o singură ședință",
      },
      {
        type: "p",
        text: "Laserul distruge doar foliculii aflați în faza de creștere activă (anagen), iar în orice moment doar 20-30% din firele unei zone sunt în această fază. Restul foliculilor „dorm\" și devin vulnerabili abia în ciclurile următoare. De aceea tratamentul se repetă la 4-8 săptămâni: fiecare ședință prinde un alt val de foliculi activi.",
      },
      {
        type: "h2",
        text: "Numărul orientativ de ședințe pe zone",
      },
      {
        type: "table",
        headers: ["Zonă", "Număr de ședințe", "Interval recomandat"],
        rows: [
          ["Axilă", "6-8", "4-6 săptămâni"],
          ["Inghinal", "6-8", "4-6 săptămâni"],
          ["Picioare", "6-10", "6-8 săptămâni"],
          ["Brațe", "6-8", "6-8 săptămâni"],
          ["Față (mustață, bărbie)", "8-12", "4 săptămâni"],
          ["Spate / Piept (bărbați)", "8-10", "6-8 săptămâni"],
        ],
      },
      {
        type: "h2",
        text: "Factorii care schimbă numărul de ședințe",
      },
      {
        type: "ul",
        items: [
          "Aparatul — un triplu laser (Diodă + Alexandrite + Nd:YAG) tratează eficient toate tipurile de fire și scurtează tratamentul față de un IPL sau o diodă simplă",
          "Culoarea și grosimea firului — firele închise și groase răspund cel mai repede; cele fine și deschise cer lungimea de undă Alexandrite",
          "Zona hormonală — față și inghinal sunt influențate hormonal și pot cere ședințe suplimentare de întreținere",
          "Consecvența — intervalele respectate corect scurtează tratamentul total",
        ],
      },
      {
        type: "p",
        text: "La Raffaella Beauty Studio, planul de ședințe se stabilește la prima vizită, după evaluarea gratuită a zonei: specialista îți spune de la început câte ședințe estimăm pentru zona ta și la ce interval. Tratamentul se face cu aparatul Infinity cu triplu laser, complet nedureros. Programări: 0765 315 537.",
      },
    ],
    faqs: [
      {
        question: "După câte ședințe se văd rezultatele epilării definitive?",
        answer:
          "Primele rezultate vizibile — fire mai rare și mai subțiri — apar de regulă după 2-3 ședințe. Reducerea semnificativă (70-90%) se atinge după 6-8 ședințe pentru majoritatea zonelor.",
      },
      {
        question: "La ce interval se fac ședințele de epilare definitivă?",
        answer:
          "În general la 4-6 săptămâni pentru zonele mici (axilă, inghinal, față) și la 6-8 săptămâni pentru zonele mari (picioare, spate), urmând ciclul natural de creștere a părului.",
      },
    ],
  },
  {
    slug: "laminare-vs-extensii-gene",
    title: "Laminare sau extensii de gene: ce alegi?",
    metaTitle: "Laminare vs Extensii de Gene - Diferențe, Prețuri, Ce Alegi",
    metaDescription:
      "Laminare sau extensii de gene? Comparație completă: efect, durată, întreținere, prețuri în București. Laminarea pune în valoare genele naturale, extensiile adaugă volum și lungime.",
    keywords:
      "laminare sau extensii gene, laminare vs extensii, diferenta laminare extensii gene, laminare gene pret, extensii gene pret bucuresti",
    datePublished: "2026-07-18",
    dateModified: "2026-07-18",
    intro:
      "Regula simplă: laminarea pune în valoare genele naturale — curbate, ridicate, mai vizibile — iar extensiile adaugă lungime și volum peste ce ai natural. Alegerea depinde de efectul dorit și de cât timp vrei să dedici întreținerii.",
    blocks: [
      {
        type: "h2",
        text: "Comparația pe scurt",
      },
      {
        type: "table",
        headers: ["Criteriu", "Laminare gene", "Extensii gene"],
        rows: [
          ["Efect", "Natural, gene curbate și ridicate", "Volum și lungime suplimentare, de la natural la dramatic"],
          ["Durată rezultat", "6-8 săptămâni", "3-4 săptămâni până la întreținere"],
          ["Durata ședinței", "≈1 oră 30 min", "≈2 ore"],
          ["Întreținere", "Minimă — nimic special zilnic", "Periere zilnică, evitat uleiurile, refill lunar"],
          ["Preț (Raffaella Beauty)", "250 RON", "290-400 RON aplicare, 240-350 RON întreținere"],
          ["Potrivit pentru", "Look natural, program încărcat", "Ocazii, volum vizibil permanent, look definit"],
        ],
      },
      {
        type: "h2",
        text: "Când alegi laminarea",
      },
      {
        type: "p",
        text: "Laminarea este alegerea corectă dacă ai gene naturale decente ca lungime, dar drepte sau orientate în jos, și vrei un efect îngrijit fără nicio grijă zilnică. Tratamentul curbează, ridică și fixează genele naturale, de obicei cu vopsire inclusă, iar rezultatul ține 6-8 săptămâni — cât un ciclu complet de regenerare a firelor. Nu există restricții la machiaj, apă sau sport.",
      },
      {
        type: "h2",
        text: "Când alegi extensiile",
      },
      {
        type: "p",
        text: "Extensiile sunt răspunsul dacă vrei volum și lungime pe care genele naturale nu le pot da — de la efectul „rimel bun\" al tehnicii 1D-2D, până la volumul intens 6D sau stilurile Wet Look și Solisse. Cer în schimb disciplină: periere zilnică, evitarea produselor pe bază de ulei în zona ochilor și întreținere la 3-4 săptămâni pentru completarea firelor căzute.",
      },
      {
        type: "h2",
        text: "Se pot combina?",
      },
      {
        type: "p",
        text: "Nu simultan — extensiile se aplică pe gene naturale, nu pe gene laminate recent. Poți însă alterna: multe cliente poartă extensii în sezonul evenimentelor și trec pe laminare în restul anului, ca pauză de întreținere. La Raffaella Beauty Studio (Sectorul 2, București) oferim ambele servicii, iar la o programare de consultație specialista îți recomandă varianta potrivită genelor tale. Programări: 0765 315 537 sau online prin Notino.",
      },
    ],
    faqs: [
      {
        question: "Ce ține mai mult: laminarea sau extensiile de gene?",
        answer:
          "Laminarea ține 6-8 săptămâni fără nicio întreținere. Extensiile arată impecabil 3-4 săptămâni, apoi necesită o ședință de întreținere pentru completarea firelor căzute natural.",
      },
      {
        question: "Ce este mai ieftin: laminarea sau extensiile?",
        answer:
          "Laminarea: 250 RON o dată la 6-8 săptămâni. Extensiile: 290-400 RON aplicarea plus 240-350 RON întreținerea lunară. Pe termen lung, laminarea este semnificativ mai economică; extensiile oferă în schimb un efect pe care laminarea nu-l poate atinge.",
      },
    ],
  },
];

export function getArticle(slug: string): BlogArticle | undefined {
  return blogArticles.find((a) => a.slug === slug);
}
