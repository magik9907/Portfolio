import React from 'react'

export default function ListItem({ children, ...props }) {
    
    if(typeof children ==="object")
    return (
        <li >{document.createElement(children.tag).innerHTML = children.text}</li>
    )
    return (
        <li >{children}</li>
    )
}
