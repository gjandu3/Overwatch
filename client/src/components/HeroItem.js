import React from 'react'

export default function HeroItem({ hero: {name, image, description }}) {
    return (
        <div className="col-sm">
            <div className="card text-white bg-warning mb-3">
                <img src={image}></img>
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

