import axios from "axios";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        identidad: {
          label: "Identidad",
          type: "text",
          placeholder: "identidad",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          const axiosConfig = axios.create({
            withCredentials: true,
            credentials: "include",
            baseURL: process.env.NEXT_PUBLIC_API_URL,
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          });
          const res = await axiosConfig.post(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}api/registro/login`,
            credentials
          );
          console.log("peticion", res.data.persona, res.jwt);
          return res.data;
        } catch (error) {
          console.error(error);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, ...persona }) {
      return { ...token, ...persona };
    },
    async session({ session, token }) {
      session = token;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
});

export { handler as GET, handler as POST };
