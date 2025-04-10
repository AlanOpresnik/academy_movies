import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"


const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                email: { label: 'Email', type: 'text', placeholder: 'correo@correo.com' },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const { username, email, password } = credentials

                const user = await fakeLogin(email, password)
                if (!user) {
                    throw new Error("Invalid credentials")
                }
                return user
            }
        })

    ],
    pages: {
        signIn: '/login',
        signOut: '/logout',
    },
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id
                token.email = user.email
            }
            return token
        },
        async session({ session, token }) {
            if (token) {
                session.user.id = token.id
                session.user.email = token.email
            }
            return session
        },
        authorized({ req, token }) {
            if (token) return true // If there is a token, the user is authenticated
        },
        secret: process.env.NEXTAUTH_SECRET,
    }
})




export { handler as GET, handler as POST }

async function fakeLogin(email, password) {
    if (email === "demo@example.com" && password === "1234") {
        return {
            id: "1",
            name: "Demo User",
            email: "demo@example.com",
        }
    }
    return null
}