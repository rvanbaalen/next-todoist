import NextAuth from "next-auth"
import TodoistProvider from "next-auth/providers/todoist";

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        TodoistProvider({
            clientId: process.env.TODOIST_CLIENT_ID || 'UNDEFINED',
            clientSecret: process.env.TODOIST_CLIENT_SECRET || 'UNDEFINED'
        }),
    ],
    secret: process.env.SECRET || 'TopSecret',
}

export default NextAuth(authOptions)
