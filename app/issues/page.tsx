import prisma from '@/prisma/client'
import Link from 'next/link'
import React from 'react'
import IssueStatusBadge from '../components/IssueStatusBadge'

const IssuesPage = async () => {
  const issues = await prisma.issue.findMany()
  
  return (
    <div>
      <button className='btn btn-neutral'> <Link href={'./issues/new'}>New</Link></button>
      <div className='mt-10'>
        <table className="table table-zebra">
          <thead>
            <tr className='text-lg'>
              <th>Title</th>
              <th>Created at</th>
              <th>updated at</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
          { issues.map((issue:any,index:number)=> 
            <tr key={issue.id}>
              <td><Link className='link link-primary font-bold hover:text-pink-600' href={`/issues/${issue.id}`}>{issue.title}</Link></td>
              <td>{issue.createdAt.toDateString()}</td>
              <td>{issue.updatedAt.toDateString()}</td>
              <td>{issue.description}</td>
              <td><IssueStatusBadge status={issue.status} /></td>
            </tr>
)}
          </tbody>
         </table>
        </div>
    </div>
  )
}

export const dynamic = 'force-dynamic';
export default IssuesPage