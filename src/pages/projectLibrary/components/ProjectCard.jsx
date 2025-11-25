import React from 'react'

export default function ProjectCard({ title, src }) {
    return (
        <div>
            <h1>{title}</h1>
            <img src={src} />
        </div>
    )
}
