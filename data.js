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
// GRADE 1 QUESTION BANKS (With Categories)
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
    { term: "ritardando (ritard.)", answer: "gradually getting slower", category: "tempo" },
    { term: "a tempo", answer: "in time (resume the original speed)", category: "tempo" },
    
    // Style & Repeats
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
