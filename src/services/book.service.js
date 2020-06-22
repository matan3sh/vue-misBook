'use strict';

import { DbService } from './db.service.js';

const KEY = 'books';

export default {
  query,
  get,
  remove,
  update,
  getEmptybook,
  getBookRating
};

async function query() {
  var books = await DbService.query(KEY);
  if (!books || !books.length) {
    books = _createDefaultbooks();
    await DbService.insert(KEY, books);
  }
  return books;
}

function get(id) {
  if (!id) return Promise.resolve(getEmptybook());
  return DbService.get(KEY, id);
}

function remove(id) {
  return DbService.delete(KEY, id);
}

function add(book) {
  return DbService.post(KEY, book);
}

function update(book) {
  return DbService.put(KEY, book);
}

function getBookRating(book) {
  const { reviews } = book;
  if (reviews === undefined) return 0;
  if (reviews.length > 0) {
    let count = 0;
    for (let i = 0; i < reviews.length; i++) {
      count += +reviews[i].rate;
    }
    const avg = count / reviews.length;
    let res = (avg * 100) / 5;
    return res;
  } else return 0;
}

function getEmptybook() {
  return {
    _id: '',
    title: '',
    subtitle: '',
    authors: '',
    publishedDate: '',
    description: '',
    pageCount: '',
    categories: '',
    thumbnail: '',
    language: '',
    listPrice: {
      amount: '',
      currencyCode: '',
      isOnSale: ''
    }
  };
}

function _createDefaultbooks() {
  return [
    {
      _id: 'GXj93KOkqZoC',
      title: 'Hacking',
      subtitle: 'Digital Media and Technological Determinism',
      authors: ['Tim Jordan', 'Puki Ben David'],
      publishedDate: 2008,
      description:
        'Hacking provides an introduction to the community of hackers and an analysis of the meaning of hacking in twenty-first century societies.',
      pageCount: 160,
      categories: ['Computers', 'Hack'],
      thumbnail: 'http://coding-academy.org/books-photos/1.jpg',
      language: 'en',
      listPrice: {
        amount: 19,
        currencyCode: 'ILS',
        isOnSale: true
      },
      reviews: []
    },
    {
      _id: 'JYOJa2NpSCq',
      title: 'morbi',
      subtitle: 'lorem euismod dictumst inceptos mi',
      authors: ['Barbara Cartland'],
      publishedDate: 1978,
      description:
        'aliquam pretium lorem laoreet etiam odio cubilia iaculis placerat aliquam tempor nisl auctor',
      pageCount: 129,
      categories: ['Computers', 'Hack'],
      thumbnail: 'http://coding-academy.org/books-photos/14.jpg',
      language: 'sp',
      listPrice: {
        amount: 44,
        currencyCode: 'EUR',
        isOnSale: false
      },
      reviews: []
    },
    {
      _id: '1y0Oqts35DQ',
      title: 'at viverra venenatis',
      subtitle: 'gravida libero facilisis rhoncus urna etiam',
      authors: ['Dr. Seuss'],
      publishedDate: 1999,
      description:
        'lorem molestie ut euismod ad quis mi ultricies nisl cursus suspendisse dui tempor sit suscipit metus etiam euismod tortor sagittis habitant',
      pageCount: 972,
      categories: ['Computers', 'Hack'],
      thumbnail: 'http://coding-academy.org/books-photos/2.jpg',
      language: 'he',
      listPrice: {
        amount: 108,
        currencyCode: 'ILS',
        isOnSale: false
      },
      reviews: []
    },
    {
      _id: 'kSnfIJyikTP',
      title: 'dictum',
      subtitle:
        'augue eu consectetur class curabitur conubia ligula in ullamcorper',
      authors: ['Danielle Steel'],
      publishedDate: 1978,
      description:
        'interdum inceptos mauris habitant primis neque tempus lacus morbi auctor cras consectetur euismod vehicula neque netus enim vivamus augue molestie imperdiet tincidunt aliquam',
      pageCount: 303,
      categories: ['Computers', 'Hack'],
      thumbnail: 'http://coding-academy.org/books-photos/16.jpg',
      language: 'en',
      listPrice: {
        amount: 30,
        currencyCode: 'EUR',
        isOnSale: true
      },
      reviews: []
    },
    {
      _id: 'f4iuVmbuKCC',
      title: 'sem himenaeos aptent',
      subtitle: 'interdum per habitasse luctus purus est',
      authors: ['Dr. Seuss'],
      publishedDate: 2011,
      description:
        'et vehicula faucibus amet accumsan lectus cras nulla cubilia arcu neque litora mi habitasse quis amet augue facilisis sed',
      pageCount: 337,
      categories: ['Computers', 'Hack'],
      thumbnail: 'http://coding-academy.org/books-photos/12.jpg',
      language: 'sp',
      listPrice: {
        amount: 19,
        currencyCode: 'USD',
        isOnSale: false
      },
      reviews: []
    },
    {
      _id: 'U2rfZO6oBZf',
      title: 'mi ante posuere',
      subtitle:
        'sapien curae consectetur ultrices fringilla blandit ipsum curae faucibus',
      authors: ['Leo Tolstoy'],
      publishedDate: 1978,
      description:
        'senectus habitant nam imperdiet nostra elit dapibus nisl adipiscing in',
      pageCount: 748,
      categories: ['Computers', 'Hack'],
      thumbnail: 'http://coding-academy.org/books-photos/1.jpg',
      language: 'en',
      listPrice: {
        amount: 91,
        currencyCode: 'USD',
        isOnSale: true
      },
      reviews: [
        {
          id: 'ghf125',
          fullName: 'Book Reader 1',
          rate: 1,
          readAt: new Date(),
          textArea: 'Bla Bla Bla'
        },
        {
          id: 'geg57h',
          fullName: 'Book Reader 2',
          rate: 5,
          readAt: new Date(),
          textArea: 'Bla2 Bla2 Bla2'
        }
      ]
    },
    {
      _id: '_Th4AgAAQBAJ',
      title: 'NBA Finals',
      subtitle: 'The Last Dance',
      authors: ['Drew Silverman'],
      publishedDate: 2013,
      description:
        'The NBA Finals is one of Sports Greatest Championships! Since the first championship in 1947, hundreds of thousands of people have followed the seven-game battle. Now, young readers can learn about the NBA Finals history, the famous teams and players, the spectacular dunks, and the future of the sport from in their library. Informative sidebars add to the high impact photographs and easy-to-read text, bringing Sports Greatest Championships to readers of all ages. SportsZone is an imprint of ABDO Publishing Company.',
      pageCount: 64,
      categories: ['Sport', 'Basketball'],
      thumbnail:
        'http://books.google.com/books/content?id=_Th4AgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      language: 'en',
      listPrice: {
        amount: 167,
        currencyCode: 'ILS',
        isOnSale: true
      },
      reviews: [
        {
          id: '87536f',
          fullName: 'Book Fan',
          rate: 5,
          readAt: new Date(),
          textArea: 'WOWWWWWWWW'
        },
        {
          id: 'op98eg',
          fullName: 'Relly Joe',
          rate: 5,
          readAt: new Date(),
          textArea: 'Very Good Book!'
        }
      ]
    },
    {
      _id: 'Zla73jbuCD4C',
      title: 'Dirk Nowitzki',
      subtitle: 'NBA Champion',
      authors: ['Marty Gitlin'],
      publishedDate: 2012,
      description:
        'Playmakers introduces young readers to their current heroes on and off the field. Dirk Nowitzki: NBA Champion summarizes Dirk Nowitzkis life and career to date and draws attention to accomplishments beyond his athletic skill as well as career highlights thus far. Short, informative sidebars add to the engaging, easy-to-read text, making Playmakers a hit for any reader in your library!',
      pageCount: 34,
      categories: ['Sport', 'Basketball'],
      thumbnail:
        'http://books.google.com/books/content?id=Zla73jbuCD4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      language: 'en',
      listPrice: {
        amount: 0,
        currencyCode: 'ILS',
        isOnSale: false
      },
      reviews: [
        {
          id: 'ponfgh',
          fullName: 'Sara Jons',
          rate: 5,
          readAt: new Date(),
          textArea: 'Great Book'
        },
        {
          id: 'qwer56',
          fullName: 'Steve Smith',
          rate: 2,
          readAt: new Date(),
          textArea: 'Poor'
        }
      ]
    },
    {
      _id: 'lqRdDwAAQBAJ',
      title: 'The Mamba Mentality',
      subtitle: 'How I Play',
      authors: ['Kobe Bryant'],
      publishedDate: 2018,
      description:
        'The Mamba Mentality: How I Play is Kobe Bryant’s personal perspective of his life and career on the basketball court and his exceptional, insightful style of playing the game—a fitting legacy from the late Los Angeles Laker superstar. In the wake of his retirement from professional basketball, Kobe “The Black Mamba” Bryant decided to share his vast knowledge and understanding of the game to take readers on an unprecedented journey to the core of the legendary “Mamba mentality”.',
      pageCount: 208,
      categories: ['Sport', 'Basketball'],
      thumbnail:
        'http://books.google.com/books/content?id=lqRdDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      language: 'en',
      listPrice: {
        amount: 88,
        currencyCode: 'ILS',
        isOnSale: true
      },
      reviews: [
        {
          id: 'yuL589',
          fullName: 'Book Reader',
          rate: 5,
          readAt: new Date(),
          textArea: 'Fantastic Book'
        },
        {
          id: 'yupLms',
          fullName: 'John Doe',
          rate: 5,
          readAt: new Date(),
          textArea: 'Very Inspairing'
        }
      ]
    }
  ];
}
