"use client";
import dynamic from "next/dynamic";
import { Skeleton } from "@/app/components";

const IssueForm = dynamic(
  ()=>import('@/app/issues/_components/IssueForm'),
  {
    ssr:false,
    loading:()=> <Skeleton/>
  }
)

const NewIssuePage = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-2">
     <IssueForm></IssueForm>
    </div>
  );
};

export default NewIssuePage;
