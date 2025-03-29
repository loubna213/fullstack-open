import React from 'react'

const Statistics  = ({ good, neutral, bad, all}) => {
    return (
        <div>
            <h2>Statistics:</h2>
            <p>good : {good} </p>
            <p>neutral : {neutral} </p>
            <p>bad : {bad} </p>
            <hr/>
            <p>all : {all} </p>
            <p>averag : {all == 0 ? 0 : ((good * 1) + (neutral * 0) + (bad * -1)) / all} </p>
            <p>positive : {all == 0 ? 0 : good * 100 / all} %</p>
        </div>
    )
}

export default Statistics 