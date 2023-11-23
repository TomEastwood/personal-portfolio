import html from "../assets/html.svg";
import css from "../assets/css.svg";
import js from "../assets/js.svg";
import react from "../assets/react.svg";
import git from "../assets/git.svg";

const skillsData = [
    {   
        id: "html",
        title: "HTML",
        icon: html,
        logo: "https://cdn-icons-png.flaticon.com/256/174/174854.png",
        text: "HTML has been one of the staple markup languages used throughout my projects and work at Boolean from the very start of the course, and I have a good understanding of the language and its uses.",

    },

    {   
        id: "css",
        title: "CSS",
        icon: css,
        text: "CSS is another staple of my projects and work at Boolean, CSS is my personal favourite language to use coming from a design background and allows me to, relatively easily, capture the look and feel of a website.",
        logo: "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png"
    },

    {   
        id: "js",
        title: "JavaScript",
        icon: js,
        text: "Javascript has been one of the most challenging languages to learn but has felt extremely rewarding to learn and use. Learning to implement the different syntax and uses of functions inside my projects has allowed me to make my projects so much more functional.",
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
    },

    {   
        id: "react",
        title: "React",
        icon: react,
        text: "React is a library that I have been using for the past 2 months and has been a great way to learn how to use components and props to create a more modular and reusable codebase. I have also been using React Router to create a more dynamic and interactive experience for the user.",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png"
    },
    
    {   
        id: "git",
        title: "Git",
        icon: git,
        text: "Git is a tool that I have been using throughout my time at Boolean and has been a great way to keep track of my projects and work. I have been using Git to create branches and merge them into my main branch to keep my codebase clean and organised.",
        logo: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
    },
]

export default skillsData;