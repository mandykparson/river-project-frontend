import React from 'react'

export default function RiverStretchCard({stretch}) {

    const ifPermit = () => {
        if (stretch.permit) {
            return <a href={stretch.permit_link}>Permit Link</a>
        }
    }
    return (
        <div className="river-stretch-card">
            <h2>{stretch.name}</h2>
            <h3>{stretch.river}</h3>
            <h3>{stretch.put_in}</h3>
            { ifPermit() }
        </div>
    )
}
