'use client'

import { useSession } from "next-auth/react"
import { getServerSession } from "next-auth/next"
import { options } from './../../api/auth/[...nextauth]/options'
import { useRecoilState } from "recoil"
import Create from './Create/page'
import { modalState } from "@/app/RecoilContextProvider"


const SideBar =  () => {

    const home = <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 ml-5' height="1em" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" /></svg>
    const search = <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 ml-5' height="1em" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
    const explore = <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 ml-5' height="1em" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm306.7 69.1L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" /></svg>
    const reels = <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 ml-5' height="1em" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9V168c0-8.7 4.7-16.7 12.3-20.9z" /></svg>
    const messages = <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 ml-5' height="1em" viewBox="0 0 512 512"><path d="M160 368c26.5 0 48 21.5 48 48v16l72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16V352c0 8.8 7.2 16 16 16h96zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3V474.7v-6.4V468v-4V416H112 64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0H448c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H309.3L208 492z" /></svg>
    const notificatios = <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 ml-5' height="1em" viewBox="0 0 512 512"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" /></svg>
    const profile = <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 ml-5' height="1em" viewBox="0 0 512 512"><path d="M406.5 399.6C387.4 352.9 341.5 320 288 320H224c-53.5 0-99.4 32.9-118.5 79.6C69.9 362.2 48 311.7 48 256C48 141.1 141.1 48 256 48s208 93.1 208 208c0 55.7-21.9 106.2-57.5 143.6zm-40.1 32.7C334.4 452.4 296.6 464 256 464s-78.4-11.6-110.5-31.7c7.3-36.7 39.7-64.3 78.5-64.3h64c38.8 0 71.2 27.6 78.5 64.3zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-272a40 40 0 1 1 0-80 40 40 0 1 1 0 80zm-88-40a88 88 0 1 0 176 0 88 88 0 1 0 -176 0z" /></svg>
    const threads = <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 ml-5' height="1em" viewBox="0 0 448 512"><path d="M331.5 235.7c2.2 .9 4.2 1.9 6.3 2.8c29.2 14.1 50.6 35.2 61.8 61.4c15.7 36.5 17.2 95.8-30.3 143.2c-36.2 36.2-80.3 52.5-142.6 53h-.3c-70.2-.5-124.1-24.1-160.4-70.2c-32.3-41-48.9-98.1-49.5-169.6V256v-.2C17 184.3 33.6 127.2 65.9 86.2C102.2 40.1 156.2 16.5 226.4 16h.3c70.3 .5 124.9 24 162.3 69.9c18.4 22.7 32 50 40.6 81.7l-40.4 10.8c-7.1-25.8-17.8-47.8-32.2-65.4c-29.2-35.8-73-54.2-130.5-54.6c-57 .5-100.1 18.8-128.2 54.4C72.1 146.1 58.5 194.3 58 256c.5 61.7 14.1 109.9 40.3 143.3c28 35.6 71.2 53.9 128.2 54.4c51.4-.4 85.4-12.6 113.7-40.9c32.3-32.2 31.7-71.8 21.4-95.9c-6.1-14.2-17.1-26-31.9-34.9c-3.7 26.9-11.8 48.3-24.7 64.8c-17.1 21.8-41.4 33.6-72.7 35.3c-23.6 1.3-46.3-4.4-63.9-16c-20.8-13.8-33-34.8-34.3-59.3c-2.5-48.3 35.7-83 95.2-86.4c21.1-1.2 40.9-.3 59.2 2.8c-2.4-14.8-7.3-26.6-14.6-35.2c-10-11.7-25.6-17.7-46.2-17.8H227c-16.6 0-39 4.6-53.3 26.3l-34.4-23.6c19.2-29.1 50.3-45.1 87.8-45.1h.8c62.6 .4 99.9 39.5 103.7 107.7l-.2 .2zm-156 68.8c1.3 25.1 28.4 36.8 54.6 35.3c25.6-1.4 54.6-11.4 59.5-73.2c-13.2-2.9-27.8-4.4-43.4-4.4c-4.8 0-9.6 .1-14.4 .4c-42.9 2.4-57.2 23.2-56.2 41.8l-.1 .1z" /></svg>
    const more = <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 ml-5' height="1em" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
    // const menuTitle = ['Home', 'Search', 'Explore', 'Reels', 'Messages', 'Notifications', 'Create', 'Profile', 'Threads', 'More']
    // const menuIconsLeft = [home, search, explore, reels, messages, notificatios, Create, profile, threads, more]
    // const menuIconsBottom = [home, explore, reels, Create, messages, profile];

    const session = useSession(options);
    const [open, setOpen] = useRecoilState(modalState);

    // console.log(modalState.Create);
    console.log(open);
    console.log(session);
    
    return (
        <div className=" h-screen">
            <div className='w-full h-20 hidden xl:block pt-10 pl-5 '>
                <img className='w-28  h-auto ' src='https://th.bing.com/th/id/R.cd2b3b973a2d0abae68440b004408162?rik=sK9pHDx0a7m7jg&riu=http%3a%2f%2f2.bp.blogspot.com%2f-4pBaE9sDqjg%2fUYNzlT_tL9I%2fAAAAAAAAZck%2fPhzqPJx3le8%2fs1600%2fInstragram%2blogo.png&ehk=ZOXB2HBBimcrm%2fakCFvwsTMuHJbNdmNGO57a%2bem5nlc%3d&risl=&pid=ImgRaw&r=0' alt="instagram-logo" />
            </div>
            <div className='w-full h-20 flex items-center justify-center xl:hidden '>
                <img className='w-5 h-5 ' src='https://www.nicepng.com/png/full/1-14885_instagram-logo-transparent-instagram-logo-vector.png' alt="instagram-logo" />
            </div>
            <div className=''>
                <div className='flex items-center w-64 h-10 ml-2 mt-4' >
                    {home}
                    <p className='xl:block md:ml-5 hidden'>Home</p>
                </div>
                <div className='flex items-center w-64 h-10 ml-2 mt-4' >
                    {search}
                    <p className='xl:block md:ml-5 hidden'>Search</p>
                </div>
                <div className='flex items-center w-64 h-10 ml-2 mt-4' >
                    {explore}
                    <p className='xl:block md:ml-5 hidden'>Explore</p>
                </div>
                <div className='flex items-center w-64 h-10 ml-2 mt-4' >
                    {reels}
                    <p className='xl:block md:ml-5 hidden'>Reels</p>
                </div>
                {session.user ? <>
                    <div className='flex items-center w-64 h-10 ml-2 mt-4' >
                        {messages}
                        <p className='xl:block md:ml-5 hidden'>Message</p>
                    </div>
                    <div className='flex items-center w-64 h-10 ml-2 mt-4' >
                        {notificatios}
                        <p className='xl:block md:ml-5 hidden'>Notifications</p>
                    </div>
                    <div className='flex items-center w-64 h-10 ml-2 mt-4 cursor-pointer'
                    onClick={()=> setOpen(true)}
                    >
                        <Create/>
                        <p className='xl:block md:ml-5 hidden'>Create</p>
                    </div>
                    <div className='flex items-center w-64 h-10 ml-2 mt-4' >
                        {profile}
                        <p className='xl:block md:ml-5 hidden'>Profile</p>
                    </div>
                    <div className='flex items-center w-64 h-10 ml-2 mt-16' >
                        {threads}
                        <p className='xl:block md:ml-5 hidden'>Threads</p>
                    </div>
                    <div className='flex items-center w-64 h-10 ml-2 mt-4' >
                        {more}
                        <p className='xl:block md:ml-5 hidden'>More</p>
                    </div>
                </> : ''}
                
            </div>
        </div>
    );
}

export default SideBar;