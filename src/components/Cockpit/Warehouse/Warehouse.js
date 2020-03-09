import React from 'react'

import './Warehouse.css'

import Good from './Good/Good'

const Warehouse = props => {
    // create the list of Goods
    const goodList = props.mgmt.resources.map((good, index) => {
        return (
            <Good 
                key={index}
                res={good}
            />
        )
    })
    
    return (
        <div className="container">
        <h3 className="label">Warehouse</h3>
        {goodList}
        </div>
    )
}

export default Warehouse