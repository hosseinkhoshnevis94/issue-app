import prisma from '@/prisma/client'
import Link from 'next/link'
import React, { useState } from 'react'
import IssueStatusBadge from '../components/IssueStatusBadge'

const IssuesPage = async () => {
  const issues = await prisma.issue.findMany()
  console.log(issues);
  
  return (
    <div>
      <button className='btn btn-neutral'> <Link href={'./issues/new'}>New</Link></button>
      <div className='mt-10'>
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>Title</th>
              <th>Created at</th>
              <th>updated at</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
          { issues.map((issue,index)=> 
            <tr key={issue.id}>
              <td><Link className='link link-primary font-bold hover:text-pink-600' href={`/issues/${issue.id}`}>{issue.title}</Link></td>
              <td>{issue.description}</td>
              <td>{issue.createdAt.toDateString()}</td>
              <td>{issue.updatedAt.toDateString()}</td>
              <td><IssueStatusBadge status={issue.status} /></td>
            </tr>
)}
          </tbody>
         </table>
        </div>
    </div>
  )
}

export default IssuesPage