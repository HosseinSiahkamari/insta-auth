import Stories from "../Stories/Stories"


const Header = () => {


    return (
        <div className="flex-col w-full md:w-full lg:w-full xl:w-full object-cover  mt-2 overflow-hidden">
            <div className="hidden md:block">
                <div className="flex border-b-2 bg-white my-3 ml-3 h-12">
                    <span className="h-12  flex items-center font-bold mx-1 whitespace-nowrap cursor-pointer">For you</span>
                    <span className="h-12  flex items-center font-bold mx-3 text-zinc-300 cursor-pointer">Following</span>
                </div>
            </div>
            <div className="block md:hidden w-full">
                <div className="flex border-b-2 justify-between items-center ml-3 h-12">
                    <button className="hidden sm:flex  items-center">
                        <span className="h-12  flex items-center text-2xl font-bold mx-1 whitespace-nowrap">For you</span>
                        <svg className="fill-zinc-400 mt-2 mx-2" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>
                    </button>
                    <div className="flex items-center sm:justify-end">
                        <div className="w-64 h-8 border flex rounded-lg items-center justify-start bg-zinc-100">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-1 text-gray-400 w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                            <input type="search" className="w-52 h-8 focus:outline-none border-none bg-inherit ring-zinc-900 mx-2 items-center" placeholder="Search" />
                        </div>
                        <svg className=' mx-3 h-6' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><style></style><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" /></svg>
                    </div>
                </div>
            </div>
            <div className="w-full mx-auto">
                <Stories />
            </div>
        </div>
    );
}

export default Header;