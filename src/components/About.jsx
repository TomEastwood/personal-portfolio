import "../styles/about.css";
import check from "../assets/check.svg";
import heart from "../assets/heart.svg";

export default function About() {

    return (
        <section className="about">
            <div className="content">
                <h2>About my Skills</h2>
                <img className="about-icon" src={check} alt="check" />
                <p>Hi, I'm Tom, a Front End Web Developer and Game Artist based in the UK. Ive spent over 10 years on my artist and design skills
                graduating with honours in Game Art and Design. I've recently dived into the world of web development using my skills in art and
                design to focus on Front End Development. I'm currently looking for a role in Front End Development to further my skills and
                knowledge in the field. I'm always looking to improve my skills and knowledge in any way I can. I started at Boolean in August of
                2023 and have been learning the key fundamentals that make up a front end developer. I've learnt HTML, CSS, JavaScript and React
                and have been using these skills to create my own projects.
                </p>
            </div>
            <div className="personal">
                <h2>About Me</h2>
                <img className="about-icon" src={heart} alt="heart" />
                <p>Creativity and the ability to push myself are some of the key aspects of what makes me operate, I will always try my best to
                    accomplish the task given to me and will always try to improve my skills and knowledge in any way I can. I'm a very creative
                    person and love to create art and design in my spare time. I'm a very friendly and approachable person and thrive in a
                    team environment. Outside of work I'm extremely passionate about everything tech, whether it be the latest gadgets or the
                    latest games, I'm always looking to learn more about the tech world. I'm also a huge fan of music and motorsports. 
                </p>
            </div>
        </section>
    )
}