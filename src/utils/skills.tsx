export interface SkillsType {
  frontend: Frontend;
  backend: Backend;
  devsAndSrc: DevsAndSrc;
  extra: Extra;
}

interface Extra {
  Blender: string;
  zBrush: string;
  Wordpress: string;
  'Chemical Engineering': string;
}

interface DevsAndSrc {
  Docker: string;
  TravisCI: string;
  CircleCI: string;
  AWSElasticBeanstalk: string;
  Git: string;
}

interface Backend {
  db: Db;
  frameworks: Frameworks;
}

interface Frameworks {
  Node: string;
  Express: string;
  Mongoose: string;
}

interface Db {
  MongoDB: string;
  Firebase: string;
  GraphQL: string;
  Cloudinary: string;
}

interface Frontend {
  webFrames: WebFrames;
  pLangs: PLangs;
  styleFrames: StyleFrames;
}

interface StyleFrames {
  Bootstrap: string;
  Tailwind: string;
  'Styled-components': string;
  ChakraUI: string;
  SemanticUI: string;
  'React-Spring': string;
}

interface PLangs {
  Typescript: string;
  Javascript: string;
  HTML5: string;
  CSS3: string;
}

interface WebFrames {
  React: string;
  Next: string;
  EJS: string;
  Gatsby: string;
}
export const skills : SkillsType = {
  frontend: {
    webFrames:{
      React:'re',
      Next:'ne',
      EJS:'ej',
      Gatsby:'ga',
    },
    pLangs:{
      Typescript:'ty',
      Javascript:'ja',
      HTML5:'ht',
      CSS3:'cs',
    },
    styleFrames:{
      Bootstrap:'bo',
      Tailwind:'ta',
      'Styled-components':'st',
      ChakraUI:'ch',
      SemanticUI:'se',
      'React-Spring':'re',
    },
  },
  backend:{
    db:{
      MongoDB:'mo',
      Firebase:'fi',
      GraphQL:'ga',
      Cloudinary:'cl',
    },
    frameworks:{
      Node:'no',
      Express:'ex',
      Mongoose:'mo',
    },
  },
  devsAndSrc:{
    Docker:'do',
    TravisCI:'tr',
    CircleCI:'ci',
    AWSElasticBeanstalk:'aw',
    Git:'git'
  },
  extra:{
    Blender:'bl',
    zBrush:'zb',
    Wordpress:'wo',
    'Chemical Engineering':'ch'
  }
}