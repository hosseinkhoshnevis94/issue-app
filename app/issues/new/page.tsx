"use client";
import dynamic from "next/dynamic";
import { Skeleton } from "@/app/components";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const IssueForm = dynamic(
  ()=>import('@/app/issues/_components/IssueForm'),
  {
    ssr:false,
    loading:()=> <Skeleton/>
  }
)

const NewIssuePage = () => {
  const { data: session, status } = useSession()
  const router = useRouter()
  
  if (!session) return router.push('/api/auth/signin')

  

  return (
    <div className="flex flex-col justify-center items-center mt-2">
     <IssueForm></IssueForm>
    </div>
  );
};

export default NewIssuePage;
