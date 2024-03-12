import React from 'react'
import {Status} from '@prisma/client'


const statusMap : Record<Status,{label:string,color:string}> ={
    OPEN : {label:"open",color:'badge-error '},
    CLOSED:{label:"closed",color:'badge-success '},
    IN_PROGRESS:{label:"in progress",color:'badge-info'}
}
const IssueStatusBadge = ({status}:{status:Status}) => {
  return (
    <div className={`badge gap-2 ${statusMap[status].color}`}>{statusMap[status].label}</div>
  )
}

export default IssueStatusBadge