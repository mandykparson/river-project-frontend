import React from 'react'

export default function RiverStretchCard(props) {

    const ifPermit = () => {
        if (props.stretch.permit) {
            return <a href={props.stretch.permit_link}>Permit Required</a>
        }
    }

    const handleClick = (e) => {
        props.setSelection(props.stretch)
    }

    return (
        <div className="river-stretch-card" onClick={ handleClick }>
            <div className="image-container">
                <img src={props.stretch.img} alt={props.stretch.name}/>
            </div>
            <div className="text-container">
                <h2>{props.stretch.name}</h2>
                <h3>{props.stretch.river} River</h3>
                { ifPermit() }
            </div>
        </div>
    )
}
