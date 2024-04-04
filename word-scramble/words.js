let words = [
    {
        word: "addition",
        hint: "The process of adding numbers"
    },
    {
        word: "meeting",
        hint: "Event in which people come together"
    },
    {
        word: "number",
        hint: "Math symbol used for counting"
    },
    {
        word: "exchange",
        hint: "The act of trading"
    },
    {
        word: "canvas",
        hint: "Piece of fabric for oil painting"
    },
    {
        word: "garden",
        hint: "Space for planting flower and plant"
    },
    {
        word: "position",
        hint: "Location of someone or something"
    },
    {
        word: "feather",
        hint: "Hair like outer covering of bird"
    },
    {
        word: "comfort",
        hint: "A pleasant feeling of relaxation"
    },
    {
        word: "tongue",
        hint: "The muscular organ of mouth"
    },
    {
        word: "expansion",
        hint: "The process of increase or grow"
    },
    {
        word: "country",
        hint: "A politically identified region"
    },
    {
        word: "group",
        hint: "A number of objects or persons"
    },
    {
        word: "taste",
        hint: "Ability of tongue to detect flavour"
    },
    {
        word: "store",
        hint: "Large shop where goods are traded"
    },
    {
        word: "field",
        hint: "Area of land for farming activities"
    },
    {
        word: "friend",
        hint: "Person other than a family member"
    },
    {
        word: "pocket",
        hint: "A bag for carrying small items"
    },
    {
        word: "needle",
        hint: "A thin and sharp metal pin"
    },
    {
        word: "expert",
        hint: "Person with extensive knowledge"
    },
    {
        word: "statement",
        hint: "A declaration of something"
    },
    {
        word: "second",
        hint: "One-sixtieth of a minute"
    },
    {
        word: "library",
        hint: "Place containing collection of books"
    },

    { word: "puzzle", hint: "A game testing ingenuity" },
    { word: "journey", hint: "Act of traveling from one place to another" },
    { word: "ocean", hint: "Large body of salt water" },
    { word: "galaxy", hint: "Massive system of stars" },
    { word: "mountain", hint: "Large natural elevation of the earth's surface" },
    { word: "rainbow", hint: "An arc of colors in the sky" },
    { word: "music", hint: "Art of combining vocal or instrumental sounds" },
    { word: "volcano", hint: "Mountain with a crater" },
    { word: "forest", hint: "Large area covered chiefly with trees" },
    { word: "desert", hint: "Barren area of landscape" },
    { word: "island", hint: "Piece of land surrounded by water" },
    { word: "river", hint: "Large natural stream of water" },
    { word: "valley", hint: "Low area between hills" },
    { word: "beach", hint: "Pebbled or sandy shore" },
    { word: "bridge", hint: "Structure carrying a pathway" },
    { word: "city", hint: "Large town" },
    { word: "village", hint: "Group of houses in a rural area" },
    { word: "guitar", hint: "Musical instrument with strings" },
    { word: "piano", hint: "Large keyboard musical instrument" },
    { word: "drums", hint: "Percussion instruments" },
    { word: "trumpet", hint: "Brass musical instrument" },
    { word: "violin", hint: "String instrument played with a bow" },
    { word: "flute", hint: "Woodwind instrument" },
    { word: "painting", hint: "Art of applying pigment to a surface" },
    { word: "sculpture", hint: "Art of making two- or three-dimensional forms" },
    { word: "novel", hint: "Long narrative work of fiction" },
    { word: "poetry", hint: "Literary work expressing feelings" },
    { word: "dance", hint: "Moving rhythmically to music" },
    { word: "theater", hint: "Art of writing and producing plays" },
    { word: "cinema", hint: "Art of making motion pictures" },
    { word: "recipe", hint: "Set of instructions for preparing a dish" },
    { word: "bicycle", hint: "Vehicle with two wheels" },
    { word: "airplane", hint: "Powered flying vehicle with wings" },
    { word: "train", hint: "Series of connected railway cars" },
    { word: "ship", hint: "Large watercraft" },
    { word: "sunset", hint: "Time in the evening when the sun goes down" },
    { word: "sunrise", hint: "Time in the morning when the sun comes up" },
    { word: "shadow", hint: "Dark area produced by a body blocking light" },
    { word: "echo", hint: "Sound caused by reflection of sound waves" },
    { word: "thunder", hint: "Loud sound following a lightning flash" },
    { word: "lightning", hint: "Sudden electrical discharge" },
    { word: "rain", hint: "Precipitation in the form of water droplets" },
    { word: "snow", hint: "Atmospheric water vapor frozen into ice crystals" },
    { word: "wind", hint: "Natural movement of air" },
    { word: "storm", hint: "Violent weather condition" },
    { word: "cloud", hint: "Visible mass of condensed water vapor" },
    { word: "fog", hint: "Thick cloud of tiny water droplets" },
    { word: "mirror", hint: "Reflective surface" },
    { word: "glass", hint: "Hard, brittle substance" },
    { word: "paper", hint: "Material for writing or printing on" },
    { word: "pen", hint: "Instrument for writing or drawing" },
    { word: "book", hint: "Written or printed work" },
    { word: "letter", hint: "Character representing one or more sounds" },
    { word: "sentence", hint: "Set of words conveying a statement" },
    { word: "paragraph", hint: "Distinct section of writing" },
    { word: "chapter", hint: "Main division of a book" },
    { word: "novel", hint: "Fictional narrative book" },
    { word: "journal", hint: "Daily record of news and events" },
    { word: "poem", hint: "Piece of writing in verse" },
    { word: "lyrics", hint: "Words of a song" },
    { word: "melody", hint: "Sequence of musical notes" },
    { word: "rhythm", hint: "Patterned recurrence of beats" },
    { word: "harmony", hint: "Combination of simultaneously sounded musical notes" },
    { word: "note", hint: "Single tone of definite pitch" },
    { word: "scale", hint: "Series of musical notes" },
    { word: "chord", hint: "Group of notes sounded together" },
    { word: "performance", hint: "Act of performing a show" },
    { word: "audience", hint: "Group of spectators or listeners" },
    { word: "stage", hint: "Raised floor for performances" },
    { word: "show", hint: "Entertainment or display" },
    { word: "concert", hint: "Musical performance" },
    { word: "festival", hint: "Day or period of celebration" },
    { word: "exhibition", hint: "Public display of works" },
    { word: "gallery", hint: "Room or building for displaying art" },
    { word: "museum", hint: "Institution preserving cultural artifacts" },
    { word: "library", hint: "Collection of books and resources" },
    { word: "archive", hint: "Collection of historical documents" },
    { word: "document", hint: "Written or printed record" },
    { word: "manuscript", hint: "Document written by hand" },
    { word: "biography", hint: "Written account of another person's life" },
    { word: "autobiography", hint: "Written account of one's own life" },
    { word: "novella", hint: "Short novel" },
    { word: "short story", hint: "Brief work of fiction" },
    { word: "essay", hint: "Short piece of writing on a particular subject" },
    { word: "article", hint: "Written composition in prose" },
    { word: "column", hint: "Regular section in a newspaper" },
    { word: "editorial", hint: "Article expressing opinions" },
    { word: "interview", hint: "Meeting for obtaining information" },
    { word: "report", hint: "Formal account of facts" },
    { word: "review", hint: "Critical assessment of a work" },
    { word: "tutorial", hint: "Instructional lesson" },
    { word: "lecture", hint: "Educational talk" },
    { word: "workshop", hint: "Session of intensive discussion" },
    { word: "seminar", hint: "Conference for discussion" },
    { word: "conference", hint: "Formal meeting for discussion" },
    { word: "symposium", hint: "Meeting on a particular subject" },
    { word: "panel", hint: "Group of experts discussing a topic" },
    { word: "debate", hint: "Formal discussion on a topic" },
    { word: "dialogue", hint: "Conversation between two or more people" },
    { word: "speech", hint: "Formal address or discourse" },
    { word: "presentation", hint: "Act of presenting information" },
    { word: "announcement", hint: "Publicly made statement" },
    { word: "news", hint: "Newly received information" },
    { word: "broadcast", hint: "Transmitted program" },
    { word: "series", hint: "Number of events" },
    { word: "episode", hint: "A single event or group of related events" },
]