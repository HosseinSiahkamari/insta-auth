'use client'

import {signIn, signOut, useSession} from 'next-auth/react'

const SignInButton = () => {
    const {data: session} = useSession();

    // console.log(session);
    
    if ( session && session.user) {
        return ( 
            <div>
                <button onClick={()=> signOut()} className='bg-red-400 rounded-sm px-6 mt-10'>Sign Out</button>
            </div>
         );
    }else{
        return (<div>
            <button onClick={()=> signIn("google")} className='bg-red-400 rounded-sm px-6 mt-10'>Sign In</button>
        </div>)
    }
}
 
export default SignInButton;