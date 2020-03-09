import React from 'react'

import DecreeLabel from './Decree/DecreeLabel'
import Report from './Report/ReportLabel'
import Trade from './Trade/TradeLabel'

import './Economy.css'

const Economy = props => {
    return (
        <div className="container-economy">
            <div className="item">
                <DecreeLabel click={props.click}/>
            </div>
            <div className="item">
                <Report />
            </div>
            <div className="item">
                <Trade />
            </div>
        </div>
            
    )
}

export default Economy