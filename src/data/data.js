const allData = [
    {
        id: 1,
        name: 'Preparing Video Game GIF by CAPCOM"',
        category: "GIFs",
        username: "Capcom",
        slug: "Capcom-street-fighter-ryu-sf6-Y3OK72WcbCNkEYkZuI",
        image: "https://media0.giphy.com/media/Y3OK72WcbCNkEYkZuI/giphy-downsized.gif?cid=e08e54c1vcmezq4qjfrpby1vvkjgyz14l8iichwv44ogkjng&ep=v1_gifs_trending&rid=giphy-downsized.gif&ct=g",
    },
    {
        id: 2,
        name: "Good Night GIF",
        category: "GIFs",
        username: "Nonetheless",
        slug: "tongue-goodnight-sJWNLTclcvVmw",
        image: "https://media0.giphy.com/media/sJWNLTclcvVmw/giphy.gif?cid=e08e54c1vcmezq4qjfrpby1vvkjgyz14l8iichwv44ogkjng&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
    },
    {
        id: 3,
        name: "Video Game Victory GIF by CAPCOM",
        category: "GIFs",
        username: "Capcom",
        slug: "Capcom-street-fighter-ryu-sf6-TBQo9WoA18hdQ6U4nN",
        image: "https://media1.giphy.com/media/TBQo9WoA18hdQ6U4nN/giphy-downsized.gif?cid=e08e54c1vcmezq4qjfrpby1vvkjgyz14l8iichwv44ogkjng&ep=v1_gifs_trending&rid=giphy-downsized.gif&ct=g",
    },
    {
        id: 4,
        name: "Happy Birthday GIF by Jelene",
        category: "GIFs",
        username: "Jelene",
        slug: "happybirthday-bday-hbday-hkE6wynetELGa7xOjq",
        image: "https://media4.giphy.com/media/hkE6wynetELGa7xOjq/giphy.gif?cid=e08e54c1vcmezq4qjfrpby1vvkjgyz14l8iichwv44ogkjng&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
    },
    {
        id: 5,
        name: "Happy I Love You GIF by Warner Bros.",
        category: "GIFs",
        username: "warnerbrosde",
        slug: "warnerbrosde-R6gvnAxj2ISzJdbA63",
        image: "https://media1.giphy.com/media/R6gvnAxj2ISzJdbA63/giphy-downsized.gif?cid=e08e54c1vcmezq4qjfrpby1vvkjgyz14l8iichwv44ogkjng&ep=v1_gifs_trending&rid=giphy-downsized.gif&ct=g",
    },
    {
        id: 6,
        name: "Time For Bed Massage GIF",
        category: "GIFs",
        username: "Nonetheless",
        slug: "ywmoTiRyU43iU",
        image: "https://media4.giphy.com/media/ywmoTiRyU43iU/giphy-downsized.gif?cid=e08e54c1ia4isc5dxa6hmpxeq7pbazm7q307a33zx9vokybc&ep=v1_gifs_trending&rid=giphy-downsized.gif&ct=g",
    },
    {
        id: 7,
        name: "Star Wars Hockey GIF by Florida Panthers",
        category: "GIFs",
        username: "flapanthers",
        slug: "flapanthers-nhl-florida-panthers-denis-malgin-mYaaFIcGy6Glh4yx5e",
        image: "https://media4.giphy.com/media/mYaaFIcGy6Glh4yx5e/giphy-downsized.gif?cid=e08e54c1zqf3xgvrx76w2t4615ahkddg3miuktgfm21nzdue&ep=v1_gifs_trending&rid=giphy-downsized.gif&ct=g",
    },
    {
        id: 8,
        name: "Happy Anniversary Love GIF by Hallmark Gold Crown",
        category: "GIFs",
        username: "Nonetheless",
        slug: "hallmarkecards-dating-ecards-mugs-gh5cGItobveQAEPw5B",
        image: "https://media3.giphy.com/media/gh5cGItobveQAEPw5B/giphy-downsized.gif?cid=e08e54c1zqf3xgvrx76w2t4615ahkddg3miuktgfm21nzdue&ep=v1_gifs_trending&rid=giphy-downsized.gif&ct=g",
    },
    {
        id: 9,
        name: "Happy Birthday GIF",
        category: "GIFs",
        username: "Nonetheless",
        slug: "happy-birthday-zM4tBLfudy0rS",
        image: "https://media1.giphy.com/media/zM4tBLfudy0rS/giphy.gif?cid=e08e54c1zqf3xgvrx76w2t4615ahkddg3miuktgfm21nzdue&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
    },
    {
        id: 10,
        name: "Bless Happy Sunday GIF",
        category: "GIFs",
        username: "giphystudios2021",
        slug: "slug-happy-birthday-zM4tBLfudy",
        image: "https://media1.giphy.com/media/sjVsQih0n1NPQkLQaG/giphy-downsized.gif?cid=e08e54c1zqf3xgvrx76w2t4615ahkddg3miuktgfm21nzdue&ep=v1_gifs_trending&rid=giphy-downsized.gif&ct=g",
    },
    {
        id: 11,
        name: "Wash Hands Corona Sticker",
        category: "Stickers",
        username: "Emoji",
        slug: "Emoji-emoji-wash-hand-washing-ftklTmdD9MN3uXaLvb",
        image: "https://media2.giphy.com/media/ftklTmdD9MN3uXaLvb/200w_s.gif?cid=e08e54c11799735ffb70db494ef816c40b7c8bcc94f869b6&ep=v2_emoji&rid=200w_s.gif&ct=g&ejg=2&ejv=default",
    },
    {
        id: 12,
        name: "Bom Dia Peace Sticker",
        category: "Stickers",
        username: "Emoji",
        slug: "Emoji-transparent-4tSHBpzJw7R3rrKUeo",
        image: "https://media1.giphy.com/media/4tSHBpzJw7R3rrKUeo/200w_s.gif?cid=e08e54c131bdbd16f3562d1fcec6bcdebe7e20f40f6d1c03&ep=v2_emoji&rid=200w_s.gif&ct=g&ejg=3&ejv=default",
    },
    {
        id: 13,
        name: "Oh No Finger Sticker",
        category: "Stickers",
        username: "Emoji",
        slug: "iD6QiXTTAYrU5C3c89",
        image: "https://media0.giphy.com/media/iD6QiXTTAYrU5C3c89/200w_s.gif?cid=e08e54c131bdbd16f3562d1fcec6bcdebe7e20f40f6d1c03&ep=v2_emoji&rid=200w_s.gif&ct=g&ejg=4&ejv=default",
    },
    {
        id: 14,
        name: "Hand Peace Sticker",
        category: "Stickers",
        username: "Emoji",
        slug: "iigp4VDyf5dCLRlGkm",
        image: "https://media0.giphy.com/media/iigp4VDyf5dCLRlGkm/200w_s.gif?cid=e08e54c131bdbd16f3562d1fcec6bcdebe7e20f40f6d1c03&ep=v2_emoji&rid=200w_s.gif&ct=g&ejg=5&ejv=default",
    },
    {
        id: 15,
        name: "Flexing Work Out",
        category: "Stickers",
        username: "Emoji",
        slug: "slug-happy-birthday-zM4tBLfudy",
        image: "https://media0.giphy.com/media/SvLQ270MWY0GpztVjo/200w_s.gif?cid=e08e54c131bdbd16f3562d1fcec6bcdebe7e20f40f6d1c03&ep=v2_emoji&rid=200w_s.gif&ct=g&ejg=6&ejv=default",
    },
    {
        id: 16,
        name: "Bless Happy Sunday GIF",
        category: "Stickers",
        username: "giphystudios2021",
        slug: "slug-happy-birthday-zM4tBLfudy",
        image: "https://media1.giphy.com/media/sjVsQih0n1NPQkLQaG/giphy-downsized.gif?cid=e08e54c1zqf3xgvrx76w2t4615ahkddg3miuktgfm21nzdue&ep=v1_gifs_trending&rid=giphy-downsized.gif&ct=g",
    },
    {
        id: 17,
        name: "Bless Happy Sunday GIF",
        category: "Stickers",
        username: "giphystudios2021",
        slug: "slug-happy-birthday-zM4tBLfudy",
        image: "https://media1.giphy.com/media/sjVsQih0n1NPQkLQaG/giphy-downsized.gif?cid=e08e54c1zqf3xgvrx76w2t4615ahkddg3miuktgfm21nzdue&ep=v1_gifs_trending&rid=giphy-downsized.gif&ct=g",
    },
    {
        id: 18,
        name: "Bless Happy Sunday GIF",
        category: "Stickers",
        username: "giphystudios2021",
        slug: "slug-happy-birthday-zM4tBLfudy",
        image: "https://media1.giphy.com/media/sjVsQih0n1NPQkLQaG/giphy-downsized.gif?cid=e08e54c1zqf3xgvrx76w2t4615ahkddg3miuktgfm21nzdue&ep=v1_gifs_trending&rid=giphy-downsized.gif&ct=g",
    },
    {
        id: 19,
        name: "Bless Happy Sunday GIF",
        category: "Stickers",
        username: "giphystudios2021",
        slug: "slug-happy-birthday-zM4tBLfudy",
        image: "https://media1.giphy.com/media/sjVsQih0n1NPQkLQaG/giphy-downsized.gif?cid=e08e54c1zqf3xgvrx76w2t4615ahkddg3miuktgfm21nzdue&ep=v1_gifs_trending&rid=giphy-downsized.gif&ct=g",
    },
    {
        id: 20,
        name: "Bless Happy Sunday GIF",
        category: "Stickers",
        username: "giphystudios2021",
        slug: "slug-happy-birthday-zM4tBLfudy",
        image: "https://media1.giphy.com/media/sjVsQih0n1NPQkLQaG/giphy-downsized.gif?cid=e08e54c1zqf3xgvrx76w2t4615ahkddg3miuktgfm21nzdue&ep=v1_gifs_trending&rid=giphy-downsized.gif&ct=g",
    },
    {
        id: 21,
        name: "Happy Good Morning GIF",
        category: "Clips",
        username: "dinosally",
        slug: "happy-dinosally-dino-IBd9uNMl6CNM1wDlLw",
        image: "https://media0.giphy.com/media/IBd9uNMl6CNM1wDlLw/giphy.gif?cid=e08e54c1lxyuj7gt1q897oqm0e1yr21wo9ucdpcf4lk2cufo&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
    },
    {
        id: 22,
        name: "Good Morning Coffee GIF",
        category: "Clips",
        username: "daydayao",
        slug: "coffee-good-morning-dayao-mxjzBpyu8DDLIcEKVC",
        image: "https://media4.giphy.com/media/mxjzBpyu8DDLIcEKVC/giphy.gif?cid=e08e54c1lxyuj7gt1q897oqm0e1yr21wo9ucdpcf4lk2cufo&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
    },
    {
        id: 23,
        name: "Happy Birthday GIF",
        category: "Clips",
        username: "Nonetheless",
        slug: "happy-birthday-zM4tBLfudy0rS",
        image: "https://media0.giphy.com/media/U85zhMSv8VDUgCcHC6/giphy.gif?cid=e08e54c1lxyuj7gt1q897oqm0e1yr21wo9ucdpcf4lk2cufo&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
    },
    {
        id: 24,
        name: "Happy Birthday GIF",
        category: "Clips",
        username: "Nonetheless",
        slug: "chuber-birthday-happy-best-wishes-l41YagmYbcYsiPwXK",
        image: "https://media4.giphy.com/media/l41YagmYbcYsiPwXK/giphy.gif?cid=e08e54c1lxyuj7gt1q897oqm0e1yr21wo9ucdpcf4lk2cufo&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
    },
    {
        id: 25,
        name: "Happy Good Vibes GIF",
        category: "Clips",
        username: "Eledraws",
        slug: "soleil-eledraws-eleonore-bem-Ax2nFr6gYNZCzyTA0N",
        image: "https://media4.giphy.com/media/Ax2nFr6gYNZCzyTA0N/giphy.gif?cid=e08e54c1lxyuj7gt1q897oqm0e1yr21wo9ucdpcf4lk2cufo&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
    },
    {
        id: 26,
        name: "Bless Happy Sunday GIF",
        category: "Clips",
        username: "giphystudios2021",
        slug: "slug-happy-birthday-zM4tBLfudy",
        image: "https://media1.giphy.com/media/sjVsQih0n1NPQkLQaG/giphy-downsized.gif?cid=e08e54c1zqf3xgvrx76w2t4615ahkddg3miuktgfm21nzdue&ep=v1_gifs_trending&rid=giphy-downsized.gif&ct=g",
    },
    {
        id: 27,
        name: "Bless Happy Sunday GIF",
        category: "Clips",
        username: "giphystudios2021",
        slug: "slug-happy-birthday-zM4tBLfudy",
        image: "https://media1.giphy.com/media/sjVsQih0n1NPQkLQaG/giphy-downsized.gif?cid=e08e54c1zqf3xgvrx76w2t4615ahkddg3miuktgfm21nzdue&ep=v1_gifs_trending&rid=giphy-downsized.gif&ct=g",
    },
    {
        id: 28,
        name: "Bless Happy Sunday GIF",
        category: "Clips",
        username: "giphystudios2021",
        slug: "slug-happy-birthday-zM4tBLfudy",
        image: "https://media1.giphy.com/media/sjVsQih0n1NPQkLQaG/giphy-downsized.gif?cid=e08e54c1zqf3xgvrx76w2t4615ahkddg3miuktgfm21nzdue&ep=v1_gifs_trending&rid=giphy-downsized.gif&ct=g",
    },
    {
        id: 29,
        name: "Bless Happy Sunday GIF",
        category: "Clips",
        username: "giphystudios2021",
        slug: "slug-happy-birthday-zM4tBLfudy",
        image: "https://media1.giphy.com/media/sjVsQih0n1NPQkLQaG/giphy-downsized.gif?cid=e08e54c1zqf3xgvrx76w2t4615ahkddg3miuktgfm21nzdue&ep=v1_gifs_trending&rid=giphy-downsized.gif&ct=g",
    },
    {
        id: 30,
        name: "Bless Happy Sunday GIF",
        category: "Clips",
        username: "giphystudios2021",
        slug: "slug-happy-birthday-zM4tBLfudy",
        image: "https://media1.giphy.com/media/sjVsQih0n1NPQkLQaG/giphy-downsized.gif?cid=e08e54c1zqf3xgvrx76w2t4615ahkddg3miuktgfm21nzdue&ep=v1_gifs_trending&rid=giphy-downsized.gif&ct=g",
    },
];

export { allData };
