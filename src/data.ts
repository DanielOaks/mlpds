type Author = {
  name: string;
  reddit?: string;
  twitter?: string;
  homepage?: string;
  icon?: typeof import('*.png');
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
    icon: await import('@/assets/authors/pixienop.png'),
  },
  viwrastupr: {
    name: 'viwrastupr',
    reddit: 'viwrastupr',
    icon: await import('@/assets/authors/viwrastupr.png'),
  },
}

export const guides = {
  'chumpys-guides': {
    name: 'Working on your line work – from under sketch to complete',
    author: 'mynameischumpy',
    link: '/guides/chumpy/',
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

export const guideSidebar = [
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
      'chumpys-guides',
    ]
  }
]
