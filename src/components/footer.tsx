import React from "react"

export default function Footer() {

    const date = new Date();
    return (
        <footer >
            <p>&copy; {date.getFullYear()} Łukasz Milewski</p>
        </footer >
    );
}

