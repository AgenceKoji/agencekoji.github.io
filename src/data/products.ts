export const producers = [
  {
    name: 'Taiun Sake Brewing',
    url: 'https://taiunsake.co.jp/',
    img: '/taiun_profile.avif',
    region: 'Shimane',
    desc: [
      "Fondée en 2021 à Izumo, Shimane, Taiun Sake est la culmination de plus de 10 ans d'expérience de brassage par son créateur, Mr Chen. Originaire de Taiwan, il vise à maintenir une connection entre le Japon et Taiwan à travers le saké.",
      "À cet effet, la brasserie utilise une variété de riz développée au Japon pour les conditions environnementales de Taiwan dans l'élaboration de son saké phare: Taichu 65.",
      "Gagnant de plusieurs prix, tant au Japon qu'à l'international, les sakés de Taiun Sake sont de haute qualité et offrent une grande variété de profils aromatiques.",
    ],
    products: [
      {
        name: 'Taiun Tokubetsu Junmai',
        articleNumber: '15553505',
        img: '/taiun_tokubetsu_junmai.jpg',
        desc: [
          'Un Tokubetsu Junmai brassé avec du riz de table poli à 65%, ainsi que du Yamada Nishiki poli à 50% pour le koji.',
          'Son nez est léger, avec des arômes de cantaloup et de raisin vert.',
          'Le palais est structuré et riche en umami, nous rappelant le riz brun et les champignons shiitake. Il est sec, avec une bonne acidité et une subtile astringence, ce qui en fait une superbe introduction au saké pour plusieurs amateurs de vins blancs.',
          "À déguster frais ou à température ambiante. C'est un parfait accord avec des ramens miso, yakitori, un risotto, du poulet frit ou un tofu mapo.",
        ],
        availability: 'ordered',
      },
      {
        name: 'Taiun Kimoto Junmai Ginjo',
        articleNumber: '15553290',
        img: '/taiun_kimoto_junmai_ginjo.png',
        availability: 'ordered',
        desc: [
          'Un Junmai Ginjo brassé selon la méthode Kimoto, avec du riz Yamada Nishiki poli à 55%.',
          "Le nez délicat met de l'avant des arômes lactiques subtils de crème sûre et yogourt, typique de la méthode Kimoto. On y retrouve aussi le melon de miel, le cantaloup, et la banane mûre.",
          'Le palais est dominé par le melon, auquel se joint une franche acidité pour créer un résultat rafraîchissant et facile à boire.',
          "À déguster frais ou à température ambiante. On l'accorde avec fromages de tous genres, guacamole, tacos de poisson, huître, et prosciutto.",
        ],
      },
      {
        name: 'Taiun Junmai Daiginjo',
        articleNumber: '15553484',
        img: '/taiun_junmai_daiginjo.png',
        availability: 'ordered',
        desc: [
          'Un Junmai Daiginjo élégant, brassé à partir de Yamada Nishiki poli à 50%.',
          'Le nez promet un saké riche et fruité, offrant des arômes de pêches, fruits tropicaux, et de bonbon au litchi.',
          'Le palais généreux et mi-doux remplit la promesse. On y retrouve à nouveau les fruits tropicaux, bien intégrés à un corps léger et une subtile acidité qui rendent ce saké particulièrement rafraîchissant.',
          'À boire frais, seul ou en accord avec poisson grillé, ceviche, charcuterie, ou burrata.',
        ],
      },
      {
        name: 'Taichu 65 2025',
        articleNumber: '15553572',
        img: '/taichu_65.png',
        availability: 'ordered',
        desc: [
          "Un saké de production limitée, brassé à partir de Taichu 65, un riz historiquement cultivé à Taiwan et poli à 54%. La méthode de brassage varie chaque année; pour le millésime 2025, le saké est brassé avec des levures aromatiques et une méthode de démarrage de fermentation 'sans koji' datant de l’époque Meiji. L’utilisation de cette technique donne un saké pur et précis: difficile de croire qu’il est fait de riz de table aussi peu poli!",
          'Le nez est subtil et tout en ginjo-ka. On y retrouve des arômes de bonbons à la pomme, de melon, de fraises, et de banane mûre.',
          'Le palais est tout aussi élégant, mi-doux, avec une texture ronde et enveloppante.',
          'À déguster frais, c’est un accord parfait pour des plats délicats comme le sashimi, une salade estivale, des nouilles soba fraîches, ou un gaspacho.',
        ],
      },
      {
        name: 'Taichu 65 Saijo',
        articleNumber: '15553581',
        img: '/taichu_65_saijo.png',
        availability: 'ordered',
        desc: [
          "Production limitée de Kijoshu (saké noble) brassé à partir de riz Taichu 65. Une portion de la production de l'année précédente est ajoutée à la fermentation.",
          'On y retrouve un nez de melon, de yogourt, et de pelure d’orange.',
          "Au palais, c'est un saké très doux, que l'on pourrait comparer aux vins liquoreux de Bordeaux.",
          'Il accompagne parfaitement un plateau de fromages ou se déguste seul pour le dessert.',
        ],
      },
    ],
  },
  {
    name: 'Obama Sake Company',
    url: 'https://obama-sake.com/en',
    img: '/obama_profile.webp',
    region: 'Fukui',
    desc: [
      "Obama Saké est une brasserie relativement jeune située à la ville d'Obama, dans la préfecture de Fukui. Elle a été établie en 2016 suite à la reprise des activités de la Compagnie de Saké Wakasa Fuji, une brasserie qui trace ses origines au milieu des années 1800.",
      "Obama Saké s'est donné pour mission de conserver la tradition du saké local et utilise strictement les meilleurs ingrédients locaux pour l'élaboration de ses sakés.",
    ],
    products: [
      {
        name: 'Wakasa Junmai',
        articleNumber: '15559499',
        img: '/wakasa_junmai.webp',
        availability: 'ordered',
        desc: [
          'Un Junmai audacieux, brassé avec un assemblage de riz local poli à 65%.',
          'Ce saké tout en umami se caractérise par un nez herbal, avec des arômes de banane, basilic et menthe.',
          'Avec son palais riche et texturé, ce saké est parfait en accompagnement de repas, notamment les poissons et légumes grillés, ainsi que les plateaux de fromages.',
        ],
      },
      {
        name: 'Wakasa Junmai Ginjo',
        articleNumber: '15559747',
        img: '/wakasa_junmai_ginjo.webp',
        availability: 'ordered',
        desc: [
          'Un Junmai Ginjo fruité, dense et élégant brassé avec du riz Yamada Nishiki de qualité supérieure poli à 55\%, la levure locale FK801-C et une eau de source sous-terraine de la région.',
          "C'est un saké légèrement doux avec une fraîche acidité et un nez délicat de cerises, baies et bonbon à la pomme.",
          'Un superbe accord avec des huîtres, du saumon, des plateaux de fromages et de charcuteries.',
        ],
      },
      {
        name: 'Wakasa Junmai Daiginjo',
        articleNumber: '15559510',
        img: '/wakasa_junmai_daiginjo.webp',
        availability: 'ordered',
        desc: [
          "Un Junmai Daiginjo délicat, frais et élégant, fait à partir de Yamada Nishiki poli à 38% et d'une levure originaire de la région de Fukui (FK801-C).",
          'Fruité et floral, on y retrouve des arômes de pomme verte, de muscat et de lys.',
          "Ce saké léger à la texture soyeuse s'accorde à merveille avec des charcuteries, des plats de champignons et des pâtes carbonara.",
        ],
      },
    ],
  },
  {
    name: 'Lagoon Brewery',
    url: 'https://www.lagoon-brewery.com/',
    img: '/lagoon_profile.jpg',
    region: 'Niigata',
    desc: [
      'Située en bordure de Fukushimagata, un lagon au nord de la préfecture de Niigata, Lagoon Brewery est établie depuis 2021. Cette brasserie produit non seulement des sakés traditionnels de grande qualité, mais également  des sakés infusés aux fruits et au houblon. Elle se distingue par son offre unique et audacieuse.',
      'La devise de la brasserie est "Saveurs diverses et inspirantes". Le saké est brassé en petites quantités avec une approche de développement durable.',
    ],
    products: [
      {
        name: 'Hop Sake',
        articleNumber: '15573768',
        img: '/hop.jpeg',
        availability: 'ordered',
        desc: [
          'Un saké infusé de houblons qui donne un breuvage rosé et rafraîchissant.',
          "Le nez hors du commun nous offre des arômes d'agrumes et de fleurs d'été. Au palais, on retrouve une belle acidité particulièrement rafraîchissante, un délicat umami, et une légère amertume, provenant du houblon.",
          'À boire en apéro, sur une terrasse au soleil ou en accord avec des grillades, tempura, et des plats relevés.',
        ],
      },
      {
        name: 'Naturally Grown Kamenoo',
        articleNumber: '15573645',
        img: '/kamenoo.jpeg',
        availability: 'ordered',
        desc: [
          'Un saké brassé avec du riz de la variété ancestrale Kamenoo poli à 70%.',
          'Son nez de banane et fruits tropicaux laisse place à un palais riche en umami, mi-doux et avec une fraîche acidité.',
          "C'est un saké rafraîchissant et riche en saveur qui est aussi délicieux seul qu'en accord avec du carpaccio de poisson blanc ou du porc grillé.",
        ],
      },
      {
        name: 'Koshitanrei Junmai Daiginjo',
        articleNumber: '15573434',
        img: '/koshitanrei.jpeg',
        availability: 'ordered',
        desc: [
          'Un Junmai Daiginjo léger et  élégant, brassé avec du riz Koshitanrei poli à 39%.',
          'Le nez riche nous offre des arômes de melon, de fruit de la passion et de bonbon au litchi.',
          "Ce saké doux et fruité est parfait pour l'apéro, s'accordant à merveille avec des bouchées fraîches, des olives, des bruschetta et le prosciutto.",
        ],
      },
    ],
  },
  {
    name: 'Omurasaki Beverage Company',
    img: '/uka_profile.png',
    url: 'https://ukasake.us/',
    region: 'Californie & Fukushima',
    desc: [
      'Née du désir de Mr Koda, propriétaire de 3e génération de Koda Farms, de connecter avec les racines Japonaises de sa famille, Omurasaki Beverage Company fait produire les produits de la gamme Uka à Fukushima par la brasserie Ninki Shuzo.',
      "Le riz utilisé est une variété propre à la ferme Koda, KR55. Bien que celui-ci soit un riz de table, il se travaille à merveille et permet aux brasseurs d'expérience de Ninki de créer des sakés délicats et raffinés.",
      "Omurasaki a pour mission de renforcer les liens entre le Japon et la Californie, et porte une attention extraordinaire à l'environnement et au développement durable. L'agriculture de la ferme est entièrement bio, et une partie des profits est utilisée au maintient des habitats de papillons de la région.",
    ],
    products: [
      {
        name: 'Uka Black Label',
        img: '/uka_black_label.png',
        availability: 'out_of_stock',
        desc: [
          "Un saké rond, balancé, et fruité avec un soupçon d'arômes de miel. Ses arômes de fraises, ananas, et anis sont francs et purs.",
        ],
      },
      {
        name: 'Uka Dry',
        img: '/uka_dry.png',
        availability: 'out_of_stock',
        desc: [
          "Un saké sec et léger qui ne demande que d'être accordé avec un repas. Au nez, on perçoit d'intenses arômes de pomme verte, poire, et anis.",
        ],
      },
      {
        name: 'Uka Sparkling',
        img: '/uka_sparkling.png',
        availability: 'out_of_stock',
        desc: [
          'Ce saké est soyeux, doux et fruité, avec une délicate effervescence. Il nous présente un nez délicat, de poire, anis, et fleur blanche.',
        ],
      },
    ],
  },
]
