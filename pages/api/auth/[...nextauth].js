import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
    providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,            
        })
    ],
    database: process.env.MONGODB_URI,
    secret: process.env.SECRET,
    session:{
        jwt:true
    },
    jwt:{
        secret: process.env.JWT_SECRET
    },
    callbacks: {
        async session(session, token) {
        // expose user id
        return Promise.resolve({ ...session, user: { ...session.user, userId: token.sub } })
    }}
}

export default (req, res) => NextAuth( req, res, options);