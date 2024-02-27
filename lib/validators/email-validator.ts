import { z } from "zod";

export const AuthCredentialsValidator = z.object({
  email: z.string().email({ message: "Invalid email format" }),
})

export type TEmailValidator = z.infer<typeof AuthCredentialsValidator>
