import React from 'react'
import StatisticLine from './StatisticLine '

const Statistics  = ({ good, neutral, bad, all}) => {

    const positive = all == 0 ? 0 : good * 100 / all
    const average = all == 0 ? 0 : ((good * 1) + (neutral * 0) + (bad * -1)) / all

    return (
        <table>
            <tbody>
                <StatisticLine text="good" value={good}/>
                <StatisticLine text="neutral" value={neutral}/>
                <StatisticLine text="bad" value={bad}/>
                <StatisticLine text="all" value={all}/>
                <StatisticLine text="average" value={average}/>
                <StatisticLine text="positive" value={positive + "%"}/>
            </tbody>
        </table>
    )
}

export default Statistics 