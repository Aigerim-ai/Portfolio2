import uuidv1 from 'uuid/v1';

// HERO DATA
export const heroData = {
  title: 'Hey, my name is',
  name: 'Aigerim Suleimenova',
  role: "I'm a Full-Stack Web Developer",
  subtitle: 'I can bring your product to life',
  cta1: 'Know more',
  cta2: 'See my work',
};

// ABOUT DATA
export const aboutData = {
  img: 'profil.jpg',
  paragraphOne:
    'Hello! My name is Aigerim, a Web Developer from Kazakhstan. I am currently senior Computer Science student at Nazarbayev University.',
  
  paragraphTwo:
     'I am self-taught developer striving to always improve by repeatedly grinding out code every day.', 
     paragraphThree:
    'Other than web development, I have passions for  mobile app development, traveling, financial investments.', 
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'bootcamps.jpg',
    title: 'Robofriends',
    info:
      "Robofriends is web application allows you to make search among robots.",
    info2: '',
    url: 'https://aigerim-ai.github.io/robofriends/',
    repo: 'https://github.com/Aigerim-ai/robofriends',
    technologies: [
      {
        id: uuidv1(),
        name: 'React',
        url: 'https://reactjs.org/',
      },
     
      {
        id: uuidv1(),
        name: 'CSS',
        url: 'https://www.w3schools.com/css/',
      },
      {
        id: uuidv1(),
        name: 'HTML',
        url: 'https://www.w3schools.com/html/',
      },
      {
        id: uuidv1(),
        name: 'Robohash',
        url: 'https://robohash.org/',
      },
    ],
  },
  {
    id: uuidv1(),
    img: 'movies.jpg',
    title: 'Climate For Today',
    info:
      'Mobile Application is written in Swift with APIs to fetch live weather data',
    info2: '',
    url: 'https://github.com/Aigerim-ai/ClimateforTodayiOS13',
    repo: 'https://github.com/Aigerim-ai/ClimateforTodayiOS13',
    technologies: [
      {
        id: uuidv1(),
        name: 'Swift',
        url: 'https://www.swift.com/',
      },
      {
        id: uuidv1(),
        name: 'UIKit',
        url: 'https://developer.apple.com/documentation/uikit/uitextfielddelegate',
      },
    
      {
        id: uuidv1(),
        name: 'Weather Map API',
        url: 'https://openweathermap.org/api',
      },
    ],
  },
  {
    id: uuidv1(),
    img: 'fylo.jpg',
    title: 'Face Recognition',
    info: 'Face Recognition Web Application allows to detect faces from any angle',
    info2: '',
    url: 'https://aigerim-ai.github.io/FaceRecognitionWebApp/',
    repo: 'https://github.com/Aigerim-ai/FaceRecognitionWebApp',
    technologies: [
       {
        id: uuidv1(),
        name: 'React',
        url: 'https://reactjs.org/',
      },
     
      {
        id: uuidv1(),
        name: 'CSS',
        url: 'https://www.w3schools.com/css/',
      },
      {
        id: uuidv1(),
        name: 'HTML',
        url: 'https://www.w3schools.com/html/',
      },
      {
        id: uuidv1(),
        name: 'Clarifai API',
        url: 'https://www.clarifai.com/models/ai-face-detection',
      },
    ],
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Please feel free to send me an email or connect with me on my social media links below.',
  btn: "Call To Action",
  email: 'aigerim.suleimenova@nu.edu.kz',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/aigerimsuleimenova/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/Aigerim-ai',
    },
  ],
};
