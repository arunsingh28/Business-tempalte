import React from 'react'
import '../../style/Topics.scss'
import { Card } from './card'
import process from '../../icons/process.svg'
import graphs from '../../icons/graph.svg'
import user from '../../icons/user.svg'
export const Topics = () => {
    return (
        <div className="_topic">
            <p>Most trending marketing <br />
                consulting topic
            </p>
            <div className="wrapper">
                <Card title="Business process" src={process} desc="Doubling my 9-5 salary serval times in my career is something i never thought would happen." />
                <Card title="Digital strategy" src={user} desc="Doubling my 9-5 salary serval times in my career is something i never thought would happen." argb={true} />
                <Card title="Media marketing" src={graphs} desc="Doubling my 9-5 salary serval times in my career is something i never thought would happen." />
            </div>
        </div>
    )
}
