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

