import React, { Dispatch, useEffect, useLayoutEffect, useMemo } from "react"
import { Link, navigate } from "gatsby"
import { useLanguageContext } from "../hooks/useLanguageContext"
import "./nav.scss"
import navL from "../data/nav.json"
import { useLocation } from "@reach/router"

type propTypes = {
  type: string
  title?: {
    title: string
    setTitle: Dispatch<any>
  }
}

const Nav = (prop: propTypes) => {
  const type: string = prop.type
  const langContext = useLanguageContext()
  const language: string = langContext.lang
  let currSite = null
  let links = <></>
  let title = ""
  const location = useLocation()

  useEffect(() => {
    title.toLowerCase()
    prop.title.setTitle(title.charAt(0).toUpperCase() + title.slice(1) + " - ")
  }, [language, title])

  if (type == "drag") {
    const onDrop = event => {
      console.log(event)
      event.preventDefault()
    if (event.currentTarget.classList.contains("dropzone")) {
      event.currentTarget.style = ""
        if (currSite != null && currSite.classList.contains("drag")) {
          currSite.classList.remove("drag")
          currSite.draggable = false
        }
      currSite = event.currentTarget
        currSite.draggable = true
        currSite.classList.add("drag")
        title = currSite.innerText.toLowerCase()
        prop.title.setTitle(
          title.charAt(0).toUpperCase() + title.slice(1) + " - "
        )
        navigate(currSite.children[0].pathname)
      }
    }

    const onDragOver = event => {
      event.preventDefault()
    }

    const onDrag = event => {}

    const onDragStart = event => {}

    const onDragEnd = event => {}

    const onDragEnter = event => {
    if (event.currentTarget.classList.contains("dropzone")) {
      event.currentTarget.style = "background-color:#a0a0a077;"
      }
    }

    const onDragLeave = event => {
    if (event.currentTarget.classList.contains("dropzone")) {
      event.currentTarget.style = ""
      }
    }

    const onClick = event => {
      event.preventDefault()
    }

    const events = {
      onDrop: onDrop,
      onDrag: onDrag,
      onDragStart: onDragStart,
      onDragEnd: onDragEnd,
      onDragEnter: onDragEnter,
      onDragLeave: onDragLeave,
      onDragOver: onDragOver,
    }

    links = useMemo(() => {
      return (
        <ul className="nav nav-dragdrop">
          {navL.map(elem => {
            let pathname = location.pathname
            let isCorrectPath = elem.link === pathname

            if (isCorrectPath) {
              title = elem.name[language]
            }
            let isDraggable = elem.name[language] == title
            return (
              <li
                key={elem.key}
                {...events}
                draggable={isDraggable ? "true" : "false"}
                className={"dropzone ".concat(isDraggable ? "drag" : "")}
              >
                <Link to={elem.link} onClick={onClick}>
                  {elem.name[language]}
                </Link>
              </li>
            )
          })}
          {type === "drag" ? (
            <li className="drag" draggable="true">
              <h2>{title}</h2>
            </li>
          ) : (
            ""
          )}
        </ul>
      )
    }, [location, language])
  } else {
    const onClick = event => {
      event.preventDefault()
      const target = event.currentTarget
      title = target.innerText
      navigate(target.pathname)
    }

    links = useMemo(() => {
      return (
        <ul className="nav nav-list">
          {navL.map(elem => {
            let pathname = location.pathname
            let isCorrectPath = elem.link === pathname

            if (isCorrectPath) {
              title = elem.name[language]
            }

            return (
              <li key={elem.key} className={isCorrectPath ? "active" : ""}>
                <Link onClick={onClick} to={elem.link}>
                  {elem.name[language]}
                </Link>
              </li>
            )
          })}
        </ul>
      )
    }, [language, location])
  }
  return <nav>{links}</nav>
}

export default Nav
