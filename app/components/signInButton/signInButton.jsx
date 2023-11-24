'use client'

import {signIn , useSession} from 'next-auth/react'

const SignInButton = () => {
    const {data: session} = useSession();

    // console.log(session);
    
    if ( session && session.user) {
        return ( 
            <div>sign out</div>
         );
    }else{
        return (<div>
            <button onClick={()=> signIn("google")} className='bg-red-400 rounded-sm px-6 mt-10'>sign in</button>
        </div>)
    }
}
 
export default SignInButton;