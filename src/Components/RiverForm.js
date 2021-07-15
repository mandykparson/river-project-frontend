import React from 'react'

export default function RiverForm(props) {

    const handleSubmit = (e) => {
        e.preventDefault()
        const filteredStretches = props.riverStretches.filter(stretch => {
            return stretch.river === props.location
        })
        props.setFilteredStretches(filteredStretches)
        console.log(props.filteredStretches)
    }
    return (
        <div className="river-form">
            <form onSubmit={ handleSubmit }>
                <label for="miles"> Mileage: </label>
                <select
                    name="miles"
                    value={props.length}
                    onChange={(event) => props.setLength(event.target.value)}
                >
                    <option value="20">Less than 20</option>
                    <option value="50">Between 20-50</option>
                    <option value="100">Between 50-100</option>
                    <option value="200">More than 100</option>
                </select>

                <label for="river"> River: </label>
                <select
                    name="river"
                    value={props.location}
                    onChange={(event) => props.setLocation(event.target.value)}
                >
                    <option value="Colorado">Colorado</option>
                    <option value="San Juan">San Juan</option>
                    <option value="Salmon">Salmon</option>
                    <option value="Arkansas">Arkansas</option>
                </select>

                <label for="classRating"> Class: </label>
                <select
                    name="classRating"
                    value={props.classRating}
                    onChange={(event) => props.setClassRating(event.target.value)}
                >
                    <option value="1">I</option>
                    <option value="2">II</option>
                    <option value="3">III</option>
                    <option value="4">IV</option>
                    <option value="5">V</option>
                </select>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}
