import authOption from "@/app/auth/authOption";
import { IssueSchema } from "@/app/validationSchemas";
import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest,{params}:{params:{id:string}}) {
    try {
        const issue = await prisma.issue.findUnique({
            where:{id:parseInt(params.id)}
        })
      return NextResponse.json(issue, { status: 200 });
    } catch (error) {
      console.error("Error fetching issues:", error);
      return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
  }

export async function PATCH(request: NextRequest,{params}:{params:{id:string}}){
    const session = getServerSession(authOption)
    if(!session) return NextResponse.json({},{status:401})
const body = await request.json()
const validation  = IssueSchema.safeParse(body)
if(!validation.success) return NextResponse.json(validation.error.errors,{status:400})

const issue = await prisma.issue.findUnique({
    where:{id:parseInt(params.id)}
})
if(!issue) return NextResponse.json({error:"Issue not Found!"},{status:400})

const updatedIssue = await prisma.issue.update({
    where:{id:issue.id},
    data:{
        title:body.title,
        description: body.description
    }
})
return NextResponse.json(updatedIssue)

}
export async function DELETE(request: NextRequest,{params}:{params:{id:string}}){
    const session = getServerSession(authOption)
    if(!session) return NextResponse.json({},{status:401})
const issue = await prisma.issue.findUnique({
    where:{id:parseInt(params.id)}
})
if(!issue) return NextResponse.json({error:"Issue not Found!"},{status:400})

await prisma.issue.delete({
    where:{id:issue.id},
})
return NextResponse.json({})

}