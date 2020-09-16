import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJs, faCss3Alt, faHtml5, faSass, faReact } from '@fortawesome/free-brands-svg-icons'

type propsType = {
    skills?: Array<string>
}

const Skills = (props: propsType) => {
    return (
    <>
        <span className="js"><FontAwesomeIcon icon={faJs} /></span>
        <span className="reactjs"><FontAwesomeIcon icon={faReact} /></span>
        <span className="scss"><FontAwesomeIcon icon={faSass} /></span>
        <span className="css"><FontAwesomeIcon icon={faCss3Alt} /></span>
        <span className="html"><FontAwesomeIcon icon={faHtml5} /></span>
    </>
    )
}

export default Skills