import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import {z} from 'zod'

const createIssueSchema = z.object({
    title: z.string().min(3).max(25),
    descripion : z.string().min(10)
})

export async function POST (request: NextRequest){
    const body = await request.json()
    const validation = createIssueSchema.safeParse(body)
    if(validation.success) return NextResponse.json('erro',{status:404})
    const newIssue = await prisma.issue.create({
        data:{title:body.title, description:body.descripion}
    })
    return NextResponse.json(newIssue,{status:201})

}