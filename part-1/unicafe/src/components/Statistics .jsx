import React from 'react'

const Statistics  = ({ good, neutral, bad, all}) => {

    const positive = all == 0 ? 0 : good * 100 / all
    const average = all == 0 ? 0 : ((good * 1) + (neutral * 0) + (bad * -1)) / all

    return (
        <div>
            <p>good : {good} </p>
            <p>neutral : {neutral} </p>
            <p>bad : {bad} </p>
            <hr/>
            <p>all : {all} </p>
            <p>averag : { average } </p>
            <p>positive : { positive } %</p>
        </div>
    )
}

export default Statistics 