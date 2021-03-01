import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faJs,
  faCss3Alt,
  faHtml5,
  faSass,
  faReact,
  faGithub,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons"

import "./skills.scss"

const gatsbySVG = {
  attr: {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    "aria-hidden": "true",
    focusable: "false",
    width: "1em",
    height: "1em",
    style: {
      msTransform: "rotate(360deg)",
      WebkitTransform: "rotate(360deg)",
      transform: "rotate(360deg)",
    },
    preserveAspectRatio: "xMidYMid meet",
    viewBox: "0 0 24 24",
  },
  cont: {
    path: {
      d:
        "M12.001.007C5.326.007.007 5.326.007 12S5.326 23.995 12 23.995s11.994-5.319 11.994-11.994S18.676.007 12.001.007zM2.614 12.105l9.283 9.283c-5.111 0-9.283-4.172-9.283-9.283zm11.473 9.074L2.823 9.915C3.76 5.743 7.516 2.614 12 2.614a9.476 9.476 0 0 1 7.614 3.86L18.259 7.62a7.657 7.657 0 0 0-6.362-3.337A7.555 7.555 0 0 0 4.7 9.393l9.804 9.805c2.4-.835 4.276-2.92 4.798-5.424h-4.068v-1.773h6.154c0 4.485-3.129 8.24-7.301 9.178z",
      fill: "#663399",
    },
  },
}

type propsType = {
  className?: string
  skills?: Array<string>
  notSkills?: Array<string>
}

const skillsList = {
  js: faJs,
  reactjs: faReact,
  scss: faSass,
  css: faCss3Alt,
  html: faHtml5,
  git: faGitAlt,
  github: faGithub,
  gatsby: gatsbySVG,
  csharp: "csharpIMG",
  sql: "sqlIMG",
}

const notAwesome = ["gatsby", "csharp", "sql"]

const Skills = (props: propsType) => {
  const newSkills = props.skills ? props.skills : Object.keys(skillsList)
  const skills = !props.notSkills
    ? newSkills
    : newSkills.filter(element => !props.notSkills.includes(element))
  const list = skills.map(key => {
    if (notAwesome.indexOf(key) != -1) {
      if (typeof skillsList[key] == "string") {
        let title = key.replace(/(IMG)$/, "")
        return (
          <span key={key} className={key.concat(" skill-style image")}>
            <img
              src={"/icons/".concat(title, ".png")}
              title={title}
              alt={title}
            ></img>
          </span>
        )
      }
      return (
        <span key={key} className={key.concat(" skill-style ")}>
          <svg {...skillsList[key]["attr"]}>
            <path {...skillsList[key].cont["path"]}></path>
          </svg>
        </span>
      )
    } else
      return (
        <span key={key} className={key.concat(" skill-style ")}>
          <FontAwesomeIcon icon={skillsList[key]} />
        </span>
      )
  })

  return <div className={"skills ".concat(props.className || "")}>{list}</div>
}

export default Skills
