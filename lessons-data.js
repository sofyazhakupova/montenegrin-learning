// All lessons data for the platform
const lessonsData = {
    "lesson1": {
        "id": "lesson1",
        "vocabularySet": "lesson1",
        "title": "Greetings and Introductions",
        "level": "A1",
        "goal": "Learn how to greet and introduce yourself in Montenegrin/Serbian",
        "theory": "<h3>Greetings</h3><p>In Serbian, you can greet people depending on the time of day:</p><ul><li><b>Dobro jutro</b> — Good morning</li><li><b>Dobar dan</b> — Good day / Good afternoon</li><li><b>Dobro veče</b> — Good evening</li><li><b>Laku noć</b> — Good night</li><li><b>Zdravo</b> — Hello (neutral)</li><li><b>Doviđenja</b> — Goodbye</li></ul><h3>Introducing Yourself</h3><p>To say your name, use <b>Ja sam...</b> (I am...)</p><p>Example: <b>Ja sam Ana.</b> — I am Ana.</p><p>To ask someone's name: <b>Kako se zovete?</b> (formal) or <b>Kako se zoveš?</b> (informal)</p><h3>How are you?</h3><p><b>Kako ste?</b> — How are you? (formal)<br><b>Kako si?</b> — How are you? (informal)<br><b>Dobro, hvala.</b> — Fine, thank you.<br><b>Nije loše.</b> — Not bad.</p>",
        "vocabulary": [
            {"category": "Pronouns", "items": ["ja", "ti", "on", "ona", "ono", "mi", "vi", "oni"]},
            {"category": "Verbs", "items": ["biti", "zvati se", "živeti", "razumeti"]},
            {"category": "Nouns", "items": ["ime", "zemlja", "jezik", "čovek"]},
            {"category": "Adverbs & Particles", "items": ["da", "ne", "hvala", "molim", "možda", "ovde", "tamo"]},
            {"category": "Adjectives", "items": ["novi", "stari", "isti", "drugi"]}
        ],
        "practice": [
            {
                "type": "multiple_choice",
                "question": "How do you say 'Good night' in Serbian?",
                "options": ["Dobar dan", "Dobro veče", "Laku noć", "Zdravo"],
                "answer": "Laku noć"
            },
            {
                "type": "fill_blank",
                "question": "Kako ___? (How are you?)",
                "answer": "ste"
            },
            {
                "type": "matching",
                "pairs": [
                    ["Zdravo", "Hello"],
                    ["Doviđenja", "Goodbye"],
                    ["Hvala", "Thank you"],
                    ["Molim", "Please"]
                ]
            },
            {
                "type": "translate",
                "question": "Translate to Serbian: I am Ana.",
                "answer": "Ja sam Ana."
            }
        ],
        "order": 1,
        "available": true
    },
    "lesson2": {
        "id": "lesson2",
        "vocabularySet": "lesson2",
        "title": "At the Café",
        "level": "A1",
        "goal": "Order food or drinks politely and interact with café staff",
        "theory": "<h3>Polite Ordering</h3><p>Use <b>Ja bih...</b> and <b>Molim</b> to soften requests. Combine with menu nouns to ask for items.</p><h3>Verbs imati & želeti</h3><p>Present tense forms help express what you have or want.</p><h3>Noun Gender</h3><p>Match adjectives and pronouns with masculine/feminine/neuter café vocabulary.</p>",
        "vocabulary": [
            {"category": "Verbs", "items": ["imati", "želeti", "piti", "jesti"]},
            {"category": "Nouns", "items": ["kafa", "voda", "čaj", "sok", "mleko", "pivo", "restoran", "konobar"]},
            {"category": "Adverbs", "items": ["sada", "kasnije", "ovde", "tamo"]},
            {"category": "Phrases", "items": ["Koliko košta?", "Ja bih…"]}
        ],
        "practice": [
            {"type": "dialogue", "description": "Role-play a waiter–guest conversation using polite forms."},
            {"type": "matching", "description": "Match drinks to the correct order sentence."},
            {"type": "listening", "description": "Identify items and prices from café audio snippets."}
        ],
        "order": 2,
        "available": true
    },
    "lesson3": {
        "id": "lesson3",
        "vocabularySet": "lesson3",
        "title": "Learning Serbian",
        "level": "A1",
        "goal": "Talk about studying Serbian and what you can read or understand",
        "theory": "<h3>Present Tense Patterns</h3><p>-ti verbs become <b>-m, -š, -ju</b> endings: učiti → učim.</p><h3>Study Verbs</h3><p>Focus on učiti, govoriti, čitati, pisati, znati.</p>",
        "vocabulary": [
            {"category": "Verbs", "items": ["učiti", "govoriti", "čitati", "pisati", "znati"]},
            {"category": "Nouns", "items": ["škola", "knjiga", "novine", "učitelj", "učenik"]},
            {"category": "Adverbs", "items": ["često", "malo", "mnogo"]},
            {"category": "Adjectives", "items": ["težak", "lak"]}
        ],
        "practice": [
            {"type": "conjugation", "description": "Conjugate core study verbs in the present tense."},
            {"type": "reading", "description": "Read a short text and answer yes/no questions with 'Da li…?'"},
            {"type": "speaking", "description": "Describe what languages you speak and what you are learning."}
        ],
        "order": 3,
        "available": false
    },
    "lesson4": {
        "id": "lesson4",
        "vocabularySet": "lesson4",
        "title": "Where is...? (Directions & Places)",
        "level": "A1",
        "goal": "Ask for and give directions using common place nouns",
        "theory": "<h3>Prepositions + Locative</h3><p>Use <b>u</b> and <b>na</b> with locations (u banci, na trgu).</p><h3>Questions</h3><p>Structure <b>Gde je...?</b> for asking where something is.</p>",
        "vocabulary": [
            {"category": "Verbs", "items": ["ići", "dolaziti", "videti", "tražiti", "pokazati"]},
            {"category": "Nouns", "items": ["ulica", "trg", "banka", "pošta", "prodavnica", "restoran"]},
            {"category": "Adverbs", "items": ["levo", "desno", "pravo", "blizu", "daleko"]}
        ],
        "practice": [
            {"type": "map", "description": "Use a city map to follow and give directions."},
            {"type": "dialogue", "description": "Ask for a location using 'Gde je...?' and respond."},
            {"type": "listening", "description": "Identify landmarks from short direction audio clips."}
        ],
        "order": 4,
        "available": false
    },
    "lesson5": {
        "id": "lesson5",
        "vocabularySet": "lesson5",
        "title": "In the Room / Hotel",
        "level": "A1",
        "goal": "Describe rooms, everyday objects, and ask for permission",
        "theory": "<h3>Verb Moći</h3><p>Conjugation of <b>moći</b> (can) in present tense and polite requests.</p><h3>Adjectives & Gender</h3><p>Agreement of adjectives with masculine, feminine, and neuter nouns.</p><h3>Prepositions</h3><p>Usage of <b>na</b>, <b>ispred</b>, <b>pored</b> with locative.</p>",
        "vocabulary": [
            {"category": "Verbs", "items": ["moći", "spavati", "ostati"]},
            {"category": "Nouns", "items": ["soba", "sto", "stolica", "krevet", "orman", "sprat", "ključ"]},
            {"category": "Adjectives", "items": ["otvoren", "zatvoren", "veliki", "mali"]},
            {"category": "Phrases", "items": ["Gde je kupatilo?"]}
        ],
        "practice": [
            {"type": "matching", "description": "Match room objects with descriptions."},
            {"type": "fill_blank", "description": "Fill in sentences describing where objects are located."},
            {"type": "dialogue", "description": "Role-play checking into a hotel and asking for items."}
        ],
        "order": 5,
        "available": false
    },
    "lesson6": {
        "id": "lesson6",
        "vocabularySet": "lesson6",
        "title": "Shopping for Food",
        "level": "A1",
        "goal": "Buy groceries, ask for quantities, and thank the seller",
        "theory": "<h3>Quantities</h3><p>Using <b>kilo</b>, <b>litar</b>, and counting food items.</p><h3>Expressions</h3><p>Polite requests with <b>treba mi</b> and <b>želim</b>.</p>",
        "vocabulary": [
            {"category": "Verbs", "items": ["kupiti", "trebati", "uzeti", "platiti"]},
            {"category": "Nouns", "items": ["voće", "povrće", "hleb", "sir", "mleko", "cena"]},
            {"category": "Adjectives", "items": ["skup", "jeftin", "ukusan"]},
            {"category": "Phrases", "items": ["Koliko košta hleb?"]}
        ],
        "practice": [
            {"type": "dialogue", "description": "Market role-play using 'Dajte mi…'"},
            {"type": "multiple_choice", "description": "Choose correct quantities for shopping lists."},
            {"type": "listening", "description": "Identify items from recorded market conversations."}
        ],
        "order": 6,
        "available": false
    },
    "lesson7": {
        "id": "lesson7",
        "vocabularySet": "lesson7",
        "title": "Come to My Place",
        "level": "A1",
        "goal": "Talk about schedules and invite someone",
        "theory": "<h3>Time Expressions</h3><p>Days of the week and telling time.</p><h3>Verbs</h3><p>Usage of <b>voleti</b> and <b>hteti</b> in present tense.</p>",
        "vocabulary": [
            {"category": "Verbs", "items": ["voleti", "hteti", "doći", "čekati"]},
            {"category": "Nouns", "items": ["dan", "vreme", "prijatelj", "gost"]},
            {"category": "Adverbs", "items": ["danas", "sutra", "juče"]}
        ],
        "practice": [
            {"type": "dialogue", "description": "Arrange a meeting using availability statements."},
            {"type": "writing", "description": "Compose an invitation message."},
            {"type": "table", "description": "Fill in a weekly planner with activities."}
        ],
        "order": 7,
        "available": false
    },
    "lesson8": {
        "id": "lesson8",
        "vocabularySet": "lesson8",
        "title": "Family and Friends",
        "level": "A2",
        "goal": "Discuss family relationships and use possessives",
        "theory": "<h3>Plurals</h3><p>Forming plural nouns.</p><h3>Possessives</h3><p>Using <b>moj</b>, <b>tvoj</b>, <b>naš</b>, <b>vaš</b>.</p>",
        "vocabulary": [
            {"category": "Nouns", "items": ["otac", "majka", "brat", "sestra", "dete", "porodica"]},
            {"category": "Verbs", "items": ["imati", "voleti"]},
            {"category": "Adjectives", "items": ["mlad", "star"]}
        ],
        "practice": [
            {"type": "diagram", "description": "Build and label a family tree."},
            {"type": "fill_blank", "description": "Use correct possessive adjectives."},
            {"type": "speaking", "description": "Describe your family to a partner."}
        ],
        "order": 8,
        "available": false
    },
    "lesson9": {
        "id": "lesson9",
        "vocabularySet": "lesson9",
        "title": "Daily Routine",
        "level": "A2",
        "goal": "Describe daily habits and routines",
        "theory": "<h3>Reflexive Verbs</h3><p>Conjugation of verbs like <b>se buditi</b>, <b>se umivati</b>.</p><h3>Genitive Singular</h3><p>Usage in time expressions.</p>",
        "vocabulary": [
            {"category": "Verbs", "items": ["buditi se", "ustati", "umivati se", "raditi", "spavati"]},
            {"category": "Nouns", "items": ["jutro", "veče", "posao", "kuća"]},
            {"category": "Adverbs", "items": ["rano", "kasno"]}
        ],
        "practice": [
            {"type": "ordering", "description": "Sequence daily activities."},
            {"type": "writing", "description": "Describe a typical day."},
            {"type": "questionnaire", "description": "Interview a partner about routines."}
        ],
        "order": 9,
        "available": false
    },
    "lesson10": {
        "id": "lesson10",
        "vocabularySet": "lesson10",
        "title": "People and Descriptions",
        "level": "A2",
        "goal": "Describe appearance and personality",
        "theory": "<h3>Adjective Agreement</h3><p>Matching adjectives with noun gender and number.</p><h3>Questions</h3><p>Using <b>kakav/kakva/kakvo</b>.</p>",
        "vocabulary": [
            {"category": "Nouns", "items": ["čovek", "žena", "prijatelj"]},
            {"category": "Adjectives", "items": ["visok", "nizak", "lep", "ružan", "pametan", "ljubazan"]}
        ],
        "practice": [
            {"type": "matching", "description": "Match photos with adjectives."},
            {"type": "speaking", "description": "Describe a friend or celebrity."},
            {"type": "fill_blank", "description": "Complete sentences with correct adjective forms."}
        ],
        "order": 10,
        "available": false
    },
    "lesson11": {
        "id": "lesson11",
        "vocabularySet": "lesson11",
        "title": "Nationalities and Languages",
        "level": "A2",
        "goal": "Talk about origin and languages you speak",
        "theory": "<h3>Locative Case</h3><p>Used with country/place names.</p><h3>Adjectives</h3><p>Forming nationality adjectives; question <b>Odakle si?</b></p>",
        "vocabulary": [
            {"category": "Nouns", "items": ["Srbija", "Crna Gora", "Engleska", "Rusija", "jezik", "narod"]},
            {"category": "Adjectives", "items": ["srpski", "crnogorski", "engleski", "ruski"]}
        ],
        "practice": [
            {"type": "dialogue", "description": "Introduce where you are from and languages you speak."},
            {"type": "table", "description": "Complete nationality charts."},
            {"type": "listening", "description": "Identify countries from short audio clips."}
        ],
        "order": 11,
        "available": false
    },
    "lesson12": {
        "id": "lesson12",
        "vocabularySet": "lesson12",
        "title": "Weather and Seasons",
        "level": "A2",
        "goal": "Describe weather conditions and seasons",
        "theory": "<h3>Instrumental Case</h3><p>Using instrumental with weather expressions.</p><h3>Seasons</h3><p>Vocabulary and adjectives.</p>",
        "vocabulary": [
            {"category": "Nouns", "items": ["vreme", "sunce", "kiša", "sneg", "proleće", "leto", "jesen", "zima"]},
            {"category": "Adjectives", "items": ["toplo", "hladno", "vetrovito"]},
            {"category": "Verbs", "items": ["padati"]}
        ],
        "practice": [
            {"type": "listening", "description": "Listen to weather reports and answer questions."},
            {"type": "comparison", "description": "Compare seasons in different regions."},
            {"type": "speaking", "description": "Describe today's weather."}
        ],
        "order": 12,
        "available": false
    },
    "lesson13": {
        "id": "lesson13",
        "vocabularySet": "lesson13",
        "title": "Travel and Transport",
        "level": "A2",
        "goal": "Discuss travel plans and transport options",
        "theory": "<h3>Instrumental Plural</h3><p>Formation and usage.</p><h3>Prepositions</h3><p>Using <b>sa</b>, <b>bez</b>, <b>između</b>.</p>",
        "vocabulary": [
            {"category": "Nouns", "items": ["autobus", "voz", "avion", "putovanje", "karta"]},
            {"category": "Verbs", "items": ["putovati", "stići", "poći"]}
        ],
        "practice": [
            {"type": "dialogue", "description": "Book a ticket at the station."},
            {"type": "planning", "description": "Create a weekend travel plan."},
            {"type": "fill_blank", "description": "Use correct prepositions with transport words."}
        ],
        "order": 13,
        "available": false
    },
    "lesson14": {
        "id": "lesson14",
        "vocabularySet": "lesson14",
        "title": "Health and Body",
        "level": "A2",
        "goal": "Talk about health issues and ask for help",
        "theory": "<h3>Verb Boleti</h3><p>Expressing pain with dative structures.</p><h3>Imperative</h3><p>Forming polite commands.</p>",
        "vocabulary": [
            {"category": "Nouns", "items": ["glava", "ruka", "noga", "bol", "doktor", "apoteka", "tableta"]},
            {"category": "Verbs", "items": ["boleti", "osećati se", "uzeti"]}
        ],
        "practice": [
            {"type": "roleplay", "description": "Doctor–patient dialogues."},
            {"type": "matching", "description": "Match symptoms to advice."},
            {"type": "writing", "description": "Fill out a simple medical form."}
        ],
        "order": 14,
        "available": false
    },
    "lesson15": {
        "id": "lesson15",
        "vocabularySet": "lesson15",
        "title": "Jobs and Professions",
        "level": "B1",
        "goal": "Discuss occupations and work responsibilities",
        "theory": "<h3>Dative Case</h3><p>Usage with indirect objects.</p><h3>Profession Vocabulary</h3><p>Common titles and verbs related to work.</p>",
        "vocabulary": [
            {"category": "Nouns", "items": ["posao", "kompanija", "radnik", "lekar", "učitelj", "inženjer"]},
            {"category": "Verbs", "items": ["raditi", "pomagati", "zaraditi"]}
        ],
        "practice": [
            {"type": "writing", "description": "Complete a short CV."},
            {"type": "speaking", "description": "Talk about your job responsibilities."},
            {"type": "listening", "description": "Identify professions from audio clips."}
        ],
        "order": 15,
        "available": false
    },
    "lesson16": {
        "id": "lesson16",
        "vocabularySet": "lesson16",
        "title": "Hobbies and Free Time",
        "level": "B1",
        "goal": "Discuss hobbies, interests, and activities",
        "theory": "<h3>Verb Voleti</h3><p>Expressing likes.</p><h3>Baviti se</h3><p>Using reflexive structures with activities.</p><h3>Infinitive</h3><p>Constructing sentences with infinitives.</p>",
        "vocabulary": [
            {"category": "Nouns", "items": ["sport", "muzika", "knjiga", "film"]},
            {"category": "Verbs", "items": ["svirati", "gledati", "čitati", "baviti se"]}
        ],
        "practice": [
            {"type": "survey", "description": "Ask classmates about hobbies."},
            {"type": "dialogue", "description": "Discuss weekend plans."},
            {"type": "writing", "description": "Describe what you like to do."}
        ],
        "order": 16,
        "available": false
    },
    "lesson17": {
        "id": "lesson17",
        "vocabularySet": "lesson17",
        "title": "Future Plans",
        "level": "B1",
        "goal": "Express intentions and future schedules",
        "theory": "<h3>Future Tense</h3><p>Forming future with <b>ću + infinitive</b>.</p><h3>Time Expressions</h3><p>Using <b>sutra</b>, <b>sledeće godine</b>, etc.</p>",
        "vocabulary": [
            {"category": "Verbs", "items": ["planirati", "nadati se", "želeti", "ići"]},
            {"category": "Adverbs", "items": ["uskoro", "sledeće nedelje"]},
            {"category": "Nouns", "items": ["planovi", "namera"]}
        ],
        "practice": [
            {"type": "planning", "description": "Create a future schedule."},
            {"type": "speaking", "description": "Discuss plans with a partner."},
            {"type": "fill_blank", "description": "Complete sentences with future forms."}
        ],
        "order": 17,
        "available": false
    },
    "lesson18": {
        "id": "lesson18",
        "vocabularySet": "lesson18",
        "title": "Comparisons and Opinions",
        "level": "B1",
        "goal": "Compare things and share opinions",
        "theory": "<h3>Comparatives</h3><p>Forming comparative and superlative adjectives.</p><h3>Opinions</h3><p>Using structures like <b>mislim da...</b>.</p>",
        "vocabulary": [
            {"category": "Adjectives", "items": ["bolji", "najbolji", "lošiji", "zanimljiv"]},
            {"category": "Nouns", "items": ["mišljenje", "prednost"]},
            {"category": "Phrases", "items": ["Mislim da...", "Po mom mišljenju…"]}
        ],
        "practice": [
            {"type": "debate", "description": "Debate preferences with a partner."},
            {"type": "comparison", "description": "Compare two products or people."},
            {"type": "writing", "description": "Write a paragraph expressing an opinion."}
        ],
        "order": 18,
        "available": false
    },
    "lesson19": {
        "id": "lesson19",
        "vocabularySet": "lesson19",
        "title": "Review & Storytelling",
        "level": "B1",
        "goal": "Consolidate learned material and narrate events",
        "theory": "<h3>Verb Aspect</h3><p>Contrast perfective vs. imperfective verbs.</p><h3>Narrative Practice</h3><p>Using past tenses in storytelling.</p>",
        "vocabulary": [
            {"category": "Focus", "items": ["sva vremena", "aspekti glagola"]},
            {"category": "Useful Words", "items": ["priča", "događaj", "juče", "pre", "posle"]}
        ],
        "practice": [
            {"type": "writing", "description": "Write a short story using mixed aspects."},
            {"type": "speaking", "description": "Tell a personal story to the class."},
            {"type": "review", "description": "Comprehensive review of previous lessons."}
        ],
        "order": 19,
        "available": false
    }
};

// Helper function to get all available lessons sorted by order
function getAvailableLessons() {
    return Object.values(lessonsData)
        .filter(lesson => lesson.available)
        .sort((a, b) => a.order - b.order);
}

// Helper function to get a specific lesson by ID
function getLessonById(lessonId) {
    return lessonsData[lessonId] || null;
}

// Helper function to get lesson by order number
function getLessonByOrder(order) {
    return Object.values(lessonsData).find(lesson => lesson.order === order);
}

