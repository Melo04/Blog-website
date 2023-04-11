import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import connectMongo from '@/database/conn';
import Users from '@/model/Schema';
import { compare } from 'bcryptjs';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      id: "domain-login",
      name: "Credentials",
      async authorize(credentials, req) {
        const user = { id: 1, name: "helo", email: "helo@gmail.com", password: "hello987" };
        if (user) {
          return user;
        } else {
          throw new Error("No user found with this email, please Signup");
        }
      },
    }),
  ],
  session: {
    jwt: true,
  },
  jwt: {
    secret: "m4SzXaWrm5UFJHM2wz977YR3iiWj8/VEUxZjONUWHbA=",
  },
});