'use client'
import { useSession } from "next-auth/react";
import SignInButton from "../signInButton/signInButton";


const MiniProfile = () => {

    const { data: session } = useSession();
    const isImageAvailable = session?.user?.image;
    console.log(isImageAvailable);

    


    return (
        <div className="flex ml-10 h-12 w-full mt-10">
            <div className="flex justify-start h-12 w-2/3">
               {
                isImageAvailable &&  (<img
                src={isImageAvailable}
                className='ml-0 rounded-full h-12 w-12 cursor-pointer'
                alt='picture'
            />)
               }
                <p className='w-44 h-12 flex items-center text-sm ml-2 font-semibold cursor-pointer'>hossein</p>
            </div>
            <div className="w-1/3 h-12 flex items-center justify-center">
                <SignInButton />
            </div>
        </div>
    );
}

export default MiniProfile;