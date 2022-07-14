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
      Gatsby: 'The content you are viewing now was built within the gatsby Ecosystem. I have good knowledge on building a page from scratch that is both easy to expand and maintain. I can work with plug-in handling, Seo optimization, and MDX content management.',
    },
    pLangs: {
      Typescript: 'I have a solid understanding of Typescripts and program almost exclusively in Typscript. I am really impressed by the development experience using Typescript and continuously work on improving my skills in this area.',
      Javascript: 'I have a solid knowledge of Javascript. I can create complex projects both in \'vanilla\' Javascript and using frameworks like React, Next, Gatsby and Fresh. I have a good overview of newer ES6 Javascript syntax such as: \'arrow-functions\', \'classes\', \'promises\', etc. Additionally, I have a proper grasp of solving algorithms, error handling and bug fixes.',
      HTML5: 'I work confidently with HTML. I know all the different tags and attributes. I have a good overview of the different tags in the header and how they are used. I also focus on web accessibility and have a good overview of the WAI-ARIA specifications and how the different ARIA roles and labels are used.',
      CSS3: 'I have professional competency with css styling and design concepts such as \'responsive layout\', \'the Grid system \', \'Flexbox\', \'css variables\', \'clipping\', and \'animations\', etc.\n I am aware of compatibility between various internet browsers and good knowledge of the different options for styling that can be used in both simple and complex projects.',
    },
    styleFrames: {
      Bootstrap: 'I have complete grasp of Bootstrap as a style framework and a UI component library. I use Bootstrap in almost all of my personal projects together with styled components. I think the combination of the two can be a very powerful tool for creating both complex and simple web applications that are responsive and mobile friendly.',
      Tailwind: 'I have working lknowledge of the Tailwind CSS framework. I believe it is a very good framework for producing highly customized style structures. It also helps a lot to increase my competency in \'vanilla\' CSS. I have a good understanding of the different styles guides and how they can be used to create a better user experience.',
      'Styled-components': 'i have a lot of experience with Styled Components for styling in React projects,\n I especially like this particular way of styling in Javascript frameworks, as it is really powerful and makes it possible to apply CSS properties depending on  state and isolate styles in a way that also scales well to large projects.',
      ChakraUI: 'I have used the ChakraUI framework for creating some custom components.for one of my projects. I think it is a useful tool that can easily be scaled for larger projects, Some aspects of ChakraUI is similar to tailwind though I would go with Tailwind if I had to choose between the two.',
      SemanticUI: 'My experience with SemanticUI is as a UI component library. I have good understanding of its implementation and how it can be used to generate decent user interfaces.',
      'React-Spring': 'I used react-spring to create various animations in this portfolio, including the animations for the parralax effect and the animations for the footer section. \n Every other animation effect on this site was made manually with vanilla CSS. While I appreciate the existence of animation libraries. I do have a little bias that tends towards creating my own solution from scratch, But for times when I have to build out more complex animation effects without consoderation for more fine grained modifications, I am happy to use react-spring. \n Another really great library I have found for general animations is KuteJS, though unlike spring, it uses conventional animation duration props as opposed to real world physics.',
    },
  },
  backend: {
    db: {
      MongoDB: 'I have strong knowledge of MongoDB. I use it as a database manager and user management library, MongoDB is a great database manager for small and large scale applications. I have a good and working understanding of the different ways of using MongoDB and how to use it in a production environment.',
      Firebase: 'I have basic understanding of Firebase. I have used a lot of its features in my previous place of work, features like, user authentication, Firestore storage, the realtime database, cloud functions, etc. I have a basic understanding of the different ways of using Firebase and how to use it in a production environment.',
      GraphQL: 'I have basic understanding of GraphQL query language and I have used it in building this website. I have explored the GraphiQL IDE and can create simple query scripts and implement them with the useQuery hook or PageQuery alternatively.',
      Cloudinary: 'I have experience with Cloudinary as a cloud image storage service. I used the API in one of my projects store images uploaded to the application and return the URL for storage in MongoDB.',
    },
    frameworks: {
      Node: 'I program almost exclusively in the NodeJS runtime/ecosystem. I have a proper grasp of the NPM packega manager and how to install various packages that can be used to create robust applications. I have a very good understanding of the different ways of using NodeJS and how to use it in a production environment.',
      Express: 'I have production level expertise with the express server management library. I can create robust and testable API routes, Setup authentication with Passport or JWT, and use other Middlewares that are required in a project.',
      Mongoose: 'Mongoose is a helper library for MongoDB that simplifies the creation of schemas and models, it contains a lot of useful methods for querying data from MongoDB. I have a good understanding of the different ways of using Mongoose and how to use it in a production environment.',
    },
  },
  devsAndSrc: {
    Docker: 'I have knowledge of the complete workflow of using Docker to containerize and deploy a web application to a live server. I can create a Dockerfile, and also a docker-compose yml file to configure testing and deployment of web applications. Docker is a container management system that allows you to create and manage containers for your applications. it is a great tool for accessing an application in the same state as when it was deployed, without and drawbacks of having a different development environment.',
    TravisCI: 'I have gone through the process of setting up a TravisCI environment for one of my personal project. I used it to create a basic testing and deployment pipeline for the project.',
    CircleCI: 'I have also gone through the process of setting up a CircleCI environment for the same project, I did this for the benefit of learning. I used it to create a basic testing and deployment pipeline for the project.',
    AWSElasticBeanstalk: 'My knowledge of AWS is as a hosting server environment using the Elastic Beanstalk service and also as a data storage provider using its S3 Bucket. I am currently undergoing a full course on AWS, and I have plans to get the certification in the coming months.',
    Git: 'All of my onlinr projects are source controlled in git. I have professional competency with git and can easily adapt to teams that use git in their workflow. \n Git is a very powerful software version control system tool. I know how to use most commands and have good understanding of its strengths and pitfals.'
  },
  extra: {
    Blender: 'I have experience working in Blender for 3D graphics and illustrations. I have control of the various tools, lighting, image rendering, animations etc. \n I try to set aside time to improve my skills continuously in Blender, as it provides some very appealing possibilities I can combine with my other competencies in web design.',
    zBrush: 'I used zBrush as a tool for creating and rendering 3D models. It is part of my workflow for modelling and animations.',
    Wordpress: 'My primary experience with Wordpress is as a website builder where I can setup webpages from wordpress themes as needed and implement the various plugins needed to create the necessary site functionalities. I also have experience hosting wordpress sites.',
    'Chemical Engineering': 'Yea that\'s my Bachelor Degree :-)'
  }
}