

import {options} from "./options";
import NextAuth from "next-auth/next";

// export const authOptions = {
    
//     providers: [
//         GoogleProvider({
//             clientId: process.env.GOOGLE_CLIENT_ID ?? "",
//             clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
//         }),
       
//     ],
    // callbacks: {
    //     async session({ session, token, user }) {
    //         session.user.username = session.user.username.splite(" ").join("").toLowerCase();
    //         session.user.uid = token.sub;
    //         return session
    //     }
    // }
// }

export const handler = NextAuth(options)

export {handler as GET, handler as POST}

// export default NextAuth(authOptions)


// import NextAuth from "next-auth"
// import GithubProvider from "next-auth/providers/github"

// export const authOptions = {
//   // Configure one or more authentication providers
//   providers: [
//     GithubProvider({
//       clientId: process.env.GITHUB_ID,
//       clientSecret: process.env.GITHUB_SECRET,
//     }),
//     // ...add more providers here
//   ],
// }

// export default NextAuth(authOptions)

// "use client";