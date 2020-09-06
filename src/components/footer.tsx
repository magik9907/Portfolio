import React from "react"
import './footer.scss'

export default function Footer() {

    const date = new Date();
    return (
        <footer >
            <p>&copy; {date.getFullYear()} Łukasz Milewski</p>
        </footer >
    );
}

