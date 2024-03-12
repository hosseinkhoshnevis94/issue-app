
import {z} from 'zod'
export const createIssueSchema = z.object({
    title: z.string().min(3,'At least 3 letters').max(25),
    description : z.string().min(1,'Description is rquired!')
})

