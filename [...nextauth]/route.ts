import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { authConfig } from '@/auth.config'

export const { handlers } = NextAuth({
...authConfig,
providers: [
Credentials({
credentials: {
email: { label: 'Email', type: 'email' },
password: { label: 'Password', type: 'password' },
},
async authorize(credentials) {
if (!credentials) return null

    const { email, password } = credentials as {
      email: string
      password: string
    }

    if (!email || !password) return null

    return {
      id: email,
      email: email,
    }
  },
}),


],
})

export const { GET, POST } = handlers