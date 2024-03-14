import authOption from "@/app/auth/authOption";
import { IssueSchema } from "@/app/validationSchemas";
import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";



export async function GET(request: NextRequest) {
    try {
      const issues = await prisma.issue.findMany();
      return NextResponse.json(issues, { status: 200 });
    } catch (error) {
      console.error("Error fetching issues:", error);
      return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
  }

export async function POST (request: NextRequest){
  // const session = getServerSession(authOption)
  //  if(!session) return NextResponse.json({},{status:401})   
    const body = await request.json()
    const validation = IssueSchema.safeParse(body)
    if(!validation.success) return NextResponse.json(validation.error.format(),{status:404})
    const newIssue = await prisma.issue.create({
        data:{title:body.title, description:body.description}
    })
    return NextResponse.json(newIssue,{status:201})

}