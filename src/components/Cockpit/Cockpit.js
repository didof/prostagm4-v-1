import React from 'react'

import './Cockpit.css'

import Warehouse from './Warehouse/Warehouse'
import Options from './Options/Options'
import Decisions from './Options/Decisions/Decisions'

const Cockpit = props => {
    return (
        <div className="container-cockpit">
            <Warehouse mgmt={props.mgmt} />
            <Options mgmt={props.mgmt.options} click={props.action}/>
            <Decisions show={props.mgmt.activeOption} click={props.action} dispositions={props.mgmt.dispositions}/>
        </div>
    )
}

export default Cockpit