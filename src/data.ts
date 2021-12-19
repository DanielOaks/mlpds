type Author = {
  name: string;
  reddit?: string;
  twitter?: string;
  homepage?: string;
  icon?: string;
}

interface AuthorMap {
  [name: string]: Author
}

export const authors: AuthorMap = {
  dispatchrabbi: {
    name: 'dispatchrabbi',
    reddit: 'dispatchrabbi',
  },
  idrawponiessometimes: {
    name: 'idrawponiessometimes',
    reddit: 'idrawponiessometimes',
  },
  mynameischumpy: {
    name: 'mynameischumpy',
    reddit: 'mynameischumpy',
  },
  pixienop: {
    name: 'pixienop',
    twitter: 'pixienop',
    homepage: 'https://pixienop.net/',
    icon: '/authors/pixienop.png',
  },
  viwrastupr: {
    name: 'viwrastupr',
    reddit: 'viwrastupr',
    icon: '/authors/viwrastupr.png',
  },
}

export const guides = {
  'chumpy/': {
    name: 'Working on your line work – from under sketch to complete',
    author: 'mynameischumpy',
    link: '/guides/chumpy/',
  },
  'chumpy/1-sketching': {
    name: 'Lesson 1: Sketching Technique',
    author: 'mynameischumpy',
  },
  'chumpy/2-linework': {
    name: 'Lesson 2: Linework (deleted)',
    author: 'mynameischumpy',
  },
  'chumpy/3-greyscale-shading': {
    name: 'Lesson 3: Greyscale Shading',
    author: 'mynameischumpy',
  },
  'chumpy/4-pony-shading-and-lighting': {
    name: 'Lesson 4: Basic Pony Shading and Lighting',
    author: 'mynameischumpy',
  },
  'chumpy/5-common-anatomy-errors': {
    name: 'Lesson 5: Common anatomy errors',
    author: 'mynameischumpy',
  },
  'chumpy/6-pony-anatomy': {
    name: 'Lesson 6: Pony Anatomy',
    author: 'mynameischumpy',
  },
  'keys-to-success-in-art': {
    name: 'Keys to Success in Art',
    author: 'viwrastupr',
    link: '/guides/keys-to-success-in-art',
  },
  'measuring-and-comparing': {
    name: 'Measuring and Comparing',
    author: 'viwrastupr',
    link: '/guides/measuring-and-comparing',
  },
  'measuring-and-maintaining-proportions': {
    name: 'How to measure, compare, and sketch your way to proportionality',
    author: 'dispatchrabbi',
    link: '/guides/measuring-and-maintaining-proportions',
  },
  'pony-anatomy-and-undersketching': {
    name: 'Pony anatomy and undersketching',
    author: 'viwrastupr',
    link: '/guides/pony-anatomy-and-undersketching',
  },
  'pose-building-in-action': {
    name: 'Undersketching and Refinement - Pose-building in action',
    author: 'idrawponiessometimes',
    link: '/guides/pose-building-in-action',
  },
  'sub-etiquette': {
    name: 'Sub etiquette',
    author: 'viwrastupr',
    link: '/guides/sub-etiquette',
  },
  'understanding-references': {
    name: 'Understanding References',
    author: 'viwrastupr',
    link: '/guides/understanding-references',
  },
}

export const guideLists = {
  'default': {
    home: '',
    pages: [
      {
        name: 'Introductions',
        pages: [
          'sub-etiquette',
          'measuring-and-maintaining-proportions',
          'keys-to-success-in-art',
        ],
      },
      {
        name: 'The Basics',
        pages: [
          'pony-anatomy-and-undersketching',
          'understanding-references',
          'measuring-and-comparing',
          'pose-building-in-action',
          'chumpy/',
        ]
      }
    ],
  },
  'chumpys': {
    home: 'chumpy/',
    pages: [
      {
        name: "The Guides",
        pages: [
          'chumpy/1-sketching',
          'chumpy/2-linework',
          'chumpy/3-greyscale-shading',
          'chumpy/4-pony-shading-and-lighting',
          'chumpy/5-common-anatomy-errors',
          'chumpy/6-pony-anatomy',
        ],
      },
    ],
  },
}
