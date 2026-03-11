import { PASSWORD_PATTERN } from "@/constants/RegexRules";
import z from "zod";

export const getLoginSchema = () =>
    z.strictObject({
        email: z.string({ error: 'Please input your email' }).pipe(z.email('Wrong Email Address')),
        password: z.string({ error: 'Please input your password' }).min(8, 'Password must be 8 charaters at least').regex(PASSWORD_PATTERN, 'undefined error ...!')
    })

export type TLoginSchema = z.infer<ReturnType<typeof getLoginSchema>>;