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
// GRADE 1 QUESTION BANKS
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
    { term: "ritardando (ritard. or rit.)", answer: "gradually getting slower" },
    { term: "a tempo", answer: "in time (resume the original speed)" },
    
    // Style & Repeats
    { term: "cantabile", answer: "in a singing style" },
    { term: "da capo (D.C.)", answer: "repeat from the beginning" },
    { term: "dolce", answer: "sweet" },
    { term: "fine", answer: "the end" },
    { term: "legato", answer: "smoothly" },
    { term: "staccato (stacc.)", answer: "detached" },

    // Signs & Symbols
    { term: "Hairpin opening (<)", answer: "gradually getting louder (crescendo)" },
    { term: "Hairpin closing (>)", answer: "gradually getting quieter (diminuendo)" },
    { term: "Accent sign (> above note)", answer: "accent the note (play with emphasis)" },
    { term: "Slur (curved line over different notes)", answer: "perform smoothly" },
    { term: "Tie (curved line over same notes)", answer: "hold for the value of both notes" },
    { term: "Dot above/below note", answer: "staccato; detached" },
    { term: "Pause sign (𝄐)", answer: "pause on the note or rest" },
    { term: "Metronome mark (e.g. ♩ = 60)", answer: "play at a tempo of 60 crotchet beats in a minute" },
    { term: "Repeat marks (𝄆  𝄇)", answer: "repeat the section between the two signs" }
];
