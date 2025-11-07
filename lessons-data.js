// All lessons data for the platform
const lessonsData = {
    "lesson1": {
        "id": "lesson1",
        "title": "Greetings and Introductions",
        "level": "A1",
        "goal": "Learn how to greet and introduce yourself in Montenegrin/Serbian",
        "theory": "<h3>Greetings</h3><p>In Serbian, you can greet people depending on the time of day:</p><ul><li><b>Dobro jutro</b> — Good morning</li><li><b>Dobar dan</b> — Good day / Good afternoon</li><li><b>Dobro veče</b> — Good evening</li><li><b>Laku noć</b> — Good night</li><li><b>Zdravo</b> — Hello (neutral)</li><li><b>Doviđenja</b> — Goodbye</li></ul><h3>Introducing Yourself</h3><p>To say your name, use <b>Ja sam...</b> (I am...)</p><p>Example: <b>Ja sam Ana.</b> — I am Ana.</p><p>To ask someone's name: <b>Kako se zovete?</b> (formal) or <b>Kako se zoveš?</b> (informal)</p><h3>How are you?</h3><p><b>Kako ste?</b> — How are you? (formal)<br><b>Kako si?</b> — How are you? (informal)<br><b>Dobro, hvala.</b> — Fine, thank you.<br><b>Nije loše.</b> — Not bad.</p>",
        "vocabulary": [
            {"word": "Dobro jutro", "translation": "Good morning"},
            {"word": "Dobar dan", "translation": "Good day"},
            {"word": "Dobro veče", "translation": "Good evening"},
            {"word": "Laku noć", "translation": "Good night"},
            {"word": "Zdravo", "translation": "Hello"},
            {"word": "Doviđenja", "translation": "Goodbye"},
            {"word": "Molim", "translation": "Please"},
            {"word": "Hvala", "translation": "Thank you"},
            {"word": "Kako ste?", "translation": "How are you? (formal)"},
            {"word": "Ja sam...", "translation": "I am..."}
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
        "title": "Numbers 1-20",
        "level": "A1",
        "goal": "Learn numbers from 1 to 20 in Montenegrin/Serbian",
        "theory": "<h3>Numbers 1-10</h3><p>Let's start with the basics:</p><ul><li><b>jedan</b> — one</li><li><b>dva</b> — two</li><li><b>tri</b> — three</li><li><b>četiri</b> — four</li><li><b>pet</b> — five</li><li><b>šest</b> — six</li><li><b>sedam</b> — seven</li><li><b>osam</b> — eight</li><li><b>devet</b> — nine</li><li><b>deset</b> — ten</li></ul><h3>Numbers 11-20</h3><ul><li><b>jedanaest</b> — eleven</li><li><b>dvanaest</b> — twelve</li><li><b>trinaest</b> — thirteen</li><li><b>četrnaest</b> — fourteen</li><li><b>petnaest</b> — fifteen</li><li><b>šesnaest</b> — sixteen</li><li><b>sedamnaest</b> — seventeen</li><li><b>osamnaest</b> — eighteen</li><li><b>devetnaest</b> — nineteen</li><li><b>dvadeset</b> — twenty</li></ul>",
        "vocabulary": [
            {"word": "jedan", "translation": "one"},
            {"word": "dva", "translation": "two"},
            {"word": "tri", "translation": "three"},
            {"word": "četiri", "translation": "four"},
            {"word": "pet", "translation": "five"},
            {"word": "šest", "translation": "six"},
            {"word": "sedam", "translation": "seven"},
            {"word": "osam", "translation": "eight"},
            {"word": "devet", "translation": "nine"},
            {"word": "deset", "translation": "ten"}
        ],
        "practice": [
            {
                "type": "multiple_choice",
                "question": "How do you say 'five' in Serbian?",
                "options": ["tri", "pet", "sedam", "devet"],
                "answer": "pet"
            },
            {
                "type": "translate",
                "question": "Translate to Serbian: three",
                "answer": "tri"
            },
            {
                "type": "fill_blank",
                "question": "How do you say 'ten' in Serbian? ___",
                "answer": "deset"
            }
        ],
        "order": 2,
        "available": true
    },
    "lesson3": {
        "id": "lesson3",
        "title": "Common Phrases",
        "level": "A1",
        "goal": "Learn essential phrases for daily conversations",
        "theory": "<h3>Useful Phrases</h3><p>Here are some common phrases you'll use every day:</p><ul><li><b>Izvinite</b> — Excuse me / Sorry</li><li><b>Molim</b> — Please / You're welcome</li><li><b>Hvala</b> — Thank you</li><li><b>Nema na čemu</b> — You're welcome</li><li><b>Da</b> — Yes</li><li><b>Ne</b> — No</li><li><b>Možda</b> — Maybe</li><li><b>Razumem</b> — I understand</li><li><b>Ne razumem</b> — I don't understand</li></ul>",
        "vocabulary": [
            {"word": "Izvinite", "translation": "Excuse me / Sorry"},
            {"word": "Molim", "translation": "Please / You're welcome"},
            {"word": "Hvala", "translation": "Thank you"},
            {"word": "Nema na čemu", "translation": "You're welcome"},
            {"word": "Da", "translation": "Yes"},
            {"word": "Ne", "translation": "No"},
            {"word": "Razumem", "translation": "I understand"},
            {"word": "Ne razumem", "translation": "I don't understand"}
        ],
        "practice": [
            {
                "type": "multiple_choice",
                "question": "How do you say 'I don't understand' in Serbian?",
                "options": ["Razumem", "Ne razumem", "Izvinite", "Molim"],
                "answer": "Ne razumem"
            },
            {
                "type": "translate",
                "question": "Translate to Serbian: Excuse me",
                "answer": "Izvinite"
            }
        ],
        "order": 3,
        "available": true
    },
    "lesson4": {
        "id": "lesson4",
        "title": "Food & Drinks",
        "level": "A1",
        "goal": "Learn vocabulary about food and beverages",
        "theory": "<h3>Coming Soon</h3><p>This lesson is being prepared. Check back soon!</p>",
        "vocabulary": [],
        "practice": [],
        "order": 4,
        "available": false
    },
    "lesson5": {
        "id": "lesson5",
        "title": "In the Room / Hotel",
        "level": "A1",
        "goal": "Describe rooms, everyday objects, and ask for permission",
        "theory": "<h3>Verb Moći</h3><p>Conjugation of <b>moći</b> (can) in present tense and polite requests.</p><h3>Adjectives & Gender</h3><p>Agreement of adjectives with masculine, feminine, and neuter nouns.</p><h3>Prepositions</h3><p>Usage of <b>na</b>, <b>ispred</b>, <b>pored</b> with locative.</p>",
        "vocabulary": [
            {"word": "soba", "translation": "room"},
            {"word": "sto", "translation": "table"},
            {"word": "stolica", "translation": "chair"},
            {"word": "krevet", "translation": "bed"},
            {"word": "orman", "translation": "closet"},
            {"word": "sprat", "translation": "floor (storey)"}
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
        "title": "Shopping for Food",
        "level": "A1",
        "goal": "Buy groceries, ask for quantities, and thank the seller",
        "theory": "<h3>Quantities</h3><p>Using <b>kilo</b>, <b>litar</b>, and counting food items.</p><h3>Expressions</h3><p>Polite requests with <b>treba mi</b> and <b>želim</b>.</p>",
        "vocabulary": [
            {"word": "voće", "translation": "fruit"},
            {"word": "povrće", "translation": "vegetables"},
            {"word": "hleb", "translation": "bread"},
            {"word": "sir", "translation": "cheese"},
            {"word": "mleko", "translation": "milk"},
            {"word": "cena", "translation": "price"}
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
        "title": "Come to My Place",
        "level": "A1",
        "goal": "Talk about schedules and invite someone",
        "theory": "<h3>Time Expressions</h3><p>Days of the week and telling time.</p><h3>Verbs</h3><p>Usage of <b>voleti</b> and <b>hteti</b> in present tense.</p>",
        "vocabulary": [
            {"word": "dan", "translation": "day"},
            {"word": "vreme", "translation": "time"},
            {"word": "sastanak", "translation": "meeting"},
            {"word": "gost", "translation": "guest"},
            {"word": "slobodno", "translation": "free (time)"}
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
        "title": "Family and Friends",
        "level": "A2",
        "goal": "Discuss family relationships and use possessives",
        "theory": "<h3>Plurals</h3><p>Forming plural nouns.</p><h3>Possessives</h3><p>Using <b>moj</b>, <b>tvoj</b>, <b>naš</b>, <b>vaš</b>.</p>",
        "vocabulary": [
            {"word": "otac", "translation": "father"},
            {"word": "majka", "translation": "mother"},
            {"word": "brat", "translation": "brother"},
            {"word": "sestra", "translation": "sister"},
            {"word": "prijatelj", "translation": "friend"}
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
        "title": "Daily Routine",
        "level": "A2",
        "goal": "Describe daily habits and routines",
        "theory": "<h3>Reflexive Verbs</h3><p>Conjugation of verbs like <b>se buditi</b>, <b>se umivati</b>.</p><h3>Genitive Singular</h3><p>Usage in time expressions.</p>",
        "vocabulary": [
            {"word": "jutro", "translation": "morning"},
            {"word": "veče", "translation": "evening"},
            {"word": "navika", "translation": "habit"},
            {"word": "aktivnost", "translation": "activity"},
            {"word": "odmor", "translation": "rest"}
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
        "title": "People and Descriptions",
        "level": "A2",
        "goal": "Describe appearance and personality",
        "theory": "<h3>Adjective Agreement</h3><p>Matching adjectives with noun gender and number.</p><h3>Questions</h3><p>Using <b>kakav/kakva/kakvo</b>.</p>",
        "vocabulary": [
            {"word": "visok", "translation": "tall"},
            {"word": "lep", "translation": "handsome/pretty"},
            {"word": "zanimljiv", "translation": "interesting"},
            {"word": "ljubazan", "translation": "kind"},
            {"word": "dobar", "translation": "good"}
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
        "title": "Nationalities and Languages",
        "level": "A2",
        "goal": "Talk about origin and languages you speak",
        "theory": "<h3>Locative Case</h3><p>Used with country/place names.</p><h3>Adjectives</h3><p>Forming nationality adjectives; question <b>Odakle si?</b></p>",
        "vocabulary": [
            {"word": "Srbija", "translation": "Serbia"},
            {"word": "Crna Gora", "translation": "Montenegro"},
            {"word": "Rusija", "translation": "Russia"},
            {"word": "Engleska", "translation": "England"},
            {"word": "srpski", "translation": "Serbian"},
            {"word": "crnogorski", "translation": "Montenegrin"}
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
        "title": "Weather and Seasons",
        "level": "A2",
        "goal": "Describe weather conditions and seasons",
        "theory": "<h3>Instrumental Case</h3><p>Using instrumental with weather expressions.</p><h3>Seasons</h3><p>Vocabulary and adjectives.</p>",
        "vocabulary": [
            {"word": "sunčano", "translation": "sunny"},
            {"word": "kiša", "translation": "rain"},
            {"word": "sneg", "translation": "snow"},
            {"word": "hladno", "translation": "cold"},
            {"word": "leto", "translation": "summer"},
            {"word": "zima", "translation": "winter"}
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
        "title": "Travel and Transport",
        "level": "A2",
        "goal": "Discuss travel plans and transport options",
        "theory": "<h3>Instrumental Plural</h3><p>Formation and usage.</p><h3>Prepositions</h3><p>Using <b>sa</b>, <b>bez</b>, <b>između</b>.</p>",
        "vocabulary": [
            {"word": "autobus", "translation": "bus"},
            {"word": "voz", "translation": "train"},
            {"word": "avion", "translation": "plane"},
            {"word": "putovanje", "translation": "trip"},
            {"word": "karta", "translation": "ticket"}
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
        "title": "Health and Body",
        "level": "A2",
        "goal": "Talk about health issues and ask for help",
        "theory": "<h3>Verb Boleti</h3><p>Expressing pain with dative structures.</p><h3>Imperative</h3><p>Forming polite commands.</p>",
        "vocabulary": [
            {"word": "glava", "translation": "head"},
            {"word": "ruka", "translation": "arm/hand"},
            {"word": "bol", "translation": "pain"},
            {"word": "doktor", "translation": "doctor"},
            {"word": "tableta", "translation": "tablet"}
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
        "title": "Jobs and Professions",
        "level": "B1",
        "goal": "Discuss occupations and work responsibilities",
        "theory": "<h3>Dative Case</h3><p>Usage with indirect objects.</p><h3>Profession Vocabulary</h3><p>Common titles and verbs related to work.</p>",
        "vocabulary": [
            {"word": "lekar", "translation": "doctor"},
            {"word": "učitelj", "translation": "teacher"},
            {"word": "inženjer", "translation": "engineer"},
            {"word": "raditi", "translation": "to work"},
            {"word": "firma", "translation": "company"}
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
        "title": "Hobbies and Free Time",
        "level": "B1",
        "goal": "Discuss hobbies, interests, and activities",
        "theory": "<h3>Verb Voleti</h3><p>Expressing likes.</p><h3>Baviti se</h3><p>Using reflexive structures with activities.</p><h3>Infinitive</h3><p>Constructing sentences with infinitives.</p>",
        "vocabulary": [
            {"word": "sport", "translation": "sport"},
            {"word": "muzika", "translation": "music"},
            {"word": "čitanje", "translation": "reading"},
            {"word": "film", "translation": "film"},
            {"word": "hobiji", "translation": "hobbies"}
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
        "title": "Future Plans",
        "level": "B1",
        "goal": "Express intentions and future schedules",
        "theory": "<h3>Future Tense</h3><p>Forming future with <b>ću + infinitive</b>.</p><h3>Time Expressions</h3><p>Using <b>sutra</b>, <b>sledeće godine</b>, etc.</p>",
        "vocabulary": [
            {"word": "sutra", "translation": "tomorrow"},
            {"word": "planovi", "translation": "plans"},
            {"word": "sledeće godine", "translation": "next year"},
            {"word": "uskoro", "translation": "soon"},
            {"word": "namera", "translation": "intention"}
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
        "title": "Comparisons and Opinions",
        "level": "B1",
        "goal": "Compare things and share opinions",
        "theory": "<h3>Comparatives</h3><p>Forming comparative and superlative adjectives.</p><h3>Opinions</h3><p>Using structures like <b>mislim da...</b>.</p>",
        "vocabulary": [
            {"word": "bolji", "translation": "better"},
            {"word": "najbolji", "translation": "best"},
            {"word": "lošiji", "translation": "worse"},
            {"word": "mišljenje", "translation": "opinion"},
            {"word": "prednost", "translation": "advantage"}
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
        "title": "Review & Storytelling",
        "level": "B1",
        "goal": "Consolidate learned material and narrate events",
        "theory": "<h3>Verb Aspect</h3><p>Contrast perfective vs. imperfective verbs.</p><h3>Narrative Practice</h3><p>Using past tenses in storytelling.</p>",
        "vocabulary": [
            {"word": "priča", "translation": "story"},
            {"word": "dogadjaj", "translation": "event"},
            {"word": "jučer", "translation": "yesterday"},
            {"word": "pre", "translation": "before"},
            {"word": "posle", "translation": "after"}
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

