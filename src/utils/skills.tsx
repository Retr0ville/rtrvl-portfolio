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
export const skills: SkillsType = {
  frontend: {
    webFrames: {
      React: 'I have professional experience with the React ecosystem and I feel confident and am familiar with all the useful libraries associated with it. \n I prefer functional components and hooks, but I can also work with class components. \n I work in a team that puts a lot of emphasis on optimizing React code and following best practices, This is of course reflected in the code I deliver myself',
      Next: 'I have experience working in the NextJs framework to generate both static and server-side rendered react applications. I am comfortable using the various possibilities for data fetching and page rendering i.e. getServerSideProps, getStaticProps and getStaticPath',
      EJS: 'EJS is a javascript template engine for creating simple web applications, I have basic knowledge of the syntax and some experience building multipage static websites using a nodejs backend.',
      Gatsby: 'The content you are viewing now was built within the gatsby Ecosystem. I have good knowledge on building a page from scratch that is both easy to expand and maintain. I can work with plug-in handling, Seo optimization,',
    },
    pLangs: {
      Typescript: 'I have a solid understanding of Typescripts and program almost exclusively in Typscript. I am really impressed by the development experience using Typescript and continuously work on improving my skills in this area.',
      Javascript: 'I have a solid knowledge of Javascript. I can create complex projects both in \'vanilla\' Javascript and using frameworks like React, Next, Gatsby and Fresh. I have a good overview of newer ES6 Javascript syntax such as: \'arrow-functions\', \'classes\', \'promises\', etc. Additionally, I have a proper grasp of solving algorithms, error handling and bug fixes.',
      HTML5: 'I work confidently with HTML. I know all the different tags and attributes. I have a good overview of the different tags in the header and how they are used. I also focus on web accessibility and have a good overview of the WAI-ARIA specifications and how the different ARIA roles and labels are used.',
      CSS3: 'I have professional competency with css styling and design concepts such as \' responsive layout\',, \'the Grid system \', \'Flexbox\', \'css variables\', \'clipping\', \' and animations,\' etc.\n I am aware of compatibility between various internet browsers and good knowledge of the different options for styling that can be used in both simpleand complex projects.',
    },
    styleFrames: {
      Bootstrap: 'bo',
      Tailwind: 'ta',
      'Styled-components': 'i have a lot of experience with Styled Components for styling in React projects,\n I especially like this particular way of styling in Javascript frameworks, as it is really powerful and makes it possible to apply CSS properties depending on  state and isolate styles in a way that also scales well to large projects.',
      ChakraUI: 'ch',
      SemanticUI: 'se',
      'React-Spring': 're',
    },
  },
  backend: {
    db: {
      MongoDB: 'mo',
      Firebase: 'fi',
      GraphQL: 'I have basic understanding of GraphQL query language and I have used it in building this website. I have explored the GraphiQL IDE and can create simple query scripts and implement them with the useQuery hook or PageQuery alternatively.',
      Cloudinary: 'cl',
    },
    frameworks: {
      Node: 'no',
      Express: 'ex',
      Mongoose: 'mo',
    },
  },
  devsAndSrc: {
    Docker: 'do',
    TravisCI: 'tr',
    CircleCI: 'ci',
    AWSElasticBeanstalk: 'aw',
    Git: 'git'
  },
  extra: {
    Blender: 'bl',
    zBrush: 'zb',
    Wordpress: 'wo',
    'Chemical Engineering': 'ch'
  }
}