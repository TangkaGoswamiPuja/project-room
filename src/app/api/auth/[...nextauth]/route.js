import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';
const handler = NextAuth({
session:{
    strategy : "jwt"
},
providers: [
    CredentialsProvider({
        credentials: {
        email: {
            label: "Email",
            type: "text",
            required: true,
            placeholder: "your email",
            name : "email"

        },
        password: {
            label: "Password",
            type: "password",
            required: true,
            placeholder: "enter your password",
            name : "password"
        },
    },
    async authorize(credentials) {
        if (!credentials) {
            return null;
        }
        // Replace this with real user validation
        const user = { id: 1, email: credentials.email }; 
        if (user) {
            return user; // Must return a user object
        }
        return null; // Return null if user not found
    },
    

    }),
],
});
export {handler as GET , handler as POST};