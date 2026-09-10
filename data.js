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
// GRADE 1 QUESTION BANKS (With pure SVG graphics)
// ==========================================

const gradeOneVocab = [
    // Dynamics
    { term: "fortissimo (ff)", answer: "very loud" },
    { term: "forte (f)", answer: "loud" },
    { term: "mezzo forte (mf)", answer: "moderately loud" },
    { term: "pianissimo (pp)", answer: "very quiet" },
    { term: "piano (p)", answer: "quiet" },
    { term: "mezzo piano (mp)", answer: "moderately quiet" },
    { term: "crescendo (cresc.)", answer: "gradually getting louder" },
    { term: "decrescendo (decresc.)", answer: "gradually getting quieter" },
    { term: "diminuendo (dim.)", answer: "gradually getting quieter" },
    
    // Speed / Tempo
    { term: "allegro", answer: "quick" },
    { term: "allegretto", answer: "fairly quick" },
    { term: "moderato", answer: "at a moderate speed" },
    { term: "andante", answer: "at a medium speed" },
    { term: "adagio", answer: "slow" },
    { term: "accelerando (accel.)", answer: "gradually getting quicker" },
    { term: "rallentando (rall.)", answer: "gradually getting slower" },
    { term: "ritardando (ritard.)", answer: "gradually getting slower" },
    { term: "a tempo", answer: "in time (resume the original speed)" },
    
    // Style & Repeats
    { term: "cantabile", answer: "in a singing style" },
    { term: "da capo (D.C.)", answer: "repeat from the beginning" },
    { term: "dolce", answer: "sweet" },
    { term: "fine", answer: "the end" },
    { term: "legato", answer: "smoothly" },
    { term: "staccato (stacc.)", answer: "detached" },

    // Signs & Symbols (Using inline SVGs for perfect rendering)
    
    // Crescendo Hairpin
    { term: `<svg viewBox="0 0 100 40" width="100" height="40" stroke="currentColor" stroke-width="4" stroke-linecap="round" fill="none"><path d="M 90 5 L 10 20 L 90 35" /></svg>`, answer: "gradually getting louder" },
    
    // Diminuendo Hairpin
    { term: `<svg viewBox="0 0 100 40" width="100" height="40" stroke="currentColor" stroke-width="4" stroke-linecap="round" fill="none"><path d="M 10 5 L 90 20 L 10 35" /></svg>`, answer: "gradually getting quieter" },
    
    // Accent Sign
    { term: `<svg viewBox="0 0 40 40" width="40" height="40" stroke="currentColor" stroke-width="4" stroke-linecap="round" fill="none"><path d="M 10 10 L 30 20 L 10 30" /></svg>`, answer: "accent the note (play with emphasis)" },
    
    // Slur
    { term: `<svg viewBox="0 0 80 80" width="80" height="80" fill="currentColor"><ellipse cx="20" cy="60" rx="7" ry="5" transform="rotate(-15 20 60)"/><rect x="25" y="20" width="2" height="40"/><ellipse cx="60" cy="40" rx="7" ry="5" transform="rotate(-15 60 40)"/><rect x="65" y="0" width="2" height="40"/><path d="M 20 70 Q 50 75 60 50" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>`, answer: "slur; perform smoothly" },
    
    // Tie
    { term: `<svg viewBox="0 0 80 80" width="80" height="80" fill="currentColor"><ellipse cx="20" cy="60" rx="7" ry="5" transform="rotate(-15 20 60)"/><rect x="25" y="20" width="2" height="40"/><ellipse cx="60" cy="60" rx="7" ry="5" transform="rotate(-15 60 60)"/><rect x="65" y="20" width="2" height="40"/><path d="M 22 65 Q 40 75 58 65" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>`, answer: "tie; hold for the value of both notes" },
    
    // Staccato Dot
    { term: `<svg viewBox="0 0 40 80" width="40" height="80" fill="currentColor"><ellipse cx="20" cy="60" rx="7" ry="5" transform="rotate(-15 20 60)"/><rect x="25" y="20" width="2" height="40"/><circle cx="20" cy="75" r="4"/></svg>`, answer: "staccato; detached" },
    
    // Pause / Fermata
    { term: `<svg viewBox="0 0 60 60" width="60" height="60" fill="currentColor" stroke="currentColor"><path d="M 15 30 Q 30 10 45 30" fill="none" stroke-width="4" stroke-linecap="round"/><circle cx="30" cy="25" r="3" stroke="none"/></svg>`, answer: "pause on the note or rest" },
    
    // Metronome Mark
    { term: `<div class="flex items-center gap-2"><svg viewBox="0 0 30 50" width="24" height="40" fill="currentColor"><ellipse cx="12" cy="40" rx="8" ry="6" transform="rotate(-15 12 40)"/><rect x="18" y="10" width="2" height="30"/></svg> <span class="text-4xl font-black">= 60</span></div>`, answer: "play at a tempo of 60 crotchet beats in a minute" },
    
    // Repeat Marks
    { term: `<svg viewBox="0 0 40 60" width="40" height="60" fill="currentColor"><rect x="10" y="10" width="2" height="40"/><rect x="16" y="10" width="6" height="40"/><circle cx="28" cy="25" r="3"/><circle cx="28" cy="35" r="3"/></svg>`, answer: "repeat the section between the two signs" }
];
