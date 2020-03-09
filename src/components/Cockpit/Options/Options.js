import React from 'react'

import './Options.css'

import Option from './Option/Option'

// 

const Options = props => {
    const optionsList = props.mgmt.filter(opt => !opt.disable).map((opt, index) => {
        return (
            <Option
                key={index}
                opt={opt}
                click={() => props.click(opt.name)}
            />
        )
    })

    return (
        <div className="container-options">
        <h3 className="label"><i className="fas fa-crown"></i></h3>
        {optionsList}
        </div>
    )
}

export default Options