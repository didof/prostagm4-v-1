import React from 'react'

import './Option.css'

const Option = props => {
    return (
        <div className="option" onClick={props.click}>
            <i className={props.opt.icon}></i>
        </div>
    )
}

export default Option