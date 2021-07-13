import React from 'react'
import RiverStretchCard from './RiverStretchCard'

export default function RiverStretchRoutes(props) {
    const renderCards = () => {
        return props.filteredStretches.map(stretch => {
            return <RiverStretchCard key={stretch.id} stretch={stretch}/>
        })
    }
    return (
        <div>
            <h2>River Stretch Cards</h2>
            { renderCards() }
        </div>
    )
}
