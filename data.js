// ==========================================
// ABRSM SYLLABUS DATA
// ==========================================

const syllabusChapters = [ 
    { title: "Rhythm", isReady: false },
    { title: "Pitch & transposition", isReady: false },
    { title: "Keys & scales", isReady: false },
    { title: "Intervals", isReady: false },
    { title: "Tonic triads", isReady: false },
    { title: "Terms & signs", isReady: true },
    { title: "Music in context", isReady: false }
];

// ==========================================
// GRADE 1 QUESTION BANK
// ==========================================
const gradeOneVocab = [
    // Dynamics
    { term: "fortissimo (ff)", answer: "very loud", category: "dynamics" },
    { term: "forte (f)", answer: "loud", category: "dynamics" },
    { term: "mezzo forte (mf)", answer: "moderately loud", category: "dynamics" },
    { term: "pianissimo (pp)", answer: "very quiet", category: "dynamics" },
    { term: "piano (p)", answer: "quiet", category: "dynamics" },
    { term: "mezzo piano (mp)", answer: "moderately quiet", category: "dynamics" },
    { term: "crescendo (cresc.)", answer: "gradually getting louder", category: "dynamics" },
    { term: "decrescendo (decresc.)", answer: "gradually getting quieter", category: "dynamics" },
    { term: "diminuendo (dim.)", answer: "gradually getting quieter", category: "dynamics" },
    
    // Speed / Tempo
    { term: "allegro", answer: "quick", category: "tempo" },
    { term: "allegretto", answer: "fairly quick", category: "tempo" },
    { term: "moderato", answer: "at a moderate speed", category: "tempo" },
    { term: "andante", answer: "at a medium speed", category: "tempo" },
    { term: "adagio", answer: "slow", category: "tempo" },
    { term: "accelerando (accel.)", answer: "gradually getting quicker", category: "tempo" },
    { term: "rallentando (rall.)", answer: "gradually getting slower", category: "tempo" },
    { term: "ritardando (ritard. or rit.)", answer: "gradually getting slower", category: "tempo" },
    { term: "a tempo", answer: "in time (resume the original speed)", category: "tempo" },
    
    // Style
    { term: "cantabile", answer: "in a singing style", category: "style" },
    { term: "da capo (D.C.)", answer: "repeat from the beginning", category: "style" },
    { term: "dolce", answer: "sweet", category: "style" },
    { term: "fine", answer: "the end", category: "style" },
    { term: "legato", answer: "smoothly", category: "style" },
    { term: "staccato (stacc.)", answer: "detached", category: "style" },

    // Signs & Symbols
    { term: `<svg viewBox="0 0 100 40" width="100" height="40" stroke="currentColor" stroke-width="4" stroke-linecap="round" fill="none"><path d="M 90 5 L 10 20 L 90 35" /></svg>`, answer: "gradually getting louder", category: "signs" },
    { term: `<svg viewBox="0 0 100 40" width="100" height="40" stroke="currentColor" stroke-width="4" stroke-linecap="round" fill="none"><path d="M 10 5 L 90 20 L 10 35" /></svg>`, answer: "gradually getting quieter", category: "signs" },
    { term: `<svg viewBox="0 0 40 40" width="40" height="40" stroke="currentColor" stroke-width="4" stroke-linecap="round" fill="none"><path d="M 10 10 L 30 20 L 10 30" /></svg>`, answer: "accent the note (play with emphasis)", category: "signs" },
    { term: `<svg viewBox="0 0 80 80" width="80" height="80" fill="currentColor"><ellipse cx="20" cy="60" rx="7" ry="5" transform="rotate(-15 20 60)"/><rect x="25" y="20" width="2" height="40"/><ellipse cx="60" cy="40" rx="7" ry="5" transform="rotate(-15 60 40)"/><rect x="65" y="0" width="2" height="40"/><path d="M 20 70 Q 50 75 60 50" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>`, answer: "slur; perform smoothly", category: "signs" },
    { term: `<svg viewBox="0 0 80 80" width="80" height="80" fill="currentColor"><ellipse cx="20" cy="60" rx="7" ry="5" transform="rotate(-15 20 60)"/><rect x="25" y="20" width="2" height="40"/><ellipse cx="60" cy="60" rx="7" ry="5" transform="rotate(-15 60 60)"/><rect x="65" y="20" width="2" height="40"/><path d="M 22 65 Q 40 75 58 65" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>`, answer: "tie; hold for the value of both notes", category: "signs" },
    { term: `<svg viewBox="0 0 40 80" width="40" height="80" fill="currentColor"><ellipse cx="20" cy="60" rx="7" ry="5" transform="rotate(-15 20 60)"/><rect x="25" y="20" width="2" height="40"/><circle cx="20" cy="75" r="4"/></svg>`, answer: "staccato; detached", category: "signs" },
    { term: `<svg viewBox="0 0 60 60" width="60" height="60" fill="currentColor" stroke="currentColor"><path d="M 15 30 Q 30 10 45 30" fill="none" stroke-width="4" stroke-linecap="round"/><circle cx="30" cy="25" r="3" stroke="none"/></svg>`, answer: "pause on the note or rest", category: "signs" },
    { term: `<div class="flex items-center gap-2"><svg viewBox="0 0 30 50" width="24" height="40" fill="currentColor"><ellipse cx="12" cy="40" rx="8" ry="6" transform="rotate(-15 12 40)"/><rect x="18" y="10" width="2" height="30"/></svg> <span class="text-4xl font-black">= 60</span></div>`, answer: "play at a tempo of 60 crotchet beats in a minute", category: "signs" },
    { term: `<svg viewBox="0 0 40 60" width="40" height="60" fill="currentColor"><rect x="10" y="10" width="2" height="40"/><rect x="16" y="10" width="6" height="40"/><circle cx="28" cy="25" r="3"/><circle cx="28" cy="35" r="3"/></svg>`, answer: "repeat the section between the two signs", category: "signs" }
];

// ==========================================
// GRADE 2 SPECIFIC QUESTION BANK
// ==========================================
const gradeTwoOnlyVocab = [
    // Dynamics
    { term: "fp (fortepiano)", answer: "loud, then immediately quiet", category: "dynamics" },
    
    // Tempo
    { term: "presto", answer: "fast (quicker than allegro)", category: "tempo" },
    { term: "vivace, vivo", answer: "lively, quick", category: "tempo" },
    { term: "lento", answer: "slow (slower than adagio)", category: "tempo" },
    { term: "largo", answer: "slow, stately (the same as, or slower than, lento)", category: "tempo" },
    { term: "grave", answer: "very slow, solemn", category: "tempo" },
    { term: "più mosso", answer: "more movement, quicker", category: "tempo" },
    { term: "meno mosso", answer: "less movement; slower", category: "tempo" },
    { term: "ritenuto (riten., rit.)", answer: "getting slower; held back", category: "tempo" },
    { term: "con moto", answer: "with movement", category: "tempo" },
    { term: "allargando", answer: "broadening", category: "tempo" },
    
    // Expression
    { term: "espressivo (espress.)", answer: "expressive", category: "style" },
    { term: "grazioso", answer: "graceful", category: "style" },
    { term: "alla marcia", answer: "in the style of a march", category: "style" },
    { term: "dal segno (D.S.) 𝄋", answer: "repeat from the sign 𝄋", category: "style" },

    // General
    { term: "molto", answer: "very, much", category: "general" },
    { term: "non troppo", answer: "not too much", category: "general" },
    { term: "poco, poco a poco", answer: "a little; little by little", category: "general" },
    { term: "col, con", answer: "with", category: "general" },
    { term: "e, ed", answer: "and", category: "general" },
    { term: "ma", answer: "but", category: "general" },
    { term: "meno", answer: "less", category: "general" },
    { term: "più", answer: "more", category: "general" },
    { term: "senza", answer: "without", category: "general" },

    // Signs & Symbols
    { term: `<svg viewBox="0 0 40 40" width="40" height="40" stroke="currentColor" stroke-width="4" stroke-linecap="round" fill="none"><path d="M 10 30 L 20 10 L 30 30" /></svg>`, answer: "strong accent (play the note with strong emphasis)", category: "signs" },
    { term: `<svg viewBox="0 0 80 60" width="80" height="60" fill="currentColor"><path d="M 10 30 Q 40 10 70 30" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><circle cx="20" cy="40" r="3"/><circle cx="40" cy="40" r="3"/><circle cx="60" cy="40" r="3"/></svg>`, answer: "slightly separated", category: "signs" },
    { term: `<svg viewBox="0 0 40 40" width="40" height="40" fill="currentColor"><path d="M 15 10 L 25 10 L 20 30 Z" /></svg>`, answer: "staccatissimo (very detached indeed)", category: "signs" },
    { term: `<svg viewBox="0 0 40 80" width="40" height="80" fill="currentColor"><ellipse cx="20" cy="60" rx="7" ry="5" transform="rotate(-15 20 60)"/><rect x="25" y="20" width="2" height="40"/><rect x="10" y="10" width="20" height="4" rx="2" ry="2"/></svg>`, answer: "give the note slight pressure", category: "signs" },
    { term: `<div class="flex items-center gap-1"><span class="text-3xl font-black italic mr-2">8va</span><svg viewBox="0 0 60 10" width="60" height="10" stroke="currentColor" stroke-width="3" stroke-dasharray="6,4"><line x1="0" y1="5" x2="60" y2="5"/><line x1="60" y1="5" x2="60" y2="10"/></svg></div>`, answer: "perform an octave higher", category: "signs" },
    { term: `<svg viewBox="0 0 60 40" width="60" height="40" fill="currentColor"><text x="30" y="15" font-family="Inter" font-weight="900" font-size="16" text-anchor="middle">4</text><rect x="10" y="22" width="40" height="6"/><rect x="10" y="15" width="2" height="20"/><rect x="48" y="15" width="2" height="20"/></svg>`, answer: "rest for the number of bars indicated", category: "signs" },
    { term: `<svg viewBox="0 0 80 40" width="80" height="40" fill="currentColor"><text x="15" y="25" font-family="Inter" font-weight="900" font-size="16">1.</text><path d="M 10 35 L 10 10 L 70 10" fill="none" stroke="currentColor" stroke-width="3"/></svg>`, answer: "first-time bar (in a repeated section, play this bar the first time through)", category: "signs" },
    { term: `<svg viewBox="0 0 80 40" width="80" height="40" fill="currentColor"><text x="15" y="25" font-family="Inter" font-weight="900" font-size="16">2.</text><path d="M 10 35 L 10 10 L 70 10" fill="none" stroke="currentColor" stroke-width="3"/></svg>`, answer: "second-time bar (in a repeated section, play this bar the second time through)", category: "signs" }
];

// ==========================================
// GRADE 3 SPECIFIC QUESTION BANK
// ==========================================
const gradeThreeOnlyVocab = [
    // Dynamics
    { term: "sforzando, sforzato, sf, sfz", answer: "forced, accented", category: "dynamics" },
    
    // Tempo
    { term: "andantino", answer: "slightly faster than andante (but may also mean slightly slower)", category: "tempo" },
    { term: "prestissimo", answer: "very fast", category: "tempo" },
    
    // Expression
    { term: "agitato", answer: "agitated", category: "style" },
    { term: "animato", answer: "animated, lively", category: "style" },
    { term: "con forza", answer: "with force", category: "style" },
    { term: "energico", answer: "energetic", category: "style" },
    { term: "giocoso", answer: "playful, merry", category: "style" },
    { term: "leggiero", answer: "light", category: "style" },
    { term: "maestoso", answer: "majestic", category: "style" },
    { term: "marcato (marc.)", answer: "emphatic, accented", category: "style" },
    { term: "pesante", answer: "heavy", category: "style" },
    { term: "risoluto", answer: "bold, strong", category: "style" },
    { term: "scherzando", answer: "playful, joking", category: "style" },
    { term: "semplice", answer: "simple, plain", category: "style" },
    { term: "sostenuto (sost.)", answer: "sustained", category: "style" },
    { term: "tranquillo", answer: "calm", category: "style" },
    { term: "triste, tristamente", answer: "sad, sorrowful", category: "style" },

    // General
    { term: "ben", answer: "well", category: "general" },
    { term: "prima, primo", answer: "first", category: "general" },
    { term: "sempre", answer: "always", category: "general" },
    { term: "simile", answer: "in the same way", category: "general" },
    { term: "subito (sub.)", answer: "suddenly", category: "general" }
];

// Combine Grade 1, 2, and 3 for students taking the Grade 3 exam
const gradeThreeVocab = [...gradeTwoVocab, ...gradeThreeOnlyVocab];

// Combine Grade 1 and Grade 2 for students taking the Grade 2 exam
const gradeTwoVocab = [...gradeOneVocab, ...gradeTwoOnlyVocab];
