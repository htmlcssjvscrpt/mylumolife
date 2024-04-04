const wordList = [
    {
        word: "guitar",
        hint: "A musical instrument with strings."
    },
    {
        word: "oxygen",
        hint: "A colorless, odorless gas essential for life."
    },
    {
        word: "mountain",
        hint: "A large natural elevation of the Earth's surface."
    },
    {
        word: "painting",
        hint: "An art form using colors on a surface to create images or expression."
    },
    {
        word: "astronomy",
        hint: "The scientific study of celestial objects and phenomena."
    },
    {
        word: "football",
        hint: "A popular sport played with a spherical ball."
    },
    {
        word: "chocolate",
        hint: "A sweet treat made from cocoa beans."
    },
    {
        word: "butterfly",
        hint: "An insect with colorful wings and a slender body."
    },
    {
        word: "history",
        hint: "The study of past events and human civilization."
    },
    {
        word: "pizza",
        hint: "A savory dish consisting of a round, flattened base with toppings."
    },
    {
        word: "jazz",
        hint: "A genre of music characterized by improvisation and syncopation."
    },
    {
        word: "camera",
        hint: "A device used to capture and record images or videos."
    },
    {
        word: "diamond",
        hint: "A precious gemstone known for its brilliance and hardness."
    },
    {
        word: "adventure",
        hint: "An exciting or daring experience."
    },
    {
        word: "science",
        hint: "The systematic study of the structure and behavior of the physical and natural world."
    },
    {
        word: "bicycle",
        hint: "A human-powered vehicle with two wheels."
    },
    {
        word: "sunset",
        hint: "The daily disappearance of the sun below the horizon."
    },
    {
        word: "coffee",
        hint: "A popular caffeinated beverage made from roasted coffee beans."
    },
    {
        word: "dance",
        hint: "A rhythmic movement of the body often performed to music."
    },
    {
        word: "galaxy",
        hint: "A vast system of stars, gas, and dust held together by gravity."
    },
    {
        word: "orchestra",
        hint: "A large ensemble of musicians playing various instruments."
    },
    {
        word: "volcano",
        hint: "A mountain or hill with a vent through which lava, rock fragments, hot vapor, and gas are ejected."
    },
    {
        word: "novel",
        hint: "A long work of fiction, typically with a complex plot and characters."
    },
    {
        word: "sculpture",
        hint: "A three-dimensional art form created by shaping or combining materials."
    },
    {
        word: "symphony",
        hint: "A long musical composition for a full orchestra, typically in multiple movements."
    },
    {
        word: "architecture",
        hint: "The art and science of designing and constructing buildings."
    },
    {
        word: "ballet",
        hint: "A classical dance form characterized by precise and graceful movements."
    },
    {
        word: "astronaut",
        hint: "A person trained to travel and work in space."
    },
    {
        word: "waterfall",
        hint: "A cascade of water falling from a height."
    },
    {
        word: "technology",
        hint: "The application of scientific knowledge for practical purposes."
    },
    {
        word: "rainbow",
        hint: "A meteorological phenomenon that is caused by reflection, refraction, and dispersion of light."
    },
    {
        word: "universe",
        hint: "All existing matter, space, and time as a whole."
    },
    {
        word: "piano",
        hint: "A musical instrument played by pressing keys that cause hammers to strike strings."
    },
    {
        word: "vacation",
        hint: "A period of time devoted to pleasure, rest, or relaxation."
    },
    {
        word: "rainforest",
        hint: "A dense forest characterized by high rainfall and biodiversity."
    },
    {
        word: "theater",
        hint: "A building or outdoor area in which plays, movies, or other performances are staged."
    },
    {
        word: "telephone",
        hint: "A device used to transmit sound over long distances."
    },
    {
        word: "language",
        hint: "A system of communication consisting of words, gestures, and syntax."
    },
    {
        word: "desert",
        hint: "A barren or arid land with little or no precipitation."
    },
    {
        word: "sunflower",
        hint: "A tall plant with a large yellow flower head."
    },
    {
        word: "fantasy",
        hint: "A genre of imaginative fiction involving magic and supernatural elements."
    },
    {
        word: "telescope",
        hint: "An optical instrument used to view distant objects in space."
    },
    {
        word: "breeze",
        hint: "A gentle wind."
    },
    {
        word: "oasis",
        hint: "A fertile spot in a desert where water is found."
    },
    {
        word: "photography",
        hint: "The art, process, or practice of creating images by recording light or other electromagnetic radiation."
    },
    {
        word: "safari",
        hint: "An expedition or journey, typically to observe wildlife in their natural habitat."
    },
    {
        word: "planet",
        hint: "A celestial body that orbits a star and does not produce light of its own."
    },
    {
        word: "river",
        hint: "A large natural stream of water flowing in a channel to the sea, a lake, or another such stream."
    },
    {
        word: "tropical",
        hint: "Relating to or situated in the region between the Tropic of Cancer and the Tropic of Capricorn."
    },
    {
        word: "mysterious",
        hint: "Difficult or impossible to understand, explain, or identify."
    },
    {
        word: "enigma",
        hint: "Something that is mysterious, puzzling, or difficult to understand."
    },
    {
        word: "paradox",
        hint: "A statement or situation that contradicts itself or defies intuition."
    },
    {
        word: "puzzle",
        hint: "A game, toy, or problem designed to test ingenuity or knowledge."
    },
    {
        word: "whisper",
        hint: "To speak very softly or quietly, often in a secretive manner."
    },
    {
        word: "shadow",
        hint: "A dark area or shape produced by an object blocking the light."
    },
    {
        word: "secret",
        hint: "Something kept hidden or unknown to others."
    },
    {
        word: "curiosity",
        hint: "A strong desire to know or learn something."
    },
    {
        word: "unpredictable",
        hint: "Not able to be foreseen or known beforehand; uncertain."
    },
    {
        word: "obfuscate",
        hint: "To confuse or bewilder someone; to make something unclear or difficult to understand."
    },
    {
        word: "unveil",
        hint: "To make known or reveal something previously secret or unknown."
    },
    {
        word: "illusion",
        hint: "A false perception or belief; a deceptive appearance or impression."
    },
    {
        word: "moonlight",
        hint: "The light from the moon."
    },
    {
        word: "vibrant",
        hint: "Full of energy, brightness, and life."
    },
    {
        word: "nostalgia",
        hint: "A sentimental longing or wistful affection for the past."
    },
    {
        word: "brilliant",
        hint: "Exceptionally clever, talented, or impressive."
    },

    { word: "eclipse", hint: "The obscuring of one celestial body by another." },
    { word: "harmony", hint: "The combination of simultaneously sounded musical notes to produce a pleasing effect." },
    { word: "metaphor", hint: "A figure of speech in which a word or phrase is applied to an object or action to which it is not literally applicable." },
    { word: "alchemy", hint: "A medieval chemical science aiming to achieve the transmutation of materials." },
    { word: "zenith", hint: "The time at which something is most powerful or successful." },
    { word: "quasar", hint: "A massive and extremely remote celestial object, emitting exceptionally large amounts of energy." },
    { word: "nebula", hint: "A cloud of gas and dust in outer space, visible in the night sky either as an indistinct bright patch or as a dark silhouette." },
    { word: "fable", hint: "A short story, typically with animals as characters, conveying a moral." },
    { word: "goblin", hint: "A mischievous, ugly, small creature resembling a dwarf." },
    { word: "mythology", hint: "A collection of myths, especially one belonging to a particular religious or cultural tradition." },
    { word: "vortex", hint: "A mass of whirling fluid or air." },
    { word: "silhouette", hint: "The dark shape and outline of someone or something visible against a lighter background." },
    { word: "aurora", hint: "A natural electrical phenomenon characterized by the appearance of streamers of reddish or greenish light in the sky." },
    { word: "kaleidoscope", hint: "A toy consisting of a tube containing mirrors and pieces of colored glass or paper, whose reflections produce changing patterns." },
    { word: "labyrinth", hint: "A complicated irregular network of passages or paths." },
    { word: "mirage", hint: "An optical illusion caused by atmospheric conditions." },
    { word: "serendipity", hint: "The occurrence and development of events by chance in a happy or beneficial way." },
    { word: "alchemy", hint: "The medieval forerunner of chemistry." },
    { word: "chimera", hint: "A thing that is hoped or wished for but in fact is illusory or impossible to achieve." },
    { word: "dystopia", hint: "An imagined state or society where there is great suffering or injustice." },
    { word: "utopia", hint: "An imagined place or state of things in which everything is perfect." },
    { word: "zeitgeist", hint: "The defining spirit or mood of a particular period of history." },
    { word: "quixotic", hint: "Exceedingly idealistic; unrealistic and impractical." },
    { word: "panacea", hint: "A solution or remedy for all difficulties or diseases." },
    { word: "elixir", hint: "A magical or medicinal potion." },
    { word: "maelstrom", hint: "A powerful whirlpool in the sea or a river." },
    { word: "nirvana", hint: "A state of perfect happiness; an ideal or idyllic place." },
    { word: "anomaly", hint: "Something that deviates from what is standard, normal, or expected." },
    { word: "epiphany", hint: "A moment of sudden and great revelation or realization." },
    { word: "paradigm", hint: "A typical example or pattern of something." },
    { word: "synesthesia", hint: "A condition in which one sense is simultaneously perceived as if by one or more additional senses." },
    { word: "cryptic", hint: "Having a meaning that is mysterious or obscure." },
    { word: "ethereal", hint: "Extremely delicate and light in a way that seems not of this world." },
    { word: "phenomenon", hint: "A fact or situation that is observed to exist or happen." },
    { word: "renaissance", hint: "The revival of art and literature under the influence of classical models." },
    { word: "symbiosis", hint: "Interaction between two different organisms living in close physical association." },
    { word: "transcend", hint: "Be or go beyond the range or limits of something." },
    { word: "vanguard", hint: "A group of people leading the way in new developments or ideas." },
    { word: "wanderlust", hint: "A strong desire to travel." },
    { word: "zephyr", hint: "A gentle, mild breeze." },
    { word: "melancholy", hint: "A feeling of pensive sadness, typically with no obvious cause." },
    { word: "luminous", hint: "Full of or shedding light; bright or shining." },
    { word: "infinity", hint: "A number greater than any assignable quantity or countable number." },
    { word: "horizon", hint: "The line at which the earth's surface and the sky appear to meet." },
    { word: "gravity", hint: "The force that attracts a body toward the center of the earth." },
    { word: "frequency", hint: "The rate at which something occurs over a particular period." },
    { word: "equinox", hint: "The time when the sun crosses the plane of the earth's equator." },
    { word: "dichotomy", hint: "A division or contrast between two things that are represented as being opposed or entirely different." },
    { word: "catalyst", hint: "A substance that increases the rate of a chemical reaction." },
    { word: "biodiversity", hint: "The variety of life in the world or in a particular habitat." },
    { word: "allegory", hint: "A story, poem, or picture that can be interpreted to reveal a hidden meaning." },
    { word: "zen", hint: "A state of calm attentiveness in which one's actions are guided by intuition." },
    { word: "yoga", hint: "A Hindu spiritual and ascetic discipline." },
    { word: "xenophile", hint: "An individual who is attracted to foreign peoples, cultures, or customs." },
    { word: "wavelength", hint: "The distance between successive crests of a wave." },
    { word: "ventriloquist", hint: "A person who can speak or utter sounds so that they seem to come from somewhere else." },
    { word: "universe", hint: "All existing matter and space considered as a whole." },
    { word: "tesseract", hint: "A four-dimensional analog of a cube." },
    { word: "solstice", hint: "Either of the two times in the year when the sun reaches its highest or lowest point in the sky." },
    { word: "rhapsody", hint: "An effusively enthusiastic or ecstatic expression of feeling." },
    { word: "quintessence", hint: "The most perfect or typical example of a quality or class." },
    { word: "pseudonym", hint: "A fictitious name, especially one used by an author." },
    { word: "oscillate", hint: "Move or swing back and forth at a regular speed." },
    { word: "nexus", hint: "A connection or series of connections linking two or more things." },
    { word: "mystique", hint: "A fascinating aura of mystery, awe, and power surrounding someone or something." },
    { word: "lyricism", hint: "An artist's expression of emotion in an imaginative and beautiful way." },
    { word: "kinesis", hint: "Movement or activity of an organism in response to a stimulus." },
    { word: "jubilee", hint: "A special anniversary of an event, especially one celebrating twenty-five or fifty years of a reign or activity." },
    { word: "isotope", hint: "Each of two or more forms of the same element that contain equal numbers of protons but different numbers of neutrons." },
    { word: "hologram", hint: "A three-dimensional image formed by the interference of light beams." },
    { word: "glyph", hint: "A hieroglyphic character or symbol." },
    { word: "fjord", hint: "A long, narrow, deep inlet of the sea between high cliffs." },
    { word: "entropy", hint: "A measure of the disorder or randomness in a closed system." },
    { word: "doppelganger", hint: "An apparition or double of a living person." },
    { word: "cipher", hint: "A secret or disguised way of writing; a code." },
    { word: "beacon", hint: "A light or other visible object serving as a signal, warning, or guide." },
    { word: "anachronism", hint: "A thing belonging or appropriate to a period other than that in which it exists." },
    { word: "zenith", hint: "The highest point reached by a celestial or other object." },
    { word: "yield", hint: "Produce or provide a natural, agricultural, or industrial product." },
    { word: "xenon", hint: "A chemical element of atomic number 54, a noble gas used in discharge tubes and lamps." },
    { word: "wistful", hint: "Having or showing a feeling of vague or regretful longing." },
    { word: "venerable", hint: "Accorded a great deal of respect, especially because of age, wisdom, or character." },
    { word: "utopian", hint: "Modeled on or aiming for a state in which everything is perfect." },
    { word: "synthesis", hint: "The combination of components or elements to form a connected whole." },
    { word: "resonance", hint: "The quality in a sound of being deep, full, and reverberating." },
    { word: "quorum", hint: "The minimum number of members of an assembly or society that must be present at any of its meetings to make the proceedings of that meeting valid." },
    { word: "prototype", hint: "A first or preliminary version of a device or vehicle from which other forms are developed." },
    { word: "ossify", hint: "Turn into bone or bony tissue." },
    { word: "neophyte", hint: "A person who is new to a subject, skill, or belief." },
    { word: "myriad", hint: "A countless or extremely great number of people or things." },
    { word: "lexicon", hint: "The vocabulary of a person, language, or branch of knowledge." },
    { word: "karma", hint: "The sum of a person's actions in this and previous states of existence, viewed as deciding their fate in future existences." },
    { word: "juxtapose", hint: "Place or deal with close together for contrasting effect." },
    { word: "infinitesimal", hint: "Extremely small." },
    { word: "hapless", hint: "Unfortunate." },
    { word: "gossamer", hint: "Something very light, thin, and insubstantial or delicate." },
    { word: "fluctuate", hint: "Rise and fall irregularly in number or amount." },
    { word: "ephemeral", hint: "Lasting for a very short time." },
    { word: "dichotomy", hint: "A division or contrast between two things that are or are represented as being opposed or entirely different." },
    { word: "cryptic", hint: "Having a meaning that is mysterious or obscure." },
    { word: "benevolent", hint: "Well meaning and kindly." },
    { word: "anomaly", hint: "Something that deviates from what is standard, normal, or expected." },
    { word: "zenith", hint: "The time at which something is most powerful or successful." },
    { word: "yarn", hint: "Fibers that are spun into threads and used to make textiles." },
    { word: "xenial", hint: "Friendly relation between hosts and guests." },
    { word: "wraith", hint: "A ghost or ghostlike image of someone." },
    { word: "vigor", hint: "Physical strength and good health." },
    { word: "ulterior", hint: "Existing beyond what is obvious or admitted; intentionally hidden." },
    { word: "threnody", hint: "A lament or mourning song." },
    { word: "surreal", hint: "Having the qualities of surrealism; bizarre." },
    { word: "retrospect", hint: "A survey or review of a past course of events or period of time." },
    { word: "quintessential", hint: "Representing the most perfect or typical example of a quality or class." },
    { word: "progeny", hint: "A descendant or the descendants of a person, animal, or plant." },
    { word: "oscillate", hint: "Move or swing back and forth in a regular rhythm." },
    { word: "nadir", hint: "The lowest point in the fortunes of a person or organization." },
    { word: "maverick", hint: "An unorthodox or independent-minded person." },
    { word: "lucid", hint: "Expressed clearly; easy to understand." },
    { word: "kiosk", hint: "A small structure in a public area used for providing information or displaying advertisements." },
    { word: "jovial", hint: "Cheerful and friendly." },
    { word: "incipient", hint: "In an initial stage; beginning to happen or develop." },
    { word: "homage", hint: "Special honor or respect shown publicly." },
    { word: "gargantuan", hint: "Enormous." },
    { word: "frugal", hint: "Sparing or economical with regard to money or food." },
    { word: "ethereal", hint: "Extremely delicate and light in a way that seems too perfect for this world." },
    { word: "dystopia", hint: "An imagined state or society in which there is great suffering or injustice, typically one that is totalitarian or post-apocalyptic." },
    { word: "cryptocurrency", hint: "A digital currency in which transactions are verified and records maintained by a decentralized system using cryptography, rather than by a centralized authority." },
    { word: "bucolic", hint: "Relating to the pleasant aspects of the countryside and country life." },
    { word: "austerity", hint: "Sternness or severity of manner or attitude." },
];