import "server-only"
import { z } from "zod"

const serverSchema = z.object({
  DATABASE_URL: z.string().url(),
  BETTER_AUTH_SECRET: z.string().min(32),
  BETTER_AUTH_URL: z.string().url(),
})

const clientSchema = z.object({
  NEXT_PUBLIC_APP_URL: z.string().url().optional(),
})

const parsed = serverSchema.safeParse(process.env)

if (!parsed.success) {
  console.error("Invalid server environment variables:", parsed.error.flatten().fieldErrors)
  throw new Error("Invalid server environment variables")
}

const clientParsed = clientSchema.safeParse(process.env)

if (!clientParsed.success) {
  console.error("Invalid client environment variables:", clientParsed.error.flatten().fieldErrors)
  throw new Error("Invalid client environment variables")
}

export const env = {
  ...parsed.data,
  ...clientParsed.data,
}
