'use client'

import Create from '../SideMenu/Create/page';
import { modalState } from "@/app/RecoilContextProvider";
import { useRecoilState } from "recoil";
import { signOut, useSession, signIn } from "next-auth/react"
import { UserCircleIcon } from "@heroicons/react/24/outline";

const BottomMenu = () => {

    const home = <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 ml-5' height="1em" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" /></svg>
    const explore = <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 ml-5' height="1em" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm306.7 69.1L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" /></svg>
    const reels = <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 ml-5' height="1em" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9V168c0-8.7 4.7-16.7 12.3-20.9z" /></svg>
    const messages = <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 ml-5' height="1em" viewBox="0 0 512 512"><path d="M160 368c26.5 0 48 21.5 48 48v16l72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16V352c0 8.8 7.2 16 16 16h96zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3V474.7v-6.4V468v-4V416H112 64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0H448c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H309.3L208 492z" /></svg>

    const { data: session } = useSession();
    const [open, setOpen] = useRecoilState(modalState);

    const signInHandler = () => {
        if (session && session.user) {
            signOut("google")
        } else {
            signIn("google")
        }
    }

    return (
        <div>
            <div className="fixed left-0 bottom-0 w-full flex justify-center  items-center bg-slate-50 h-16 border-t-2 ">
                <div className='flex justify-between items-center w-full'>
                    <div className='flex justify-center items-center mx-auto'>{home} </div>
                    <div className='flex justify-center items-center mx-auto'>{explore} </div>
                    <div className='flex justify-center items-center mx-auto'>{reels} </div>
                    {session && session.user ? <><div className='flex justify-center items-center mx-auto cursor-pointer' onClick={() => setOpen(true)}><Create /> </div>
                        <div className='flex justify-center items-center mx-auto'>{messages} </div></> : ''}
                    <div className='flex justify-center items-center mx-auto cursor-pointer' onClick={signInHandler}>
                        {session && session.user ? <img src={session?.user?.image} className="rounded-full h-6 ml-5" alt="" /> : <UserCircleIcon className='w-6 h-6 ml-5' />}
                    </div>
                </div>
            </div>
        </div>);
}

export default BottomMenu;