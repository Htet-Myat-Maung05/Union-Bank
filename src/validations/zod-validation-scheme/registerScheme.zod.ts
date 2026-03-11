import { PASSWORD_PATTERN } from "@/constants/RegexRules";
import z from "zod";

export const getRegisterSchema = () =>
    z.strictObject({
        username: z.string({ error: 'Please input username' }),
        email: z.string({ error: 'Please input your email' }).pipe(z.email('Wrong Email Address')),
        password: z.string({ error: 'Please input your password' }).min(8, 'Password must be 8 charaters at least').regex(PASSWORD_PATTERN, 'undefined error ...!')
    })

export type TRegisterSchema = z.infer<ReturnType<typeof getRegisterSchema>>;