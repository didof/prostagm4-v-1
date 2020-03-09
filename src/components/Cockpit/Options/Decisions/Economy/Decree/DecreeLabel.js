import React from 'react'

const DecreeLabel = props => {
    const style = {
        cursor: 'pointer'
    }
    return (
        <div onClick={() => props.click('decree')} style={style}>Decree</div>
    )
}

export default DecreeLabel