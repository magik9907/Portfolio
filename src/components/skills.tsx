import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJs, faCss3Alt, faHtml5, faSass, faReact, faGithub, faGitAlt } from '@fortawesome/free-brands-svg-icons'

import './skills.scss'

type propsType = {
    skills?: Array<string>,
    notSkills?: Array<string>,
}

const skillsList = {
    js: faJs,
    reactjs: faReact,
    scss: faSass,
    css: faCss3Alt,
    html: faHtml5,
    git: faGitAlt,
    github: faGithub,
}

const Skills = (props: propsType) => {

    const newSkills = (props.skills) ? props.skills : Object.keys(skillsList);
    const skills = (!props.notSkills) ? newSkills : newSkills.filter(element => !props.notSkills.includes(element))
    const list = skills.map(key => (<span key={key} className={key}><FontAwesomeIcon icon={skillsList[key]} /></span>))

    return (
        <>
            {list}
        </>
    )
}

export default Skills