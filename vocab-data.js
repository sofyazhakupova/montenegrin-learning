const vocabularyData = {
    lesson1: {
        title: "Lesson 1: Greetings and Introductions",
        categories: [
            {
                name: "Pronouns",
                type: "pronoun",
                items: [
                    { word: "ja", translation: "I / me" },
                    { word: "ti", translation: "you (informal)" },
                    { word: "on", translation: "he" },
                    { word: "ona", translation: "she" },
                    { word: "ono", translation: "it" },
                    { word: "mi", translation: "we" },
                    { word: "vi", translation: "you (plural / formal)" },
                    { word: "oni", translation: "they" }
                ]
            },
            {
                name: "Verbs",
                type: "verb",
                items: [
                    {
                        word: "biti",
                        translation: "to be",
                        conjugations: {
                            ja: "ja sam",
                            ti: "ti si",
                            on: "on je",
                            ona: "ona je",
                            ono: "ono je",
                            mi: "mi smo",
                            vi: "vi ste",
                            oni: "oni su"
                        }
                    },
                    {
                        word: "zvati se",
                        translation: "to be called",
                        conjugations: {
                            ja: "ja se zovem",
                            ti: "ti se zoveš",
                            on: "on se zove",
                            ona: "ona se zove",
                            ono: "ono se zove",
                            mi: "mi se zovemo",
                            vi: "vi se zovete",
                            oni: "oni se zovu"
                        }
                    },
                    {
                        word: "živeti",
                        translation: "to live",
                        conjugations: {
                            ja: "ja živim",
                            ti: "ti živiš",
                            on: "on živi",
                            ona: "ona živi",
                            ono: "ono živi",
                            mi: "mi živimo",
                            vi: "vi živite",
                            oni: "oni žive"
                        }
                    },
                    {
                        word: "razumeti",
                        translation: "to understand",
                        conjugations: {
                            ja: "ja razumem",
                            ti: "ti razumeš",
                            on: "on razume",
                            ona: "ona razume",
                            ono: "ono razume",
                            mi: "mi razumemo",
                            vi: "vi razumete",
                            oni: "oni razumeju"
                        }
                    }
                ]
            },
            {
                name: "Nouns",
                type: "noun",
                items: [
                    { word: "ime", translation: "name" },
                    { word: "zemlja", translation: "country" },
                    { word: "jezik", translation: "language" },
                    { word: "čovek", translation: "person" }
                ]
            },
            {
                name: "Adverbs & Particles",
                type: "adverb",
                items: [
                    { word: "da", translation: "yes" },
                    { word: "ne", translation: "no" },
                    { word: "hvala", translation: "thanks" },
                    { word: "molim", translation: "please" },
                    { word: "možda", translation: "maybe" },
                    { word: "ovde", translation: "here" },
                    { word: "tamo", translation: "there" }
                ]
            },
            {
                name: "Adjectives",
                type: "adjective",
                items: [
                    { word: "novi", translation: "new" },
                    { word: "stari", translation: "old" },
                    { word: "isti", translation: "same" },
                    { word: "drugi", translation: "other" }
                ]
            }
        ]
    },
    lesson2: {
        title: "Lesson 2: At the Café",
        categories: [
            {
                name: "Verbs",
                type: "verb",
                items: [
                    {
                        word: "imati",
                        translation: "to have",
                        conjugations: {
                            ja: "ja imam",
                            ti: "ti imaš",
                            on: "on ima",
                            ona: "ona ima",
                            ono: "ono ima",
                            mi: "mi imamo",
                            vi: "vi imate",
                            oni: "oni imaju"
                        }
                    },
                    {
                        word: "želeti",
                        translation: "to want",
                        conjugations: {
                            ja: "ja želim",
                            ti: "ti želiš",
                            on: "on želi",
                            ona: "ona želi",
                            ono: "ono želi",
                            mi: "mi želimo",
                            vi: "vi želite",
                            oni: "oni žele"
                        }
                    },
                    {
                        word: "piti",
                        translation: "to drink",
                        conjugations: {
                            ja: "ja pijem",
                            ti: "ti piješ",
                            on: "on pije",
                            ona: "ona pije",
                            ono: "ono pije",
                            mi: "mi pijemo",
                            vi: "vi pijete",
                            oni: "oni piju"
                        }
                    },
                    {
                        word: "jesti",
                        translation: "to eat",
                        conjugations: {
                            ja: "ja jedem",
                            ti: "ti jedeš",
                            on: "on jede",
                            ona: "ona jede",
                            ono: "ono jede",
                            mi: "mi jedemo",
                            vi: "vi jedete",
                            oni: "oni jedu"
                        }
                    }
                ]
            },
            {
                name: "Nouns",
                type: "noun",
                items: [
                    { word: "kafa", translation: "coffee" },
                    { word: "voda", translation: "water" },
                    { word: "čaj", translation: "tea" },
                    { word: "sok", translation: "juice" },
                    { word: "mleko", translation: "milk" },
                    { word: "pivo", translation: "beer" },
                    { word: "restoran", translation: "restaurant" },
                    { word: "konobar", translation: "waiter" }
                ]
            },
            {
                name: "Adverbs & Particles",
                type: "adverb",
                items: [
                    { word: "sada", translation: "now" },
                    { word: "kasnije", translation: "later" },
                    { word: "ovde", translation: "here" },
                    { word: "tamo", translation: "there" }
                ]
            },
            {
                name: "Phrases",
                type: "phrase",
                items: [
                    { word: "Koliko košta?", translation: "How much does it cost?" },
                    { word: "Ja bih…", translation: "I would like…" }
                ]
            }
        ]
    },
    lesson3: {
        title: "Lesson 3: Learning Serbian",
        categories: [
            {
                name: "Verbs",
                type: "verb",
                items: [
                    {
                        word: "učiti",
                        translation: "to learn",
                        conjugations: {
                            ja: "ja učim",
                            ti: "ti učiš",
                            on: "on uči",
                            ona: "ona uči",
                            ono: "ono uči",
                            mi: "mi učimo",
                            vi: "vi učite",
                            oni: "oni uče"
                        }
                    },
                    {
                        word: "govoriti",
                        translation: "to speak",
                        conjugations: {
                            ja: "ja govorim",
                            ti: "ti govoriš",
                            on: "on govori",
                            ona: "ona govori",
                            ono: "ono govori",
                            mi: "mi govorimo",
                            vi: "vi govorite",
                            oni: "oni govore"
                        }
                    },
                    {
                        word: "čitati",
                        translation: "to read",
                        conjugations: {
                            ja: "ja čitam",
                            ti: "ti čitaš",
                            on: "on čita",
                            ona: "ona čita",
                            ono: "ono čita",
                            mi: "mi čitamo",
                            vi: "vi čitate",
                            oni: "oni čitaju"
                        }
                    },
                    {
                        word: "pisati",
                        translation: "to write",
                        conjugations: {
                            ja: "ja pišem",
                            ti: "ti pišeš",
                            on: "on piše",
                            ona: "ona piše",
                            ono: "ono piše",
                            mi: "mi pišemo",
                            vi: "vi pišete",
                            oni: "oni pišu"
                        }
                    },
                    {
                        word: "znati",
                        translation: "to know",
                        conjugations: {
                            ja: "ja znam",
                            ti: "ti znaš",
                            on: "on zna",
                            ona: "ona zna",
                            ono: "ono zna",
                            mi: "mi znamo",
                            vi: "vi znate",
                            oni: "oni znaju"
                        }
                    }
                ]
            },
            {
                name: "Nouns",
                type: "noun",
                items: [
                    { word: "škola", translation: "school" },
                    { word: "knjiga", translation: "book" },
                    { word: "novine", translation: "newspaper" },
                    { word: "učitelj", translation: "teacher" },
                    { word: "učenik", translation: "student" }
                ]
            },
            {
                name: "Adverbs",
                type: "adverb",
                items: [
                    { word: "često", translation: "often" },
                    { word: "malo", translation: "a little" },
                    { word: "mnogo", translation: "a lot" }
                ]
            },
            {
                name: "Adjectives",
                type: "adjective",
                items: [
                    { word: "težak", translation: "difficult" },
                    { word: "lak", translation: "easy" }
                ]
            }
        ]
    },
    lesson4: {
        title: "Lesson 4: Where is...?",
        categories: [
            {
                name: "Verbs",
                type: "verb",
                items: [
                    {
                        word: "ići",
                        translation: "to go",
                        conjugations: {
                            ja: "ja idem",
                            ti: "ti ideš",
                            on: "on ide",
                            ona: "ona ide",
                            ono: "ono ide",
                            mi: "mi idemo",
                            vi: "vi idete",
                            oni: "oni idu"
                        }
                    },
                    {
                        word: "dolaziti",
                        translation: "to come",
                        conjugations: {
                            ja: "ja dolazim",
                            ti: "ti dolaziš",
                            on: "on dolazi",
                            ona: "ona dolazi",
                            ono: "ono dolazi",
                            mi: "mi dolazimo",
                            vi: "vi dolazite",
                            oni: "oni dolaze"
                        }
                    },
                    {
                        word: "videti",
                        translation: "to see",
                        conjugations: {
                            ja: "ja vidim",
                            ti: "ti vidiš",
                            on: "on vidi",
                            ona: "ona vidi",
                            ono: "ono vidi",
                            mi: "mi vidimo",
                            vi: "vi vidite",
                            oni: "oni vide"
                        }
                    },
                    {
                        word: "tražiti",
                        translation: "to look for",
                        conjugations: {
                            ja: "ja tražim",
                            ti: "ti tražiš",
                            on: "on traži",
                            ona: "ona traži",
                            ono: "ono traži",
                            mi: "mi tražimo",
                            vi: "vi tražite",
                            oni: "oni traže"
                        }
                    },
                    {
                        word: "pokazati",
                        translation: "to show",
                        conjugations: {
                            ja: "ja pokažem",
                            ti: "ti pokažeš",
                            on: "on pokaže",
                            ona: "ona pokaže",
                            ono: "ono pokaže",
                            mi: "mi pokažemo",
                            vi: "vi pokažete",
                            oni: "oni pokažu"
                        }
                    }
                ]
            },
            {
                name: "Nouns",
                type: "noun",
                items: [
                    { word: "ulica", translation: "street" },
                    { word: "trg", translation: "square" },
                    { word: "banka", translation: "bank" },
                    { word: "pošta", translation: "post office" },
                    { word: "prodavnica", translation: "shop" },
                    { word: "restoran", translation: "restaurant" }
                ]
            },
            {
                name: "Adverbs",
                type: "adverb",
                items: [
                    { word: "levo", translation: "left" },
                    { word: "desno", translation: "right" },
                    { word: "pravo", translation: "straight" },
                    { word: "blizu", translation: "near" },
                    { word: "daleko", translation: "far" }
                ]
            }
        ]
    },
    lesson5: {
        title: "Lesson 5: In the Room / Hotel",
        categories: [
            {
                name: "Verbs",
                type: "verb",
                items: [
                    {
                        word: "moći",
                        translation: "can / to be able to",
                        conjugations: {
                            ja: "ja mogu",
                            ti: "ti možeš",
                            on: "on može",
                            ona: "ona može",
                            ono: "ono može",
                            mi: "mi možemo",
                            vi: "vi možete",
                            oni: "oni mogu"
                        }
                    },
                    {
                        word: "spavati",
                        translation: "to sleep",
                        conjugations: {
                            ja: "ja spavam",
                            ti: "ti spavaš",
                            on: "on spava",
                            ona: "ona spava",
                            ono: "ono spava",
                            mi: "mi spavamo",
                            vi: "vi spavate",
                            oni: "oni spavaju"
                        }
                    },
                    {
                        word: "ostati",
                        translation: "to stay",
                        conjugations: {
                            ja: "ja ostanem",
                            ti: "ti ostaneš",
                            on: "on ostane",
                            ona: "ona ostane",
                            ono: "ono ostane",
                            mi: "mi ostanemo",
                            vi: "vi ostanete",
                            oni: "oni ostanu"
                        }
                    }
                ]
            },
            {
                name: "Nouns",
                type: "noun",
                items: [
                    { word: "soba", translation: "room" },
                    { word: "sto", translation: "table" },
                    { word: "stolica", translation: "chair" },
                    { word: "krevet", translation: "bed" },
                    { word: "orman", translation: "wardrobe" },
                    { word: "sprat", translation: "floor / level" },
                    { word: "ključ", translation: "key" }
                ]
            },
            {
                name: "Adjectives",
                type: "adjective",
                items: [
                    { word: "otvoren", translation: "open" },
                    { word: "zatvoren", translation: "closed" },
                    { word: "veliki", translation: "big" },
                    { word: "mali", translation: "small" }
                ]
            },
            {
                name: "Phrases",
                type: "phrase",
                items: [
                    { word: "Gde je kupatilo?", translation: "Where is the bathroom?" }
                ]
            }
        ]
    },
    lesson6: {
        title: "Lesson 6: Shopping for Food",
        categories: [
            {
                name: "Verbs",
                type: "verb",
                items: [
                    {
                        word: "kupiti",
                        translation: "to buy",
                        conjugations: {
                            ja: "ja kupim",
                            ti: "ti kupiš",
                            on: "on kupi",
                            ona: "ona kupi",
                            ono: "ono kupi",
                            mi: "mi kupimo",
                            vi: "vi kupite",
                            oni: "oni kupe"
                        }
                    },
                    {
                        word: "trebati",
                        translation: "to need",
                        conjugations: {
                            ja: "ja trebam",
                            ti: "ti trebaš",
                            on: "on treba",
                            ona: "ona treba",
                            ono: "ono treba",
                            mi: "mi trebamo",
                            vi: "vi trebate",
                            oni: "oni trebaju"
                        }
                    },
                    {
                        word: "uzeti",
                        translation: "to take",
                        conjugations: {
                            ja: "ja uzmem",
                            ti: "ti uzmeš",
                            on: "on uzme",
                            ona: "ona uzme",
                            ono: "ono uzme",
                            mi: "mi uzmemo",
                            vi: "vi uzmete",
                            oni: "oni uzmu"
                        }
                    },
                    {
                        word: "platiti",
                        translation: "to pay",
                        conjugations: {
                            ja: "ja platim",
                            ti: "ti platiš",
                            on: "on plati",
                            ona: "ona plati",
                            ono: "ono plati",
                            mi: "mi platimo",
                            vi: "vi platite",
                            oni: "oni plate"
                        }
                    }
                ]
            },
            {
                name: "Nouns",
                type: "noun",
                items: [
                    { word: "voće", translation: "fruit" },
                    { word: "povrće", translation: "vegetables" },
                    { word: "hleb", translation: "bread" },
                    { word: "sir", translation: "cheese" },
                    { word: "mleko", translation: "milk" },
                    { word: "cena", translation: "price" }
                ]
            },
            {
                name: "Adjectives",
                type: "adjective",
                items: [
                    { word: "skup", translation: "expensive" },
                    { word: "jeftin", translation: "cheap" },
                    { word: "ukusan", translation: "tasty" }
                ]
            },
            {
                name: "Phrases",
                type: "phrase",
                items: [
                    { word: "Koliko košta hleb?", translation: "How much is the bread?" }
                ]
            }
        ]
    },
    lesson7: {
        title: "Lesson 7: Come to My Place",
        categories: [
            {
                name: "Verbs",
                type: "verb",
                items: [
                    {
                        word: "voleti",
                        translation: "to love",
                        conjugations: {
                            ja: "ja volim",
                            ti: "ti voliš",
                            on: "on voli",
                            ona: "ona voli",
                            ono: "ono voli",
                            mi: "mi volimo",
                            vi: "vi volite",
                            oni: "oni vole"
                        }
                    },
                    {
                        word: "hteti",
                        translation: "to want",
                        note: "Everyday speech often uses 'hoću, hoćeš…'",
                        conjugations: {
                            ja: "ja hoću",
                            ti: "ti hoćeš",
                            on: "on hoće",
                            ona: "ona hoće",
                            ono: "ono hoće",
                            mi: "mi hoćemo",
                            vi: "vi hoćete",
                            oni: "oni hoće"
                        }
                    },
                    {
                        word: "doći",
                        translation: "to come",
                        conjugations: {
                            ja: "ja dođem",
                            ti: "ti dođeš",
                            on: "on dođe",
                            ona: "ona dođe",
                            ono: "ono dođe",
                            mi: "mi dođemo",
                            vi: "vi dođete",
                            oni: "oni dođu"
                        }
                    },
                    {
                        word: "čekati",
                        translation: "to wait",
                        conjugations: {
                            ja: "ja čekam",
                            ti: "ti čekaš",
                            on: "on čeka",
                            ona: "ona čeka",
                            ono: "ono čeka",
                            mi: "mi čekamo",
                            vi: "vi čekate",
                            oni: "oni čekaju"
                        }
                    }
                ]
            },
            {
                name: "Nouns",
                type: "noun",
                items: [
                    { word: "dan", translation: "day" },
                    { word: "vreme", translation: "time / weather" },
                    { word: "prijatelj", translation: "friend" },
                    { word: "gost", translation: "guest" }
                ]
            },
            {
                name: "Adverbs",
                type: "adverb",
                items: [
                    { word: "danas", translation: "today" },
                    { word: "sutra", translation: "tomorrow" },
                    { word: "juče", translation: "yesterday" }
                ]
            }
        ]
    },
    lesson8: {
        title: "Lesson 8: Family and Friends",
        categories: [
            {
                name: "Nouns",
                type: "noun",
                items: [
                    { word: "otac", translation: "father" },
                    { word: "majka", translation: "mother" },
                    { word: "brat", translation: "brother" },
                    { word: "sestra", translation: "sister" },
                    { word: "dete", translation: "child" },
                    { word: "porodica", translation: "family" }
                ]
            },
            {
                name: "Verbs",
                type: "verb",
                items: [
                    {
                        word: "imati",
                        translation: "to have",
                        reference: "See Lesson 2 for conjugations"
                    },
                    {
                        word: "voleti",
                        translation: "to love",
                        reference: "See Lesson 7 for conjugations"
                    }
                ]
            },
            {
                name: "Adjectives",
                type: "adjective",
                items: [
                    { word: "mlad", translation: "young" },
                    { word: "star", translation: "old" }
                ]
            }
        ]
    },
    lesson9: {
        title: "Lesson 9: Daily Routine",
        categories: [
            {
                name: "Verbs",
                type: "verb",
                items: [
                    {
                        word: "buditi se",
                        translation: "to wake up",
                        conjugations: {
                            ja: "ja se budim",
                            ti: "ti se budiš",
                            on: "on se budi",
                            ona: "ona se budi",
                            ono: "ono se budi",
                            mi: "mi se budimo",
                            vi: "vi se budite",
                            oni: "oni se bude"
                        }
                    },
                    {
                        word: "ustati",
                        translation: "to get up",
                        conjugations: {
                            ja: "ja ustanem",
                            ti: "ti ustaneš",
                            on: "on ustane",
                            ona: "ona ustane",
                            ono: "ono ustane",
                            mi: "mi ustanemo",
                            vi: "vi ustanete",
                            oni: "oni ustanu"
                        }
                    },
                    {
                        word: "umivati se",
                        translation: "to wash (oneself)",
                        conjugations: {
                            ja: "ja se umivam",
                            ti: "ti se umivaš",
                            on: "on se umiva",
                            ona: "ona se umiva",
                            ono: "ono se umiva",
                            mi: "mi se umivamo",
                            vi: "vi se umivate",
                            oni: "oni se umivaju"
                        }
                    },
                    {
                        word: "raditi",
                        translation: "to work",
                        conjugations: {
                            ja: "ja radim",
                            ti: "ti radiš",
                            on: "on radi",
                            ona: "ona radi",
                            ono: "ono radi",
                            mi: "mi radimo",
                            vi: "vi radite",
                            oni: "oni rade"
                        }
                    },
                    {
                        word: "spavati",
                        translation: "to sleep",
                        reference: "See Lesson 5 for conjugations"
                    }
                ]
            },
            {
                name: "Nouns",
                type: "noun",
                items: [
                    { word: "jutro", translation: "morning" },
                    { word: "veče", translation: "evening" },
                    { word: "posao", translation: "work / job" },
                    { word: "kuća", translation: "house" }
                ]
            },
            {
                name: "Adverbs",
                type: "adverb",
                items: [
                    { word: "rano", translation: "early" },
                    { word: "kasno", translation: "late" }
                ]
            }
        ]
    },
    lesson10: {
        title: "Lesson 10: People and Descriptions",
        categories: [
            {
                name: "Nouns",
                type: "noun",
                items: [
                    { word: "čovek", translation: "man" },
                    { word: "žena", translation: "woman" },
                    { word: "prijatelj", translation: "friend" }
                ]
            },
            {
                name: "Adjectives",
                type: "adjective",
                items: [
                    { word: "visok", translation: "tall" },
                    { word: "nizak", translation: "short" },
                    { word: "lep", translation: "beautiful" },
                    { word: "ružan", translation: "ugly" },
                    { word: "pametan", translation: "smart" },
                    { word: "ljubazan", translation: "kind" }
                ]
            }
        ]
    },
    lesson11: {
        title: "Lesson 11: Nationalities and Languages",
        categories: [
            {
                name: "Nouns",
                type: "noun",
                items: [
                    { word: "Srbija", translation: "Serbia" },
                    { word: "Crna Gora", translation: "Montenegro" },
                    { word: "Engleska", translation: "England" },
                    { word: "Rusija", translation: "Russia" },
                    { word: "jezik", translation: "language" },
                    { word: "narod", translation: "people / nation" }
                ]
            },
            {
                name: "Adjectives",
                type: "adjective",
                items: [
                    { word: "srpski", translation: "Serbian" },
                    { word: "crnogorski", translation: "Montenegrin" },
                    { word: "engleski", translation: "English" },
                    { word: "ruski", translation: "Russian" }
                ]
            }
        ]
    },
    lesson12: {
        title: "Lesson 12: Weather and Seasons",
        categories: [
            {
                name: "Nouns",
                type: "noun",
                items: [
                    { word: "vreme", translation: "weather" },
                    { word: "sunce", translation: "sun" },
                    { word: "kiša", translation: "rain" },
                    { word: "sneg", translation: "snow" },
                    { word: "proleće", translation: "spring" },
                    { word: "leto", translation: "summer" },
                    { word: "jesen", translation: "autumn" },
                    { word: "zima", translation: "winter" }
                ]
            },
            {
                name: "Adjectives",
                type: "adjective",
                items: [
                    { word: "toplo", translation: "warm" },
                    { word: "hladno", translation: "cold" },
                    { word: "vetrovito", translation: "windy" }
                ]
            },
            {
                name: "Verbs",
                type: "verb",
                items: [
                    {
                        word: "padati",
                        translation: "to fall (rain/snow)",
                        conjugations: {
                            ja: "ja padam",
                            ti: "ti padaš",
                            on: "on pada",
                            ona: "ona pada",
                            ono: "ono pada",
                            mi: "mi padamo",
                            vi: "vi padate",
                            oni: "oni padaju"
                        }
                    }
                ]
            }
        ]
    },
    lesson13: {
        title: "Lesson 13: Travel and Transport",
        categories: [
            {
                name: "Nouns",
                type: "noun",
                items: [
                    { word: "autobus", translation: "bus" },
                    { word: "voz", translation: "train" },
                    { word: "avion", translation: "airplane" },
                    { word: "putovanje", translation: "trip" },
                    { word: "karta", translation: "ticket" }
                ]
            },
            {
                name: "Verbs",
                type: "verb",
                items: [
                    {
                        word: "putovati",
                        translation: "to travel",
                        conjugations: {
                            ja: "ja putujem",
                            ti: "ti putuješ",
                            on: "on putuje",
                            ona: "ona putuje",
                            ono: "ono putuje",
                            mi: "mi putujemo",
                            vi: "vi putujete",
                            oni: "oni putuju"
                        }
                    },
                    {
                        word: "stići",
                        translation: "to arrive",
                        conjugations: {
                            ja: "ja stignem",
                            ti: "ti stigneš",
                            on: "on stigne",
                            ona: "ona stigne",
                            ono: "ono stigne",
                            mi: "mi stignemo",
                            vi: "vi stignete",
                            oni: "oni stignu"
                        }
                    },
                    {
                        word: "poći",
                        translation: "to depart",
                        conjugations: {
                            ja: "ja pođem",
                            ti: "ti pođeš",
                            on: "on pođe",
                            ona: "ona pođe",
                            ono: "ono pođe",
                            mi: "mi pođemo",
                            vi: "vi pođete",
                            oni: "oni pođu"
                        }
                    }
                ]
            }
        ]
    },
    lesson14: {
        title: "Lesson 14: Health and Body",
        categories: [
            {
                name: "Nouns",
                type: "noun",
                items: [
                    { word: "glava", translation: "head" },
                    { word: "ruka", translation: "hand / arm" },
                    { word: "noga", translation: "leg" },
                    { word: "bol", translation: "pain" },
                    { word: "doktor", translation: "doctor" },
                    { word: "apoteka", translation: "pharmacy" }
                ]
            },
            {
                name: "Verbs",
                type: "verb",
                items: [
                    {
                        word: "boleti",
                        translation: "to hurt",
                        note: "Often used impersonally: 'Boli me glava.'",
                        conjugations: {
                            ja: "ja boljim",
                            ti: "ti boliš",
                            on: "on boli",
                            ona: "ona boli",
                            ono: "ono boli",
                            mi: "mi bolimo",
                            vi: "vi bolite",
                            oni: "oni bole"
                        }
                    },
                    {
                        word: "osećati se",
                        translation: "to feel",
                        conjugations: {
                            ja: "ja se osećam",
                            ti: "ti se osećaš",
                            on: "on se oseća",
                            ona: "ona se oseća",
                            ono: "ono se oseća",
                            mi: "mi se osećamo",
                            vi: "vi se osećate",
                            oni: "oni se osećaju"
                        }
                    },
                    {
                        word: "uzeti",
                        translation: "to take",
                        reference: "See Lesson 6 for conjugations"
                    }
                ]
            }
        ]
    },
    lesson15: {
        title: "Lesson 15: Jobs and Professions",
        categories: [
            {
                name: "Nouns",
                type: "noun",
                items: [
                    { word: "posao", translation: "job" },
                    { word: "kompanija", translation: "company" },
                    { word: "radnik", translation: "worker" },
                    { word: "lekar", translation: "doctor" },
                    { word: "učitelj", translation: "teacher" },
                    { word: "inženjer", translation: "engineer" }
                ]
            },
            {
                name: "Verbs",
                type: "verb",
                items: [
                    {
                        word: "raditi",
                        translation: "to work",
                        reference: "See Lesson 9 for conjugations"
                    },
                    {
                        word: "pomagati",
                        translation: "to help",
                        conjugations: {
                            ja: "ja pomažem",
                            ti: "ti pomažeš",
                            on: "on pomaže",
                            ona: "ona pomaže",
                            ono: "ono pomaže",
                            mi: "mi pomažemo",
                            vi: "vi pomažete",
                            oni: "oni pomažu"
                        }
                    },
                    {
                        word: "zaraditi",
                        translation: "to earn",
                        conjugations: {
                            ja: "ja zaradim",
                            ti: "ti zaradiš",
                            on: "on zaradi",
                            ona: "ona zaradi",
                            ono: "ono zaradi",
                            mi: "mi zaradimo",
                            vi: "vi zaradite",
                            oni: "oni zarade"
                        }
                    }
                ]
            }
        ]
    },
    lesson16: {
        title: "Lesson 16: Hobbies and Free Time",
        categories: [
            {
                name: "Nouns",
                type: "noun",
                items: [
                    { word: "sport", translation: "sport" },
                    { word: "muzika", translation: "music" },
                    { word: "knjiga", translation: "book" },
                    { word: "film", translation: "movie" }
                ]
            },
            {
                name: "Verbs",
                type: "verb",
                items: [
                    {
                        word: "svirati",
                        translation: "to play (an instrument)",
                        conjugations: {
                            ja: "ja sviram",
                            ti: "ti sviraš",
                            on: "on svira",
                            ona: "ona svira",
                            ono: "ono svira",
                            mi: "mi sviramo",
                            vi: "vi svirate",
                            oni: "oni sviraju"
                        }
                    },
                    {
                        word: "gledati",
                        translation: "to watch",
                        conjugations: {
                            ja: "ja gledam",
                            ti: "ti gledaš",
                            on: "on gleda",
                            ona: "ona gleda",
                            ono: "ono gleda",
                            mi: "mi gledamo",
                            vi: "vi gledate",
                            oni: "oni gledaju"
                        }
                    },
                    {
                        word: "čitati",
                        translation: "to read",
                        reference: "See Lesson 3 for conjugations"
                    },
                    {
                        word: "baviti se",
                        translation: "to engage in",
                        conjugations: {
                            ja: "ja se bavim",
                            ti: "ti se baviš",
                            on: "on se bavi",
                            ona: "ona se bavi",
                            ono: "ono se bavi",
                            mi: "mi se bavimo",
                            vi: "vi se bavite",
                            oni: "oni se bave"
                        }
                    }
                ]
            }
        ]
    },
    lesson17: {
        title: "Lesson 17: Future Plans",
        categories: [
            {
                name: "Verbs",
                type: "verb",
                items: [
                    {
                        word: "planirati",
                        translation: "to plan",
                        conjugations: {
                            ja: "ja planiram",
                            ti: "ti planiraš",
                            on: "on planira",
                            ona: "ona planira",
                            ono: "ono planira",
                            mi: "mi planiramo",
                            vi: "vi planirate",
                            oni: "oni planiraju"
                        }
                    },
                    {
                        word: "nadati se",
                        translation: "to hope",
                        conjugations: {
                            ja: "ja se nadam",
                            ti: "ti se nadaš",
                            on: "on se nada",
                            ona: "ona se nada",
                            ono: "ono se nada",
                            mi: "mi se nadamo",
                            vi: "vi se nadate",
                            oni: "oni se nadaju"
                        }
                    },
                    {
                        word: "želeti",
                        translation: "to wish",
                        reference: "See Lesson 2 for conjugations"
                    },
                    {
                        word: "ići",
                        translation: "to go",
                        reference: "See Lesson 4 for conjugations"
                    }
                ]
            },
            {
                name: "Adverbs",
                type: "adverb",
                items: [
                    { word: "uskoro", translation: "soon" },
                    { word: "sledeće nedelje", translation: "next week" }
                ]
            }
        ]
    },
    lesson18: {
        title: "Lesson 18: Comparisons and Opinions",
        categories: [
            {
                name: "Adjectives",
                type: "adjective",
                items: [
                    { word: "bolji", translation: "better" },
                    { word: "najbolji", translation: "best" },
                    { word: "lošiji", translation: "worse" },
                    { word: "zanimljiv", translation: "interesting" }
                ]
            },
            {
                name: "Phrases",
                type: "phrase",
                items: [
                    { word: "Mislim da...", translation: "I think that…" },
                    { word: "Po mom mišljenju…", translation: "In my opinion…" }
                ]
            }
        ]
    },
    lesson19: {
        title: "Lesson 19: Review & Storytelling",
        categories: [
            {
                name: "Focus",
                type: "note",
                items: [
                    { word: "All tenses", translation: "Past, present, future" },
                    { word: "Aspects", translation: "Perfective / imperfective pairs" }
                ]
            },
            {
                name: "Practice",
                type: "note",
                items: [
                    { word: "Kratke priče", translation: "Short stories" },
                    { word: "Opis događaja", translation: "Describing events" }
                ]
            }
        ]
    },
    shared: {
        title: "Shared Reference",
        categories: [
            {
                name: "Numbers",
                type: "reference",
                items: [
                    { word: "1–10", translation: "jedan, dva, tri, četiri, pet, šest, sedam, osam, devet, deset" },
                    { word: "10–100", translation: "deset, dvadeset, trideset … sto" },
                    { word: "100–1000", translation: "sto, dvesta, trista … hiljadu" }
                ]
            },
            {
                name: "Days of the Week",
                type: "reference",
                items: [
                    { word: "ponedeljak", translation: "Monday" },
                    { word: "utorak", translation: "Tuesday" },
                    { word: "sreda", translation: "Wednesday" },
                    { word: "četvrtak", translation: "Thursday" },
                    { word: "petak", translation: "Friday" },
                    { word: "subota", translation: "Saturday" },
                    { word: "nedelja", translation: "Sunday" }
                ]
            },
            {
                name: "Months",
                type: "reference",
                items: [
                    { word: "januar", translation: "January" },
                    { word: "februar", translation: "February" },
                    { word: "mart", translation: "March" },
                    { word: "april", translation: "April" },
                    { word: "maj", translation: "May" },
                    { word: "jun", translation: "June" },
                    { word: "jul", translation: "July" },
                    { word: "avgust", translation: "August" },
                    { word: "septembar", translation: "September" },
                    { word: "oktobar", translation: "October" },
                    { word: "novembar", translation: "November" },
                    { word: "decembar", translation: "December" }
                ]
            }
        ]
    }
};

