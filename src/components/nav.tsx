import React, { Dispatch, useEffect, useMemo, useState } from "react"
import { Link } from "gatsby"
import { useLanguageContext } from '../hooks/useLanguageContext'
import './nav.scss'
import navL from '../data/nav.json'
import { navigate } from '@reach/router';

type propTypes = {
    type: string,
    title?: {
        title: string,
        setTitle: Dispatch<any>
    }
}

const Nav = (prop: propTypes) => {
    const type: string = prop.type;
    const langContext = useLanguageContext()
    const language: string = langContext.lang;
    let currSite = null;
    let links;
    let [title, setTitle] = useState('');

    if (type == "drag") {
        const onDrop = (event) => {
            event.preventDefault();
            if (event.target.classList.contains('dropzone')) {
                event.target.style = '';
                if (currSite != null && currSite.classList.contains('drag')) {
                    currSite.classList.remove('drag')
                    currSite.draggable = false;
                }
                currSite = event.target;
                currSite.draggable = true;
                currSite.classList.add('drag');
                let t = currSite.firstChild.innerText;
                setTitle(t)
                let split = prop.title.title.split('-')
                prop.title.setTitle(t.concat('-', (!split[1]) ? split[0] : split[1]))
                navigate(currSite.children[0].pathname)
            }
            event.dataTransfer.clearData();
        }

        const onDragOver = (event) => {
            event.preventDefault();
        }

        const onDrag = (event) => {

        }

        const onDragStart = (event) => {

        }

        const onDragEnd = (event) => {

        }

        const onDragEnter = (event) => {
            if (event.target.classList.contains("dropzone")) {
                event.target.style = 'background-color:#a0a0a077;';
            }
        }

        const onDragLeave = (event) => {
            if (event.target.classList.contains("dropzone")) {
                event.target.style = '';
            }
        }

        const onClick = (event) => { event.preventDefault() }

        const events = {
            onDrop: onDrop,
            onDrag: onDrag,
            onDragStart: onDragStart,
            onDragEnd: onDragEnd,
            onDragEnter: onDragEnter,
            onDragLeave: onDragLeave,
            onDragOver: onDragOver
        }

        links = useMemo(() => {
            return < ul className="nav nav-dragdrop" >
                {navL.map(elem => {
                    let path = elem.link == window.location.pathname
                    if (path) {
                        setTitle(elem.name[language])
                    }
                    let is = elem.name[language] == title;
                    return <li key={elem.key} {...events}
                        draggable={(is) ? 'true' : 'false'}
                        className={"dropzone ".concat((is) ? 'drag' : '')}>
                        <Link to={elem.link} onClick={onClick}  >{elem.name[language]}</Link>
                    </li>
                })}
                {(type == 'drag') ? <li className="drag" draggable="true" >{title}</li> : ''}
            </ul>
        }, [title, language, prop.title.title])

    } else {

        const onClick = (event) => {
            event.preventDefault()
            const target = event.currentTarget;
            setTitle(target.innerText)
            let split = prop.title.title.split('-')
            prop.title.setTitle(target.innerText.concat('-', (!split[1]) ? split[0] : split[1]))
            navigate(target.pathname);
        }

        links = useMemo(() => {
            return <ul className="nav nav-list">
                {navL.map(elem => {
                    let path = elem.link == window.location.pathname
                    if (path) {
                        setTitle(elem.name[language])
                    }

                    return <li key={elem.key}
                        className={(title === elem.name[language].toUpperCase() || path) ? 'active' : ''}>
                        <Link onClick={onClick} to={elem.link}>{elem.name[language]}</Link>
                    </li>
                })}
            </ul>
        }, [title, language, prop.title.title])
    }
    return (
        <nav >
            {links}
        </nav>
    )
}

export default Nav
