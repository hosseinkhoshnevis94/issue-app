import { createIssueSchema } from "@/app/validationSchemas";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";



export async function GET(request:NextRequest){
    return NextResponse.json('hello')
}

export async function POST (request: NextRequest){
    const body = await request.json()
    const validation = createIssueSchema.safeParse(body)
    if(!validation.success) return NextResponse.json(validation.error.format(),{status:404})
    const newIssue = await prisma.issue.create({
        data:{title:body.title, description:body.description}
    })
    return NextResponse.json(newIssue,{status:201})

}