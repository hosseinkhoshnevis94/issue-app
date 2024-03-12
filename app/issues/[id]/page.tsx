import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import Spinner from "@/app/components/Spinner";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import React from "react";

const IssueDetailsPage = async ({ params }: { params: { id: string } }) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });
  
  if (!issue) return notFound();

  return(
    <div className="container mx-auto mt-10">
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div>
        <h2 className="text-lg font-bold mb-2">Title: {issue.title} - <IssueStatusBadge status={issue.status} /> </h2>
        <p className="flex gap-5 font-normal text-sm">
           <span> Created at: {new Date(issue.createdAt).toDateString()}</span>
           <span>Updated at: {new Date(issue.updatedAt).toDateString()}</span>
        </p>

        <p className="mt-10">Description: {issue.description}</p>
      </div>
    </div>
  </div>

  )
  }
export default IssueDetailsPage
