import axios from 'axios';
import { DbService } from './db.service.js';

const KEY = 'books';

export default {
  query,
  get,
  remove,
  update,
  getEmptybook,
  getBookRating,
  getBooksFromAPI,
  add
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
      _id: '91A-172DB9A0998-210E',
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
      listPrice: { amount: 19, currencyCode: 'ILS', isOnSale: true },
      reviews: []
    },
    {
      _id: 'C4B-172DB9A0998-A79',
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
      listPrice: { amount: 44, currencyCode: 'EUR', isOnSale: false },
      reviews: []
    },
    {
      _id: '24B4-172DB9A0998-ACC',
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
      listPrice: { amount: 108, currencyCode: 'ILS', isOnSale: false },
      reviews: []
    },
    {
      _id: 'AC7-172DB9A0998-1976',
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
      listPrice: { amount: 30, currencyCode: 'EUR', isOnSale: true },
      reviews: []
    },
    {
      _id: '1363-172DB9A0998-1B17',
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
      listPrice: { amount: 19, currencyCode: 'USD', isOnSale: false },
      reviews: []
    },
    {
      _id: '1D71-172DB9A0998-1FA1',
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
      listPrice: { amount: 91, currencyCode: 'USD', isOnSale: true },
      reviews: [
        {
          id: 'ghf125',
          fullName: 'Book Reader 1',
          rate: 1,
          readAt: '2020-06-22T10:36:44.823Z',
          textArea: 'Bla Bla Bla'
        },
        {
          id: 'geg57h',
          fullName: 'Book Reader 2',
          rate: 5,
          readAt: '2020-06-22T10:36:44.823Z',
          textArea: 'Bla2 Bla2 Bla2'
        }
      ]
    },
    {
      _id: '1F6A-172DB9A0998-CFB',
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
      listPrice: { amount: 167, currencyCode: 'ILS', isOnSale: true },
      reviews: [
        {
          id: '87536f',
          fullName: 'Book Fan',
          rate: 5,
          readAt: '2020-06-22T10:36:44.823Z',
          textArea: 'WOWWWWWWWW'
        },
        {
          id: 'op98eg',
          fullName: 'Relly Joe',
          rate: 5,
          readAt: '2020-06-22T10:36:44.823Z',
          textArea: 'Very Good Book!'
        }
      ]
    },
    {
      _id: '569-172DB9A0998-21AF',
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
      listPrice: { amount: 0, currencyCode: 'ILS', isOnSale: false },
      reviews: [
        {
          id: 'ponfgh',
          fullName: 'Sara Jons',
          rate: 5,
          readAt: '2020-06-22T10:36:44.823Z',
          textArea: 'Great Book'
        },
        {
          id: 'qwer56',
          fullName: 'Steve Smith',
          rate: 2,
          readAt: '2020-06-22T10:36:44.823Z',
          textArea: 'Poor'
        }
      ]
    },
    {
      _id: '13B7-172DB9A0998-1D71',
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
      listPrice: { amount: 88, currencyCode: 'ILS', isOnSale: true },
      reviews: [
        {
          id: 'yuL589',
          fullName: 'Book Reader',
          rate: 5,
          readAt: '2020-06-22T10:36:44.823Z',
          textArea: 'Fantastic Book'
        },
        {
          id: 'yupLms',
          fullName: 'John Doe',
          rate: 5,
          readAt: '2020-06-22T10:36:44.823Z',
          textArea: 'Very Inspairing'
        }
      ]
    },
    {
      _id: '1035-172DB9A272A-182A',
      title: 'Management of Positive Patch Test Reactions',
      subtitle: 'No Subtitle Provided',
      authors: [
        'Jan E. Wahlberg',
        'Peter Elsner',
        'Lasse Kanerva',
        'Howard I. Maibach'
      ],
      publishedDate: '2003-06-12',
      description:
        'Commercially available chemicals used for patch testing are the main focus of this book. It is the first book which provides a short and concise explanation to physicians, patients, and employees on how to minimize allergic contact dermatitis when patch testing is completed. The second book of this mini-series, "Patch testing and Prick testing" covers the new standard of patch testing and prick testing procedures in an efficient and practical way. Both of these well-structured books should not be missed by any physician in daily practise when treating patients with dermatological problems.',
      pageCount: 116,
      categories: ['Medical'],
      thumbnail:
        'http://books.google.com/books/content?id=LV_a1JjUilQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      language: 'en',
      listPrice: { amount: 0, currencyCode: 'NONE', isOnSale: false },
      reviews: []
    },
    {
      _id: '1E16-172DB9CEE3A-1FED',
      title: 'Vue.js Programming by Example',
      subtitle: 'No Subtitle Provided',
      authors: ['Agus Kurniawan'],
      publishedDate: 'No Published Date Provided',
      description:
        'Vue.js is a modern JavaScript framework to build a modern web application. This book provides tutorial, demo and hands-on-lab Vue.js programming. Program samples and problem scenarios are provides to accelerate how to work with Vue.js including interacting with Node.js, PHP, ASP.NET MVC Core. The following is highlight topic in this book: * Preparing Development Environment * Vue.js Components * Data Binding and Filtering * Input Validation and Vue.js Templates * Vue.js Routing, Vue.js State and A Single Page Application (SPA) * Interacting with Back-End Servers * Vue.js, PHP and MySQL * Vue.js, ASP.NET MVC Core and MySQL * Vue.js, Node.js, Express and MongoDB * Vue.js, Node.js and Socket.io',
      categories: ['Juvenile Nonfiction'],
      thumbnail:
        'http://books.google.com/books/content?id=JDw8DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      language: 'en',
      listPrice: { amount: 10, currencyCode: 'ILS', isOnSale: true },
      reviews: []
    },
    {
      _id: '2563-172DB9D8C14-1A47',
      title: 'Practical Flutter',
      subtitle:
        'Improve your Mobile Development with Google’s Latest Open-Source SDK',
      authors: ['Frank Zammetti'],
      publishedDate: '2019-07-19',
      description:
        "Explore what Flutter has to offer, where it came from, and where it’s going. Mobile development is progressing at a fast rate and with Flutter – an open-source mobile application development SDK created by Google – you can develop applications for Android and iOS, as well as Google Fuchsia.Learn to create three apps (a personal information manager, a chat system, and a game project) that you can install on your mobile devices and use for real. You will begin by getting a solid foundation of Flutter knowledge, and building on it immediately by constructing two more traditional productivity apps.. You will also learn to create a game, enabling you to see a whole other perspective on what Flutter can do. In addition to building these apps, you'll have the benefit of reviewing real-world issues you might encounter, along with ways to deal with them through tips and tricks, all designed to make your Flutter experience that much more productive and, frankly, fun! Practical Flutter will leave you with a solid grasp of how to build apps with Flutter, and springboard into creating more advanced apps on your own. By the time your journey through this material concludes, another larger one will begin as you springboard, well-prepared, into the larger world of Flutter development, tackling any project that comes your way with aplomb. Practical Flutter is a learning adventure you won't want to miss. What You'll Learn Get a Flutter project started and logically structure it Use the interface elements Flutter provides, such as widgets, controls, and extensions Build layouts using interface elements Use available tooling, specifically Android Studio Leverage server-side development and connect a Flutter app to a server back-end. Who This Book Is For Mobile developers who are looking to build for multiple mobile platforms and trying to do so with a codebase that is largely the same across all. Basic knowledge of iOS and Android generally, and some general programming experience is expected.",
      pageCount: 396,
      categories: ['Computers'],
      thumbnail:
        'http://books.google.com/books/content?id=FwOkDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      language: 'en',
      listPrice: { amount: 128, currencyCode: 'ILS', isOnSale: true },
      reviews: [
        {
          id: '1FB0-172DB9FAB38-1C73',
          fullName: 'Book Reader',
          textArea: 'Very Interasting',
          rate: 4,
          readAt: '2020-06-22T10:42:53.880Z'
        }
      ]
    },
    {
      _id: '1F4E-172DB9DB4AE-1A4E',
      title: 'Learn Angular: Build a Todo App',
      subtitle: 'No Subtitle Provided',
      authors: ['Jurgen van de Moere'],
      publishedDate: '2018-06-15',
      description:
        "Angular is not just a framework, but rather a platform that empowers developers to build applications for the web, mobile, and the desktop. This book contains a complete tutorial on building a todo app with Angular. Along the way, we'll learn about installation and setup, component architecture, adding a REST backend, routing, authentication, and much more. This book is for all front-end developers who want to become proficient with Angular and its related tools. You'll need to be familiar with HTML and CSS and have a reasonable level of understanding of JavaScript in order to follow the discussion.",
      pageCount: 211,
      categories: ['Computers'],
      thumbnail:
        'http://books.google.com/books/content?id=wXtgDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      language: 'en',
      listPrice: { amount: 19, currencyCode: 'ILS', isOnSale: true },
      reviews: []
    },
    {
      _id: '13FD-172DB9E57A7-1F17',
      title: 'Pro MongoDB Development',
      subtitle: 'No Subtitle Provided',
      authors: ['Deepak Vohra'],
      publishedDate: '2015-12-30',
      description:
        "Pro MongoDB Development is about MongoDB, a NoSQL database based on the BSON (binary JSON) document model. The book discusses all aspects of using MongoDB in web applications: Java, PHP, Ruby, JavaScript are the most commonly used programming/scripting languages and the book discusses accessing MongoDB database with these languages. The book also discusses using Java EE frameworks Kundera and Spring Data with MongoDB. As NoSQL databases are commonly used with the Hadoop ecosystem the book also discusses using MongoDB with Apache Hive. Migration from other NoSQL databases (Apache Cassandra and Couchbase) and from relational databases (Oracle Database) is also discussed. What You'll Learn: How to use a Java client and MongoDB shell How to use MongoDB with PHP, Ruby, and Node.js as well How to migrate Apache Cassandra tables to MongoDB documents; Couchbase to MongoDB; and transferring data between Oracle and MongoDB How to use Kundera, Spring Data, and Spring XD with MongoDB How to load MongoDB data into Oracle Database and integrating MongoDB with Oracle Database in Oracle Data Integrator Audience: The target audience of the book is NoSQL database developers. Target audience includes Java, PHP and Ruby developers. The book is suitable for an intermediate level course in NoSQL database.",
      pageCount: 481,
      categories: ['Computers'],
      thumbnail:
        'http://books.google.com/books/content?id=Ra1PCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      language: 'en',
      listPrice: { amount: 146, currencyCode: 'ILS', isOnSale: true },
      reviews: []
    },
    {
      _id: '13E9-172DB9E84A6-5F9',
      title: 'The NBA Story',
      subtitle:
        'How the Sports League Slam-Dunked Its Way into a Global Business Powerhouse',
      authors: ['Rich Mintzer', 'Eric Mintzer'],
      publishedDate: '2020-05-26',
      description:
        'What can you learn from the most successful companies in the world? The NBA Story will help you understand and adopt the competitive strategies, workplace culture, and daily business practices that enabled the exciting basketball league to become the powerhouse it is today. Today’s NBA is filled with larger-than-life figures, like LeBron James, James Harden and Stephen Curry, who effortlessly dominate the courts. But it wasn’t always so glamorous. The multi-billion-dollar league has grown from humble roots into a sports powerhouse that is loved around the world due to savvy digital marketing and a global focus. Thanks to the popularity of individual players and team rivalries, the NBA has survived league mergers and financial crisis. Teams have earned the respect of millions of loyal fans who are dedicated to the success of each and every organization within the league. Through the story of the NBA, you’ll learn: How to keep a dream alive when it seems like no one wants to see it come true. How a company can find their way out of a financial crisis. How presentation is the secret sauce to the success of any show. And how a company can build a loyal fanbase who will do anything to keep them on top.',
      pageCount: 192,
      categories: ['Business & Economics'],
      thumbnail:
        'http://books.google.com/books/content?id=oUm2DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      language: 'en',
      listPrice: { amount: 52, currencyCode: 'ILS', isOnSale: true },
      reviews: []
    }
  ];
}

async function getBooksFromAPI(bookName, books) {
  const url = `https://www.googleapis.com/books/v1/volumes?printType=books&q=${bookName}`;
  const res = await axios.get(url);
  res.data.items.forEach((item) => {
    let book = {
      _id: item.id,
      title: item.volumeInfo.title
        ? item.volumeInfo.title
        : 'No Title Provided',
      subtitle: item.volumeInfo.subtitle
        ? item.volumeInfo.subtitle
        : 'No Subtitle Provided',
      authors: item.volumeInfo.authors
        ? item.volumeInfo.authors
        : ['No Author Name Provided'],
      publishedDate: item.volumeInfo.publishedDate
        ? item.volumeInfo.publishedDate
        : 'No Published Date Provided',
      description: item.volumeInfo.description
        ? item.volumeInfo.description
        : 'No Description Provided',
      pageCount: item.volumeInfo.pageCount,
      categories: item.volumeInfo.categories
        ? item.volumeInfo.categories
        : ['No Categories Provided'],
      thumbnail: item.volumeInfo.imageLinks
        ? item.volumeInfo.imageLinks.thumbnail
        : 'https://vignette.wikia.nocookie.net/mortalinstruments/images/5/5d/Placeholder_book.png/revision/latest?cb=20120612092840',
      language: item.volumeInfo.language
        ? item.volumeInfo.language
        : 'No Language Provided',
      listPrice: {
        amount:
          item.saleInfo.saleability === 'FOR_SALE'
            ? item.saleInfo.listPrice.amount
            : 0,
        currencyCode:
          item.saleInfo.saleability === 'FOR_SALE'
            ? item.saleInfo.listPrice.currencyCode
            : 'NONE',
        isOnSale: item.saleInfo.saleability === 'FOR_SALE' ? true : false
      },
      reviews: []
    };
    books.push(book);
  });
  return books;
}
