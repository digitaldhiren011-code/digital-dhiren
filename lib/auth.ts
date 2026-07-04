import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const authOptions: NextAuthOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      name: "Admin",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const adminEmail = process.env.ADMIN_EMAIL;
        const passwordHash = process.env.ADMIN_PASSWORD_HASH;

        if (!credentials?.email || !credentials.password || !adminEmail || !passwordHash) {
          return null;
        }

        const emailMatches = credentials.email.toLowerCase() === adminEmail.toLowerCase();
        const passwordMatches = await bcrypt.compare(credentials.password, passwordHash);

        if (!emailMatches || !passwordMatches) {
          return null;
        }

        return { id: "admin", email: adminEmail, name: "Digital Dhiren Admin" };
      }
    })
  ],
  pages: {
    signIn: "/admin/login"
  }
};
