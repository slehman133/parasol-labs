import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { compare } from "bcrypt"
import prisma from "./db"

export const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt'
    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: {
                    label: 'Email',
                    type: 'email',
                    // placeholder: 'hello@example.com'
                },
                password: { label: 'Password', type: 'password' }
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials.password) {
                    return null
                }

                // find unique not working for some reason
                const user = await prisma.user.findFirst({
                    where: {
                        email: credentials.email
                    }
                })


                if (!user) {
                    return null
                }

                // const isPasswordValid = await compare(
                //     credentials.password,
                //     user.password
                // )

                console.log(user)

                const isPasswordValid = (user.password == credentials.password)

                if (!isPasswordValid) {
                    return null
                }

                return {
                    id: user.id + '',
                    email: user.email,
                    // name: user.name,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    randomKey: 'Hey cool',
                    isAdmin: user.isAdmin
                }
            }
        })
    ],
    callbacks: {
        session: ({ session, token }) => {
            console.log('Session Callback', { session, token })
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id,
                    randomKey: token.randomKey,
                    isAdmin: token.isAdmin
                }
            }
        },
        jwt: ({ token, user }) => {
            console.log('JWT Callback', { token, user })
            if (user) {
                const u = user as unknown as any
                return {
                    ...token,
                    id: u.id,
                    randomKey: u.randomKey,
                    isAdmin: u.isAdmin
                }
            }
            return token
        }
    }
}