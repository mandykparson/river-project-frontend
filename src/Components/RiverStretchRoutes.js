import React from 'react'
import RiverStretchCard from './RiverStretchCard'

export default function RiverStretchRoutes(props) {

    const renderCards = () => {
        if (props.filteredStretches.length === 0 )  {
            return props.riverStretches.map(stretch => {
                    return <RiverStretchCard 
                                key={stretch.id} 
                                stretch={stretch}
                                selection={props.selection}
                                setSelection={props.setSelection}
                                filteredStretches={props.filteredStretches}
                                setFilteredStretches={props.setFilteredStretches}/>
                })
        } else {
            return props.filteredStretches.map(stretch => {
                    return <RiverStretchCard 
                                key={stretch.id} 
                                stretch={stretch}
                                selection={props.selection}
                                setSelection={props.setSelection}
                                filteredStretches={props.filteredStretches}
                                setFilteredStretches={props.setFilteredStretches}/>
                })
        }
    }
    return (
        <div>
            <h2>Select From the Following:</h2>
            { renderCards() }
        </div>
    )
}
