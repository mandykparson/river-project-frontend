import React from 'react'
import { useState } from 'react'

export default function StretchSelection(props) {

    const [count, setCount] = useState(0)
    const [length] = useState(props.selection.images.length)

    const handleClick = () => {
        props.setSelection(undefined)
    }

    const handleForward = () => {
        if (count < length - 1 ){
            setCount(count + 1)
            console.log(count)
        } else {
            setCount(0)
            console.log(count)
        }
    }
    
    const handleBackward = () => {
        if (count > 0 ){
            setCount(count - 1)
            console.log(count)
        } else {
            setCount(length - 1)
            console.log(count)
        }
    }

    const showCard = () => {
        return (
            <div>
                <img className="image-card" src={props.selection.images[count].source} alt={props.selection.name}/>
            </div>
        )
    }

    const renderPOI = () => {
        return props.selection.images[count].pois.map(poi => {
            return <li>{poi.information}</li>
        })
    }
    return (
        <div className="stretch-selection">
            <div className="selection-header">
                <h1>{props.selection.name}</h1>
                <div>
                    <button className="goback" onClick={handleClick}>Go Back</button>
                </div>
            </div>
            <div className="selection-sub-header">
                <img src={props.selection.img} alt={props.selection.name}/>
                <p>
                    {props.selection.information}
                </p>
            </div>
            <div className="selection-main">
                <button className="dir-btn" onClick={ handleBackward }> &#x21E6; </button>
                { showCard() }
                <button className="dir-btn" onClick={ handleForward }> &#x21E8; </button>
            </div>
            <div className="selection-sub-main">
                {props.selection.images[count].pois.length > 0 ?
                    <div>
                        <h3>Points of Interest</h3>
                        <ul>
                            { renderPOI() }
                        </ul> 
                    </div> : ""
                }
                
            </div>
        </div>
    )
}
