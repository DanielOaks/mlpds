type Author = {
  name: string;
  reddit?: string;
  twitter?: string;
  homepage?: string;
  icon: typeof import('*.png');
}

interface AuthorMap {
  [name: string]: Author
}

export const authors: AuthorMap = {
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
  'sub-etiquette': {
    name: 'Sub etiquette',
    author: 'viwrastupr',
    link: '/guides/sub-etiquette',
  },
  'measuring-and-maintaining-proportions': {
    name: 'How to measure, compare, and sketch your way to proportionality.',
    author: 'dispatchrabbi',
    link: '/guides/measuring-and-maintaining-proportions',
  },
  'keys-to-success-in-art': {
    name: 'Keys to Success in Art',
    author: 'viwrastupr',
    link: '/guides/keys-to-success-in-art',
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
  }
]
