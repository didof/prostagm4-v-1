import React from 'react'

import './Good.css'

// <i class="fas fa-drumstick-bite"></i>

const Good = props => {
    const res = props.res

    const alerts = []
    if(res.quant >= (res.max - (1.5 * res.quant))) {
        alerts.push('mild')
    }
    if(res.quant >= (res.max - res.quant)) {
        alerts.push('serious')
    }
    if(res.quant === res.max) {
        alerts.push('max')
    }

    return (
        <div className="card">
            <i className={res.icon}></i>
            <span className={alerts.join(' ')}>{res.quant} / {res.max}</span>
            <span>x{res.rate}</span>
        </div>
    )
}

export default Good