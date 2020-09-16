import React from 'react'

export default function ListItem({ children, ...props }) {
    
    if(typeof children ==="object" )
    return (
        <li >{React.createElement(children.tag,{}, children.text)}</li>
    )
    return (
        <li >{children}</li>
    )
}
