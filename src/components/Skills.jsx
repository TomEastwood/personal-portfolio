import "../styles/skills.css";
import skillsData from "./skillsData";
import { useState } from "react";

const initialRenderedSkills = {};

skillsData.forEach((skill) => initialRenderedSkills[skill.id] = false);


export default function Skills() {
    
    const [renderSkills, setRenderSkills] = useState(initialRenderedSkills);
    
    console.log(renderSkills)
    const handleSkillClick = (skill) => {
        setRenderSkills({...initialRenderedSkills, [skill.id]: !renderSkills[skill.id]});
        
    }

    return (
        <section className="skills">
            <div className="content">
                <h2>My Skills</h2>
                <div className="icons">
                    {skillsData.map((skill) => {
                        return <img className="skill-logo" src={skill.logo} alt={skill.title} onClick = {() => handleSkillClick(skill)} />
                    })}
                    
                </div>
            </div>
                {skillsData.map((skill, index) => {
                    if (!renderSkills[skill.id]) return <></>;
                    return  (
                        <div key={index} className="details">
                            <h3 className = "title">{skill.title}</h3>
                            <img className="icon" src={skill.icon} alt={skill.title} />
                            <p className = "text">{skill.text}</p>
                        </div>
                    );
                })}
        </section>
    )
}