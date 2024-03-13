import React from "react";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import { Skeleton } from "@/app/components";
const IssueForm = dynamic(
    ()=>import('@/app/issues/_components/IssueForm'),
    {
      ssr:false,
      loading:()=> <Skeleton/>
    }
  )
interface Props {
  params: { id: string };
}

const EditIssuePage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if(!issue) return notFound()

  return (
    <div className="flex flex-col justify-center items-center mt-2">
      <IssueForm issue={issue}></IssueForm>
    </div>
  );
};

export default EditIssuePage;
