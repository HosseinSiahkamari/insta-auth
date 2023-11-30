'use client'

import {signIn, signOut, useSession} from 'next-auth/react'

const SignInButton = () => {
    const {data: session} = useSession();

    // console.log(session);
    
    if ( session && session.user) {
        return ( 
            <div>
                <button onClick={()=> signOut("google")} className='text-red-400 text-xs font-semibold cursor-pointer mr-2 flex items-center justify-end'>Sign Out</button>
            </div>
         );
    }else{
        return (<div>
            <button onClick={()=> signIn("google")} className='text-red-400 text-xs font-semibold cursor-pointer mr-2 flex items-center justify-end'>Sign In</button>
        </div>)
    }
}
 
export default SignInButton;