import React from 'react'

const Decree = props => {
    return (
        <div>
            <label>Daily ration per person:</label>
            <input 
                type="range" 
                min="0" 
                max="5" 
                value={props.dispositions.food.rations}
            />    
        </div>
    )
}

export default Decree