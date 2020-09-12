import React from "react"

import './social.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Social() {

    return (
        <div className="social-link">
            <a href="https://www.linkedin.com/in/luki-m/" title="linkedin" target="_blank"
                rel="noreferrer noopener"><FontAwesomeIcon icon={faLinkedin} /> <span>linkedin</span></a>
            <a href="https://github.com/magik9907" title="github" target="_blank"
                rel="noreferrer noopener"><FontAwesomeIcon icon={faGithubSquare} /><span>github</span></a>
        </div>
    )
}

export default Social
