const books = [
    {
        "title": "Fourth Wing",
        "author": "Rebecca Yarros",
        "sinopsis": "In a world where dragons and riders are at war, a young woman must overcome her fears and train to become a dragon rider, while uncovering secrets that could change the course of the battle.",
        "pages": 480,
        "categories": ["fantasy", "romance"],
        "cover": "cover_url",
        "isbn": "978-1649374042"
    },
    {
        "title": "Iron Flame",
        "author": "Rebecca Yarros",
        "sinopsis": "The second installment in the thrilling dragon and romance saga, where the protagonists face new challenges and threats that test their loyalty and love.",
        "pages": 496,
        "categories": ["fantasy", "romance"],
        "cover": "cover_url",
        "isbn": "978-1649374172"
    },
    {
        "title": "Zodiac Academy",
        "author": "Caroline Peckham and Susanne Valenti",
        "sinopsis": "Two sisters discover they are heirs to a magical kingdom and must learn to control their powers while facing dangers, rivalries, and romance in an academy full of secrets.",
        "pages": 560,
        "categories": ["fantasy", "romance"],
        "cover": "cover_url",
        "isbn": "978-1913995005"
    },
    {
        "title": "The Serpent and the Wings of Night",
        "author": "Carissa Broadbent",
        "sinopsis": "In a world of gods and dark creatures, a young woman must compete in a deadly tournament to win her freedom, but the price of victory could be her soul.",
        "pages": 432,
        "categories": ["fantasy", "romance"],
        "cover": "cover_url",
        "isbn": "978-1733973333"
    },
    {
        "title": "Red Rising",
        "author": "Pierce Brown",
        "sinopsis": "In a society divided by castes, Darrow, a low-level miner, infiltrates the elite to overthrow the system from within and spark a revolution.",
        "pages": 382,
        "categories": ["sci-fi", "dystopian"],
        "cover": "cover_url",
        "isbn": "978-0345539786"
    },
    {
        "title": "Mistborn: The Final Empire",
        "author": "Brandon Sanderson",
        "sinopsis": "In a world ruled by an immortal tyrant, a group of rebels with unique magical powers plans a daring heist to free humanity.",
        "pages": 541,
        "categories": ["fantasy", "adventure"],
        "cover": "cover_url",
        "isbn": "978-0765311788"
    },
    {
        "title": "The Lord of the Rings",
        "author": "J.R.R. Tolkien",
        "sinopsis": "Frodo Baggins embarks on an epic quest to destroy a malevolent ring that could give absolute power to its creator, the Dark Lord Sauron.",
        "pages": 1178,
        "categories": ["fantasy", "adventure"],
        "cover": "cover_url",
        "isbn": "978-0544003415"
    },
    {
        "title": "The Hunger Games",
        "author": "Suzanne Collins",
        "sinopsis": "In a dystopian future, Katniss Everdeen volunteers for the Hunger Games, a televised event where participants must fight to the death.",
        "pages": 374,
        "categories": ["dystopian", "sci-fi"],
        "cover": "cover_url",
        "isbn": "978-0439023481"
    },
    {
        "title": "One Dark Window",
        "author": "Rachel Gillig",
        "sinopsis": "A young woman with a dark and cursed power must join forces with a mysterious outsider to save her kingdom from a supernatural threat.",
        "pages": 416,
        "categories": ["fantasy", "mystery"],
        "cover": "cover_url",
        "isbn": "978-0316434995"
    },
    {
        "title": "Poppy War",
        "author": "R.F. Kuang",
        "sinopsis": "Rin, a war orphan, enters a prestigious military academy and discovers she has an ancient power that could change the fate of her nation.",
        "pages": 544,
        "categories": ["fantasy", "adventure"],
        "cover": "cover_url",
        "isbn": "978-0062662569"
    },
    {
        "title": "Powerless",
        "author": "Lauren Roberts",
        "sinopsis": "In a world where some are born with powers and others are not, a young woman without special abilities must find her place and fight for her survival.",
        "pages": 400,
        "categories": ["fantasy", "dystopian"],
        "cover": "cover_url",
        "isbn": "978-0593723945"
    },
    {
        "title": "From Blood and Ash",
        "author": "Jennifer L. Armentrout",
        "sinopsis": "Poppy, a chosen maiden, lives a life of isolation until she meets a guardian who reveals secrets about her world and her destiny.",
        "pages": 622,
        "categories": ["fantasy", "romance"],
        "cover": "cover_url",
        "isbn": "978-1952457003"
    },
    {
        "title": "Throne of Glass",
        "author": "Sarah J. Maas",
        "sinopsis": "Celaena Sardothien, a deadly assassin, competes in a competition to become the king's assassin, but soon discovers that there is something darker in the castle than the other competitors.",
        "pages": 404,
        "categories": ["fantasy", "adventure"],
        "cover": "cover_url",
        "isbn": "978-1619630345"
    },
    {
        "title": "A Court of Thorns and Roses",
        "author": "Sarah J. Maas",
        "sinopsis": "Feyre, a huntress, kills a wolf in the forest and is taken to a magical world where she discovers that her captor is not an animal, but an immortal being with a dangerous secret.",
        "pages": 416,
        "categories": ["fantasy", "adventure"],
        "cover": "cover_url",
        "isbn": "978-1619634442"
    },
    {
        "title": "Six of Crows",
        "author": "Leigh Bardugo",
        "sinopsis": "Kaz Brekker and his team of criminals attempt to pull off an impossible heist in the heart of a heavily guarded palace.",
        "pages": 465,
        "categories": ["fantasy", "adventure"],
        "cover": "cover_url",
        "isbn": "978-1627792127"
    },
    {
        "title": "Crooked Kingdom",
        "author": "Leigh Bardugo",
        "sinopsis": "Kaz Brekker and his team fight to survive and seek revenge after being betrayed in their previous mission.",
        "pages": 536,
        "categories": ["fantasy", "adventure"],
        "cover": "cover_url",
        "isbn": "978-1627792134"
    },
    {
        "title": "Shadow and Bone",
        "author": "Leigh Bardugo",
        "sinopsis": "Alina Starkov discovers she has a unique power that could save her country from the shadows threatening it, but she must train with the Grisha, an elite group of magicians.",
        "pages": 358,
        "categories": ["fantasy", "adventure"],
        "cover": "cover_url",
        "isbn": "978-1250027436"
    },
    {
        "title": "The Cruel Prince",
        "author": "Holly Black",
        "sinopsis": "Jude, a human raised in the world of faeries, must face betrayal and intrigue to earn a place in the High King's court.",
        "pages": 370,
        "categories": ["fantasy", "adventure"],
        "cover": "cover_url",
        "isbn": "978-0316310275"
    },
    {
        "title": "The Wicked King",
        "author": "Holly Black",
        "sinopsis": "Jude must maintain her control over King Cardan while dealing with political machinations and the threat of war.",
        "pages": 322,
        "categories": ["fantasy", "adventure"],
        "cover": "cover_url",
        "isbn": "978-0316310312"
    },
    {
        "title": "The Queen of Nothing",
        "author": "Holly Black",
        "sinopsis": "Jude returns to the faerie world to confront Cardan and the consequences of her decisions, as war looms on the horizon.",
        "pages": 308,
        "categories": ["fantasy", "adventure"],
        "cover": "cover_url",
        "isbn": "978-0316310350"
    },
    {
        "title": "Serpent & Dove",
        "author": "Shelby Mahurin",
        "sinopsis": "Louise, a witch, and Reid, a witch hunter, are forced to marry, triggering a series of events that could change their world.",
        "pages": 528,
        "categories": ["fantasy", "adventure"],
        "cover": "cover_url",
        "isbn": "978-0062878021"
    },
    {
        "title": "Blood & Honey",
        "author": "Shelby Mahurin",
        "sinopsis": "Lou and Reid struggle to stay together as dark forces conspire to tear them apart and destroy everything they love.",
        "pages": 544,
        "categories": ["fantasy", "adventure"],
        "cover": "cover_url",
        "isbn": "978-0062878052"
    }
];

module.exports = books;