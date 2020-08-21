import React from 'react'
import ListItem from './listItem'

type PropsItemType = (String | JSX.Element | HTMLElement | {text:string, tag:string})
type PropsItemArrayType = PropsItemType[]

type PropsType = {
    items: PropsItemArrayType,
    order?: boolean,
    containerClass?: string
}

export default function List(props: PropsType) {
    const items: PropsItemArrayType = props.items;
    
    const itemGenerator  = (x: PropsItemType, index ) => {return(<ListItem key={index}>{x}</ListItem>)};
    const listItems = items.map(itemGenerator);
    
    return (
        <div className={props.containerClass}>
            {(props.order) ? <ol>{listItems}</ol> : <ul>{listItems}</ul>}
        </div>
    )
}