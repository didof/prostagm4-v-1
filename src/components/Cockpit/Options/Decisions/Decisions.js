import React from 'react'

import './Decisions.css'
import Economy from './Economy/Economy'
import Building from './Building/Building'
import Decree from './Economy/Decree/Decree'

const Decisions = props => {
    let activeComponent = ''
    let label = "Decisions"

    switch(props.show) {
        case 'economy':
        activeComponent = <Economy click={props.click} />
        break;
            case 'decree':
            activeComponent = <Decree dispositions={props.dispositions} />
            label = 'Decree'
            break;
        case 'building':
        activeComponent = <Building />
        break;
        default:
        activeComponent = "choose on the left"
    }


    return (
        <div className="container-decisions">
        <h3 className="label">{label}</h3>
        {activeComponent}
        </div>
    )
}

export default Decisions