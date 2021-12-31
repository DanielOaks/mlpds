//TODO: update this once we have a better one
export const safePonyRefLink: string = 'https://derpibooru.org/search?page=1&q=safe';

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
    icon: '/authors/dispatchrabbi.png',
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
    icon: '/authors/viwrastupr.jpg',
  },
}

type Guide = {
  name: string;
  author: string;
  link?: string;
  tags?: Array<string>;
}

interface GuideMap {
  [name: string]: Guide
}

export const guides: GuideMap = {
  'applying-value-to-shading': {
    name: 'Applying value to shading',
    author: 'thebestwes',
  },
  'art-isnt-made-in-a-vacuum': {
    name: 'A look at exploring new things and how to prevent art statementing',
    author: 'viwrastupr',
  },
  'backgrounds': {
    name: 'Thinking about and working on backgrounds',
    author: 'moarvespenegas',
  },
  'big-projects': {
    name: 'The BIG PROJECT guide',
    author: 'viwrastupr',
  },
  'bodies': {
    name: 'Body guide',
    author: 'sorcerushorserus',
  },
  'chumpy/': {
    name: 'Working on your line work – from under sketch to complete',
    author: 'mynameischumpy',
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
  'common-anatomy-errors': {
    name: 'Common anatomy errors',
    author: 'viwrastupr',
  },
  'composition': {
    name: 'Composition. How does your drawing feel to look at, and why?',
    author: 'viwrastupr',
  },
  'critical-thinking': {
    name: 'Critical thinking: The most important skill to have',
    author: 'viwrastupr',
  },
  'critique-lessons': {
    name: 'Critique lessons – A 101 approach to starting with critique',
    author: 'r1pperanthon',
  },
  'dont-panic': {
    name: "DON'T PANIC! A drawing guide – from beginner to expert, and everything inbetween",
    author: 'viwrastupr',
  },
  'gesturing': {
    name: 'Gesturing, what is it and why do I need it?',
    author: 'viwrastupr',
  },
  'giving-critique-without-frustration': {
    name: 'Giving wonderful critique without that feeling of boredom and frustration',
    author: 'viwrastupr',
  },
  'hair': {
    name: 'Thinking about Hair',
    author: 'viwrastupr',
  },
  'heads': {
    name: 'Heads',
    author: 'whatsapokemon',
  },
  'how-to-critique': {
    name: 'How to Critique: For critics and artists alike',
    author: 'viwrastupr',
  },
  'identifying-compositional-awkwardness': {
    name: 'Identifying Compositional Awkwardness',
    author: 'viwrastupr',
  },
  'intention-in-art': {
    name: 'Intention in art. What you want to do vs What actually happens',
    author: 'viwrastupr',
  },
  'keys-to-success-in-art': {
    name: 'Keys to Success in Art',
    author: 'viwrastupr',
  },
  'legs': {
    name: 'Legs',
    author: 'whatsapokemon',
  },
  'measuring-and-comparing': {
    name: 'Measuring and Comparing',
    author: 'viwrastupr',
  },
  'measuring-and-maintaining-proportions': {
    name: 'How to measure, compare, and sketch your way to proportionality',
    author: 'dispatchrabbi',
  },
  'opponent-process-color': {
    name: 'The Opponent Process (neurological) theory of color',
    author: 'ponytron5000',
  },
  'pony-anatomy': {
    name: 'Pony Anatomy',
    author: 'applejacksmack',
  },
  'pony-anatomy-and-undersketching': {
    name: 'Pony anatomy and undersketching',
    author: 'viwrastupr',
  },
  'pose-building-in-action': {
    name: 'Undersketching and Refinement - Pose-building in action',
    author: 'idrawponiessometimes',
  },
  'rules-and-exceptions': {
    name: 'Rules and Exceptions',
    author: 'viwrastupr',
  },
  'self-expression-and-creativity': {
    name: 'Self-expression and creativity – a guide to find art in yourself',
    author: 'popprocks',
  },
  'shading': {
    name: 'Shading',
    author: 'viwrastupr',
  },
  'shadows-making-objects-appear-3d': {
    name: 'Shadows and making objects appear 3d',
    author: 'viwrastupr',
  },
  'sub-etiquette': {
    name: 'Sub etiquette',
    author: 'viwrastupr',
  },
  'twilights-creative-checklist': {
    name: "Twilight's Creative Checklist: How to be creative",
    author: 'viwrastupr',
  },
  'understanding-references': {
    name: 'Understanding References',
    author: 'viwrastupr',
  },
  'variety-in-art': {
    name: 'Defining Variety in Art',
    author: 'viwrastupr',
  },
  'what-is-critique': {
    name: 'What is critique? Problems and solutions for artists and critics',
    author: 'viwrastupr',
  },
  'where-to-shade': {
    name: 'Where to shade? Breaking things into parts before shading',
    author: 'viwrastupr',
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
          'dont-panic',
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
          'gesturing',
          'hair',
          'common-anatomy-errors',
          'pony-anatomy',
          'bodies',
        ],
      },
      {
        name: 'Individual Parts',
        pages: [
          'legs',
          'heads',
        ],
      },
      {
        name: 'Shading',
        pages: [
          'where-to-shade',
          'shading',
          'shadows-making-objects-appear-3d',
          'applying-value-to-shading',
        ],
      },
      {
        name: 'Complex Guides',
        pages: [
          'composition',
          'backgrounds',
          'identifying-compositional-awkwardness',
          'rules-and-exceptions',
          'big-projects',
          'critical-thinking',
          'opponent-process-color',
        ],
      },
      {
        name: 'Creative Guides',
        pages: [
          'variety-in-art',
          'art-isnt-made-in-a-vacuum',
          'intention-in-art',
          'twilights-creative-checklist',
          'self-expression-and-creativity',
        ],
      },
      {
        name: 'Critique Guides',
        pages: [
          'what-is-critique',
          'how-to-critique',
          'giving-critique-without-frustration',
          'critique-lessons',
        ],
      },
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
