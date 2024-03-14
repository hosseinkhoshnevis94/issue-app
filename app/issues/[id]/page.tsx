
import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import prisma from "@/prisma/client";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MdEdit } from "react-icons/md";
import React from "react";
import DeleteIssueButton from "./DeleteIssueButton";
import { getServerSession } from "next-auth";
import authOption from "@/app/auth/authOption";

const IssueDetailsPage = async ({ params }: { params: { id: string } }) => {
  const session = await getServerSession(authOption)
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });
  console.log(session);
  
  if (!issue) return notFound();

  return(
    <div className="container mx-auto mt-10">
    <div className="bg-white shadow-md rounded px-8 flex flex-col justify-between gap-4 py-10 ">
        <div className="flex justify-between items-center pb-2 border-b-2">
        <h2 className="text-lg font-bold mb-2">Title: {issue.title}  <IssueStatusBadge status={issue.status} /> </h2>
        <div className="flex gap-2">

            <>
             <button className='btn btn-outline btn-sm '><MdEdit /> <Link href={`./${params.id}/edit`}>edit</Link></button>
             <DeleteIssueButton issueId={params.id}></DeleteIssueButton>
            </>
             
          
        </div>
        </div>
        <p className="flex gap-5 font-normal text-xs">
           <span> Created at: {new Date(issue.createdAt).toDateString()}</span>
           <span>Updated at: {new Date(issue.updatedAt).toDateString()}</span>
        </p>
        <p className="mt-4">Description: {issue.description}</p>
    </div>
  </div>

  )
  }
export default IssueDetailsPage
