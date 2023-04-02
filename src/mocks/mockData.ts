export const comicsResponseMock = {
  code: 200,
  status: 'Ok',
  attributionHTML: '',
  attributionText: '',
  copyright: '© 2023 MARVEL',
  data: {
    offset: 180,
    limit: 2,
    total: 54339,
    count: 12,
    results: [
      {
        id: 106450,
        digitalId: 61975,
        title: 'First Title 1',
        issueNumber: 1,
        variantDescription: '',
        description: null,
        modified: '2023-02-03T09:05:09-0500',
        isbn: '',
        upc: '759606205661000111',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Comic',
        pageCount: 40,
        textObjects: [],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/106450',
        urls: [],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/36742',
          name: 'Hellcat (2023 - Present)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [],
        prices: [
          {
            type: 'printPrice',
            price: 4.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/03/64090641911fc',
          extension: 'jpg',
        },
        images: [],
        creators: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/106450/creators',
          items: [],
          returned: 0,
        },
        characters: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/106450/characters',
          items: [],
          returned: 0,
        },
        stories: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/106450/stories',
          items: [],
          returned: 0,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/106450/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 107831,
        digitalId: 0,
        title: 'Second Title',
        issueNumber: 2,
        variantDescription: 'Variant',
        description:
          'PUTTING THE "DIE" IN DIAMOND AGE! Hail the Pax Krakoa! Or perish! But to this hell age is born a hero. Say hello (again) to Rasputin IV...but what can one good chimera do in a universe of sin? The first century of Sinister\'s plan has come to an end…and whether it\'s better or worse may depend on the symbol on your forehead.',
        modified: '2022-11-11T09:06:52-0500',
        isbn: '',
        upc: '75960620573800221',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Comic',
        pageCount: 32,
        textObjects: [],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/107831',
        urls: [],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/36787',
          name: 'Immoral X-Men (2023 - Present)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [],
        prices: [
          {
            type: 'printPrice',
            price: 4.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/2/a0/6410af29b1801',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/2/a0/6410af29b1801',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/107831/creators',
          items: [],
          returned: 0,
        },
        characters: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/107831/characters',
          items: [],
          returned: 0,
        },
        stories: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/107831/stories',
          items: [],
          returned: 0,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/107831/events',
          items: [],
          returned: 0,
        },
      },
    ],
  },
  etag: 'e0c8bcf518fba433f1e6405390c2a915250c136e',
};

export const formDataMock = [
  {
    currency: 'USDT',
    date: '2222-02-22',
    fee: 'standart',
    image: 'http://i.annihil.us/u/prod/marvel/i/mg/3/03/64090641911fc.jpg',
    name: 'First',
    price: '0.86',
    visible: true,
  },
  {
    currency: 'ETH',
    date: '2222-02-22',
    fee: 'premium',
    image: 'http://i.annihil.us/u/prod/marvel/i/mg/3/03/64090641911fc.jpg',
    name: 'Second',
    price: '0.86',
    visible: false,
  },
];

export const comicsListDataMock = [
  {
    id: '11',
    title: 'hello',
    description: "I'm first",
    thumbnail: 'http://i.annihil.us/u/prod/marvel/i/mg/3/03/64090641911fc.jpg',
    issueNumber: '1',
    pageCount: '25',
    price: '5',
  },
  {
    id: '22',
    title: 'ByBy',
    description: "I'm second",
    thumbnail: 'http://i.annihil.us/u/prod/marvel/i/mg/3/03/64090641911fc.jpg',
    issueNumber: '2',
    pageCount: '25',
    price: '5',
  },
];
